const app = document.getElementById("app");

let currentPage = location.hash.replace("#", "") || "home";
let supportParent = "home";

const pageParents = {
  "main-photo": "home",
  "poster-printer": "home",
  "ipos": "home",
  "main-products": "main-photo",
  "main-supplies": "main-photo",
  "main-maintenance": "main-photo",
  "main-troubleshooting": "main-photo",
  "poster-supplies": "poster-printer",
  "support": "home",
  "guide-canvas": "main-products",
  "guide-photo-books": "main-products",
  "guide-calendars": "main-products",
  "guide-magnets": "main-products",
  "guide-drinkware": "main-products",
  "guide-specialty": "main-products",
  "guide-poster-products": "poster-printer",
  "guide-load-paper": "poster-printer",
  "guide-replace-ink": "poster-printer",
  "guide-poster-troubleshooting": "poster-printer",
  "guide-photo-checkout": "ipos",
  "guide-qr-pickup": "ipos",
  "guide-register-troubleshooting": "ipos",
  "guide-customer-questions": "ipos"
};

function routeTo(id, push = true) {
  const target = id || "home";
  if (target === "support") supportParent = currentPage;
  currentPage = target;
  render(target);
  if (push) history.pushState({ page: target, supportParent }, "", `#${target}`);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function render(id = "home") {
  app.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      <main class="container" id="main-content">
        ${renderBack(id)}
        ${renderContent(id)}
      </main>
      <footer class="footer">Project Excellence | Version ${PE_DATA.version} | CVS Photo operational support</footer>
    </div>
  `;
  document.title = `${getPageTitle(id)} | Project Excellence`;
}

function getPageTitle(id) {
  if (id === "home") return PE_DATA.home.title;
  if (PE_DATA.pages[id]) return PE_DATA.pages[id].title;
  if (PE_DATA.supplies[id]) return PE_DATA.supplies[id].title;
  if (PE_DATA.detailedGuides?.[id]) return PE_DATA.detailedGuides[id].title;
  if (PE_DATA.guides[id]) return PE_DATA.guides[id];
  return "Page Not Found";
}

function renderHeader() {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <p class="kicker">CVS Photo</p>
        <h1 class="title">Project Excellence</h1>
        <p class="subtitle">Operational Knowledge System</p>
      </div>
    </header>
  `;
}

function renderBack(id) {
  if (id === "home") return "";
  const parent = id === "support" ? supportParent : (pageParents[id] || "home");
  return `<button type="button" class="back-btn" aria-label="Go back to the previous section" onclick="routeTo('${parent}')">← Back</button>`;
}

function heading(title, description) {
  return `<section class="page-heading"><h2>${title}</h2><p>${description || ""}</p></section>`;
}

function cards(items) {
  return `<div class="card-grid">${items.map(item => `
    <button type="button" class="card" aria-label="Open ${item.title}" onclick="routeTo('${item.id}')">
      <span class="card-icon" aria-hidden="true">${item.icon}</span>
      <span class="card-title">${item.title}</span>
      <span class="card-desc">${item.description}</span>
    </button>`).join("")}</div>`;
}

function renderContent(id) {
  if (id === "home") return heading(PE_DATA.home.title, PE_DATA.home.description) + cards(PE_DATA.home.cards);
  if (PE_DATA.pages[id]) {
    const page = PE_DATA.pages[id];
    return heading(page.title, page.description) + cards(page.cards);
  }
  if (PE_DATA.supplies[id]) return renderSupplies(id);
  if (PE_DATA.detailedGuides?.[id]) return renderDetailedGuide(PE_DATA.detailedGuides[id]);
  if (PE_DATA.guides[id]) return renderGuide(id, PE_DATA.guides[id]);
  return heading("Page Not Found", "Return home and choose a workstation.") + cards(PE_DATA.home.cards);
}

function renderSupplies(id) {
  const data = PE_DATA.supplies[id];
  return `${heading(data.title, data.description)}
    <label class="sr-only" for="supplySearch">Search supplies, item numbers, or notes</label>
    <input class="search" id="supplySearch" type="search" aria-label="Search supplies, item numbers, or notes" placeholder="Search supplies, item numbers, or notes..." oninput="filterTable()" />
    <div class="table-wrap"><table id="supplyTable">
      <thead><tr><th>Category</th><th>Item</th><th>CVS Item #</th><th>Notes</th></tr></thead>
      <tbody>${data.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>
    <div class="quick-note"><strong>Implementation note:</strong> Add photos of boxes and store-specific shelf locations during the store walk.</div>`;
}

function renderDetailedGuide(guide) {
  const materials = guide.materials.map(item => `<li>${item}</li>`).join("");
  const phases = guide.phases.map(phase => `
    <section class="guide-phase" aria-labelledby="${phase.id}-title">
      <div class="phase-heading">
        <span class="phase-label">${phase.label}</span>
        <h3 id="${phase.id}-title">${phase.title}</h3>
      </div>
      <figure class="phase-visual">
        <img src="${phase.image}" alt="${phase.alt}" loading="lazy" />
        <figcaption>${phase.caption}</figcaption>
      </figure>
      <div class="procedure-steps">
        ${phase.steps.map(step => `
          <div class="procedure-step">
            <div class="step-number" aria-hidden="true">${step.number}</div>
            <div class="step-copy">
              <h4>${step.title}</h4>
              <p>${step.text}</p>
              ${step.note ? `<p class="step-note"><strong>${step.noteLabel || "Note"}:</strong> ${step.note}</p>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `).join("");

  return `${heading(guide.title, guide.description)}
    <article class="guide detailed-guide">
      <div class="info-grid">
        <div class="info-box"><div class="info-label">Status</div><span class="status-pill status-review">${guide.status}</span></div>
        <div class="info-box"><div class="info-label">Guide Version</div>${guide.version}</div>
        <div class="info-box"><div class="info-label">Equipment</div>${guide.equipment}</div>
      </div>

      <div class="guide-alert" role="note">
        <strong>Before employees rely on this guide:</strong> ${guide.reviewNotice}
      </div>

      <section class="guide-summary-grid">
        <div>
          <h3>When to Use</h3>
          <p>${guide.whenToUse}</p>
        </div>
        <div>
          <h3>Materials Needed</h3>
          <ul>${materials}</ul>
        </div>
      </section>

      <div class="privacy-note">
        <strong>Visual standard:</strong> These diagrams were created for Project Excellence from equipment references. No internal documents, employee information, customer data, or support numbers are shown.
      </div>

      ${phases}

      <section class="guide-checks">
        <div>
          <h3>Final Quality Check</h3>
          <ul>${guide.qualityChecks.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>Common Mistakes</h3>
          <ul>${guide.commonMistakes.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
      </section>

      <section class="escalation-box">
        <h3>Stop and Escalate</h3>
        <p>${guide.escalation}</p>
      </section>
    </article>`;
}

function renderGuide(id, title) {
  if (id === "support") return renderSupport();
  return `${heading(title, "Use this guide for quick, point-of-need support. Final steps and photos will be added during store documentation.")}
    <article class="guide">
      <div class="info-grid">
        <div class="info-box"><div class="info-label">Status</div><span class="status-pill">Template Ready</span></div>
        <div class="info-box"><div class="info-label">Version</div>${PE_DATA.version} Draft</div>
        <div class="info-box"><div class="info-label">Owner</div>Project Excellence</div>
      </div>
      <h3>Purpose</h3>
      <p>This guide helps colleagues complete the task accurately, confidently, and consistently without needing to interrupt another colleague for routine support.</p>
      <h3>When to Use</h3>
      <p>Use this guide when assisting a customer, completing a photo task, reviewing a process during training, or checking supplies before assembly.</p>
      <h3>Materials Needed</h3>
      <ul><li>Required supplies: add official supply names and CVS item numbers.</li><li>Required equipment: add machine or workstation used.</li><li>Visual references: add photos of the box, item, component, or finished product.</li></ul>
      <h3>Step-by-Step Instructions</h3>
      <ol class="step-list"><li>Confirm the customer order, product type, size, and quantity.</li><li>Gather the correct supplies and verify the item number when needed.</li><li>Complete the task using the store-approved process.</li><li>Check quality before finalizing the order.</li><li>Package, stage, or complete the item according to the normal store process.</li></ol>
      <h3>Common Mistakes</h3>
      <ul><li>Using the wrong supply, box, or product size.</li><li>Skipping the quality check before packaging.</li><li>Not confirming the order details before beginning assembly.</li></ul>
      <h3>Troubleshooting</h3>
      <p>If the task cannot be completed using this guide, ask a shift leader or use the approved support contact listed in Project Excellence.</p>
      <h3>Inventory Reference</h3>
      <p>Add item numbers, product photos, and store-specific locations.</p>
      <h3>Related Resources</h3>
      <p>Link to supplies, troubleshooting, and support contacts once final pages are completed.</p>
    </article>`;
}

function renderSupport() {
  return `${heading("Support Contacts", "Use this section when a task cannot be completed using the guide.")}
    <article class="guide">
      <h3>Store Support</h3>
      <ul><li>Store Manager: ________________________</li><li>Shift Supervisor: _____________________</li><li>Photo-trained colleague: ______________</li></ul>
      <h3>Technical Support</h3>
      <ul><li>Photo Help Desk: ______________________</li><li>Register Support: _____________________</li></ul>
      <h3>Escalation Rule</h3>
      <p>If the issue may damage equipment, impact a customer order, or prevent the department from operating, escalate to leadership immediately.</p>
    </article>`;
}

function filterTable() {
  const input = document.getElementById("supplySearch");
  const table = document.getElementById("supplyTable");
  if (!input || !table) return;
  const query = input.value.toLowerCase();
  [...table.querySelectorAll("tbody tr")].forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
  });
}

window.addEventListener("popstate", event => {
  supportParent = event.state?.supportParent || supportParent;
  currentPage = location.hash.replace("#", "") || "home";
  render(currentPage);
});
window.addEventListener("load", () => render(currentPage));
