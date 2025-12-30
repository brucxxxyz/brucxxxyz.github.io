/* ========= 数据 ========= */
const FITNESS = {
  warmup: [
    {name:"站姿提膝收腹", level:1, kcal:60},
    {name:"原地摆臂快走", level:1, kcal:70},
    {name:"肩部绕环", level:1, kcal:40},
    {name:"颈部活动", level:1, kcal:20},
    {name:"开合步热身", level:1, kcal:55},
    {name:"手臂画圈", level:1, kcal:45}
  ],
  legs: [
    {name:"徒手深蹲", level:2, kcal:90},
    {name:"站姿侧抬腿", level:1, kcal:50},
    {name:"弓步蹲", level:2, kcal:85},
    {name:"靠墙静蹲", level:2, kcal:80},
    {name:"后踢腿", level:1, kcal:60},
    {name:"提踵训练", level:1, kcal:45}
  ],
  core: [
    {name:"站姿转体", level:2, kcal:80},
    {name:"站姿收腹", level:1, kcal:50},
    {name:"侧腹收缩", level:2, kcal:70},
    {name:"站姿卷腹", level:2, kcal:75},
    {name:"核心稳定站姿", level:1, kcal:40},
    {name:"站姿侧弯", level:1, kcal:45}
  ],
  upper: [
    {name:"站姿拳击（技术+呼吸）", level:2, kcal:100},
    {name:"俯身划船（徒手）", level:2, kcal:85},
    {name:"墙壁俯卧撑", level:2, kcal:90},
    {name:"手臂后伸", level:1, kcal:50},
    {name:"肩推（徒手）", level:2, kcal:80},
    {name:"手臂交叉拉伸", level:1, kcal:30}
  ],
  cardio: [
    {name:"原地高抬腿（慢速）", level:3, kcal:130},
    {name:"原地踏步", level:1, kcal:60},
    {name:"开合跳（低冲击）", level:2, kcal:110},
    {name:"左右小跳", level:2, kcal:95},
    {name:"轻量跑步原地", level:2, kcal:100},
    {name:"快速摆臂走", level:2, kcal:90}
  ],
  boxing: [
    {name:"波比简化版（不跳）", level:3, kcal:120},
    {name:"轻量拳击组合（直拳+摆拳）", level:2, kcal:110},
    {name:"直拳练习", level:2, kcal:90},
    {name:"摆拳练习", level:2, kcal:95},
    {name:"闪躲步伐", level:2, kcal:85},
    {name:"拳击步伐移动", level:2, kcal:100}
  ]
};

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

/* ========= 生成一组训练 ========= */
function makePlan(){
  const keys = Object.keys(FITNESS);
  const group = [];
  let totalKcal = 0;
  let levels = [];

  for(let i=0; i<3; i++){
    const cat = rand(keys);
    const action = rand(FITNESS[cat]);
    group.push(action);
    totalKcal += action.kcal;
    levels.push(action.level);
  }

  return {
    group,
    totalKcal,
    diff: Math.max(...levels) - Math.min(...levels)
  };
}

/* ========= 生成按钮 ========= */
function generateFitness(){
  const name = nameInput.value.trim();
  if(!name){
    alert(t("name_placeholder"));
    return;
  }

  options.innerHTML = "⏳ ...";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  setTimeout(()=>{
    options.innerHTML = "";

    for(let i=0;i<3;i++){
      const p = makePlan();

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${t("option")} ${i+1}</h3>
        ${p.group.map(x=>`
          <div class="item">
            🏋️ ${x.name}
            <span class="badge">${x.level}</span>
            <span class="badge">${x.kcal} kcal</span>
          </div>
        `).join("")}
        <div class="item">🔥 ${p.totalKcal} kcal</div>
        <div class="item">📊 强度差：${p.diff}</div>
        <button onclick='chooseFitness(${JSON.stringify(p)}, "${name}")'>
          ${t("choose")}
        </button>
      `;

      options.appendChild(div);
    }
  }, 600);
}

/* ========= 选择 ========= */
function chooseFitness(plan, name){
  const h = JSON.parse(localStorage.getItem("fitnessHistory") || "[]");
  h.push({date: new Date().toLocaleDateString(), name, plan});
  localStorage.setItem("fitnessHistory", JSON.stringify(h));

  final.innerHTML = `
    <div class="card">
      <h2>${t("today_fitness")}</h2>
      ${plan.group.map(x=>`
        <div class="item">
          🏋️ ${x.name}
          <span class="badge">${x.level}</span>
          <span class="badge">${x.kcal} kcal</span>
        </div>
      `).join("")}
      <div class="item">🔥 ${plan.totalKcal} kcal</div>
      <div class="item">📊 强度差：${plan.diff}</div>
    </div>
  `;
}

/* ========= 历史 ========= */
function showFitnessHistory(){
  const h = JSON.parse(localStorage.getItem("fitnessHistory") || "[]");

  options.innerHTML = "";
  final.innerHTML = "";
  historyBox.innerHTML = "";

  if(!h.length){
    historyBox.innerHTML = `<div class="card">${t("history_empty")}</div>`;
    return;
  }

  h.forEach(x=>{
    historyBox.innerHTML += `
      <div class="card">
        <strong>${x.date} · ${x.name}</strong>
        ${x.plan.group.map(p=>`
          <div class="item">
            🏋️ ${p.name}
            <span class="badge">${p.level}</span>
            <span class="badge">${p.kcal} kcal</span>
          </div>
        `).join("")}
        <div class="item">🔥 ${x.plan.totalKcal} kcal</div>
        <div class="item">📊 强度差：${x.plan.diff}</div>
      </div>
    `;
  });
}

/* ========= 清除 ========= */
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
