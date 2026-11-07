/* A1 · Bài 4 · Das ist meine Familie. */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l04"] = {
    grammatik: [
      { id: "possessivartikel-mein-dein", titleDe: "💍 Possessivartikel: mein(e), dein(e)",
        blocks: [
          { type: "text", html: "Mạo từ sở hữu đứng trước danh từ. Đuôi phụ thuộc vào <strong>giống</strong> của danh từ theo sau (ở Nominativ)." },
          { type: "table", head: ["Chủ sở hữu", "der (đực)", "das (trung)", "die (cái) / số nhiều"], rows: [
            ["ich (của tôi)", "mein Vater", "mein Kind", "meine Mutter / meine Eltern"],
            ["du (của bạn)", "dein Vater", "dein Kind", "deine Mutter / deine Eltern"] ] },
          { type: "note", html: "Với danh từ giống cái hoặc số nhiều, thêm đuôi <strong>-e</strong> (meine, deine). Giống đực và giống trung giữ nguyên." }
        ] },
      { id: "indefiniter-und-negativartikel", titleDe: "📝 Indefiniter Artikel und Negativartikel im Singular",
        blocks: [
          { type: "table", head: ["Giống", "Mạo từ xác định", "Mạo từ không xác định", "Mạo từ phủ định", "Danh từ mẫu"], rows: [
            ["Đực", "der", "ein", "kein", "Baum"], ["Trung", "das", "ein", "kein", "Tattoo"], ["Cái", "die", "eine", "keine", "Sonne"] ] },
          { type: "note", html: "<strong>ein / eine</strong> = một. <strong>kein / keine</strong> phủ định danh từ có mạo từ không xác định. Chỉ giống cái thêm <strong>-e</strong>. Số nhiều không có ein, phủ định bằng <strong>keine</strong>." }
        ] },
      { id: "genitiv-bei-namen", titleDe: "🔗 Genitiv bei Namen",
        blocks: [
          { type: "text", html: "Chỉ sở hữu của một người: thêm <strong>-s</strong> vào sau tên, đứng <strong>trước</strong> danh từ." },
          { type: "table", head: ["Cấu trúc", "Ví dụ", "Nghĩa"], rows: [
            ["Tên + s + danh từ", "Veras Sohn", "Con trai của Vera"], ["Tên + s + danh từ", "Samirs Mutter", "Mẹ của Samir"] ] }
        ] },
      { id: "konjunktionen-und-oder", titleDe: "➕ Konjunktionen: und, oder",
        blocks: [
          { type: "table", head: ["Liên từ", "Nghĩa", "Chức năng"], rows: [
            ["und", "và", "nối hai thành phần hoặc hai câu"], ["oder", "hoặc", "đưa ra sự lựa chọn"] ] },
          { type: "note", html: "<strong>und</strong> và <strong>oder</strong> đứng giữa hai thành phần và <strong>không làm đổi</strong> vị trí động từ trong mệnh đề sau." }
        ] }
    ],
    kommunikation: [
      { id: "ueber-die-familie-sprechen", titleDe: "👨‍👩‍👧‍👦 Über die Familie sprechen",
        groups: [
          { label: "Hỏi một người là ai", items: [ q("Wer ist Nadia?", "Nadia là ai?", "(Nadia ist) Samirs Mutter.", "Mẹ của Samir.") ] },
          { label: "Xác nhận quan hệ", items: [
            q("Ist das deine Schwester?", "Đây có phải chị/em gái bạn không?", "Ja, das ist richtig. Das ist meine Schwester.", "Vâng, đúng vậy. Đây là chị/em gái tôi."),
            q("Ist das deine Schwester?", "Đây có phải chị/em gái bạn không?", "Nein, das ist nicht meine Schwester. Das ist meine Cousine.", "Không, đây không phải chị/em gái tôi. Đây là chị/em họ của tôi.") ] },
          { label: "Hỏi lựa chọn", items: [ q("Ist das dein Vater oder dein Onkel?", "Đây là bố hay chú/bác của bạn?", "Mein Vater.", "Bố của tôi.") ] }
        ] },
      { id: "etwas-vermuten", titleDe: "💭 Etwas vermuten",
        groups: [ { label: "Nói điều mình đoán", items: [
          { satz: { de: "Ich glaube, das ist eine Blume.", vi: "Tôi nghĩ đó là một bông hoa." } },
          q("Ich glaube, das ist ein Baum.", "Tôi nghĩ đó là một cái cây.", "Ja, das glaube / denke ich auch.", "Vâng, tôi cũng nghĩ vậy."),
          q("Ich glaube, das ist ein Baum.", "Tôi nghĩ đó là một cái cây.", "Nein, das ist (doch) kein Baum. Das ist eine Blume.", "Không, đó không phải cái cây. Đó là một bông hoa.") ] } ] },
      { id: "nach-sachen-fragen", titleDe: "❔ Nach Sachen / Gegenständen fragen",
        groups: [ { label: "Hỏi đây là vật gì", items: [ q("Was ist das?", "Đây là gì?", "(Das ist) ein Baum.", "Đó là một cái cây.") ] } ] }
    ],
    woerter: []
  };
})();
