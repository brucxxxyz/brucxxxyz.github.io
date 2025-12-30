/* ============================================================
   公共初始化
   ============================================================ */
function initPageCommon() {
  injectLayout();        // 注入统一布局
  fixNavPaths();         // 修复导航路径
  applySavedTheme();     // 页面加载时应用主题（兼容主页）
  initLangMenu();        // 语言菜单逻辑
  initThemeToggle();     // 深色模式切换（同步主页）
  applyNavTranslation(); // 导航栏翻译
}

/* ============================================================
   注入公共布局
   ============================================================ */
function injectLayout() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="top-bar">
      <div class="icon-btn" id="langBtn">🌐</div>

      <div id="langMenu">
        <div class="lang-title">🌐 Language</div>
        <div class="lang-item" data-lang="zh-CN">🇨🇳 简体中文</div>
        <div class="lang-item" data-lang="zh-HK">🇭🇰 粤语繁體</div>
        <div class="lang-item" data-lang="en">🇺🇸 English</div>
      </div>

      <div class="icon-btn" id="themeBtn">🌙</div>
    </div>

    <div class="nav">
      <a id="nav_home"></a> ·
      <a id="nav_breakfast"></a> ·
      <a id="nav_play"></a> ·
      <a id="nav_fitness"></a>
    </div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer" id="t_footer"></footer>
  `);
}

/* ============================================================
   修复导航路径
   ============================================================ */
function fixNavPaths() {
  const base = window.location.pathname.includes("/breakfast/")
    || window.location.pathname.includes("/play/")
    || window.location.pathname.includes("/fitness/")
    ? ".."
    : ".";

  document.getElementById("nav_home").href      = `${base}/index.html`;
  document.getElementById("nav_breakfast").href = `${base}/breakfast/index.html`;
  document.getElementById("nav_play").href      = `${base}/play/index.html`;
  document.getElementById("nav_fitness").href   = `${base}/fitness/index.html`;
}

/* ============================================================
   导航栏翻译
   ============================================================ */
function applyNavTranslation() {
  const t = LANG[currentLang];

  document.getElementById("nav_home").textContent = t.nav_home;
  document.getElementById("nav_breakfast").textContent = t.nav_breakfast;
  document.getElementById("nav_play").textContent = t.nav_play;
  document.getElementById("nav_fitness").textContent = t.nav_fitness;

  document.getElementById("t_footer").textContent = t.footer;
}

/* ============================================================
   语言菜单逻辑
   ============================================================ */
function initLangMenu() {
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");

  langBtn.onclick = () => {
    langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
  };

  document.querySelectorAll(".lang-item").forEach(item => {
    item.onclick = () => {
      const lang = item.dataset.lang;
      localStorage.setItem("lang", lang);
      location.reload();
    };
  });
}

/* ============================================================
   ★ 页面加载时应用主题（兼容主页 + 子页）
   ============================================================ */
function applySavedTheme() {
  // 主页使用 darkMode（true/false）
  const savedDarkMode = localStorage.getItem("darkMode");

  // 子页使用 theme（light/dark）
  const savedTheme = localStorage.getItem("theme");

  let isDark = false;

  if (savedDarkMode !== null) {
    isDark = savedDarkMode === "true";
  } else {
    isDark = savedTheme === "dark";
  }

  if (isDark) {
    document.documentElement.classList.add("dark"); // 子页
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/* ============================================================
   ★ 深色模式切换（同步主页 + 子页）
   ============================================================ */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeBtn");

  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const savedTheme = localStorage.getItem("theme") === "dark";
  const isDark = savedDarkMode || savedTheme;

  themeBtn.textContent = isDark ? "☀️" : "🌙";

  themeBtn.onclick = () => {
    const nowDark = document.documentElement.classList.toggle("dark");

    // 同步写入两套体系（主页 + 子页）
    localStorage.setItem("darkMode", nowDark ? "true" : "false");
    localStorage.setItem("theme", nowDark ? "dark" : "light");

    themeBtn.textContent = nowDark ? "☀️" : "🌙";
  };
}
