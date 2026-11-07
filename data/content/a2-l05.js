/* A2 · Bài 5 · In der Schule */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l05"] = {
    grammatik: [
      { id: "verbindungsadverb-deshalb", titleDe: "🔗 Sätze: Verbindungsadverb deshalb",
        blocks: [
          { type: "text", html: "<strong>deshalb</strong> = vì vậy, do đó. Nó chỉ <strong>kết quả</strong> của điều vừa nói. Sau <strong>deshalb</strong> động từ đứng ngay <strong>vị trí số 2</strong>." },
          { type: "table", head: ["Mệnh đề trước", "Vị trí 1", "Vị trí 2 (động từ)", "Phần còn lại"], rows: [
            ["Ich muss arbeiten.", "Deshalb", "ist", "Thien nun allein zu Hause."],
            ["Ich muss arbeiten,", "deshalb", "ist", "Thien nun allein zu Hause."],
            ["Es gibt Probleme mit Thien.", "Deshalb", "möchte", "ich gern mal mit Ihnen sprechen."] ] },
          { type: "note", html: "Khác với <strong>weil</strong> (động từ ở cuối), sau <strong>deshalb</strong> trật tự câu vẫn là: <strong>deshalb + động từ + chủ ngữ</strong>." }
        ] },
      { id: "possessivartikel-unser-euer-ihr", titleDe: "👪 Nomen und Artikel: Possessivartikel unser-, euer-, ihr-, Ihr-",
        blocks: [
          { type: "table", head: ["Đại từ", "Mạo từ sở hữu", "Có đuôi -e (cái / số nhiều)"], rows: [
            ["ich", "mein-", "meine"], ["du", "dein-", "deine"], ["er / es", "sein-", "seine"], ["sie", "ihr-", "ihre"],
            ["wir", "unser-", "unsere"], ["ihr", "euer-", "eure"], ["sie", "ihr-", "ihre"], ["Sie", "Ihr-", "Ihre"] ] },
          { type: "note", html: "Với <strong>euer-</strong>, khi thêm đuôi sẽ bỏ <strong>e</strong>: euer → <strong>eure</strong>. <strong>Ihr-</strong> (trang trọng) luôn viết hoa chữ I." }
        ] },
      { id: "possessivartikel-nom-akk-dat", titleDe: "📚 Possessivartikel im Nominativ, Akkusativ und Dativ",
        blocks: [
          { type: "table", head: ["Cách", "Giống", "unser-", "euer-", "ihr-", "Ihr-"], rows: [
            ["Nominativ", "der Lehrer", "unser", "euer", "ihr", "Ihr"], ["Nominativ", "das Klassenzimmer", "unser", "euer", "ihr", "Ihr"],
            ["Nominativ", "die Schule", "unsere", "eure", "ihre", "Ihre"], ["Nominativ", "die Hausaufgaben", "unsere", "eure", "ihre", "Ihre"],
            ["Akkusativ", "der Lehrer", "unseren", "euren", "ihren", "Ihren"], ["Akkusativ", "das Klassenzimmer", "unser", "euer", "ihr", "Ihr"],
            ["Akkusativ", "die Schule", "unsere", "eure", "ihre", "Ihre"], ["Akkusativ", "die Hausaufgaben", "unsere", "eure", "ihre", "Ihre"],
            ["Dativ", "der Lehrer", "unserem", "eurem", "ihrem", "Ihrem"], ["Dativ", "das Klassenzimmer", "unserem", "eurem", "ihrem", "Ihrem"],
            ["Dativ", "die Schule", "unserer", "eurer", "ihrer", "Ihrer"], ["Dativ", "die Hausaufgaben", "unseren", "euren", "ihren", "Ihren"] ] },
          { type: "note", html: "Đuôi của mạo từ sở hữu giống đuôi của <strong>ein / kein</strong>. Cũng dùng cho <strong>mein-, dein-, sein-</strong>." }
        ] }
    ],
    kommunikation: [
      { id: "gespraech-abschliessen", titleDe: "👋 Ein Gespräch abschließen",
        groups: [ { label: "Kết thúc cuộc nói chuyện", items: [
          s("Entschuldigung, ich muss jetzt weg. Ich muss zur Arbeit.", "Xin lỗi, tôi phải đi bây giờ. Tôi phải đi làm."),
          s("Ah, ich verstehe.", "À, tôi hiểu."),
          q("Danke für das Gespräch. Das war sehr interessant.", "Cảm ơn vì cuộc nói chuyện. Rất thú vị.", "Das freut mich!", "Tôi rất vui!"),
          q("Vielen Dank für die Hilfe!", "Cảm ơn nhiều vì đã giúp!", "(Aber) gern.", "Không có gì."),
          q("Einen schönen Tag noch.", "Chúc ông/bà một ngày tốt lành.", "Ihnen auch.", "Ông/bà cũng vậy.") ] } ] },
      { id: "gleichgueltigkeit-ausdruecken", titleDe: "🤷 Gleichgültigkeit ausdrücken",
        groups: [ { label: "Nói điều mình không quan tâm", items: [ s("Na und?", "Thì sao?"), s("Das ist mir egal.", "Tôi không quan tâm.") ] } ] },
      { id: "verstaendnishilfen", titleDe: "📖 Um Verständnis bitten und Verständnishilfen anbieten",
        groups: [ { label: "Hỏi và giải thích", items: [
          s("Was ist ein / eine ...?", "... là gì?"),
          s("Das habe ich nicht verstanden.", "Tôi không hiểu điều đó."),
          s("Hier steht: ...", "Ở đây viết: ..."),
          s("Ach so. / Ah ja. Das habe ich nicht gewusst.", "À ra vậy. / À vâng. Tôi đã không biết điều đó.") ] } ] },
      { id: "unsicherheit-ausdruecken", titleDe: "❓ Unsicherheit ausdrücken",
        groups: [ { label: "Nói điều mình không chắc", items: [
          s("Ich glaube nicht. Aber ich weiß es nicht genau.", "Tôi nghĩ là không. Nhưng tôi không biết chính xác.") ] } ] }
    ],
    woerter: []
  };
})();
