/* A2 · Bài 2 · Die Einladung */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l02"] = {
    grammatik: [
      { id: "konjunktion-weil", titleDe: "🔗 Sätze: Konjunktion weil",
        blocks: [
          { type: "text", html: "<strong>weil</strong> = vì, bởi vì. Trả lời cho câu hỏi <strong>Warum?</strong>. Trong mệnh đề có <strong>weil</strong>, động từ đã chia đứng <strong>ở cuối</strong>." },
          { type: "table", head: ["Câu 1", "Câu 2 (rời)", "Câu ghép với weil"], rows: [
            ["Ich bin unsicher.", "Ich kenne die Regeln nicht.", "Ich bin unsicher, weil ich die Regeln nicht kenne."],
            ["Ich bin unzufrieden.", "Ich muss meine Nachbarin besuchen.", "Ich bin unzufrieden, weil ich meine Nachbarin besuchen muss."],
            ["Ich bin müde.", "Ich habe so viel gearbeitet.", "Ich bin müde, weil ich so viel gearbeitet habe."],
            ["Ich habe keine Zeit.", "Ich hole jetzt meine Kinder ab.", "Ich habe keine Zeit, weil ich jetzt meine Kinder abhole."] ] },
          { type: "note", html: "Với modal hoặc Perfekt, <strong>động từ đã chia đứng cuối cùng</strong> (… besuchen <strong>muss</strong>, … gearbeitet <strong>habe</strong>). Động từ tách <strong>dính liền</strong> khi đứng cuối (… <strong>abhole</strong>)." }
        ] },
      { id: "frage-was-fuer-ein", titleDe: "❔ Frage: Was für ein- + Akkusativ",
        blocks: [
          { type: "text", html: "<strong>Was für ein-</strong> dùng để hỏi về <strong>loại, kiểu</strong> của một thứ (“loại … nào?”)." },
          { type: "table", head: ["Giống", "Was für …", "Ví dụ danh từ"], rows: [
            ["Đực", "Was für einen …?", "Wein"], ["Trung", "Was für ein …?", "Getränk"], ["Cái", "Was für eine …?", "Suppe"], ["Số nhiều", "Was für …?", "Blumen"] ] },
          { type: "note", html: "Ở Akkusativ chỉ giống đực đổi: <strong>einen</strong>. Số nhiều không có mạo từ." }
        ] }
    ],
    kommunikation: [
      { id: "jemanden-beruhigen-ratschlaege", titleDe: "🕊️ Jemanden beruhigen und Ratschläge geben",
        groups: [ { label: "Trấn an và khuyên bảo", items: [
          s("Das ist doch nicht schlimm. Mach dir keine Sorgen.", "Không có gì nghiêm trọng đâu. Đừng lo."),
          s("Das ist doch ganz einfach! Du musst nur ...", "Việc đó dễ lắm mà! Bạn chỉ cần ..."),
          s("Ich würde ...", "Tôi sẽ ...") ] } ] },
      { id: "vergleichen-herkunftsland", titleDe: "🌏 Mit dem Herkunftsland / einer anderen Region vergleichen",
        groups: [ { label: "So sánh với quê hương", items: [
          q("Wie ist das bei Ihnen / bei dir?", "Ở chỗ ông/bà / bạn thì như thế nào?", "Bei uns ist das genauso / anders.", "Ở chỗ chúng tôi cũng như vậy / khác."),
          s("In ... ist das (nicht) so schlimm.", "Ở ... điều đó (không) tệ như vậy.") ] } ] },
      { id: "ueberraschung-ausdruecken", titleDe: "😲 Überraschung ausdrücken",
        groups: [ { label: "Bày tỏ sự ngạc nhiên", items: [
          s("Das überrascht mich.", "Điều đó làm tôi ngạc nhiên."),
          s("Das ist ja komisch.", "Lạ thật đấy."),
          s("Nicht zu glauben!", "Không thể tin được!") ] } ] },
      { id: "einladung-begruessung", titleDe: "🚪 Private Einladungen – Begrüßung",
        groups: [ { label: "Chào đón khách", items: [
          s("Komm (doch) rein!", "Vào đi nào!"),
          q("Hier. Ein Geschenk für dich.", "Đây, quà cho bạn.", "Oh, das ist aber nett! Vielen Dank!", "Ồ, bạn tử tế quá! Cảm ơn nhiều!") ] } ] },
      { id: "einladung-beim-essen", titleDe: "🍽️ Private Einladungen – beim Essen",
        groups: [ { label: "Trong bữa ăn", items: [
          q("Nimm doch bitte Platz! Was möchtest du trinken?", "Mời bạn ngồi! Bạn muốn uống gì?", "Danke, ich trinke keinen Alkohol.", "Cảm ơn, tôi không uống rượu."),
          q("Kannst du mir das Salz geben?", "Bạn đưa giúp tôi lọ muối được không?", "Hier! Bitte.", "Đây! Mời bạn."),
          s("Das ist ein bisschen scharf. Aber lecker!", "Món này hơi cay. Nhưng ngon!"),
          q("Möchtest du noch etwas?", "Bạn có muốn dùng thêm gì không?", "Ja, gern. / Nein, danke. Ich bin schon satt.", "Có, rất vui. / Không, cảm ơn. Tôi no rồi.") ] } ] },
      { id: "einladung-abschied-dank", titleDe: "👋 Private Einladungen – Abschied und Dank",
        groups: [ { label: "Chia tay và cảm ơn", items: [
          q("Jetzt muss ich leider gehen.", "Giờ tiếc là tôi phải đi rồi.", "Bleib doch noch ein bisschen.", "Ở lại thêm một chút đi."),
          s("Ich habe mich sehr über die Blumen gefreut. Vielen Dank!", "Tôi rất vui vì những bông hoa. Cảm ơn nhiều!"),
          s("Der Abend war sehr schön.", "Buổi tối thật tuyệt.") ] } ] },
      { id: "restaurant-bestellen", titleDe: "🍴 Im Restaurant – etwas bestellen",
        groups: [ { label: "Gọi món", items: [
          q("Was darf ich Ihnen bringen?", "Tôi có thể mang gì cho ông/bà?", "Ich nehme ... , bitte.", "Cho tôi ..., làm ơn."),
          q("Und was möchten Sie trinken?", "Và ông/bà muốn uống gì?", "Ein Wasser, bitte.", "Cho tôi một ly nước.") ] } ] },
      { id: "restaurant-bezahlen", titleDe: "💶 Im Restaurant – bezahlen",
        groups: [ { label: "Thanh toán", items: [
          s("Die Rechnung, bitte.", "Cho tôi hóa đơn."),
          q("Getrennt oder zusammen?", "Trả riêng hay trả chung?", "Zusammen, bitte.", "Trả chung."),
          q("Wie viel macht das?", "Hết bao nhiêu?", "Das macht ... Euro.", "Hết ... euro."),
          s("Stimmt so.", "Giữ lại tiền thừa.") ] } ] },
      { id: "restaurant-sich-beschweren", titleDe: "😠 Im Restaurant – sich beschweren",
        groups: [ { label: "Phàn nàn", items: [
          q("Verzeihen Sie.", "Xin lỗi.", "Ja, bitte?", "Vâng, ông/bà cần gì ạ?"),
          s("Ich habe ein Problem. Die Suppe ist kalt / zu salzig.", "Tôi có vấn đề. Món súp lạnh / quá mặn."),
          s("Entschuldigen Sie bitte.", "Xin ông/bà thứ lỗi.") ] } ] }
    ],
    woerter: []
  };
})();
