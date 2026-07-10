const app = document.getElementById("app");
const parents = {"main-photo":"home","poster-printer":"home","ipos":"home","main-products":"main-photo","main-supplies":"main-photo","main-maintenance":"main-photo","main-troubleshooting":"main-photo","poster-supplies":"poster-printer","support-main":"main-photo","support-poster":"poster-printer","support-ipos":"ipos","guide-canvas":"main-products","guide-photo-books":"main-products","guide-calendars":"main-products","guide-magnets":"main-products","guide-specialty":"main-products","guide-main-printer-checklist":"main-maintenance","guide-kodak-305":"main-maintenance","guide-kodak-7000":"main-maintenance","guide-kodak-8810":"main-maintenance","guide-cx3240":"main-maintenance","guide-kodak-kiosk":"main-maintenance","guide-poster-products":"poster-printer","guide-load-paper":"poster-printer","guide-replace-ink":"poster-printer","guide-poster-troubleshooting":"poster-printer","guide-photo-checkout":"ipos","guide-qr-pickup":"ipos","guide-register-troubleshooting":"ipos","guide-customer-questions":"ipos"};

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
  return ["main-photo", "poster-printer", "ipos"].includes(id) ? "WORKSTATION" : id.startsWith("support-") ? "ESCALATION" : id.includes("supplies") ? "REFERENCE" : "GUIDE";
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
  return `${heading(d.title, d.description, id)}<section class="search-panel"><div class="search-icon">⌕</div><div class="search-copy"><strong>Find a supply</strong><span>Search by name, item number, category, or note.</span></div><label class="sr-only" for="supplySearch">Search supplies</label><input class="search" id="supplySearch" type="search" placeholder="Search supplies..." oninput="filterTable()"><span class="search-results" id="searchResults" aria-live="polite"></span></section><div class="table-wrap"><table id="supplyTable"><thead><tr><th>Category</th><th>Item</th><th>CVS Item #</th><th>Notes</th></tr></thead><tbody>${d.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function stepCards(steps = []) {
  return steps.map(step => `<article class="visual-step instruction-step">${step.image ? `<div class="visual-step-media"><img src="${step.image}" alt="${step.alt || ""}" loading="lazy" decoding="async"></div>` : ""}<div class="visual-step-copy"><span class="visual-step-number">${step.number}</span><div><h3>${step.title}</h3><p>${step.text}</p></div></div></article>`).join("");
}

function employeeGuide(id, guideData) {
  return `${heading(guideData.title, guideData.description, id)}<article class="guide simple-guide"><section class="guide-section material-note"><div><h3>Material Location</h3><p>${guideData.materialLocation}</p></div></section><section class="guide-section guide-steps-section"><div><h3>Step-by-Step Instructions</h3><div class="visual-steps">${stepCards(guideData.steps)}</div></div></section></article>`;
}

function printerGuide(id, guideData) {
  const actions = guideData.actions.map(action => `<button class="printer-action" type="button" onclick="routeTo('${action.target}')"><span>${action.label}</span><strong>${action.title}</strong><small>${action.text}</small></button>`).join("");
  const sections = guideData.sections.map(section => `<section class="printer-panel"><p class="eyebrow">${section.label}</p><h3>${section.title}</h3><ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul></section>`).join("");
  const steps = stepCards(guideData.steps);
  const checks = guideData.checks.map(item => `<li>${item}</li>`).join("");
  return `${heading(guideData.title, guideData.description, id)}<article class="guide printer-guide"><section class="printer-hero"><div><p class="eyebrow">${guideData.heroLabel}</p><h3>${guideData.heroTitle}</h3><p>${guideData.heroText}</p><div class="printer-actions">${actions}</div></div><figure><img src="${guideData.heroImage}" alt="${guideData.heroAlt}" loading="eager" decoding="async"></figure></section><section class="printer-panels">${sections}</section><section class="guide-section guide-steps-section"><div><h3>Printer Walkthrough</h3><div class="visual-steps">${steps}</div></div></section><section class="printer-checks"><div><p class="eyebrow">Final check</p><h3>Before the next order prints</h3></div><ul>${checks}</ul></section></article>`;
}

function guide(id, title) {
  if (id.startsWith("support-")) return support(id);
  return `${heading(title, "Find the material location, then follow the approved instructions in order.", id)}<article class="guide simple-guide"><section class="guide-section"><span class="section-number">01</span><div><h3>Material Location</h3><p>Store-specific location to be confirmed.</p></div></section><section class="guide-section"><span class="section-number">02</span><div><h3>Step-by-Step Instructions</h3><p>The approved instructions for this task will be added during the guide build.</p></div></section></article>`;
}

function support(id) {
  return `${heading("Support Contacts", "Use this section when a task cannot be completed using the guide.", id)}<article class="guide"><div class="guide-banner dark"><div class="guide-banner-icon">☎</div><div><span>ESCALATION SUPPORT</span><strong>Get the right help quickly</strong></div></div><div class="support-grid"><section><h3>Store Support</h3><ul><li><span>Store Manager</span><strong>________________</strong></li><li><span>Shift Supervisor</span><strong>________________</strong></li><li><span>Photo-trained colleague</span><strong>________________</strong></li></ul></section><section><h3>Technical Support</h3><ul><li><span>Photo Help Desk</span><strong>________________</strong></li><li><span>Register Support</span><strong>________________</strong></li></ul></section></div></article>`;
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
