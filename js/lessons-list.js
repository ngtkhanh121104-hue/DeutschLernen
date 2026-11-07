/* Trang cấp độ: vẽ 16 thẻ bài. Cấp độ lấy từ <body data-level="A1">. */
(function () {
  const level = document.body.dataset.level;
  const grid = document.getElementById("lessonGrid");
  if (!grid || !Array.isArray(window.lessons)) return;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const chip = (name, ok) => `<span class="part-chip${ok ? " is-ready" : ""}">${name}${ok ? " ✓" : ""}</span>`;
  grid.innerHTML = window.lessons.filter(l => l.level === level).sort((a, b) => a.number - b.number).map(l => `
    <a class="lesson-card" href="bai.html?id=${l.id}">
      <span class="lesson-num">Bài ${l.number}</span>
      <h3 class="lesson-de">${esc(l.titleDe)}</h3>
      <ul class="lesson-summary">${l.summary.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      <div class="lesson-parts">${chip("Grammatik", l.parts.grammatik)}${chip("Kommunikation", l.parts.kommunikation)}${chip("Wörter", l.parts.woerter)}</div>
    </a>`).join("");
})();
