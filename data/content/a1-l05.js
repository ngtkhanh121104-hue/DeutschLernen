/* A1 · Bài 5 · Wann hast du Zeit? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l05"] = {
    grammatik: [
      { id: "artikel-akkusativ", titleDe: "📝 Artikel im Akkusativ: definit, indefinit, Negativartikel",
        blocks: [
          { type: "text", html: "<strong>Akkusativ</strong> dùng cho tân ngữ trực tiếp, thường sau các động từ như <strong>haben, brauchen, suchen, nehmen, möchten</strong>." },
          { type: "table", head: ["Giống", "Xác định", "Không xác định", "Phủ định", "Danh từ"], rows: [
            ["Đực", "den", "einen", "keinen", "Schlüssel"], ["Trung", "das", "ein", "kein", "Buch"], ["Cái", "die", "eine", "keine", "Uhr"] ] },
          { type: "note", html: "Chỉ <strong>giống đực</strong> thay đổi: der → <strong>den</strong>, ein → <strong>einen</strong>, kein → <strong>keinen</strong>. Giống trung, giống cái và số nhiều giữ nguyên như Nominativ." }
        ] },
      { id: "verbposition-im-satz", titleDe: "📍 Verbposition im Satz",
        blocks: [
          { type: "text", html: "Trong câu trần thuật, động từ đã chia luôn ở <strong>vị trí số 2</strong>. Có thể đưa thời gian hoặc thành phần khác lên đầu câu, khi đó chủ ngữ đứng sau động từ." },
          { type: "table", head: ["Vị trí 1", "Vị trí 2 (động từ)", "Phần còn lại"], rows: [
            ["Ich", "habe", "am Mittwochabend Zeit."], ["Am Mittwochabend", "habe", "ich Zeit."] ] }
        ] },
      { id: "temporale-praepositionen-am-um-von-bis", titleDe: "🕒 Temporale Präpositionen: am, um, von … bis",
        blocks: [
          { type: "table", head: ["Giới từ", "Dùng với", "Ví dụ"], rows: [
            ["am", "thứ trong tuần, buổi trong ngày", "am Mittwoch, am Nachmittag, am Mittwochnachmittag"],
            ["⚠ in der", "ban đêm (không dùng am)", "in der Nacht"],
            ["um", "giờ cụ thể", "um 20 Uhr, um halb sieben"],
            ["von … bis", "khoảng thời gian", "von Montag bis Donnerstag, von 13 bis 19 Uhr"] ] },
          { type: "table", head: ["Giờ", "Cách nói"], rows: [
            ["6:30", "halb sieben"], ["9:10", "zehn nach neun"], ["9:45", "Viertel vor zehn"], ["1:35", "fünf nach halb zwei"] ] },
          { type: "note", html: "<strong>halb sieben</strong> nghĩa là <em>nửa giờ trước bảy giờ</em>, tức 6:30, không phải 7:30." }
        ] }
    ],
    kommunikation: [
      { id: "nach-der-uhrzeit-fragen", titleDe: "🕒 Nach der Uhrzeit fragen",
        groups: [ { label: "Hỏi giờ", items: [ q("Wie spät ist es? / Wie viel Uhr ist es?", "Mấy giờ rồi?", "Es ist 10:15 Uhr (zehn Uhr fünfzehn / Viertel nach zehn).", "Bây giờ là 10 giờ 15.") ] } ] },
      { id: "ueber-zeitplanung-sprechen", titleDe: "📅 Über Zeitplanung sprechen",
        groups: [
          { label: "Hỏi khi nào", items: [ q("Wann lernst du Deutsch?", "Khi nào bạn học tiếng Đức?", "Ich lerne am Mittag Deutsch.", "Tôi học tiếng Đức vào buổi trưa.") ] },
          { label: "Hỏi ai làm lúc nào", items: [ q("Wer arbeitet um 20 Uhr?", "Ai làm việc lúc 20 giờ?", "Mein Bruder arbeitet um 20 Uhr.", "Anh trai tôi làm việc lúc 20 giờ.") ] },
          { label: "Hỏi khoảng thời gian", items: [
            q("Von wann bis wann arbeitest du?", "Bạn làm việc từ mấy giờ đến mấy giờ?", "Ich arbeite von acht Uhr bis siebzehn Uhr.", "Tôi làm việc từ 8 giờ đến 17 giờ."),
            q("Was machst du von Montag bis Freitag?", "Từ thứ Hai đến thứ Sáu bạn làm gì?", "Ich arbeite von Montag bis Freitag.", "Tôi làm việc từ thứ Hai đến thứ Sáu.") ] }
        ] },
      { id: "um-etwas-bitten", titleDe: "🙏 Um etwas bitten",
        groups: [
          { label: "Nhờ đưa một đồ vật", items: [
            { satz: { de: "Ich brauche einen / ein / eine ...", vi: "Tôi cần một ..." } },
            q("Hast du einen / ein / eine ...?", "Bạn có ... không?", "Ja. Hier, bitte.", "Có. Của bạn đây."),
            q("Hast du einen / ein / eine ...?", "Bạn có ... không?", "Nein, tut mir leid. Ich habe keinen / kein / keine ...", "Không, rất tiếc. Tôi không có ...") ] }
        ] },
      { id: "ueber-oeffnungszeiten-sprechen", titleDe: "🏪 Über Öffnungszeiten sprechen",
        groups: [ { label: "Hỏi cửa hàng có mở không", items: [ q("Ist der Blumenladen / das Restaurant / die ... geöffnet?", "Cửa hàng hoa / nhà hàng / ... có mở cửa không?", "Nein. Am Montag ist der / das / die ... geschlossen.", "Không. Thứ Hai ... đóng cửa.") ] } ] },
      { id: "sich-verabreden", titleDe: "🤝 Sich verabreden",
        groups: [ { label: "Hẹn gặp", items: [
          q("Hast du am Abend / um ... Uhr Zeit?", "Bạn có thời gian vào buổi tối / lúc ... giờ không?", "Ja. Am / Um ... habe ich Zeit.", "Có. Vào lúc ... tôi có thời gian."),
          q("Hast du am Abend / um ... Uhr Zeit?", "Bạn có thời gian vào buổi tối / lúc ... giờ không?", "Nein. Am / Um ... habe ich leider keine Zeit.", "Không. Vào lúc ... tiếc là tôi không có thời gian.") ] } ] },
      { id: "etwas-vorschlagen", titleDe: "💡 Etwas vorschlagen",
        groups: [ { label: "Đề nghị giờ giấc", items: [
          q("Wann hast du Zeit? So um ...?", "Khi nào bạn có thời gian? Khoảng lúc ... nhé?", "Nein, leider nicht. Um ... habe ich schon einen Termin.", "Tiếc là không được. Lúc ... tôi đã có hẹn."),
          q("Und am Nachmittag / Abend?", "Còn buổi chiều / tối thì sao?", "Na klar. So um ... habe ich Zeit.", "Được chứ. Khoảng lúc ... tôi có thời gian."),
          { satz: { de: "Super! / Okay!", vi: "Tuyệt! / Được!" } } ] } ] }
    ],
    woerter: []
  };
})();
