// =============================
// 主题
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
// 构建导航栏
// =============================
function buildNav() {
  const nav = document.createElement("div");
  nav.className = "nav";

  nav.innerHTML = `
    <div class="nav-line">
      <span class="nav-item" data-page="index.html">🏠 ${t("nav_home")}</span>
      <span class="dot">·</span>
      <span class="nav-item" data-page="breakfast/index.html">🍳 ${t("nav_breakfast")}</span>
      <span class="dot">·</span>
      <span class="nav-item" data-page="play/index.html">🗺️ ${t("nav_play")}</span>
      <span class="dot">·</span>
      <span class="nav-item" data-page="fitness/index.html">💪 ${t("nav_fitness")}</span>
    </div>

    <div class="nav-right">
      <span id="btnLang" class="icon">🌐</span>
      <span id="btnTheme" class="icon">🌙</span>
    </div>
  `;

  return nav;
}

// =============================
// 绑定导航事件
// =============================
function bindNavEvents(nav) {
  nav.querySelectorAll(".nav-item").forEach(item => {
    item.onclick = () => {
      const page = item.getAttribute("data-page");
      location.href = "/" + page;
    };
  });

  document.getElementById("btnLang").onclick = () => {
    const next = currentLang === "zh-CN" ? "zh-HK" :
                 currentLang === "zh-HK" ? "en" : "zh-CN";
    setLang(next);
  };

  document.getElementById("btnTheme").onclick = toggleTheme;
}

// =============================
// 高亮当前页面（最终修复版）
// =============================
function highlightCurrentPage(nav) {
  const path = location.pathname;

  nav.querySelectorAll(".nav-item").forEach(item => {
    const page = "/" + item.getAttribute("data-page");

    // 首页永远不高亮
    if (page === "/index.html") {
      return;
    }

    // 其他页面匹配目录前缀
    const folder = page.replace("/index.html", ""); // "/breakfast/"
    if (path.startsWith(folder)) {
      item.classList.add("active");
    }
  });
}

// =============================
// 初始化
// =============================
function initPageCommon() {
  initTheme();

  const page = document.querySelector(".page");
  if (!page) return;

  const path = location.pathname;

  // 首页不显示导航栏
  if (path === "/" || path === "/index.html") {
    return;
  }

  const nav = buildNav();

  // 找到语言图标所在区域
  const topRight = page.querySelector(".top-right");

  if (topRight) {
    topRight.after(nav);   // 导航栏放在语言图标下方
  } else {
    page.prepend(nav);     // 兜底方案
  }

  bindNavEvents(nav);
  highlightCurrentPage(nav);
}