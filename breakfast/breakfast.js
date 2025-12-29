// =============================
// 工具函数
// =============================
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function foodName(item) {
  return item.name[currentLang] || item.name["zh-CN"];
}

// =============================
// 生成一份早餐组合
// =============================
function makeMeal() {
  const d = rand(BREAKFAST.drinks);
  const s = rand(BREAKFAST.staples);
  const de = rand(BREAKFAST.desserts);

  return {
    d, s, de,
    total: {
      kcal: d.k + s.k + de.k,
      p: d.p + s.p + de.p,
      c: d.c + s.c + de.c,
      f: d.f + s.f + de.f
    }
  };
}

// =============================
// 生成早餐推荐
// =============================
function generate() {
  const name = nameInput.value.trim();
  const date = dateInput.value;

  if (!name) {
    alert(t("name_placeholder"));
    return;
  }

  options.innerHTML = "⏳ ...";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  setTimeout(() => {
    options.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const m = makeMeal();

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${t("option")} ${i + 1}</h3>
        <div>🥤 ${foodName(m.d)}</div>
        <div>🍞 ${foodName(m.s)}</div>
        <div>🍮 ${foodName(m.de)}</div>

        <div class="nutrition">
          🔥 ${m.total.kcal} kcal ·
          🥚 ${m.total.p}g ·
          🍞 ${m.total.c}g ·
          🧈 ${m.total.f}g
        </div>

        <button onclick='choose(${JSON.stringify(m)}, "${name}", "${date}")'>
          ${t("choose")}
        </button>
      `;

      options.appendChild(card);
    }
  }, 800);
}

// =============================
// 选择某个早餐
// =============================
function choose(meal, name, date) {
  const history = JSON.parse(localStorage.getItem("breakfastHistory") || "[]");
  history.push({ name, date, meal });
  localStorage.setItem("breakfastHistory", JSON.stringify(history));

  options.innerHTML = "";
  final.innerHTML = `
    <div class="card">
      <h2>${t("today_breakfast")}</h2>
      <div>🥤 ${foodName(meal.d)}</div>
      <div>🍞 ${foodName(meal.s)}</div>
      <div>🍮 ${foodName(meal.de)}</div>

      <div class="nutrition">
        🔥 ${meal.total.kcal} kcal ·
        🥚 ${meal.total.p}g ·
        🍞 ${meal.total.c}g ·
        🧈 ${meal.total.f}g
      </div>
    </div>
  `;
}

// =============================
// 查看历史
// =============================
function showHistory() {
  const history = JSON.parse(localStorage.getItem("breakfastHistory") || "[]");

  options.innerHTML = "";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  if (!history.length) {
    historyBox.innerHTML = `<div class="card">${t("history_empty")}</div>`;
    return;
  }

  history.forEach(h => {
    historyBox.innerHTML += `
      <div class="card">
        <strong>${h.date}</strong> · ${h.name}
        <div>🥤 ${foodName(h.meal.d)}</div>
        <div>🍞 ${foodName(h.meal.s)}</div>
        <div>🍮 ${foodName(h.meal.de)}</div>
        <div class="nutrition">🔥 ${h.meal.total.kcal} kcal</div>
      </div>
    `;
  });
}

// =============================
// 清除历史
// =============================
function clearHistory() {
  if (confirm(t("btn_clear"))) {
    localStorage.removeItem("breakfastHistory");
    historyBox.innerHTML = "";
  }
}

// =============================
// 绑定翻译
// =============================
function bindBreakfastTexts() {
  t_set("t_title_breakfast", "title_breakfast");
  t_set("t_subtitle_breakfast", "subtitle_breakfast");

  t_set("t_name_label", "name_label");
  t_set_placeholder("nameInput", "name_placeholder");

  t_set("t_date_label", "date_label");

  t_set("t_footer", "footer");
}

// =============================
// 页面初始化
// =============================
function initBreakfastPage() {
  // 默认日期 = 今天
  dateInput.value = new Date().toISOString().slice(0, 10);

  // 三条横条绑定功能
  barBlue.onclick = generate;
  barGray.onclick = showHistory;
  barRed.onclick = clearHistory;
}
