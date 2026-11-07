/* A1 · Bài 1 · Wie geht’s?  — Grammatik + Kommunikation (Wörter: làm sau). */
window.lessonContent = window.lessonContent || {};
window.lessonContent["a1-l01"] = {
  grammatik: [
    { id: "personalpronomen", titleDe: "👤 Personalpronomen",
      blocks: [
        { type: "text", html: "Đại từ nhân xưng làm <strong>chủ ngữ</strong> trong câu. Ở bài này học các đại từ số ít và <strong>sie / Sie</strong>; <strong>wir, ihr</strong> học ở Bài 2." },
        { type: "table", head: ["Ngôi", "Tiếng Đức", "Ý nghĩa / cách dùng"], rows: [
          ["Ngôi 1, số ít", "ich", "Tôi"],
          ["Ngôi 2, số ít", "du", "Bạn (thân mật, bằng vai phải lứa)"],
          ["Ngôi 3, số ít", "er / sie", "Anh ấy / cô ấy"],
          ["Ngôi 3, số nhiều", "sie", "Họ"],
          ["Lịch sự", "Sie", "Ngài, quý vị (trang trọng; luôn viết hoa chữ S)"] ] },
        { type: "note", html: "<strong>sie</strong> có thể là “cô ấy” hoặc “họ”, còn <strong>Sie</strong> là “ngài”. Nhìn <strong>dạng động từ</strong> để phân biệt: <em>sie kommt</em> (cô ấy đến), <em>sie kommen</em> (họ đến), <em>Sie kommen</em> (ngài đến)." }
      ] },
    { id: "verbkonjugation-praesens", titleDe: "⚙️ Verbkonjugation im Präsens: kommen, wohnen, heißen, sein",
      blocks: [
        { type: "text", html: "Động từ có quy tắc: bỏ đuôi <strong>-en</strong> rồi thêm đuôi theo ngôi. Riêng <strong>sein</strong> là bất quy tắc, cần học thuộc." },
        { type: "table", head: ["", "kommen", "wohnen", "heißen", "sein"], rows: [
          ["ich", "komme", "wohne", "heiße", "bin"],
          ["du", "kommst", "wohnst", "heißt", "bist"],
          ["er / sie", "kommt", "wohnt", "heißt", "ist"],
          ["sie / Sie", "kommen", "wohnen", "heißen", "sind"] ] },
        { type: "note", html: "Với <strong>heißen</strong>, ngôi <em>du</em> chỉ thêm <strong>-t</strong> (du heißt), vì thân từ đã kết thúc bằng ß." }
      ] },
    { id: "w-fragen-satzstruktur", titleDe: "❓ W-Fragen und Verbposition",
      blocks: [
        { type: "text", html: "Trong câu hỏi có từ để hỏi (<strong>W-Frage</strong>) và trong câu trần thuật (<strong>Aussage</strong>), động từ đã chia luôn đứng ở <strong>vị trí số 2</strong>." },
        { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (động từ)", "Phần còn lại"], rows: [
          ["W-Frage", "Wer", "ist", "das?"],
          ["W-Frage", "Wie", "heißen", "Sie?"],
          ["W-Frage", "Woher", "kommst", "du?"],
          ["Aussage", "Das", "sind", "Alma und Maria."],
          ["Aussage", "Ich", "heiße", "Alfred Maus."],
          ["Aussage", "Ich", "komme", "aus Spanien."] ] },
        { type: "table", head: ["Từ hỏi", "Nghĩa"], rows: [
          ["Wer?", "Ai?"],
          ["Wie?", "Như thế nào? / Tên là gì?"],
          ["Woher?", "Từ đâu?"],
          ["Wo?", "Ở đâu?"] ] }
      ] },
    { id: "praeposition-aus-in", titleDe: "📍 Lokale Präpositionen: aus und in",
      blocks: [
        { type: "text", html: "Dùng <strong>aus</strong> (từ) để nói quê quán và <strong>in</strong> (ở) để nói nơi sống, với tên thành phố và đa số các nước." },
        { type: "table", head: ["", "Thành phố, đa số nước", "⚠ die Türkei, die Schweiz", "⚠ die USA"], rows: [
          ["Woher? (aus)", "aus Wien / Österreich / Spanien", "aus der Türkei / Schweiz", "aus den USA"],
          ["Wo? (in)", "in Berlin / Deutschland / Spanien", "in der Türkei / Schweiz", "in den USA"] ] },
        { type: "note", html: "Các tên nước có mạo từ (<strong>die Türkei, die Schweiz, die USA</strong>) cần giữ mạo từ: <em>der</em> cho Türkei/Schweiz, <em>den</em> cho USA." }
      ] }
  ],
  kommunikation: [
    { id: "nach-dem-namen-fragen", titleDe: "👤 Nach dem Namen fragen und jemanden vorstellen",
      groups: [
        { label: "Hỏi tên với “Wer” (Ai)", items: [ { frage: { de: "Wer bist du? / Wer sind Sie?", vi: "Bạn là ai? / Ngài là ai?" }, antwort: { de: "Ich bin ... / Mein Name ist ...", vi: "Tôi là ... / Tên tôi là ..." } } ] },
        { label: "Hỏi tên với “Wie” (Như thế nào)", items: [ { frage: { de: "Wie heißt du? / Wie heißen Sie?", vi: "Bạn tên là gì? / Ngài tên là gì?" }, antwort: { de: "Ich heiße ...", vi: "Tôi tên là ..." } } ] },
        { label: "Giới thiệu người khác", items: [ { frage: { de: "Wer ist das?", vi: "Đây là ai?" }, antwort: { de: "Das ist ... / Das sind ... und ...", vi: "Đây là ... / Đây là ... và ..." } } ] }
      ] },
    { id: "buchstabieren", titleDe: "🔤 Etwas buchstabieren",
      groups: [
        { label: "Hỏi cách viết", items: [ { frage: { de: "Wie bitte? Wie schreibt man das?", vi: "Cái gì cơ ạ? Từ đó viết như thế nào?" }, antwort: { de: "Ich buchstabiere: E-R-I-T-R-E-A.", vi: "Tôi đánh vần: E-R-I-T-R-E-A." } } ] },
        { label: "Xin nhắc lại", items: [ { frage: { de: "Entschuldigung? Noch einmal, bitte.", vi: "Xin lỗi? Vui lòng nhắc lại một lần nữa." }, antwort: { de: "E-R-I-T-R-E-A.", vi: "E-R-I-T-R-E-A." } } ] }
      ] },
    { id: "herkunft-und-wohnort", titleDe: "🌍 Über die Herkunft und den Wohnort sprechen",
      groups: [
        { label: "Hỏi quê quán", items: [ { frage: { de: "Woher kommst du? / Woher kommen Sie?", vi: "Bạn đến từ đâu? / Ngài đến từ đâu?" }, antwort: { de: "Ich komme aus ... / Aus ...", vi: "Tôi đến từ ..." } } ] },
        { label: "Hỏi nơi sống", items: [ { frage: { de: "Wo wohnst du? / Wo wohnen Sie?", vi: "Bạn sống ở đâu? / Ngài sống ở đâu?" }, antwort: { de: "Ich wohne in ...", vi: "Tôi sống ở ..." } } ] }
      ] },
    { id: "befinden", titleDe: "❤️ Über das Befinden sprechen",
      groups: [
        { label: "Hỏi thăm sức khỏe", items: [ { frage: { de: "Wie geht’s? / Wie geht’s dir? / Wie geht es Ihnen?", vi: "Bạn khỏe không? / Ngài có khỏe không?" }, antwort: { de: "Sehr gut. / Gut. / Es geht. / Nicht so gut.", vi: "Rất tốt. / Tốt. / Tạm được. / Không tốt lắm." } } ] },
        { label: "Hỏi lại người kia", items: [ { frage: { de: "Und dir? / Und Ihnen?", vi: "Còn bạn? / Còn ngài?" }, antwort: { de: "(Auch) sehr gut. / gut. / nicht so gut. / Es geht. Danke.", vi: "(Cũng) rất tốt / tốt / không tốt lắm / tạm được. Cảm ơn." } } ] }
      ] },
    { id: "etwas-vermuten", titleDe: "💭 Etwas vermuten",
      groups: [
        { label: "Đoán tình trạng người khác", items: [ { frage: { de: "Wie geht’s Alma?", vi: "Alma khỏe không?" }, antwort: { de: "Ich denke, sehr gut.", vi: "Tôi nghĩ là rất tốt." } } ] }
      ] },
    { id: "zustimmen", titleDe: "✅ Zustimmen",
      groups: [
        { label: "Xác nhận thông tin", items: [
          { frage: { de: "Alma kommt aus Spanien.", vi: "Alma đến từ Tây Ban Nha." }, antwort: { de: "Richtig.", vi: "Đúng." } } ] }
      ] }
  ],
  woerter: []
};
