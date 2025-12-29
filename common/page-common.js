// =============================
// 主题切换（亮色 / 暗色）
// =============================
function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// =============================
// 导航栏 HTML
// =============================
function buildNav() {
  const nav = document.createElement("div");
  nav.className = "nav";

  nav.innerHTML = `
    <div class="nav-left">
      <span class="nav-item" data-page="index.html">${t("nav_home")}</span>
      <span class="nav-item" data-page="breakfast/index.html">${t("nav_breakfast")}</span>
      <span class="nav-item" data-page="play/index.html">${t("nav_play")}</span>
      <span class="nav-item" data-page="fitness/index.html">${t("nav_fitness")}</span>
    </div>

    <div class="nav-right">
      <span id="btnLang" class="icon">🌐</span>
      <span id="btnTheme" class="icon">🌙</span>
    </div>
  `;

  return nav;
}

// =============================
// 导航栏点击事件
// =============================
function bindNavEvents(nav) {
  nav.querySelectorAll(".nav-item").forEach(item => {
    item.onclick = () => {
      const page = item.getAttribute("data-page");
      location.href = "/" + page;
    };
  });

  // 语言切换按钮
  document.getElementById("btnLang").onclick = () => {
    const next = currentLang === "zh-CN" ? "zh-HK" :
                 currentLang === "zh-HK" ? "en" : "zh-CN";
    setLang(next);
  };

  // 主题切换按钮
  document.getElementById("btnTheme").onclick = toggleTheme;
}

// =============================
// 高亮当前页面
// =============================
function highlightCurrentPage(nav) {
  const path = location.pathname;

  nav.querySelectorAll(".nav-item").forEach(item => {
    const page = "/" + item.getAttribute("data-page");
    if (path.includes(page)) {
      item.classList.add("active");
    }
  });
}

// =============================
// 初始化页面公共部分
// =============================
function initPageCommon() {
  initTheme();

  const page = document.querySelector(".page");
  if (!page) return;

  // 插入导航栏（不会覆盖内容）
  const nav = buildNav();
  page.prepend(nav);

  bindNavEvents(nav);
  highlightCurrentPage(nav);
}
