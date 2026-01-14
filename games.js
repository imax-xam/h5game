// ========================================
// 多语言支持 (Internationalization)
// ========================================
const i18n = {
    zh: {
        siteTitle: 'H5 游戏小站',
        siteSubtitle: '免费在线游戏',
        gamesCount: '款免费游戏',
        showingGames: '显示',
        allGames: '全部游戏',
        puzzle: '益智解谜',
        action: '动作冒险',
        racing: '赛车竞速',
        shooting: '射击游戏',
        arcade: '经典街机',
        casual: '休闲娱乐',
        adventure: '冒险探索',
        sports: '体育运动',
        hypercasual: '超休闲',
        loadMore: '加载更多',
        backToList: '← 返回列表',
        backHome: '← 返回首页',
        fullscreen: '全屏',
        landscapeFullscreen: '横屏全屏',
        exitFullscreen: '退出全屏',
        gameInfo: '游戏信息',
        category: '分类',
        controls: '操作',
        tips: '操作提示',
        tipContent: '• 点击游戏画面聚焦后操作\n• 全屏模式获得更好体验\n• 部分游戏需等待加载',
        sourceLink: '源站直达',
        loading: '游戏加载中...',
        moreGames: '更多游戏',
        footer: '所有游戏版权归原作者所有',
        privacy: '隐私政策',
        about: '关于我们',
        gameNotFound: '找不到该游戏',
        clickToPlay: '点击开始游戏',

        // New Sections
        dailyPicks: '📅 今日推荐',
        hotGames: '🔥 热门游戏',
        recentlyPlayed: '🕒 最近玩过',
        walkthrough: '🎬 游戏攻略',

        // Search
        searchPlaceholder: '搜索游戏...',
        searchNoResult: '未找到',
        searchTryThese: '试试这些：',

        // About Page
        aboutTitle: '关于 H5 Game Station',
        aboutWhoTitle: '🎮 我们是谁',
        aboutWhoDesc: 'H5 Game Station 是一个免费的 HTML5 游戏聚合平台。我们致力于为玩家提供最好的网页游戏体验 - 无需下载，即点即玩。',
        aboutMissionTitle: '🎯 我们的使命',
        aboutMissionDesc: '在这个时代，我们相信游戏应该是简单易得的。无论你是在午休时间想放松一下，还是在等待公交时打发时间，H5 Game Station 都能让你在任何设备上即时享受游戏乐趣。',
        aboutFeatureTitle: '✨ 特色功能',
        aboutFeatures: '<li><strong>免费游玩</strong> - 所有游戏完全免费</li><li><strong>无需下载</strong> - 基于 HTML5，浏览器直接运行</li><li><strong>跨平台</strong> - 电脑、手机、平板都能玩</li><li><strong>多种类型</strong> - 益智、动作、赛车、射击等丰富分类</li><li><strong>持续更新</strong> - 定期添加新游戏</li>',
        aboutContactTitle: '📧 联系我们',
        aboutContactDesc: '有问题、建议或合作意向？欢迎联系我们：',
        aboutCopyrightTitle: '⚖️ 版权声明',
        aboutCopyrightDesc: '本站所有游戏版权归各自原作者所有。我们仅提供游戏链接聚合服务。如果您是游戏开发者，希望移除或添加您的游戏，请与我们联系。',

        // Privacy Page
        privacyTitle: '隐私政策',
        privacyUpdate: '最后更新日期：2024年12月',
        privacyInfoTitle: '1. 信息收集',
        privacyInfoDesc: '我们的网站不会主动收集您的个人身份信息。我们可能通过以下方式收集匿名数据：',
        privacyInfoList: '<li>网站访问统计（通过 Google Analytics 等服务）</li><li>浏览器类型和设备信息</li><li>游戏偏好数据（存储在您的本地浏览器中）</li>',
        privacyCookieTitle: '2. Cookie 使用',
        privacyCookieDesc: '本网站使用 Cookie 来改善您的浏览体验。这些 Cookie 用于：',
        privacyCookieList: '<li>记住您的游戏进度和偏好设置</li><li>提供相关广告（通过 Google AdSense）</li><li>分析网站流量和使用模式</li>',
        privacyThirdTitle: '3. 第三方服务',
        privacyThirdDesc: '我们的网站嵌入了来自第三方的 HTML5 游戏。这些游戏可能有其自己的隐私政策。我们建议您查阅各游戏提供商的隐私条款。',
        privacyAdDesc: '我们使用 Google AdSense 展示广告。Google 可能会使用 Cookie 来提供基于您兴趣的广告。您可以通过访问 <a href="https://www.google.com/settings/ads" target="_blank" style="color: var(--primary);">Google 广告设置</a> 来管理您的广告偏好。',
        privacyDataTitle: '4. 数据存储',
        privacyDataDesc: '您的游戏分数和偏好设置存储在您的本地浏览器 (LocalStorage) 中，我们不会将这些数据上传到我们的服务器。',
        privacyKidsTitle: '5. 儿童隐私',
        privacyKidsDesc: '本网站不会故意收集 13 岁以下儿童的个人信息。如果您是家长或监护人，发现您的孩子向我们提供了个人信息，请与我们联系。',
        privacyContactTitle: '6. 联系我们',
        privacyContactDesc: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：'
    },
    en: {
        siteTitle: 'H5 Game Station',
        siteSubtitle: 'Free Online Games',
        gamesCount: 'Free Games',
        showingGames: 'Showing',
        allGames: 'All Games',
        puzzle: 'Puzzle',
        action: 'Action',
        racing: 'Racing',
        shooting: 'Shooting',
        arcade: 'Arcade',
        casual: 'Casual',
        adventure: 'Adventure',
        sports: 'Sports',
        hypercasual: 'Hypercasual',
        loadMore: 'Load More',
        backToList: '← Back',
        backHome: '← Home',
        fullscreen: 'Fullscreen',
        landscapeFullscreen: 'Landscape',
        exitFullscreen: 'Exit',
        gameInfo: 'Game Info',
        category: 'Category',
        controls: 'Controls',
        tips: 'Tips',
        tipContent: '• Click game area to focus\n• Fullscreen for better experience\n• Some games need loading time',
        sourceLink: 'Play on Source',
        loading: 'Loading...',
        moreGames: 'More Games',
        footer: 'All games © their respective owners',
        privacy: 'Privacy',
        about: 'About',
        gameNotFound: 'Game not found',
        clickToPlay: 'Click to Play',

        // New Sections
        dailyPicks: '📅 Daily Picks',
        hotGames: '🔥 Hot Games',
        recentlyPlayed: '🕒 Recently Played',
        walkthrough: '🎬 Walkthrough',

        // Search
        searchPlaceholder: 'Search games...',
        searchNoResult: 'No results for',
        searchTryThese: 'Try these:',

        // About Page
        aboutTitle: 'About H5 Game Station',
        aboutWhoTitle: '🎮 Who We Are',
        aboutWhoDesc: 'H5 Game Station is a free HTML5 game aggregator platform. We are dedicated to providing players with the best web gaming experience - play instantly without download.',
        aboutMissionTitle: '🎯 Our Mission',
        aboutMissionDesc: 'In this era, we believe games should be easily accessible. Whether you want to relax during lunch break or kill time waiting for the bus, H5 Game Station lets you enjoy games instantly on any device.',
        aboutFeatureTitle: '✨ Features',
        aboutFeatures: '<li><strong>Free to Play</strong> - All games are completely free</li><li><strong>No Download</strong> - HTML5 based, runs directly in browser</li><li><strong>Cross Platform</strong> - Play on PC, mobile, and tablet</li><li><strong>Various Genres</strong> - Puzzle, Action, Racing, Shooting and more</li><li><strong>Continuous Updates</strong> - New games added regularly</li>',
        aboutContactTitle: '📧 Contact Us',
        aboutContactDesc: 'Questions, suggestions, or cooperation? Contact us:',
        aboutCopyrightTitle: '⚖️ Copyright',
        aboutCopyrightDesc: 'All games on this site are copyright of their respective owners. We only provide game link aggregation services. If you are a game developer and wish to remove or add your game, please contact us.',

        // Privacy Page
        privacyTitle: 'Privacy Policy',
        privacyUpdate: 'Last Updated: December 2024',
        privacyInfoTitle: '1. Information Collection',
        privacyInfoDesc: 'Our website does not actively collect your personal identifiable information. We may collect anonymous data through:',
        privacyInfoList: '<li>Website access statistics (via Google Analytics etc.)</li><li>Browser type and device information</li><li>Game preference data (stored in your local browser)</li>',
        privacyCookieTitle: '2. Cookie Usage',
        privacyCookieDesc: 'This website uses Cookies to improve your browsing experience. These Cookies are used to:',
        privacyCookieList: '<li>Remember your game progress and preferences</li><li>Deliver relevant ads (via Google AdSense)</li><li>Analyze website traffic and usage patterns</li>',
        privacyThirdTitle: '3. Third-Party Services',
        privacyThirdDesc: 'Our website embeds HTML5 games from third parties. These games may have their own privacy policies. We recommend reviewing the privacy terms of each game provider.',
        privacyAdDesc: 'We use Google AdSense to display ads. Google may use Cookies to serve ads based on your interests. You can manage your ad preferences by visiting <a href="https://www.google.com/settings/ads" target="_blank" style="color: var(--primary);">Google Ad Settings</a>.',
        privacyDataTitle: '4. Data Storage',
        privacyDataDesc: 'Your game scores and preferences are stored in your local browser (LocalStorage), and we do not upload this data to our servers.',
        privacyKidsTitle: '5. Children Privacy',
        privacyKidsDesc: 'We do not knowingly collect personal information from children under 13. If you are a parent or guardian and discover that your child has provided us with personal information, please contact us.',
        privacyContactTitle: '6. Contact Us',
        privacyContactDesc: 'If you have any questions about this Privacy Policy, please contact us via:'
    }
};

// 当前语言
const savedLang = localStorage.getItem('lang');
const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
let currentLang = savedLang || (browserLang.startsWith('zh') ? 'zh' : 'en');

// 获取翻译
function t(key) {
    return i18n[currentLang]?.[key] || i18n.en[key] || key;
}

// 切换语言
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    location.reload();
}

// ========================================
// 分类映射
// ========================================
const categoryMap = {
    'all': () => t('allGames'),
    'puzzle': () => t('puzzle'),
    'action': () => t('action'),
    'racing': () => t('racing'),
    'shooting': () => t('shooting'),
    'arcade': () => t('arcade'),
    'casual': () => t('casual'),
    'adventure': () => t('adventure'),
    'sports': () => t('sports'),
    'hypercasual': () => t('hypercasual')
};

function getCategoryName(cat) {
    return categoryMap[cat] ? categoryMap[cat]() : cat;
}

// ========================================
// 真实可用的游戏数据 (已验证)
// ========================================
const games = [
    // === 益智解谜 (Puzzle) ===
    {
        id: 101,
        title: "Hexa Merge 2048",
        titleZh: "六边形合成2048",
        desc: "Merge colorful hexagon tiles to reach 2048!",
        descZh: "合并彩色六边形方块，挑战2048！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/5r7akvnmm0t25uang36jgu02fek7qqr5/512x384.jpg",
        url: "https://html5.gamemonetize.com/5r7akvnmm0t25uang36jgu02fek7qqr5/",
        controls: "Mouse click or tap",
        hot: true
    },
    {
        id: 102,
        title: "Sokoban Push The Box",
        titleZh: "推箱子",
        desc: "Classic box-pushing puzzle game.",
        descZh: "经典推箱子益智游戏。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/1my1qdjwu871fk0992pvyobmnlu40t7n/512x384.jpg",
        url: "https://html5.gamemonetize.com/1my1qdjwu871fk0992pvyobmnlu40t7n/",
        controls: "Mouse click or tap"
    },
    {
        id: 103,
        title: "Tic Tac Toe Sprunki",
        titleZh: "井字棋",
        desc: "Classic tic-tac-toe with cute characters!",
        descZh: "经典井字棋对战，可爱角色！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/cejcp4vy4nc1lkflrx8jrpfcixw7e37b/512x384.jpg",
        url: "https://html5.gamemonetize.com/cejcp4vy4nc1lkflrx8jrpfcixw7e37b/",
        controls: "Mouse click"
    },
    {
        id: 104,
        title: "Jewel Blaster",
        titleZh: "宝石消消乐",
        desc: "Match 3 jewels to blast them away!",
        descZh: "消除3个相同宝石，获得高分！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/5cpk92w126p8iu19sohpil125cqrcwar/512x384.jpg",
        url: "https://html5.gamemonetize.com/5cpk92w126p8iu19sohpil125cqrcwar/",
        controls: "Mouse drag",
        hot: true
    },
    {
        id: 105,
        title: "Bear Ball Master",
        titleZh: "小熊泡泡龙",
        desc: "Pop bubbles and save the Honey Kingdom!",
        descZh: "射击泡泡，拯救蜂蜜王国！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/aur96p0aeocgnl7bo82mjy6pvmw3fbuo/512x384.jpg",
        url: "https://html5.gamemonetize.com/aur96p0aeocgnl7bo82mjy6pvmw3fbuo/",
        controls: "Mouse click"
    },
    {
        id: 106,
        title: "Pipe Connect Puzzle",
        titleZh: "水管连接",
        desc: "Connect pipes to let water flow!",
        descZh: "连接水管让水流通过！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/yjp4brcxapqbz5bsjcblsh4btx3kl4ey/512x384.jpg",
        url: "https://html5.gamemonetize.com/yjp4brcxapqbz5bsjcblsh4btx3kl4ey/",
        controls: "Mouse click"
    },
    {
        id: 107,
        title: "Link Flow",
        titleZh: "连线消除",
        desc: "Connect dots with lines to solve puzzles.",
        descZh: "用线条连接圆点解决谜题。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/dyz43tu8xyxu9d1o2f2loe20o8vijrki/512x384.jpg",
        url: "https://html5.gamemonetize.com/dyz43tu8xyxu9d1o2f2loe20o8vijrki/",
        controls: "Mouse drag"
    },
    {
        id: 108,
        title: "Box Magician",
        titleZh: "魔法箱子",
        desc: "Halloween physics puzzle - help the witch!",
        descZh: "万圣节物理解谜，帮助小女巫！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/auevh1h61qj97qp28g7m9fs2jb89vplj/512x384.jpg",
        url: "https://html5.gamemonetize.com/auevh1h61qj97qp28g7m9fs2jb89vplj/",
        controls: "Mouse click"
    },
    {
        id: 109,
        title: "Color Jam 3D",
        titleZh: "颜色果酱",
        desc: "Match crayons to fill colorful pictures!",
        descZh: "匹配蜡笔填充彩色图画！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/jwsdzxshoezui2jlv4sd1gf5x5jkrx57/512x384.jpg",
        url: "https://html5.gamemonetize.com/jwsdzxshoezui2jlv4sd1gf5x5jkrx57/",
        controls: "Tap to play"
    },

    // === 街机游戏 (Arcade) ===
    {
        id: 201,
        title: "Rocket Fest",
        titleZh: "火箭派对",
        desc: "Control rocket to collect energy and bomb targets!",
        descZh: "控制火箭收集能量并轰炸目标！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/q5b8pfuo0rhucj7un9t3pzr94vh5oc8x/512x384.jpg",
        url: "https://html5.gamemonetize.com/q5b8pfuo0rhucj7un9t3pzr94vh5oc8x/",
        controls: "Mouse click",
        hot: true
    },
    {
        id: 202,
        title: "GoldRush",
        titleZh: "淘金热",
        desc: "Endless runner - dodge rocks, grab gold!",
        descZh: "跑酷游戏 - 躲避岩石，收集金子！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/qezo7d10nv4d2pblyf8i7idbqji1bsog/512x384.jpg",
        url: "https://html5.gamemonetize.com/qezo7d10nv4d2pblyf8i7idbqji1bsog/",
        controls: "A/D or Arrow keys"
    },
    {
        id: 203,
        title: "Fuji Leapers",
        titleZh: "青蛙跳跃",
        desc: "Help the frog leap and defeat bees!",
        descZh: "帮助青蛙跳跃消灭蜜蜂！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ugfvau20g5koj55czd4e63rqyhbovib1/512x384.jpg",
        url: "https://html5.gamemonetize.com/ugfvau20g5koj55czd4e63rqyhbovib1/",
        controls: "Mouse click"
    },
    {
        id: 204,
        title: "Ghost Shift",
        titleZh: "幽灵切换",
        desc: "Switch between human and ghost to survive!",
        descZh: "切换人类和幽灵模式生存！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/exfdtiqpclhki6mvuiq1f6628eln6383/512x384.jpg",
        url: "https://html5.gamemonetize.com/exfdtiqpclhki6mvuiq1f6628eln6383/",
        controls: "Space to jump, S to switch"
    },
    {
        id: 205,
        title: "Cubic Rush",
        titleZh: "方块冲刺",
        desc: "Fast-paced endless runner with a cube!",
        descZh: "方块跑酷，躲避障碍！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/a84nnc8v9ds5z1qkgmfgti532to875sl/512x384.jpg",
        url: "https://html5.gamemonetize.com/a84nnc8v9ds5z1qkgmfgti532to875sl/",
        controls: "Space to jump",
        hot: true
    },
    {
        id: 206,
        title: "Monster City",
        titleZh: "怪兽城市",
        desc: "Play as Godzilla and save the city!",
        descZh: "扮演哥斯拉保卫城市！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/qwyxt4jx6byoc7gnl0gf01e82cab94jf/512x384.jpg",
        url: "https://html5.gamemonetize.com/qwyxt4jx6byoc7gnl0gf01e82cab94jf/",
        controls: "Mouse click"
    },

    // === 赛车竞速 (Racing) ===
    {
        id: 301,
        title: "Car Line Rider",
        titleZh: "霓虹赛车",
        desc: "Neon car racing - avoid trails!",
        descZh: "霓虹赛车，避开车迹轨道！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/7awyv0ytowhmcvd83lyhr7p9acvtd3kn/512x384.jpg",
        url: "https://html5.gamemonetize.com/7awyv0ytowhmcvd83lyhr7p9acvtd3kn/",
        controls: "Arrow keys",
        hot: true
    },
    {
        id: 302,
        title: "Ocean Drift",
        titleZh: "海洋漂移",
        desc: "Race boats across the waves!",
        descZh: "驾驶快艇在海浪中竞速！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/udotd1qgzo8n65v43606opsfcz48j1fp/512x384.jpg",
        url: "https://html5.gamemonetize.com/udotd1qgzo8n65v43606opsfcz48j1fp/",
        controls: "Arrow keys"
    },
    {
        id: 303,
        title: "Ace Drift 3D",
        titleZh: "王牌漂移",
        desc: "3D drifting racing game!",
        descZh: "3D漂移赛车游戏！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/vlqkcszim3vwzsx0k50xo9lymachkj6s/512x384.jpg",
        url: "https://html5.gamemonetize.com/vlqkcszim3vwzsx0k50xo9lymachkj6s/",
        controls: "WASD"
    },
    {
        id: 304,
        title: "Horse Kart Runner",
        titleZh: "马车赛跑",
        desc: "Horse cart racing adventure!",
        descZh: "马车赛跑冒险！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/8s4lk3741uxenrmsxuyj3c3iwnn1eq0f/512x384.jpg",
        url: "https://html5.gamemonetize.com/8s4lk3741uxenrmsxuyj3c3iwnn1eq0f/",
        controls: "Arrow keys"
    },
    {
        id: 305,
        title: "Seafloor Racing 3D",
        titleZh: "海底赛车",
        desc: "Race underwater and avoid whales!",
        descZh: "海底赛车，躲避鲸鱼！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/ufcvtjet12akdnq7ivr1empmhug0swsd/512x384.jpg",
        url: "https://html5.gamemonetize.com/ufcvtjet12akdnq7ivr1empmhug0swsd/",
        controls: "Mouse/tap"
    },
    {
        id: 306,
        title: "Gem Runner",
        titleZh: "宝石跑酷",
        desc: "Collect gems in endless 3D running!",
        descZh: "无尽3D跑酷收集宝石！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/oqb0sn6kv4qfmcqzqo5hjzpy2w9vplxu/512x384.jpg",
        url: "https://html5.gamemonetize.com/oqb0sn6kv4qfmcqzqo5hjzpy2w9vplxu/",
        controls: "Mouse/tap"
    },

    // === 射击游戏 (Shooting) ===
    {
        id: 401,
        title: "BulletMan 3D",
        titleZh: "子弹人",
        desc: "Action-packed 3D shooting game!",
        descZh: "动作3D射击游戏！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/tjsii5r6qlrfyf34b076syz13lzeq0x1/512x384.jpg",
        url: "https://html5.gamemonetize.com/tjsii5r6qlrfyf34b076syz13lzeq0x1/",
        controls: "Mouse aim and click",
        hot: true
    },
    {
        id: 402,
        title: "Planet Hero",
        titleZh: "星球英雄",
        desc: "Defend planets from alien monsters!",
        descZh: "保卫星球免受外星怪兽入侵！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/icwwnsv25zjvr9d9tghebsqi42uwmsfq/512x384.jpg",
        url: "https://html5.gamemonetize.com/icwwnsv25zjvr9d9tghebsqi42uwmsfq/",
        controls: "WASD to move, auto shoot"
    },
    {
        id: 403,
        title: "Alien Space Shooter",
        titleZh: "太空射手",
        desc: "Shoot alien invaders in space!",
        descZh: "射击太空入侵的外星人！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/ywh6vr73jrwgm5bpy50y6ra8y2vn1z1u/512x384.jpg",
        url: "https://html5.gamemonetize.com/ywh6vr73jrwgm5bpy50y6ra8y2vn1z1u/",
        controls: "Mouse to play"
    },
    {
        id: 404,
        title: "City Defense",
        titleZh: "城市防御",
        desc: "Tower defense strategy shooting!",
        descZh: "塔防策略射击游戏！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/jm6h40wvlisy01h8gmt9z3fd0h2h4yov/512x384.jpg",
        url: "https://html5.gamemonetize.com/jm6h40wvlisy01h8gmt9z3fd0h2h4yov/",
        controls: "Mouse click"
    },
    {
        id: 405,
        title: "Overlook Tank War",
        titleZh: "俯视坦克战",
        desc: "Top-down tank shooter!",
        descZh: "俯视角坦克射击游戏！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/qszsjvbbog34bpge30jspq1j73p6cfj8/512x384.jpg",
        url: "https://html5.gamemonetize.com/qszsjvbbog34bpge30jspq1j73p6cfj8/",
        controls: "WASD and mouse"
    },

    // === 冒险游戏 (Adventure) ===
    {
        id: 501,
        title: "Roll Away 3D",
        titleZh: "滚球冒险",
        desc: "Control a ball through relaxing levels!",
        descZh: "控制小球穿越关卡！",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/nhgld41ueub48pma1jjtum04qgt2jzp3/512x384.jpg",
        url: "https://html5.gamemonetize.com/nhgld41ueub48pma1jjtum04qgt2jzp3/",
        controls: "Arrow keys, Space",
        hot: true
    },
    {
        id: 502,
        title: "Animal World",
        titleZh: "动物世界",
        desc: "Open-world sandbox survival game!",
        descZh: "开放世界沙盒生存游戏！",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/tausm4cqqzkv5z6955gfrdbhq9kztztc/512x384.jpg",
        url: "https://html5.gamemonetize.com/tausm4cqqzkv5z6955gfrdbhq9kztztc/",
        controls: "WASD, Mouse"
    },
    {
        id: 503,
        title: "Obby Prison Escape",
        titleZh: "监狱逃脱",
        desc: "Speed obby challenge escape game!",
        descZh: "速度挑战监狱逃脱游戏！",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/5v60c88pl81kvr27x3xp89qhpelm6va2/512x384.jpg",
        url: "https://html5.gamemonetize.com/5v60c88pl81kvr27x3xp89qhpelm6va2/",
        controls: "WASD, Space"
    },
    {
        id: 504,
        title: "Epic Runner Parkour",
        titleZh: "极限跑酷",
        desc: "Survival parkour action game!",
        descZh: "生存跑酷动作游戏！",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/qn8id2vh04sszh1968dgt3lp5u0hi7pl/512x384.jpg",
        url: "https://html5.gamemonetize.com/qn8id2vh04sszh1968dgt3lp5u0hi7pl/",
        controls: "Mouse click"
    },

    // === 休闲游戏 (Casual/Hypercasual) ===
    {
        id: 601,
        title: "My Talking Labubu",
        titleZh: "我的Labubu",
        desc: "Take care of adorable Labubu!",
        descZh: "照顾可爱的Labubu！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/gmhdqc6xhj8ewhpx3dfbo1l9tegdy946/512x384.jpg",
        url: "https://html5.gamemonetize.com/gmhdqc6xhj8ewhpx3dfbo1l9tegdy946/",
        controls: "Mouse click",
        hot: true
    },
    {
        id: 602,
        title: "Swim Good",
        titleZh: "欢乐游泳",
        desc: "Eat worms and dodge urchins!",
        descZh: "吃虫子，躲避海胆！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/0b9opyq403zw97yoccuntar25ookv8e9/512x384.jpg",
        url: "https://html5.gamemonetize.com/0b9opyq403zw97yoccuntar25ookv8e9/",
        controls: "A/D or Arrow keys"
    },
    {
        id: 603,
        title: "My Tiny Market",
        titleZh: "我的小超市",
        desc: "Run your own supermarket!",
        descZh: "经营你自己的超市！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/if0vl0cck4st4pxcxjppbsny1h6tzutn/512x384.jpg",
        url: "https://html5.gamemonetize.com/if0vl0cck4st4pxcxjppbsny1h6tzutn/",
        controls: "Mouse click"
    },
    {
        id: 604,
        title: "Hoard Master",
        titleZh: "黑洞大师",
        desc: "Control a black hole to swallow everything!",
        descZh: "控制黑洞吞噬一切！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/vgfnd5q6s2gzx282e3r58unifb97maxt/512x384.jpg",
        url: "https://html5.gamemonetize.com/vgfnd5q6s2gzx282e3r58unifb97maxt/",
        controls: "Mouse drag",
        hot: true
    },
    {
        id: 605,
        title: "Cat with a Gun",
        titleZh: "持枪猫咪",
        desc: "Tap to shoot and evolve your cat!",
        descZh: "点击射击，进化你的猫！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/p9om649472ct8dvj4mbc9rnp68np7m2n/512x384.jpg",
        url: "https://html5.gamemonetize.com/p9om649472ct8dvj4mbc9rnp68np7m2n/",
        controls: "Tap/Click",
        hot: true
    },
    {
        id: 606,
        title: "Magic Beauty Makeup",
        titleZh: "魔法美妆",
        desc: "Makeover and dress up game!",
        descZh: "美妆换装游戏！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/wvwfdzfjv7jj4ikopq3fkpq1lwi6as3o/512x384.jpg",
        url: "https://html5.gamemonetize.com/wvwfdzfjv7jj4ikopq3fkpq1lwi6as3o/",
        controls: "Mouse click"
    },

    // === 体育游戏 (Sports) ===
    {
        id: 701,
        title: "Neon Mini Golf",
        titleZh: "霓虹高尔夫",
        desc: "Stylish HTML5 mini golf with 39 levels!",
        descZh: "时尚霓虹迷你高尔夫，39关！",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/jjbc1jhdydn8azhcmbnpo3tvzbkyhy76/512x384.jpg",
        url: "https://html5.gamemonetize.com/jjbc1jhdydn8azhcmbnpo3tvzbkyhy76/",
        controls: "Mouse drag",
        hot: true
    },
    {
        id: 702,
        title: "Coin Flick Soccer",
        titleZh: "弹指足球",
        desc: "Flick coins to score goals!",
        descZh: "弹硬币射门得分！",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/k4orfszy5grobv16zcyfg6fie450ivi2/512x384.jpg",
        url: "https://html5.gamemonetize.com/k4orfszy5grobv16zcyfg6fie450ivi2/",
        controls: "Click and flick"
    },

    // === 动作游戏 (Action) ===
    {
        id: 801,
        title: "Tanks of War Halloween",
        titleZh: "万圣节坦克大战",
        desc: "2 player tank battle!",
        descZh: "双人坦克对战！",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/1lbhtq5p27z7p6w5xkah2vcrlijm9fec/512x384.jpg",
        url: "https://html5.gamemonetize.com/1lbhtq5p27z7p6w5xkah2vcrlijm9fec/",
        controls: "WASD + Arrows, Q/P shoot"
    },
    {
        id: 802,
        title: "Two Player Red Hands",
        titleZh: "双人拍手游戏",
        desc: "Test your reflexes in this 2P game!",
        descZh: "双人反应速度测试！",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/485gqzfrbzass7ig99juwrcb73d0286z/512x384.jpg",
        url: "https://html5.gamemonetize.com/485gqzfrbzass7ig99juwrcb73d0286z/",
        controls: "Mouse click"
    },
    {
        id: 803,
        title: "Space IO",
        titleZh: "太空大作战",
        desc: "Destroy enemies and grow your fleet!",
        descZh: "消灭敌人，壮大你的舰队！",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/4jt7drizukk3heomy00elax4tukm0p19/512x384.jpg",
        url: "https://html5.gamemonetize.com/4jt7drizukk3heomy00elax4tukm0p19/",
        controls: "Mouse aim, Click shoot"
    },

    // === 开源经典游戏 ===
    {
        id: 901,
        title: "Hextris",
        titleZh: "六边形方块",
        desc: "Hexagonal Tetris-like puzzle game.",
        descZh: "六边形俄罗斯方块游戏。",
        category: "puzzle",
        thumbnail: "https://raw.githubusercontent.com/Hextris/hextris.github.io/master/images/hextris-logo.png",
        url: "https://hextris.io/",
        controls: "Arrow keys"
    },
    {
        id: 902,
        title: "Clumsy Bird",
        titleZh: "笨拙小鸟",
        desc: "Flappy Bird open source clone.",
        descZh: "Flappy Bird开源复刻版。",
        category: "arcade",
        thumbnail: "https://raw.githubusercontent.com/ellisonleao/clumsy-bird/master/data/img/bg.png",
        url: "https://ellisonleao.github.io/clumsy-bird/",
        controls: "Space/Click to fly"
    },
    {
        id: 903,
        title: "Slow Roads",
        titleZh: "慢悠悠的路",
        desc: "Zen driving game with endless roads.",
        descZh: "禅意驾驶游戏，无限公路。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/nhgld41ueub48pma1jjtum04qgt2jzp3/512x384.jpg",
        url: "https://slowroads.io/embed.html",
        controls: "WASD to drive"
    },

    // === 新增高质量游戏 ===
    {
        id: 1001,
        title: "Labubu Auto Adventure",
        titleZh: "Labubu汽车探险",
        desc: "Fun HTML5 game!",
        descZh: "有趣的H5游戏！",
        category: "Arcade",
        thumbnail: "https://img.gamemonetize.com/ruobz36yp9vi68oj2s6xj1efn2sjds1r/512x384.jpg",
        url: "https://html5.gamemonetize.com/ruobz36yp9vi68oj2s6xj1efn2sjds1r/",
        controls: "Mouse/Keyboard",
        hot: true
    },
    {
        id: 1002,
        title: "Chainsaw Man Anime",
        titleZh: "链锯人",
        desc: "Fun HTML5 game!",
        descZh: "有趣的H5游戏！",
        category: "Action",
        thumbnail: "https://img.gamemonetize.com/o4cf0t4hmkcie0z64vjk5oevjgnlg8gu/512x384.jpg",
        url: "https://html5.gamemonetize.com/o4cf0t4hmkcie0z64vjk5oevjgnlg8gu/",
        controls: "Mouse/Keyboard",
        hot: true
    },
    {
        id: 1003,
        title: "Ninjas Blade",
        titleZh: "忍者之刃",
        desc: "Fun HTML5 game!",
        descZh: "有趣的H5游戏！",
        category: "Action",
        thumbnail: "https://img.gamemonetize.com/4zan7z32l5z63lmeo68xg3t3b7jvzmb0/512x384.jpg",
        url: "https://html5.gamemonetize.com/4zan7z32l5z63lmeo68xg3t3b7jvzmb0/",
        controls: "Mouse/Keyboard",
        hot: true
    },
    {
        id: 1004,
        title: "Gang Blast",
        titleZh: "帮派爆炸",
        desc: "Fun HTML5 game!",
        descZh: "有趣的H5游戏！",
        category: "Shooting",
        thumbnail: "https://img.gamemonetize.com/48v0gscii4bf868ymoyqf6oyo0tsd2ou/512x384.jpg",
        url: "https://html5.gamemonetize.com/48v0gscii4bf868ymoyqf6oyo0tsd2ou/",
        controls: "Mouse/Keyboard",
        hot: true
    },
    {
        id: 1005,
        title: "Monster Escape: Logic Puzzle Adventure",
        titleZh: "怪物逃脱：逻辑解谜冒险",
        desc: "Fun HTML5 game!",
        descZh: "有趣的H5游戏！",
        category: "Shooting",
        thumbnail: "https://img.gamemonetize.com/iswcg23g2usoz6y1uj4kjb92um44r24i/512x384.jpg",
        url: "https://html5.gamemonetize.com/iswcg23g2usoz6y1uj4kjb92um44r24i/",
        controls: "Mouse/Keyboard",
        hot: true
    },
    // === API 爬取的游戏 (From GameMonetize Official API) ===
    {
        id: 1006,
        title: "Dead Survival: Zombie Shooter",
        titleZh: "死亡生存: 僵尸射击",
        desc: "Dive into Dead Survival: Zombie Shooter, the ultimate offline zombie shooting game designed for intense action and survival horror fans. Battle through a post-apocalyptic world overrun by the undead. ",
        descZh: "深入《死亡生存：僵尸射击》，这是一款专为动作和生存恐怖爱好者设计的终极离线僵尸射击游戏。在被亡灵占领的后启示录世界中战斗。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/dyxwy4707q834y994kunt3e4ea94e12m/512x384.jpg",
        url: "https://html5.gamemonetize.com/dyxwy4707q834y994kunt3e4ea94e12m/",
        controls: "Mouse/Touch"
    },
    {
        id: 1007,
        title: "Go Golf",
        titleZh: "高尔夫",
        desc: "GoGolf is a fun sports game where you have to hit the golf ball into the hole with a limited number of strokes. Each level features different terrains, requiring you to observe carefully and aim preci",
        descZh: "GoGolf 是一款有趣的体育游戏，你需要用有限的击球次数将高尔夫球打入洞中。每个关卡都有不同的地形，需要仔细观察并精确瞄准。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/vyoai08811vqppdfilocq5k1f7emjsxg/512x384.jpg",
        url: "https://html5.gamemonetize.com/vyoai08811vqppdfilocq5k1f7emjsxg/",
        controls: "Mouse/Touch"
    },
    {
        id: 1008,
        title: "Makeover Run 3D",
        titleZh: "换装跑酷 3D",
        desc: "Makeover Run 3D is a casual dress-up parkour game. Just slide to control the girls to choose different styles of clothes. By making choices along the way, see if your matching can win the favor of the",
        descZh: "换装跑酷 3D 是一款休闲换装跑酷游戏。只需滑动控制女孩选择不同风格的衣服。通过沿途的选择，看看你的搭配是否能赢得评委的青睐。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/93gho8zm44tyfplow05psa1w59wtima7/512x384.jpg",
        url: "https://html5.gamemonetize.com/93gho8zm44tyfplow05psa1w59wtima7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1009,
        title: "Stair Rush",
        titleZh: "楼梯冲刺",
        desc: "Stair Rush is a fast-paced hyper-casual runner where your character automatically runs forward on a narrow track filled with obstacles, blocks, and platforms. Your goal is to collect tiles, build stai",
        descZh: "楼梯冲刺是一款快节奏的超休闲跑酷游戏，你的角色会在充满障碍物、方块和平台的狭窄轨道上自动向前奔跑。目标是收集瓷砖，建造楼梯。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/qdz9rleg7bpgb74ho1pzumfof61g4kta/512x384.jpg",
        url: "https://html5.gamemonetize.com/qdz9rleg7bpgb74ho1pzumfof61g4kta/",
        controls: "Mouse/Touch"
    },
    {
        id: 1010,
        title: "Jumping Birds",
        titleZh: "跳跃小鸟",
        desc: "Jumping Birds is a game of skill and reflexes where players take on the roles of adventurous birds embarking on an endless ascent above the clouds. The game world blends colorful environments, dynamic",
        descZh: "跳跃小鸟是一款考验技巧和反应能力的游戏，玩家扮演冒险的小鸟，在云端之上进行无尽的攀升。游戏世界融合了多彩的环境和动态元素。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/knkznkotvxga9vqrltcjq25nt10vejzy/512x384.jpg",
        url: "https://html5.gamemonetize.com/knkznkotvxga9vqrltcjq25nt10vejzy/",
        controls: "Mouse/Touch"
    },
    {
        id: 1011,
        title: "Shiny Dodge",
        titleZh: "闪亮躲避",
        desc: "Shiny Dodge is a fast, addictive arcade dodging game where you control a glowing energy orb and survive as long as possible! Move left and right to avoid falling red spikes while collecting coins and ",
        descZh: "闪亮躲避是一款快速、令人上瘾的街机躲避游戏，你控制一个发光的能量球，尽可能长时间生存！左右移动避开掉落的红色尖刺，同时收集金币。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/6wrigosarx8psz95dcfcrcsaus91jgk5/512x384.jpg",
        url: "https://html5.gamemonetize.com/6wrigosarx8psz95dcfcrcsaus91jgk5/",
        controls: "Mouse/Touch"
    },
    {
        id: 1012,
        title: "COUNTERFLOW",
        titleZh: "逆流",
        desc: "COUNTERFLOW is a fast-paced lane-switching driving game. Avoid oncoming cars, survive as long as you can, and break your best record. Simple controls, clean visuals, and increasing speed make every ru",
        descZh: "逆流是一款快节奏的变道驾驶游戏。避开迎面而来的车辆，尽可能长时间生存，打破你的最佳记录。简单的控制、清晰的视觉效果和不断加快的速度让每次奔跑都充满挑战。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/5qvdrkrue8qnbn4gstx4xygxbio0ul6g/512x384.jpg",
        url: "https://html5.gamemonetize.com/5qvdrkrue8qnbn4gstx4xygxbio0ul6g/",
        controls: "Mouse/Touch"
    },
    {
        id: 1013,
        title: "Ole Bunny",
        titleZh: "勇敢兔子",
        desc: "Ole Bunny plunges you into a crazy arena where a cute bunny  finds himself because of his love for roses ! Now you must show courage and skill to escape the wild bulls and collect as many fragrant ros",
        descZh: "勇敢兔子将你带入一个疯狂的竞技场，一只可爱的兔子因为对玫瑰的热爱而来到这里！现在你必须展现勇气和技巧，逃离野牛并收集尽可能多的芬芳玫瑰。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/6uelofb3wuyay5oy6qkspegpnngxu0m4/512x384.jpg",
        url: "https://html5.gamemonetize.com/6uelofb3wuyay5oy6qkspegpnngxu0m4/",
        controls: "Mouse/Touch"
    },
    {
        id: 1014,
        title: "Dots and Boxes 2",
        titleZh: "点与盒 2",
        desc: "Dots and Boxes 2.0 is a modern, feature-rich version of the classic pen-and-paper strategy game where players take turns connecting dots to form squares (boxes). The player who completes the most boxe",
        descZh: "点与盒 2.0 是经典纸笔策略游戏的现代增强版，玩家轮流连接点来形成正方形（盒子）。完成最多盒子的玩家获胜。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/njg32276zi9zg95bn3uc185d107hraix/512x384.jpg",
        url: "https://html5.gamemonetize.com/njg32276zi9zg95bn3uc185d107hraix/",
        controls: "Mouse/Touch"
    },
    {
        id: 1015,
        title: "Doodle Jump 4",
        titleZh: "涂鸦跳跃 4",
        desc: "Doodle Jump v4 - Ultra Edition is a highly optimized and feature-rich arcade platformer. The goal is to jump on platforms and climb as high as possible without falling. This version introduces key mob",
        descZh: "涂鸦跳跃 v4 - 终极版是一款高度优化且功能丰富的街机平台游戏。目标是在平台上跳跃，尽可能爬得更高而不掉落。此版本引入了关键移动功能。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ufndae85yssn1i6ddmyxsvluxg590wvh/512x384.jpg",
        url: "https://html5.gamemonetize.com/ufndae85yssn1i6ddmyxsvluxg590wvh/",
        controls: "Mouse/Touch"
    },
    {
        id: 1016,
        title: "Obby: 99 Nights Escape +1 Speed",
        titleZh: "障碍赛：99夜逃脱 +1速度",
        desc: "This is a thrilling adventure survival game where each night brings new dangers. Upgrade your hero&rsquo;s speed and energy to overcome harder and harder levels and try to make it through all 99 night",
        descZh: "这是一款惊险刺激的冒险生存游戏，每个夜晚都会带来新的危险。升级你英雄的速度和能量，克服越来越难的关卡，努力通过所有99个夜晚。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/k1eahl1b9wxc6vqzxloqtvfzh5ai9csw/512x384.jpg",
        url: "https://html5.gamemonetize.com/k1eahl1b9wxc6vqzxloqtvfzh5ai9csw/",
        controls: "Mouse/Touch"
    },
    {
        id: 1017,
        title: "Harvest Glam",
        titleZh: "收获魅力",
        desc: "Glam is the ultimate fall-themed makeup and dress-up game where cozy vibes meet high fashion! Create stunning autumn looks using warm palettes, golden highlights, and stylish seasonal outfits. Mix ear",
        descZh: "魅力是终极秋季主题化妆和换装游戏，舒适氛围与高级时尚相遇！使用温暖的调色板、金色高光和时尚的季节性服装打造令人惊艳的秋季造型。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/dzrrj6ge0x1m20bc5bo0iqx4g1pklmsr/512x384.jpg",
        url: "https://html5.gamemonetize.com/dzrrj6ge0x1m20bc5bo0iqx4g1pklmsr/",
        controls: "Mouse/Touch"
    },
    {
        id: 1018,
        title: "Car Racing 3D: Extreme Dodge",
        titleZh: "汽车竞速 3D：极限躲避",
        desc: "Car Racing 3D: Extreme Dodge is a fast-paced racing game where your only goal is to survive at high speeds. Steer left and right to avoid traffic, obstacles and road hazards. Use boosters at the perfe",
        descZh: "汽车竞速 3D：极限躲避是一款快节奏的竞速游戏，你的唯一目标是在高速下生存。左右转向避开交通、障碍物和道路危险。在完美时机使用助推器。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/jpvsnofjw5cqhov1a2sjeu3521tn1tc2/512x384.jpg",
        url: "https://html5.gamemonetize.com/jpvsnofjw5cqhov1a2sjeu3521tn1tc2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1019,
        title: "Pipe Connect Puzzle Game",
        titleZh: "管道连接解谜",
        desc: "Pipe Connect - Plumbing Puzzle Challenge immerses you in the captivating world of plumbing puzzles and brain-teasing challenges designed to enhance your problem-solving abilities. Your objective is to",
        descZh: "管道连接 - 管道解谜挑战让你沉浸在迷人的管道解谜世界中，这些挑战旨在提高你的解决问题的能力。你的目标是连接管道。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/b6inwt2c5d2hkk39omcv6e7e1m4he3y9/512x384.jpg",
        url: "https://html5.gamemonetize.com/b6inwt2c5d2hkk39omcv6e7e1m4he3y9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1020,
        title: "Marshmallow Rush",
        titleZh: "棉花糖冲刺",
        desc: "Marshmallow Rush is a one-button runner where you tap at the right moment to stack fluffy marshmallows, weave through cute obstacles, and dash to the finish. Build the tallest, sweetest tower you can,",
        descZh: "棉花糖冲刺是一款单键跑酷游戏，你在正确时机点击堆叠蓬松的棉花糖，穿过可爱的障碍物，冲向终点。建造你能建造的最高、最甜的塔。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/qo6b7wd58bvy8is0umvi9ymripyxbmk3/512x384.jpg",
        url: "https://html5.gamemonetize.com/qo6b7wd58bvy8is0umvi9ymripyxbmk3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1021,
        title: "Whack a Mole   Pixel Version",
        titleZh: "打地鼠 - 像素版",
        desc: "-&gt; Whack a Mole &ndash; Pixel Version is a fast-paced arcade game in a retro pixel style where your goal is to hit as many moles as you can before they disappear. Test your reaction speed, focus, a",
        descZh: "打地鼠 - 像素版是一款快节奏的街机游戏，采用复古像素风格，目标是在地鼠消失前尽可能多地击中它们。测试你的反应速度、专注力和准确性。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/xwfmok1iu5miopfeyqwzpt4flna2na6d/512x384.jpg",
        url: "https://html5.gamemonetize.com/xwfmok1iu5miopfeyqwzpt4flna2na6d/",
        controls: "Mouse/Touch"
    },
    {
        id: 1022,
        title: "Mini ASMR Relaxing Games",
        titleZh: "迷你ASMR放松游戏",
        desc: "People forget to take a break from their regular tasks because they are concerned with them. We are here to serve you in de-stressing with antistress calming games &amp; relaxing toys slime simulator ",
        descZh: "人们因为忙于日常任务而忘记休息。我们在这里为你提供减压的放松游戏和舒缓玩具史莱姆模拟器，帮助你放松身心。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/5blz73jojw0zw9fgoy0dkvfsgv4xo862/512x384.jpg",
        url: "https://html5.gamemonetize.com/5blz73jojw0zw9fgoy0dkvfsgv4xo862/",
        controls: "Mouse/Touch"
    },
    {
        id: 1023,
        title: "Shape Puzzle",
        titleZh: "形状解谜",
        desc: "Shape Puzzle is a simple yet captivating puzzle game where you adjust pieces of different shapes and place them in the correct positions on the board. Each level presents a new layout, requiring you t",
        descZh: "形状解谜是一款简单而迷人的解谜游戏，你需要调整不同形状的拼图块，将它们放在棋盘的正确位置上。每个关卡都有新的布局，需要你仔细思考。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/dpbl07ksovtacdqlan1u5fp52gf43hia/512x384.jpg",
        url: "https://html5.gamemonetize.com/dpbl07ksovtacdqlan1u5fp52gf43hia/",
        controls: "Mouse/Touch"
    },
    {
        id: 1024,
        title: "Fashionista Christmas Eve Party",
        titleZh: "时尚达人平安夜派对",
        desc: "Indulge in the Fashionista Christmas Eve Party extravaganza! Discover glamorous holiday ensembles, festive accessories, and the perfect blend of chic for a stylish celebration. Join the fashion-forwar",
        descZh: "沉浸在时尚达人平安夜派对的盛宴中！发现华丽的节日套装、节日配饰，以及时尚庆祝活动的完美时尚组合。加入时尚前卫的庆祝活动。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/5atjh0rucpsr1fsh0pkgzkj15r4xjkia/512x384.jpg",
        url: "https://html5.gamemonetize.com/5atjh0rucpsr1fsh0pkgzkj15r4xjkia/",
        controls: "Mouse/Touch"
    },
    {
        id: 1025,
        title: "carrom pro",
        titleZh: "卡鲁姆专业版",
        desc: "Experience the ultimate digital adaptation of the classic Carrom board game! Carrom Pro blends realistic physics with modern arcade aesthetics for a smooth, competitive experience. Game Modes: Classic",
        descZh: "体验经典卡鲁姆棋盘游戏的终极数字改编版！卡鲁姆专业版融合了逼真的物理效果和现代街机美学，提供流畅的竞技体验。游戏模式：经典模式。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/ts6iu4xqkctvpkau5yk4hwdkr3nwbsn7/512x384.jpg",
        url: "https://html5.gamemonetize.com/ts6iu4xqkctvpkau5yk4hwdkr3nwbsn7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1026,
        title: "Tower Breaker",
        titleZh: "塔楼破坏者",
        desc: "Tower Breaker is a physics-based destruction game where you throw different types of projectiles, collapse towers, break structures, and experiment with realistic physics. Pull the rope, aim, and rele",
        descZh: "塔楼破坏者是一款基于物理的破坏游戏，你可以投掷不同类型的弹射物，摧毁塔楼，破坏结构，体验逼真的物理效果。拉绳子，瞄准，释放！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/vzlf957tf696fqliepaa9gkcgd2omtx9/512x384.jpg",
        url: "https://html5.gamemonetize.com/vzlf957tf696fqliepaa9gkcgd2omtx9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1027,
        title: "Flower Fairy Adventure Story",
        titleZh: "花仙子冒险故事",
        desc: "Welcome to Flower Fairy Adventure Story, a casual puzzle game that you can play for free. Flower Fairy lost her wings! Embark on an adventure where you solve each tiny jigsaw, dress up your girl in pr",
        descZh: "欢迎来到花仙子冒险故事，一款可以免费游玩的休闲解谜游戏。花仙子失去了她的翅膀！踏上冒险之旅，解决每个小拼图，为你的女孩穿上漂亮的衣服。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/5ou6u5a1fbiqfwzd3dnraxbcwg7d28sf/512x384.jpg",
        url: "https://html5.gamemonetize.com/5ou6u5a1fbiqfwzd3dnraxbcwg7d28sf/",
        controls: "Mouse/Touch"
    },
    {
        id: 1028,
        title: "Fall Aesthetics",
        titleZh: "秋季美学",
        desc: "Get ready to conquer the fashion world with Fall Aesthetics! Travel the globe alongside our stylish crew and unlock your inner fashionista. Mix and match outfits inspired by the vibrant streets of New",
        descZh: "准备好用秋季美学征服时尚世界！与我们的时尚团队一起环游世界，释放你内心的时尚达人。混搭受纽约繁华街道启发的服装。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/w2plop8mnxgcdps57l4ks5yx9lzzkuzv/512x384.jpg",
        url: "https://html5.gamemonetize.com/w2plop8mnxgcdps57l4ks5yx9lzzkuzv/",
        controls: "Mouse/Touch"
    },
    {
        id: 1029,
        title: "Jewelry Match Puzzle Game",
        titleZh: "珠宝匹配解谜",
        desc: "Dive into the enchanting world of Jewelry Match Puzzle Game, beloved by millions of players worldwide! This captivating match-3 puzzle game is perfect for puzzle enthusiasts of all ages, offering thou",
        descZh: "深入迷人的珠宝匹配解谜游戏世界，深受全球数百万玩家喜爱！这款迷人的三消解谜游戏非常适合各个年龄段的解谜爱好者，提供数千个关卡。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/spacg9g3ocw5proj2m7p2bxe8fmet3dy/512x384.jpg",
        url: "https://html5.gamemonetize.com/spacg9g3ocw5proj2m7p2bxe8fmet3dy/",
        controls: "Mouse/Touch"
    },
    {
        id: 1030,
        title: "Mini Pocket Game 2025",
        titleZh: "迷你口袋游戏 2025",
        desc: "This relaxing toy game includes dozens of satisfying objects to touch, tap, and play with &mdash; giving you a real sense of calm and mindfulness. Each update adds new relaxing experiences to keep you",
        descZh: "这款放松的玩具游戏包含数十个令人满意的物品供你触摸、点击和玩耍，给你带来真正的平静和正念感。每次更新都会添加新的放松体验，让你保持专注。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/affiobu9gimfnfg27qqj1hiikr41zmdl/512x384.jpg",
        url: "https://html5.gamemonetize.com/affiobu9gimfnfg27qqj1hiikr41zmdl/",
        controls: "Mouse/Touch"
    },
    {
        id: 1031,
        title: "Push Gold",
        titleZh: "推金块",
        desc: "PushGold is a puzzle game where you take on the role of a clever miner tasked with pushing gold blocks to their designated positions. Every move requires careful calculation because the narrow terrain",
        descZh: "推金块是一款解谜游戏，你扮演一个聪明的矿工，任务是将金块推到指定位置。由于地形狭窄，每一步都需要仔细计算。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/dv7mvugfv11ml7sih07edfvus2fziyfk/512x384.jpg",
        url: "https://html5.gamemonetize.com/dv7mvugfv11ml7sih07edfvus2fziyfk/",
        controls: "Mouse/Touch"
    },
    {
        id: 1032,
        title: "Easy Coloring Labubu Time",
        titleZh: "轻松涂色Labubu时光",
        desc: "Easy Coloring Labubu Time is super fun and free to play online coloring game for kids. Choose one of the images and make a master piece! Have fun!",
        descZh: "轻松涂色Labubu时光是一款超级有趣且免费的在线儿童涂色游戏。选择一张图片，创作出杰作！玩得开心！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ssspxwzt95e93vzbhabrl3rbomuzzyc5/512x384.jpg",
        url: "https://html5.gamemonetize.com/ssspxwzt95e93vzbhabrl3rbomuzzyc5/",
        controls: "Mouse/Touch"
    },
    {
        id: 1033,
        title: "Neon Ping Pong",
        titleZh: "霓虹乒乓球",
        desc: "Dive into the futuristic, fast-paced action of Neon Ping Pong 2.0, The Championship Edition! This modern take on classic Pong features stunning neon graphics, intense gameplay, and multiple modes. Cha",
        descZh: "深入霓虹乒乓球 2.0 锦标赛版的未来主义快节奏动作！这款经典乒乓球的现代版本拥有令人惊叹的霓虹图形、激烈的游戏玩法和多种模式。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/r4v95rc6m6gypa5pgwwdune2jngh6i4p/512x384.jpg",
        url: "https://html5.gamemonetize.com/r4v95rc6m6gypa5pgwwdune2jngh6i4p/",
        controls: "Mouse/Touch"
    },
    {
        id: 1034,
        title: "Cosmic Defender",
        titleZh: "宇宙守护者",
        desc: "Cosmic Defender 2.1 is a fast-paced, retro-styled vertical arcade shooter (Shmup) set against a cyberpunk sci-fi backdrop. Pilot the powerful Cosmic Defender starship to fend off a galaxy-wide invasio",
        descZh: "宇宙守护者 2.1 是一款快节奏、复古风格的垂直街机射击游戏（Shmup），背景设定在赛博朋克科幻世界中。驾驶强大的宇宙守护者飞船抵御银河系范围的入侵。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/hpps4rzujsi2jzxw7thbkypm3sb4mq0q/512x384.jpg",
        url: "https://html5.gamemonetize.com/hpps4rzujsi2jzxw7thbkypm3sb4mq0q/",
        controls: "Mouse/Touch"
    },
    {
        id: 1035,
        title: "Monster Egg",
        titleZh: "怪物蛋",
        desc: "Begin the wildest evolution adventure ever in Monster Egg! This is not just a simple running game. It&rsquo;s a fast-paced action platform full of monsters, DNA collecting, and epic battles. You start",
        descZh: "在《怪物蛋》中开始最狂野的进化冒险！这不仅仅是一个简单的跑步游戏。这是一个充满怪物、DNA收集和史诗般战斗的快节奏动作平台。你将从",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/a6mlyusljrtcoyhetis4m6u4rxbdymda/512x384.jpg",
        url: "https://html5.gamemonetize.com/a6mlyusljrtcoyhetis4m6u4rxbdymda/",
        controls: "Mouse/Touch"
    },
    {
        id: 1036,
        title: "Shark Boy",
        titleZh: "鲨鱼男孩",
        desc: "Shark Boy is a colorful underwater puzzle game where you will accompany the boy and his friendly whale on a quest to find precious golden shells.   Skillfully utilize anchors to pull, swing, or create",
        descZh: "《鲨鱼男孩》是一款色彩缤纷的水下益智游戏，你将陪伴这个男孩和他友好的鲸鱼一起寻找珍贵的金贝壳。熟练地利用锚点来拉动、摆动或创造",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/wsyqf99n87edjqqnatiyhiqb8qv5aaim/512x384.jpg",
        url: "https://html5.gamemonetize.com/wsyqf99n87edjqqnatiyhiqb8qv5aaim/",
        controls: "Mouse/Touch"
    },
    {
        id: 1037,
        title: "Monster Boom Boom",
        titleZh: "怪物砰砰",
        desc: "Monster Boom Boom is a fun and challenging puzzle game where you use special vials created from green monsters to eliminate all the monsters on the arena.   Each move is precious because the number of",
        descZh: "《怪物砰砰》是一款有趣且具有挑战性的益智游戏，你使用由绿色怪物制成的特殊小瓶来消灭竞技场上的所有怪物。每一步都很珍贵，因为",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/762jwzjxrf7he4af39rywycw6xpzib4d/512x384.jpg",
        url: "https://html5.gamemonetize.com/762jwzjxrf7he4af39rywycw6xpzib4d/",
        controls: "Mouse/Touch"
    },
    {
        id: 1038,
        title: "Red Up Survival Offline Game",
        titleZh: "红色向上：离线生存游戏",
        desc: "Red up is an amazing platformer game, where you can control fireboy on his stick adventure to rescue watergirl. They are also the main characters of Red And Blue Stickman Animation, so this classic fi",
        descZh: "《红色向上》是一款令人惊叹的平台游戏，你可以控制火柴人火焰男孩进行冒险，拯救水女孩。他们也是《红蓝火柴人动画》的主角，所以这款经典的",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/uvzrxu8peda71uin0gxeqdinrly6kwob/512x384.jpg",
        url: "https://html5.gamemonetize.com/uvzrxu8peda71uin0gxeqdinrly6kwob/",
        controls: "Mouse/Touch"
    },
    {
        id: 1039,
        title: "Mini No Wifi Games 2024",
        titleZh: "2024迷你无网游戏",
        desc: "But relaxation isnt just about what you do &ndash; its also about how you feel. Thats why weve included exercises to help you chill out and de-stress. We also have exercises to help you relax, like ta",
        descZh: "但放松不仅仅是你做什么，还关乎你的感受。这就是为什么我们包含了帮助你放松和减压的练习。我们也有帮助你放松的练习，比如",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/0bxsnepcupr0twu3umvmdxnso7kzwwr3/512x384.jpg",
        url: "https://html5.gamemonetize.com/0bxsnepcupr0twu3umvmdxnso7kzwwr3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1040,
        title: "Cozy Pizzeria",
        titleZh: "温馨披萨店",
        desc: "Run a cozy pizza shop that grows into a city-wide chain. Hire and manage staff, upgrade ovens and counters, buy new land, balance morale to prevent strikes, and keep the dough&mdash;and cash&mdash;rol",
        descZh: "经营一家温馨的披萨店，发展成为全城连锁。雇佣和管理员工，升级烤箱和柜台，购买新土地，平衡士气以防止罢工，让面团和现金滚滚而来",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/la3akmhdsim4g3vztf22xdk3recbrkec/512x384.jpg",
        url: "https://html5.gamemonetize.com/la3akmhdsim4g3vztf22xdk3recbrkec/",
        controls: "Mouse/Touch"
    },
    {
        id: 1041,
        title: "Found It! Hidden Object Game",
        titleZh: "找到了！隐藏物体游戏",
        desc: "The addictive &amp; FREE hidden objects puzzle game for you to train your brain and kill boredom! Take the challenge and relax with super fun hidden object puzzles and casual finding games. Spot, seek",
        descZh: "这款令人上瘾的免费隐藏物体益智游戏，让你锻炼大脑并打发无聊时光！接受挑战，在超级有趣的隐藏物体谜题和休闲寻找游戏中放松身心。发现、寻找",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/rpque3q0zlm0z2jiecj7wmokvr4wzai8/512x384.jpg",
        url: "https://html5.gamemonetize.com/rpque3q0zlm0z2jiecj7wmokvr4wzai8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1042,
        title: "number merger",
        titleZh: "数字合并",
        desc: "Dive into the ultimate idle puzzle experience with Number Merger Infinite! Drag and merge blocks to reach impossible numbers like 99,999 and beyond. Manage your economy, upgrade your fabricators, and ",
        descZh: "沉浸在《数字合并：无限》的终极闲置益智体验中！拖动和合并方块，达到99,999甚至更高的不可能数字。管理你的经济，升级你的制造器，并且",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/ylbicwd30vva0awbilt3x3ryxjkg5v59/512x384.jpg",
        url: "https://html5.gamemonetize.com/ylbicwd30vva0awbilt3x3ryxjkg5v59/",
        controls: "Mouse/Touch"
    },
    {
        id: 1043,
        title: "Draw Dot Picture Game",
        titleZh: "点画游戏",
        desc: "Welcome to Draw One Miss Part Brain Games, the addictive puzzle game where logic, drawing, and brain games come together! Think you&rsquo;re good at spotting details? Test your skills by identifying t",
        descZh: "欢迎来到《画一个缺失部分》脑力游戏，这是一款将逻辑、绘画和脑力游戏融合在一起的令人上瘾的益智游戏！你觉得自己擅长发现细节吗？通过识别",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/nj974v2hmarol6ij7nr8op8qt1cq5x33/512x384.jpg",
        url: "https://html5.gamemonetize.com/nj974v2hmarol6ij7nr8op8qt1cq5x33/",
        controls: "Mouse/Touch"
    },
    {
        id: 1044,
        title: "Snake Battle",
        titleZh: "贪吃蛇大战",
        desc: "Experience the Ultimate IO Battle Thrill! In Snake Battle, consume glowing dots to grow and use tactical maneuvers to cut off enemies, forcing them to crash into you! Dual Modes: Tackle the strategic ",
        descZh: "体验终极IO对战的刺激！在《贪吃蛇大战》中，吞噬发光的圆点来成长，并使用战术动作切断敌人，迫使他们撞到你身上！双重模式：挑战战略",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/69an8dj2qbecd9ek1dca4e9rmq6g3d6e/512x384.jpg",
        url: "https://html5.gamemonetize.com/69an8dj2qbecd9ek1dca4e9rmq6g3d6e/",
        controls: "Mouse/Touch"
    },
    {
        id: 1045,
        title: "Food Game Grill Sort",
        titleZh: "美食游戏：烧烤排序",
        desc: "Welcome to Food Game - Grill Sort, the sizzling casual puzzle simulation game that will make your taste buds tingle. Become a master grill chef as you carefully sort and match delicious skewers on the",
        descZh: "欢迎来到《美食游戏：烧烤排序》，这是一款令人垂涎欲滴的休闲益智模拟游戏，会让你的味蕾兴奋不已。成为一名烧烤大师，在烤架上仔细排序和匹配美味的串串",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/x18szni3pe1a4863gcud2kqig4rhrgfg/512x384.jpg",
        url: "https://html5.gamemonetize.com/x18szni3pe1a4863gcud2kqig4rhrgfg/",
        controls: "Mouse/Touch"
    },
    {
        id: 1046,
        title: "Real Grand Truck Simulator Game",
        titleZh: "真实大型卡车模拟器",
        desc: "Welcome to the legendary truck parking game. The most realistic and thrilling truck parking simulation game. Are you ready to prove your driving and parking skills with powerful trucks? Get ready for ",
        descZh: "欢迎来到传奇的卡车停车游戏。最真实、最刺激的卡车停车模拟游戏。你准备好用强大的卡车证明你的驾驶和停车技能了吗？准备好迎接",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/li3mjjfsponfzv0lrbdraonb6qqf9g4i/512x384.jpg",
        url: "https://html5.gamemonetize.com/li3mjjfsponfzv0lrbdraonb6qqf9g4i/",
        controls: "Mouse/Touch"
    },
    {
        id: 1047,
        title: "Highway Car Racing Game",
        titleZh: "高速公路赛车游戏",
        desc: "Enjoy the cutting edge 3D graphics with realistically created environments and amazingly detailed cars. Race at high speeds, drive against traffic and overtake cars! Dont push your luck in sticky situ",
        descZh: "享受最先进的3D图形，逼真的环境和惊人的车辆细节。高速行驶，逆向行驶并超越其他车辆！在棘手的情况下不要冒险",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/qbqv80h4e5r9avum225uy3hxqdxu5793/512x384.jpg",
        url: "https://html5.gamemonetize.com/qbqv80h4e5r9avum225uy3hxqdxu5793/",
        controls: "Mouse/Touch"
    },
    {
        id: 1048,
        title: "City Car Pick And Drop Game",
        titleZh: "城市汽车接送游戏",
        desc: "Welcome to the car pick and drop game. Get ready to experience the most realistic, thrilling, and immersive car driving adventure game. In this game you are not just driving, you are providing an esse",
        descZh: "欢迎来到汽车接送游戏。准备好体验最真实、最刺激、最具沉浸感的汽车驾驶冒险游戏。在这个游戏中，你不仅仅是驾驶，你还提供了一项必要的",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/874bx7nponra853hk8751z6ui4ssa07q/512x384.jpg",
        url: "https://html5.gamemonetize.com/874bx7nponra853hk8751z6ui4ssa07q/",
        controls: "Mouse/Touch"
    },
    {
        id: 1049,
        title: "Fruit Catchere",
        titleZh: "水果捕捉者",
        desc: "Get ready to experience the juicy fun of Fruit Catcher, a simple yet addictive game that will test your reflexes, timing, and hand-eye coordination! Step into the colorful world of fruits, where your ",
        descZh: "准备好体验《水果捕捉者》的多汁乐趣吧！这是一款简单但令人上瘾的游戏，将测试你的反应能力、时机把握和手眼协调能力！踏入色彩缤纷的水果世界，你的",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/18vy36scythopw8n2oibpaltoj3wvjwp/512x384.jpg",
        url: "https://html5.gamemonetize.com/18vy36scythopw8n2oibpaltoj3wvjwp/",
        controls: "Mouse/Touch"
    },
    {
        id: 1050,
        title: "Neon Pulse Arena",
        titleZh: "霓虹脉冲竞技场",
        desc: "Neon Pulse Arena is a fast-reaction survival arcade game where you dodge incoming shapes and push your limits for as long as possible. Every second you survive, the arena becomes more intense. Simple ",
        descZh: "《霓虹脉冲竞技场》是一款快速反应的生存街机游戏，你需要躲避来袭的形状，并尽可能长时间地挑战自己的极限。你存活的每一秒，竞技场都会变得更加激烈。简单",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/54o8e31n5pikjwkpbotk09ffg09eluy1/512x384.jpg",
        url: "https://html5.gamemonetize.com/54o8e31n5pikjwkpbotk09ffg09eluy1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1051,
        title: "Labubu Find the Differences",
        titleZh: "Labubu找不同",
        desc: "Labubu Find the Differences is an amazing and free to play online game for kids. The aim of the game is to fin all 5 differences on each level to enter a new one. Labubu theme and a lot of fun is wait",
        descZh: "《Labubu找不同》是一款专为孩子们设计的免费在线游戏，非常有趣！游戏的目标是在每个关卡中找出所有5个不同之处，以进入下一个关卡。Labubu主题和许多乐趣正在等待",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/o1770rkhfl4qeja9s68btv7flae5ooe7/512x384.jpg",
        url: "https://html5.gamemonetize.com/o1770rkhfl4qeja9s68btv7flae5ooe7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1052,
        title: "Easy Picture Colouring Game",
        titleZh: "简易图片涂色游戏",
        desc: "Looking for coloring games for kids? Try our fun coloring for kids &mdash; a perfect blend of creativity, learning, and kids coloring gameplay! Simply tap a picture from our coloring book for kids and",
        descZh: "正在寻找适合孩子的涂色游戏吗？试试我们有趣的儿童涂色游戏吧！它完美融合了创造力、学习和儿童涂色玩法！只需从我们的儿童涂色书中点击一张图片，然后",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/85n63q0psxqw26ojixem9459svfp46ld/512x384.jpg",
        url: "https://html5.gamemonetize.com/85n63q0psxqw26ojixem9459svfp46ld/",
        controls: "Mouse/Touch"
    },
    {
        id: 1053,
        title: "ASMR Mini Puzzle Games 2024",
        titleZh: "ASMR迷你益智游戏2024",
        desc: "Need a quick stress release? Weve got you covered with a variety of virtual popping games. Pop bubble wrap that never runs out, fidget with popping buttons that click oh-so-satisfyingly, and explore a",
        descZh: "需要快速释放压力吗？我们为您提供了各种虚拟点击游戏。点击永远不会用完的气泡膜，摆弄发出令人满意咔嗒声的按钮，并探索一",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/i376ctj4firbz34cju00yyepssrvxco9/512x384.jpg",
        url: "https://html5.gamemonetize.com/i376ctj4firbz34cju00yyepssrvxco9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1054,
        title: "Emotional Support Duck",
        titleZh: "情感支持鸭",
        desc: "Emotional Support Duck is a cozy life-management game where you balance your Emotional Energy and your duck&rsquo;s Support Capacity. Face 100+ random events, enjoy soothing visuals and ambient audio,",
        descZh: "《情感支持鸭》是一款温馨的生活管理游戏，你需要平衡你的情感能量和鸭子的支持能力。面对100多个随机事件，享受舒缓的视觉效果和环境音效",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/8j1yrpb0xpmufhojds2rloowa334q7ts/512x384.jpg",
        url: "https://html5.gamemonetize.com/8j1yrpb0xpmufhojds2rloowa334q7ts/",
        controls: "Mouse/Touch"
    },
    {
        id: 1055,
        title: "Dinosaur Games For Toddlers",
        titleZh: "幼儿恐龙游戏",
        desc: "Welcome to Dinosaur Games For Toddlers, a casual collection of minigames on dinosaur themes. Paint a vivid dinosaur in coloring book games, click to see how an egg transforms into chicks, and join a f",
        descZh: "欢迎来到《幼儿恐龙游戏》，这是一款以恐龙为主题的休闲迷你游戏集合。在涂色书游戏中画出栩栩如生的恐龙，点击查看蛋如何变成小鸡，并加入一场",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/okteqriu3kq21tj9s55swx4u4o4zg732/512x384.jpg",
        url: "https://html5.gamemonetize.com/okteqriu3kq21tj9s55swx4u4o4zg732/",
        controls: "Mouse/Touch"
    },
    {
        id: 1056,
        title: "Frank In Geometry Maps",
        titleZh: "弗兰克的几何迷宫",
        desc: "Frank in Geometry Maps is a fast-paced platformer where you control a cube through six intricate mazes. The game throws obstacles like spikes and moving platforms at you while your character speeds al",
        descZh: "弗兰克的几何迷宫是一款快节奏的平台游戏，你需要控制一个方块穿越六个复杂的迷宫。游戏会向你投掷尖刺和移动平台等障碍物。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/8ansls0hjssmsr3rk8ry4clfmwbqq8qn/512x384.jpg",
        url: "https://html5.gamemonetize.com/8ansls0hjssmsr3rk8ry4clfmwbqq8qn/",
        controls: "Mouse/Touch"
    },
    {
        id: 1057,
        title: "Timely Delivery",
        titleZh: "及时送达",
        desc: "Timely Delivery is a fast and casual delivery runner. Press and hold to move, release to stop - simple controls, tight time constraints. Make your way through crowds and traffic, complete delivery quo",
        descZh: "及时送达是一款快速休闲的送货跑酷游戏。按住移动，松开停止 - 控制简单，时间紧迫。穿过人群和交通，完成送货配额。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/cfr12fabbug90fu9aqqqpatan4adauwy/512x384.jpg",
        url: "https://html5.gamemonetize.com/cfr12fabbug90fu9aqqqpatan4adauwy/",
        controls: "Mouse/Touch"
    },
    {
        id: 1058,
        title: "Monster Truck Zombies&nbsp;Game",
        titleZh: "Monster Truck 僵尸s&nbsp;Game",
        desc: "Monster Truck Games Kids: Ignite your child&rsquo;s passion for high-octane fun with colossal bigfoot trucks and thrilling monster truck collisions! Watch little racers zoom through dazzling arenas, c",
        descZh: "Monster Truck Games Kids: Ignite your child&rsquo;s passion for high-octane fun with colossal bigfoo...",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/vx9c332rtjn79s9qjidasv804co4lbwd/512x384.jpg",
        url: "https://html5.gamemonetize.com/vx9c332rtjn79s9qjidasv804co4lbwd/",
        controls: "Mouse/Touch"
    },
    {
        id: 1059,
        title: "Go Mafalda!",
        titleZh: "玛法达快跑",
        desc: "Run as Mafalda in this pixelated endless runner! Collect apples to boost your score and dodge slimy slimes to stay alive as long as possible!",
        descZh: "在这个像素化的无尽跑酷游戏中扮演玛法达！收集苹果来提高分数，躲避黏糊糊的史莱姆，尽可能长时间地生存！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/1hsabrp99x1yy9f9vs267k2gt0fvlv0i/512x384.jpg",
        url: "https://html5.gamemonetize.com/1hsabrp99x1yy9f9vs267k2gt0fvlv0i/",
        controls: "Mouse/Touch"
    },
    {
        id: 1060,
        title: "3D Kid Sliding Puzzle",
        titleZh: "3D儿童滑动拼图",
        desc: "Solve a variety of 3&times;3 and 3&times;4 slide puzzles featuring cute animal drawings by moving one piece at a time into the open space on the puzzle. When all pieces are in the correct position the",
        descZh: "解决各种以可爱动物图画为特色的3x3和3x4滑动拼图，每次将一块拼图移动到空位上。当所有拼图都在正确位置时...",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/r9j8tc1hmo3v4q59qbap0e7jhv3m9smc/512x384.jpg",
        url: "https://html5.gamemonetize.com/r9j8tc1hmo3v4q59qbap0e7jhv3m9smc/",
        controls: "Mouse/Touch"
    },
    {
        id: 1061,
        title: "Power Boat Racing Game",
        titleZh: "动力艇竞速",
        desc: "Welcome to the world of power boat games. Get ready for high-speed thrills on the water with PowerBoat Racing, the most realistic and action-packed powerboat simulator game. Take a break from the hust",
        descZh: "欢迎来到动力艇游戏的世界。准备好在动力艇竞速中体验水上高速惊险，这是最真实、最充满动作的动力艇模拟游戏。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/m7neml8mldms64runb0a6bhaaro21hhh/512x384.jpg",
        url: "https://html5.gamemonetize.com/m7neml8mldms64runb0a6bhaaro21hhh/",
        controls: "Mouse/Touch"
    },
    {
        id: 1062,
        title: "Solitaire: Card Sorting",
        titleZh: "纸牌分类",
        desc: "An intellectual card puzzle that combines the mechanics of classic solitaire with the logic of thematic sorting. At each level, you need to organize cards into categories: plants, jewelry, toys, tools",
        descZh: "一款结合了经典纸牌接龙机制和主题分类逻辑的智力纸牌谜题。在每个级别，你需要将卡片分类为：植物、珠宝、玩具、工具...",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/8g0f47j2ywc7mtqftraxeu45z13qw3hg/512x384.jpg",
        url: "https://html5.gamemonetize.com/8g0f47j2ywc7mtqftraxeu45z13qw3hg/",
        controls: "Mouse/Touch"
    },
    {
        id: 1063,
        title: "Jigsolitaire Deluxe",
        titleZh: "豪华拼图接龙",
        desc: "Jigsolitaire Deluxe is a refined card-based puzzle where every level turns into the creation of a masterpiece. Move picture cards around the board to connect them into a seamless image &mdash; from fa",
        descZh: "豪华拼图接龙是一款精致的基于卡片的谜题，每一关都变成了一幅杰作的创作。在板上移动图片卡片，将它们连接成无缝的图像。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/23sgyhikibl5jvylyk2uub6wksiq8tfo/512x384.jpg",
        url: "https://html5.gamemonetize.com/23sgyhikibl5jvylyk2uub6wksiq8tfo/",
        controls: "Mouse/Touch"
    },
    {
        id: 1064,
        title: "Hen Bubble Go Up Game",
        titleZh: "母鸡气泡上升",
        desc: "Hen Bubble Go Up Game is a fun and simple game where a cute hen flies upward inside a bubble. Your main goal is to help the hen rise safely while avoiding different obstacles. The game is designed wit",
        descZh: "母鸡气泡上升是一款有趣而简单的游戏，一只可爱的母鸡在气泡中向上飞行。你的主要目标是帮助母鸡安全上升，同时避开不同的障碍物。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/zlzf1kffk3viwxaxuw6uhecozdcb85u2/512x384.jpg",
        url: "https://html5.gamemonetize.com/zlzf1kffk3viwxaxuw6uhecozdcb85u2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1065,
        title: "Aqualogics Puzzles Game",
        titleZh: "水逻辑解谜",
        desc: "Aqualogics is a challenging and fast-paced water sorting puzzle game designed for sharp minds! Sort all colored liquids into separate tubes using logic, planning, and limited moves. Features:  100 Pro",
        descZh: "水逻辑解谜是一款为敏锐头脑设计的具有挑战性和快节奏的水分类益智游戏！使用逻辑、规划和有限的步骤将所有有色液体分拣到单独的管中。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/myfre67i1rsz9gav2l0in0rfqct6mrjy/512x384.jpg",
        url: "https://html5.gamemonetize.com/myfre67i1rsz9gav2l0in0rfqct6mrjy/",
        controls: "Mouse/Touch"
    },
    {
        id: 1066,
        title: "Men Vs Gorillas",
        titleZh: "人类大战猩猩",
        desc: "Men vs Gorilla &ndash; The Ultimate Evolution Battle! Step into the wild showdown of Man vs Gorilla! Upgrade your human&rsquo;s strength, damage, and health to survive the rising fury of the jungle&rs",
        descZh: "人类大战猩猩——终极进化之战！踏入人类与猩猩的狂野对决！升级人类的力量、伤害和生命值，以在丛林的愤怒中生存。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/g04edxyis63ewbo539y721f4qpa3n1nt/512x384.jpg",
        url: "https://html5.gamemonetize.com/g04edxyis63ewbo539y721f4qpa3n1nt/",
        controls: "Mouse/Touch"
    },
    {
        id: 1067,
        title: "Phone Case Diy Kpop Fans",
        titleZh: "Kpop粉丝手机壳DIY",
        desc: "Welcome to Phone Case DIY Kpop Fans, a casual fashion design game that you can play for free. You will act as a phone case designer and create cool and latest phone cases for your Kpop girls! Use spra",
        descZh: "欢迎来到Kpop粉丝手机壳DIY，这是一款免费的休闲时尚设计游戏。你将扮演手机壳设计师，为你的Kpop女孩设计超酷的最新手机壳！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/sk9x91sn2cabxx0s7wksvwqsa923iccw/512x384.jpg",
        url: "https://html5.gamemonetize.com/sk9x91sn2cabxx0s7wksvwqsa923iccw/",
        controls: "Mouse/Touch"
    },
    {
        id: 1068,
        title: "Spider Match",
        titleZh: "蜘蛛人匹配",
        desc: "Unleash your inner hero and become the legend you were destined to be. Prepare for an epic adventure in a Spiderman world where only the strongest heroes thrive.  Collect powerful superheroes, build y",
        descZh: "释放你内心的英雄，成为传奇。准备好在蜘蛛人世界中进行史诗般的冒险，只有最强大的英雄才能茁壮成长。收集强大的超级英雄。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/sjghavwkh9bpg0i06sgsnve9uxomk6x2/512x384.jpg",
        url: "https://html5.gamemonetize.com/sjghavwkh9bpg0i06sgsnve9uxomk6x2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1069,
        title: "Legend Dream Football Game",
        titleZh: "传奇梦幻足球",
        desc: "Get ready to dive into the electrifying world of football. Step into the thrilling world of football with the football champions game. Ultimate soccer game, the ultimate sports experience for fans of ",
        descZh: "准备好潜入激动人心的足球世界。通过足球冠军赛踏入惊险刺激的足球领域。终极足球游戏，为球迷带来的终极体育体验。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/bom17v0dxydcmce4incq85b80hxccsqx/512x384.jpg",
        url: "https://html5.gamemonetize.com/bom17v0dxydcmce4incq85b80hxccsqx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1070,
        title: "Toy Rumble 3D",
        titleZh: "玩具大乱斗 3D",
        desc: "Begin an explosive toy adventure in Toy Rumble 3D. A 3D running and racing arcade game packed with action, speed, and strategy. Move your tank through chaotic obstacle courses, collect parts, assemble",
        descZh: "在玩具大乱斗3D中开始一场爆炸性的玩具冒险。这是一款充满动作、速度和策略的3D跑酷竞速游戏。驾驶坦克穿越混乱的障碍训练场。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/0a9w8rhj93oivc5ax2ag9khog6k9klar/512x384.jpg",
        url: "https://html5.gamemonetize.com/0a9w8rhj93oivc5ax2ag9khog6k9klar/",
        controls: "Mouse/Touch"
    },
    {
        id: 1071,
        title: "Obby Universe: Mini Games Online",
        titleZh: "奥比宇宙：在线迷你游戏",
        desc: "Obby Universe: Mini Games Online A world of incredible adventures! Play: Escape lava waves and outsmart evil traps in unique mini-games. Explore: Find secrets and enjoy parachute jumps or water slides",
        descZh: "奥比宇宙：在线迷你游戏，一个充满不可思议冒险的世界！游玩：逃离熔岩浪潮，在独特的迷你游戏中智胜邪恶陷阱。探索：寻找秘密，享受跳伞或水滑梯。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/rigii51flinmiis7djlyliiwf3ggc9r1/512x384.jpg",
        url: "https://html5.gamemonetize.com/rigii51flinmiis7djlyliiwf3ggc9r1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1072,
        title: "Puzzle Legends: Game of Heroes",
        titleZh: "益智传奇：英雄游戏",
        desc: "Dive into the colorful world of Puzzle Legends, the ultimate match-3 puzzle game where strategy, skill, and quick thinking collide! Swap, match, and crush gems to solve challenging puzzles while unloc",
        descZh: "潜入益智传奇的多彩世界，这是一款终极三消益智游戏，策略、技巧和快速思维在这里碰撞！交换、匹配并粉碎宝石以解决具有挑战性的难题。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/m8n8ghtemiogm3qr1wu4x7udws58b84n/512x384.jpg",
        url: "https://html5.gamemonetize.com/m8n8ghtemiogm3qr1wu4x7udws58b84n/",
        controls: "Mouse/Touch"
    },
    {
        id: 1073,
        title: "ASMR Relaxing Puzzle Games",
        titleZh: "ASMR放松解谜",
        desc: "Relax with Antistress relaxing toy games by playing A fidget toys 3D Spinner, or just Smash Some Phones to relieve stress, or you can also pop bubbles with a bubble wrap to relax Your mind with antist",
        descZh: "通过玩3D指尖陀螺或粉碎手机来放松身心，或者通过气泡膜来缓解压力，享受抗压放松玩具游戏。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/x8n96yantm6dnnqq98nud7qlvhu180dz/512x384.jpg",
        url: "https://html5.gamemonetize.com/x8n96yantm6dnnqq98nud7qlvhu180dz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1074,
        title: "Health Protection",
        titleZh: "健康保卫战",
        desc: "Health Protection is a survival journey inside the body, where you play the role of a brave beneficial bacteria warrior, standing up to protect health from harmful bacteria waves invading. Initially, ",
        descZh: "健康保卫战是一场体内生存之旅，你扮演勇敢的有益细菌战士，挺身而出保护健康免受有害细菌波的侵袭。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/j5ksbudef7eir5mwrj6mdric2lq1h7c7/512x384.jpg",
        url: "https://html5.gamemonetize.com/j5ksbudef7eir5mwrj6mdric2lq1h7c7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1075,
        title: "Animal Bus Traffic Jam",
        titleZh: "动物巴士大堵塞",
        desc: "All aboard for the cutest puzzle ride ever in Animal Bus Traffic Jam. This clever match-3 sort puzzle and casual logic game challenges you to help adorable animal passengers find their correct buses. ",
        descZh: "在动物巴士大堵塞中体验最可爱的益智之旅。这个聪明的三消分类游戏和休闲逻辑游戏挑战你帮助可爱的动物乘客找到正确的巴士。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/srinp50qip55glw9w2efsi4phsioa5qu/512x384.jpg",
        url: "https://html5.gamemonetize.com/srinp50qip55glw9w2efsi4phsioa5qu/",
        controls: "Mouse/Touch"
    },
    {
        id: 1076,
        title: "Dino Idle Park",
        titleZh: "恐龙放置公园",
        desc: "Dino Idle Park is a relaxing leisure real estate tycoon where you create and develop a dinosaur amusement park. Expand plots, release and display dinosaurs, optimize queues and parks, hire staff, and ",
        descZh: "恐龙放置公园是一款放松的休闲房地产大亨游戏，你可以在其中创建和开发恐龙游乐园。扩充地块、释放和展示恐龙、优化排队队伍。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/gurifvt11u531slx3g2euizginnvaag0/512x384.jpg",
        url: "https://html5.gamemonetize.com/gurifvt11u531slx3g2euizginnvaag0/",
        controls: "Mouse/Touch"
    },
    {
        id: 1077,
        title: "Labubu Antistress Game",
        titleZh: "Labubu解压游戏",
        desc: "Labubu Antistress Game is an amazing and free to play online game for kids. play around with our lovely Labubu doll and have fun!",
        descZh: "Labubu解压游戏是一款专为儿童设计的奇妙免费在线游戏。和我们需要可爱的Labubu玩偶一起玩耍，享受乐趣！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/ko1brbmzswyng2twamjyngif346vfm18/512x384.jpg",
        url: "https://html5.gamemonetize.com/ko1brbmzswyng2twamjyngif346vfm18/",
        controls: "Mouse/Touch"
    },
    {
        id: 1078,
        title: "Brainrot Cleaning",
        titleZh: "脑洞大扫除",
        desc: "Welcome to Brainrot Cleaning, the weirdly satisfying cleaning simulation that turns chaos into calm. In this fun and quirky casual game, your job is to scrub away the mess caused by the wild world of ",
        descZh: "欢迎来到脑洞大扫除，这是一款奇怪又令人满意的清洁模拟游戏，将混乱变平静。在这个有趣古怪的休闲游戏中，你的工作是擦去烂摊子。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/977eerotjsnb1mdc4vl4oek1g1ilp9bq/512x384.jpg",
        url: "https://html5.gamemonetize.com/977eerotjsnb1mdc4vl4oek1g1ilp9bq/",
        controls: "Mouse/Touch"
    },
    {
        id: 1079,
        title: "Angry Zombies War Game",
        titleZh: "Angry 僵尸s War Game",
        desc: "Angry Zombies You have to eliminate zombies with the skull You throw the skull at the zombie by dragging it back. There are two modes in the game: Easy and Hard mode. Hard mode doesnt have an aim sigh",
        descZh: "Angry Zombies You have to eliminate zombies with the skull You throw the skull at the zombie by drag...",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/qmiqy19ao70stllycsh79urhk93mk086/512x384.jpg",
        url: "https://html5.gamemonetize.com/qmiqy19ao70stllycsh79urhk93mk086/",
        controls: "Mouse/Touch"
    },
    {
        id: 1080,
        title: "Block puzzle legend",
        titleZh: "Block puzzle legend",
        desc: "Challenge your brain in Block Puzzle Legend. Enjoy the ultimate classic puzzle game. Slide, match, and blast blocks to clear the board and reach new high scores. This casual game is perfect for quick ",
        descZh: "Challenge your brain in Block Puzzle Legend. Enjoy the ultimate classic puzzle game. Slide, match, a...",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/n383lwm9rj72iqfto0xgve8yp69v0svq/512x384.jpg",
        url: "https://html5.gamemonetize.com/n383lwm9rj72iqfto0xgve8yp69v0svq/",
        controls: "Mouse/Touch"
    },
    {
        id: 1081,
        title: "Ultimate Bike Stunt Racing",
        titleZh: "终极摩托车特技",
        desc: "Get ready for a thrilling gameplay experience in this emerging tricky bike stunt game. With a wide variety of bikes to choose from, youll embark on a stimulating journey through challenging tracks and",
        descZh: "准备好在这个新兴的棘手摩托车特技游戏中体验惊险的游戏玩法。有多种摩托车可供选择，你将踏上充满挑战赛道的刺激旅程。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/80zq2crg7nc0mo1awq1oxdbirtg10hlx/512x384.jpg",
        url: "https://html5.gamemonetize.com/80zq2crg7nc0mo1awq1oxdbirtg10hlx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1082,
        title: "3D Sniper Shooting Game",
        titleZh: "3D狙击射击",
        desc: "The best sniper 3d ultimate game 2025. There are gangsters in the town, terrorists, thieves, criminals, and robbers who destroy the peace of the city. Everyone is terrifying in the city Sniper Game 20",
        descZh: "2025年最佳3D狙击终极游戏。城里有破坏城市安宁的歹徒、恐怖分子、小偷、罪犯和强盗。在这款狙击游戏中保护城市。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/5aa8se9unw7t2wqnsqey9i6ddgc67jp3/512x384.jpg",
        url: "https://html5.gamemonetize.com/5aa8se9unw7t2wqnsqey9i6ddgc67jp3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1083,
        title: "Super Zombie Shooter 2",
        titleZh: "超级僵尸射手2",
        desc: "Super Zombie Shooter 2 throws you into a dangerous research facility packed with zombie hordes. Explore dark labs, abandoned corridors, and hidden rooms while fighting to survive. Each level challenge",
        descZh: "超级僵尸射手2将你带入一个充满僵尸群的危险研究设施。探索黑暗的实验室、废弃的走廊和隐藏的房间，同时为生存而战。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/fu9e3j7jqq5pwejo86w0gyxiv050eaz2/512x384.jpg",
        url: "https://html5.gamemonetize.com/fu9e3j7jqq5pwejo86w0gyxiv050eaz2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1084,
        title: "Road Of Fury 4",
        titleZh: "狂怒之路4",
        desc: "Road Of Fury 4 is an explosive scroller shooter game set in a world of post-apocalypse.  Team-up with other nomads, upgrade cars, guns and super-powers and use your skills to fight through 30 levels a",
        descZh: "狂怒之路4是一款设定在末日后世界的爆炸性卷轴射击游戏。与其他游牧民族组队，升级汽车、枪支和超能力，战斗闯过30关。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/178lcz542682rtzlmgxullzpbbhjh3ad/512x384.jpg",
        url: "https://html5.gamemonetize.com/178lcz542682rtzlmgxullzpbbhjh3ad/",
        controls: "Mouse/Touch"
    },
    {
        id: 1085,
        title: "SkyTap Dash",
        titleZh: "天空点击冲刺",
        desc: "SkyTap Dash is a fast-paced tap-to-fly arcade game with smooth controls, medals, 3 difficulty modes, and addictive gameplay. Easy to learn, hard to master, and perfectly optimized for mobile browsers.",
        descZh: "天空点击冲刺是一款快节奏的点击飞行街机游戏，拥有流畅的控制、勋章、3种难度模式和令人上瘾的游戏玩法。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/yy8s2tp0hje8zae0h1rtt0yd4a8fmlsm/512x384.jpg",
        url: "https://html5.gamemonetize.com/yy8s2tp0hje8zae0h1rtt0yd4a8fmlsm/",
        controls: "Mouse/Touch"
    },
    {
        id: 1086,
        title: "Strike The Can Game",
        titleZh: "击倒罐子",
        desc: "Can you smash hit all the cans and make them fall down? The can knockdown game is fun and interesting to play and can test your aiming skills. Its an aiming and physics-based game where you have to st",
        descZh: "你能击倒所有的罐子并让它们掉下来吗？这款罐子击倒游戏既有趣又好玩，可以测试你的瞄准技巧。这是一个基于物理的瞄准游戏。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/2ju5z5sfiqnq494twgl9ngxp6jr7raus/512x384.jpg",
        url: "https://html5.gamemonetize.com/2ju5z5sfiqnq494twgl9ngxp6jr7raus/",
        controls: "Mouse/Touch"
    },
    {
        id: 1087,
        title: "Miami City Crime Simulator Game",
        titleZh: "迈阿密犯罪模拟",
        desc: "Miami Crime Simulator sets the stage for non-stop action as you travel through a city filled with challenges and gangsters. Engage in street races through Miami&rsquo;s neighborhoods, dodging police c",
        descZh: "迈阿密犯罪模拟为你在这个充满挑战和黑帮的城市中的不间断行动搭建了舞台。在迈阿密的社区中进行街头赛车，躲避警车。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/xprw37zlon1jvygprtro5gdoobefune4/512x384.jpg",
        url: "https://html5.gamemonetize.com/xprw37zlon1jvygprtro5gdoobefune4/",
        controls: "Mouse/Touch"
    },
    {
        id: 1088,
        title: "Brainrot Mob Clash 3D",
        titleZh: "脑洞暴徒冲突 3D",
        desc: "Welcome to the wild and chaotic world of Brainrot Mob Clash 3D. It&rsquo;s a full-blown racing and fighting adventure. Dash through 3D obstacle courses, avoid deadly traps like spikes and spinning saw",
        descZh: "欢迎来到脑洞暴徒冲突3D的狂野混乱世界。这是一场全面的竞速和战斗冒险。穿越3D障碍赛道，避开尖刺和旋转锯等致命陷阱。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/zuyfbfbzgk33arr72z3n89o33iaqtwfj/512x384.jpg",
        url: "https://html5.gamemonetize.com/zuyfbfbzgk33arr72z3n89o33iaqtwfj/",
        controls: "Mouse/Touch"
    },
    {
        id: 1089,
        title: "No Wifi Mini Games 2025",
        titleZh: "2025无网迷你游戏",
        desc: "When you need relaxation, diversion or just a moment of distraction enjoy this collection of toys: hear the sound of a bamboo chime, play with wooden boxes, swipe gently your finger in the water, tap ",
        descZh: "当需要放松、消遣或只是想分心片刻时，享受这组玩具合集：听竹铃的声音，玩木箱，轻轻在水中滑动手指。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/roo2t4sin2amtiqi682gbl3y0tf5y5t2/512x384.jpg",
        url: "https://html5.gamemonetize.com/roo2t4sin2amtiqi682gbl3y0tf5y5t2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1090,
        title: "DunkChallenge",
        titleZh: "扣篮挑战",
        desc: "Dunk Challenge is a skill game where you control a basketball, trying to get it into the hoop in the most skillful way possible. But its not that simple &mdash; unexpected obstacles always appear alon",
        descZh: "扣篮挑战是一款技巧游戏，你需要控制篮球，尽可能巧妙地将其投入篮筐。但这并不简单——意想不到的障碍总是会出现。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/fgf2u6fqdr4nwodcpxe0ur2py8vh3kuu/512x384.jpg",
        url: "https://html5.gamemonetize.com/fgf2u6fqdr4nwodcpxe0ur2py8vh3kuu/",
        controls: "Mouse/Touch"
    },
    {
        id: 1091,
        title: "Big Supermarket Simulator",
        titleZh: "大型超市模拟器",
        desc: "Big Supermarket Simulator is a light business simulation game: start from a small supermarket, restock, cashier, clean, and add new products. Every gold coin you earn can be invested in upgrades. As t",
        descZh: "大型超市模拟器是一款轻松的商业模拟游戏：从一个小超市开始，进货、收银、清洁并添加新产品。你赚的每一枚金币都可以投资于升级。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/wpt61nuoce4aib4x6uq1qz4yl001u2td/512x384.jpg",
        url: "https://html5.gamemonetize.com/wpt61nuoce4aib4x6uq1qz4yl001u2td/",
        controls: "Mouse/Touch"
    },
    {
        id: 1092,
        title: "Cut The Rope Unblocked",
        titleZh: "割绳子畅玩版",
        desc: "Begin a brain-teasing adventure with Cut The Rope Unblocked. This addictive puzzle game is packed with clever logic puzzles and clear levels. It will challenge your mind and reflexes. By cutting the r",
        descZh: "开始一场烧脑的割绳子冒险。这款令人上瘾的益智游戏充满了巧妙的逻辑谜题和清晰的关卡。它将挑战你的思维和反应能力。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/ako88227j1m9mbizistu27ad51e97klr/512x384.jpg",
        url: "https://html5.gamemonetize.com/ako88227j1m9mbizistu27ad51e97klr/",
        controls: "Mouse/Touch"
    },
    {
        id: 1093,
        title: "Zombie Waves 2",
        titleZh: "僵尸浪潮2",
        desc: "Face endless chaos in Zombie Waves, an intense action and strategy game. Waves of terrifying zombies are invading your territory, and only you can guard the last defense line. Drag your character to s",
        descZh: "在僵尸浪潮中面对无尽的混乱，这是一款激烈的动作策略游戏。可怕的僵尸浪潮正在入侵你的领土，只有你能守住最后一道防线。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/fr8ljaub5ph4cwxo3fzit82t2mtkzib3/512x384.jpg",
        url: "https://html5.gamemonetize.com/fr8ljaub5ph4cwxo3fzit82t2mtkzib3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1094,
        title: "Stick War Saga",
        titleZh: "火柴人战争传奇",
        desc: "Prepare for an epic clash in Stick War: Saga, an exciting blend of fighting, action, strategy, and tower defense. Take command of your stickman army and lead them through nervous war campaigns. Mine r",
        descZh: "准备好在火柴人战争：传奇中进行史诗般的冲突，这是格斗、动作、策略和塔防的精彩融合。指挥你的火柴人军队，带领他们度过紧张的战争战役。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/va5qos76kvktyfmxfc5pwr52djpfwvmt/512x384.jpg",
        url: "https://html5.gamemonetize.com/va5qos76kvktyfmxfc5pwr52djpfwvmt/",
        controls: "Mouse/Touch"
    },
    {
        id: 1095,
        title: "Cave Crusade",
        titleZh: "洞穴十字军",
        desc: "Cave Crusade takes you on a dangerous journey as a knight in shining armor, venturing into a cursed castle filled with traps and monsters. Your mission is to carefully plan each move, avoid deadly tra",
        descZh: "洞穴十字军带你踏上危险的旅程，扮演穿着闪亮盔甲的骑士，冒险进入充满陷阱和怪物的被诅咒的城堡。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/i1rtpeo3qo7zryifwmr83hxtmouv2z9v/512x384.jpg",
        url: "https://html5.gamemonetize.com/i1rtpeo3qo7zryifwmr83hxtmouv2z9v/",
        controls: "Mouse/Touch"
    },
    {
        id: 1096,
        title: "Army Playground 3D",
        titleZh: "军队游乐场3D",
        desc: "Test your tactical skills on the battlefield. You have a large arsenal of combat units and equipment at your disposal. Upgrade your units, earn diamonds and buy more and more advanced weapons that wil",
        descZh: "在战场上测试你的战术技能。你拥有大量的作战单位和装备。升级你的单位，赚取钻石，购买越来越先进的武器。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/4hqykjny6c6fa490so5o2sds4zghv7wx/512x384.jpg",
        url: "https://html5.gamemonetize.com/4hqykjny6c6fa490so5o2sds4zghv7wx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1097,
        title: "Fruit Helix Jump",
        titleZh: "水果螺旋跳跃",
        desc: "Face a juicy twist on the classic helix adventure in Fruit Helix Jump. Drop your colorful ball down the spiral helix tower and smash through layers of fruit in this exciting 3D arcade experience! Keep",
        descZh: "在水果螺旋跳跃中面对经典螺旋冒险的多汁转折。让你的彩球从螺旋塔上掉下来，在这个激动人心的3D街机体验中粉碎层层水果！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/v6fb51qjfbf7oo9hyfwr81diygoko9d0/512x384.jpg",
        url: "https://html5.gamemonetize.com/v6fb51qjfbf7oo9hyfwr81diygoko9d0/",
        controls: "Mouse/Touch"
    },
    {
        id: 1098,
        title: "Run Cat Run",
        titleZh: "猫咪快跑",
        desc: "An endless runner adventure through pixelated landscapes Features Infinite procedural levels Multiple obstacle types Flying enemies Score tracking Retro pixel art Tips Time your jumps carefully Watch ",
        descZh: "穿过像素化风景的无尽跑酷冒险。拥有无限生成的关卡、多种障碍类型、飞行敌人、分数追踪和复古像素艺术。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/sauiu1emtzmwlyt8ib6rc88t7wetq8ap/512x384.jpg",
        url: "https://html5.gamemonetize.com/sauiu1emtzmwlyt8ib6rc88t7wetq8ap/",
        controls: "Mouse/Touch"
    },
    {
        id: 1099,
        title: "Hunter and Survivor",
        titleZh: "猎人与幸存者",
        desc: "Hunter and Survivor is an intense hide-and-seek game where you play as either the Hunter or the Survivor with completely opposite objectives. If you become the Hunter, you must track down and catch al",
        descZh: "猎人与幸存者是一款激烈的捉迷藏游戏，你可以扮演猎人或幸存者，目标完全相反。如果你成为猎人，你必须追踪并抓住所有人。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/mni7hjcp2h32k0ozwgkiw9rg72vlnv63/512x384.jpg",
        url: "https://html5.gamemonetize.com/mni7hjcp2h32k0ozwgkiw9rg72vlnv63/",
        controls: "Mouse/Touch"
    },
    {
        id: 1100,
        title: "Highway Car Racer Game",
        titleZh: "公路赛车手",
        desc: "Enjoy the cutting edge 3D graphics with realistically created environments and amazingly detailed cars. Race at high speeds, drive against traffic and overtake cars! Dont push your luck in sticky situ",
        descZh: "享受具有逼真环境和惊人细节汽车的最先进3D图形。高速赛车，逆向行驶并超越其他车辆！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/lkyqug7dh8worsk3z1hakch6nzkjlsf5/512x384.jpg",
        url: "https://html5.gamemonetize.com/lkyqug7dh8worsk3z1hakch6nzkjlsf5/",
        controls: "Mouse/Touch"
    },
    {
        id: 1101,
        title: "Sort Game Toy Sort",
        titleZh: "玩具分类游戏",
        desc: "Enjoy some adorable sorting fun in Sort Game: Toy Sort. This delightful match 3 puzzle and casual sort game challenges you to organize colorful dolls and toys. Match and eliminate all dolls within the",
        descZh: "在分类游戏：玩具分类中享受可爱的分类乐趣。这款令人愉快的三消益智和休闲分类游戏挑战你整理五颜六色的玩偶和玩具。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/fd5lnyb9yzs3b30o5t1w11m5z1ggl6ho/512x384.jpg",
        url: "https://html5.gamemonetize.com/fd5lnyb9yzs3b30o5t1w11m5z1ggl6ho/",
        controls: "Mouse/Touch"
    },
    {
        id: 1102,
        title: "World Soccer Game Championship",
        titleZh: "世界足球锦标赛",
        desc: "Be a greatest player in the world of soccer with our new Football game, Soccer Championship of Worldcup 2025, In this Extreme Football Games! Start building your own career as a professional in worlds",
        descZh: "在我们的新足球游戏——2025世界杯足球锦标赛中成为世界上最伟大的球员！开始建立你作为世界职业球员的职业生涯。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/tcmwqk752btbdxuthwtk5ilatulu5ioj/512x384.jpg",
        url: "https://html5.gamemonetize.com/tcmwqk752btbdxuthwtk5ilatulu5ioj/",
        controls: "Mouse/Touch"
    },
    {
        id: 1103,
        title: "MoveBox3D",
        titleZh: "推箱子 3D",
        desc: "MoveBox3D is a spatial puzzle game where you control pushing machines to move boxes into the correct designated positions. Each level is a strategic problem that requires you to observe the layout, ca",
        descZh: "推箱子3D是一款空间益智游戏，你需要控制推动机器将箱子移动到正确的指定位置。每一关都是一个战略问题，需要你观察布局。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/d2eiuneiapb2r72e0ahd4k4kofp5v7aa/512x384.jpg",
        url: "https://html5.gamemonetize.com/d2eiuneiapb2r72e0ahd4k4kofp5v7aa/",
        controls: "Mouse/Touch"
    },
    {
        id: 1104,
        title: "Black Friday Dress Up Selfie",
        titleZh: "黑色星期五换装自拍",
        desc: "Shop the best looks in Black Friday Dress Up Selfie! Help your fashionista choose outfits from her wishlist, cozy fall fits, warm winter layers, sparkly holiday glam, and dark-academia vibes. Mix tops",
        descZh: "在黑色星期五换装自拍中选购最棒的造型！帮助你的时尚达人从愿望清单中选择服装、舒适的秋装、温暖的冬衣、闪亮的节日装扮。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/318d59n5ygif9axk7fohg48p3kq3ywti/512x384.jpg",
        url: "https://html5.gamemonetize.com/318d59n5ygif9axk7fohg48p3kq3ywti/",
        controls: "Mouse/Touch"
    },
    {
        id: 1105,
        title: "Modern Bus Simulator Games",
        titleZh: "现代巴士模拟器",
        desc: "Bus Game 3d 2021 is a Free Games that will teach you to drive a bus simulator ultimate 2022 across different platforms. Play the amazing bus game simulator indonesia bus games 2021, where you can test",
        descZh: "巴士游戏3D是一款免费游戏，教你在不同平台上驾驶终极巴士模拟器。玩惊人的巴士游戏模拟器。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/idt2d0oae69evjj8kxkgtuud886hoxm1/512x384.jpg",
        url: "https://html5.gamemonetize.com/idt2d0oae69evjj8kxkgtuud886hoxm1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1106,
        title: "Save the Girl: Pin Pull",
        titleZh: "拯救女孩：拔销子",
        desc: "When you pull the pin to save girl in a pin lock game, pick up the treasure, there will be scary monsters wondering around, you have to be careful, calculate carefully before pulling the pin to avoid ",
        descZh: "当你在拔销子游戏中拔掉销子来拯救女孩并拾取宝藏时，会有可怕的怪物在周围徘徊，你必须小心，在拔销子之前仔细计算以避免危险。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ou8mqrlep6me679hiz21lxfcjfhuz5cu/512x384.jpg",
        url: "https://html5.gamemonetize.com/ou8mqrlep6me679hiz21lxfcjfhuz5cu/",
        controls: "Mouse/Touch"
    },
    {
        id: 1107,
        title: "Board Score Master Game",
        titleZh: "桌面得分大师",
        desc: "Play the classic board table game with smooth controls, realistic physics, and addictive gameplay. Whether you call it board, pool, or disc pool, this fun board game brings the excitement of pool tabl",
        descZh: "玩这款具有流畅控制、逼真物理效果和令人上瘾的游戏玩法的经典桌面游戏。无论你叫它棋盘、台球还是圆盘台球，这款有趣的棋盘游戏都带来了台球桌的刺激。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/dm7paj6okr54lp77yh3godjn3y3oq5ek/512x384.jpg",
        url: "https://html5.gamemonetize.com/dm7paj6okr54lp77yh3godjn3y3oq5ek/",
        controls: "Mouse/Touch"
    },
    {
        id: 1108,
        title: "Find Word Puzzle Game",
        titleZh: "单词搜索解谜游戏",
        desc: "Uncover hidden words in Word Search - Find Word Puzzle! Challenge yourself with thousands of word search puzzles, word scramble challenges, and letter grids. Perfect for word game enthusiasts, puzzle ",
        descZh: "在单词搜索解谜游戏中发现隐藏的单词！挑战数千个单词搜索谜题、单词混乱挑战和字母网格。非常适合文字游戏爱好者和拼图爱好者。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/4j31h2w1ktjm12odyiqckc149iapav3j/512x384.jpg",
        url: "https://html5.gamemonetize.com/4j31h2w1ktjm12odyiqckc149iapav3j/",
        controls: "Mouse/Touch"
    },
    {
        id: 1109,
        title: "Freecell Classic",
        titleZh: "空当接龙经典版",
        desc: "Play Freecell Classic, the ultimate free online card games experience! This addictive Freecell Solitaire challenges your mind with pure strategy. Unlike other solitaire games, every Freecell card game",
        descZh: "来玩空当接龙经典版，体验终极免费在线纸牌游戏！这款令人上瘾的空当接龙纸牌游戏以纯粹的策略挑战您的思维。与其他纸牌游戏不同，每个空当接龙纸牌游戏都可以获胜。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/aec4x89o56eu8w7tf6bh9sje5gcrdy1l/512x384.jpg",
        url: "https://html5.gamemonetize.com/aec4x89o56eu8w7tf6bh9sje5gcrdy1l/",
        controls: "Mouse/Touch"
    },
    {
        id: 1110,
        title: "WHOT The Ultimate Nigerian Card Game",
        titleZh: "WHOT：终极尼日利亚纸牌游戏",
        desc: "Experience the classic African card game WHOT! Play solo against AI or challenge friends in real-time multiplayer. Features stunning neon graphics, background music, and smooth gameplay. Free to play!",
        descZh: "体验经典的非洲纸牌游戏WHOT！可以单独对抗AI，也可以实时多人挑战朋友。游戏特色包括炫目的霓虹图形、背景音乐和流畅的游戏体验。免费游玩！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/at7gjto5axuv0mv7m4ain5pll3qmutcz/512x384.jpg",
        url: "https://html5.gamemonetize.com/at7gjto5axuv0mv7m4ain5pll3qmutcz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1111,
        title: "OffRoad 4X4 Jeep Game",
        titleZh: "四驱越野吉普车游戏",
        desc: "Have you ever tried jeep driving games? If not, then this offroad jeep game is one of the driving simulator game 2025 experiences you will find. Offroad Jeep Driving Game Sims stands apart from any ot",
        descZh: "你试过吉普车驾驶游戏吗？如果没有，那么这款越野吉普车游戏就是你能找到的2025年驾驶模拟器游戏体验之一。越野吉普车驾驶游戏模拟器与众不同，它提供了最真实的越野驾驶体验。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/ugkhhsz92qor1i1r1unl1c14uq4utj38/512x384.jpg",
        url: "https://html5.gamemonetize.com/ugkhhsz92qor1i1r1unl1c14uq4utj38/",
        controls: "Mouse/Touch"
    },
    {
        id: 1112,
        title: "Penguin Run Adventure Game",
        titleZh: "企鹅跑酷冒险游戏",
        desc: "Penguin run game is adventure and help a little cute Penguin against the alien monsters. Penguin run adventure is specifically designed for people who want to enjoy and play with the coolest and cutes",
        descZh: "企鹅跑酷冒险游戏是一款帮助可爱的小企鹅对抗外星怪物的冒险游戏。这款企鹅跑酷冒险游戏专为想要享受最酷最可爱游戏体验的玩家设计。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/120mbnbz66p5h9gpuztotqaxbbz77id2/512x384.jpg",
        url: "https://html5.gamemonetize.com/120mbnbz66p5h9gpuztotqaxbbz77id2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1113,
        title: "Real Bull Fighting Game",
        titleZh: "真实斗牛游戏",
        desc: "Welcome come back on our latest bull fighting game in which bull attack on city passenger. Before to the bullfight, the bull is held in a tiny, dark isolation cell. He is not given food or water. Conf",
        descZh: "欢迎回到我们最新的斗牛游戏，在这个游戏中公牛会攻击城市中的乘客。在斗牛之前，公牛被关在一个狭小黑暗的隔离间里，不给食物和水。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/yr5extwzdezxpn3tcl6lubl2hk8js3tt/512x384.jpg",
        url: "https://html5.gamemonetize.com/yr5extwzdezxpn3tcl6lubl2hk8js3tt/",
        controls: "Mouse/Touch"
    },
    {
        id: 1114,
        title: "Moto Bike Highway Racing Game",
        titleZh: "摩托车高速公路竞速游戏",
        desc: "Bike Racing Games 2025 can be played with our free offline bike games. Racing motorbikes give you a real feeling of motorcycle riding and performing freestyle motorbike rides in motorcycle racing game",
        descZh: "2025摩托车竞速游戏可以通过我们的免费离线自行车游戏来体验。赛车摩托车让您真正感受到摩托车骑行的乐趣，并在摩托车赛车游戏中表演自由式骑行。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/ip4xo3alng5cmvlc7b2vizs4tgykuwmd/512x384.jpg",
        url: "https://html5.gamemonetize.com/ip4xo3alng5cmvlc7b2vizs4tgykuwmd/",
        controls: "Mouse/Touch"
    },
    {
        id: 1115,
        title: "Arcade Breakout",
        titleZh: "街机打砖块",
        desc: "Dive into the neon-infused world of Arcade Breakout, a modern take on the timeless brick-breaking classic! Control your high-tech paddle, launch the blazing ball, and shatter vibrant rows of bricks ac",
        descZh: "进入充满霓虹灯的街机打砖块世界，这是对经典打砖块游戏的现代演绎！控制你的高科技球拍，发射炽热的球，击碎五彩斑斓的砖块行列。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/exk5zftpns3wcr41el1buf3jtsbn1cug/512x384.jpg",
        url: "https://html5.gamemonetize.com/exk5zftpns3wcr41el1buf3jtsbn1cug/",
        controls: "Mouse/Touch"
    },
    {
        id: 1116,
        title: "Magic Princess",
        titleZh: "魔法公主",
        desc: "Magic Princess is a fashionable ultra-casual simulation girl game with a strong anime chibi style, suitable for all unique girls to play. Game Features  Avatar Creator &amp; Memoji Maker  Make up your",
        descZh: "魔法公主是一款时尚的超休闲模拟女孩游戏，具有强烈的动漫Q版风格，适合所有独特的女孩玩耍。游戏特色：头像创建器和表情包制作器，化妆和换装功能，丰富的服装和配饰选择。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/5szgywdnkc6zixm78fzw1qs0hqodkoat/512x384.jpg",
        url: "https://html5.gamemonetize.com/5szgywdnkc6zixm78fzw1qs0hqodkoat/",
        controls: "Mouse/Touch"
    },
    {
        id: 1117,
        title: "Beaten Barry Prison Face LOL",
        titleZh: "被打的巴里监狱脸 LOL",
        desc: "Get ready to laugh out loud in Beaten Barry Prison Face LOL &ndash; the wacky face-deformation game where you can poke, drag, and squash Barry Prison&rsquo;s face into hilarious shapes! Stretch, bruis",
        descZh: "准备好在《被打的巴里监狱脸 LOL》中开怀大笑吧——这是一款滑稽的脸部变形游戏，你可以戳、拖拽和挤压巴里监狱的脸，把它变成各种搞笑的形状！拉伸、 bruise（挫伤）、扭曲，创造属于你的独特表情。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/260vz9cqhbz7hkf1mm180tq41xlsguym/512x384.jpg",
        url: "https://html5.gamemonetize.com/260vz9cqhbz7hkf1mm180tq41xlsguym/",
        controls: "Mouse/Touch"
    },
    {
        id: 1118,
        title: "Drop Ball",
        titleZh: "掉落球",
        desc: "Drop Ball is an exciting physics puzzle game where your task is to skillfully drop the ball to fill all the empty spaces on the board. It may sound simple, but things get more challenging with the app",
        descZh: "《掉落球》是一款令人兴奋的物理益智游戏，你的任务是巧妙地投放球体来填满棋盘上的所有空位。听起来可能很简单，但随着游戏进程，挑战会越来越大。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/gcxz8h3yk56b5kmhlhanzpe2g910f5gx/512x384.jpg",
        url: "https://html5.gamemonetize.com/gcxz8h3yk56b5kmhlhanzpe2g910f5gx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1119,
        title: "Rescue",
        titleZh: "救援",
        desc: "Rescue is a thrilling puzzle game where you connect wires to help citizens swing across dangerous areas and reach safety. Each level presents a new challenge with complex terrain, unexpected traps, an",
        descZh: "《救援》是一款刺激的益智游戏，你需要连接电线，帮助市民摆荡穿越危险区域并到达安全地带。每一关都呈现新的挑战，包含复杂的地形、意想不到的陷阱和障碍。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/kkbc7m7ukszyk8u2e6d2uknp5at6gvxp/512x384.jpg",
        url: "https://html5.gamemonetize.com/kkbc7m7ukszyk8u2e6d2uknp5at6gvxp/",
        controls: "Mouse/Touch"
    },
    {
        id: 1120,
        title: "Stickman Archer Kick",
        titleZh: "火柴人射手踢击",
        desc: "Take the bow and arrows to kick the stickmans and save their lifes, with a ragdoll style, and awesome game physics. Complete all levels to save the stickmans and collect stars to unlock new character.",
        descZh: "拿起弓箭来踢击火柴人并拯救他们的生命，采用布娃娃风格和出色的游戏物理效果。完成所有关卡来拯救火柴人，并收集星星解锁新角色。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/ztlovnynr83cl5osxdm27wwr0v16owsn/512x384.jpg",
        url: "https://html5.gamemonetize.com/ztlovnynr83cl5osxdm27wwr0v16owsn/",
        controls: "Mouse/Touch"
    },
    {
        id: 1121,
        title: "Rescue Sharp Turn",
        titleZh: "救援急转弯",
        desc: "Rescue Puzzle 3D is a lightweight 3D fun puzzle game. You need to click on the correct objects in the small three-dimensional scene to trigger mechanisms, remove obstacles or form a chain reaction to ",
        descZh: "《救援急转弯》是一款轻量级的3D趣味益智游戏。你需要在小型三维场景中点击正确的物体来触发机制、移除障碍物或形成连锁反应，以完成每个关卡的挑战。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/euad95y8syzf9ry1qac2ob63op70x4vl/512x384.jpg",
        url: "https://html5.gamemonetize.com/euad95y8syzf9ry1qac2ob63op70x4vl/",
        controls: "Mouse/Touch"
    },
    {
        id: 1122,
        title: "Mega Ramps Bike Stunt Game",
        titleZh: "大型坡道自行车特技游戏",
        desc: "Mega Ramp Bike Stunt Games 3D, you are invited to a brand-new level of excitement and adventure with Impossible Bike Stunt Game Offline 3D 2023. With our new Bike racing games 3D offline 2023, you may",
        descZh: "《大型坡道自行车特技游戏3D》邀请您体验全新级别的刺激与冒险。在这款2023年离线3D自行车特技游戏中，您将面对前所未有的挑战和乐趣。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/f23ia3pc72ia1xj03rdavhqpligxlq7j/512x384.jpg",
        url: "https://html5.gamemonetize.com/f23ia3pc72ia1xj03rdavhqpligxlq7j/",
        controls: "Mouse/Touch"
    },
    {
        id: 1123,
        title: "Knife Madness",
        titleZh: "飞刀疯狂",
        desc: "Aim, throw and survive! Watch out &mdash; avoid hitting other blades. The spinning wheel gets faster, the stakes get higher and only your quick reflexes will keep you in the game. Can you defeat the b",
        descZh: "瞄准、投掷并生存下去！小心避开其他刀刃。旋转轮越来越快， stakes越来越高，只有你的快速反应才能让你在游戏中坚持下去。你能击败boss吗？",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/0npammu9ftwyu3a4p4b7dpluj6sq368e/512x384.jpg",
        url: "https://html5.gamemonetize.com/0npammu9ftwyu3a4p4b7dpluj6sq368e/",
        controls: "Mouse/Touch"
    },
    {
        id: 1124,
        title: "Viking War",
        titleZh: "维京战争",
        desc: "Viking War is an action game where you embody a fierce Viking warrior, charging into brutal battles to prove your strength. Each level presents a new challenge, with dangerous enemies waiting for you ",
        descZh: "《维京战争》是一款动作游戏，您将扮演一名勇猛的维京战士，冲入残酷的战斗中证明自己的实力。每一关都是新的挑战，有危险的敌人在等待着您。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/o7ihd51xk07z7dgqaau8q6vkxzxga6v9/512x384.jpg",
        url: "https://html5.gamemonetize.com/o7ihd51xk07z7dgqaau8q6vkxzxga6v9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1125,
        title: "Labubu Puzzle Challenge",
        titleZh: "Labubu解谜挑战",
        desc: "Labubu Puzzle Challenge is a fun, exciting, and completely free online jigsaw puzzle game designed especially for kids! In this adorable brain-teasing adventure, players must connect all the small puz",
        descZh: "《Labubu解谜挑战》是一款专为儿童设计的有趣、刺激且完全免费的在线拼图游戏！在这个可爱的益智冒险中，玩家需要连接所有的小拼图块来完成关卡。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/dhcbsntirf6yd10394v2bp6n38pwy3f7/512x384.jpg",
        url: "https://html5.gamemonetize.com/dhcbsntirf6yd10394v2bp6n38pwy3f7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1126,
        title: "Hop Music Ball Game",
        titleZh: "音乐弹球游戏",
        desc: "Music Ballz Hop is going to revolutionize your experience with music games. It perfectly blends the thrill of ball games with the rhythm of song games, this game will have you hopping to the beat in n",
        descZh: "《音乐弹球游戏》将彻底改变您对音乐游戏的体验。它完美融合了球类游戏的刺激感和歌曲游戏的节奏感，让您可以跟随节拍跳跃。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/c7iy1hpq002mdakbqara3lfmna3oj1qz/512x384.jpg",
        url: "https://html5.gamemonetize.com/c7iy1hpq002mdakbqara3lfmna3oj1qz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1127,
        title: "School Bus Driving Game",
        titleZh: "校车驾驶游戏",
        desc: "Are you ready to perform your driver duty as a 4x4 bus driver? If yes then this city high school bus is for you, where you can pick up and drop students at their school on time. The students are waiti",
        descZh: "您准备好履行4x4公交车司机的职责了吗？如果是的话，这款城市高中校车游戏正适合您，在这里您可以准时接送学生上下学。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/7zmhlham22sb3ndn5f69fqks9pnu9xv4/512x384.jpg",
        url: "https://html5.gamemonetize.com/7zmhlham22sb3ndn5f69fqks9pnu9xv4/",
        controls: "Mouse/Touch"
    },
    {
        id: 1128,
        title: "Dress Up Match 3",
        titleZh: "换装连连看",
        desc: "Dress Up Match 3 is the ultimate fashion puzzle game where you match tiles to get outfits! This cute match 3 game for girls and women combines style and match gameplay - solve puzzles to unlock gorgeo",
        descZh: "《换装连连看》是一款终极时尚益智游戏，通过匹配图块来获得服装搭配！这款专为女性和女孩设计的可爱三消游戏结合了时尚与消除玩法，解决谜题来解锁华丽服饰。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/17om6g8azok4uvmfa8824ax5lu3ha9ri/512x384.jpg",
        url: "https://html5.gamemonetize.com/17om6g8azok4uvmfa8824ax5lu3ha9ri/",
        controls: "Mouse/Touch"
    },
    {
        id: 1129,
        title: "Maze Escape Challenge",
        titleZh: "迷宫逃脱挑战",
        desc: "Maze Escape Challenge is a fast-paced maze game where your goal is to reach the exit as quickly as possible. Each level features a unique labyrinth with increasing difficulty and new surprises. Some m",
        descZh: "《迷宫逃脱挑战》是一款快节奏的迷宫游戏，您的目标是以最快的速度到达出口。每个关卡都有独特的迷宫，难度逐渐增加，并带来新的惊喜。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/36yncw0seninikhbxzkamsnahoi8n3b1/512x384.jpg",
        url: "https://html5.gamemonetize.com/36yncw0seninikhbxzkamsnahoi8n3b1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1130,
        title: "Link Me To The Factory",
        titleZh: "连接我到工厂",
        desc: "Link Me To The Factory is a creative puzzle game where your task is to connect the square blocks according to the rules to complete the system and activate the factory. Each level presents a new struc",
        descZh: "《连接我到工厂》是一款创意益智游戏，您的任务是根据规则连接方块来完成系统并激活工厂。每个关卡都会呈现新的结构挑战。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/g7xq8egkbdbvq6mhp8zb7zr4py0jh0x8/512x384.jpg",
        url: "https://html5.gamemonetize.com/g7xq8egkbdbvq6mhp8zb7zr4py0jh0x8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1131,
        title: "Resuce Escape",
        titleZh: "救援逃脱",
        desc: "Rescue Escape is an action puzzle game where you control stick figures trying to escape from a prison filled with traps. Your mission: guide all the characters past dangerous obstacles and gather them",
        descZh: "《救援逃脱》是一款动作益智游戏，您需要控制火柴人从充满陷阱的监狱中逃脱。您的任务是引导所有角色越过危险障碍并聚集他们。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/ld0n9qnfpx6nins5x9zo8esyr6qiiax4/512x384.jpg",
        url: "https://html5.gamemonetize.com/ld0n9qnfpx6nins5x9zo8esyr6qiiax4/",
        controls: "Mouse/Touch"
    },
    {
        id: 1132,
        title: "Slap Man",
        titleZh: "拍打人",
        desc: "Slap Man is a hyper-casual parkour game that involves sliding left and right. You sprint through the streets, dodging roadblocks and traps, while sending passing NPCs staggering with well-timed slaps.",
        descZh: "《拍打人》是一款超休闲跑酷游戏，需要左右滑动。您要在街道上奔跑，躲避路障和陷阱，同时用适时的拍打让路过的NPC stagger。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/i525ff5nendf17hw0exvh7bqyczc25hc/512x384.jpg",
        url: "https://html5.gamemonetize.com/i525ff5nendf17hw0exvh7bqyczc25hc/",
        controls: "Mouse/Touch"
    },
    {
        id: 1133,
        title: "Moto Race City",
        titleZh: "摩托车城市竞速",
        desc: "Time is key. The longer you ride, the more money you earn to unlock faster, stronger bikes. Feel the speed, upgrade your ride and become unstoppable. Every map is a new challenge &mdash; faster, harde",
        descZh: "时间就是金钱。骑行时间越长，赚的钱就越多，可以解锁更快、更强的摩托车。感受速度，升级您的座驾，变得势不可挡。每张地图都是新的挑战——更快、更难。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/q0bv0dhbsdkv726khzvwkk72liyyilgp/512x384.jpg",
        url: "https://html5.gamemonetize.com/q0bv0dhbsdkv726khzvwkk72liyyilgp/",
        controls: "Mouse/Touch"
    },
    {
        id: 1134,
        title: "Defense Tower 2025",
        titleZh: "防御塔2025",
        desc: "Defense Tower 2025 delivers fast-paced futuristic tower-defense action, challenging players to strategize, upgrade high-tech weapons, and withstand escalating waves of robotic enemies. With sleek visu",
        descZh: "《防御塔2025》提供了快节奏的未来塔防动作游戏，挑战玩家制定策略、升级高科技武器，并抵御不断升级的机器人敌人浪潮。拥有流畅的视觉效果和直观的操作方式。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/cmf9r0la5swe9ku3t754dbu3y723nvwf/512x384.jpg",
        url: "https://html5.gamemonetize.com/cmf9r0la5swe9ku3t754dbu3y723nvwf/",
        controls: "Mouse/Touch"
    },
    {
        id: 1135,
        title: "Fast Fruit Juice",
        titleZh: "快速水果汁",
        desc: "Fast Fruit Juice is a lively arcade-style game where you slice, mix, and serve colorful fruits at high speed. Precision matters as you combine ingredients, avoid obstacles, and fulfill orders before t",
        descZh: "《快速水果汁》是一款生动的街机风格游戏，您需要高速切水果、混合并供应多彩的果汁。精确度很重要，您需要组合食材、避开障碍并在时间耗尽前完成订单。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/y7slbqpvz04dac94kf770a7lpy76oz03/512x384.jpg",
        url: "https://html5.gamemonetize.com/y7slbqpvz04dac94kf770a7lpy76oz03/",
        controls: "Mouse/Touch"
    },
    {
        id: 1136,
        title: "English Checkers",
        titleZh: "英国跳棋",
        desc: "Immerse yourself in the exciting world of Checkers English, where every game is a test of your tactics and foresight! Also this game is known by name Draughts Here, you dont just play - you build a ca",
        descZh: "沉浸在英国跳棋的精彩世界中，每场比赛都是对您战术和远见的考验！这款游戏也被称为西洋跳棋，在这里您不仅仅是下棋，而是在构建策略。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/pir55cwoygvsus9az7d5zyxd6gra48dh/512x384.jpg",
        url: "https://html5.gamemonetize.com/pir55cwoygvsus9az7d5zyxd6gra48dh/",
        controls: "Mouse/Touch"
    },
    {
        id: 1137,
        title: "Mega Escape Car Parking Puzzle",
        titleZh: "大型逃脱汽车停车解谜",
        desc: "A fun and compelling puzzle board game called Parking Jam. Its more than just parking; its an enjoyable driving adventure that will advance you. Parking lot traffic jams, difficult parking conditions,",
        descZh: "一款名为《停车堵塞》的有趣而引人入胜的解谜棋盘游戏。这不仅仅是停车，更是一场愉快的驾驶冒险。停车场交通堵塞、困难的停车条件，",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/249wl1gt32c8pf51yveq11sxc61ob5ub/512x384.jpg",
        url: "https://html5.gamemonetize.com/249wl1gt32c8pf51yveq11sxc61ob5ub/",
        controls: "Mouse/Touch"
    },
    {
        id: 1138,
        title: "Drop Stack Ball Game",
        titleZh: "掉落叠球游戏",
        desc: "Welcome to the ultimate stack ball adventure game. A thrilling, addictive, and action-packed hyper-casual game that will keep you hooked for hours! If you love smashing, bouncing, and breaking through",
        descZh: "欢迎来到终极叠球冒险游戏。这是一款刺激、上瘾且充满动作元素的超休闲游戏，能让您连续玩数小时！如果您喜欢粉碎、弹跳和突破，",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/15rsgtn42eictvskflz0sy0vt5zyf5ae/512x384.jpg",
        url: "https://html5.gamemonetize.com/15rsgtn42eictvskflz0sy0vt5zyf5ae/",
        controls: "Mouse/Touch"
    },
    {
        id: 1139,
        title: "Rocket Car Chase Game",
        titleZh: "火箭汽车追逐游戏",
        desc: "Run!! Rocket cars are chasing you! Hold your steering strong and evade them away. Make your way through power-ups, speed-ups, bombs, and coins. Level up and speed up your vehicle, do not get busted. R",
        descZh: "快跑！！火箭汽车正在追你！握紧方向盘，躲避它们。穿过加速道具、速度提升、炸弹和金币。升级并加速您的车辆，不要被抓住。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/p87qt8y9dwqj57vgahavbg5c5m69nx55/512x384.jpg",
        url: "https://html5.gamemonetize.com/p87qt8y9dwqj57vgahavbg5c5m69nx55/",
        controls: "Mouse/Touch"
    },
    {
        id: 1140,
        title: "cloudy cleaning",
        titleZh: "云 cleaning",
        desc: "The world of Aqualune had always been a place where water and life danced together. Its floating islands drifted lazily across seas of shimmering blue, connected by streams that glowed like ropes of l",
        descZh: "Aqualune世界一直是一个水与生命共舞的地方。它的浮岛懒洋洋地漂浮在闪闪发光的蓝色海洋上，由像绳索一样发光的溪流连接着。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/s2fkdsg73zkoxekkks70i3ac8vjxv29a/512x384.jpg",
        url: "https://html5.gamemonetize.com/s2fkdsg73zkoxekkks70i3ac8vjxv29a/",
        controls: "Mouse/Touch"
    },
    {
        id: 1141,
        title: "PushBall",
        titleZh: "推球",
        desc: "Push Ball is an intelligent puzzle game where you control a red ball to push purple balls according to the unique movement rules of each type. Your goal: to get all the balls to their designated posit",
        descZh: "《推球》是一款益智游戏，您需要控制一个红球，根据每种类型独特的移动规则来推动紫色球。您的目标是将所有球推到指定位置。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/plazocnynvxnd11synrxzlblc7hspydb/512x384.jpg",
        url: "https://html5.gamemonetize.com/plazocnynvxnd11synrxzlblc7hspydb/",
        controls: "Mouse/Touch"
    },
    {
        id: 1142,
        title: "Street Car Race 3D",
        titleZh: "街头赛车3D",
        desc: "This is a simulation racing game. There are many modes in it. There are also nitrogen acceleration and various functions. Real simulation, don&rsquo;t crash.",
        descZh: "这是一款模拟赛车游戏，包含多种模式，还有氮气加速和各种功能。真实模拟，不要撞车。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/6kjj8zr4e5yro9o6dfifg2lj1b0cg3qo/512x384.jpg",
        url: "https://html5.gamemonetize.com/6kjj8zr4e5yro9o6dfifg2lj1b0cg3qo/",
        controls: "Mouse/Touch"
    },
    {
        id: 1143,
        title: "Slime Escape",
        titleZh: "史莱姆逃脱",
        desc: "Slime Escape is a puzzle-adventure game where you control a flexible Slime sliding through challenging mazes to find the escape key. Skillfully navigate the Slime through turns, narrow corridors, and ",
        descZh: "《史莱姆逃脱》是一款益智冒险游戏，您需要控制一个灵活的史莱姆，滑过具有挑战性的迷宫寻找逃脱钥匙。巧妙地引导史莱姆穿过转弯处、狭窄的走廊和各种障碍。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/4vbsf6ut2afctd6e466eansgmyjogoam/512x384.jpg",
        url: "https://html5.gamemonetize.com/4vbsf6ut2afctd6e466eansgmyjogoam/",
        controls: "Mouse/Touch"
    },
    {
        id: 1144,
        title: "Space Brawlers TDS!",
        titleZh: "太空争斗TDS",
        desc: "Space Brawlers is a Non-Stop Action Packed Sci-fi Top-Down Shooter! Choose from 4 unique classes, each with tactical counters, health, speed, and 3 cooldown skills. Play as the Mercenary Gunner, a pre",
        descZh: "《太空争斗》是一款不停歇的动作科幻俯视射击游戏！从4个独特职业中选择，每个职业都有战术克制、生命值、速度和3个冷却技能。扮演雇佣枪手，一个精英战士。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/lb0odw8lkqrwu7kzs5qte8ynyq5e03e4/512x384.jpg",
        url: "https://html5.gamemonetize.com/lb0odw8lkqrwu7kzs5qte8ynyq5e03e4/",
        controls: "Mouse/Touch"
    },
    {
        id: 1145,
        title: "StickJump",
        titleZh: "火柴人跳跃",
        desc: "StickJump is a high-speed reflex game where you control a stick figure running around an endless circle. But dont be complacent&mdash;obstacles appear continuously and completely unexpectedly, always ",
        descZh: "《火柴人跳跃》是一款高速反应游戏，您需要控制一个火柴人在无尽的圆形轨道上奔跑。但不要掉以轻心——障碍物会持续且完全意外地出现。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/y495cxabjpk43d833bsm8acoay0l4n5a/512x384.jpg",
        url: "https://html5.gamemonetize.com/y495cxabjpk43d833bsm8acoay0l4n5a/",
        controls: "Mouse/Touch"
    },
    {
        id: 1146,
        title: "PixelParkour",
        titleZh: "像素跑酷",
        desc: "PixelParkour is a pixel-style action game where you take on the role of a professional thief in a black outfit with exceptional parkour skills.Your mission: overcome obstacles, avoid dangerous traps, ",
        descZh: "《像素跑酷》是一款像素风格的动作游戏，您将扮演一名穿着黑色服装、拥有卓越跑酷技能的职业小偷。您的任务是克服障碍，避开危险陷阱。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/27foeoin58lzi2aaa7ppjgnr63c8uzas/512x384.jpg",
        url: "https://html5.gamemonetize.com/27foeoin58lzi2aaa7ppjgnr63c8uzas/",
        controls: "Mouse/Touch"
    },
    {
        id: 1147,
        title: "Raccoon Clicker",
        titleZh: "浣熊点击器",
        desc: "Raccoon Clicker is a cute and relaxing idle game where you build your own raccoon world, one tap at a time! Start by clicking your little raccoon to earn your first coins, then unlock helpers like mam",
        descZh: "《浣熊点击器》是一款可爱而轻松的放置类游戏，您可以通过一次次点击来建造自己的浣熊世界！首先点击您的小浣熊来赚取第一枚硬币，然后解锁助手如妈妈浣熊。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ek2mqvg6azeayh1l3bwjkfdbzc2myesz/512x384.jpg",
        url: "https://html5.gamemonetize.com/ek2mqvg6azeayh1l3bwjkfdbzc2myesz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1148,
        title: "Clonium",
        titleZh: "克隆战争",
        desc: "Capture your opponents cells, think through every move, and use strategy to be the last one standing. The more explosions, the more spectacular the game! Simple rules, but an endless number of combina",
        descZh: "占领对手的细胞，深思熟虑每一步行动，运用策略成为最后的胜利者。爆炸越多，游戏越精彩！规则简单，但有无穷无尽的组合可能。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/cx9ykv4xl6wlfq6vd9odkn68e6zenz7s/512x384.jpg",
        url: "https://html5.gamemonetize.com/cx9ykv4xl6wlfq6vd9odkn68e6zenz7s/",
        controls: "Mouse/Touch"
    },
    {
        id: 1149,
        title: "Magic mahjong",
        titleZh: "魔法麻将",
        desc: "Dive into the world of &ldquo;Magic Mahjong,&rdquo; where classic mechanics meet the mystique of runes. Each level brings unique layouts and increasing difficulty. The core mahjong rule: to select a p",
        descZh: "进入《魔法麻将》的世界，在这里经典玩法与符文的神秘感相结合。每个关卡都有独特的布局和不断增加的难度。麻将的核心规则是选择一对相同的牌。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/ziw120fv4kopsa9yvvyo5r0vxlxl07vz/512x384.jpg",
        url: "https://html5.gamemonetize.com/ziw120fv4kopsa9yvvyo5r0vxlxl07vz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1150,
        title: "Fly To Star",
        titleZh: "飞向星星",
        desc: "Fly to Stars is a fast-paced, skill-based flying arcade game that challenges your reflexes, precision, and focus. Take control of a sleek starship soaring through dazzling cosmic skies filled with obs",
        descZh: "《飞向星星》是一款快节奏、基于技巧的飞行街机游戏，挑战你的反应速度、精准度和专注力。控制一艘光滑的宇宙飞船穿越令人眼花缭乱的星空。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/9jqpga0tv9qvy7f749e039673zdq3np8/512x384.jpg",
        url: "https://html5.gamemonetize.com/9jqpga0tv9qvy7f749e039673zdq3np8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1151,
        title: "FPS Shooting Game: 3D Gun Game",
        titleZh: "FPS射击游戏：3D枪战游戏",
        desc: "Are you ready to play the best Action shooter game ever, complete with realistic modes and weapons? Join a worldwide community of millions of players in an offline Shooting game. The goal is to surviv",
        descZh: "你准备好玩最好的动作射击游戏了吗？游戏中包含真实的模式和武器。加入全球数百万玩家的离线射击游戏社区。目标是生存下来。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/brlo27b6436ff8upmd5e8awfzxpikovi/512x384.jpg",
        url: "https://html5.gamemonetize.com/brlo27b6436ff8upmd5e8awfzxpikovi/",
        controls: "Mouse/Touch"
    },
    {
        id: 1152,
        title: "Mahjong Connect: Spooky",
        titleZh: "麻将连线：恐怖版",
        desc: "Click a tile to select it. Click another tile to make a move. A move can only be made if there are 2 or fewer bends in the line. There are 10 levels in the game.",
        descZh: "点击一个牌来选中它，再点击另一个相同的牌来连线。连线只能有两个或更少的弯折。游戏中有10个关卡。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/38mhcpt34xh8j6hguzws8jcoo42e9dta/512x384.jpg",
        url: "https://html5.gamemonetize.com/38mhcpt34xh8j6hguzws8jcoo42e9dta/",
        controls: "Mouse/Touch"
    },
    {
        id: 1153,
        title: "Real Mountain Climber Game",
        titleZh: "真实登山游戏",
        desc: "Welcome to the world of real mountain climber games. Get ready to climb the challenging mountain peaks and become the King of the mountain! This immersive mountain climbing simulator takes you on an a",
        descZh: "欢迎来到真实登山游戏的世界。准备好攀登具有挑战性的山峰，成为山峰之王！这款沉浸式登山模拟器将带你踏上一场惊险的冒险之旅。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/fj98q32pmgh1r7a3wo2lrdc3xhx1dnmj/512x384.jpg",
        url: "https://html5.gamemonetize.com/fj98q32pmgh1r7a3wo2lrdc3xhx1dnmj/",
        controls: "Mouse/Touch"
    },
    {
        id: 1154,
        title: "Highway Traffic Racerr",
        titleZh: "高速公路赛车手",
        desc: "Are you bored from previous playing Car race game and new car games 2025? Car racing fun - Car Games 3D 2025 might be the racing car speed game you are looking for. Welcome to the real car racing game",
        descZh: "你是否厌倦了之前玩的赛车游戏和2025年的新车游戏？《汽车竞速乐趣 - 2025年3D汽车游戏》可能是你在寻找的赛车速度游戏。欢迎来到真正的赛车游戏。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/kkjxnb8lwk9cwznz46u2sw9devjkzql8/512x384.jpg",
        url: "https://html5.gamemonetize.com/kkjxnb8lwk9cwznz46u2sw9devjkzql8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1155,
        title: "Black Friday Mystery Sale",
        titleZh: "黑色星期五神秘大促",
        desc: "Dive into the excitement of Black Friday shopping with a twist! In the Black Friday Mystery Sale dress up game, fashion surprises await, and its up to you to style the princesses with fabulous outfits",
        descZh: "体验不一样的黑色星期五购物狂欢！在《黑色星期五大促换装游戏》中，时尚惊喜等着你，你可以为公主们搭配绝美造型。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/kxoov2brmemdeblj1fjm0uwt52yw3kr0/512x384.jpg",
        url: "https://html5.gamemonetize.com/kxoov2brmemdeblj1fjm0uwt52yw3kr0/",
        controls: "Mouse/Touch"
    },
    {
        id: 1156,
        title: "Tokyo Treats",
        titleZh: "东京美食",
        desc: "In this engaging puzzle game, youre tasked with matching a variety of colorful fruit hues to clear the board and earn sweet rewards. As you progress through increasingly challenging levels, the colors",
        descZh: "在这款引人入胜的益智游戏中，你的任务是匹配各种颜色鲜艳的水果来清除游戏板并获得甜蜜奖励。随着关卡难度的增加，颜色也会变得更加复杂。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/mp8r029cl7fae9fgu4oiitgftwhs646y/512x384.jpg",
        url: "https://html5.gamemonetize.com/mp8r029cl7fae9fgu4oiitgftwhs646y/",
        controls: "Mouse/Touch"
    },
    {
        id: 1157,
        title: "Bloom Crush",
        titleZh: "花开消除",
        desc: "Bloom Crush is a classic match-3 puzzle game filled with fun challenges. Swap items to make lines of three or more matching pieces, horizontally or vertically. Keep matching to clear tiles and move th",
        descZh: "《花开消除》是一款经典的三消益智游戏，充满有趣的挑战。交换物品来组成三个或更多相同图案的水平或垂直连线。持续匹配来清除方块并前进。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/vkh0651zwog47f9g2lxbjlphz9q5lll9/512x384.jpg",
        url: "https://html5.gamemonetize.com/vkh0651zwog47f9g2lxbjlphz9q5lll9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1158,
        title: "stickman sky 3D",
        titleZh: "火柴人天空3D",
        desc: "Stickman Sky 3D is a fast-paced action game where you control a stickman running through floating sky platforms, dodging obstacles, jumping between gaps, and collecting rewards. The game challenges yo",
        descZh: "《火柴人天空3D》是一款快节奏的动作游戏，你需要控制火柴人在漂浮的天空平台间奔跑，躲避障碍物，在缝隙间跳跃，并收集奖励。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/ss13q0odm4vofj1co2daj2cq4mmd8dbv/512x384.jpg",
        url: "https://html5.gamemonetize.com/ss13q0odm4vofj1co2daj2cq4mmd8dbv/",
        controls: "Mouse/Touch"
    },
    {
        id: 1159,
        title: "Alien Forest Jump",
        titleZh: "外星森林跳跃",
        desc: "Alien Forest Jump is an action-packed platformer where a brave alien navigates a mysterious forest filled with traps, unstable platforms, and dangerous creatures. Players must execute precise jumps, a",
        descZh: "《外星森林跳跃》是一款充满动作元素的平台游戏，勇敢的外星人在充满陷阱、不稳定平台和危险生物的神秘森林中穿行。玩家必须执行精确的跳跃。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/0r2lzld37cqojc1jar4mh6cke028425q/512x384.jpg",
        url: "https://html5.gamemonetize.com/0r2lzld37cqojc1jar4mh6cke028425q/",
        controls: "Mouse/Touch"
    },
    {
        id: 1160,
        title: "Apex Rush",
        titleZh: "巅峰冲刺",
        desc: "Welcome to Ultimate Car Race, the ultimate test of speed, reflex, and precision driving! Get behind the wheel of your high-performance race car and take on thrilling tracks, heart-pounding rivals, and",
        descZh: "欢迎来到终极赛车，这是对速度、反应和精准驾驶的终极考验！坐上高性能赛车的方向盘，在激动人心的赛道上驰骋，面对令人心跳加速的对手。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/ramp6ibpxwm777g2hmdsvbnx9rdisd6i/512x384.jpg",
        url: "https://html5.gamemonetize.com/ramp6ibpxwm777g2hmdsvbnx9rdisd6i/",
        controls: "Mouse/Touch"
    },
    {
        id: 1161,
        title: "Marble Maze Game",
        titleZh: "弹珠迷宫游戏",
        desc: "Players rotate a circular maze packed with small moving balls, guiding a single ball toward the center. The goal is to carefully tilt and rotate the maze so the main ball drops perfectly into the vert",
        descZh: "玩家旋转一个装满小球的圆形迷宫，引导单个小球到达中心。目标是小心地倾斜和旋转迷宫，使主球完美地落入中心洞口。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/zr3pn302pn7b4a6kb4cohh799a2eu7uh/512x384.jpg",
        url: "https://html5.gamemonetize.com/zr3pn302pn7b4a6kb4cohh799a2eu7uh/",
        controls: "Mouse/Touch"
    },
    {
        id: 1162,
        title: "Aircraft Space Turret",
        titleZh: "太空战机炮塔",
        desc: "This is a 3D game that simulates a real fighter jet from a first-person perspective. Enjoy strafing while avoiding enemy bombings in the game!",
        descZh: "这是一款3D游戏，从第一人称视角模拟真实战斗机。在游戏中享受扫射的同时躲避敌人的轰炸！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/1ocmj7di2lg6bytceakrfvik6hwuimrz/512x384.jpg",
        url: "https://html5.gamemonetize.com/1ocmj7di2lg6bytceakrfvik6hwuimrz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1163,
        title: "Autumn Glam Gala",
        titleZh: "秋日魅力盛会",
        desc: "Get ready for the ultimate fall beauty adventure at the Autumn Glam Gala! Help three BFFs create stunning makeup looks for the most anticipated gala of the season. From soft, natural tones to bold, sp",
        descZh: "为终极秋季美容冒险做好准备，参加秋日魅力盛会！帮助三位闺蜜为这个季节最令人期待的盛会打造惊艳的妆容。从柔和的自然色调到大胆鲜明的色彩。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/k3htkr72jyxvq9gk997848f4oawi2bhj/512x384.jpg",
        url: "https://html5.gamemonetize.com/k3htkr72jyxvq9gk997848f4oawi2bhj/",
        controls: "Mouse/Touch"
    },
    {
        id: 1164,
        title: "Race Traffic Crazy",
        titleZh: "疯狂赛车交通",
        desc: "Race Traffic Crazy throws you into high speed lanes packed with reckless drivers, tight corners, and nonstop near misses. Dodge cars, thread impossible gaps, and chase new records while your heart pou",
        descZh: "《疯狂赛车交通》让你置身于高速车道，这里充斥着鲁莽的司机、急转弯和不断的险象环生。躲避车辆，穿越不可能的间隙，追逐新纪录，让你的心怦怦直跳。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/81p68gvtqdfhc0g4pjz672alvu5mrurv/512x384.jpg",
        url: "https://html5.gamemonetize.com/81p68gvtqdfhc0g4pjz672alvu5mrurv/",
        controls: "Mouse/Touch"
    },
    {
        id: 1165,
        title: "Dog Racing Master  Game",
        titleZh: "狗狗竞速大师游戏",
        desc: "Ultimate dog racing tournament is being started in mighty stadium with huge crowd in Dog Race Game: Dog Racing 3D. Enjoy this dog racing simulator game and become a crazy dog racer. Dog racing is an i",
        descZh: "终极狗狗竞速锦标赛正在宏伟的体育场拉开帷幕，现场观众云集。享受这款狗狗竞速模拟器游戏，成为一名疯狂的狗狗赛车手。狗狗竞速是一项激动人心的运动。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/hc4opz2pjsgyxtdsbnshnz5meju8ipap/512x384.jpg",
        url: "https://html5.gamemonetize.com/hc4opz2pjsgyxtdsbnshnz5meju8ipap/",
        controls: "Mouse/Touch"
    },
    {
        id: 1166,
        title: "Mashup Hero",
        titleZh: "混搭英雄",
        desc: "Mashup Hero is a fast-paced mecha parkour game where you assemble a robot while sprinting to the finish line. Swipe to avoid traps, then unleash a massive shockwave to crush your opponents in the fina",
        descZh: "《混搭英雄》是一款快节奏的机甲跑酷游戏，你需要在冲向终点线的过程中组装机器人。滑动屏幕躲避陷阱，然后释放强大的冲击波来击败对手。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/tdv27vpdpio4ybapsixwrd3nc0qq81ge/512x384.jpg",
        url: "https://html5.gamemonetize.com/tdv27vpdpio4ybapsixwrd3nc0qq81ge/",
        controls: "Mouse/Touch"
    },
    {
        id: 1167,
        title: "Winter Tile Connect",
        titleZh: "冬季瓷砖连线",
        desc: "Winter Tile Connect is a fun and relaxing puzzle game where you match two identical winter tiles. Draw a line to connect them using three or fewer straight segments. The path may turn no more than two",
        descZh: "《冬季瓷砖连线》是一款有趣而轻松的益智游戏，你需要匹配两个相同的冬季瓷砖。用不超过三条直线段画线连接它们。路径最多只能转两个弯。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/c7c9w53rs28jcb1fmeqgloxtfb8ze916/512x384.jpg",
        url: "https://html5.gamemonetize.com/c7c9w53rs28jcb1fmeqgloxtfb8ze916/",
        controls: "Mouse/Touch"
    },
    {
        id: 1168,
        title: "Pop The Lock Game",
        titleZh: "破解锁游戏",
        desc: "Unlock your target by hitting it accurately. Develop your skills in levels filled with rotating bars, accelerating rotation speeds, and more. This simple yet addictive game is ready to challenge and e",
        descZh: "通过准确击中目标来解锁。在充满旋转条、加速旋转速度等关卡中提升你的技能。这款简单却令人上瘾的游戏准备好迎接你的挑战了。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/lsdr4urdlf5b0588dquwcpiy10yk47w7/512x384.jpg",
        url: "https://html5.gamemonetize.com/lsdr4urdlf5b0588dquwcpiy10yk47w7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1169,
        title: "Winter Labubu Pacman Adventure",
        titleZh: "冬季拉布布吃豆人冒险",
        desc: "Winter Labubu Pacman Adventure is a super fun online game inspired by classic Pac-Man gameplay. Navigate the icy maze, avoid enemies, collect items, and survive as long as possible. Stay sharp, keep m",
        descZh: "《冬季拉布布吃豆人冒险》是一款超级有趣的在线游戏，灵感来自经典的吃豆人玩法。在冰雪迷宫中穿行，躲避敌人，收集物品，尽可能长时间地生存下去。保持敏锐，继续前进。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/0ychz5yzi2xhlndeypmlq5svnh2hwx08/512x384.jpg",
        url: "https://html5.gamemonetize.com/0ychz5yzi2xhlndeypmlq5svnh2hwx08/",
        controls: "Mouse/Touch"
    },
    {
        id: 1170,
        title: "Furry Wedding Proposal",
        titleZh: "毛茸茸的婚礼求婚",
        desc: "Hi, young stylist! You will find a very unusual couple in love - a brutal fox and a feminine bunny - who are preparing for their future wedding. They dream of looking stunning on this holiday and you ",
        descZh: "你好，年轻的造型师！你会发现一对非常不寻常的恋人——一只粗暴的狐狸和一只女性化的兔子——他们正在为未来的婚礼做准备。他们梦想在这个节日里看起来光彩照人。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/6deaaf6we5wdex6n9x6da8qlg2vwht3u/512x384.jpg",
        url: "https://html5.gamemonetize.com/6deaaf6we5wdex6n9x6da8qlg2vwht3u/",
        controls: "Mouse/Touch"
    },
    {
        id: 1171,
        title: "Black Friday Store Manager",
        titleZh: "黑色星期五商店经理",
        desc: "Build your dream clothing store in the Black Friday Store Manager game! Buy new clothes, place them on the shelves and attract customers looking for the latest fashion. Earn coins from every sale and ",
        descZh: "在《黑色星期五商店经理》游戏中打造你的梦想服装店！购买新衣服，将它们摆放在货架上，吸引寻找最新时尚的顾客。通过每次销售赚取金币。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/tib6wak2cd3ux9mj8di0eeezdvxtra07/512x384.jpg",
        url: "https://html5.gamemonetize.com/tib6wak2cd3ux9mj8di0eeezdvxtra07/",
        controls: "Mouse/Touch"
    },
    {
        id: 1172,
        title: "Fruit Drop Puzzle Game",
        titleZh: "水果掉落解谜游戏",
        desc: "Welcome to Furitrot Merge &ndash; a uniquely chaotic Italian merge puzzle game where strategy meets satisfaction. In Furitrot Merge, your goal is to combine viral Furitrot characters to fulfill custom",
        descZh: "欢迎来到Furitrot合并——一款独特混乱的意大利合并益智游戏，在这里策略与满足感相遇。在Furitrot合并中，你的目标是组合病毒式的Furitrot角色来完成自定义目标。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/iyqprq93bhwn2j53egheo3za2aemqpq8/512x384.jpg",
        url: "https://html5.gamemonetize.com/iyqprq93bhwn2j53egheo3za2aemqpq8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1173,
        title: "Bubble Man Runner Game",
        titleZh: "泡泡人跑酷游戏",
        desc: "Welcome to Bubble Runner Game, a fun and exciting running game full of colorful bubbles, jumping action, and endless adventure. In this bubble running game, you control a cute bubble that rolls, jumps",
        descZh: "欢迎来到泡泡人跑酷游戏，这是一款充满彩色泡泡、跳跃动作和无尽冒险的有趣刺激的跑酷游戏。在这款泡泡跑酷游戏中，你控制一个可爱的泡泡，它可以滚动、跳跃。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/za55ayaekb6v4popocbptsxzpsvj47bu/512x384.jpg",
        url: "https://html5.gamemonetize.com/za55ayaekb6v4popocbptsxzpsvj47bu/",
        controls: "Mouse/Touch"
    },
    {
        id: 1174,
        title: "Railways Train Simulator Game",
        titleZh: "铁路火车模拟器游戏",
        desc: "Welcome to Train Parking Game, the most fun and realistic train driving game where you park trains carefully and complete amazing missions. Enjoy the real experience of train parking, driving, and tra",
        descZh: "欢迎来到火车停车游戏，这是一款最有趣和逼真的火车驾驶游戏，你需要小心停车并完成惊人的任务。享受真实的火车停车、驾驶和运输体验。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/hg2zzusjodkrau8lpbt50zouac81n91t/512x384.jpg",
        url: "https://html5.gamemonetize.com/hg2zzusjodkrau8lpbt50zouac81n91t/",
        controls: "Mouse/Touch"
    },
    {
        id: 1175,
        title: "Celebrity Thanksgiving Prep",
        titleZh: "名人感恩节准备",
        desc: "It&rsquo;s Thanksgiving, and the celebrities are getting ready for the big day! In Celebrity Thanksgiving Prep, you&rsquo;ll help your favorite stars get glammed up for the holiday dinner. Start by cr",
        descZh: "感恩节到了，名人们正在为这个大日子做准备！在名人感恩节准备游戏中，你将帮助你最喜欢的明星为节日晚餐精心打扮。首先从创建完美的妆容开始。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/2o0fsrcn9yiwcyei20dyz1tjl7ujvrrl/512x384.jpg",
        url: "https://html5.gamemonetize.com/2o0fsrcn9yiwcyei20dyz1tjl7ujvrrl/",
        controls: "Mouse/Touch"
    },
    {
        id: 1176,
        title: "Horde Zombie War",
        titleZh: "僵尸军团战争",
        desc: "Horde Zombie War is an intense top-down shooter where you battle endless waves of zombies across multiple levels and face powerful bosses. Upgrade your reflexes, dodge attacks, and survive the undead ",
        descZh: "《僵尸军团战争》是一款紧张刺激的俯视射击游戏，你将在其中对抗无尽的僵尸浪潮，穿越多个关卡并面对强大的Boss。升级你的反应能力，躲避攻击，努力在末日中生存下来。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/rtvrw32wvt6cfmuynn0dy5dqwzd69q94/512x384.jpg",
        url: "https://html5.gamemonetize.com/rtvrw32wvt6cfmuynn0dy5dqwzd69q94/",
        controls: "Mouse/Touch"
    },
    {
        id: 1177,
        title: "Police Car Parking Game",
        titleZh: "警车停车游戏",
        desc: "Welcome to Police Parking Game, the best police car driving game where you can test your parking skills and experience real cop car driving in 3D environments. Enjoy smooth controls, realistic mission",
        descZh: "欢迎来到警车停车游戏，这是一款最佳的警车驾驶游戏，你可以在这里测试你的停车技巧并在3D环境中体验真正的警车驾驶。享受流畅的操控和逼真的任务。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/578b5br8b4p9vnh8mzu2t9gk88blkvz3/512x384.jpg",
        url: "https://html5.gamemonetize.com/578b5br8b4p9vnh8mzu2t9gk88blkvz3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1178,
        title: "Tractor Parking And Driving Game",
        titleZh: "拖拉机停车与驾驶游戏",
        desc: "Welcome to the tractor parking driving game, the ultimate tractor driving and parking simulator made for everyone who loves realistic parking challenges. This game gives you the fun of parking powerfu",
        descZh: "欢迎来到拖拉机停车驾驶游戏，这是一款终极的拖拉机驾驶和停车模拟器，专为喜爱真实停车挑战的每个人制作。这款游戏让你体验驾驶强大拖拉机的乐趣。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/15b7hdc6yr0f8mk95jgbx9b03q4q6c14/512x384.jpg",
        url: "https://html5.gamemonetize.com/15b7hdc6yr0f8mk95jgbx9b03q4q6c14/",
        controls: "Mouse/Touch"
    },
    {
        id: 1179,
        title: "Dragon Warrior Tower Defense",
        titleZh: "龙战士塔防游戏",
        desc: "This is a tower - defense game where players need to protect their territory from a giant, winding snake - like enemy. The snake is segmented, each with a certain amount of health points displayed on ",
        descZh: "这是一款塔防游戏，玩家需要保护自己的领土免受巨大蜿蜒蛇形敌人的侵害。这条蛇由多个部分组成，每个部分都有一定的生命值显示在上方。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/7qbr7gz5bgvnyhsr3k7hy9k6fef9byw1/512x384.jpg",
        url: "https://html5.gamemonetize.com/7qbr7gz5bgvnyhsr3k7hy9k6fef9byw1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1180,
        title: "Pusha Pusha",
        titleZh: "推推乐",
        desc: "Pusha Pusha is a puzzle game where you must push boxes into the target area in order to pass the level. One wrong move can lose the game. Are you ready to push the blocks?",
        descZh: "《推推乐》是一款益智游戏，你必须将箱子推入目标区域才能通过关卡。一步走错就可能输掉游戏。你准备好推方块了吗？",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/9x331e2ydjh0nf845jc7tk1ftuapj6xc/512x384.jpg",
        url: "https://html5.gamemonetize.com/9x331e2ydjh0nf845jc7tk1ftuapj6xc/",
        controls: "Mouse/Touch"
    },
    {
        id: 1181,
        title: "Eventide",
        titleZh: "黄昏",
        desc: "in this gameyou have player and big ground and protect from enimies every 30 second game make difficult share with your friend and enjoy the game",
        descZh: "在这款游戏中，你有一个玩家角色和一大片土地，需要每30秒抵御一次敌人进攻，游戏会逐渐变难。与朋友分享并享受游戏乐趣吧。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/k672dx870llm55o3aqtsg2umisl3u9iq/512x384.jpg",
        url: "https://html5.gamemonetize.com/k672dx870llm55o3aqtsg2umisl3u9iq/",
        controls: "Mouse/Touch"
    },
    {
        id: 1182,
        title: "Crowd Battle Gun Rush",
        titleZh: "人群战斗枪战冲刺",
        desc: "This is a game that combines parkour and shooting. In the game, you need to avoid bad props and remember to upgrade your weapons. Finally destroy the incoming enemies!",
        descZh: "这是一款结合了跑酷和射击的游戏。在游戏中，你需要避开不良道具并记得升级武器。最后消灭来袭的敌人！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/zgyi4uc3u2rbu9euvx144c5hwv8mq5ap/512x384.jpg",
        url: "https://html5.gamemonetize.com/zgyi4uc3u2rbu9euvx144c5hwv8mq5ap/",
        controls: "Mouse/Touch"
    },
    {
        id: 1183,
        title: "Hero Rescue Survival Game",
        titleZh: "英雄救援生存游戏",
        desc: "You want to have your own pets and protect them? You want to travel around the world with your pet? Don&rsquo;t wait, play Save the Girl - Pull The Pin now. Save the Girl - Pull The Pin is the game le",
        descZh: "你想要拥有自己的宠物并保护它们吗？你想带着宠物环游世界吗？别等了，现在就玩拯救女孩—拔针游戏。拯救女孩—拔针是一款让你拥有宠物并保护它们的游戏。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/i3dpnomkm9lcphbjz7qe2v7t3bmxqnb1/512x384.jpg",
        url: "https://html5.gamemonetize.com/i3dpnomkm9lcphbjz7qe2v7t3bmxqnb1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1184,
        title: "Fashion Makeup And Dress Up Game",
        titleZh: "时尚化妆与换装游戏",
        desc: "Are you addicted to dress up game up and fashion designer game? Are you ready for style challenge? Let&rsquo;s play this dress up game up right now! Ready to wow fashion show with your unique styles. ",
        descZh: "你沉迷于换装游戏和时装设计师游戏吗？你准备好迎接风格挑战了吗？让我们现在就开始玩这款换装游戏吧！准备好用你独特的风格在时装秀上惊艳全场。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/6b40mq9bu1rda8ptf37o615nirp2kocz/512x384.jpg",
        url: "https://html5.gamemonetize.com/6b40mq9bu1rda8ptf37o615nirp2kocz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1185,
        title: "Funny sounds",
        titleZh: "搞笑声音",
        desc: "Funny sounds. A fun game in which you make funny sounds. Surprise your colleagues at work by unobtrusively making one of the funny sounds.",
        descZh: "搞笑声音。一款有趣的游戏，你可以在其中制造各种搞笑的声音。通过悄悄地发出其中一个搞笑声音来给同事一个惊喜。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/tr8vmrucaanecpllp3ja0dl1omj1wjv6/512x384.jpg",
        url: "https://html5.gamemonetize.com/tr8vmrucaanecpllp3ja0dl1omj1wjv6/",
        controls: "Mouse/Touch"
    },
    {
        id: 1186,
        title: "Flag Paint Puzzle Game",
        titleZh: "旗帜涂色解谜游戏",
        desc: "Get ready to embark on a vibrant journey with World Flags: Color Puzzle, the ultimate game for flag enthusiasts and puzzle lovers alike! If you have a passion for national flags and a flair for colors",
        descZh: "准备好与世界旗帜：颜色拼图一起踏上丰富多彩的旅程吧，这是旗标爱好者和解谜爱好者的终极游戏！如果你对国旗充满热情并对色彩有敏锐的感觉。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/7uij88omrdew9cnvt1oux8eg0tdm7qj8/512x384.jpg",
        url: "https://html5.gamemonetize.com/7uij88omrdew9cnvt1oux8eg0tdm7qj8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1187,
        title: "Nine Cards Of Winter",
        titleZh: "九张冬日卡片",
        desc: "Get into the holiday spirit with Nine Cards of Winter, a fun and relaxing tile-matching game! Pick up to 9 Christmas tiles and match 3 of the same to clear them. Watch out &mdash; if your stack fills ",
        descZh: "通过《九张冬日卡片》感受节日气氛，这是一款有趣而轻松的瓷砖配对游戏！选择最多9张圣诞瓷砖，将3张相同的瓷砖配对消除。小心——如果你的堆栈满了。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/f3r5sex50ro1fwrmks41k5najty3mhll/512x384.jpg",
        url: "https://html5.gamemonetize.com/f3r5sex50ro1fwrmks41k5najty3mhll/",
        controls: "Mouse/Touch"
    },
    {
        id: 1188,
        title: "Rat Purrsuit",
        titleZh: "老鼠追逐战",
        desc: "in this game you have cat and catch the rat and complete the level every level diffcult and share with your friend enjoy the game on game monetize",
        descZh: "在这款游戏中，你有一只猫要抓住老鼠并完成每一关，每关都很难，与朋友分享并在游戏平台上享受游戏乐趣。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/086re3fo35f43d8ovg6ls8q87gonl31f/512x384.jpg",
        url: "https://html5.gamemonetize.com/086re3fo35f43d8ovg6ls8q87gonl31f/",
        controls: "Mouse/Touch"
    },
    {
        id: 1189,
        title: "Tower Defence 1",
        titleZh: "塔防游戏1",
        desc: "Prepare for relentless waves of creepy crawlers in this action-packed strategy game! In Tower Defence, your base is under siege by swarms of invading insects&mdash;and its up to you to stop them. Buil",
        descZh: "在这个动作丰富的策略游戏中，准备好迎接无情的恐怖爬虫浪潮吧！在塔防游戏中，你的基地正受到成群入侵昆虫的围攻——阻止它们是你的责任。建造防御塔来抵御敌人。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/9v6hqnas31f02nlu9bntd1rz4pm3ff90/512x384.jpg",
        url: "https://html5.gamemonetize.com/9v6hqnas31f02nlu9bntd1rz4pm3ff90/",
        controls: "Mouse/Touch"
    },
    {
        id: 1190,
        title: "Abyssal Echoes",
        titleZh: "深渊回声",
        desc: "Excellent choice.  &ldquo;Abyssal Echoes&rdquo; is a powerful, poetic, and haunting name perfect for a deep-sea psychological horror game. Below is a complete long-form game description written specif",
        descZh: "绝佳的选择。《深渊回声》是一个强大、诗意且令人难忘的名字，非常适合深海心理恐怖游戏。以下是一个完整的游戏长篇描述，专门为你量身定制。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/p2yoio4lbhdhw0e57040u82k19fyi2pv/512x384.jpg",
        url: "https://html5.gamemonetize.com/p2yoio4lbhdhw0e57040u82k19fyi2pv/",
        controls: "Mouse/Touch"
    },
    {
        id: 1191,
        title: "D Race X",
        titleZh: "致命赛车X",
        desc: "Get ready for the ultimate racing experience in Deadly Race: Ultimate Speed &mdash; a high-octane, skill-based car racing game built for true speed lovers! No pay-to-win, no ads, no in-app purchases &",
        descZh: "准备好在《致命赛车：终极速度》中体验终极赛车感受吧——这是一款为真正速度爱好者打造的高辛烷值、基于技能的赛车游戏！没有付费获胜，没有广告，没有应用内购买。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/603mzpfpq50loewnua433w5u7lf0j3tz/512x384.jpg",
        url: "https://html5.gamemonetize.com/603mzpfpq50loewnua433w5u7lf0j3tz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1192,
        title: "Lumbering At Sea",
        titleZh: "海上伐木",
        desc: "You can experience an adventure different from the Grand Line. You need to collect materials to build your own ship, and then compete with others here. Of course there are rich rewards after winning.",
        descZh: "你可以体验与伟大航线不同的冒险。你需要收集材料来建造自己的船只，然后在这里与他人竞争。当然，获胜后会有丰厚的奖励。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/t28x1cf2kqtnitkhi4xhhz6l69rar4pn/512x384.jpg",
        url: "https://html5.gamemonetize.com/t28x1cf2kqtnitkhi4xhhz6l69rar4pn/",
        controls: "Mouse/Touch"
    },
    {
        id: 1193,
        title: "Cargo Truck Transport Game",
        titleZh: "货车运输游戏",
        desc: "Welcome to the world of truck cargo transport games. Real cargo truck driving,uphill mountain cargo truck drive simulator game. Breath taking cargo truck games with dangerous mountains with day terrai",
        descZh: "欢迎来到卡车货运运输游戏的世界。真实的货运卡车驾驶，上山下坡山路卡车驾驶模拟器游戏。令人惊叹的货运卡车游戏，有危险的山脉和昼夜地形变化。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/4w8oinja7h4ednfqu9nn75f086ijklkz/512x384.jpg",
        url: "https://html5.gamemonetize.com/4w8oinja7h4ednfqu9nn75f086ijklkz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1194,
        title: "Drag it Puzzle Shapes",
        titleZh: "拖拽解谜拼图",
        desc: "Get ready to dive into this captivating puzzle adventure that will truly engage your mind! In Drag it Puzzle Shapes, you&rsquo;ll connect virtual pieces just like in real life to form stunning images ",
        descZh: "准备好投入到这个引人入胜的解谜冒险中来吧，它将真正激发你的思维！在《拖拽解谜拼图》中，你会像在生活中一样连接虚拟碎片，形成令人惊叹的图像。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/zhqtaj1wchcrjrteoikrzimn26666gaf/512x384.jpg",
        url: "https://html5.gamemonetize.com/zhqtaj1wchcrjrteoikrzimn26666gaf/",
        controls: "Mouse/Touch"
    },
    {
        id: 1195,
        title: "Find Ball",
        titleZh: "寻找球球",
        desc: "Three Cups is a mind-bending puzzle game that challenges players to test their focus, memory, and strategic thinking. In each level, three cups are shuffled rapidly, hiding a small object underneath o",
        descZh: "三杯游戏是一款令人费解的解谜游戏，挑战玩家的专注力、记忆力和战略思维。在每个关卡中，三个杯子会被快速洗牌，将一个小物体藏在其中一个下面。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/p5rxs26j1s3nw5rnugp4mqja8cc5q33u/512x384.jpg",
        url: "https://html5.gamemonetize.com/p5rxs26j1s3nw5rnugp4mqja8cc5q33u/",
        controls: "Mouse/Touch"
    },
    {
        id: 1196,
        title: "Smart Dots Reloaded",
        titleZh: "智能点点游戏重制版",
        desc: "Smart Dots Reloaded is a fresh remake of the classic Dots and Boxes puzzle from Windows 3.1. Players take turns drawing lines between dots. Completing a square earns a point, and the game ends when th",
        descZh: "《智能点点游戏重制版》是对Windows 3.1经典点与框解谜游戏的新鲜重制。玩家们轮流在点之间画线。完成一个正方形获得一分，当所有可能的连线都被画完时游戏结束。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/f5l8chws2l7exii1362h6ifzt5jal195/512x384.jpg",
        url: "https://html5.gamemonetize.com/f5l8chws2l7exii1362h6ifzt5jal195/",
        controls: "Mouse/Touch"
    },
    {
        id: 1197,
        title: "Nivra",
        titleZh: "尼夫拉坦克大战",
        desc: "In a world shattered by endless wars, the land has turned into a barren wasteland ruled by powerful tank factions. Cities have fallen, resources are scarce, and survival depends on the strength of you",
        descZh: "在一个被无尽战争摧毁的世界里，大地变成了一片贫瘠的荒地，由强大的坦克派系统治。城市已经沦陷，资源稀缺，生存取决于你的坦克力量和战略。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/nq90wfutco4i0htj0ikdvgp70a5o0q66/512x384.jpg",
        url: "https://html5.gamemonetize.com/nq90wfutco4i0htj0ikdvgp70a5o0q66/",
        controls: "Mouse/Touch"
    },
    {
        id: 1198,
        title: "Farm Simulator Township Game",
        titleZh: "农场模拟小镇游戏",
        desc: "Welcome to the most immersive and relaxing farming game experience ever created. Ultimate farming simulation game! Live the life of a modern farmer as you step into a vibrant, dynamic world full of fe",
        descZh: "欢迎来到有史以来最具沉浸感和放松感的农场游戏体验。终极农场模拟游戏！当你踏入一个充满活力、动态世界的现代农民生活时，体验种植作物、饲养动物和管理农场的乐趣。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/iojkoe68zyjra4dxu5itysdy88dzqxt6/512x384.jpg",
        url: "https://html5.gamemonetize.com/iojkoe68zyjra4dxu5itysdy88dzqxt6/",
        controls: "Mouse/Touch"
    },
    {
        id: 1199,
        title: "Mud Offroad Jeep Game",
        titleZh: "泥泞越野吉普车游戏",
        desc: "Welcome to the off road jeep driving game. Get ready to embark on the ultimate off road journey in an off road jeep adventure game where powerful jeeps, rugged terrains, and extreme challenges await. ",
        descZh: "欢迎来到越野吉普车驾驶游戏。准备好在越野吉普车冒险游戏中踏上终极越野之旅，强大的吉普车、崎岖的地形和极端挑战在等着你。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/93d6h8i0rbebzr6pcjrc98ui9bhtdn7q/512x384.jpg",
        url: "https://html5.gamemonetize.com/93d6h8i0rbebzr6pcjrc98ui9bhtdn7q/",
        controls: "Mouse/Touch"
    },
    {
        id: 1200,
        title: "Airplane Simulator Game",
        titleZh: "飞机模拟器游戏",
        desc: "Get ready for an amazing flight adventure with the Airplane Simulator Game. The most exciting airplane flying game where you take off from one airport and land safely at another. Feel like a real pilo",
        descZh: "准备好通过飞机模拟器游戏体验奇妙的飞行冒险吧。这是一款最刺激的飞机飞行游戏，你可以从一个机场起飞，安全降落在另一个机场。感受像真正的飞行员一样的体验。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/etxaaflofm9eluf5v74343nlwnpgkynx/512x384.jpg",
        url: "https://html5.gamemonetize.com/etxaaflofm9eluf5v74343nlwnpgkynx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1201,
        title: "racing portal",
        titleZh: "赛车门户",
        desc: "Experience the ultimate adrenaline rush with Turbo Street Racers &mdash; the most thrilling car racing game ever!  Race through stunning cityscapes, deserts, and mountain roads while customizing your ",
        descZh: "通过《涡轮街头赛车手》体验终极肾上腺素激流——这是有史以来最刺激的赛车游戏！在惊人的城市景观、沙漠和山路中竞速，同时自定义你的车辆。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/zuo8mjoeayuv57mfsueh21iatxrolwbx/512x384.jpg",
        url: "https://html5.gamemonetize.com/zuo8mjoeayuv57mfsueh21iatxrolwbx/",
        controls: "Mouse/Touch"
    },
    {
        id: 1202,
        title: "Arcanoid Shooter Defence",
        titleZh: "阿卡诺伊德射击防御",
        desc: "Step into an intergalactic arcade adventure! This game blends classic Arkanoid brick-breaking action with a futuristic twist. Pilot your spaceship, bounce the ball, and strategically destroy rows of v",
        descZh: "踏入星际街机冒险！这款游戏将经典的阿卡诺伊德打砖块动作与未来主义元素相结合。驾驶你的宇宙飞船，弹射球，并战略性地摧毁成排的砖块。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/qx9xhqoqs5ll86irzxh9pxm073ctssev/512x384.jpg",
        url: "https://html5.gamemonetize.com/qx9xhqoqs5ll86irzxh9pxm073ctssev/",
        controls: "Mouse/Touch"
    },
    {
        id: 1203,
        title: "Feed all the MONSTERS in the Mineblock",
        titleZh: "喂养Mineblock中的所有怪物",
        desc: "Feed all the monsters in the Mineblock World right now! Immerse yourself in the amazing world of monsters and feed them all to the limit.  You will have a wide variety of different types of food, some",
        descZh: "现在就喂养Mineblock世界中的所有怪物！沉浸在精彩的怪物世界中，将它们全部喂养到极限。你将有各种不同类型的食物，有些食物可以让你的怪物成长。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/fc1sslk92fdsse6hiswcx33bvv9lhth7/512x384.jpg",
        url: "https://html5.gamemonetize.com/fc1sslk92fdsse6hiswcx33bvv9lhth7/",
        controls: "Mouse/Touch"
    },
    {
        id: 1204,
        title: "Cargo Bike And Car Game",
        titleZh: "货运自行车与汽车游戏",
        desc: "This cargo truck bike and car game gives you three driving experiences in one. Drive heavy cargo trucks on long roads, ride fast delivery bikes in the city, and drive cool cars for special transport m",
        descZh: "这款货运卡车、自行车和汽车游戏为你提供了三种合一的驾驶体验。在长途道路上驾驶重型货运卡车，在城市中骑行快速送货自行车，并驾驶炫酷的汽车进行特殊运输任务。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/85hiue0w37zlpaollwf1oid4ibbak3tn/512x384.jpg",
        url: "https://html5.gamemonetize.com/85hiue0w37zlpaollwf1oid4ibbak3tn/",
        controls: "Mouse/Touch"
    },
    {
        id: 1205,
        title: "Animal Runner Safari Game",
        titleZh: "动物跑酷野生动物园游戏",
        desc: "Become the best in this awesome endless runner game. Surf through the city with loads of exciting characters who can use powerups like jetpacks and hoverboards. An amazing looking city to run and surf",
        descZh: "成为这款精彩的无尽跑酷游戏中的佼佼者。与众多令人兴奋的角色一起在城市中穿梭，他们可以使用喷气背包和悬浮滑板等强化道具。在看起来 Amazing 的城市中奔跑和滑行。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/k6bun6vwzcb9tnhgogtvbzu33kxyixft/512x384.jpg",
        url: "https://html5.gamemonetize.com/k6bun6vwzcb9tnhgogtvbzu33kxyixft/",
        controls: "Mouse/Touch"
    },
    {
        id: 1206,
        title: "Rescue Casual Pin Puzzle",
        titleZh: "拯救休闲钉子解谜",
        desc: "Welcome to Rescue Casual Pin Puzzle, the brain-teasing adventure filled with love, strategy, and excitement. In this addictive puzzle and pin puzzle game, your mission is to rescue the couple from tri",
        descZh: "欢迎来到《拯救休闲钉子解谜》，这是一款充满爱、策略和刺激的脑力挑战冒险游戏。在这款令人上瘾的解谜和钉子解谜游戏中，你的任务是从棘手的困境中拯救这对夫妇。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/lr8dul0s0ws9ujbpsip0387xen307y4j/512x384.jpg",
        url: "https://html5.gamemonetize.com/lr8dul0s0ws9ujbpsip0387xen307y4j/",
        controls: "Mouse/Touch"
    },
    {
        id: 1207,
        title: "Tank Wrestle",
        titleZh: "坦克摔跤大战",
        desc: "Welcome to the world of tank battles, where you can control tanks to fight with other enemies on different maps. There are also a wealth of tanks for you to choose from!",
        descZh: "欢迎来到坦克战斗的世界，你可以控制坦克在不同的地图上与其他敌人作战。这里还有丰富的坦克供你选择！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/ojv8zoj9ko1zoil5cpv4ewj46b1k8lya/512x384.jpg",
        url: "https://html5.gamemonetize.com/ojv8zoj9ko1zoil5cpv4ewj46b1k8lya/",
        controls: "Mouse/Touch"
    },
    {
        id: 1208,
        title: "Bubble Shooter Clash Blast Online",
        titleZh: "泡泡射击碰撞爆炸在线版",
        desc: "Bubble Shooter Cash Blast Online is a fun, fast-paced, and addictive bubble shooter game where every pop can lead to big rewards! Aim, shoot, and match colorful bubbles to clear the board, unlock bonu",
        descZh: "《泡泡射击现金爆炸在线版》是一款有趣、快节奏且令人上瘾的泡泡射击游戏，每一次爆破都可能带来丰厚奖励！瞄准、射击并匹配彩色泡泡以清除面板，解锁奖励和特殊能力。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/nbb1ozf3q5s064utarnohqghn16l6ohi/512x384.jpg",
        url: "https://html5.gamemonetize.com/nbb1ozf3q5s064utarnohqghn16l6ohi/",
        controls: "Mouse/Touch"
    },
    {
        id: 1209,
        title: "Ultimate Flying Eagle Game",
        titleZh: "终极飞鹰游戏",
        desc: "Eagle Empire is a game created for those who love arcade games and overcoming obstacles and adversities. It is also a great game for nature and animal lovers. Birds and eagles in particular, since its",
        descZh: "鹰之帝国是一款为喜爱街机游戏和克服障碍逆境的玩家打造的游戏。这也是自然和动物爱好者的绝佳游戏，尤其是鸟类和老鹰爱好者。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/7j0h669xt7sa6x492awk7htjib9lwqz3/512x384.jpg",
        url: "https://html5.gamemonetize.com/7j0h669xt7sa6x492awk7htjib9lwqz3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1210,
        title: "Bus Park 3D",
        titleZh: "3D巴士停车",
        desc: "Bus Park 3D is a realistic truck-parking challenge with tight corners, narrow docks, cones, and moving traffic. Master precise steering, trailer swing, and momentum as you park without hitting obstacl",
        descZh: "3D巴士停车是一款逼真的卡车停车挑战游戏，包含急转弯、狭窄码头、锥体和移动交通。掌握精确转向、拖车摆动和惯性，在不撞到障碍物的情况下停车。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/44fm06aqx7dz3mq1u9oyowc93ns21n3p/512x384.jpg",
        url: "https://html5.gamemonetize.com/44fm06aqx7dz3mq1u9oyowc93ns21n3p/",
        controls: "Mouse/Touch"
    },
    {
        id: 1211,
        title: "Animal Helicopter Rescue Game",
        titleZh: "动物直升机救援",
        desc: "Welcome to an exciting helicopter rescue game where you are the pilot, and your mission is to save the lives of animals. In this helicopter rescue game, your job is to complete different rescue missio",
        descZh: "欢迎来到激动人心的直升机救援游戏，你是飞行员，任务是拯救动物的生命。在这个直升机救援游戏中，你的工作是完成不同的救援任务。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/lfcfbk6qfhprm2gs5yah70sxbiugs80a/512x384.jpg",
        url: "https://html5.gamemonetize.com/lfcfbk6qfhprm2gs5yah70sxbiugs80a/",
        controls: "Mouse/Touch"
    },
    {
        id: 1212,
        title: "Wednesday Halloween Cave",
        titleZh: "星期三万圣节洞穴",
        desc: "Gothic girls need to escape from the mine. The girls who study at the wizard school enter a very dangerous cave in search of the magic book they&rsquo;ve been looking for. Inside the cave, they encoun",
        descZh: "哥特女孩需要从矿井中逃脱。在魔法学校学习的女孩们进入了一个非常危险的洞穴，寻找她们一直在寻找的魔法书。在洞穴里，她们遇到了...",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/erkxhnpvttp3mlh88fphd3u90qsl2tb9/512x384.jpg",
        url: "https://html5.gamemonetize.com/erkxhnpvttp3mlh88fphd3u90qsl2tb9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1213,
        title: "Crazy Rocket Man",
        titleZh: "疯狂火箭人",
        desc: "Crazy Rocket Man is an exciting and entertaining online game made especially for kids who love action and creativity! The main goal is simple yet super fun &mdash; match the puppet&rsquo;s pose on the",
        descZh: "疯狂火箭人是一款特别为喜爱动作和创造力的孩子们制作的刺激有趣的在线游戏！主要目标简单又超级有趣——匹配木偶的姿势。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/fjtiq9g04drsb52wl3tl7b9lx0klo9e6/512x384.jpg",
        url: "https://html5.gamemonetize.com/fjtiq9g04drsb52wl3tl7b9lx0klo9e6/",
        controls: "Mouse/Touch"
    },
    {
        id: 1214,
        title: "Tap React Plus",
        titleZh: "点击反应加强版",
        desc: "Tap &amp; React Plus is a fast-paced reaction game where every tap counts. Keep the red square alive by tapping it quickly before it shrinks away. Hit yellow squares for bonus points, and avoid the bl",
        descZh: "点击反应加强版是一款快节奏的反应游戏，每一次点击都很重要。通过快速点击红色方块来保持它的活性，别让它缩小消失。点击黄色方块获得奖励分。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/7zsk6ioaig2tn26ocf6z1kv3daxtv2xm/512x384.jpg",
        url: "https://html5.gamemonetize.com/7zsk6ioaig2tn26ocf6z1kv3daxtv2xm/",
        controls: "Mouse/Touch"
    },
    {
        id: 1215,
        title: "JigsawAdventure",
        titleZh: "拼图冒险",
        desc: "Jigsaw Adventure is a jigsaw puzzle game full of retro adventure atmosphere. Players will piece together various mysterious patterns in a scene like yellowed parchment, from castle silhouettes to fant",
        descZh: "拼图冒险是一款充满复古冒险气息的拼图游戏。玩家将在泛黄羊皮纸般的场景中拼凑出各种神秘图案，从城堡剪影到奇幻生物。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/r7b62izwob9hznoi8z75ldl8pt8bbddz/512x384.jpg",
        url: "https://html5.gamemonetize.com/r7b62izwob9hznoi8z75ldl8pt8bbddz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1216,
        title: "ConfusionsInMath 5 8",
        titleZh: "趣味数学 5-8",
        desc: "Many a times student use numbers in Std. 5-8 and have common confusions over their multiplications resulting in numbers 1-100. These are basic building blocks for all Quant so kids at this levels shou",
        descZh: "学生在5-8年级经常使用数字，并且在1-100范围内的乘法上会有常见的困惑。这些是所有定量分析的基础，所以这个级别的孩子应该掌握。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/piw2np8o1kkmua3lqq8yth6v5uzzdw8l/512x384.jpg",
        url: "https://html5.gamemonetize.com/piw2np8o1kkmua3lqq8yth6v5uzzdw8l/",
        controls: "Mouse/Touch"
    },
    {
        id: 1217,
        title: "Easiest Maths",
        titleZh: "最简单的数学",
        desc: "Learn. Play. Win! Easiest Maths is a bright and playful math quiz game made especially for kids up to 10 years old. It helps children build strong basics in addition, subtraction, multiplication, and ",
        descZh: "学习、游玩、获胜！最简单的数学是一款专为10岁以下儿童设计的明亮有趣的数学问答游戏。它帮助孩子们建立加减乘除的坚实基础。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/2ibqkoa8tga71wluasvc3b7r3kthngz8/512x384.jpg",
        url: "https://html5.gamemonetize.com/2ibqkoa8tga71wluasvc3b7r3kthngz8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1218,
        title: "Cellf Defense",
        titleZh: "细胞防御",
        desc: "Cellf Defense is a fast-paced action strategy game where you command microscopic defenders inside a living cell. As waves of invading viruses and bacteria attack, you must deploy specialized immune un",
        descZh: "细胞防御是一款快节奏的动作策略游戏，你在活细胞内指挥微观防御者。当入侵的病毒和细菌浪潮来袭时，你必须部署专门的免疫单位。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/whqzssc4qq9m927vemrnr89i5jkj8kdg/512x384.jpg",
        url: "https://html5.gamemonetize.com/whqzssc4qq9m927vemrnr89i5jkj8kdg/",
        controls: "Mouse/Touch"
    },
    {
        id: 1219,
        title: "Fish Hunting Frenzy Shooter Game",
        titleZh: "疯狂捕鱼",
        desc: "Welcome to the dark, thrilling, and action-packed underwater world of fish hunting. This is not just another fish survival game &ndash; this is an extreme predator experience where the tables have tur",
        descZh: "欢迎来到黑暗、惊险且充满动作的在水下捕鱼世界。这不仅仅是另一个鱼类生存游戏——这是一个极端的掠食者体验。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/fka0srbhopmu1w4dr232pxga38pk79v8/512x384.jpg",
        url: "https://html5.gamemonetize.com/fka0srbhopmu1w4dr232pxga38pk79v8/",
        controls: "Mouse/Touch"
    },
    {
        id: 1220,
        title: "Edge of Survival",
        titleZh: "生存边缘",
        desc: "Find Your Way &ndash; 2D Navigation Adventure Game Welcome to Find Your Way, a captivating 2D navigation and maze game that challenges your mind, reflexes, and sense of direction. In this unique brows",
        descZh: "寻找出路——2D导航冒险游戏。欢迎来到寻找出路，这是一款引人入胜的2D导航和迷宫游戏，挑战你的思维、反应和方向感。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/2z0ymsbp3xsg3at9l1asiwiq0odj71gb/512x384.jpg",
        url: "https://html5.gamemonetize.com/2z0ymsbp3xsg3at9l1asiwiq0odj71gb/",
        controls: "Mouse/Touch"
    },
    {
        id: 1221,
        title: "MAZE BOOM",
        titleZh: "迷宫爆炸",
        desc: "Find your way through challenging mazes filled with twists turns and surprises use logic and memory to avoid dead ends solve clever puzzles and reach the exit before time runs out each level brings ne",
        descZh: "穿越充满转折和惊喜的挑战性迷宫，利用逻辑和记忆避免死胡同，解决巧妙的谜题，在时间耗尽前到达出口。每一关都带来新的挑战。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/5x895nh10i777j08juyxdq6qpfx0glng/512x384.jpg",
        url: "https://html5.gamemonetize.com/5x895nh10i777j08juyxdq6qpfx0glng/",
        controls: "Mouse/Touch"
    },
    {
        id: 1222,
        title: "The Bunny vs The Gardener",
        titleZh: "兔子大战园丁",
        desc: "The Bunny vs The Gardener is a fast-paced arcade shooter where a brave bunny defends his peaceful garden from the furious gardener boss. Dodge attacks, blast through waves of seeds and obstacles, and ",
        descZh: "兔子大战园丁是一款快节奏的街机射击游戏，一只勇敢的兔子保护他平静的花园免受愤怒的园丁老板的侵害。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/0r37g5w6rdj1u9t3hitlddy78afvy429/512x384.jpg",
        url: "https://html5.gamemonetize.com/0r37g5w6rdj1u9t3hitlddy78afvy429/",
        controls: "Mouse/Touch"
    },
    {
        id: 1223,
        title: "Splashy Sub",
        titleZh: "飞溅潜艇",
        desc: "Dive deep into the ocean in Splashy Sub, a fun and challenging underwater adventure! Control your tiny yellow submarine and navigate through dangerous underwater caves filled with obstacles, mines, an",
        descZh: "在飞溅潜艇中潜入深海，这是一款有趣且具有挑战性的水下冒险！控制你的黄色小潜艇，穿越充满障碍、水雷和危险的水下洞穴。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/ylxfj0lw3ytgg2zbi9aukv04mp926btc/512x384.jpg",
        url: "https://html5.gamemonetize.com/ylxfj0lw3ytgg2zbi9aukv04mp926btc/",
        controls: "Mouse/Touch"
    },
    {
        id: 1224,
        title: "Crowd Runners 3D",
        titleZh: "人群冲刺 3D",
        desc: "Choose the best gate, pass through it, and bring stickman warriors together to clash with the opposing crowd. Become the crowd runner and lead your people through the crowded city till the end of this",
        descZh: "选择最好的大门穿过，召集火柴人战士与对方人群发生冲突。成为人群奔跑者，带领你的人民穿过拥挤的城市直到终点。",
        category: "action",
        thumbnail: "https://img.gamemonetize.com/cb46lvg1na5tbw02mtyngdts930u61f1/512x384.jpg",
        url: "https://html5.gamemonetize.com/cb46lvg1na5tbw02mtyngdts930u61f1/",
        controls: "Mouse/Touch"
    },
    {
        id: 1225,
        title: "OffRoad Jeep Driving Game",
        titleZh: "越野吉普车驾驶",
        desc: "Welcome to play offroad jeep driving simulator on impossible offroad tracks where you will show your driving skills and enjoy an off-road journey in the mountains area. SUV 4x4 offroad jeep driving si",
        descZh: "欢迎在不可能的越野赛道上玩越野吉普车驾驶模拟器，你将在那里展示你的驾驶技巧并享受山区越野之旅。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/l73y71zlm4347f4sw6y0key3hm7fepq2/512x384.jpg",
        url: "https://html5.gamemonetize.com/l73y71zlm4347f4sw6y0key3hm7fepq2/",
        controls: "Mouse/Touch"
    },
    {
        id: 1226,
        title: "Monster Truck Racing Game",
        titleZh: "怪物卡车竞速",
        desc: "Get ready for the most thrilling adventure in the world of monster truck games! Drive powerful 4x4 monster trucks across extreme tracks, perform impossible stunts, and explore dangerous offroad enviro",
        descZh: "准备好在怪物卡车游戏的世界里进行最激动人心的冒险吧！驾驶强大的4x4怪物卡车穿越极端赛道，表演不可能的特技。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/1az3dmc5l928uspjpx12zdkb5ppbh4gd/512x384.jpg",
        url: "https://html5.gamemonetize.com/1az3dmc5l928uspjpx12zdkb5ppbh4gd/",
        controls: "Mouse/Touch"
    },
    {
        id: 1227,
        title: "Halloween Bubble Shooting Game",
        titleZh: "万圣节泡泡射击",
        desc: "Welcome to the Halloween Bubble Shooter! Get ready for a scary adventure filled with pumpkins, ghosts, and endless bubble-popping fun! Dive into the haunted world of this thrilling offline game, perfe",
        descZh: "欢迎来到万圣节泡泡射手！准备好迎接充满南瓜、鬼魂和无尽泡泡爆破乐趣的恐怖冒险吧！潜入这个激动人心的离线游戏的闹鬼世界。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/zm3rceetko64aovtlppp75lb2ykjpvpp/512x384.jpg",
        url: "https://html5.gamemonetize.com/zm3rceetko64aovtlppp75lb2ykjpvpp/",
        controls: "Mouse/Touch"
    },
    {
        id: 1228,
        title: "Real Advanced Monster Truck Simulator",
        titleZh: "真实高级怪物卡车模拟",
        desc: "You have to perform crazy race stunts and cause destruction with derby car. Stunt driver can smash and destroy the realistic 3D environment. Enjoy real damage by the monstrous truck and demolish every",
        descZh: "你必须表演疯狂的赛车特技并用德比车造成破坏。特技司机可以粉碎和破坏逼真的3D环境。享受怪物卡车造成的真实伤害。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/3sbwz2loxtmz631j5ide4t1cndniw51r/512x384.jpg",
        url: "https://html5.gamemonetize.com/3sbwz2loxtmz631j5ide4t1cndniw51r/",
        controls: "Mouse/Touch"
    },
    {
        id: 1229,
        title: "Anti Terrorist Shooting Game",
        titleZh: "反恐射击游戏",
        desc: "Overview Play as an elite commando in a modern war against terrorists. Fight across realistic terrains with AI enemies, complete missions, and experience smooth auto-shoot controls with HD graphics. G",
        descZh: "在现代反恐战争中扮演精英突击队。在逼真的地形中与AI敌人作战，完成任务，体验高清画质的流畅自动射击控制。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/yppzt3a7q7dn0qpf1rame7d875dbo7s9/512x384.jpg",
        url: "https://html5.gamemonetize.com/yppzt3a7q7dn0qpf1rame7d875dbo7s9/",
        controls: "Mouse/Touch"
    },
    {
        id: 1230,
        title: "Candy Match Puzzle Challenge",
        titleZh: "糖果匹配解谜挑战",
        desc: "Candy Match Puzzle is an exciting and free-to-play online match-4 style game designed to bring endless fun and challenge to players of all ages! Your goal is simple but addictive &mdash; match as many",
        descZh: "糖果匹配解谜是一款激动人心的免费在线匹配游戏，旨在为这所有年龄段的玩家带来无尽的乐趣和挑战！你的目标简单但令人上瘾——匹配尽可能多的糖果。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/nu3fgrns30jdzq2wysqff6te13emsdlu/512x384.jpg",
        url: "https://html5.gamemonetize.com/nu3fgrns30jdzq2wysqff6te13emsdlu/",
        controls: "Mouse/Touch"
    },
    {
        id: 1231,
        title: "Flappy Halloween Run",
        titleZh: "扑翼万圣节跑酷",
        desc: "Welcome to the Flappy Halloween Run game!!!   The player has to save the Halloween ball and fly through gaps between obstacles like flying witch and birds. The game ends when the player touch with the",
        descZh: "欢迎来到扑翼万圣节跑酷游戏！！！玩家必须拯救万圣节球，飞越飞行女巫和鸟类等障碍物之间的空隙。当玩家接触到障碍物时，游戏结束。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/eou8jfbte7a7mkm9appdrfheu1v6n3tb/512x384.jpg",
        url: "https://html5.gamemonetize.com/eou8jfbte7a7mkm9appdrfheu1v6n3tb/",
        controls: "Mouse/Touch"
    },
    {
        id: 1232,
        title: "Halloween Match Trio",
        titleZh: "万圣节三重匹配",
        desc: "Halloween Match Trio is a classic match-3 puzzle game with fun challenges. Swap items to make a line of three or more matching items, horizontally or vertically. Keep matching to unlock all tiles and ",
        descZh: "万圣节三重匹配是一款经典的具有有趣挑战的三消益智游戏。交换物品以使三个或更多匹配物品形成一条线，水平或垂直皆可。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/m1jq6f0w2zxpje2avccod87k5yof5ef0/512x384.jpg",
        url: "https://html5.gamemonetize.com/m1jq6f0w2zxpje2avccod87k5yof5ef0/",
        controls: "Mouse/Touch"
    },
    {
        id: 1233,
        title: "FireDash 2D",
        titleZh: "火焰冲刺2D",
        desc: "FireDash-2D is a fast-paced survival game where you must dodge rising flames and move quickly to stay alive. Test your reflexes, time your dashes, and survive as long as possible. Simple controls, fie",
        descZh: "FireDash-2D 是一款快节奏的生存游戏，你必须躲避不断上升的火焰并快速移动以求生存。测试你的反应能力，把握冲刺时机，并尽可能长时间地生存。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/rkcju0by0l4tphqlipsq1jzhs6boxco0/512x384.jpg",
        url: "https://html5.gamemonetize.com/rkcju0by0l4tphqlipsq1jzhs6boxco0/",
        controls: "Mouse/Touch"
    },
    {
        id: 1234,
        title: "Mojo Emoji",
        titleZh: "表情猜猜猜",
        desc: "Moji Emoji is a fun and clever word/emoji puzzle game where each level challenges you to guess the hidden word or phrase from a set of expressive emojis. Think fast, connect the clues, and test your e",
        descZh: "表情猜猜猜是一款有趣又聪明的文字/表情拼图游戏，每一关都挑战你从一组表情符号中猜出隐藏的单词或短语。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/ihwy9h4pojf3lu9ngeuuyev6x4nsi1vo/512x384.jpg",
        url: "https://html5.gamemonetize.com/ihwy9h4pojf3lu9ngeuuyev6x4nsi1vo/",
        controls: "Mouse/Touch"
    },
    {
        id: 1235,
        title: "Floof My Pet House",
        titleZh: "Floof我的宠物屋",
        desc: "Welcome to Floof - My Pet House, a casual pet simulation game for kids online. If you love playing with cats and dogs, or are looking for lovely and relaxing games online, do not hesitate to join H5ga",
        descZh: "欢迎来到Floof - 我的宠物屋，这是一款适合儿童的在线休闲宠物模拟游戏。如果你喜欢和猫狗玩耍，或者正在寻找可爱的放松游戏，请不要犹豫。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/kvk00287r982pktzqwkd5h8ca3l338bz/512x384.jpg",
        url: "https://html5.gamemonetize.com/kvk00287r982pktzqwkd5h8ca3l338bz/",
        controls: "Mouse/Touch"
    },
    {
        id: 1236,
        title: "Nut Sort: Color Puzzle Game",
        titleZh: "螺母分类：颜色解谜",
        desc: "Nut Sort: Color Puzzle Game &mdash; a satisfying and addictive logic puzzle that will test your organizational skills! Sort colorful nuts onto matching bolts so that each bolt holds nuts of only one c",
        descZh: "螺母分类：颜色解谜游戏——一个令人满意和上瘾的逻辑拼图，将测试你的组织能力！将五颜六色的螺母分类到匹配的螺栓上。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/bqo62nz1cpec68bw0mb8z8deln9yrq5a/512x384.jpg",
        url: "https://html5.gamemonetize.com/bqo62nz1cpec68bw0mb8z8deln9yrq5a/",
        controls: "Mouse/Touch"
    },
    {
        id: 1237,
        title: "Formula Car Racing Games",
        titleZh: "方程式赛车游戏",
        desc: "In Top Speed Formula Car Racing Games, you have access to multiple high-speed cars, all set to race on thrilling tracks. This formula game, renowned among car games, starts in a stadium packed with mo",
        descZh: "在《极速方程式赛车游戏》中，你可以驾驶多辆高速赛车，在激动人心的赛道上比赛。这款在赛车游戏中享有盛誉的方程式游戏开始于一个挤满人的体育场。",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/0l23s8wwj9n5xgcc6tyagm5inw1bv60d/512x384.jpg",
        url: "https://html5.gamemonetize.com/0l23s8wwj9n5xgcc6tyagm5inw1bv60d/",
        controls: "Mouse/Touch"
    },
    {
        id: 1238,
        title: "City Cargo Truck Driving Game",
        titleZh: "城市货运卡车驾驶",
        desc: "Welcome to the city truck cargo game. Experience the thrill of driving a truck through a bustling city. Gear up for the ultimate cargo delivery adventure in City Cargo Truck Simulator, where you take ",
        descZh: "欢迎来到城市卡车货运游戏。体验在繁忙城市中驾驶卡车的刺激。在城市货运卡车模拟器中准备好进行终极货物运输冒险。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/2t96bk2qy6gfeqe3wvcorrpkytk33rcf/512x384.jpg",
        url: "https://html5.gamemonetize.com/2t96bk2qy6gfeqe3wvcorrpkytk33rcf/",
        controls: "Mouse/Touch"
    },
    {
        id: 1239,
        title: "Emergency Ambulance Driving Game",
        titleZh: "紧急救护车驾驶",
        desc: "Welcome to the ambulance rescue simulator game! Are you ready to become a real-life hero? Take a seat and start your job in a fully modeled and realistic ambulance game. Ambulance rescue simulator gam",
        descZh: "欢迎来到救护车救援模拟器游戏！你准备好成为现实生活中的英雄了吗？坐下来，在完全建模和逼真的救护车游戏中开始你的工作。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/ex0828f49g2pkh7v0v9ygdxxwwwoq69v/512x384.jpg",
        url: "https://html5.gamemonetize.com/ex0828f49g2pkh7v0v9ygdxxwwwoq69v/",
        controls: "Mouse/Touch"
    },
    {
        id: 1240,
        title: "3D Halloween Jigsaw",
        titleZh: "3D万圣节拼图",
        desc: "3D Halloween Jigsaw is a 3D remake of the classic jigsaw puzzle with beautiful halloween themes. Can you solve the puzzle with many difficulties from 6 pieces to 96 pieces?",
        descZh: "3D万圣节拼图是经典拼图游戏的3D重制版，具有美丽的万圣节主题。你能解决从6块到96块不同难度的拼图吗？",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/yqtmz79h77simoqjmg9sj2g1up2vth3o/512x384.jpg",
        url: "https://html5.gamemonetize.com/yqtmz79h77simoqjmg9sj2g1up2vth3o/",
        controls: "Mouse/Touch"
    },
    {
        id: 1241,
        title: "Machine City Balls",
        titleZh: "机械城市球",
        desc: "Control your ball and drive on irregular roads. Sometimes you may encounter obstacles, but you may also fall into the abyss if you are not careful. However, there will be generous rewards for clearing",
        descZh: "控制你的球并在不规则的道路上行驶。有时你可能会遇到障碍物，不小心可能会掉进深渊。但是，通关会有丰厚的奖励。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/83hgteh0eensk1rjj4m3ayqo38b33imw/512x384.jpg",
        url: "https://html5.gamemonetize.com/83hgteh0eensk1rjj4m3ayqo38b33imw/",
        controls: "Mouse/Touch"
    },
    {
        id: 1242,
        title: "Three Points",
        titleZh: "三点挑战",
        desc: "Three Points is a fast-paced neon reflex arcade game that challenges your precision and timing. Rotate the glowing triangle to match the color of each falling ball before it hits the ring. One mistake",
        descZh: "三点挑战是一款快节奏的霓虹反射街机游戏，挑战你的精确度和时机。旋转发光的三角形，在落下的球击中圆环之前匹配它的颜色。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/j26hfzgrv8fjng9pi1deswl9gcoyag8e/512x384.jpg",
        url: "https://html5.gamemonetize.com/j26hfzgrv8fjng9pi1deswl9gcoyag8e/",
        controls: "Mouse/Touch"
    },
    {
        id: 1243,
        title: "FNAF Strike Halloween",
        titleZh: "FNAF万圣节突袭",
        desc: "FNAF Strike Halloween is an intense first-person shooter set in a spooky Halloween-themed world inspired by the legendary Five Nights at Freddy&rsquo;s universe. Your mission is simple but terrifying ",
        descZh: "《FNAF万圣节突袭》是一款紧张的第一人称射击游戏，设定在受传说中的《玩具熊的五夜后宫》宇宙启发的幽灵万圣节主题世界中。",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/ku4cdozc5yihzx014dvug9m9ndifnd3x/512x384.jpg",
        url: "https://html5.gamemonetize.com/ku4cdozc5yihzx014dvug9m9ndifnd3x/",
        controls: "Mouse/Touch"
    },
    {
        id: 1244,
        title: "Nostalgic Playstation1 Quiz",
        titleZh: "怀旧PS1问答",
        desc: "Step back into the golden age of gaming with Nostalgic Playstation1 Quiz! Test your memory and knowledge of the legendary PS1 era &mdash; from classic characters and epic soundtracks to the unforgetta",
        descZh: "通过《怀旧Playstation1问答》回到游戏的黄金时代！测试你对传奇PS1时代的记忆和知识——从经典角色和史诗配乐到难忘的瞬间。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/06clf8qhjrfp4dftq78jinoige4u5xow/512x384.jpg",
        url: "https://html5.gamemonetize.com/06clf8qhjrfp4dftq78jinoige4u5xow/",
        controls: "Mouse/Touch"
    },
    {
        id: 1245,
        title: "Cashier Point",
        titleZh: "收银员大挑战",
        desc: "In this game, you take on the role of a cashier at a store, where the main task is to calculate and return the correct change to the customer. The game is designed to test both your math skills and sp",
        descZh: "在这个游戏中，你扮演商店收银员的角色，主要任务是计算并找给顾客正确的零钱。这款游戏旨在测试你的数学技能。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/c1j9fdppzk5g4btdemyvue2lifq7dlvv/512x384.jpg",
        url: "https://html5.gamemonetize.com/c1j9fdppzk5g4btdemyvue2lifq7dlvv/",
        controls: "Mouse/Touch"
    },
    {
        id: 1246,
        title: "K Pop Hunter Halloween Fashion",
        titleZh: "K-Pop猎人万圣节时尚",
        desc: "Step into the glamorous world of K-Pop Hunter Halloween Fashion! In this fun dress-up game, you become the ultimate stylist, creating spooky yet stylish looks for popular K-Pop stars. Mix and match Ha",
        descZh: "走进K-Pop猎人万圣节时尚的迷人世界！在这个有趣的换装游戏中，你将成为终极造型师，为流行的K-Pop明星打造恐怖又时尚的造型。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/yb2a55demhhm058ax3vzzx34babw545i/512x384.jpg",
        url: "https://html5.gamemonetize.com/yb2a55demhhm058ax3vzzx34babw545i/",
        controls: "Mouse/Touch"
    },
    {
        id: 1247,
        title: "Lion Family Sim Online",
        titleZh: "狮子家庭在线模拟",
        desc: "Step into the wild and rule the savannah in Lion Family Sim Online. It&rsquo;s a full animal simulation adventure where you live the life of a mighty lion. Build and grow your own lion family, explore",
        descZh: "在《狮子家庭在线模拟》中踏入野外并统治大草原。这是一个完整的动物模拟冒险，你将过着强大狮子的生活。建立和壮大你自己的狮子家庭。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/3rpjxnxcc6482ltv1hbfbhsc68ezkg2c/512x384.jpg",
        url: "https://html5.gamemonetize.com/3rpjxnxcc6482ltv1hbfbhsc68ezkg2c/",
        controls: "Mouse/Touch"
    },
    {
        id: 1248,
        title: "Fish Royale io",
        titleZh: "鱼类大逃杀io",
        desc: "Fish Royale io throws you into a chaotic reef where bite beats might. Start as a scrappy guppy, gobble smaller fish to grow, then bully the food chain with wild power-ups&mdash;laser bursts, drill das",
        descZh: "《鱼类大逃杀io》将你带入一个混乱的珊瑚礁，咬合力决定一切。从一条好斗的小鱼开始，吞食更小的鱼来成长，然后利用狂野的道具在食物链中称霸。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/lmxuoasnk3yi56rki31cim52miapkent/512x384.jpg",
        url: "https://html5.gamemonetize.com/lmxuoasnk3yi56rki31cim52miapkent/",
        controls: "Mouse/Touch"
    },
    {
        id: 1249,
        title: "Brainrot Mini Challenge",
        titleZh: "脑洞迷你挑战",
        desc: "Want the craziest challenges ever? Brainrot Mini Challenge is a massive collection packed with tons of fun minigames. Each level offers a completely fresh experience. From tricky brain teasers to exci",
        descZh: "想要体验最疯狂的挑战吗？《脑洞迷你挑战》是一个包含海量有趣小游戏的巨大合集。每一关都提供全新的体验。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/0vebeu4j60gmlg7lwbnozyelejdxjq84/512x384.jpg",
        url: "https://html5.gamemonetize.com/0vebeu4j60gmlg7lwbnozyelejdxjq84/",
        controls: "Mouse/Touch"
    },
    {
        id: 1250,
        title: "Mermaids Tail Rush",
        titleZh: "美人鱼尾巴冲刺",
        desc: "Mermaids are known to eat their tails to increase their length and make them more beautiful. Im kidding. At the end of the game, you will receive rewards based on the length of your tail! Please feel ",
        descZh: "据说美人鱼吃尾巴是为了增加尾巴长度并变得更美丽。开玩笑的。在游戏结束时，你将根据尾巴的长度获得奖励！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/1j1r48dhcnlj6j1nr2axr6bzbe0z19gm/512x384.jpg",
        url: "https://html5.gamemonetize.com/1j1r48dhcnlj6j1nr2axr6bzbe0z19gm/",
        controls: "Mouse/Touch"
    },
    {
        id: 1251,
        title: "Dirt Bus Simulation Game",
        titleZh: "泥地巴士模拟",
        desc: "Welcome to the off road bus game. This is a fun and exciting game where you drive a big bus on rough and bumpy roads in mud bus game. If you enjoy driving games and want to try something new, this gam",
        descZh: "欢迎来到越野巴士游戏。这是一款有趣而刺激的游戏，你在泥地巴士游戏中在崎岖不平的道路上驾驶大巴士。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/0aznla513smxr263nt7f1ppdkuvz5e8p/512x384.jpg",
        url: "https://html5.gamemonetize.com/0aznla513smxr263nt7f1ppdkuvz5e8p/",
        controls: "Mouse/Touch"
    },
    {
        id: 1252,
        title: "Car Cargo Ship Game",
        titleZh: "汽车货运船游戏",
        desc: "Welcome to the car transport ship simulator game. The ultimate cargo transport and driving game where your driving, parking, loading, and ship navigation skills will be tested to the limits. Become a ",
        descZh: "欢迎来到汽车运输船模拟器游戏。终极货运和驾驶游戏，你的驾驶、停车、装载和船舶导航技能将受到极限测试。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/kxh30m2ua6pedi5yfbep1e6ppyyb4yr3/512x384.jpg",
        url: "https://html5.gamemonetize.com/kxh30m2ua6pedi5yfbep1e6ppyyb4yr3/",
        controls: "Mouse/Touch"
    },
    {
        id: 1253,
        title: "Brain Puzzle: Tricky Quest",
        titleZh: "脑力谜题：棘手任务",
        desc: "Brain Test is an addictive free tricky puzzle game with a series of tricky brain teasers. Different riddles and tricky tests will challenge your mind. This new puzzle game may break common sense and b",
        descZh: "Brain Test是一款令人上瘾的免费棘手谜题游戏，包含一系列棘手的脑筋急转弯。不同的谜语和棘手的测试将挑战你的思维。",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/0xpoap7mxwuwhj89a49njoponru4a0pr/512x384.jpg",
        url: "https://html5.gamemonetize.com/0xpoap7mxwuwhj89a49njoponru4a0pr/",
        controls: "Mouse/Touch"
    },
    {
        id: 1254,
        title: "Car Wash And Repair Game",
        titleZh: "洗车维修游戏",
        desc: "Welcome to the car wash simulator game. The ultimate car cleaning and detailing game where you transform dirty, muddy vehicles into sparkling, showroom-ready rides. Experience the thrill of running a ",
        descZh: "欢迎来到洗车模拟器游戏。终极汽车清洁和美容游戏，你还可以将脏兮兮、泥泞的车辆变成闪闪发光、适合展示的座驾。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/ym1fq29e2c21ionwkca41aq593csvapm/512x384.jpg",
        url: "https://html5.gamemonetize.com/ym1fq29e2c21ionwkca41aq593csvapm/",
        controls: "Mouse/Touch"
    },
    {
        id: 1255,
        title: "Soccer Guantone Mobile",
        titleZh: "移动足球关塔那",
        desc: "Take on Guantone the sassy goalkeeper and the Hungry Giant in this funny, fast-paced soccer adventure!  Score penalties, avoid blocks, collect diamonds, and reach 12 goals to win the cup, +7000 points",
        descZh: "在这个有趣、快节奏的足球冒险中，挑战时髦的守门员Guantone和饥饿的巨人！罚点球得分，避开阻挡，收集钻石。",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/sxamxsrcl1yjh3m2nsbaa96o4mcduxno/512x384.jpg",
        url: "https://html5.gamemonetize.com/sxamxsrcl1yjh3m2nsbaa96o4mcduxno/",
        controls: "Mouse/Touch"
    },
    {
        id: 1256,
        title: "Passenger City Taxi Game",
        titleZh: "城市出租车载客",
        desc: "Welcome to the city taxi driver simulator game, the ultimate driving experience where you become the most reliable and skilled taxi driver in the city. Navigate busy streets, pick up passengers and dr",
        descZh: "欢迎来到城市出租车司机模拟器游戏，这是终极驾驶体验，你将成为城市中最可靠和熟练的出租车司机。穿越繁忙的街道，接送乘客。",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/wbzn75op9wz7mjmjv4s877cwj1s91myf/512x384.jpg",
        url: "https://html5.gamemonetize.com/wbzn75op9wz7mjmjv4s877cwj1s91myf/",
        controls: "Mouse/Touch"
    },
    {
        id: 1257,
        title: "Flipxy, the bat",
        titleZh: "蝙蝠弗利普西",
        desc: "Flipxy is a fast-paced arcade game where you control a bouncing bat that can only flip its direction. Collect coins, dodge monsters, grab bananas to survive, and face spooky bosses in a thrilling Hall",
        descZh: "Flipxy是一款快节奏的街机游戏，你控制一只只能改变方向的弹跳蝙蝠。收集硬币，躲避怪物，抓香蕉生存。",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/0hu0lxuttwm5fjw5mox59cbs8h69py9s/512x384.jpg",
        url: "https://html5.gamemonetize.com/0hu0lxuttwm5fjw5mox59cbs8h69py9s/",
        controls: "Mouse/Touch"
    },
    {
        id: 1258,
        title: "Obby Grow with every step",
        titleZh: "每一步都在成长的Obby",
        desc: "Obby game inspired by Roblox where your character grows taller with every step! The more you run, the higher you become &mdash; and the harder the challenges you can overcome! Jump over gaps, climb hi",
        descZh: "受Roblox启发的Obby游戏，你的角色每走一步都会长高！你跑得越多，你就变得越高——你能克服的挑战也就越难！",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/ka8j21lmya1dzuvvpmbly8tn8sei6w1x/512x384.jpg",
        url: "https://html5.gamemonetize.com/ka8j21lmya1dzuvvpmbly8tn8sei6w1x/",
        controls: "Mouse/Touch"
    },
    {
        id: 1259,
        title: "K Pop Halloween Dress Up",
        titleZh: "K-Pop万圣节换装",
        desc: "Get spooky and stylish with K-Pop Demon Hunters Halloween Dress Up! Dress the Huntrix girls in hauntingly chic outfits like Witch, Pumpkin Queen, Vampire Idol, and more. Mix costumes, accessories, and",
        descZh: "用K-Pop恶魔猎人万圣节装扮变得恐怖又时尚！将Huntrix女孩打扮成令人难以忘怀的别致服装，如女巫、南瓜女王、吸血鬼偶像等。",
        category: "casual",
        thumbnail: "https://img.gamemonetize.com/w24lmd536cbwi6d750r1n9lu0w81alyk/512x384.jpg",
        url: "https://html5.gamemonetize.com/w24lmd536cbwi6d750r1n9lu0w81alyk/",
        controls: "Mouse/Touch"
    },
    {
        id: 1260,
        title: "Crowd Evolution 3D",
        titleZh: "人群进化3D",
        desc: "This is a level-breaking game that combines real-time combat and strategy. You can purchase troops or strengthen weapons and equipment, and avoid obstacles while defeating the final boss!",
        descZh: "这是一款结合了即时战斗和策略的闯关游戏。你可以购买军队或加强武器装备，避开障碍，击败最终BOSS！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/oibc1h332sdsky90u7p3qsjtuc1mri20/512x384.jpg",
        url: "https://html5.gamemonetize.com/oibc1h332sdsky90u7p3qsjtuc1mri20/",
        controls: "Mouse/Touch"
    }
];

// ========================================
// 辅助函数
// ========================================
function getGameCount() {
    return games.length;
}

function getGamesByCategory(category) {
    if (category === 'all') return games;
    return games.filter(g => g.category === category);
}

function getAllCategories() {
    const cats = [...new Set(games.map(g => g.category))];
    return ['all', ...cats];
}

function getGameTitle(game) {
    return currentLang === 'zh' ? (game.titleZh || game.title) : game.title;
}

function getGameDesc(game) {
    return currentLang === 'zh' ? (game.descZh || game.desc) : game.desc;
}

function getGameById(id) {
    return games.find(g => g.id === parseInt(id));
}

// 获取热门游戏
function getHotGames(count = 12) {
    return games.filter(g => g.hot === true).slice(0, count);
}

// ========================================
// URL 生成助手 (SEO Friendly)
// ========================================
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function getGameUrl(game) {
    // 优先返回静态生成的页面 URL
    // 本地开发时也可以工作，只要 file 存在
    const slug = slugify(game.title);
    return `games/${slug}-${game.id}.html`;
}

// ========================================
// 历史记录功能 (Recently Played)
// ========================================
const HISTORY_KEY = 'h5game_history';
const MAX_HISTORY = 6; // 保留最近6个

function saveToHistory(gameId) {
    if (!gameId) return;
    let history = getHistoryIds();
    // 移除已存在的（为了把它移到最前面）
    history = history.filter(id => id !== parseInt(gameId));
    // 添加到开头
    history.unshift(parseInt(gameId));
    // 截断
    if (history.length > MAX_HISTORY) {
        history = history.slice(0, MAX_HISTORY);
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function getHistoryIds() {
    const json = localStorage.getItem(HISTORY_KEY);
    try {
        return json ? JSON.parse(json) : [];
    } catch (e) {
        return [];
    }
}

function getHistoryGames() {
    const ids = getHistoryIds();
    // 过滤掉可能已经下架的游戏
    return ids.map(id => getGameById(id)).filter(game => !!game);
}

// ========================================
// 每日推荐功能 (Daily Featured)
// ========================================
// 简单的基于日期的伪随机种子生成器
function getDailySeed() {
    const d = new Date();
    // 种子格式: YYYYMMDD
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// 伪随机函数
function seededRandom(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function getDailyFeaturedGames(count = 4) {
    const seed = getDailySeed();
    let availableGames = [...games]; // Copy array
    const featured = [];

    // 简单的洗牌算法
    for (let i = 0; i < count; i++) {
        if (availableGames.length === 0) break;
        const index = Math.floor(seededRandom(seed + i) * availableGames.length);
        featured.push(availableGames[index]);
        availableGames.splice(index, 1); // Remove chosen game
    }
    return featured;
}

// ========================================
// 如何添加游戏 (Instructions)
// ========================================
/*
 * 添加新游戏很简单！只需在 games 数组中添加新对象：
 * ...
 */
