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

function highlightCurrentPage(nav) {
  const path = location.pathname;

if (path === "/" || path === "/index.html") {
  document.getElementById("nav_home").classList.add("active");
} 
else if (path.startsWith("/breakfast")) {
  document.getElementById("nav_breakfast").classList.add("active");
} 
else if (path.startsWith("/play")) {
  document.getElementById("nav_play").classList.add("active");
} 
else if (path.startsWith("/fitness")) {
  document.getElementById("nav_fitness").classList.add("active");
}


  nav.querySelectorAll(".nav-item").forEach(item => {
    const page = "/" + item.getAttribute("data-page");
    if (path.includes(page)) {
      item.classList.add("active");
    }
  });
}

function initPageCommon() {
  initTheme();

  const page = document.querySelector(".page");
  if (!page) return;

  const nav = buildNav();
  page.prepend(nav);

  bindNavEvents(nav);
  highlightCurrentPage(nav);
}
