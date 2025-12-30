/* ============================================================
   公共配置
   ============================================================ */

const THEME_KEY = "theme";
const LANG_KEY  = "lang";

/* ============================================================
   页面初始化入口（只调用这一个）
   ============================================================ */

function initPageCommon() {
  applySavedTheme();     // ★ 最先应用主题（防闪白）
  injectLayout();        // 注入导航 / 顶部 / footer（幂等）
  initLangMenu();        // 语言菜单
  initThemeToggle();     // 暗夜切换
  applyNavTranslation(); // 文案翻译
}

/* ============================================================
   布局注入（幂等：不会重复插）
   ============================================================ */

function injectLayout() {
  if (!document.getElementById("common-top-bar")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <div class="top-bar" id="common-top-bar">
        <div class="icon-btn" id="langBtn">🌐</div>

        <div id="langMenu">
          <div class="lang-title">🌐 Language</div>
          <div class="lang-item" data-lang="zh-CN">🇨🇳 简体中文</div>
          <div class="lang-item" data-lang="zh-HK">🇭🇰 粤语繁體</div>
          <div class="lang-item" data-lang="en">🇺🇸 English</div>
        </div>

        <div class="icon-btn" id="themeBtn">🌙</div>
      </div>

      <div class="nav" id="common-nav">
        <a id="nav_home" href="/"></a> ·
        <a id="nav_breakfast" href="/breakfast/"></a> ·
        <a id="nav_play" href="/play/"></a> ·
        <a id="nav_fitness" href="/fitness/"></a>
      </div>
    `);
  }

  if (!document.getElementById("common-footer")) {
    document.body.insertAdjacentHTML("beforeend", `
      <footer class="footer" id="common-footer"></footer>
    `);
  }
}

/* ============================================================
   主题（唯一状态源：documentElement）
   ============================================================ */

function applySavedTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.classList.toggle("dark", saved === "dark");
}

function initThemeToggle() {
  const btn = document.getElementById("themeBtn");
  if (!btn) return;

  updateThemeIcon(btn);

  btn.onclick = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    updateThemeIcon(btn);
  };
}

function updateThemeIcon(btn) {
  btn.textContent =
    document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
}

/* ============================================================
   语言
   ============================================================ */

function initLangMenu() {
  const langBtn  = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  if (!langBtn || !langMenu) return;

  langBtn.onclick = () => {
    langMenu.style.display =
      langMenu.style.display === "block" ? "none" : "block";
  };

  document.querySelectorAll(".lang-item").forEach(item => {
    item.onclick = () => {
      localStorage.setItem(LANG_KEY, item.dataset.lang);
      location.reload();
    };
  });

  // 点击页面其他地方关闭语言菜单
  document.addEventListener("click", e => {
    if (!langMenu.contains(e.target) && e.target !== langBtn) {
      langMenu.style.display = "none";
    }
  });
}

/* ============================================================
   导航 & Footer 文案
   ============================================================ */

function applyNavTranslation() {
  if (!window.LANG) return;

  const currentLang = localStorage.getItem(LANG_KEY) || "zh-CN";
  const t = LANG[currentLang];
  if (!t) return;

  const map = {
    nav_home: "nav_home",
    nav_breakfast: "nav_breakfast",
    nav_play: "nav_play",
    nav_fitness: "nav_fitness"
  };

  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  });

  const footer = document.getElementById("common-footer");
  if (footer) footer.textContent = t.footer;
}