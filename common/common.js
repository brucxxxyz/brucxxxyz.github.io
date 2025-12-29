/* ============================================================
   全站统一：语言切换 + 深色模式 + 多语言包
   ============================================================ */

/* ========== 深色模式 ========== */
let dark = localStorage.getItem("darkMode") === "true";

function applyTheme(){
  if(dark){
    document.body.classList.add("dark");
    const btn = document.getElementById("themeBtn");
    if(btn) btn.innerText = "☀️";
  }else{
    document.body.classList.remove("dark");
    const btn = document.getElementById("themeBtn");
    if(btn) btn.innerText = "🌙";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();

  const themeBtn = document.getElementById("themeBtn");
  if(themeBtn){
    themeBtn.onclick = () => {
      dark = !dark;
      localStorage.setItem("darkMode", dark);
      applyTheme();
    };
  }
});

/* ========== 多语言包（UI + 早餐 + 健身） ========== */

const LANG = {
  "zh-CN": {
    /* UI 文案 */
    title_breakfast: "🍳 今日早餐推荐",
    subtitle_breakfast: "简单 · 清晰 · 不纠结",
    title_fitness: "💪 今日健身推荐",
    subtitle_fitness: "低强度 · 不纠结 · 在家就练",
    name_label: "👤 大名",
    name_placeholder: "请输入你的名字",
    date_label: "📅 选择日期",
    btn_generate_breakfast: "🍳 推荐早餐",
    btn_generate_fitness: "🔥 开始健身",
    btn_history: "📜 查看历史",
    btn_clear: "🧹 清除历史",
    footer: "— Designed by BY —",
    history_empty: "暂无历史记录",
    today_breakfast: "✅ 今日早餐",
    today_fitness: "✅ 今日健身",
    option: "选项",
    choose: "选择这个",

    /* 早餐食物 */
    drinks: {
      "豆浆": "豆浆",
      "温牛奶": "温牛奶",
      "燕麦奶": "燕麦奶",
      "黑咖啡": "黑咖啡",
      "绿茶": "绿茶",
      "温水": "温水"
    },
    staples: {
      "全麦吐司": "全麦吐司",
      "小馒头": "小馒头",
      "即食燕麦": "即食燕麦",
      "白粥 / 小米粥": "白粥 / 小米粥",
      "鸡蛋（煮/蒸）": "鸡蛋（煮/蒸）",
      "鸡蛋三明治": "鸡蛋三明治"
    },
    desserts: {
      "水果": "水果",
      "原味酸奶": "原味酸奶",
      "坚果一小把": "坚果一小把",
      "红豆 / 绿豆": "红豆 / 绿豆",
      "玉米 / 红薯": "玉米 / 红薯",
      "不吃甜点": "不吃甜点"
    },

    /* 健身动作 */
    fitness: {
      "站姿提膝收腹": "站姿提膝收腹",
      "原地摆臂快走": "原地摆臂快走",
      "站姿侧抬腿": "站姿侧抬腿",
      "徒手深蹲": "徒手深蹲",
      "站姿拳击（技术+呼吸）": "站姿拳击（技术+呼吸）",
      "站姿转体": "站姿转体",
      "波比简化版（不跳）": "波比简化版（不跳）",
      "原地高抬腿（慢速）": "原地高抬腿（慢速）"
    }
  },

  "zh-HK": {
    /* UI 文案 */
    title_breakfast: "🍳 今日早餐推薦",
    subtitle_breakfast: "簡單 · 清晰 · 唔糾結",
    title_fitness: "💪 今日健身推薦",
    subtitle_fitness: "低強度 · 唔糾結 · 喺屋企都做到",
    name_label: "👤 大名",
    name_placeholder: "請輸入你嘅名字",
    date_label: "📅 選擇日期",
    btn_generate_breakfast: "🍳 推薦早餐",
    btn_generate_fitness: "🔥 開始健身",
    btn_history: "📜 查看歷史",
    btn_clear: "🧹 清除歷史",
    footer: "— Designed by BY —",
    history_empty: "暫無歷史記錄",
    today_breakfast: "✅ 今日早餐",
    today_fitness: "✅ 今日健身",
    option: "選項",
    choose: "揀呢個",

    /* 早餐食物 */
    drinks: {
      "豆浆": "豆漿",
      "温牛奶": "暖牛奶",
      "燕麦奶": "燕麥奶",
      "黑咖啡": "黑咖啡",
      "绿茶": "綠茶",
      "温水": "暖水"
    },
    staples: {
      "全麦吐司": "全麥多士",
      "小馒头": "小饅頭",
      "即食燕麦": "即食燕麥",
      "白粥 / 小米粥": "白粥 / 小米粥",
      "鸡蛋（煮/蒸）": "雞蛋（煮/蒸）",
      "鸡蛋三明治": "雞蛋三文治"
    },
    desserts: {
      "水果": "生果",
      "原味酸奶": "原味乳酪",
      "坚果一小把": "堅果一小撮",
      "红豆 / 绿豆": "紅豆 / 綠豆",
      "玉米 / 红薯": "粟米 / 番薯",
      "不吃甜点": "唔食甜品"
    },

    /* 健身动作 */
    fitness: {
      "站姿提膝收腹": "站姿提膝收腹",
      "原地摆臂快走": "原地擺臂快走",
      "站姿侧抬腿": "站姿側抬腿",
      "徒手深蹲": "徒手深蹲",
      "站姿拳击（技术+呼吸）": "站姿拳擊（技術+呼吸）",
      "站姿转体": "站姿轉體",
      "波比简化版（不跳）": "波比簡化版（唔跳）",
      "原地高抬腿（慢速）": "原地高抬腿（慢速）"
    }
  },

  "en": {
    /* UI 文案 */
    title_breakfast: "🍳 Today's Breakfast",
    subtitle_breakfast: "Simple · Clear · No Overthinking",
    title_fitness: "💪 Today's Workout",
    subtitle_fitness: "Low intensity · Simple · At home",
    name_label: "👤 Name",
    name_placeholder: "Enter your name",
    date_label: "📅 Select Date",
    btn_generate_breakfast: "🍳 Generate Breakfast",
    btn_generate_fitness: "🔥 Start Workout",
    btn_history: "📜 View History",
    btn_clear: "🧹 Clear History",
    footer: "— Designed by BY —",
    history_empty: "No history yet",
    today_breakfast: "✅ Today's Breakfast",
    today_fitness: "✅ Today's Workout",
    option: "Option",
    choose: "Choose this",

    /* 早餐食物 */
    drinks: {
      "豆浆": "Soy Milk",
      "温牛奶": "Warm Milk",
      "燕麦奶": "Oat Milk",
      "黑咖啡": "Black Coffee",
      "绿茶": "Green Tea",
      "温水": "Warm Water"
    },
    staples: {
      "全麦吐司": "Whole Wheat Toast",
      "小馒头": "Steamed Bun",
      "即食燕麦": "Instant Oatmeal",
      "白粥 / 小米粥": "Rice Porridge / Millet Porridge",
      "鸡蛋（煮/蒸）": "Egg (Boiled/Steamed)",
      "鸡蛋三明治": "Egg Sandwich"
    },
    desserts: {
      "水果": "Fruit",
      "原味酸奶": "Plain Yogurt",
      "坚果一小把": "A Handful of Nuts",
      "红豆 / 绿豆": "Red Bean / Mung Bean",
      "玉米 / 红薯": "Corn / Sweet Potato",
      "不吃甜点": "No Dessert"
    },

    /* 健身动作 */
    fitness: {
      "站姿提膝收腹": "Standing Knee Lift",
      "原地摆臂快走": "Arm Swing Walk",
      "站姿侧抬腿": "Side Leg Raise",
      "徒手深蹲": "Bodyweight Squat",
      "站姿拳击（技术+呼吸）": "Standing Boxing (Technique + Breathing)",
      "站姿转体": "Standing Twist",
      "波比简化版（不跳）": "Modified Burpee (No Jump)",
      "原地高抬腿（慢速）": "High Knees (Slow)"
    }
  }
};

/* ========== 当前语言 ========== */
let currentLang = localStorage.getItem("lang") || "zh-CN";

/* ========== 应用语言到页面 ========== */
function applyLang(){
  const t = LANG[currentLang];

  const map = {
    t_title_breakfast: t.title_breakfast,
    t_subtitle_breakfast: t.subtitle_breakfast,
    t_title_fitness: t.title_fitness,
    t_subtitle_fitness: t.subtitle_fitness,
    t_name_label: t.name_label,
    t_date_label: t.date_label,
    t_btn_generate_breakfast: t.btn_generate_breakfast,
    t_btn_generate_fitness: t.btn_generate_fitness,
    t_btn_history: t.btn_history,
    t_btn_clear: t.btn_clear,
    t_footer: t.footer
  };

  for(const id in map){
    const el = document.getElementById(id);
    if(el) el.innerText = map[id];
  }

  const nameInput = document.getElementById("name");
  if(nameInput) nameInput.placeholder = t.name_placeholder;
}

/* ========== 语言按钮事件 ========== */
document.addEventListener("DOMContentLoaded", () => {
  applyLang();

  const langBtn = document.getElementById("langBtn");
  if(langBtn){
    langBtn.onclick = () => {
      const menu = document.getElementById("langMenu");
      if(menu){
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      }
    };
  }

  document.querySelectorAll(".lang-item").forEach(item => {
    item.onclick = () => {
      currentLang = item.dataset.lang;
      localStorage.setItem("lang", currentLang);
      applyLang();
      const menu = document.getElementById("langMenu");
      if(menu) menu.style.display = "none";
    };
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#langBtn") && !e.target.closest("#langMenu")) {
      const menu = document.getElementById("langMenu");
      if(menu) menu.style.display = "none";
    }
  });
});

/* ========== 工具函数：翻译食物/动作 ========== */
function translateFood(name){
  const t = LANG[currentLang];
  return (
    t.drinks?.[name] ||
    t.staples?.[name] ||
    t.desserts?.[name] ||
    name
  );
}

function translateExercise(name){
  const t = LANG[currentLang];
  return t.fitness?.[name] || name;
}
