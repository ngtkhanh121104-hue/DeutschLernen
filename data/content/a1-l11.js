/* A1 · Bài 11 · Gefällt dir das Zimmer? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l11"] = {
    grammatik: [
      { id: "verbkonjugation-gefallen", titleDe: "⚙️ Verbkonjugation: gefallen",
        blocks: [
          { type: "table", head: ["", "gefallen"], rows: [
            ["ich", "gefalle"], ["du", "gefällst"], ["er / sie", "gefällt"], ["wir", "gefallen"], ["ihr", "gefallt"], ["sie / Sie", "gefallen"] ] },
          { type: "note", html: "<strong>a → ä</strong> ở <em>du</em> và <em>er / sie</em>. Thực tế <strong>gefallen</strong> thường dùng ở ngôi 3: <em>gefällt</em> (chủ ngữ số ít) và <em>gefallen</em> (số nhiều)." }
        ] },
      { id: "verben-mit-dativ", titleDe: "❤️ Verben mit Dativ: gefallen, gehören, danken, helfen",
        blocks: [
          { type: "text", html: "Với <strong>gefallen</strong>, người cảm thấy thích đứng ở <strong>Dativ</strong>, còn vật được thích là <strong>chủ ngữ</strong>. Các động từ <strong>gehören, danken, helfen</strong> cũng đi với Dativ." },
          { type: "table", head: ["Chủ ngữ", "Động từ", "Dativ", "Ví dụ"], rows: [
            ["der / das / die", "gefällt", "mir / dir / ihm / ihr", "Das Zimmer gefällt mir."],
            ["die (số nhiều)", "gefallen", "uns / euch / ihnen / Ihnen", "Die Zimmer gefallen uns."] ] },
          { type: "note", html: "Sai: <em>Ich gefalle das Zimmer.</em> Đúng: <em>Das Zimmer gefällt mir.</em>" }
        ] },
      { id: "demonstrativartikel", titleDe: "👉 Nomen und Artikel: Demonstrativartikel der, das, die",
        blocks: [
          { type: "text", html: "<strong>der / das / die</strong> có thể đứng một mình để thay cho danh từ đã nhắc đến." },
          { type: "table", head: ["Danh từ", "Nominativ", "Akkusativ"], rows: [
            ["der Stuhl", "Der", "Den"], ["das Sofa", "Das", "Das"], ["die Lampe", "Die", "Die"], ["die Lampen", "Die", "Die"] ] },
          { type: "note", html: "Chỉ <strong>giống đực</strong> thay đổi ở Akkusativ: <em>der → den</em>." }
        ] },
      { id: "personalpronomen-dativ", titleDe: "👤 Personalpronomen im Dativ",
        blocks: [
          { type: "table", head: ["Nominativ", "Dativ", "Nghĩa"], rows: [
            ["ich", "mir", "cho tôi"], ["du", "dir", "cho bạn"], ["er / es", "ihm", "cho anh ấy / nó"], ["sie", "ihr", "cho cô ấy"],
            ["wir", "uns", "cho chúng tôi"], ["ihr", "euch", "cho các bạn"], ["sie", "ihnen", "cho họ"], ["Sie", "Ihnen", "cho ngài"] ] }
        ] },
      { id: "lokale-praepositionen-dativ", titleDe: "📍 Lokale Präpositionen: an, auf, hinter, in, neben, unter, über, vor, zwischen + Dativ",
        blocks: [
          { type: "text", html: "Khi nói <strong>vị trí cố định</strong> (câu hỏi <strong>Wo?</strong>), các giới từ này đi với <strong>Dativ</strong>." },
          { type: "table", head: ["Giới từ", "Nghĩa"], rows: [
            ["an", "sát, bên cạnh (có tiếp xúc)"], ["auf", "ở trên (có tiếp xúc)"], ["hinter", "phía sau"], ["in", "bên trong"], ["neben", "bên cạnh"],
            ["unter", "phía dưới"], ["über", "phía trên (không tiếp xúc)"], ["vor", "phía trước"], ["zwischen", "ở giữa"] ] },
          { type: "table", head: ["Giống", "Xác định", "Không xác định", "Sở hữu", "Danh từ mẫu"], rows: [
            ["Đực / trung", "dem", "einem", "meinem / deinem", "Kühlschrank / Buch"], ["Cái", "der", "einer", "meiner / deiner", "Spülmaschine"], ["Số nhiều", "den (+ -n)", "—", "meinen / deinen", "Büchern"] ] },
          { type: "note", html: "Rút gọn: <strong>in + dem = im</strong>, <strong>an + dem = am</strong>." }
        ] }
    ],
    kommunikation: [
      { id: "ueber-die-wohnung-sprechen", titleDe: "🏠 Über die Wohnung sprechen",
        groups: [
          { label: "Hỏi đồ vật ở đâu", items: [
            q("Wo ist das Handy?", "Điện thoại ở đâu?", "Das Handy ist in der Tasche.", "Điện thoại ở trong túi."),
            q("Wo sind die Bücher?", "Những quyển sách ở đâu?", "Die Bücher sind im Regal.", "Sách ở trong kệ.") ] },
          { label: "Hỏi có đồ vật gì trong nhà", items: [
            q("Hast du in deiner Wohnung einen Herd?", "Trong nhà bạn có bếp nấu không?", "Ja, ich habe einen Herd zu Hause. Aber er ist kaputt.", "Có, nhà tôi có bếp nấu. Nhưng nó hỏng rồi."),
            q("Hast du in deinem Zimmer ...?", "Trong phòng bạn có ... không?", "Nein, ich habe gar keinen / kein / keine ...", "Không, tôi hoàn toàn không có ...") ] }
        ] },
      { id: "auskuenfte-wohnung-haus", titleDe: "🏢 Auskünfte über eine Wohnung / ein Haus geben",
        groups: [ { label: "Mô tả căn hộ hoặc ngôi nhà", items: [
          s("Die Wohnung ist im Erdgeschoss / im ersten Stock.", "Căn hộ ở tầng trệt / tầng một."),
          s("Das Haus hat einen / keinen Aufzug.", "Ngôi nhà có / không có thang máy."),
          s("Die Wohnung hat ... Zimmer.", "Căn hộ có ... phòng."),
          s("Die Wohnung kostet ... Euro.", "Căn hộ giá ... euro.") ] } ] },
      { id: "gefallen-und-missfallen", titleDe: "👍 Gefallen und Missfallen ausdrücken",
        groups: [
          { label: "Hỏi cảm nhận với gefallen", items: [
            q("Wie gefällt dir der Balkon?", "Bạn thấy ban công thế nào?", "Der Balkon gefällt mir sehr gut.", "Tôi rất thích ban công."),
            q("Wie gefällt dir die Küche?", "Bạn thấy nhà bếp thế nào?", "Die Küche gefällt mir nicht so gut.", "Tôi không thích nhà bếp lắm."),
            q("Wie gefallen dir die Zimmer?", "Bạn thấy các căn phòng thế nào?", "Die Zimmer gefallen mir sehr gut.", "Tôi rất thích các căn phòng.") ] },
          { label: "Hỏi bằng “finden”", items: [
            q("Wie findest du den Stuhl / das Sofa / die Lampe?", "Bạn thấy cái ghế / ghế sofa / cái đèn thế nào?", "Den / Das / Die finde ich (sehr) schön.", "Tôi thấy nó (rất) đẹp."),
            s("Ich finde den Stuhl klein und dunkel.", "Tôi thấy cái ghế nhỏ và tối.") ] }
        ] },
      { id: "informationen-zu-moebeln", titleDe: "🪑 Informationen zu Möbeln / Produkten erfragen",
        groups: [
          { label: "Hỏi kích thước", items: [
            q("Wie lang ist der Tisch?", "Cái bàn dài bao nhiêu?", "Der Tisch ist ein Meter lang.", "Cái bàn dài một mét."),
            s("Wie hoch / breit / tief ist ...?", "... cao / rộng / sâu bao nhiêu?") ] },
          { label: "Hỏi màu sắc và chất liệu", items: [
            s("Welche Farbe hat ...?", "... có màu gì?"),
            s("Er ist weiß und aus Holz.", "Nó màu trắng và làm bằng gỗ."),
            s("Er ist 190 cm hoch, 55 cm breit und 140 cm lang.", "Nó cao 190 cm, rộng 55 cm và dài 140 cm.") ] }
        ] }
    ],
    woerter: []
  };
})();
