// lang.js —— 全站语言数据库
const LANG = {
  "zh-CN": {
    // 公共
    nav_home: "首页",
    nav_breakfast: "早餐",
    nav_play: "游玩",
    nav_fitness: "健身",
    footer: "— Designed by BY —",

    // 早餐页面
    title_breakfast: "🍳 今日早餐推荐",
    subtitle_breakfast: "简单 · 清晰 · 不纠结",
    name_label: "👤 大名",
    name_placeholder: "请输入你的名字",
    date_label: "📅 选择日期",
    btn_generate_breakfast: "🍳 推荐早餐",
    btn_history: "📜 查看历史",
    btn_clear: "🧹 清除历史",
    today_breakfast: "✅ 今日早餐",
    option: "选项",
    choose: "选择这个",
    history_empty: "暂无历史记录"
  },

  "zh-HK": {
    nav_home: "主頁",
    nav_breakfast: "早餐",
    nav_play: "玩樂",
    nav_fitness: "健身",
    footer: "— Designed by BY —",

    title_breakfast: "🍳 今日早餐推薦",
    subtitle_breakfast: "簡單 · 清晰 · 唔糾結",
    name_label: "👤 大名",
    name_placeholder: "請輸入你嘅名字",
    date_label: "📅 選擇日期",
    btn_generate_breakfast: "🍳 推薦早餐",
    btn_history: "📜 查看歷史",
    btn_clear: "🧹 清除歷史",
    today_breakfast: "✅ 今日早餐",
    option: "選項",
    choose: "揀呢個",
    history_empty: "暫無歷史記錄"
  },

  "en": {
    nav_home: "Home",
    nav_breakfast: "Breakfast",
    nav_play: "Play",
    nav_fitness: "Fitness",
    footer: "— Designed by BY —",

    title_breakfast: "🍳 Today's Breakfast",
    subtitle_breakfast: "Simple · Clear · No Overthinking",
    name_label: "👤 Name",
    name_placeholder: "Enter your name",
    date_label: "📅 Select Date",
    btn_generate_breakfast: "🍳 Generate Breakfast",
    btn_history: "📜 View History",
    btn_clear: "🧹 Clear History",
    today_breakfast: "✅ Today's Breakfast",
    option: "Option",
    choose: "Choose this",
    history_empty: "No history yet"
  }
};

// 当前语言
let currentLang = localStorage.getItem("lang") || "zh-CN";

// 翻译函数
function t(key) {
  return LANG[currentLang]?.[key] || key;
}
