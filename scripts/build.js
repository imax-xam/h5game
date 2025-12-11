const fs = require('fs');
const path = require('path');

// 1. 读取 games.js 文件内容
// 由于 games.js 是前端 JS 文件，包含 `const games = [...]`，我们不能直接 require。
// 这里使用正则粗暴提取 data，或者临时通过 eval 执行。为了稳健，我们读取文件并 mock 环境。
const gamesJsContent = fs.readFileSync(path.join(__dirname, '../games.js'), 'utf8');

// Mock 环境来执行 games.js 中的代码并获取 games 数组
const context = {};
// 简单的 eval 模拟，只提取 games 数组部分
// 找到 const games = [...] 的部分
const startToken = 'const games = [';
const startIndex = gamesJsContent.indexOf(startToken);
if (startIndex === -1) {
    console.error('Error: Could not find "const games = [" in games.js');
    process.exit(1);
}

// 找到数组结束的位置 (假设它是文件最后的主要部分，或者我们手动匹配括号)
// 为了简单，我们只截取数组部分。更稳健的方法是使用 VM 或正则表达式提取 JSON。
// 这里我们尝试提取整个 games 数组的文本并在 node 中执行。
// 注意：games.js 中可能有其他代码，我们需要小心。
// 让我们尝试解析出对象。
// 我们可以把 games.js 修改为 module.exports = ... 但这破坏了前端。
// 我们采用简单的方法：用正则把 `const games = ` 替换为 `module.exports = ` 然后保存为临时文件 require。

const tempJsPath = path.join(__dirname, 'temp_games_data.js');
// 提取 games 数组定义的文本。为了避免执行 DOM 操作代码，我们只提取 games 变量定义。
// 假设 games 定义结束于 `];`
let arrayContent = gamesJsContent.substring(startIndex);
// 找到对应的结束分号
// 简单的假设：数组定义之后就是 helper functions
// 我们查找下一个 `const ` 或 `function ` 或文件结束
// 更好的方法：直接在该作用域下 eval 整个文件内容（mock window/document）
const mockWindow = {
    i18n: {},
    t: (k) => k
};

// 重写 content 以适应 Node 环境
// 移除 DOM 操作和 window 引用，只保留 data
// 这是一个 hacky 的方法，但在不改变源码的情况下最快。
// 正则匹配 `const games = [...]`
const match = gamesJsContent.match(/const games = \[\s*([\s\S]*?)\];/);
if (!match) {
    console.error("Failed to extract games array via Regex");
    process.exit(1);
}

// 构造一个合法的 JS 数组字符串
const gamesDataStr = match[0].replace('const games = ', '');
// 使用 eval 获取数据 (在信任本地代码的前提下)
let games = [];
try {
    games = eval(gamesDataStr);
    console.log(`Loaded ${games.length} games.`);
} catch (e) {
    console.error("Error parsing games data:", e);
    process.exit(1);
}

// 2. 读取 play.html 模板
const templatePath = path.join(__dirname, '../play.html');
let template = fs.readFileSync(templatePath, 'utf8');

// 3. 准备输出目录
const outputDir = path.join(__dirname, '../games');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// 4. 生成每个游戏的静态页面
let sitemapUrls = [];
const baseUrl = 'https://h5game.lol'; // 替换为你的实际域名

// slugify 辅助函数
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

games.forEach(game => {
    // 生成 Slug
    let slug = slugify(game.title);
    // 防止重名 (简单处理，假设 ID 唯一，我们可以加 ID 后缀如果冲突，或者相信 title 唯一)
    // 这里为了 SEO，文件名越干净越好。如果有重复，加 ID。
    const fileName = `${slug}-${game.id}.html`;
    const filePath = path.join(outputDir, fileName);
    const fileUrl = `${baseUrl}/games/${fileName}`;
    sitemapUrls.push(fileUrl);

    // 修改模板内容
    let html = template;

    // 4.1 注入 Meta Data (SEO 核心)
    // Title
    const titlePart = game.titleZh ? `${game.title} (${game.titleZh})` : game.title;
    const pageTitle = `${titlePart} - Play Free Online Game`;
    html = html.replace('<title>Zombie Waves 2 - Play Free Online Game</title>', `<title>${pageTitle}</title>`) // Template has specific title now? No, the template in line 65 reads play.html
        .replace('<title>Playing - H5 Game Station</title>', `<title>${pageTitle}</title>`); // Handle both cases just in case template changed locally or I misremembered

    // Meta Description
    let metaDesc = game.desc || `Play ${game.title} online for free. No download required. ${game.category} game.`;
    if (game.descZh) {
        metaDesc = `${metaDesc} ${game.descZh}`;
    }
    // 替换现有的 description meta，或者如果没有，插入新的
    if (html.includes('<meta name="description"')) {
        html = html.replace(/<meta name="description"[\s\S]*?>/, `<meta name="description" content="${metaDesc.replace(/"/g, '&quot;')}">`);
    } else {
        html = html.replace('</head>', `<meta name="description" content="${metaDesc.replace(/"/g, '&quot;')}">\n</head>`);
    }

    // Canonical URL (防止重复内容)
    const canonicalLink = `<link rel="canonical" href="${fileUrl}">`;
    html = html.replace('</head>', `${canonicalLink}\n</head>`);

    // 4.2 修正相对路径 (因为文件在 games/ 目录下)
    // style.css -> ../style.css
    html = html.replace('href="style.css"', 'href="../style.css"');
    // games.js -> ../games.js
    html = html.replace('src="games.js"', 'src="../games.js"');
    // index.html -> ../index.html (Logo & Back button)
    html = html.replace(/href="index\.html"/g, 'href="../index.html"');
    // 如果有本地图片 images/ -> ../images/ (目前主要是CDN，但以防万一)
    html = html.replace(/src="images\//g, 'src="../images/');

    // 4.2 注入游戏数据到 JS
    // 我们需要通过 JS 告诉页面 "当前是哪个游戏"，而不需要读取 URL 参数
    // 我们可以注入一段 script 在 head 里
    const injectScript = `
    <script>
        // Pre-injected game ID by build script
        window.PRELOADED_GAME_ID = ${game.id};
    </script>
    `;
    html = html.replace('<head>', `<head>\n${injectScript}`);

    // 保存文件
    fs.writeFileSync(filePath, html);
    // console.log(`Generated: ${fileName}`);
});

console.log(`Successfully generated ${games.length} static game pages.`);

// 5. 生成 Sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseUrl}/index.html</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
${sitemapUrls.map(url => `    <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemapContent);
console.log('Generated sitemap.xml');

// 6. 生成 robots.txt (如果不存在)
const robotsPath = path.join(__dirname, '../robots.txt');
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(robotsPath, robotsContent);
console.log('Generated robots.txt');

