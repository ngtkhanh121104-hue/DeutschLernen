/* A1 · Bài 3 · Was sind Sie von Beruf? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l03"] = {
    grammatik: [
      { id: "definiter-artikel-singular", titleDe: "📝 Nomen und Artikel: definiter Artikel im Singular",
        blocks: [
          { type: "text", html: "Danh từ tiếng Đức có 3 giống. Mạo từ xác định (<strong>der / das / die</strong>) cho biết giống của danh từ ở Nominativ." },
          { type: "table", head: ["Giống", "Mạo từ xác định", "Danh từ mẫu"], rows: [
            ["Đực", "der", "der Schlüssel"], ["Trung", "das", "das Buch"], ["Cái", "die", "die Tasche"] ] },
          { type: "note", html: "Mỗi danh từ có giống riêng, cần <strong>học cùng mạo từ</strong> ngay từ đầu." }
        ] },
      { id: "personalpronomen-er-es-sie", titleDe: "👉 Personalpronomen im Singular: er / es / sie",
        blocks: [
          { type: "text", html: "Khi nói về một đồ vật đã nhắc đến, dùng đại từ tương ứng với <strong>giống</strong> của danh từ đó." },
          { type: "table", head: ["Danh từ", "Đại từ thay thế"], rows: [
            ["der Kleber (đực)", "er"], ["das Papier (trung)", "es"], ["die Schere (cái)", "sie"] ] }
        ] },
      { id: "konjugation-arbeiten", titleDe: "⚙️ Verbkonjugation: arbeiten",
        blocks: [
          { type: "table", head: ["", "arbeiten"], rows: [
            ["ich", "arbeite"], ["du", "arbeitest"], ["er / sie", "arbeitet"], ["wir", "arbeiten"], ["ihr", "arbeitet"], ["sie / Sie", "arbeiten"] ] },
          { type: "note", html: "Thân từ kết thúc bằng <strong>-t</strong> nên thêm <strong>-e-</strong> trước đuôi <em>-st</em> và <em>-t</em> để dễ đọc (du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t)." }
        ] },
      { id: "wortbildung-in", titleDe: "🧱 Wortbildung mit -in",
        blocks: [
          { type: "text", html: "Thêm <strong>-in</strong> vào tên nghề của nam để tạo tên nghề của nữ (mạo từ đổi thành <strong>die</strong>)." },
          { type: "table", head: ["Nam", "Nữ"], rows: [
            ["der Lehrer", "die Lehrerin"], ["der Arzt", "die Ärztin"], ["der Koch", "die Köchin"], ["⚠ der Hausmann", "⚠ die Hausfrau"] ] },
          { type: "note", html: "Một số từ thêm <strong>umlaut</strong> (a → ä, o → ö). <strong>Hausmann / Hausfrau</strong> là trường hợp đặc biệt, không thêm -in." }
        ] },
      { id: "praepositionen-als-bei", titleDe: "📌 Präpositionen: als und bei",
        blocks: [
          { type: "table", head: ["Giới từ", "Dùng để nói", "Cấu trúc"], rows: [
            ["als (modal)", "nghề, vai trò đang làm", "arbeiten als + nghề"],
            ["bei (lokal)", "nơi làm việc, công ty", "arbeiten bei + tên công ty"] ] }
        ] },
      { id: "negation-nicht", titleDe: "🚫 Satznegation mit nicht",
        blocks: [
          { type: "table", head: ["Câu khẳng định", "Câu phủ định"], rows: [
            ["Emine wohnt in Berlin.", "Emine wohnt nicht in Berlin."],
            ["Ich bin verheiratet.", "Ich bin nicht verheiratet."] ] },
          { type: "note", html: "<strong>nicht</strong> đứng trước phần cần phủ định (nơi chốn, tính từ) hoặc cuối câu khi phủ định cả hành động. Phủ định danh từ bằng <strong>kein</strong> sẽ học ở Bài 4." }
        ] }
    ],
    kommunikation: [
      { id: "fragen-wo-etwas-ist", titleDe: "🔍 Fragen, wo etwas ist",
        groups: [ { label: "Hỏi vị trí đồ vật", items: [ q("Wo ist denn der Kleber / das Papier / die Schere?", "Keo / giấy / cái kéo đâu rồi?", "Hier ist er (der Kleber) / es (das Papier) / sie (die Schere).", "Nó đây.") ] } ] },
      { id: "ueber-den-beruf-sprechen", titleDe: "💼 Über den Beruf sprechen",
        groups: [
          { label: "Hỏi nghề nghiệp", items: [ q("Was bist du von Beruf? / Was sind Sie von Beruf?", "Bạn làm nghề gì? / Ngài làm nghề gì?", "Ich bin ... von Beruf.", "Nghề của tôi là ..."), q("Was machst du beruflich?", "Công việc hiện tại của bạn là gì?", "Ich arbeite als ...", "Tôi làm việc với vai trò ...") ] },
          { label: "Nói nơi làm việc và việc học", items: [
            { satz: { de: "Ich arbeite bei ... (tên công ty).", vi: "Tôi làm việc tại ..." } },
            { satz: { de: "Ich mache eine Ausbildung als / zur / zum ...", vi: "Tôi đang học nghề ..." } },
            { satz: { de: "Ich bin Student / Studentin.", vi: "Tôi là sinh viên." } },
            { satz: { de: "Ich arbeite im Moment nicht.", vi: "Hiện tại tôi không đi làm." } } ] }
        ] },
      { id: "zustimmen-und-widersprechen", titleDe: "✅ Zustimmen und widersprechen",
        groups: [ { label: "Đồng ý hoặc phủ nhận", items: [
          q("Du kommst aus Polen.", "Bạn đến từ Ba Lan.", "Ja, das stimmt.", "Vâng, đúng vậy."),
          q("Du kommst aus Polen.", "Bạn đến từ Ba Lan.", "Nein, das stimmt nicht. Ich komme aus ...", "Không, không đúng. Tôi đến từ ...") ] } ] }
    ],
    woerter: []
  };
})();
