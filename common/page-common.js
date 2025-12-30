// =============================
// 主题（使用 class="dark" 机制）
// =============================
function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// =============================
// 构建导航栏（只有导航项）
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

  const btnLang = document.getElementById("btnLang");
  if (btnLang) {
    btnLang.onclick = () => {
      const next = currentLang === "zh-CN" ? "zh-HK" :
                   currentLang === "zh-HK" ? "en" : "zh-CN";
      setLang(next);
    };
  }

  const btnTheme = document.getElementById("btnTheme");
  if (btnTheme) {
    btnTheme.onclick = toggleTheme;
  }
}

// =============================
// 高亮当前页面
// =============================
function highlightCurrentPage(nav) {
  const path = location.pathname;

  nav.querySelectorAll(".nav-item").forEach(item => {
    const page = "/" + item.getAttribute("data-page");
    if (page === "/index.html") return;

    const folder = page.replace("/index.html", "");
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
  if (path === "/" || path === "/index.html") return;

  const nav = buildNav();

  const topBar = page.querySelector(".top-bar");
  if (topBar) {
    topBar.insertAdjacentElement("afterend", nav);
  } else {
    page.prepend(nav);
  }

  bindNavEvents(nav);
  highlightCurrentPage(nav);
}
