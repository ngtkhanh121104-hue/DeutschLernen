/* A2 · Bài 4 · Der erste Arbeitstag */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l04"] = {
    grammatik: [
      { id: "praeposition-fuer-ueber", titleDe: "🕒 Temporale Präpositionen: für, über + Akkusativ",
        blocks: [
          { type: "table", head: ["Giới từ", "Ý nghĩa", "Cụm mẫu"], rows: [
            ["für", "khoảng thời gian dự định", "für einen Monat, für ein Jahr, für eine Woche, für drei Monate"],
            ["über", "hơn, lâu hơn khoảng thời gian đó", "über einen Monat, über ein Jahr, über eine Woche, über drei Monate"] ] }
        ] },
      { id: "praepositionen-seit-von-an-zwischen", titleDe: "🕒 Temporale Präpositionen: seit, von … an, zwischen + Dativ",
        blocks: [
          { type: "table", head: ["Giới từ", "Ý nghĩa", "Cụm mẫu"], rows: [
            ["seit", "từ một thời điểm trong quá khứ đến nay", "seit einem Monat, seit einem Jahr, seit einer Woche, seit drei Monaten"],
            ["von … an", "từ một thời điểm trở đi", "von Montag an, von August an, vom 16. September an"],
            ["zwischen … und …", "trong khoảng giữa hai mốc", "zwischen 12 und 15 Uhr, zwischen August und September, zwischen dem ersten und (dem) achten Mai"] ] }
        ] },
      { id: "praepositionen-wiederholung", titleDe: "🔁 Wiederholung: vor, nach, ab, von … bis",
        blocks: [
          { type: "table", head: ["Giới từ", "Ý nghĩa", "Cụm mẫu"], rows: [
            ["vor / nach", "trước / sau", "vor einem Monat, nach dem Studium, nach der Ausbildung, vor drei Monaten"],
            ["ab", "từ thời điểm đó trở đi (tương lai)", "ab Montag, ab April, ab dem 22. Oktober"],
            ["von … bis", "từ … đến …", "von 19 bis 21 Uhr, von August bis September, vom 15. März bis zum 29. März"] ] }
        ] },
      { id: "konjunktion-wenn", titleDe: "🔗 Sätze: Konjunktion wenn",
        blocks: [
          { type: "text", html: "<strong>wenn</strong> = nếu, khi. Động từ trong mệnh đề <strong>wenn</strong> đứng <strong>cuối câu</strong>. Nếu mệnh đề <strong>wenn</strong> đứng đầu, mệnh đề chính bắt đầu bằng <strong>động từ</strong> (có thể thêm <em>dann</em>)." },
          { type: "table", head: ["Mệnh đề wenn", "Mệnh đề chính"], rows: [
            ["Wenn du eine Idee hast,", "komm zu mir."],
            ["Wenn Sie mehr über die Firma wissen möchten,", "(dann) finden Sie im Intranet Informationen."],
            ["Wenn Sie Fragen haben,", "helfen Ihnen die Personalabteilung und der Betriebsrat gern."] ] },
          { type: "table", head: ["Mệnh đề chính", "Mệnh đề wenn"], rows: [
            ["Komm zu mir,", "wenn du eine Idee hast."],
            ["Die Personalabteilung hilft Ihnen gern,", "wenn Sie Fragen haben."] ] }
        ] }
    ],
    kommunikation: [
      { id: "sich-jemanden-formell-vorstellen", titleDe: "🤝 Sich / jemanden formell vorstellen",
        groups: [ { label: "Giới thiệu trang trọng", items: [
          q("Darf ich Ihnen ... vorstellen?", "Tôi xin giới thiệu ... với ông/bà.", "Freut mich. Ich heiße ...", "Rất vui được gặp. Tôi tên là ...") ] } ] },
      { id: "nachfragen-nicht-verstehen", titleDe: "🔄 Nachfragen / etwas nicht verstehen",
        groups: [ { label: "Hỏi lại khi chưa hiểu", items: [
          s("Ich glaube, das habe ich noch nicht richtig verstanden.", "Tôi nghĩ tôi vẫn chưa hiểu đúng."),
          s("Kannst du / Können Sie das noch einmal erklären?", "Bạn / ông bà có thể giải thích lại một lần nữa không?"),
          s("Entschuldigung, du meinst / Sie meinen also: ...", "Xin lỗi, ý bạn / ông bà là: ..."),
          s("Kannst du / Können Sie das noch einmal wiederholen?", "Bạn / ông bà có thể nhắc lại một lần nữa không?"),
          s("Ist das jetzt klar?", "Giờ đã rõ chưa?") ] } ] }
    ],
    woerter: []
  };
})();
