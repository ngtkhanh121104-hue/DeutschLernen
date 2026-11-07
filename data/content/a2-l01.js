/* A2 · Bài 1 · Weggehen & Ankommen */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l01"] = {
    grammatik: [
      { id: "praeteritum-haben-sein-wdh", titleDe: "🕰️ Wiederholung: Präteritum von haben und sein",
        blocks: [
          { type: "table", head: ["Hiện tại → Präteritum", "haben", "sein"], rows: [
            ["ich", "habe → hatte", "bin → war"], ["du", "hast → hattest", "bist → warst"], ["er / sie", "hat → hatte", "ist → war"],
            ["wir", "haben → hatten", "sind → waren"], ["ihr", "habt → hattet", "seid → wart"], ["sie / Sie", "haben → hatten", "sind → waren"] ] }
        ] },
      { id: "perfekt-wiederholung", titleDe: "🕰️ Wiederholung: Perfekt",
        blocks: [
          { type: "text", html: "<strong>Perfekt = haben / sein + Partizip II</strong>. Partizip II đứng cuối câu." },
          { type: "table", head: ["Nhóm", "Công thức Partizip II", "Ví dụ", "Trợ động từ"], rows: [
            ["Có quy tắc", "ge- + thân từ + -(e)t", "spielen → gespielt, leben → gelebt", "haben"],
            ["Bất quy tắc / di chuyển", "ge- + … + -en", "fahren → gefahren", "sein"],
            ["⚠ Bất quy tắc", "ge- + … + -en (đổi nguyên âm)", "treffen → getroffen", "haben"] ] }
        ] },
      { id: "perfekt-trennbar-ieren", titleDe: "🔗 Verben: Perfekt bei trennbaren Verben und Verben mit -ieren",
        blocks: [
          { type: "table", head: ["Loại", "Nguyên mẫu", "Partizip II"], rows: [
            ["Động từ tách", "aufpassen", "aufgepasst"], ["Động từ tách", "kennenlernen", "kennengelernt"], ["Động từ -ieren", "fotografieren", "fotografiert"] ] },
          { type: "note", html: "Động từ tách: <strong>tiền tố + ge + phần chính</strong>. Động từ <strong>-ieren</strong> không có <strong>ge-</strong>." }
        ] },
      { id: "perfekt-mit-sein", titleDe: "🚲 Verben: Perfekt mit sein",
        blocks: [
          { type: "table", head: ["Nguyên mẫu", "Perfekt"], rows: [
            ["gehen", "ist gegangen"], ["fahren", "ist gefahren"], ["schwimmen", "ist geschwommen"], ["fliegen", "ist geflogen"], ["laufen", "ist gelaufen"] ] }
        ] },
      { id: "perfekt-bleiben-sein-passieren", titleDe: "⚠️ Verben: Perfekt bei bleiben, sein und passieren",
        blocks: [
          { type: "table", head: ["Nguyên mẫu", "Perfekt", "Ghi chú"], rows: [
            ["bleiben", "ich bin geblieben", "dùng sein"], ["sein", "ich bin gewesen", "= ich war"], ["passieren", "es ist passiert", "dùng sein"] ] },
          { type: "note", html: "Với <strong>sein</strong>, quá khứ nói thường dùng <strong>war</strong> (Präteritum) hơn là <em>bin gewesen</em>." }
        ] },
      { id: "perfekt-untrennbare-vorsilben", titleDe: "🧩 Verben: Perfekt mit nicht-trennbaren Vorsilben be-, er-, ge-, ver-",
        blocks: [
          { type: "table", head: ["Nguyên mẫu", "Partizip II", "Ghi chú"], rows: [
            ["erleben", "erlebt", "có quy tắc"], ["verdienen", "verdient", "có quy tắc"], ["bekommen", "bekommen", "bất quy tắc"],
            ["gefallen", "gefallen", "bất quy tắc"], ["vergessen", "vergessen", "bất quy tắc"], ["⚠ versprechen", "versprochen", "đổi nguyên âm"] ] },
          { type: "note", html: "Tiền tố <strong>be-, er-, ge-, ver-</strong> không tách ra và <strong>không thêm ge-</strong> nữa." }
        ] },
      { id: "wortbildung-un-los", titleDe: "🧱 Wortbildung: Adjektive mit un- und -los",
        blocks: [
          { type: "table", head: ["Hậu tố / tiền tố", "Từ gốc", "Từ mới", "Nghĩa"], rows: [
            ["un-", "glücklich", "unglücklich", "không hạnh phúc (= nicht glücklich)"], ["-los", "der Sinn", "sinnlos", "vô nghĩa (= ohne Sinn)"] ] }
        ] }
    ],
    kommunikation: [
      { id: "wuensche-ausdruecken", titleDe: "🌟 Wünsche ausdrücken",
        groups: [ { label: "Nói điều mình ước", items: [
          q("Was würdest du gern (mal) machen?", "Bạn muốn (một lần) làm gì?", "Ich würde gern ...", "Tôi muốn ..."),
          s("Das würde mich glücklich machen.", "Điều đó sẽ làm tôi hạnh phúc.") ] } ] },
      { id: "ueber-vergangenes-sprechen", titleDe: "🕰️ Über Vergangenes sprechen",
        groups: [ { label: "Hỏi về quá khứ", items: [
          q("Warst du schon mal in ...? Hattest du schon mal ...?", "Bạn đã từng ở ... chưa? Bạn đã từng có ... chưa?", "Ja, ich war schon mal in ... / Ich hatte schon ...", "Vâng, tôi đã từng ở ... / Tôi đã từng có ..."),
          q("Wo hast du als Kind gewohnt?", "Hồi nhỏ bạn sống ở đâu?", "In Italien, in der Nähe von Neapel. Es war sehr schön, aber sehr klein.", "Ở Ý, gần Naples. Nơi đó rất đẹp nhưng rất nhỏ.") ] } ] },
      { id: "nachfragen-interesse-mitgefuehl", titleDe: "🤗 Nachfragen, Interesse und Mitgefühl zeigen",
        groups: [ { label: "Hỏi thêm và thể hiện sự quan tâm", items: [
          s("Was ist denn passiert? / Was hast du dann gemacht?", "Chuyện gì đã xảy ra vậy? / Rồi bạn đã làm gì?"),
          s("Das ist interessant / lustig / toll.", "Điều đó thú vị / buồn cười / tuyệt."),
          s("Das verstehe ich. / Das tut mir leid.", "Tôi hiểu. / Tôi rất tiếc.") ] } ] },
      { id: "eigene-fehler-korrigieren", titleDe: "✏️ Eigene Fehler korrigieren",
        groups: [ { label: "Tự sửa lời mình nói", items: [
          s("Das Dorf liegt in der Nähe von Napoli, ähm, ich meine: Neapel.", "Ngôi làng nằm gần Napoli, ừm, ý tôi là: Naples.") ] } ] }
    ],
    woerter: []
  };
})();
