const fs = require('fs');
const path = require('path');

// 读取 games.js 获取游戏列表
function loadGames() {
    const content = fs.readFileSync('games.js', 'utf8');
    const match = content.match(/const games = \[\s*([\s\S]*?)\s*\];/);
    if (!match) {
        throw new Error("Could not find 'const games = [...]' in games.js");
    }

    const gamesContent = match[1];
    const games = new Function(`return [${gamesContent}];`)();
    return games;
}

function generateSitemap() {
    const games = loadGames();
    const baseUrl = 'https://h5game.lol';
    const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseUrl}/index.html</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${baseUrl}/about.html</loc>
        <lastmod>${now}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>${baseUrl}/privacy.html</loc>
        <lastmod>${now}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
`;

    // 获取现有文件名映射
    const gamesDir = 'games';
    const existingFiles = fs.readdirSync(gamesDir);
    const idToFilename = {};

    existingFiles.forEach(f => {
        if (f.endsWith('.html')) {
            const parts = f.split('-');
            const lastPart = parts[parts.length - 1];
            const id = parseInt(lastPart.replace('.html', ''));
            if (!isNaN(id)) {
                idToFilename[id] = f;
            }
        }
    });

    // 为每个游戏生成 URL
    games.forEach(game => {
        let filename;
        if (idToFilename[game.id]) {
            filename = idToFilename[game.id];
        } else {
            const slug = game.title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
            filename = `${slug}-${game.id}.html`;
        }

        xml += `    <url>
        <loc>${baseUrl}/games/${filename}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
`;
    });

    xml += `</urlset>`;

    fs.writeFileSync('sitemap.xml', xml, 'utf8');
    console.log(`✅ Sitemap generated with ${games.length + 4} URLs`);
    console.log(`📅 Last modified date: ${now}`);
}

generateSitemap();
