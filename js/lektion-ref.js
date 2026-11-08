/* Bổ sung nội dung theo từng Lektion vào trang tra cứu.
   - ngu_phap.html  -> hiện phần Grammatik của mỗi bài
   - mau_cau.html   -> hiện phần Kommunikation của mỗi bài
   Dữ liệu lấy từ data/content/<id>.js (cùng nguồn với trang bai.html).
   Chèn SAU js/main.js:  <script src="js/lektion-ref.js"></script> */
(function () {
  "use strict";
  const path = location.pathname;
  const mode = /ngu_phap/.test(path) ? "grammatik" : /mau_cau/.test(path) ? "kommunikation" : null;
  const main = document.querySelector(".content-main");
  if (!mode || !main) return;

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const load = src => new Promise(res => {
    const el = document.createElement("script");
    el.src = src; el.onload = () => res(true); el.onerror = () => res(false);
    document.head.appendChild(el);
  });

  const style = document.createElement("style");
  style.textContent = `
    .ref-intro { margin-top: 12px; }
    .ref-filter { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
    .ref-filter button { padding: 8px 18px; font: inherit; font-weight: 700; cursor: pointer; border: 1px solid var(--line-strong); border-radius: 999px; background: #fff; color: var(--ink-soft); }
    .ref-filter button[aria-pressed="true"] { background: var(--stamp-red); border-color: var(--stamp-red); color: #fff; }
    .ref-sub { margin-top: 22px; padding-top: 18px; border-top: 1px dashed var(--line); }
    .ref-sub:first-of-type { margin-top: 0; padding-top: 0; border-top: 0; }
    .ref-sub-title { margin: 0 0 12px; font-family: var(--f-display); font-size: 1.15rem; color: var(--ink); }
    .ref-sub .lesson-text { color: var(--ink-soft); margin: 0 0 14px; }
    .ref-sub .table-wrap, .ref-sub .note-box { margin: 10px 0; }
    .ref-sub .qa-item + .qa-item { margin-top: 14px; }
    .ref-card[hidden] { display: none; }`;
  document.head.appendChild(style);

  function renderBlock(b) {
    if (b.type === "text") return `<p class="lesson-text">${b.html}</p>`;
    if (b.type === "note") return `<div class="note-box">${b.html}</div>`;
    if (b.type === "table") return `<div class="table-wrap"><table class="data-table"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (b.type === "examples") return `<ul class="example-list">${b.items.map(i => `<li><strong>${esc(i.de)}</strong><span>${esc(i.vi)}</span></li>`).join("")}</ul>`;
    return "";
  }

  function renderKommGroup(g) {
    const row = (cls, tag, x) => x ? `<div class="qa-row ${cls}"><span class="qa-tag ${cls}">${tag}</span><p class="qa-text">${esc(x.de)}${x.vi ? ` <span class="qa-note">(${esc(x.vi)})</span>` : ""}</p></div>` : "";
    return `<div class="qa-item"><p class="field-label">${esc(g.label)}</p>${g.items.map(it =>
      row("frage", "Frage", it.frage) + row("antwort", it.satz ? "Satz" : "Antwort", it.antwort || it.satz) + (it.note ? `<p class="lesson-text">💡 ${esc(it.note)}</p>` : "")
    ).join("")}</div>`;
  }

  function renderSub(s) {
    const body = mode === "grammatik"
      ? (s.blocks || []).map(renderBlock).join("")
      : `<div class="qa-group">${(s.groups || []).map(renderKommGroup).join("")}</div>`;
    return `<div class="ref-sub"><h3 class="ref-sub-title">${esc(s.titleDe)}</h3>${body}</div>`;
  }

  load("data/lessons.js").then(ok => {
    if (!ok || !Array.isArray(window.lessons)) return;
    const list = window.lessons
      .filter(l => l.parts && l.parts[mode])
      .sort((a, b) => a.level.localeCompare(b.level) || a.number - b.number);
    return Promise.all(list.map(l => load(`data/content/${l.id}.js`))).then(() => {
      const label = mode === "grammatik" ? "Grammatik" : "Kommunikation";
      const intro = document.createElement("div");
      intro.className = "page-intro ref-intro";
      intro.innerHTML = `<p class="page-eyebrow">${label} · theo Lektion</p>
        <h2 class="page-title">${label} theo từng bài</h2>
        <p class="page-sub">Nội dung ${label} của từng Lektion A1 và A2, lấy trực tiếp từ các bài học.</p>
        <div class="ref-filter" role="group" aria-label="Lọc theo cấp độ">
          <button type="button" data-f="all" aria-pressed="true">Tất cả</button>
          <button type="button" data-f="A1" aria-pressed="false">A1</button>
          <button type="button" data-f="A2" aria-pressed="false">A2</button>
        </div>`;
      main.appendChild(intro);

      list.forEach(l => {
        const subs = ((window.lessonContent || {})[l.id] || {})[mode] || [];
        if (!subs.length) return;
        const sec = document.createElement("section");
        sec.id = "ref-" + l.id;
        sec.className = "section-card ref-card";
        sec.dataset.level = l.level;
        sec.innerHTML = `<div class="section-head">
            <div class="stamp-mark">${String(l.number).padStart(2, "0")}</div>
            <div class="section-titles"><span class="section-title-de">${l.level} · ${esc(l.titleDe)}</span></div>
          </div>${subs.map(renderSub).join("")}`;
        main.appendChild(sec);
      });

      intro.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
        intro.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
        main.querySelectorAll(".ref-card").forEach(c => { c.hidden = b.dataset.f !== "all" && c.dataset.level !== b.dataset.f; });
        if (typeof initAutoSidebar === "function") {
          // dựng lại mục lục sidebar theo các thẻ đang hiển thị
          const sb = document.getElementById("auto-sidebar");
          if (sb) {
            sb.innerHTML = "";
            main.querySelectorAll(".section-card[id]:not([hidden])").forEach((s, i) => {
              const t = s.querySelector(".section-title-vi") || s.querySelector(".section-title-de");
              const a = document.createElement("a");
              a.href = "#" + s.id; a.textContent = `${i + 1}. ${t.textContent.trim()}`;
              sb.appendChild(a);
            });
          }
        }
      }));

      // Cập nhật mục lục sidebar (main.js đã chạy trước khi các thẻ này được thêm)
      if (typeof initAutoSidebar === "function") initAutoSidebar();
    });
  });
})();
