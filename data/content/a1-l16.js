/* A1 · Bài 16 · Glückwunsch! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l16"] = {
    grammatik: [
      { id: "possessivartikel-sein-ihr", titleDe: "📝 Nomen und Artikel: Possessivartikel sein(e) und ihr(e)",
        blocks: [
          { type: "text", html: "<strong>sein(e)</strong> = của anh ấy (chủ sở hữu là <em>er</em>). <strong>ihr(e)</strong> = của cô ấy (chủ sở hữu là <em>sie</em>). Đuôi phụ thuộc vào <strong>giống và cách</strong> của danh từ theo sau." },
          { type: "table", head: ["Giống", "Danh từ", "Nominativ", "Akkusativ"], rows: [
            ["Đực", "der Rucksack", "sein / ihr", "seinen / ihren"],
            ["Trung", "das Hemd", "sein / ihr", "sein / ihr"],
            ["Cái", "die Kamera", "seine / ihre", "seine / ihre"],
            ["Số nhiều", "die Schuhe", "seine / ihre", "seine / ihre"] ] },
          { type: "note", html: "Quy tắc đuôi giống như <strong>ein / kein</strong>: chỉ <strong>giống đực ở Akkusativ</strong> thêm <strong>-en</strong>." }
        ] },
      { id: "konjunktion-denn", titleDe: "🔗 Sätze: Konjunktion denn",
        blocks: [
          { type: "text", html: "<strong>denn</strong> = vì, bởi vì. Dùng để giải thích lý do cho mệnh đề trước." },
          { type: "table", head: ["Mệnh đề 1", "denn", "Mệnh đề 2 (chủ ngữ + động từ)"], rows: [
            ["Ich kann nur am Nachmittag,", "denn", "ich muss ab 19 Uhr arbeiten."] ] },
          { type: "note", html: "<strong>denn</strong> đứng giữa hai mệnh đề và <strong>không làm đổi</strong> trật tự câu: sau denn vẫn là chủ ngữ rồi đến động từ (vị trí 2)." }
        ] }
    ],
    kommunikation: [
      { id: "auskunft-ueber-gewohnheiten-16", titleDe: "🍷 Auskunft über Gewohnheiten geben",
        groups: [ { label: "Nói về phong tục", items: [
          s("Bei uns bringt man (gern) Wein mit.", "Ở chỗ chúng tôi người ta (thích) mang rượu vang đến."),
          s("Ich bringe ... mit.", "Tôi mang ... đến.") ] } ] },
      { id: "gratulieren", titleDe: "🎉 Gratulieren",
        groups: [ { label: "Chúc mừng", items: [ q("(Herzlichen) Glückwunsch!", "Chúc mừng (nồng nhiệt)!", "Vielen Dank.", "Cảm ơn nhiều.") ] } ] },
      { id: "auf-eine-einladung-reagieren", titleDe: "💌 Auf eine Einladung reagieren",
        groups: [
          { label: "Cảm ơn và nhận lời", items: [ s("Danke für die Einladung.", "Cảm ơn vì lời mời."), s("Da habe ich Zeit. Ich komme (natürlich) sehr gern.", "Lúc đó tôi có thời gian. Tôi (dĩ nhiên) rất vui lòng đến.") ] },
          { label: "Nhận lời nhưng có giới hạn", items: [ s("Ich komme gern, aber nur am Nachmittag, denn ich muss ab ... Uhr arbeiten.", "Tôi rất muốn đến, nhưng chỉ buổi chiều thôi, vì từ ... giờ tôi phải làm việc.") ] },
          { label: "Từ chối", items: [ s("Ich kann leider nicht zur Party kommen. Ich bin am Sonntag bei meiner Mutter.", "Tiếc là tôi không đến dự tiệc được. Chủ nhật tôi ở chỗ mẹ."), s("Ich kann leider nur kurz kommen. / Ich kann vielleicht nicht kommen.", "Tiếc là tôi chỉ đến được một lát. / Có thể tôi không đến được.") ] }
        ] },
      { id: "ein-kompliment-machen", titleDe: "😊 Ein Kompliment machen",
        groups: [ { label: "Khen ngợi", items: [
          s("Seine / Ihre Kamera ist so toll!", "Chiếc máy ảnh của anh ấy / cô ấy tuyệt quá!"),
          q("Wie findest du Pekkas Sachen?", "Bạn thấy đồ của Pekka thế nào?", "Ich finde seine Hose cool.", "Tôi thấy quần của anh ấy rất ngầu.") ] } ] },
      { id: "essen-trinken-anbieten", titleDe: "🥤 Essen / Trinken anbieten",
        groups: [ { label: "Mời ăn và uống", items: [
          q("Was möchtest du trinken / essen?", "Bạn muốn uống / ăn gì?", "Ich nehme einen / ein / eine ...", "Tôi lấy một ..."),
          q("Möchtest du (noch) einen / ein / eine ...?", "Bạn có muốn (thêm) một ... không?", "Ja, gern. / Nein, danke. Ich trinke lieber ...", "Vâng, rất vui. / Không, cảm ơn. Tôi thích uống ... hơn."),
          s("Guten Appetit!", "Chúc ăn ngon miệng!") ] } ] },
      { id: "absprachen-treffen", titleDe: "🤝 Absprachen treffen",
        groups: [ { label: "Thống nhất công việc", items: [
          s("Oje, schon vier Uhr und wir sind noch nicht fertig!", "Ôi, đã 4 giờ rồi mà chúng ta vẫn chưa xong!"),
          q("Was müssen wir denn noch machen?", "Chúng ta còn phải làm gì nữa?", "Das müssen wir noch ...", "Chúng ta còn phải ...") ] } ] },
      { id: "eine-meinung-aeussern-16", titleDe: "💬 Eine Meinung äußern",
        groups: [ { label: "Nêu ý kiến", items: [
          s("Man darf nicht zu spät kommen. Das finde ich unhöflich.", "Không được đến muộn. Tôi thấy như vậy là bất lịch sự."),
          s("Für mich ist es sehr wichtig, ...", "Với tôi rất quan trọng là ..."),
          s("In meiner Familie / Bei meinen Freunden ist das so: ...", "Trong gia đình tôi / Với bạn bè tôi thì như thế này: ...") ] } ] },
      { id: "sich-entschuldigen-zuspaetkommen", titleDe: "⏰ Sich (für Zuspätkommen) entschuldigen",
        groups: [ { label: "Xin lỗi vì đến muộn", items: [
          s("Entschuldigung, ich bin zu spät. Tut mir leid.", "Xin lỗi, tôi đến muộn. Tôi rất tiếc."),
          s("Der Bus war zu spät. / Mein Fahrrad ist kaputt. / Ich habe verschlafen.", "Xe buýt đến muộn. / Xe đạp của tôi hỏng. / Tôi ngủ quên."),
          s("Ich brauche noch ... Minuten.", "Tôi cần thêm ... phút nữa.") ] } ] },
      { id: "auskunft-ueber-eine-person", titleDe: "🧑 Auskunft (über eine Person) geben",
        groups: [ { label: "Giới thiệu về một người", items: [
          s("Er / Sie ist (circa) ... Jahre alt.", "Anh ấy / cô ấy khoảng ... tuổi."),
          s("Seine / Ihre Mutter / Tochter / Freundin heißt ...", "Mẹ / con gái / bạn gái của anh ấy / cô ấy tên là ..."),
          s("Sein / Ihr Vater / Sohn / Freund ist ...", "Bố / con trai / bạn trai của anh ấy / cô ấy là ...") ] } ] }
    ],
    woerter: []
  };
})();
