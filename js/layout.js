/* Chèn header và footer chung cho các trang mới (a1, a2, bai). */
(function () {
  const links = [["mau_cau.html", "Kommunikation"], ["ngu_phap.html", "Grammatik"], ["chia_dong_tu.html", "Konjugation"], ["so_tay_tu_vung.html", "Wortschatz"]];
  const active = document.body.dataset.nav || "";   // "a1" | "a2"
  const nav = [["a1.html", "A1", "a1"], ["a2.html", "A2", "a2"]]
    .map(([h, t, k]) => `<a href="${h}" class="nav-link${active === k ? " active" : ""}">${t}</a>`).join("")
    + links.map(([h, t]) => `<a href="${h}" class="nav-link">${t}</a>`).join("");
  const toggle = document.body.dataset.sidebar === "yes"
    ? `<button class="sidebar-toggle" type="button" aria-label="Mở mục lục" aria-controls="page-sidebar" aria-expanded="false"><span class="sidebar-toggle-icon" aria-hidden="true"><span></span></span></button>` : "";
  const header = document.getElementById("site-header");
  if (header) header.innerHTML = `<div class="header-inner">${toggle}<a href="index.html" class="logo"><span class="flag">🇩🇪</span> DeutschLernen</a><nav class="site-nav">${nav}</nav></div><div class="stripe"></div>`;
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = "<p>© 2026 Học Tiếng Đức A1 Miễn Phí. Viel Erfolg!</p>";
})();
