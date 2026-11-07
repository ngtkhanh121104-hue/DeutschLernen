/* A1 · Bài 10 · Was ist denn WIN? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l10"] = {
    grammatik: [
      { id: "perfekt-trennbar-ieren", titleDe: "🕰️ Verben: Perfekt bei trennbaren Verben und Verben mit -ieren",
        blocks: [
          { type: "table", head: ["Loại động từ", "Nguyên mẫu", "Perfekt"], rows: [
            ["Động từ tách", "aufstehen", "ist aufgestanden"], ["Động từ tách", "anrufen", "hat angerufen"],
            ["Động từ tách", "ansehen", "hat angesehen"], ["Động từ tách", "anfangen", "hat angefangen"],
            ["Động từ -ieren", "fotografieren", "hat fotografiert"], ["Động từ -ieren", "studieren", "hat studiert"] ] },
          { type: "note", html: "Động từ tách: <strong>tiền tố + ge + phần động từ chính</strong> (an<strong>ge</strong>rufen). Động từ <strong>-ieren</strong> <strong>không có ge-</strong> (fotografiert). <strong>aufstehen</strong> dùng <em>sein</em>, các động từ còn lại ở bảng dùng <em>haben</em>." }
        ] },
      { id: "es-gibt-akkusativ", titleDe: "🏙️ Verben: es gibt + Akkusativ",
        blocks: [
          { type: "text", html: "<strong>es gibt</strong> = “có” (tồn tại), luôn đi với <strong>Akkusativ</strong>." },
          { type: "table", head: ["Giống", "Es gibt …", "Danh từ mẫu"], rows: [
            ["Đực", "einen", "Laden"], ["Trung", "ein", "Café"], ["Cái", "eine", "Bäckerei"], ["Số nhiều", "(zwei) / không có mạo từ", "Cafés"] ] }
        ] },
      { id: "definiter-artikel-dativ", titleDe: "📘 Nomen und Artikel: definiter Artikel im Dativ",
        blocks: [
          { type: "table", head: ["Giống", "Nominativ", "Dativ", "Ví dụ"], rows: [
            ["Đực", "der", "dem", "der Bus → dem Bus"], ["Trung", "das", "dem", "das Fahrrad → dem Fahrrad"],
            ["Cái", "die", "der", "die U-Bahn → der U-Bahn"], ["Số nhiều", "die", "den (+ -n)", "die Busse → den Bussen"] ] },
          { type: "note", html: "Nhớ nhanh: <strong>der + das → dem</strong>; <strong>die → der</strong>; số nhiều → <strong>den</strong> và danh từ thường thêm <strong>-n</strong>." }
        ] },
      { id: "praeposition-zu-dativ", titleDe: "📍 Lokale Präposition: zu + Dativ",
        blocks: [
          { type: "text", html: "<strong>zu</strong> trả lời câu hỏi <strong>Wohin?</strong> và chỉ hướng đi đến một người, cơ quan hoặc địa điểm cụ thể." },
          { type: "table", head: ["Giống", "Dạng đầy đủ", "Rút gọn", "Ví dụ"], rows: [
            ["Đực", "zu dem", "zum", "zum Park"], ["Trung", "zu dem", "zum", "zum Museum"],
            ["Cái", "zu der", "zur", "zur Haltestelle"], ["Số nhiều", "zu den", "không rút gọn", "zu den Freunden"] ] },
          { type: "table", head: ["Giới từ", "Dùng khi"], rows: [
            ["zu", "đến người, cơ quan, địa điểm cụ thể"], ["nach", "đến thành phố, nước không có mạo từ"], ["in + Akkusativ", "đi vào bên trong một nơi"] ] }
        ] },
      { id: "praeposition-mit-dativ", titleDe: "🚌 Modale Präposition: mit + Dativ",
        blocks: [
          { type: "text", html: "<strong>mit</strong> chỉ phương tiện đi lại; danh từ theo sau luôn ở <strong>Dativ</strong>." },
          { type: "table", head: ["Giống", "Danh từ", "mit + Dativ"], rows: [
            ["Đực", "der Bus", "mit dem Bus"], ["Trung", "das Fahrrad", "mit dem Fahrrad"], ["Cái", "die U-Bahn", "mit der U-Bahn"],
            ["Số nhiều", "die Verkehrsmittel", "mit den Verkehrsmitteln"] ] },
          { type: "note", html: "Đi bộ không dùng <em>mit</em>, mà nói <strong>zu Fuß</strong>." }
        ] }
    ],
    kommunikation: [
      { id: "nach-dem-weg-fragen", titleDe: "🗺️ Nach dem Weg fragen und den (Fuß-)Weg beschreiben",
        groups: [
          { label: "Hỏi gần đây có nơi nào không", items: [
            q("Entschuldigung, gibt es hier in der Nähe ein Museum?", "Xin lỗi, gần đây có bảo tàng không?", "Ja, hier gibt es ein Museum.", "Có, ở đây có một bảo tàng."),
            q("Gibt es hier in der Nähe ein Museum?", "Gần đây có bảo tàng không?", "Nein, leider nicht. / Tut mir leid, ich bin nicht von hier.", "Không, rất tiếc. / Xin lỗi, tôi không phải người ở đây.") ] },
          { label: "Hỏi cách đi", items: [
            s("Wie komme ich von hier zum Bahnhof / zur Bibliothek?", "Từ đây tôi đến nhà ga / thư viện bằng cách nào?"),
            s("Können Sie mir den Weg zum Museum erklären?", "Ông/bà có thể chỉ đường đến bảo tàng giúp tôi không?") ] },
          { label: "Chỉ đường", items: [
            s("Gehen Sie zuerst (ungefähr 200 Meter) geradeaus.", "Đầu tiên đi thẳng (khoảng 200 mét)."),
            s("Sie gehen die erste / zweite ... Straße nach links / rechts.", "Đi vào con đường thứ nhất / thứ hai ... bên trái / phải."),
            s("Gehen Sie weiter geradeaus. Dann gehen Sie wieder nach links.", "Tiếp tục đi thẳng. Sau đó lại rẽ trái."),
            s("Da sehen Sie das Museum schon rechts.", "Ở đó bạn sẽ thấy bảo tàng ngay bên phải.") ] },
          { label: "Hỏi có đi bộ được không", items: [
            q("Kann ich zu Fuß gehen?", "Tôi có thể đi bộ không?", "Ja, das ist nicht weit. / Nein, das ist zu weit.", "Được, không xa. / Không, quá xa.") ] },
          { label: "Cảm ơn", items: [ s("Vielen Dank! / Danke schön! – Gern. / Sehr gern. / Kein Problem.", "Cảm ơn nhiều! – Không có gì. / Không vấn đề gì.") ] }
        ] },
      { id: "weg-im-oeffentlichen-verkehr", titleDe: "🚇 Einen Weg im öffentlichen (Nah-)Verkehr beschreiben",
        groups: [
          { label: "Hỏi đường dùng phương tiện công cộng", items: [ s("Wie komme ich (denn von hier) zum Bahnhof / zur Post?", "Từ đây tôi đến nhà ga / bưu điện bằng cách nào?") ] },
          { label: "Mô tả hành trình", items: [
            s("Sie nehmen die U-Bahn / den Bus.", "Bạn đi tàu điện ngầm / xe buýt."),
            s("Sie fahren zwei Stationen mit der U-Bahn Richtung ...", "Bạn đi hai trạm bằng tàu điện ngầm theo hướng ..."),
            s("Sie steigen bei der Station ... um / aus.", "Bạn đổi tàu / xuống ở trạm ..."),
            s("Dann gehen Sie zur Bushaltestelle und fahren mit dem Bus Nummer ...", "Sau đó bạn đi đến trạm xe buýt và đi xe buýt số ...") ] }
        ] }
    ],
    woerter: []
  };
})();
