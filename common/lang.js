// =============================
// 全站语言数据库
// =============================
const LANG = {
  "zh-CN": {
    // ===== 公共 =====
    nav_home: "首页",
    nav_breakfast: "早餐",
    nav_play: "游玩",
    nav_fitness: "健身",
    footer: "— Designed by BY —",

    // ===== 早餐 Breakfast =====
    title_breakfast: "🍳 今日早餐推荐",
    subtitle_breakfast: "简单 · 清晰 · 不纠结",
    name_label: "👤 大名",
    name_placeholder: "请输入你的名字",
    date_label: "📅 选择日期",
    btn_generate_breakfast: "🍳 推荐早餐",
    btn_history: "📜 查看历史",
    btn_clear: "🧹 清除历史",
    today_breakfast: "✅ 今日早餐",
    history_empty: "暂无历史记录",
    option: "选项",
    choose: "选择这个",

    // ===== 游玩 Play =====
    title_play: "🎯 今日游玩推荐",
    subtitle_play: "按距离 · 不纠结 · 直接去",
    btn_generate_play: "🎯 推荐游玩",
    today_play: "✅ 今日游玩",

    // ===== 健身 Fitness =====
    title_fitness: "💪 今日健身计划",
    subtitle_fitness: "简单 · 高效 · 不拖延",
    btn_generate_fitness: "💪 生成训练",
    today_fitness: "✅ 今日训练"
  },

  "zh-HK": {
    // ===== 公共 =====
    nav_home: "主頁",
    nav_breakfast: "早餐",
    nav_play: "玩樂",
    nav_fitness: "健身",
    footer: "— Designed by BY —",

    // ===== 早餐 Breakfast =====
    title_breakfast: "🍳 今日早餐推薦",
    subtitle_breakfast: "簡單 · 清晰 · 唔糾結",
    name_label: "👤 大名",
    name_placeholder: "請輸入你嘅名字",
    date_label: "📅 選擇日期",
    btn_generate_breakfast: "🍳 推薦早餐",
    btn_history: "📜 查看歷史",
    btn_clear: "🧹 清除歷史",
    today_breakfast: "✅ 今日早餐",
    history_empty: "暫無歷史記錄",
    option: "選項",
    choose: "揀呢個",

    // ===== 游玩 Play =====
    title_play: "🎯 今日玩樂推薦",
    subtitle_play: "按距離 · 唔使諗 · 直接去",
    btn_generate_play: "🎯 推薦玩樂",
    today_play: "✅ 今日玩樂",

    // ===== 健身 Fitness =====
    title_fitness: "💪 今日健身計劃",
    subtitle_fitness: "簡單 · 高效 · 唔拖延",
    btn_generate_fitness: "💪 生成訓練",
    today_fitness: "✅ 今日訓練"
  },

  "en": {
    // ===== Common =====
    nav_home: "Home",
    nav_breakfast: "Breakfast",
    nav_play: "Play",
    nav_fitness: "Fitness",
    footer: "— Designed by BY —",

    // ===== Breakfast =====
    title_breakfast: "🍳 Today's Breakfast",
    subtitle_breakfast: "Simple · Clear · No Overthinking",
    name_label: "👤 Name",
    name_placeholder: "Enter your name",
    date_label: "📅 Select Date",
    btn_generate_breakfast: "🍳 Generate Breakfast",
    btn_history: "📜 View History",
    btn_clear: "🧹 Clear History",
    today_breakfast: "✅ Today's Breakfast",
    history_empty: "No history yet",
    option: "Option",
    choose: "Choose this",

    // ===== Play =====
    title_play: "🎯 Today's Activity",
    subtitle_play: "By distance · No hassle · Just go",
    btn_generate_play: "🎯 Recommend Activities",
    today_play: "✅ Today's Activity",

    // ===== Fitness =====
    title_fitness: "💪 Today's Workout",
    subtitle_fitness: "Simple · Efficient · No Excuses",
    btn_generate_fitness: "💪 Generate Workout",
    today_fitness: "✅ Today's Workout"
  }
};

// =============================
// 当前语言
// =============================
let currentLang = localStorage.getItem("lang") || "zh-CN";

// =============================
// 翻译函数
// =============================
function t(key) {
  return LANG[currentLang]?.[key] || key;
}

// 设置文本
function t_set(id, key) {
  const el = document.getElementById(id);
  if (el) el.textContent = t(key);
}

// 设置 placeholder
function t_set_placeholder(id, key) {
  const el = document.getElementById(id);
  if (el) el.placeholder = t(key);
}

// =============================
// 切换语言
// =============================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  location.reload();
}
