/* ============================================================
   公共初始化
   ============================================================ */
function initPageCommon() {
  injectLayout();        // 注入统一布局
  fixNavPaths();         // ★ 修复导航路径（关键）
  applySavedTheme();     // 页面加载时应用主题
  initLangMenu();        // 语言菜单逻辑
  initThemeToggle();     // 深色模式切换
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
   ★ 修复导航路径（关键）
   ============================================================ */
function fixNavPaths() {
  // 自动根据当前页面位置生成正确的相对路径
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
   ★ 页面加载时应用主题（关键）
   ============================================================ */
function applySavedTheme() {
  const saved = localStorage.getItem("theme") || "light";

  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/* ============================================================
   深色模式切换
   ============================================================ */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeBtn");
  const saved = localStorage.getItem("theme") || "light";

  themeBtn.textContent = saved === "dark" ? "☀️" : "🌙";

  themeBtn.onclick = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
  };
}
