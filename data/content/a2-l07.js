/* A2 · Bài 7 · Der Umzug */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l07"] = {
    grammatik: [
      { id: "lokaladverbien", titleDe: "📍 Lokaladverbien: oben, unten, vorn und hinten",
        blocks: [
          { type: "text", html: "Trả lời câu hỏi <strong>Wo?</strong> (ở đâu) trong một căn phòng hoặc không gian." },
          { type: "table", head: ["Trạng từ", "Nghĩa"], rows: [ ["oben", "ở trên"], ["unten", "ở dưới"], ["vorn", "ở phía trước"], ["hinten", "ở phía sau"] ] }
        ] },
      { id: "direktionaladverbien", titleDe: "➡️ Direktionaladverbien: rauf, runter, rein, raus und rüber",
        blocks: [
          { type: "text", html: "Trả lời câu hỏi <strong>Wohin?</strong> (đi đâu, theo hướng nào)." },
          { type: "table", head: ["Trạng từ", "Nghĩa"], rows: [
            ["rauf", "lên trên"], ["runter", "xuống dưới"], ["rein", "vào trong"], ["raus", "ra ngoài"], ["rüber", "sang bên kia"] ] }
        ] },
      { id: "lokale-praepositionen-wdh", titleDe: "🔁 Wiederholung: lokale Präpositionen",
        blocks: [
          { type: "table", head: ["Giới từ", "Nghĩa"], rows: [
            ["an", "sát, bên cạnh (tiếp xúc)"], ["auf", "ở trên"], ["hinter", "phía sau"], ["in", "bên trong"], ["neben", "bên cạnh"],
            ["über", "phía trên"], ["unter", "phía dưới"], ["vor", "phía trước"], ["zwischen", "ở giữa"] ] }
        ] },
      { id: "wechselpraepositionen", titleDe: "🔄 Lokale Präpositionen: Wechselpräpositionen",
        blocks: [
          { type: "text", html: "<strong>Wo?</strong> (vị trí) → <strong>Dativ</strong>. <strong>Wohin?</strong> (chuyển động / đặt vào) → <strong>Akkusativ</strong>." },
          { type: "table", head: ["Danh từ", "Wo? (+ Dativ)", "Wohin? (+ Akkusativ)"], rows: [
            ["der Schreibtisch", "hinter / neben dem Schreibtisch", "hinter / neben den Schreibtisch"],
            ["das Sofa", "hinter / neben dem Sofa", "hinter / neben das Sofa"],
            ["die Tür", "hinter / neben der Tür", "hinter / neben die Tür"],
            ["die Regale", "hinter / neben den Regalen", "hinter / neben die Regale"] ] }
        ] },
      { id: "verben-mit-wechselpraepositionen", titleDe: "🪑 Verben mit Wechselpräpositionen",
        blocks: [
          { type: "table", head: ["Wo? (vị trí, không có tân ngữ)", "Wohin? (đặt, có tân ngữ Akkusativ)"], rows: [
            ["liegen", "legen"], ["sitzen", "setzen"], ["stehen", "stellen"], ["hängen", "hängen"] ] },
          { type: "note", html: "Cặp động từ: <strong>liegen / legen</strong> (nằm / đặt nằm), <strong>sitzen / setzen</strong> (ngồi / đặt ngồi), <strong>stehen / stellen</strong> (đứng / đặt đứng), <strong>hängen / hängen</strong> (treo, vẫn cùng một từ nhưng chia khác nhau)." }
        ] }
    ],
    kommunikation: [
      { id: "jemanden-auffordern", titleDe: "🙋 Jemanden auffordern",
        groups: [ { label: "Nhờ ai đó làm việc", items: [
          s("Würdest du / Würden Sie bitte ...?", "Bạn / ông bà vui lòng ... nhé?"),
          s("Kannst du / Können Sie bitte ...?", "Bạn / ông bà có thể ... được không?"),
          s("Schaffst du das? / Geht das?", "Bạn làm được không? / Có được không?"),
          s("Bitte mach das so bald wie möglich, bis ...", "Làm ơn làm việc này sớm nhất có thể, trước ...") ] } ] },
      { id: "auftrag-annehmen", titleDe: "✅ Einen Auftrag annehmen",
        groups: [ { label: "Nhận việc", items: [
          s("Selbstverständlich! / Natürlich! / Klar!", "Dĩ nhiên rồi!"),
          s("Das mache ich! / Das geht!", "Tôi sẽ làm! / Được!") ] } ] },
      { id: "auftrag-ablehnen", titleDe: "⛔ Einen Auftrag ablehnen",
        groups: [ { label: "Từ chối việc", items: [
          s("Tut mir leid. Das geht (gerade) nicht.", "Rất tiếc. (Lúc này) không được."),
          s("Ich muss noch ... Deshalb schaffe ich das leider nicht.", "Tôi còn phải ... Vì vậy tiếc là tôi không làm kịp.") ] } ] },
      { id: "um-vorsicht-bitten", titleDe: "⚠️ Um Vorsicht bitten",
        groups: [ { label: "Nhắc cẩn thận", items: [
          s("Vorsicht mit dem / der / den ...!", "Cẩn thận với ...!"),
          s("Pass / Passen Sie auf mit ...! Sei / Seien Sie vorsichtig!", "Hãy cẩn thận với ...!") ] } ] },
      { id: "einen-raum-einrichten", titleDe: "🛋️ Einen Raum einrichten",
        groups: [ { label: "Bàn bố trí phòng", items: [
          s("Wohin stellen wir den / das / die ...?", "Chúng ta đặt ... ở đâu?"),
          s("Passt er / es / sie vielleicht neben ...?", "Có lẽ nó hợp để cạnh ... không?"),
          s("Da ist vielleicht ein bisschen zu wenig Platz. Sollen wir ...?", "Ở đó có lẽ hơi chật. Hay chúng ta ...?") ] } ] },
      { id: "wichtigkeit-ausdruecken", titleDe: "⭐ Wichtigkeit ausdrücken",
        groups: [ { label: "Nói điều quan trọng", items: [
          q("Wie wichtig findest du das / den / die ...?", "Bạn thấy ... quan trọng đến mức nào?", "Das / Den / Die finde ich (sehr) wichtig.", "Tôi thấy ... (rất) quan trọng."),
          s("Das ist nicht so wichtig / überhaupt nicht wichtig.", "Điều đó không quá quan trọng / hoàn toàn không quan trọng."),
          s("Die Hauptsache ist, ...", "Điều chính là ...") ] } ] }
    ],
    woerter: []
  };
})();
