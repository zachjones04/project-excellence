const PE_ICON_PATHS={
"main-photo":'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M7 6V3h10v3M7 16h10v5H7zM7 10h.01"/>',
"poster-printer":'<path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M4 15h16M8 7h8M9 19v2h6v-2"/>',
"ipos":'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M7 6h10M7 10h10M8 15h2M12 15h2M16 15h1M8 18h2M12 18h5"/>',
"main-products":'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
"main-supplies":'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
"poster-supplies":'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
"main-maintenance":'<path d="M14.7 6.3a4 4 0 0 0-5-5L8 3l3 3 1.7-1.7a4 4 0 0 0 2 5l-8.4 8.4a2.1 2.1 0 0 0 3 3l8.4-8.4a4 4 0 0 0 5-5L21 9l-3-3z"/>',
"main-troubleshooting":'<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
"guide-poster-troubleshooting":'<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
"guide-register-troubleshooting":'<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
"support-main":'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z"/>',
"support-poster":'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z"/>',
"support-ipos":'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z"/>',
"guide-canvas":'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
"guide-photo-books":'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 5.5v14M8 7h8M8 11h6"/>',
"guide-calendars":'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
"guide-magnets":'<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 7h4M14 7h4"/>',
"guide-drinkware":'<path d="M5 8h11v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M16 10h1a3 3 0 0 1 0 6h-1M8 4h5"/>',
"guide-specialty":'<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7.5 8A2.5 2.5 0 1 1 12 6v2M16.5 8A2.5 2.5 0 1 0 12 6v2"/>',
"guide-poster-products":'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h18M3 16h18"/>',
"guide-load-paper":'<path d="M6 2h9l3 3v17H6z"/><path d="M14 2v4h4M9 13h6M9 17h6M9 9h2"/>',
"guide-replace-ink":'<path d="M9 2h6v4l2 3v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9l2-3z"/><path d="M7 12h10M10 2h4"/>',
"guide-photo-checkout":'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h2"/>',
"guide-qr-pickup":'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h2v2H9zM13 6h2v2h-2zM9 10h2v2H9zM14 10h1v1h-1zM9 15h6M12 19h.01"/>',
"guide-customer-questions":'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4M12 18h.01"/>'
};
function peSvg(id){const fallback='<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>';return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${PE_ICON_PATHS[id]||fallback}</svg>`}
function routeId(button){const text=button.getAttribute("onclick")||"";const match=text.match(/routeTo\(['\"]([^'\"]+)/);return match?match[1]:""}
function applyProfessionalIcons(){
  document.querySelectorAll(".card").forEach(card=>{const target=card.querySelector(".card-icon");if(target&&!target.querySelector("svg"))target.innerHTML=peSvg(routeId(card))});
  const route=location.hash.replace("#","")||"home";
  document.querySelectorAll(".guide-banner-icon").forEach(target=>{if(!target.querySelector("svg"))target.innerHTML=peSvg(route)});
  document.querySelectorAll(".search-icon").forEach(target=>{if(!target.querySelector("svg"))target.innerHTML=peSvg("main-supplies")});
  document.querySelectorAll(".heart-text").forEach(target=>{if(!target.querySelector("svg"))target.innerHTML='<svg class="heart-mark" viewBox="0 0 48 42" aria-hidden="true"><path d="M24 40 4.6 21.4C-4.4 12.7 1.8 0 13.6 0 18.2 0 21.8 2.4 24 5.4 26.2 2.4 29.8 0 34.4 0 46.2 0 52.4 12.7 43.4 21.4z"/></svg>'});
}
new MutationObserver(applyProfessionalIcons).observe(document.getElementById("app"),{childList:true,subtree:true});
addEventListener("load",applyProfessionalIcons);addEventListener("hashchange",()=>setTimeout(applyProfessionalIcons));
