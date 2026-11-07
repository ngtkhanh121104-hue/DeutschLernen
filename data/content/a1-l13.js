/* A1 · Bài 13 · Gesundheit! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l13"] = {
    grammatik: [
      { id: "modalverb-sollen", titleDe: "⚙️ Verbkonjugation: Modalverb sollen",
        blocks: [
          { type: "text", html: "<strong>sollen</strong> = nên, được yêu cầu / được chỉ dẫn làm gì (thường theo lời người khác, ví dụ bác sĩ)." },
          { type: "table", head: ["", "sollen"], rows: [
            ["ich", "soll"], ["du", "sollst"], ["er / sie", "soll"], ["wir", "sollen"], ["ihr", "sollt"], ["sie / Sie", "sollen"] ] }
        ] },
      { id: "satzklammer-sollen", titleDe: "📍 Sätze: Satzklammer bei Modalverben (sollen)",
        blocks: [
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (modal)", "Giữa câu", "Cuối câu (nguyên mẫu)"], rows: [
            ["W-Frage", "Was", "soll", "ich", "machen?"],
            ["Ja-/Nein-Frage", "—", "Soll", "ich den Fuß", "kühlen?"],
            ["Aussage", "Sie", "sollen", "den Fuß ruhig", "halten."] ] }
        ] },
      { id: "imperativ", titleDe: "🗣️ Verben: Imperativ",
        blocks: [
          { type: "text", html: "<strong>Imperativ</strong> dùng để yêu cầu, ra lệnh hoặc nhắc nhở. Có ba dạng: <strong>du, ihr, Sie</strong>." },
          { type: "table", head: ["Ngôi", "kommen", "aufpassen", "fahren", "haben", "sein"], rows: [
            ["du", "Komm!", "Pass auf!", "Fahr!", "Hab!", "Sei!"],
            ["ihr", "Kommt!", "Passt auf!", "Fahrt!", "Habt!", "Seid!"],
            ["Sie", "Kommen Sie!", "Passen Sie auf!", "Fahren Sie!", "Haben Sie!", "Seien Sie!"] ] },
          { type: "table", head: ["Ngôi", "Cách tạo", "Ví dụ"], rows: [
            ["du", "dạng chia của du, bỏ -st", "du kommst → Komm!"],
            ["ihr", "dạng chia của ihr", "ihr kommt → Kommt!"],
            ["Sie", "động từ + Sie", "Sie kommen → Kommen Sie!"] ] },
          { type: "note", html: "Đặc biệt: <strong>haben → Hab!</strong>, <strong>sein → Sei!</strong>. Với động từ tách, <strong>tiền tố đứng cuối câu</strong> (Pass auf!)." }
        ] }
    ],
    kommunikation: [
      { id: "warnungen-und-aufforderungen", titleDe: "⚠️ Warnungen und höfliche Aufforderungen aussprechen",
        groups: [
          { label: "Cảnh báo", items: [ s("Pass auf! / Sei vorsichtig! / Seien Sie bitte vorsichtig!", "Cẩn thận! / Hãy cẩn thận!"), s("Trag einen Helm!", "Hãy đội mũ bảo hiểm!") ] },
          { label: "Yêu cầu lịch sự (bác sĩ)", items: [
            s("Nehmen Sie Platz.", "Mời ông/bà ngồi."),
            s("Bewegen Sie jetzt bitte den Fuß.", "Bây giờ xin ông/bà cử động bàn chân."),
            s("Zeigen Sie doch mal.", "Ông/bà cho tôi xem thử.") ] }
        ] },
      { id: "schmerzen-beschreiben", titleDe: "🤕 Schmerzen beschreiben",
        groups: [ { label: "Nói về chỗ đau", items: [
          s("Au! Mein Kopf tut weh. / Meine Füße tun weh.", "Ái! Đầu tôi đau. / Chân tôi đau."),
          s("Ich habe Schmerzen. / Ich habe Kopfschmerzen.", "Tôi bị đau. / Tôi bị đau đầu.") ] } ] },
      { id: "befinden-und-mitgefuehl", titleDe: "❤️ Über das Befinden sprechen und Mitgefühl ausdrücken",
        groups: [ { label: "Hỏi thăm và thông cảm", items: [
          q("Ist alles in Ordnung?", "Mọi chuyện ổn chứ?", "Nein. Es geht mir nicht so gut.", "Không. Tôi không khỏe lắm."),
          q("Oh, was ist denn los? / Oh, was hast du?", "Ồ, có chuyện gì vậy? / Bạn bị sao thế?", "Ich habe Kopfschmerzen und mir ist schlecht.", "Tôi bị đau đầu và thấy buồn nôn."),
          q("Das tut mir leid. Gute Besserung!", "Tôi rất tiếc. Chúc bạn mau khỏe!", "Das ist lieb. Danke!", "Bạn thật tốt bụng. Cảm ơn!") ] } ] },
      { id: "um-rat-fragen-ratschlaege-geben", titleDe: "🩺 Um Rat fragen und Ratschläge geben",
        groups: [ { label: "Xin và cho lời khuyên", items: [
          q("Ich hatte einen Unfall und brauche Hilfe. Was mache ich denn jetzt?", "Tôi bị tai nạn và cần giúp đỡ. Bây giờ tôi nên làm gì?", "Bleiben Sie ruhig.", "Hãy bình tĩnh."),
          q("Wir können nicht schlafen. Was hilft denn da?", "Chúng tôi không ngủ được. Cái gì giúp được đây?", "Essen Sie am Abend weniger!", "Buổi tối ông/bà hãy ăn ít lại!"),
          q("Ich habe Kopfschmerzen.", "Tôi bị đau đầu.", "Dann nimm doch eine Tablette!", "Vậy thì uống một viên thuốc đi!") ] } ] },
      { id: "krankmeldung-schreiben", titleDe: "✉️ Eine Krankmeldung schreiben",
        groups: [ { label: "Cụm từ trong thông báo nghỉ ốm", items: [
          s("Sehr geehrte Frau ... / Sehr geehrter Herr ...,", "Kính gửi bà ... / ông ...,"),
          s("leider kann ich heute nicht arbeiten. Ich bin krank.", "tiếc là hôm nay tôi không thể đi làm. Tôi bị ốm."),
          s("Es tut mir sehr leid.", "Tôi rất xin lỗi."),
          s("Die Arbeitsunfähigkeitsbescheinigung bekommen Sie von mir.", "Tôi sẽ gửi giấy chứng nhận không đủ khả năng làm việc."),
          s("Mit freundlichen Grüßen / Liebe Grüße", "Trân trọng / Thân ái") ] } ] }
    ],
    woerter: []
  };
})();
