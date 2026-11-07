/* A1 · Bài 15 · Wie geht das? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l15"] = {
    grammatik: [
      { id: "konjunktiv-ii-wuerde", titleDe: "⚙️ Verben: Konjugation im Konjunktiv II (würde)",
        blocks: [
          { type: "text", html: "<strong>würde + động từ nguyên mẫu</strong> dùng để nói điều mình <em>muốn</em> hoặc <em>sẽ thích</em> một cách lịch sự (thường đi với <strong>gern</strong>)." },
          { type: "table", head: ["", "würde"], rows: [
            ["ich", "würde"], ["du", "würdest"], ["er / sie", "würde"], ["wir", "würden"], ["ihr", "würdet"], ["sie / Sie", "würden"] ] }
        ] },
      { id: "satzklammer-konjunktiv-ii", titleDe: "📍 Sätze: Satzklammer bei Konjunktiv II mit würd-",
        blocks: [
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (würd-)", "Giữa câu", "Cuối câu (nguyên mẫu)"], rows: [
            ["W-Frage", "Was", "würden", "Sie in diesem Kurs gern", "lernen?"],
            ["Ja-/Nein-Frage", "—", "Würdest", "du lieber im Meer oder im Schwimmbad", "schwimmen?"],
            ["Aussage", "Ich", "würde", "gern schnell Informationen im Internet", "finden."] ] }
        ] },
      { id: "nach-und-wechselpraepositionen", titleDe: "📍 Lokale Präpositionen: nach + Dativ und Wechselpräpositionen in, auf, an",
        blocks: [
          { type: "text", html: "Giới từ <strong>in, auf, an</strong> đi với <strong>Dativ</strong> khi hỏi <strong>Wo?</strong> (vị trí) và đi với <strong>Akkusativ</strong> khi hỏi <strong>Wohin?</strong> (chuyển động). Với tên nước/thành phố không có mạo từ dùng <strong>in</strong> (Wo?) và <strong>nach</strong> (Wohin?)." },
          { type: "table", head: ["Giới từ", "Danh từ", "Wo? (Dativ)", "Wohin? (Akkusativ)"], rows: [
            ["—", "Italien", "in Italien", "nach Italien"],
            ["in", "der Wald", "im Wald", "in den Wald"], ["in", "das Museum", "im Museum", "ins Museum"], ["in", "die Wüste", "in der Wüste", "in die Wüste"], ["in", "die Berge", "in den Bergen", "in die Berge"],
            ["auf", "der Mond", "auf dem Mond", "auf den Mond"], ["auf", "das Fest", "auf einem Fest", "auf ein Fest"], ["auf", "die Insel", "auf einer Insel", "auf eine Insel"],
            ["an", "der Strand", "am Strand", "an den Strand"], ["an", "das Meer", "am Meer", "ans Meer"], ["an", "die Küste", "an der Küste", "an die Küste"] ] },
          { type: "note", html: "Rút gọn: <strong>in + dem = im</strong>, <strong>an + dem = am</strong>, <strong>in + das = ins</strong>, <strong>an + das = ans</strong>." }
        ] }
    ],
    kommunikation: [
      { id: "um-unterstuetzung-bitten", titleDe: "🆘 Um Unterstützung bitten",
        groups: [ { label: "Nhờ giúp đỡ", items: [
          s("Wie geht das? / Das verstehe ich nicht.", "Cái này làm thế nào? / Tôi không hiểu."),
          s("Kannst du das bitte erklären?", "Bạn có thể giải thích điều này được không?") ] } ] },
      { id: "etwas-versprechen-hoffnung", titleDe: "🤞 Etwas versprechen / Hoffnung ausdrücken",
        groups: [ { label: "Hứa và bày tỏ hy vọng", items: [
          q("Wir machen das bald.", "Chúng tôi sẽ làm việc đó sớm.", "Wirklich? Versprochen?", "Thật không? Hứa nhé?"),
          q("Versprochen!", "Hứa đấy!", "Na, hoffentlich!", "Hy vọng là vậy!") ] } ] },
      { id: "reiseziele-sprechen", titleDe: "✈️ Über (Wunsch-)Reiseziele sprechen",
        groups: [
          { label: "Nơi muốn đến", items: [
            q("Wohin möchtest du gern fahren?", "Bạn muốn đi đâu?", "Nach Italien. Und du?", "Đến Ý. Còn bạn?"),
            s("Ich möchte mal in die Berge fahren, am liebsten in die Schweiz.", "Tôi muốn đi lên núi một lần, tốt nhất là đến Thụy Sĩ.") ] },
          { label: "Nơi đã từng hoặc chưa từng đến", items: [
            q("Warst du schon mal in der Schweiz?", "Bạn đã từng ở Thụy Sĩ chưa?", "Ich war noch nie in der Schweiz.", "Tôi chưa từng đến Thụy Sĩ."),
            s("Wo warst du noch nie? – Im Dschungel.", "Bạn chưa từng đến đâu? – Rừng nhiệt đới.") ] }
        ] },
      { id: "vorlieben-interesse-aeussern", titleDe: "🌊 Vorlieben / Interesse äußern",
        groups: [ { label: "Nói sở thích khi có hai lựa chọn", items: [
          q("Würdest du lieber im Meer oder im Schwimmbad schwimmen?", "Bạn thích bơi ở biển hay ở bể bơi hơn?", "Ich würde lieber im Meer schwimmen.", "Tôi thích bơi ở biển hơn."),
          s("Oh, das habe ich nicht gedacht!", "Ồ, tôi không nghĩ vậy!") ] } ] },
      { id: "individuelle-lernziele", titleDe: "🎓 Über individuelle Lernziele sprechen",
        groups: [ { label: "Mục tiêu học tập", items: [
          q("Was würden Sie gern in diesem Kurs lernen?", "Ông/bà muốn học gì trong khóa này?", "Ich würde gern ... lernen.", "Tôi muốn học ..."),
          q("Gibt es da auch Kurse für Erwachsene?", "Ở đó có cả khóa dành cho người lớn không?", "Ich finde den Kurs „...“ interessant.", "Tôi thấy khóa học “...” thú vị."),
          s("Ich kann das leider nicht. / Ich habe alles vergessen.", "Tiếc là tôi không biết làm. / Tôi quên hết rồi.") ] } ] }
    ],
    woerter: []
  };
})();
