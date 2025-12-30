/* ========= 工具函数 ========= */
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

/* ========= 多语言名称 ========= */
function exerciseName(item){
  return item.name[currentLang] || item.name["zh-CN"];
}

function categoryName(key){
  return FITNESS[key].label[currentLang] || FITNESS[key].label["zh-CN"];
}

/* ========= 生成一组训练计划 ========= */
function makePlan(){
  const keys = Object.keys(FITNESS);

  const group = [];
  let totalKcal = 0;
  let levels = [];

  for(let i=0; i<3; i++){
    const cat = rand(keys);
    const action = rand(FITNESS[cat].items);

    group.push({
      ...action,
      categoryKey: cat
    });

    totalKcal += action.kcal;
    levels.push(action.level);
  }

  return {
    group,
    totalKcal,
    diff: Math.max(...levels) - Math.min(...levels)
  };
}

/* ========= 生成推荐 ========= */
function generateFitness(){
  const name = nameInput.value.trim();
  if(!name){
    alert(t("name_placeholder"));
    return;
  }

  options.innerHTML = "⏳ ...";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  setTimeout(() => {
    options.innerHTML = "";

    for(let i=0;i<3;i++){
      const plan = makePlan();

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${t("option")} ${i+1}</h3>

        ${plan.group.map(p => `
          <div class="item">
            🏋️ ${exerciseName(p)}
            <span class="badge">${p.level}</span>
            <span class="badge">${p.kcal} kcal</span>
          </div>
        `).join("")}

        <div class="item">🔥 ${plan.totalKcal} kcal</div>
        <div class="item">📊 ${t("intensity_diff")}: ${plan.diff}</div>

        <button onclick='chooseFitness(${JSON.stringify(plan)}, "${name}")'>
          ${t("choose")}
        </button>
      `;

      options.appendChild(div);
    }
  }, 500);
}

/* ========= 选择方案 ========= */
function chooseFitness(plan, name){
  const history = JSON.parse(localStorage.getItem("fitnessHistory") || "[]");
  history.push({
    date: new Date().toLocaleDateString(),
    name,
    plan
  });
  localStorage.setItem("fitnessHistory", JSON.stringify(history));

  final.innerHTML = `
    <div class="card">
      <h2>${t("today_fitness")}</h2>

      ${plan.group.map(p => `
        <div class="item">
          🏋️ ${exerciseName(p)}
          <span class="badge">${p.level}</span>
          <span class="badge">${p.kcal} kcal</span>
        </div>
      `).join("")}

      <div class="item">🔥 ${plan.totalKcal} kcal</div>
      <div class="item">📊 ${t("intensity_diff")}: ${plan.diff}</div>
    </div>
  `;
}

/* ========= 查看历史 ========= */
function showFitnessHistory(){
  const history = JSON.parse(localStorage.getItem("fitnessHistory") || "[]");

  options.innerHTML = "";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  if(!history.length){
    historyBox.innerHTML = `<div class="card">${t("history_empty")}</div>`;
    return;
  }

  history.forEach(h => {
    historyBox.innerHTML += `
      <div class="card">
        <strong>${h.date} · ${h.name}</strong>

        ${h.plan.group.map(p => `
          <div class="item">
            🏋️ ${exerciseName(p)}
            <span class="badge">${p.level}</span>
            <span class="badge">${p.kcal} kcal</span>
          </div>
        `).join("")}

        <div class="item">🔥 ${h.plan.totalKcal} kcal</div>
        <div class="item">📊 ${t("intensity_diff")}: ${h.plan.diff}</div>
      </div>
    `;
  });
}

/* ========= 清除历史 ========= */
function clearFitnessHistory(){
  if(confirm(t("btn_clear"))){
    localStorage.removeItem("fitnessHistory");
    historyBox.innerHTML = "";
  }
}

/* ========= 文案绑定 ========= */
function bindFitnessTexts(){
  t_set("t_title_fitness", "title_fitness");
  t_set("t_subtitle_fitness", "subtitle_fitness");

  t_set("t_name_label", "name_label");
  t_set_placeholder("nameInput", "name_placeholder");

  t_set("t_date_label", "date_label");

  barBlue.textContent = t("btn_generate_fitness");
  barGray.textContent = t("btn_history");
  barRed.textContent  = t("btn_clear");
}

/* ========= 初始化 ========= */
function initFitnessPage(){
  dateInput.value = new Date().toISOString().slice(0,10);

  barBlue.onclick = generateFitness;
  barGray.onclick = showFitnessHistory;
  barRed.onclick = clearFitnessHistory;
}
