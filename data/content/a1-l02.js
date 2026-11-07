/* A1 · Bài 2 · Wohnen Sie auch hier? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l02"] = {
    grammatik: [
      { id: "personalpronomen-wir-ihr", titleDe: "👥 Personalpronomen: wir, ihr",
        blocks: [
          { type: "text", html: "Bài 1 đã học các đại từ số ít. Bài này thêm <strong>wir</strong> và <strong>ihr</strong>; bảng dưới là tổng hợp đầy đủ." },
          { type: "table", head: ["Số", "Ngôi", "Tiếng Đức", "Ý nghĩa / cách dùng"], rows: [
            ["Số ít", "Ngôi 1", "ich", "Tôi"],
            ["Số ít", "Ngôi 2", "du", "Bạn (thân mật)"],
            ["Số ít", "Ngôi 3", "er / sie", "Anh ấy / cô ấy"],
            ["Số nhiều", "Ngôi 1", "wir", "Chúng tôi, chúng ta"],
            ["Số nhiều", "Ngôi 2", "ihr", "Các bạn (nói với nhóm người thân mật)"],
            ["Số nhiều", "Ngôi 3", "sie", "Họ"],
            ["Lịch sự", "—", "Sie", "Ngài, quý vị (số ít hoặc số nhiều, viết hoa)"] ] }
        ] },
      { id: "verbkonjugation-leben-sprechen-haben-sein", titleDe: "⚙️ Verbkonjugation: leben, sprechen, haben, sein",
        blocks: [
          { type: "table", head: ["", "leben", "sprechen", "haben", "sein"], rows: [
            ["ich", "lebe", "spreche", "habe", "bin"],
            ["du", "lebst", "sprichst", "hast", "bist"],
            ["er / sie", "lebt", "spricht", "hat", "ist"],
            ["wir", "leben", "sprechen", "haben", "sind"],
            ["ihr", "lebt", "sprecht", "habt", "seid"],
            ["sie / Sie", "leben", "sprechen", "haben", "sind"] ] },
          { type: "note", html: "<strong>sprechen</strong> đổi nguyên âm <strong>e → i</strong> ở <em>du</em> và <em>er / sie</em>. <strong>haben</strong> và <strong>sein</strong> là động từ bất quy tắc, cần học thuộc (du hast, er hat)." }
        ] },
      { id: "ja-nein-frage", titleDe: "❓ Ja-/Nein-Frage und W-Frage",
        blocks: [
          { type: "text", html: "Câu hỏi <strong>Ja-/Nein-Frage</strong> không có từ để hỏi: động từ đứng ở <strong>vị trí số 1</strong>. Câu hỏi <strong>W-Frage</strong> vẫn để động từ ở vị trí số 2." },
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2", "Phần còn lại"], rows: [
            ["Ja-/Nein-Frage", "Haben (động từ)", "Sie", "Kinder?"],
            ["Ja-/Nein-Frage", "Ist (động từ)", "Ahmet", "verheiratet?"],
            ["W-Frage", "Wer", "ist (động từ)", "verheiratet?"],
            ["W-Frage", "Wo", "wohnt (động từ)", "Ahmet?"] ] },
          { type: "note", html: "Trả lời câu hỏi Ja-/Nein-Frage bằng <strong>Ja</strong> hoặc <strong>Nein</strong>, có thể thêm một câu đầy đủ." }
        ] }
    ],
    kommunikation: [
      { id: "ueber-persoenliches", titleDe: "💍 Über Persönliches sprechen",
        groups: [
          { label: "Tình trạng kết hôn", items: [ q("Bist du verheiratet? / Sind Sie verheiratet?", "Bạn đã kết hôn chưa? / Ngài đã kết hôn chưa?", "Ja. / Nein. Ich bin (nicht) verheiratet.", "Vâng. / Không. Tôi (chưa) kết hôn.") ] },
          { label: "Con cái", items: [ q("Hast du Kinder? / Haben Sie Kinder?", "Bạn có con chưa? / Ngài có con chưa?", "Ja. Ich habe ein Kind / zwei Kinder / ... Kinder.", "Vâng. Tôi có một / hai / ... đứa con."), q("Hast du Kinder?", "Bạn có con chưa?", "Nein. Ich habe keine Kinder.", "Không. Tôi không có con.") ] }
        ] },
      { id: "um-wiederholung-bitten", titleDe: "🔁 Um Wiederholung bitten",
        groups: [ { label: "Xin nhắc lại khi chưa nghe rõ", items: [ q("Entschuldigung? Noch einmal, bitte.", "Xin lỗi? Vui lòng nhắc lại một lần nữa.", "Morgenstraße sechsundfünfzig.", "Đường Morgen số 56.") ] } ] },
      { id: "sprachkenntnisse", titleDe: "💬 Über Sprachkenntnisse sprechen",
        groups: [
          { label: "Hỏi ngôn ngữ", items: [ q("Was sprichst du? / Was sprechen Sie?", "Bạn nói ngôn ngữ gì? / Ngài nói ngôn ngữ gì?", "Ich spreche sehr gut / gut / ein bisschen Deutsch / Englisch ...", "Tôi nói rất tốt / tốt / một chút tiếng Đức / tiếng Anh ...") ] },
          { label: "Hỏi lại và trả lời", items: [
            q("Sprichst du auch ...? / Und du?", "Bạn cũng nói tiếng ... chứ? / Còn bạn?", "(Ja,) ich spreche (auch) Deutsch / ...", "Vâng, tôi (cũng) nói tiếng Đức / ..."),
            q("Sprichst du auch ...?", "Bạn cũng nói tiếng ... chứ?", "(Nein,) ich spreche kein Deutsch / ...", "Không, tôi không nói tiếng Đức / ...") ] }
        ] },
      { id: "nach-dem-alter-fragen", titleDe: "🎂 Nach dem Alter fragen",
        groups: [ { label: "Hỏi tuổi", items: [ q("Wie alt bist du? / Wie alt sind Sie?", "Bạn bao nhiêu tuổi? / Ngài bao nhiêu tuổi?", "(Ich bin) 23 (Jahre alt).", "Tôi 23 tuổi.") ] } ] },
      { id: "adresse-und-angaben", titleDe: "🏠 Die Adresse nennen und persönliche Angaben machen",
        groups: [
          { label: "Nơi ở và thời gian sống ở Đức", items: [
            q("Wo wohnst du? / Wo wohnen Sie?", "Bạn sống ở đâu? / Ngài sống ở đâu?", "Ich wohne in der Morgenstraße sechsundfünfzig.", "Tôi sống ở đường Morgen số 56."),
            { satz: { de: "(Ich lebe schon) ein Jahr / ... Jahre in Deutschland.", vi: "Tôi đã sống ở Đức một năm / ... năm." } } ] },
          { label: "Nói thông tin liên lạc", items: [
            { satz: { de: "Meine E-Mail-Adresse ist ...", vi: "Địa chỉ email của tôi là ..." } },
            { satz: { de: "Meine Telefonnummer ist ...", vi: "Số điện thoại của tôi là ..." } } ] }
        ] }
    ],
    woerter: []
  };
})();
