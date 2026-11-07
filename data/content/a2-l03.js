/* A2 · Bài 3 · Joggen ist prima! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l03"] = {
    grammatik: [
      { id: "komparativ-superlativ-wdh", titleDe: "🔁 Wiederholung Komparativ und Superlativ: gut, viel, gern",
        blocks: [
          { type: "table", head: ["+", "++", "+++"], rows: [ ["gut", "besser", "am besten"], ["viel", "mehr", "am meisten"], ["gern", "lieber", "am liebsten"] ] }
        ] },
      { id: "komparativ-superlativ", titleDe: "📈 Adjektive: Komparativ und Superlativ",
        blocks: [
          { type: "text", html: "<strong>Komparativ</strong> = thêm <strong>-er</strong>. <strong>Superlativ</strong> = <strong>am + … -sten</strong>." },
          { type: "table", head: ["+", "++", "+++"], rows: [
            ["schön", "schöner", "am schönsten"], ["spät", "später", "am spätesten"], ["weit", "weiter", "am weitesten"],
            ["interessant", "interessanter", "am interessantesten"], ["laut", "lauter", "am lautesten"], ["früh", "früher", "am frühesten"],
            ["alt", "älter", "am ältesten"], ["lang", "länger", "am längsten"], ["groß", "größer", "am größten"],
            ["gesund", "gesünder", "am gesündesten"], ["hoch", "höher", "am höchsten"], ["teuer", "teurer", "am teuersten"], ["dunkel", "dunkler", "am dunkelsten"] ] },
          { type: "note", html: "Tính từ kết thúc bằng <strong>-t, -d, -z, -ß</strong> thêm <strong>-esten</strong> ở Superlativ (am interessantesten). Nhiều tính từ ngắn có <strong>umlaut</strong>: a → ä, o → ö, u → ü (alt → älter, gesund → gesünder). Cần nhớ riêng: <strong>hoch → höher</strong>, <strong>teuer → teurer</strong>, <strong>dunkel → dunkler</strong>." }
        ] },
      { id: "vergleichspartikel-als-wie", titleDe: "⚖️ Vergleichspartikel: als, wie",
        blocks: [
          { type: "table", head: ["Quan hệ", "Cấu trúc", "Ví dụ cụm"], rows: [
            ["Bằng nhau", "(genau)so + tính từ + wie", "(genau)so schnell wie"],
            ["Không bằng", "nicht so + tính từ + wie", "nicht so schnell wie"],
            ["Hơn", "Komparativ + als", "schneller als"] ] },
          { type: "note", html: "<strong>wie</strong> khi so sánh <em>bằng</em>, <strong>als</strong> khi so sánh <em>hơn</em>." }
        ] },
      { id: "indefinitpronomen-jemand-niemand", titleDe: "👤 Indefinitpronomen: jemand, niemand",
        blocks: [
          { type: "table", head: ["Đại từ", "Nghĩa"], rows: [ ["jemand", "ai đó, một người nào đó"], ["niemand", "không ai (= keiner)"] ] }
        ] }
    ],
    kommunikation: [
      { id: "einen-vorschlag-machen", titleDe: "💡 Einen Vorschlag machen",
        groups: [ { label: "Đề nghị", items: [
          s("Ich habe (da) einen Vorschlag.", "Tôi có một đề nghị."),
          s("Darf ich etwas vorschlagen? Wollen wir ...? Was denkst du?", "Tôi có thể đề nghị điều này không? Chúng ta ... nhé? Bạn nghĩ sao?"),
          s("Ich würde gern / möchte ...", "Tôi muốn ...") ] } ] },
      { id: "vorschlaege-annehmen", titleDe: "✅ Vorschläge annehmen",
        groups: [ { label: "Đồng ý với đề nghị", items: [
          s("Das ist eine gute Idee!", "Đó là ý hay!"),
          s("(Also) gut, machen wir es so.", "Được rồi, chúng ta làm như vậy."),
          s("Einverstanden. / In Ordnung.", "Đồng ý. / Được.") ] } ] },
      { id: "vorschlaege-ablehnen", titleDe: "🚫 Vorschläge ablehnen",
        groups: [ { label: "Từ chối đề nghị", items: [
          s("Nein (danke), das möchte ich nicht so gern.", "Không (cảm ơn), tôi không thích điều đó lắm."),
          s("Tut mir leid, das schaffe ich (heute) nicht (mehr).", "Rất tiếc, (hôm nay) tôi không làm kịp (nữa).") ] } ] },
      { id: "etwas-bewerten", titleDe: "⭐ Etwas bewerten",
        groups: [ { label: "Đánh giá và so sánh", items: [
          s("... ist (viel) besser / interessanter als ...", "... (tốt hơn / thú vị hơn nhiều) so với ..."),
          s("Ich finde, ... ist genauso ... wie ...", "Tôi thấy ... cũng ... như ...") ] } ] },
      { id: "vorlieben-ausdruecken", titleDe: "❤️ Vorlieben ausdrücken",
        groups: [ { label: "Nói điều mình thích", items: [
          s("Ich mache am liebsten ...", "Tôi thích làm ... nhất."),
          s("Mir gefällt ... besser. / Ich möchte lieber ...", "Tôi thích ... hơn. / Tôi muốn ... hơn.") ] } ] }
    ],
    woerter: []
  };
})();
