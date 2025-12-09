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
let currentLang = localStorage.getItem('lang') || 'zh';

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
        id: 904,
        title: "GoldRush Runner",
        titleZh: "淘金跑酷",
        desc: "Classic endless runner game!",
        descZh: "经典无尽跑酷游戏！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/qezo7d10nv4d2pblyf8i7idbqji1bsog/512x384.jpg",
        url: "https://html5.gamemonetize.com/qezo7d10nv4d2pblyf8i7idbqji1bsog/",
        controls: "Arrow keys"
    },
    {
        id: 905,
        title: "Cubic Rush",
        titleZh: "方块冲刺",
        desc: "Smash through platforms with the ball!",
        descZh: "用球砸碎平台！",
        category: "hypercasual",
        thumbnail: "https://img.gamemonetize.com/a84nnc8v9ds5z1qkgmfgti532to875sl/512x384.jpg",
        url: "https://html5.gamemonetize.com/a84nnc8v9ds5z1qkgmfgti532to875sl/",
        controls: "Mouse click"
    },
    {
        id: 906,
        title: "Coin Flick Soccer",
        titleZh: "弹指足球",
        desc: "Score penalty kicks like a pro!",
        descZh: "像职业选手一样罚点球！",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/k4orfszy5grobv16zcyfg6fie450ivi2/512x384.jpg",
        url: "https://html5.gamemonetize.com/k4orfszy5grobv16zcyfg6fie450ivi2/",
        controls: "Mouse click"
    },
    {
        id: 907,
        title: "Bear Ball Master",
        titleZh: "小熊泡泡龙",
        desc: "Pop bubbles and clear the board!",
        descZh: "射击泡泡清空棋盘！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/aur96p0aeocgnl7bo82mjy6pvmw3fbuo/512x384.jpg",
        url: "https://html5.gamemonetize.com/aur96p0aeocgnl7bo82mjy6pvmw3fbuo/",
        controls: "Mouse aim and click"
    },
    {
        id: 908,
        title: "Color Jam 3D",
        titleZh: "颜色果酱3D",
        desc: "Slice fruits with your blade!",
        descZh: "匹配蜡笔填充彩色图画！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/jwsdzxshoezui2jlv4sd1gf5x5jkrx57/512x384.jpg",
        url: "https://html5.gamemonetize.com/jwsdzxshoezui2jlv4sd1gf5x5jkrx57/",
        controls: "Mouse swipe"
    },
    {
        id: 909,
        title: "Fuji Leapers",
        titleZh: "青蛙跳跃",
        desc: "Help the frog leap and defeat bees!",
        descZh: "帮助青蛙跳跃消灭蜜蜂！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/ugfvau20g5koj55czd4e63rqyhbovib1/512x384.jpg",
        url: "https://html5.gamemonetize.com/ugfvau20g5koj55czd4e63rqyhbovib1/",
        controls: "Arrow keys or tap"
    },
    {
        id: 910,
        title: "Roll Away 3D",
        titleZh: "滚球冒险3D",
        desc: "Roll down the slope at high speed!",
        descZh: "在斜坡上高速滚动！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/nhgld41ueub48pma1jjtum04qgt2jzp3/512x384.jpg",
        url: "https://html5.gamemonetize.com/nhgld41ueub48pma1jjtum04qgt2jzp3/",
        controls: "Arrow keys"
    },
    {
        id: 911,
        title: "Link Flow",
        titleZh: "连线消除",
        desc: "Connect dots with lines to solve puzzles!",
        descZh: "用线条连接圆点解决谜题！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/dyz43tu8xyxu9d1o2f2loe20o8vijrki/512x384.jpg",
        url: "https://html5.gamemonetize.com/dyz43tu8xyxu9d1o2f2loe20o8vijrki/",
        controls: "Mouse or touch"
    },
    {
        id: 912,
        title: "Space IO",
        titleZh: "太空大作战",
        desc: "Become the biggest in space!",
        descZh: "成为太空中最大的！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/4jt7drizukk3heomy00elax4tukm0p19/512x384.jpg",
        url: "https://html5.gamemonetize.com/4jt7drizukk3heomy00elax4tukm0p19/",
        controls: "Mouse to move"
    },
    {
        id: 913,
        title: "Ghost Shift",
        titleZh: "幽灵切换",
        desc: "Pass through matching color obstacles!",
        descZh: "切换人类和幽灵模式生存！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/exfdtiqpclhki6mvuiq1f6628eln6383/512x384.jpg",
        url: "https://html5.gamemonetize.com/exfdtiqpclhki6mvuiq1f6628eln6383/",
        controls: "Click to jump"
    },
    {
        id: 914,
        title: "Car Line Rider",
        titleZh: "霓虹赛车",
        desc: "Drive uphill and collect coins!",
        descZh: "霓虹赛车，避开车迹轨道！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/7awyv0ytowhmcvd83lyhr7p9acvtd3kn/512x384.jpg",
        url: "https://html5.gamemonetize.com/7awyv0ytowhmcvd83lyhr7p9acvtd3kn/",
        controls: "Arrow keys"
    },
    {
        id: 915,
        title: "Box Magician",
        titleZh: "魔法箱子",
        desc: "Halloween physics puzzle - help the witch!",
        descZh: "万圣节物理解谜，帮助小女巫！",
        category: "puzzle",
        thumbnail: "https://img.gamemonetize.com/auevh1h61qj97qp28g7m9fs2jb89vplj/512x384.jpg",
        url: "https://html5.gamemonetize.com/auevh1h61qj97qp28g7m9fs2jb89vplj/",
        controls: "Mouse drag and release"
    },
    {
        id: 916,
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
        id: 917,
        title: "Rocket Fest",
        titleZh: "火箭派对",
        desc: "Fly with jetpack and dodge obstacles!",
        descZh: "控制火箭收集能量并轰炸目标！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/q5b8pfuo0rhucj7un9t3pzr94vh5oc8x/512x384.jpg",
        url: "https://html5.gamemonetize.com/q5b8pfuo0rhucj7un9t3pzr94vh5oc8x/",
        controls: "Space or Click"
    },
    {
        id: 918,
        title: "Monster City",
        titleZh: "怪兽城市",
        desc: "Play as Godzilla and save the city!",
        descZh: "扮演哥斯拉保卫城市！",
        category: "arcade",
        thumbnail: "https://img.gamemonetize.com/qwyxt4jx6byoc7gnl0gf01e82cab94jf/512x384.jpg",
        url: "https://html5.gamemonetize.com/qwyxt4jx6byoc7gnl0gf01e82cab94jf/",
        controls: "Mouse click"
    },
    {
        id: 919,
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
        id: 920,
        title: "Ace Drift 3D",
        titleZh: "王牌漂移3D",
        desc: "3D drifting racing game!",
        descZh: "3D漂移赛车游戏！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/vlqkcszim3vwzsx0k50xo9lymachkj6s/512x384.jpg",
        url: "https://html5.gamemonetize.com/vlqkcszim3vwzsx0k50xo9lymachkj6s/",
        controls: "WASD"
    },
    {
        id: 921,
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
        id: 922,
        title: "Seafloor Racing 3D",
        titleZh: "海底赛车3D",
        desc: "Race underwater and avoid whales!",
        descZh: "海底赛车，躲避鲸鱼！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/ufcvtjet12akdnq7ivr1empmhug0swsd/512x384.jpg",
        url: "https://html5.gamemonetize.com/ufcvtjet12akdnq7ivr1empmhug0swsd/",
        controls: "Mouse/tap"
    },
    {
        id: 923,
        title: "Gem Runner",
        titleZh: "宝石跑酷",
        desc: "Collect gems in endless 3D running!",
        descZh: "无尽3D跑酷收集宝石！",
        category: "racing",
        thumbnail: "https://img.gamemonetize.com/oqb0sn6kv4qfmcqzqo5hjzpy2w9vplxu/512x384.jpg",
        url: "https://html5.gamemonetize.com/oqb0sn6kv4qfmcqzqo5hjzpy2w9vplxu/",
        controls: "Mouse/tap"
    },
    {
        id: 924,
        title: "BulletMan 3D",
        titleZh: "子弹人3D",
        desc: "Action-packed 3D shooting game!",
        descZh: "动作3D射击游戏！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/tjsii5r6qlrfyf34b076syz13lzeq0x1/512x384.jpg",
        url: "https://html5.gamemonetize.com/tjsii5r6qlrfyf34b076syz13lzeq0x1/",
        controls: "Mouse aim and click"
    },
    {
        id: 925,
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
        id: 926,
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
        id: 927,
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
        id: 928,
        title: "Overlook Tank War",
        titleZh: "俯视坦克战",
        desc: "Top-down tank shooter!",
        descZh: "俯视角坦克射击游戏！",
        category: "shooting",
        thumbnail: "https://img.gamemonetize.com/qszsjvbbog34bpge30jspq1j73p6cfj8/512x384.jpg",
        url: "https://html5.gamemonetize.com/qszsjvbbog34bpge30jspq1j73p6cfj8/",
        controls: "WASD and mouse"
    },
    {
        id: 929,
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
        id: 930,
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
        id: 931,
        title: "Epic Runner Parkour",
        titleZh: "极限跑酷",
        desc: "Survival parkour action game!",
        descZh: "生存跑酷动作游戏！",
        category: "adventure",
        thumbnail: "https://img.gamemonetize.com/qn8id2vh04sszh1968dgt3lp5u0hi7pl/512x384.jpg",
        url: "https://html5.gamemonetize.com/qn8id2vh04sszh1968dgt3lp5u0hi7pl/",
        controls: "Mouse click"
    },
    {
        id: 938,
        title: "Neon Mini Golf",
        titleZh: "霓虹高尔夫",
        desc: "Stylish HTML5 mini golf with 39 levels!",
        descZh: "时尚霓虹迷你高尔夫，39关！",
        category: "sports",
        thumbnail: "https://img.gamemonetize.com/jjbc1jhdydn8azhcmbnpo3tvzbkyhy76/512x384.jpg",
        url: "https://html5.gamemonetize.com/jjbc1jhdydn8azhcmbnpo3tvzbkyhy76/",
        controls: "Mouse drag"
    },
    {
        id: 939,
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
        id: 940,
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
