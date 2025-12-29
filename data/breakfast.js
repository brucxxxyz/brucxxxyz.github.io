// /data/breakfast.js
// 早餐数据（含多语言名称 + 营养信息）

const BREAKFAST = {
  drinks: [
    { name: { "zh-CN": "豆浆", "zh-HK": "豆漿", "en": "Soy Milk" }, k: 80, p: 7, c: 8, f: 3 },
    { name: { "zh-CN": "温牛奶", "zh-HK": "暖牛奶", "en": "Warm Milk" }, k: 120, p: 8, c: 12, f: 5 },
    { name: { "zh-CN": "燕麦奶", "zh-HK": "燕麥奶", "en": "Oat Milk" }, k: 110, p: 3, c: 16, f: 4 },
    { name: { "zh-CN": "黑咖啡", "zh-HK": "黑咖啡", "en": "Black Coffee" }, k: 10, p: 1, c: 1, f: 0 },
    { name: { "zh-CN": "绿茶", "zh-HK": "綠茶", "en": "Green Tea" }, k: 0, p: 0, c: 0, f: 0 },
    { name: { "zh-CN": "温水", "zh-HK": "暖水", "en": "Warm Water" }, k: 0, p: 0, c: 0, f: 0 }
  ],

  staples: [
    { name: { "zh-CN": "全麦吐司", "zh-HK": "全麥多士", "en": "Whole Wheat Toast" }, k: 160, p: 6, c: 28, f: 2 },
    { name: { "zh-CN": "小馒头", "zh-HK": "小饅頭", "en": "Steamed Bun" }, k: 180, p: 5, c: 35, f: 1 },
    { name: { "zh-CN": "即食燕麦", "zh-HK": "即食燕麥", "en": "Instant Oatmeal" }, k: 150, p: 5, c: 27, f: 3 },
    { name: { "zh-CN": "白粥 / 小米粥", "zh-HK": "白粥 / 小米粥", "en": "Rice / Millet Porridge" }, k: 120, p: 3, c: 26, f: 0 },
    { name: { "zh-CN": "鸡蛋（煮/蒸）", "zh-HK": "雞蛋（煮/蒸）", "en": "Egg (Boiled/Steamed)" }, k: 90, p: 7, c: 1, f: 6 },
    { name: { "zh-CN": "鸡蛋三明治", "zh-HK": "雞蛋三文治", "en": "Egg Sandwich" }, k: 250, p: 12, c: 30, f: 8 }
  ],

  desserts: [
    { name: { "zh-CN": "水果", "zh-HK": "生果", "en": "Fruit" }, k: 80, p: 1, c: 20, f: 0 },
    { name: { "zh-CN": "原味酸奶", "zh-HK": "原味乳酪", "en": "Plain Yogurt" }, k: 120, p: 6, c: 12, f: 4 },
    { name: { "zh-CN": "坚果一小把", "zh-HK": "堅果一小撮", "en": "A Handful of Nuts" }, k: 100, p: 3, c: 4, f: 8 },
    { name: { "zh-CN": "红豆 / 绿豆", "zh-HK": "紅豆 / 綠豆", "en": "Red Bean / Mung Bean" }, k: 110, p: 4, c: 22, f: 1 },
    { name: { "zh-CN": "玉米 / 红薯", "zh-HK": "粟米 / 番薯", "en": "Corn / Sweet Potato" }, k: 130, p: 2, c: 30, f: 0 },
    { name: { "zh-CN": "不吃甜点", "zh-HK": "唔食甜品", "en": "No Dessert" }, k: 0, p: 0, c: 0, f: 0 }
  ]
};
