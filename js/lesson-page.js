/* Trang bài học: bai.html?id=a1-l05  — 3 tab Grammatik / Kommunikation / Wörter.
   Nội dung từng bài nằm ở data/content/<id>.js (nạp khi cần). */
(function () {
  const TABS = [["grammatik", "Grammatik", "Ngữ pháp"], ["kommunikation", "Kommunikation", "Giao tiếp"], ["woerter", "Wörter", "Từ vựng"]];
  const root = document.getElementById("lessonRoot");
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "";
  const all = (window.lessons || []).slice().sort((a, b) => a.level.localeCompare(b.level) || a.number - b.number);
  const lesson = all.find(l => l.id === id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  if (!lesson) {
    root.innerHTML = `<div class="empty-state"><h1>Không tìm thấy bài học</h1><p>Mã bài “${esc(id)}” không tồn tại.</p><p><a class="hero-cta" href="index.html">Về trang chủ</a></p></div>`;
    return;
  }
  document.title = `Bài ${lesson.number} · ${lesson.titleDe} (${lesson.level})`;
  const same = all.filter(l => l.level === lesson.level);
  const idx = same.indexOf(lesson), prev = same[idx - 1], next = same[idx + 1];
  const lv = lesson.level.toLowerCase();
  document.body.dataset.nav = lv;
  document.querySelectorAll(".site-nav .nav-link").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `${lv}.html`));

  root.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Trang chủ</a> › <a href="${lv}.html">Kiến thức ${lesson.level}</a> › Bài ${lesson.number}</nav>
    <div class="page-intro">
      <p class="page-eyebrow">${lesson.level} · Lektion ${lesson.number}</p>
      <h1 class="page-title">${esc(lesson.titleDe)}</h1>
      <ul class="lesson-summary">${lesson.summary.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
    </div>
    <div class="tabs" role="tablist" aria-label="Phần của bài học">
      ${TABS.map(([k, de, vi]) => `<button class="tab" role="tab" id="tab-${k}" aria-controls="panel-${k}" data-tab="${k}"><span>${de}</span><small>${vi}</small></button>`).join("")}
    </div>
    ${TABS.map(([k]) => `<div class="tab-panel" role="tabpanel" id="panel-${k}" aria-labelledby="tab-${k}" hidden></div>`).join("")}
    <div class="lesson-pager">
      ${prev ? `<a class="pager-link" href="bai.html?id=${prev.id}">← Bài ${prev.number}: ${esc(prev.titleDe)}</a>` : "<span></span>"}
      <a class="pager-link" href="${lv}.html">Danh sách bài</a>
      ${next ? `<a class="pager-link" href="bai.html?id=${next.id}">Bài ${next.number}: ${esc(next.titleDe)} →</a>` : "<span></span>"}
    </div>`;

  // ----- Bộ chuyển bài trong sidebar: [←] [dropdown bài hiện tại] [→] -----
  const sidebarPanel = document.querySelector("#page-sidebar .sidebar-panel");
  const href = l => `bai.html?id=${l.id}`;
  const btn = (l, dir, label) => l
    ? `<a class="switch-btn" data-lesson="${l.id}" href="${href(l)}" aria-label="${label}: ${esc(l.titleDe)}">${dir}</a>`
    : `<span class="switch-btn is-disabled" aria-disabled="true" aria-label="${label} (không có)">${dir}</span>`;
  if (sidebarPanel) {
    sidebarPanel.insertAdjacentHTML("beforebegin", `
      <div class="lesson-switcher" aria-label="Chuyển bài">
        ${btn(prev, "‹", "Bài trước")}
        <label class="lesson-select"><small>Lektion · ${lesson.level}</small>
          <select id="lessonSelect" aria-label="Chọn bài học">${same.map(l => `<option value="${l.id}"${l === lesson ? " selected" : ""}>${l.number}. ${esc(l.titleDe)}</option>`).join("")}</select>
        </label>
        ${btn(next, "›", "Bài sau")}
      </div>`);
    document.getElementById("lessonSelect").addEventListener("change", e => { location.href = `bai.html?id=${e.target.value}${location.hash}`; });
  }
  function syncSwitcherLinks(tab) {   // giữ nguyên tab khi chuyển bài
    document.querySelectorAll(".lesson-switcher a.switch-btn").forEach(a => { a.href = `bai.html?id=${a.dataset.lesson}#${tab}`; });
  }

  const empty = (what) => `<div class="empty-state"><p>${what} đang được cập nhật.</p></div>`;

  function renderBlock(b) {
    if (b.type === "text") return `<p class="lesson-text">${b.html}</p>`;
    if (b.type === "note") return `<div class="note-box">${b.html}</div>`;
    if (b.type === "table") return `<div class="table-wrap"><table class="data-table"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    if (b.type === "examples") return `<ul class="example-list">${b.items.map(i => `<li><strong>${esc(i.de)}</strong><span>${esc(i.vi)}</span></li>`).join("")}</ul>`;
    return "";
  }
  const head = (n, s) => `<div class="section-head"><div class="stamp-mark">${String(n).padStart(2, "0")}</div><div class="section-titles"><span class="section-title-de">${esc(s.titleDe)}</span>${s.titleVi ? `<span class="section-title-vi">${esc(s.titleVi)}</span>` : ""}</div></div>`;
  function renderGrammatik(list) {
    return list.map((s, i) => `<section id="${esc(s.id)}" class="section-card">${head(i + 1, s)}${s.blocks.map(renderBlock).join("")}</section>`).join("");
  }
  function renderKomm(list) {
    return list.map((s, i) => `<section id="${esc(s.id)}" class="section-card">${head(i + 1, s)}<div class="qa-group">${
      s.groups.map(g => `<div class="qa-item"><p class="field-label">${esc(g.label)}</p>${g.items.map(it => {
        const row = (cls, tag, x) => x ? `<div class="qa-row ${cls}"><span class="qa-tag ${cls}">${tag}</span><p class="qa-text">${esc(x.de)}${x.vi ? ` <span class="qa-note">(${esc(x.vi)})</span>` : ""}</p></div>` : "";
        return row("frage", "Frage", it.frage) + row("antwort", it.satz ? "Satz" : "Antwort", it.antwort || it.satz) + (it.note ? `<p class="lesson-text">💡 ${esc(it.note)}</p>` : "");
      }).join("")}</div>`).join("")}</div></section>`).join("");
  }
  // Từ vựng: mỗi mục = [từ, thông tin (số nhiều / chia động từ), nghĩa, ví dụ]
  function dots(w, info) {
    const pl = /\(Pl\.\)/.test(info || "");
    const d = [];
    if (/^der(\/die)?\s/.test(w)) d.push("der");
    if (/^(der\/)?die\s/.test(w)) d.push(pl ? "pl" : "die");
    if (/^das\s/.test(w)) d.push("das");
    return [...new Set(d)].map(g => `<span class="gdot g-${g}" aria-hidden="true"></span>`).join("");
  }
  function renderWoerter(list) {
    return list.map((g, i) => `<section id="${esc(g.id)}" class="section-card">${head(i + 1, g)}
      ${g.note ? `<div class="note-box">${esc(g.note)}</div>` : ""}
      <div class="word-list">${g.items.map(([w, info, vi, ex]) => `<div class="word-row">
        <div class="w">${dots(w, info)}<strong>${esc(w)}</strong>${info ? ` <small>${esc(info)}</small>` : ""}</div>
        <div class="m">${esc(vi)}</div>${ex ? `<p class="ex">${esc(ex)}</p>` : ""}</div>`).join("")}</div></section>`).join("");
  }
  function fill(content, words) {
    const c = content || {};
    const g = c.grammatik || [], k = c.kommunikation || [];
    document.getElementById("panel-grammatik").innerHTML = g.length ? renderGrammatik(g) : empty("Phần Grammatik");
    document.getElementById("panel-kommunikation").innerHTML = k.length ? renderKomm(k) : empty("Phần Kommunikation");
    document.getElementById("panel-woerter").innerHTML = words && words.length ? renderWoerter(words) : empty("Phần Wörter");
    showTab(currentTab());
  }
  function currentTab() { const h = location.hash.slice(1); return TABS.some(t => t[0] === h) ? h : "grammatik"; }
  function showTab(name, focus) {
    TABS.forEach(([k]) => {
      const on = k === name, tab = document.getElementById("tab-" + k);
      tab.setAttribute("aria-selected", on); tab.tabIndex = on ? 0 : -1;
      document.getElementById("panel-" + k).hidden = !on;
      if (on && focus) tab.focus();
    });
    syncSwitcherLinks(name);
    // mục lục sidebar theo tab đang mở
    const nav = document.getElementById("auto-sidebar");
    if (nav) {
      nav.innerHTML = "";
      document.querySelectorAll(`#panel-${name} .section-card[id]`).forEach((sec, i) => {
        const a = document.createElement("a"); a.href = "#" + sec.id;
        a.textContent = `${i + 1}. ${(sec.querySelector(".section-title-vi") || sec.querySelector(".section-title-de")).textContent.trim()}`; nav.appendChild(a);
      });
    }
  }
  const tabs = root.querySelector(".tabs");
  tabs.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) { location.hash = b.dataset.tab; showTab(b.dataset.tab); } });
  tabs.addEventListener("keydown", e => {
    const i = TABS.findIndex(t => t[0] === currentTab()); let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % 3; else if (e.key === "ArrowLeft") n = (i + 2) % 3; else return;
    e.preventDefault(); location.hash = TABS[n][0]; showTab(TABS[n][0], true);
  });
  window.addEventListener("hashchange", () => { if (TABS.some(t => t[0] === location.hash.slice(1))) showTab(currentTab()); });

  // Cho tab bám ngay dưới header: đo chiều cao header (0 nếu header không sticky)
  function syncHeaderHeight() {
    const h = document.getElementById("site-header");
    const sticky = h && getComputedStyle(h).position === "sticky";
    document.documentElement.style.setProperty("--header-h", (sticky ? h.offsetHeight : 0) + "px");
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);

  // Nạp nội dung bài và từ vựng (file nào chưa có thì phần đó hiện "đang cập nhật")
  const load = src => new Promise(res => {
    const el = document.createElement("script");
    el.src = src; el.onload = () => res(true); el.onerror = () => res(false);
    document.head.appendChild(el);
  });
  Promise.all([load(`data/content/${lesson.id}.js`), load(`data/words/${lesson.id}.js`)]).then(() =>
    fill((window.lessonContent || {})[lesson.id], (window.lessonWords || {})[lesson.id]));
})();
