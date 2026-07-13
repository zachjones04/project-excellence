const app = document.getElementById("app");
const parents = {"main-photo":"home","poster-printer":"home","ipos":"home","main-products":"main-photo","main-supplies":"main-photo","main-maintenance":"main-photo","poster-supplies":"poster-printer","guide-package-order":"main-photo","guide-canvas":"main-products","guide-photo-books":"main-products","guide-calendars":"main-products","guide-magnets":"main-products","guide-specialty":"main-products","guide-photo-puzzle":"main-products","guide-wooden-hangbar":"main-products","guide-yard-sign":"main-products","guide-kodak-305":"main-maintenance","guide-kodak-7000":"main-maintenance","guide-kodak-8810":"main-maintenance","guide-cx3240":"main-maintenance","guide-kodak-kiosk":"main-maintenance","guide-poster-products":"poster-printer","guide-load-paper":"poster-printer","guide-replace-ink":"poster-printer","guide-print-poster":"poster-printer","guide-vinyl-banner":"poster-printer","guide-photo-checkout":"ipos","guide-waiting-bin":"ipos"};

const productSourcePhotos = {
  "guide-canvas": [
    "assets/main-photo/assembly/steps/canvas-step-1.jpg",
    "assets/main-photo/assembly/steps/canvas-step-2.jpg",
    "assets/main-photo/assembly/steps/canvas-step-3.jpg",
    "assets/main-photo/assembly/steps/canvas-step-4.jpg"
  ],
  "guide-photo-books": [
    "assets/main-photo/assembly/steps/photobook-step-1-materials.jpg",
    "assets/main-photo/assembly/steps/photobook-step-2-print-cover.jpg",
    "assets/main-photo/assembly/steps/photobook-step-3-lay-cover.jpg",
    "assets/main-photo/assembly/steps/photobook-step-4-stand-book.jpg",
    "assets/main-photo/assembly/steps/photobook-step-5-wrap-cover.jpg",
    "assets/main-photo/assembly/steps/photobook-step-6-attach-flaps.jpg",
    "assets/main-photo/assembly/steps/photobook-step-7-clamp-pages.jpg"
  ],
  "guide-calendars": [
    "assets/main-photo/assembly/steps/calendar-step-1-line-up.jpg",
    "assets/main-photo/assembly/steps/calendar-step-2-place-guide.jpg",
    "assets/main-photo/assembly/steps/calendar-step-3-peel-liner.jpg",
    "assets/main-photo/assembly/steps/calendar-step-4-align-cover.jpg",
    "assets/main-photo/assembly/steps/calendar-step-5-repeat-pages.jpg",
    "assets/main-photo/assembly/steps/calendar-step-6-remove-check.jpg"
  ],
  "guide-magnets": [
    "assets/main-photo/assembly/steps/magnet-step-1-remove-pieces.jpg",
    "assets/main-photo/assembly/steps/magnet-step-2-trim-photo.jpg",
    "assets/main-photo/assembly/steps/magnet-step-3-back-down.jpg",
    "assets/main-photo/assembly/steps/magnet-step-4-photo-face-up.jpg",
    "assets/main-photo/assembly/steps/magnet-step-5-front-click.jpg",
    "assets/main-photo/assembly/steps/magnet-step-6-sleeve.jpg"
  ],
  "guide-specialty": [
    "assets/main-photo/assembly/steps/wall-tile-step-1-check-box.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-2-frame-parts.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-3-separate-frame.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-4-photo-chipboard.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-5-load-frame.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-6-snap-corners.jpg",
    "assets/main-photo/assembly/steps/wall-tile-step-7-package.jpg"
  ],
  "guide-photo-puzzle": [
    "assets/main-photo/assembly/step-crops/raw/puzzle-step-1-feed.jpg",
    "assets/main-photo/assembly/step-crops/raw/puzzle-step-2-support.jpg",
    "assets/main-photo/assembly/step-crops/raw/puzzle-step-3-bag.jpg"
  ],
  "guide-wooden-hangbar": [
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-1-feed.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-2-peel.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-3-place-bar.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-4-string.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-5-top-slot.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-6-top-plugs.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-7-bottom-bar.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-8-paper.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-9-roll.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-10-tight-roll.jpg",
    "assets/main-photo/assembly/step-crops/raw/hangbar-step-11-box.jpg"
  ],
  "guide-yard-sign": [
    "assets/main-photo/assembly/step-crops/raw/yard-step-1-print.jpg",
    "assets/main-photo/assembly/step-crops/raw/yard-step-2-fold.jpg",
    "assets/main-photo/assembly/step-crops/raw/yard-step-3-tabs.jpg",
    "assets/main-photo/assembly/step-crops/raw/yard-step-4-middle-tabs.jpg",
    "assets/main-photo/assembly/step-crops/raw/yard-step-5-clips.jpg",
    "assets/main-photo/assembly/step-crops/raw/yard-step-6-align-clips.jpg"
  ]
};

function routeTo(id, push = true) {
  const target = id || "home";
  render(target);
  if (push) history.pushState({ page: target }, "", `#${target}`);
  window.scrollTo(0, 0);
  requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
}

function pageTitle(id) {
  if (id === "home") return PE_DATA.home.title;
  if (PE_DATA.pages[id]) return PE_DATA.pages[id].title;
  if (PE_DATA.supplies[id]) return PE_DATA.supplies[id].title;
  if (PE_DATA.printerGuides?.[id]) return PE_DATA.printerGuides[id].title;
  if (PE_DATA.employeeGuides?.[id]) return PE_DATA.employeeGuides[id].title;
  return PE_DATA.guides[id] || "Page Not Found";
}

function heading(title, description, id) {
  const label = id === "home" ? "Choose a workstation" : PE_DATA.pages[id] ? "Workstation support" : PE_DATA.supplies[id] ? "Supply reference" : PE_DATA.printerGuides?.[id] ? "Printer guide" : PE_DATA.employeeGuides?.[id] ? "Employee quick guide" : "Quick guide";
  return `<section class="page-heading ${id === "home" ? "home-heading" : ""}"><p class="eyebrow">${label}</p><h1>${title}</h1><p class="page-description">${description || ""}</p>${id === "home" ? '<div class="hero-chips"><span>QR-ready</span><span>Mobile-first</span><span>Fast task support</span></div>' : ""}</section>`;
}

function header() {
  return `<header class="site-header"><div class="brand-row"><button class="brand-lockup" type="button" onclick="routeTo('home')" aria-label="Project Excellence home"><span class="cvs-brand"><span class="heart-text">♥</span><span class="cvs-word">CVS</span></span><span class="brand-divider"></span><span class="project-name"><strong>Project Excellence</strong><small>Operational Excellence. Every Time.</small></span></button><div class="header-tools"><span class="department-pill">CVS PHOTO</span><span class="version-pill">v${PE_DATA.version}</span></div></div><div class="red-rule"></div><div class="context-row"><div class="context-inner"><span class="context-label">Operational Knowledge System</span><span class="context-status"><span></span> New-hire quick support</span></div></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-inner"><div class="footer-brand"><span class="heart-text">♥</span><span>Project Excellence</span></div><p>CVS Photo operational support</p><span class="footer-version">Version ${PE_DATA.version}</span></div></footer>`;
}

function back(id) {
  return id === "home" ? "" : `<button class="back-btn" type="button" onclick="routeTo('${parents[id] || "home"}')">← Back</button>`;
}

function render(id = "home") {
  const valid = id === "home" || PE_DATA.pages[id] || PE_DATA.supplies[id] || PE_DATA.printerGuides?.[id] || PE_DATA.employeeGuides?.[id] || PE_DATA.guides[id];
  const target = valid ? id : "not-found";
  document.title = `${pageTitle(target)} | Project Excellence`;
  app.innerHTML = `<div class="app-shell"><a class="skip-link" href="#main-content">Skip to content</a>${header()}<main class="container" id="main-content" tabindex="-1">${back(target)}${content(target)}</main>${footer()}</div>`;
}

function label(id) {
  return ["main-photo", "poster-printer", "ipos"].includes(id) ? "WORKSTATION" : id.includes("supplies") ? "REFERENCE" : "GUIDE";
}

function cards(items) {
  return `<div class="card-grid">${items.map(x => `<button class="card" type="button" onclick="routeTo('${x.id}')"><span class="card-meta">${label(x.id)}</span><span class="card-icon" aria-hidden="true">${x.icon}</span><span class="card-title">${x.title}</span><span class="card-desc">${x.description}</span><span class="card-action">Open →</span></button>`).join("")}</div>`;
}

function content(id) {
  if (id === "home") return heading(PE_DATA.home.title, PE_DATA.home.description, id) + cards(PE_DATA.home.cards);
  if (PE_DATA.pages[id]) return heading(PE_DATA.pages[id].title, PE_DATA.pages[id].description, id) + cards(PE_DATA.pages[id].cards);
  if (PE_DATA.supplies[id]) return supplies(id);
  if (PE_DATA.printerGuides?.[id]) return printerGuide(id, PE_DATA.printerGuides[id]);
  if (PE_DATA.employeeGuides?.[id]) return employeeGuide(id, PE_DATA.employeeGuides[id]);
  if (PE_DATA.guides[id]) return guide(id, PE_DATA.guides[id]);
  return heading("Page Not Found", "Return home and choose a workstation.", id) + `<button class="primary-action" type="button" onclick="routeTo('home')">Return home</button>`;
}

function supplies(id) {
  const d = PE_DATA.supplies[id];
  return `${heading(d.title, d.description, id)}<section class="search-panel"><div class="search-icon">⌕</div><div class="search-copy"><strong>Find a supply</strong><span>Search by name, item number, category, or note.</span></div><label class="sr-only" for="supplySearch">Search supplies</label><input class="search" id="supplySearch" type="search" placeholder="Search supplies..." oninput="filterTable()"><span class="search-results" id="searchResults" aria-live="polite"></span></section><div class="table-wrap"><table id="supplyTable"><thead><tr><th>Category</th><th>Item</th><th>Item #</th><th>Notes</th></tr></thead><tbody>${d.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function stepCards(steps = []) {
  return steps.map(step => `<article class="visual-step instruction-step">${step.image ? `<div class="visual-step-media"><img src="${step.image}" alt="${step.alt || ""}" loading="lazy" decoding="async"></div>` : ""}<div class="visual-step-copy"><span class="visual-step-number">${step.number}</span><div><h3>${step.title}</h3><p>${step.text}</p></div></div></article>`).join("");
}

function employeeGuide(id, guideData) {
  const sourcePhotos = productSourcePhotos[id];
  const steps = sourcePhotos
    ? guideData.steps.map((step, index) => ({
        ...step,
        image: sourcePhotos[index],
        alt: `Photographed CVS source instruction sheet for ${guideData.title}, step ${step.number}: ${step.title}.`
      }))
    : guideData.steps;
  return `${heading(guideData.title, guideData.description, id)}<article class="guide simple-guide"><section class="guide-section material-note"><div><h3>Material Location</h3><p>${guideData.materialLocation}</p></div></section><section class="guide-section guide-steps-section"><div><h3>Step-by-Step Instructions</h3><div class="visual-steps">${stepCards(steps)}</div></div></section></article>`;
}

function printerGuide(id, guideData) {
  const actions = guideData.actions.map(action => `<button class="printer-action" type="button" onclick="routeTo('${action.target}')"><span>${action.label}</span><strong>${action.title}</strong><small>${action.text}</small></button>`).join("");
  const sections = guideData.sections.map(section => `<section class="printer-panel"><p class="eyebrow">${section.label}</p><h3>${section.title}</h3><ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul></section>`).join("");
  const steps = stepCards(guideData.steps);
  const checks = guideData.checks.map(item => `<li>${item}</li>`).join("");
  return `${heading(guideData.title, guideData.description, id)}<article class="guide printer-guide"><section class="printer-hero"><div><p class="eyebrow">${guideData.heroLabel}</p><h3>${guideData.heroTitle}</h3><p>${guideData.heroText}</p><div class="printer-actions">${actions}</div></div><figure><img src="${guideData.heroImage}" alt="${guideData.heroAlt}" loading="eager" decoding="async"></figure></section><section class="printer-panels">${sections}</section><section class="guide-section guide-steps-section"><div><h3>Printer Walkthrough</h3><div class="visual-steps">${steps}</div></div></section><section class="printer-checks"><div><p class="eyebrow">Final check</p><h3>Before the next order prints</h3></div><ul>${checks}</ul></section></article>`;
}

function guide(id, title) {
  return `${heading(title, "Open a workstation and choose one of its complete step-by-step guides.", id)}<button class="primary-action" type="button" onclick="routeTo('home')">Return home</button>`;
}

function filterTable() {
  const input = document.getElementById("supplySearch");
  const table = document.getElementById("supplyTable");
  const output = document.getElementById("searchResults");
  if (!input || !table) return;
  const query = input.value.trim().toLowerCase();
  let visible = 0;
  [...table.querySelectorAll("tbody tr")].forEach(row => {
    const match = row.innerText.toLowerCase().includes(query);
    row.hidden = !match;
    if (match) visible += 1;
  });
  if (output) output.textContent = query ? `${visible} result${visible === 1 ? "" : "s"}` : "";
}

addEventListener("popstate", () => render(location.hash.replace("#", "") || "home"));
addEventListener("load", () => render(location.hash.replace("#", "") || "home"));
