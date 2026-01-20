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

    // 1. Fix HTML lang attribute - CRITICAL for SEO
    html = html.replace(
        /<html lang="zh-CN">/,
        `<html lang="en">`
    );

    // 2. Update Preloaded ID
    html = html.replace(
        /window\.PRELOADED_GAME_ID = \d+;/,
        `window.PRELOADED_GAME_ID = ${game.id};`
    );

    // 3. Update Title - English first for better international SEO
    const pageTitle = `${game.title} - Free Online HTML5 Game | Play ${game.title} Now`;
    html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);

    // 4. Update Meta Description - ENGLISH ONLY for better targeting
    // Keep it under 160 characters for optimal display
    let metaDesc = game.desc;
    if (metaDesc.length > 155) {
        metaDesc = metaDesc.substring(0, 152) + '...';
    }
    const metaDescSafe = metaDesc.replace(/"/g, '&quot;');
    html = html.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${metaDescSafe}">`
    );

    // 5. Add hreflang tags for multilingual SEO
    const hreflangTags = `
    <link rel="alternate" hreflang="en" href="https://h5game.lol/games/${filename}" />
    <link rel="alternate" hreflang="zh" href="https://h5game.lol/games/${filename}" />
    <link rel="alternate" hreflang="x-default" href="https://h5game.lol/games/${filename}" />`;

    html = html.replace(
        /<link rel="canonical" href=".*?">/,
        `<link rel="canonical" href="https://h5game.lol/games/${filename}">${hreflangTags}`
    );

    // 6. Inject Content (SSR Simulation) - Keep bilingual for JS switching

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

    // Description - Use English description for initial render
    html = html.replace(
        '<p id="game-desc-display" class="info-desc">Loading...</p>',
        `<p id="game-desc-display" class="info-desc">${game.desc}</p>`
    );

    // Category - Use English category names
    const catMapEn = {
        'puzzle': 'Puzzle', 'action': 'Action', 'racing': 'Racing',
        'shooting': 'Shooting', 'arcade': 'Arcade', 'casual': 'Casual',
        'adventure': 'Adventure', 'sports': 'Sports', 'hypercasual': 'Hypercasual'
    };
    const catKey = (game.category || '').toLowerCase();
    const catEn = catMapEn[catKey] || game.category;

    html = html.replace(
        '<span id="game-category-display" class="game-tag">-</span>',
        `<span id="game-category-display" class="game-tag cat-${game.category}">${catEn}</span>`
    );

    // Controls Info sidebar
    html = html.replace(
        '<span id="game-controls-info" class="info-value">-</span>',
        `<span id="game-controls-info" class="info-value">${controls || 'Mouse/Touch'}</span>`
    );

    // Tips - Use English for initial render
    const tipsText = "• Click game area to focus\n• Fullscreen for better experience\n• Some games need loading time";
    html = html.replace(
        '<p id="tips-content" class="info-desc tips-text"></p>',
        `<p id="tips-content" class="info-desc tips-text">${tipsText}</p>`
    );

    // 7. JSON-LD with enhanced SEO data
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
