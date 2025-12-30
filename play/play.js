/* ========= 工具函数 ========= */
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function rad(d){ return d * Math.PI / 180; }

function haversine(a,b,c,d){
  const R = 6371;
  const x = rad(c - a), y = rad(d - b);
  const z = Math.sin(x/2)**2 +
            Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(y/2)**2;
  return 2 * R * Math.atan2(Math.sqrt(z), Math.sqrt(1 - z));
}

function totalDistance(points){
  let d = 0;
  for(let i=0;i<points.length;i++){
    for(let j=i+1;j<points.length;j++){
      d += haversine(points[i].lat, points[i].lon, points[j].lat, points[j].lon);
    }
  }
  return d.toFixed(2);
}

/* ========= 多语言名称 ========= */
function placeName(item){
  return item.name[currentLang] || item.name["zh-CN"];
}

function categoryName(key){
  return PLAY_CATEGORIES[key].label[currentLang] || PLAY_CATEGORIES[key].label["zh-CN"];
}

/* ========= 生成一组游玩路线 ========= */
function makeCombo(){
  const keys = Object.keys(PLAY_CATEGORIES);

  // 随机抽 3 个分类
  const chosen = keys.sort(() => 0.5 - Math.random()).slice(0, 3);

  const points = chosen.map(k => {
    const place = rand(PLAY_CATEGORIES[k].items);
    return {
      ...place,
      categoryKey: k
    };
  });

  return {
    points,
    distance: totalDistance(points)
  };
}

/* ========= 生成推荐 ========= */
function generatePlay(){
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
      const combo = makeCombo();

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${t("option")} ${i+1}</h3>

        ${combo.points.map(p => `
          <div class="item">
            📍 ${categoryName(p.categoryKey)}：${placeName(p)}
          </div>
        `).join("")}

        <div class="item">📏 ${combo.distance} km</div>

        <button onclick='choosePlay(${JSON.stringify(combo)}, "${name}")'>
          ${t("choose")}
        </button>
      `;

      options.appendChild(div);
    }
  }, 600);
}

/* ========= 选择方案 ========= */
function choosePlay(combo, name){
  const history = JSON.parse(localStorage.getItem("playHistory") || "[]");
  history.push({
    date: new Date().toLocaleDateString(),
    name,
    combo
  });
  localStorage.setItem("playHistory", JSON.stringify(history));

  final.innerHTML = `
    <div class="card">
      <h2>${t("today_play")}</h2>

      ${combo.points.map(p => `
        <div class="item">
          📍 ${categoryName(p.categoryKey)}：${placeName(p)}
        </div>
      `).join("")}

      <div class="item">📏 ${combo.distance} km</div>
    </div>
  `;
}

/* ========= 查看历史 ========= */
function showPlayHistory(){
  const history = JSON.parse(localStorage.getItem("playHistory") || "[]");

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

        ${h.combo.points.map(p => `
          <div class="item">
            📍 ${categoryName(p.categoryKey)}：${placeName(p)}
          </div>
        `).join("")}

        <div class="item">📏 ${h.combo.distance} km</div>
      </div>
    `;
  });
}

/* ========= 清除历史 ========= */
function clearPlayHistory(){
  if(confirm(t("btn_clear"))){
    localStorage.removeItem("playHistory");
    historyBox.innerHTML = "";
  }
}

/* ========= 文案绑定 ========= */
function bindPlayTexts(){
  t_set("t_title_play", "title_play");
  t_set("t_subtitle_play", "subtitle_play");

  t_set("t_name_label", "name_label");
  t_set_placeholder("nameInput", "name_placeholder");

  t_set("t_date_label", "date_label");

  barBlue.textContent = t("btn_generate_play");
  barGray.textContent = t("btn_history");
  barRed.textContent  = t("btn_clear");
}

/* ========= 初始化 ========= */
function initPlayPage(){
  dateInput.value = new Date().toISOString().slice(0,10);

  barBlue.onclick = generatePlay;
  barGray.onclick = showPlayHistory;
  barRed.onclick = clearPlayHistory;
}
