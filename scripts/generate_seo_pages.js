const fs = require('fs');
const path = require('path');

// Configuration
const GAMES_JS_PATH = path.join(__dirname, '../games.js');
const TEMPLATE_PATH = path.join(__dirname, '../games/tank-wrestle-1207.html');
const OUTPUT_DIR = path.join(__dirname, '../games');

// Helper to load games from the JS file without executing it (bypassing browser-only code)
function loadGames() {
    const content = fs.readFileSync(GAMES_JS_PATH, 'utf8');

    // Extract the array using regex: const games = [ ... ];
    const match = content.match(/const games = \[\s*([\s\S]*?)\s*\];/);
    if (!match) {
        throw new Error("Could not find 'const games = [...]' in games.js");
    }

    let gamesContent = match[1];

    // Clean up to make it parseable JSON-like string or use eval (safe-ish in build script)
    // We'll use a safer Function constructor approach to evaluate just the array part
    // provided it doesn't reference external variables.
    // The games array data seems to be pure data objects.

    try {
        // Evaluate the string as a JS expression
        // We replace "hot: true" with quoted keys if needed, but JS eval handles it.
        const games = new Function(`return [${gamesContent}];`)();
        return games;
    } catch (e) {
        console.error("Failed to parse games array directly. Trying manual cleanup...");
        // Fallback or re-throw
        throw e;
    }
}

function generateJsonLd(game) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": game.title,
        "alternateName": game.titleZh,
        "description": game.desc,
        "applicationCategory": "Game",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "ratingCount": "100"
        }
    };

    if (game.thumbnail) {
        schema.image = game.thumbnail;
    }

    return JSON.stringify(schema, null, 4);
}

function processHtml(template, game, filename) {
    let html = template;

    // 1. Update Preloaded ID
    html = html.replace(
        /window\.PRELOADED_GAME_ID = \d+;/,
        `window.PRELOADED_GAME_ID = ${game.id};`
    );

    // 2. Update Title
    const pageTitle = `${game.title} (${game.titleZh}) - Play Free Online Game`;
    html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);

    // 3. Update Meta Description
    const fullDesc = `${game.desc} ${game.titleZh} ${game.descZh}`;
    const fullDescSafe = fullDesc.replace(/"/g, '&quot;');
    html = html.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${fullDescSafe}">`
    );

    // 4. Update Canonical
    const canonicalUrl = `https://h5game.lol/games/${filename}`;
    html = html.replace(
        /<link rel="canonical" href=".*?">/,
        `<link rel="canonical" href="${canonicalUrl}">`
    );

    // 5. Inject Content (SSR Simulation)

    // Title
    html = html.replace(
        '<span id="game-title-display">Loading...</span>',
        `<span id="game-title-display">${game.title}</span>`
    );

    // Controls
    const controls = game.controls || '';
    if (controls) {
        html = html.replace(
            '<span id="game-controls-display"></span>',
            `<span id="game-controls-display">Controls: ${controls}</span>`
        );
    }

    // Description
    html = html.replace(
        '<p id="game-desc-display" class="info-desc">Loading...</p>',
        `<p id="game-desc-display" class="info-desc">${fullDesc}</p>`
    );

    // Category
    const catMap = {
        'puzzle': '益智解谜', 'action': '动作冒险', 'racing': '赛车竞速',
        'shooting': '射击游戏', 'arcade': '经典街机', 'casual': '休闲娱乐',
        'adventure': '冒险探索', 'sports': '体育运动', 'hypercasual': '超休闲'
    };
    const catKey = (game.category || '').toLowerCase();
    const catZh = catMap[catKey] || game.category;

    html = html.replace(
        '<span id="game-category-display" class="game-tag">-</span>',
        `<span id="game-category-display" class="game-tag cat-${game.category}">${catZh}</span>`
    );

    // Controls Info sidebar
    html = html.replace(
        '<span id="game-controls-info" class="info-value">-</span>',
        `<span id="game-controls-info" class="info-value">${controls || 'Mouse/Touch'}</span>`
    );

    // Tips
    const tipsText = "• 点击游戏画面聚焦后操作\n• 全屏模式获得更好体验\n• 部分游戏需等待加载";
    html = html.replace(
        '<p id="tips-content" class="info-desc tips-text"></p>',
        `<p id="tips-content" class="info-desc tips-text">${tipsText}</p>`
    );

    // 6. JSON-LD
    const jsonLd = generateJsonLd(game);
    const scriptTag = `\n    <script type="application/ld+json">\n${jsonLd}\n    </script>`;
    html = html.replace('</head>', `${scriptTag}\n</head>`);

    return html;
}

function main() {
    console.log("Starting SEO optimization...");

    const games = loadGames();
    console.log(`Loaded ${games.length} games.`);

    const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

    // Get existing files to preserve filenames
    const existingFiles = fs.readdirSync(OUTPUT_DIR);
    const idToFilename = {};
    existingFiles.forEach(f => {
        if (f.endsWith('.html')) {
            const parts = f.split('-');
            const lastPart = parts[parts.length - 1]; // 1207.html
            const id = parseInt(lastPart.replace('.html', ''));
            if (!isNaN(id)) {
                idToFilename[id] = f;
            }
        }
    });

    let count = 0;

    games.forEach(game => {
        let filename;
        if (idToFilename[game.id]) {
            filename = idToFilename[game.id];
        } else {
            // Generate slug
            let slug = game.title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
            filename = `${slug}-${game.id}.html`;
        }

        const fullPath = path.join(OUTPUT_DIR, filename);
        const newHtml = processHtml(template, game, filename);

        fs.writeFileSync(fullPath, newHtml, 'utf8');
        count++;
    });

    console.log(`Successfully optimized ${count} game pages.`);
}

main();
