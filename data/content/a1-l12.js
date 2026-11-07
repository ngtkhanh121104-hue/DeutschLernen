/* A1 · Bài 12 · Danke für die Hilfe! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l12"] = {
    grammatik: [
      { id: "verbkonjugation-muessen-duerfen", titleDe: "⚙️ Verbkonjugation: müssen, dürfen",
        blocks: [
          { type: "text", html: "<strong>müssen</strong> = phải. <strong>dürfen</strong> = được phép." },
          { type: "table", head: ["", "müssen", "dürfen"], rows: [
            ["ich", "muss", "darf"], ["du", "musst", "darfst"], ["er / sie", "muss", "darf"],
            ["wir", "müssen", "dürfen"], ["ihr", "müsst", "dürft"], ["sie / Sie", "müssen", "dürfen"] ] },
          { type: "note", html: "Ở <em>ich</em> và <em>er / sie</em> không có đuôi; nguyên âm đổi <strong>ü → u</strong> (müssen) và <strong>ü → a</strong> (dürfen) ở số ít." }
        ] },
      { id: "satzklammer-muessen-duerfen", titleDe: "📍 Sätze: Satzklammer bei Modalverben (müssen, dürfen)",
        blocks: [
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (modal)", "Giữa câu", "Cuối câu (nguyên mẫu)"], rows: [
            ["W-Frage", "Was", "muss", "ich denn da", "machen?"],
            ["Ja-/Nein-Frage", "—", "Darf", "ich ein Stück Schokolade", "essen?"],
            ["Aussage", "Sie", "müssen", "zwei Formulare", "ausfüllen."],
            ["Aussage", "Nein, du", "darfst", "keine Schokolade", "essen."] ] }
        ] },
      { id: "temporale-praepositionen-vor-nach-in", titleDe: "🕒 Temporale Präpositionen: vor, nach, in + Dativ; ab, bis",
        blocks: [
          { type: "table", head: ["Giống", "vor / nach", "in (sau bao lâu)"], rows: [
            ["Đực", "vor / nach dem Termin", "in einem Monat"], ["Trung", "vor / nach dem Gespräch", "in einem Jahr"],
            ["Cái", "vor / nach der Arbeit", "in einer Stunde"], ["Số nhiều", "vor / nach den Terminen", "in zwei Monaten"] ] },
          { type: "table", head: ["Giới từ", "Nghĩa", "Cụm mẫu"], rows: [
            ["vor", "trước", "vor dem Termin"], ["nach", "sau", "nach dem Gespräch"], ["in", "sau một khoảng thời gian nữa", "in einem Monat"],
            ["ab", "từ thời điểm đó trở đi", "ab 18 Uhr"], ["bis", "cho đến thời điểm đó", "bis morgen"] ] }
        ] }
    ],
    kommunikation: [
      { id: "sich-informieren-um-hilfe-bitten", titleDe: "🏛️ Sich informieren und um Hilfe bitten (auf dem Amt)",
        groups: [
          { label: "Bắt đầu cuộc nói chuyện", items: [
            q("Entschuldigung! Kann ich Sie etwas fragen?", "Xin lỗi! Tôi có thể hỏi ông/bà một chút không?", "Aber gern. Was kann ich für Sie tun?", "Dĩ nhiên rồi. Tôi có thể giúp gì ạ?") ] },
          { label: "Hỏi thông tin", items: [
            q("Ich brauche eine Auskunft. Wo bekomme ich ...? Können Sie mir da helfen?", "Tôi cần được cung cấp thông tin. Tôi nhận ... ở đâu? Ông/bà giúp tôi được không?", "Ja, ... bekommen Sie ...", "Vâng, ... bạn nhận ở ..."),
            s("Wo finde ich den / die ...?", "Tôi tìm ... ở đâu?"),
            s("Habe ich das richtig verstanden: Der / Die ... ist ...?", "Tôi hiểu đúng chưa: ... là ...?") ] },
          { label: "Cảm ơn", items: [ q("Super. Danke für die Hilfe!", "Tuyệt. Cảm ơn vì đã giúp!", "Sehr gern.", "Không có gì.") ] }
        ] },
      { id: "formelles-telefonat-beenden", titleDe: "☎️ Ein formelles Telefonat beenden",
        groups: [ { label: "Kết thúc cuộc gọi trang trọng", items: [ s("Vielen Dank. Auf Wiederhören.", "Cảm ơn nhiều. Xin chào tạm biệt (khi nói điện thoại).") ] } ] },
      { id: "erlaubnis-und-verbot", titleDe: "📸 Um Erlaubnis bitten und eine Erlaubnis / ein Verbot aussprechen",
        groups: [
          { label: "Xin phép", items: [
            q("Darf ich hier fotografieren?", "Tôi có được chụp ảnh ở đây không?", "Ja, du darfst hier fotografieren. Das ist erlaubt.", "Có, bạn được chụp ảnh ở đây. Điều đó được phép."),
            q("Darf ich hier fotografieren?", "Tôi có được chụp ảnh ở đây không?", "Nein, du darfst hier nicht fotografieren. Das ist verboten.", "Không, bạn không được chụp ảnh ở đây. Điều đó bị cấm."),
            q("Entschuldigung, darf man hier ...?", "Xin lỗi, ở đây có được ... không?", "Ja, Sie dürfen hier ... / Nein, das ist verboten.", "Vâng, ông/bà được ... ở đây. / Không, bị cấm.") ] }
        ] },
      { id: "auskunft-ueber-gewohnheiten", titleDe: "☕ Auskunft über Gewohnheiten geben",
        groups: [ { label: "Nói về thói quen", items: [
          s("Ich trinke nach dem Mittagessen gern Kaffee.", "Tôi thích uống cà phê sau bữa trưa."),
          s("Ich mache ab morgen jeden Tag zehn Minuten Sport.", "Từ ngày mai ngày nào tôi cũng tập thể thao 10 phút."),
          q("Schläfst du gern bis Mittag?", "Bạn có thích ngủ đến trưa không?", "Ja, klar! / Nein, ich stehe früh auf.", "Có chứ! / Không, tôi dậy sớm.") ] } ] },
      { id: "vorschlaege-machen-reagieren", titleDe: "💡 Vorschläge machen und auf Vorschläge reagieren",
        groups: [ { label: "Đề nghị và phản hồi", items: [
          q("Mir ist langweilig. Was kann ich machen?", "Tôi chán quá. Tôi có thể làm gì?", "Du kannst doch ... / Oder du kannst ...", "Bạn có thể ... mà. / Hoặc bạn có thể ..."),
          q("Du kannst doch ...", "Bạn có thể ... mà.", "Och, nö. / Oh ja, gute Idee! Das mache ich! Danke!", "Ôi, không đâu. / Ồ, ý hay đấy! Tôi sẽ làm! Cảm ơn!") ] } ] },
      { id: "schriftliche-antraege-stellen", titleDe: "📝 Schriftliche Anträge stellen",
        groups: [ { label: "Cụm từ trong đơn từ", items: [
          s("Sehr geehrte Damen und Herren,", "Kính gửi quý ông bà,"),
          s("hiermit beantrage ich ...", "tôi xin đề nghị / làm đơn xin ..."),
          s("Die genauen Angaben finden Sie in den Formularen in der Anlage.", "Thông tin chi tiết ông/bà có thể xem trong các mẫu đơn đính kèm."),
          s("Vielen Dank! Mit freundlichen Grüßen", "Cảm ơn nhiều! Trân trọng,") ] } ] }
    ],
    woerter: []
  };
})();
