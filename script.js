// ===== 导航栏滚动显示/隐藏 =====
var navbar = document.getElementById('navbar');
var heroHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  if (window.scrollY > heroHeight * 0.6) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

// ===== 项目详情数据 =====
var projects = [
  {
    title: '出行数字人',
    category: '数字人 · AIGC 体验设计',
    desc: '为支付宝出行场景打造 AI 出行助手的数字人形象，应用于出行服务页面，提升用户交互体验。负责数字人形象设计、动作设计、表情设计，确保数字人在不同交互场景下的自然表现。',
    info: [
      { label: '背景', text: '为支付宝出行场景打造 AI 出行助手数字人形象' },
      { label: '职责', text: '数字人形象、动作、表情设计' },
      { label: '工具', text: 'Midjourney · 即梦 · ComfyUI' },
      { label: '成果', text: '已上线支付宝出行场景，作为 AI 出行助手核心形象' }
    ],
    galleryType: 'three',
    images: [
      'images/出行数字人初稿＿真人_1.png',
      'images/出行数字人初稿＿真人_2.png',
      'images/出行数字人定稿.png'
    ],
    extraImages: [
      { src: 'images/出行数字人方案二－男.png', label: '方案二 · 男性数字人（未采用）' },
      { src: 'images/出行数字人定稿.png', label: '最终上线 · 女性数字人' }
    ]
  },
  {
    title: '书阁一体',
    category: '游戏美术 · AIGC',
    desc: '面向支付宝平台的文化科普互动小游戏，通过趣味化玩法传递传统文化知识。负责角色设计、场景设计、关卡引导视频制作，把控游戏整体视觉风格与叙事节奏。',
    info: [
      { label: '背景', text: '支付宝平台文化科普互动小游戏' },
      { label: '职责', text: '角色设计、场景设计、关卡引导视频制作' },
      { label: '工具', text: '即梦 · 美术风格探索与素材生成' },
      { label: '成果', text: '完成核心角色、场景及引导视频设计' }
    ],
    galleryType: 'two',
    images: [
      'images/书阁一体封面.png',
      'images/书阁一体四库全书.png'
    ],
    extraImages: [
      { src: 'images/书阁一体动画场景_1.jpg', label: '场景 01' },
      { src: 'images/书阁一体动画场景_2.jpg', label: '场景 02' },
      { src: 'images/书阁一体动画场景_3.jpg', label: '场景 03' }
    ],
    videos: [
      { src: 'videos/开篇常规版.mp4', label: '开篇常规版' },
      { src: 'videos/第一章引入.mp4', label: '第一章 · 引入' },
      { src: 'videos/第一章过渡.mp4', label: '第一章 · 过渡' },
      { src: 'videos/第一章升华.mp4', label: '第一章 · 升华' },
      { src: 'videos/第二章-引入.mp4', label: '第二章 · 引入' },
      { src: 'videos/第二章-升华.mp4', label: '第二章 · 升华' },
      { src: 'videos/第三章-引入.mp4', label: '第三章 · 引入' },
      { src: 'videos/第三章-升华.mp4', label: '第三章 · 升华' },
      { src: 'videos/第四章.mp4', label: '第四章' }
    ]
  },
  {
    title: '余额宝 × 品牌联名',
    category: '品牌海报 · AIGC',
    desc: '为余额宝与 Maison Margiela、TUMI、TASAKI、RIMOWA、Burberry 等国际知名品牌联名推广活动设计系列海报。负责创意概念、视觉设计、AI 生图、排版设计全流程把控。',
    info: [
      { label: '背景', text: '余额宝与国际知名品牌联名推广' },
      { label: '职责', text: '创意概念、视觉设计、AI 生图、排版全流程' },
      { label: '工具', text: 'ComfyUI 生图 · Photoshop 精修排版' },
      { label: '成果', text: '系列海报获品牌方认可，用于联名推广视觉宣发' }
    ],
    galleryType: 'three',
    images: [
      'images/余额宝-tasaki.png',
      'images/余额宝-tumi.png',
      'images/余额宝-马吉拉.png'
    ],
    extraImages: [
      { src: 'images/余额宝—日默瓦.png', label: 'RIMOWA × 余额宝' },
      { src: 'images/余额宝-巴宝莉.png', label: 'Burberry × 余额宝' }
    ]
  },
  {
    title: '友谊医院科普视频',
    category: 'AI 视频 · AIGC',
    desc: '为友谊医院制作医学科普与健康宣教视频，通过 AIGC 技术高效产出专业科普内容。负责 AI 视频生成、画面设计、数字人/角色设计及配音，全流程把控视频质量。',
    info: [
      { label: '背景', text: '为友谊医院制作医学科普与健康宣教视频' },
      { label: '职责', text: 'AI 视频生成、画面设计、数字人设计及配音' },
      { label: '工具', text: '可灵 · Runway · 即梦 · Sora · D-ID · ComfyUI' },
      { label: '成果', text: '科普视频已上线阿福 App' }
    ],
    galleryType: 'three',
    images: [
      'images/友谊医院_一开会就想上厕所.png',
      'images/友谊医院_胃肠镜.png',
      'images/友谊医院_越忌口.png'
    ],
    extraImages: [],
    videos: [
      { src: 'videos/一开会就想上厕所.mp4', label: '一开会就想上厕所' },
      { src: 'videos/胃肠镜正常，为什么还会肚子痛.mp4', label: '胃肠镜正常，为什么还会肚子痛' },
      { src: 'videos/越忌口，肠道越安全吗.mp4', label: '越忌口，肠道越安全吗' }
    ]
  },
  {
    title: '节气插画',
    category: '插画 · AIGC',
    desc: '以二十四节气为主题，融合传统文化元素与现代插画风格，展现节令特色与文化意境。',
    info: [
      { label: '主题', text: '二十四节气插画视觉设计' },
      { label: '风格', text: '传统元素 × 现代插画' },
      { label: '工具', text: 'Midjourney · Stable Diffusion · Photoshop' }
    ],
    galleryType: 'three',
    images: [
      'images/小满节气.png',
      'images/芒种节气.png',
      'images/清明.png'
    ],
    extraImages: [
      { src: 'images/小暑节气.png', label: '小暑' },
      { src: 'images/夏至节气.png', label: '夏至' },
      { src: 'images/大暑节气.png', label: '大暑' }
    ]
  },
  {
    title: '建筑方案展示视频生成器',
    category: 'AI Skill · 建筑可视化',
    desc: '面向建筑方案展示场景开发的 AI 生成工具。直接连接本地 ComfyUI，通过链式一致性生成机制，让建筑在所有分镜中保持同一形象，自动输出建筑方案展示视频。',
    info: [
      { label: '背景', text: '为建筑方案汇报与营销展示打造 AI 视频生成器' },
      { label: '职责', text: '工具设计、Prompt 工程、ComfyUI 工作流搭建、界面设计' },
      { label: '工具', text: 'ComfyUI · Stable Diffusion · Python · Gradio' },
      { label: '亮点', text: '链式一致性生成 · 建筑锚定参考图 · 多种建筑风格 Prompt 模板' }
    ],
    galleryType: 'none',
    images: [],
    extraImages: [
      { src: 'images/skill_architecture_01.png', label: '链式一致性生成：直接调用本地 ComfyUI，上一步输出作为下一步 img2img 参考输入' },
      { src: 'images/skill_architecture_02.png', label: '建筑锚定参考图：上传平面图/效果图锁定建筑形象，所有分镜引用锚定图保持一致' },
      { src: 'images/skill_architecture_03.png', label: 'Prompt 风格选择：写实建筑摄影 / 极简线稿 / 竞赛效果图 / 温暖生活 / 未来科技 / 东方意境' }
    ],
    videos: []
  }
];

// ===== 打开项目详情 =====
function openProject(index) {
  var p = projects[index];
  var body = document.getElementById('modal-body');
  var html = '';

  html += '<p class="modal-cat">' + p.category + '</p>';
  html += '<h2>' + p.title + '</h2>';
  html += '<p class="modal-desc">' + p.desc + '</p>';

  // 信息
  if (p.info && p.info.length) {
    html += '<div class="modal-info">';
    p.info.forEach(function(row) {
      html += '<div class="info-row"><strong>' + row.label + '</strong><span>' + row.text + '</span></div>';
    });
    html += '</div>';
  }

  // 主图
  if (p.images && p.images.length) {
    var cls = p.galleryType === 'three' ? 'modal-gallery three' : 'modal-gallery';
    html += '<div class="' + cls + '">';
    p.images.forEach(function(src) {
      html += '<img src="' + src + '" onclick="openImage(this.src)">';
    });
    html += '</div>';
  }

  // 附加图
  if (p.extraImages && p.extraImages.length) {
    html += '<div class="modal-gallery">';
    p.extraImages.forEach(function(item) {
      html += '<div>';
      html += '<img src="' + item.src + '" onclick="openImage(this.src)" style="width:100%;border-radius:8px;">';
      html += '<p style="text-align:center;color:#888;font-size:0.8em;margin-top:8px;">' + item.label + '</p>';
      html += '</div>';
    });
    html += '</div>';
  }

  // 视频
  if (p.videos && p.videos.length) {
    html += '<div class="modal-videos">';
    p.videos.forEach(function(item) {
      html += '<div class="modal-video-item">';
      html += '<p class="modal-video-label">' + item.label + '</p>';
      html += '<video controls preload="metadata" style="width:100%;border-radius:8px;">';
      html += '<source src="' + item.src + '" type="video/mp4">';
      html += '您的浏览器不支持视频播放。';
      html += '</video>';
      html += '</div>';
    });
    html += '</div>';
  }

  body.innerHTML = html;
  document.getElementById('project-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('project-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== 图片放大 =====
function openImage(src) {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,0.95);display:flex;justify-content:center;align-items:center;cursor:zoom-out;';
  overlay.onclick = function() { document.body.removeChild(overlay); };
  var img = document.createElement('img');
  img.src = src;
  img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;';
  overlay.appendChild(img);
  document.body.appendChild(overlay);
}

// ESC关闭
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProject();
  }
});

// 点击遮罩关闭
document.getElementById('project-modal').addEventListener('click', function(e) {
  if (e.target === this) closeProject();
});
