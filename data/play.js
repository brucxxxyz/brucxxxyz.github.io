// /data/play.js
// 游玩地点数据（含三语分类名称 + 三语地点名称）

const PLAY_CATEGORIES = {
  coffee: {
    label: {
      "zh-CN": "咖啡店",
      "zh-HK": "咖啡店",
      "en": "Coffee Shop"
    },
    items: [
      { name: { "zh-CN": "Dear Deer Coffee", "zh-HK": "Dear Deer Coffee", "en": "Dear Deer Coffee" }, lat: -36.8890, lon: 174.9270 },
      { name: { "zh-CN": "Handpicked Coffee", "zh-HK": "Handpicked Coffee", "en": "Handpicked Coffee" }, lat: -36.8736, lon: 174.7764 },
      { name: { "zh-CN": "Mezze Bar Coffee", "zh-HK": "Mezze Bar Coffee", "en": "Mezze Bar Coffee" }, lat: -36.8702, lon: 174.7781 },
      { name: { "zh-CN": "Espresso Workshop", "zh-HK": "Espresso Workshop", "en": "Espresso Workshop" }, lat: -36.8680, lon: 174.7770 },
      { name: { "zh-CN": "Remedy Coffee", "zh-HK": "Remedy Coffee", "en": "Remedy Coffee" }, lat: -36.8477, lon: 174.7650 },
      { name: { "zh-CN": "Little Q Coffee", "zh-HK": "Little Q Coffee", "en": "Little Q Coffee" }, lat: -36.8725, lon: 174.7752 }
    ]
  },

  antique: {
    label: {
      "zh-CN": "古董店",
      "zh-HK": "古董店",
      "en": "Antique Shop"
    },
    items: [
      { name: { "zh-CN": "The Collectors", "zh-HK": "The Collectors", "en": "The Collectors" }, lat: -36.8790, lon: 174.8120 },
      { name: { "zh-CN": "Vitrine", "zh-HK": "Vitrine", "en": "Vitrine" }, lat: -36.8575, lon: 174.7778 },
      { name: { "zh-CN": "The Poi Room", "zh-HK": "The Poi Room", "en": "The Poi Room" }, lat: -36.8618, lon: 174.7754 },
      { name: { "zh-CN": "Artisan Antiques", "zh-HK": "Artisan Antiques", "en": "Artisan Antiques" }, lat: -36.8688, lon: 174.7722 },
      { name: { "zh-CN": "Old Charm Studio", "zh-HK": "Old Charm Studio", "en": "Old Charm Studio" }, lat: -36.8710, lon: 174.7810 },
      { name: { "zh-CN": "Heritage Room", "zh-HK": "Heritage Room", "en": "Heritage Room" }, lat: -36.8655, lon: 174.7790 }
    ]
  },

  beach: {
    label: {
      "zh-CN": "海滩",
      "zh-HK": "海灘",
      "en": "Beach"
    },
    items: [
      { name: { "zh-CN": "Mission Bay", "zh-HK": "Mission Bay", "en": "Mission Bay" }, lat: -36.8489, lon: 174.8306 },
      { name: { "zh-CN": "St Heliers Beach", "zh-HK": "St Heliers Beach", "en": "St Heliers Beach" }, lat: -36.8485, lon: 174.8560 },
      { name: { "zh-CN": "Kohimarama Beach", "zh-HK": "Kohimarama Beach", "en": "Kohimarama Beach" }, lat: -36.8482, lon: 174.8418 },
      { name: { "zh-CN": "Ladies Bay", "zh-HK": "Ladies Bay", "en": "Ladies Bay" }, lat: -36.8550, lon: 174.8285 },
      { name: { "zh-CN": "Okahu Bay", "zh-HK": "Okahu Bay", "en": "Okahu Bay" }, lat: -36.8438, lon: 174.7972 },
      { name: { "zh-CN": "Judges Bay", "zh-HK": "Judges Bay", "en": "Judges Bay" }, lat: -36.8471, lon: 174.8014 }
    ]
  },

  furniture: {
    label: {
      "zh-CN": "家具店",
      "zh-HK": "傢俬店",
      "en": "Furniture Store"
    },
    items: [
      { name: { "zh-CN": "Nood", "zh-HK": "Nood", "en": "Nood" }, lat: -36.8712, lon: 174.7760 },
      { name: { "zh-CN": "Mocka Sylvia Park", "zh-HK": "Mocka Sylvia Park", "en": "Mocka Sylvia Park" }, lat: -36.9175, lon: 174.8478 },
      { name: { "zh-CN": "Danske Mobler", "zh-HK": "Danske Mobler", "en": "Danske Mobler" }, lat: -36.8793, lon: 174.8126 },
      { name: { "zh-CN": "Target Furniture", "zh-HK": "Target Furniture", "en": "Target Furniture" }, lat: -36.9051, lon: 174.8532 },
      { name: { "zh-CN": "Freedom Furniture", "zh-HK": "Freedom Furniture", "en": "Freedom Furniture" }, lat: -36.8844, lon: 174.8460 },
      { name: { "zh-CN": "Urban Sales", "zh-HK": "Urban Sales", "en": "Urban Sales" }, lat: -36.8720, lon: 174.7769 }
    ]
  },

  dessert: {
    label: {
      "zh-CN": "中式甜品",
      "zh-HK": "中式甜品",
      "en": "Chinese Desserts"
    },
    items: [
      { name: { "zh-CN": "Aroma Dessert Studio", "zh-HK": "Aroma Dessert Studio", "en": "Aroma Dessert Studio" }, lat: -36.8899, lon: 174.7577 },
      { name: { "zh-CN": "EVERSWEET", "zh-HK": "EVERSWEET", "en": "EVERSWEET" }, lat: -36.8869, lon: 174.9271 },
      { name: { "zh-CN": "Spoonful 一口甜", "zh-HK": "Spoonful 一口甜", "en": "Spoonful Dessert" }, lat: -36.8980, lon: 174.9500 },
      { name: { "zh-CN": "Soul Sweet 甜匠", "zh-HK": "Soul Sweet 甜匠", "en": "Soul Sweet" }, lat: -36.8904, lon: 174.8679 },
      { name: { "zh-CN": "Little Sweet Corner", "zh-HK": "Little Sweet Corner", "en": "Little Sweet Corner" }, lat: -36.8820, lon: 174.8450 },
      { name: { "zh-CN": "Oriental Sugar House", "zh-HK": "Oriental Sugar House", "en": "Oriental Sugar House" }, lat: -36.8785, lon: 174.8300 }
    ]
  },

  milktea: {
    label: {
      "zh-CN": "中式奶茶/果茶",
      "zh-HK": "中式奶茶/果茶",
      "en": "Milk Tea / Fruit Tea"
    },
    items: [
      { name: { "zh-CN": "Tea Talk Sylvia Park", "zh-HK": "Tea Talk Sylvia Park", "en": "Tea Talk Sylvia Park" }, lat: -36.9104, lon: 174.8619 },
      { name: { "zh-CN": "Tea Talk Newmarket", "zh-HK": "Tea Talk Newmarket", "en": "Tea Talk Newmarket" }, lat: -36.8715, lon: 174.7773 },
      { name: { "zh-CN": "NOMI Botany", "zh-HK": "NOMI Botany", "en": "NOMI Botany" }, lat: -36.8859, lon: 174.9456 },
      { name: { "zh-CN": "ChaBliss 吃茶去", "zh-HK": "ChaBliss 吃茶去", "en": "ChaBliss Tea" }, lat: -36.8650, lon: 174.7769 },
      { name: { "zh-CN": "Teadee Bubble Tea", "zh-HK": "Teadee Bubble Tea", "en": "Teadee Bubble Tea" }, lat: -36.8732, lon: 174.7762 },
      { name: { "zh-CN": "Hokey Pokey Tea House", "zh-HK": "Hokey Pokey Tea House", "en": "Hokey Pokey Tea House" }, lat: -36.8929, lon: 174.7994 }
    ]
  }
};
