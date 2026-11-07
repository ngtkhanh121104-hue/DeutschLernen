/* A1 · Bài 14 · Das kriegen wir hin! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l14"] = {
    grammatik: [
      { id: "fragepronomen-welch-dies", titleDe: "👉 Pronomen: Fragepronomen welch- und Demonstrativpronomen dies-",
        blocks: [
          { type: "text", html: "<strong>welch-</strong> = nào (dùng để hỏi chọn). <strong>dies-</strong> = này, đó. Đuôi giống đuôi của mạo từ xác định." },
          { type: "table", head: ["Giống", "Nominativ welch-", "Nominativ dies-", "Akkusativ welch-", "Akkusativ dies-"], rows: [
            ["Đực (Anzug)", "Welcher Anzug", "Dieser", "Welchen Anzug", "Diesen"],
            ["Trung (Hemd)", "Welches Hemd", "Dieses", "Welches Hemd", "Dieses"],
            ["Cái (Jacke)", "Welche Jacke", "Diese", "Welche Jacke", "Diese"],
            ["Số nhiều (Schuhe)", "Welche Schuhe", "Diese", "Welche Schuhe", "Diese"] ] },
          { type: "note", html: "Chỉ <strong>giống đực</strong> đổi ở Akkusativ: <em>welcher → welchen</em>, <em>dieser → diesen</em>." }
        ] },
      { id: "personalpronomen-akkusativ", titleDe: "👤 Pronomen: Personalpronomen im Akkusativ",
        blocks: [
          { type: "table", head: ["Nominativ", "Akkusativ", "Nghĩa"], rows: [
            ["ich", "mich", "tôi"], ["du", "dich", "bạn"], ["er", "ihn", "anh ấy, nó (der)"], ["es", "es", "nó (das)"], ["sie", "sie", "cô ấy, nó (die)"],
            ["wir", "uns", "chúng tôi"], ["ihr", "euch", "các bạn"], ["sie / Sie", "sie / Sie", "họ / ngài"] ] },
          { type: "note", html: "Chỉ <strong>er → ihn</strong> khác với Nominativ; ngôi 1 và ngôi 2 đổi hình thức riêng (mich, dich, uns, euch)." }
        ] },
      { id: "praeposition-fuer-akkusativ", titleDe: "🎁 Modale Präposition: für + Akkusativ",
        blocks: [
          { type: "table", head: ["Người", "für + Akkusativ"], rows: [
            ["ich", "für mich"], ["du", "für dich"], ["er / es / sie", "für ihn / es / sie"], ["wir", "für uns"], ["ihr", "für euch"], ["sie / Sie", "für sie / Sie"] ] }
        ] },
      { id: "komparativ-superlativ", titleDe: "📈 Adjektive: Komparativ und Superlativ: gut, viel, gern",
        blocks: [
          { type: "table", head: ["Cơ bản", "So sánh hơn (Komparativ)", "So sánh nhất (Superlativ)"], rows: [
            ["gut (tốt)", "besser", "am besten"], ["viel (nhiều)", "mehr", "am meisten"], ["gern (thích)", "lieber", "am liebsten"] ] },
          { type: "note", html: "Ba từ này có dạng so sánh <strong>bất quy tắc</strong>, cần học thuộc. Superlativ luôn có dạng <strong>am … -(e)sten</strong>." }
        ] },
      { id: "ordinalzahlen-datum", titleDe: "📅 Ordinalzahlen: Datum",
        blocks: [
          { type: "text", html: "Nói ngày với <strong>am + số thứ tự + -en</strong> (Wann? → am …). Từ ngày 1 đến 19 thêm <strong>-ten</strong>, từ 20 thêm <strong>-sten</strong>." },
          { type: "table", head: ["Ngày", "Cách nói (am …)", "Ghi chú"], rows: [
            ["1.", "am ersten", "⚠ đặc biệt"], ["2.", "am zweiten", "số + -ten"], ["3.", "am dritten", "⚠ đặc biệt"], ["4.", "am vierten", "số + -ten"],
            ["7.", "am siebten", "⚠ bỏ -en- của sieben"], ["8.", "am achten", "⚠ chỉ thêm -en"], ["19.", "am neunzehnten", "số + -ten"],
            ["20.", "am zwanzigsten", "từ 20 thêm -sten"], ["31.", "am einunddreißigsten", "từ 20 thêm -sten"] ] },
          { type: "table", head: ["Khoảng thời gian", "Cách nói"], rows: [ ["12. – 26. September", "vom zwölften bis (zum) sechsundzwanzigsten September"] ] }
        ] }
    ],
    kommunikation: [
      { id: "ueber-kleidung-sprechen", titleDe: "👕 Über Kleidung sprechen",
        groups: [ { label: "Mô tả quần áo", items: [
          s("Die Frau / Der Mann trägt einen / eine / ein ...", "Người phụ nữ / người đàn ông mặc ..."),
          s("Der Pullover / Das Hemd / Die Hose ist grau / weiß.", "Chiếc áo len / sơ mi / quần màu xám / trắng."),
          s("Die Hose ist zu kurz / zu lang / zu ...!", "Chiếc quần quá ngắn / quá dài / quá ...!") ] } ] },
      { id: "gefallen-missfallen-14", titleDe: "👍 Gefallen / Missfallen ausdrücken",
        groups: [ { label: "Chọn giữa hai món", items: [
          s("Hier habe ich zwei Anzüge.", "Ở đây tôi có hai bộ vest."),
          q("Welcher Anzug gefällt dir?", "Bạn thích bộ vest nào?", "Dieser.", "Bộ này."),
          q("Welchen Anzug findest du schön?", "Bạn thấy bộ vest nào đẹp?", "Diesen.", "Bộ này.") ] } ] },
      { id: "vorlieben-und-vergleiche", titleDe: "⚖️ Vorlieben ausdrücken und Vergleiche ziehen",
        groups: [ { label: "So sánh", items: [
          s("Der / Das / Die ... gefällt mir gut. Aber ... gefällt mir besser.", "... tôi thích. Nhưng ... tôi thích hơn."),
          s("Ich esse gern Reis. Aber ich esse lieber Nudeln. Am liebsten esse ich Pizza.", "Tôi thích ăn cơm. Nhưng tôi thích ăn mì hơn. Thích nhất là ăn pizza.") ] } ] },
      { id: "ueber-termine-sprechen", titleDe: "🗓️ Über Termine sprechen",
        groups: [ { label: "Nói về lịch hẹn", items: [
          s("Am vierten Sechsten hat Amadou um 17 Uhr Training.", "Ngày 4 tháng 6, Amadou có buổi tập lúc 17 giờ."),
          s("Am ... hat er um ... Uhr ein Fußballspiel.", "Vào ngày ... anh ấy có trận bóng đá lúc ... giờ.") ] } ] },
      { id: "wuensche-aeussern-und-reagieren", titleDe: "🙏 Wünsche äußern und auf Wünsche reagieren",
        groups: [ { label: "Nói điều mong muốn và đáp lại", items: [
          q("Bis wann brauchen Sie die Sachen?", "Đến khi nào ông/bà cần những thứ này?", "Ich brauche sie bis Freitag.", "Tôi cần chúng đến thứ Sáu."),
          q("Können Sie die Sachen bis Freitag fertig machen?", "Ông/bà có thể làm xong đến thứ Sáu không?", "Die Sachen sind leider erst in einer Woche fertig.", "Tiếc là một tuần nữa mới xong."),
          q("Die Sachen sind erst in einer Woche fertig.", "Một tuần nữa mới xong.", "Das ist kein Problem für uns. Wir können warten.", "Không vấn đề gì. Chúng tôi có thể đợi.") ] } ] },
      { id: "kunden-und-dienstleistungsgespraeche", titleDe: "🛍️ Kunden- und Dienstleistungsgespräche führen",
        groups: [ { label: "Ở cửa hàng, tiệm sửa", items: [
          q("Guten Tag. Was kann ich für Sie tun?", "Xin chào. Tôi có thể giúp gì ạ?", "Mein Handy ist kaputt. Können Sie es reparieren?", "Điện thoại của tôi hỏng. Ông/bà sửa được không?"),
          q("Können Sie es reparieren?", "Ông/bà sửa được không?", "Ja, das kriegen wir hin.", "Được, chúng tôi làm được."),
          q("Was kostet das?", "Cái này giá bao nhiêu?", "Das kostet ungefähr ... Euro.", "Khoảng ... euro."),
          s("Vielen Dank. Auf Wiedersehen.", "Cảm ơn nhiều. Tạm biệt.") ] } ] },
      { id: "meinung-aeussern-und-begruenden", titleDe: "💬 Eine Meinung äußern und begründen",
        groups: [ { label: "Nêu và giải thích ý kiến", items: [
          s("Für mich ist das nicht nett.", "Với tôi, điều đó không tử tế."),
          q("Ich finde das nicht gut.", "Tôi thấy điều đó không hay.", "Ja, das finde ich auch! / Wirklich? Also, ich finde das schön.", "Vâng, tôi cũng thấy vậy! / Thật sao? Còn tôi thấy nó đẹp.") ] } ] },
      { id: "wichtigkeit-ausdruecken", titleDe: "⭐ Wichtigkeit ausdrücken",
        groups: [ { label: "Nói điều quan trọng", items: [
          s("Für mich ist ... wichtig.", "Với tôi, ... rất quan trọng."),
          q("Warum ist der vierte Achte wichtig für dich?", "Tại sao ngày 4 tháng 8 quan trọng với bạn?", "Am vierten August habe ich Geburtstag.", "Ngày 4 tháng 8 là sinh nhật của tôi.") ] } ] }
    ],
    woerter: []
  };
})();
