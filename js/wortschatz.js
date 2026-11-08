/* Wortschatz theo Lektion: A2 trước, đường kẻ ranh giới, rồi A1; có tìm kiếm toàn bộ từ vựng.
   Nguồn: data/words/<id>.js (window.lessonWords[id]).
   Nội dung sổ tay cũ theo ngày (js/tu_vung.js) đang được ẨN TẠM THỜI.
   Muốn hiện lại (xếp vào đúng Lektion): đổi SHOW_LEGACY thành true. */
(function () {
  "use strict";

  const SHOW_LEGACY = false;

  const DATE_TO_LESSON = {
    "2026-07-20": "a1-l06", "2026-07-22": "a1-l07", "2026-07-23": "a1-l07", "2026-07-24": "a1-l07",
    "2026-07-28": "a1-l08", "2026-08-11": "a1-l10", "2026-08-17": "a1-l11", "2026-08-18": "a1-l11",
    "2026-08-19": "a1-l11", "2026-08-20": "a1-l12", "2026-08-24": "a1-l12", "2026-08-25": "a1-l13",
    "2026-08-26": "a1-l13"
  };

  const root = document.getElementById("wortRoot");
  const input = document.getElementById("wortSearch");
  const countEl = document.getElementById("wortCount");
  if (!root || !Array.isArray(window.lessons)) return;

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Bỏ dấu (ä→a, ế→e, đ→d) và chữ hoa để tìm kiếm dễ hơn
  const norm = s => String(s == null ? "" : s).normalize("NFC").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  const load = src => new Promise(res => {
    const el = document.createElement("script");
    el.src = src; el.onload = () => res(true); el.onerror = () => res(false);
    document.head.appendChild(el);
  });

  function hl(text, nq) {
    const raw = String(text == null ? "" : text).normalize("NFC");
    if (!nq) return esc(raw);
    const n = norm(raw);
    if (n.length !== raw.length) return esc(raw);
    let out = "", pos = 0, i;
    while ((i = n.indexOf(nq, pos)) !== -1) {
      out += esc(raw.slice(pos, i)) + "<mark>" + esc(raw.slice(i, i + nq.length)) + "</mark>";
      pos = i + nq.length;
    }
    return out + esc(raw.slice(pos));
  }

  function dots(w, info) {
    const pl = /\(Pl\.\)/.test(info || "");
    const d = [];
    if (/^der(\/die)?\s/.test(w)) d.push("der");
    if (/^(der\/)?die\s/.test(w)) d.push(pl ? "pl" : "die");
    if (/^das\s/.test(w)) d.push("das");
    return [...new Set(d)].map(g => `<span class="gdot g-${g}" aria-hidden="true"></span>`).join("");
  }

  const row = (it, nq, tag) => {
    const [w, info, vi, ex] = it;
    return `<div class="wl-row"><div class="wl-w">${dots(w, info)}<strong>${hl(w, nq)}</strong>${info ? ` <small>${hl(info, nq)}</small>` : ""}${tag ? `<span class="wl-tag">${esc(tag)}</span>` : ""}</div>
      <div class="wl-m">${hl(vi, nq)}</div>${ex ? `<p class="wl-ex">${hl(ex, nq)}</p>` : ""}</div>`;
  };

  // ----- Dữ liệu -----
  const legacyBy = {};
  function legacyGroups(id) {
    return (legacyBy[id] || []).map(e => {
      const items = [];
      ["der", "die", "das"].forEach(k => ((e.nouns || {})[k] || []).forEach(i => items.push([i.word, i.extra || "", i.meaning, ""])));
      (e.verbs || []).concat(e.adjectives || [], e.others || []).forEach(i => items.push([i.word, "", i.meaning, i.example || ""]));
      return { titleDe: e.title, note: e.note, items };
    });
  }
  const groupsFor = id => ((window.lessonWords || {})[id] || []).concat(SHOW_LEGACY ? legacyGroups(id) : []);
  const sortedLessons = lv => window.lessons.filter(l => l.level === lv).sort((a, b) => a.number - b.number);
  const lessonCount = id => groupsFor(id).reduce((t, g) => t + g.items.length, 0);

  let index = [];   // mọi từ, dùng cho tìm kiếm
  function buildIndex() {
    index = [];
    window.lessons.forEach(l => groupsFor(l.id).forEach(g => g.items.forEach(it => {
      index.push({ level: l.level, lesson: l, item: it, hay: norm(it.join(" ")) });
    })));
  }

  // ----- Hiển thị danh sách theo Lektion -----
  function renderList() {
    const parts = [];
    ["A2", "A1"].forEach((lv, idx) => {
      const ls = sortedLessons(lv).filter(l => lessonCount(l.id) > 0);
      const total = ls.reduce((t, l) => t + lessonCount(l.id), 0);
      parts.push(`<div class="level-divider${idx ? " is-boundary" : ""}" id="lv-${lv}"><h2>Từ vựng ${lv}</h2><span>${total ? `${ls.length} bài · ${total} từ` : ""}</span></div>`);
      if (!ls.length) parts.push(`<div class="empty-note">Từ vựng ${lv} đang được cập nhật.</div>`);
      ls.forEach(l => {
        // Gộp mọi Abschnitt thành một danh sách duy nhất cho mỗi Lektion
        const rows = groupsFor(l.id).map(g => g.items.map(it => row(it, "")).join("")).join("");
        parts.push(`<details class="section-card lek" id="${l.id}">
          <summary>
            <div class="stamp-mark">${String(l.number).padStart(2, "0")}</div>
            <div class="section-titles"><span class="section-title-de">${l.level} · ${esc(l.titleDe)}</span>
            <span class="section-title-vi">Bài ${l.number} · ${lessonCount(l.id)} từ</span></div>
          </summary>
          <div class="wl-list">${rows}</div></details>`);
      });
    });
    root.innerHTML = parts.join("");
    const a2 = index.filter(e => e.level === "A2").length, a1 = index.filter(e => e.level === "A1").length;
    countEl.textContent = `Tổng ${index.length} từ (A2: ${a2} · A1: ${a1})`;
  }

  // ----- Tìm kiếm trong tất cả từ vựng -----
  function renderResults(q) {
    const nq = norm(q);
    const hits = index.filter(e => e.hay.includes(nq));
    countEl.textContent = hits.length ? `${hits.length} kết quả cho “${q}”` : `Không có kết quả cho “${q}”`;
    root.innerHTML = hits.length
      ? `<section class="section-card"><div class="wl-list">${hits.map(e => row(e.item, nq, `${e.level} · Bài ${e.lesson.number}`)).join("")}</div></section>`
      : `<div class="empty-note">Không tìm thấy từ nào khớp. Thử gõ ngắn hơn hoặc bỏ dấu.</div>`;
  }

  function refresh() {
    const q = input.value.trim();
    if (q) renderResults(q); else renderList();
  }
  input.addEventListener("input", refresh);

  // Đo chiều cao header (nếu đang dính) để thanh tìm kiếm bám ngay bên dưới
  function syncHeaderHeight() {
    const hd = document.querySelector(".site-header");
    const sticky = hd && getComputedStyle(hd).position === "sticky";
    document.documentElement.style.setProperty("--header-h", (sticky ? hd.offsetHeight : 0) + "px");
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);

  // ----- Khởi động -----
  root.innerHTML = `<div class="empty-note">Đang tải từ vựng…</div>`;
  const tasks = window.lessons.filter(l => l.parts && l.parts.woerter).map(l => load(`data/words/${l.id}.js`));
  if (SHOW_LEGACY) {
    tasks.push(load("js/tu_vung.js").then(() => {
      (window.lessonData || []).slice().sort((a, b) => a.id.localeCompare(b.id)).forEach(e => {
        const id = DATE_TO_LESSON[e.id];
        if (id) (legacyBy[id] = legacyBy[id] || []).push(e);
      });
    }));
  }
  Promise.all(tasks).then(() => { buildIndex(); refresh(); });
})();
