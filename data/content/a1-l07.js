/* A1 · Bài 7 · Heute regnet es. */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l07"] = {
    grammatik: [
      { id: "verbkonjugation-vokalwechsel-trennbar", titleDe: "⚙️ Verbkonjugation: Vokalwechsel und trennbare Verben",
        blocks: [
          { type: "table", head: ["", "schlafen", "treffen", "lesen", "anrufen", "fernsehen"], rows: [
            ["ich", "schlafe", "treffe", "lese", "rufe … an", "sehe … fern"],
            ["du", "schläfst", "triffst", "liest", "rufst … an", "siehst … fern"],
            ["er / sie", "schläft", "trifft", "liest", "ruft … an", "sieht … fern"],
            ["wir", "schlafen", "treffen", "lesen", "rufen … an", "sehen … fern"],
            ["ihr", "schlaft", "trefft", "lest", "ruft … an", "seht … fern"],
            ["sie / Sie", "schlafen", "treffen", "lesen", "rufen … an", "sehen … fern"] ] },
          { type: "note", html: "Nguyên âm đổi ở <em>du</em> và <em>er / sie</em>: <strong>a → ä</strong> (schlafen), <strong>e → i</strong> (treffen), <strong>e → ie</strong> (lesen, sehen). Với động từ tách, tiền tố (an, fern) bị tách ra cuối câu." }
        ] },
      { id: "trennbare-verben-satzklammer", titleDe: "🔗 Trennbare Verben: Satzklammer",
        blocks: [
          { type: "table", head: ["Động từ tách", "Tiền tố + động từ chính", "Nghĩa"], rows: [
            ["aufstehen", "auf + stehen", "thức dậy"], ["einkaufen", "ein + kaufen", "mua sắm"], ["aufräumen", "auf + räumen", "dọn dẹp"],
            ["anrufen", "an + rufen", "gọi điện"], ["fernsehen", "fern + sehen", "xem tivi"] ] },
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (động từ)", "Giữa câu", "Cuối câu (tiền tố)"], rows: [
            ["W-Frage", "Wann", "steht", "Hoa", "auf?"],
            ["Ja-/Nein-Frage", "—", "Kauft", "Hoa am Morgen", "ein?"],
            ["Aussage", "Sie", "steht", "um sechs Uhr", "auf."],
            ["Aussage", "Am Morgen", "räumt", "Hoa die Wohnung", "auf."] ] },
          { type: "note", html: "Động từ đã chia đứng đúng vị trí quy định, <strong>tiền tố đứng cuối câu</strong>. Sai: <em>Ich aufstehe um sechs.</em> Đúng: <em>Ich stehe um sechs auf.</em>" }
        ] },
      { id: "zeitadverbien-zuerst-dann-danach", titleDe: "⏭️ Zeitadverbien: zuerst, dann, danach",
        blocks: [
          { type: "table", head: ["Trạng từ", "Nghĩa"], rows: [
            ["zuerst", "đầu tiên, trước hết"], ["dann", "sau đó, tiếp theo"], ["danach", "sau đó, sau việc vừa nhắc"] ] },
          { type: "table", head: ["Vị trí 1", "Vị trí 2", "Phần còn lại", "Tiền tố"], rows: [
            ["Frau Fleißig", "weckt", "zuerst ihre Kinder", "auf."], ["Zuerst", "weckt", "Frau Fleißig ihre Kinder", "auf."] ] },
          { type: "note", html: "Khi <strong>zuerst / dann / danach</strong> đứng đầu câu, chúng chiếm vị trí 1, động từ vẫn ở vị trí 2 và chủ ngữ đứng sau động từ." }
        ] },
      { id: "temporale-praeposition-im", titleDe: "🕒 Temporale Präposition: im",
        blocks: [
          { type: "table", head: ["Giới từ", "Dùng với", "Ví dụ"], rows: [
            ["im", "mùa", "im Frühling, im Sommer, im Herbst, im Winter"], ["im", "tháng", "im Mai, im November"] ] }
        ] },
      { id: "saetze-ja-nein-doch", titleDe: "✅ Sätze: ja / nein / doch",
        blocks: [
          { type: "text", html: "Với câu hỏi <strong>phủ định</strong>, dùng <strong>doch</strong> để trả lời “có chứ” (phản bác ý phủ định), còn <strong>nein</strong> để xác nhận ý phủ định." },
          { type: "table", head: ["Loại câu hỏi", "Câu hỏi", "Đồng ý với nội dung", "Phủ nhận nội dung"], rows: [
            ["Khẳng định", "Essen wir jetzt Schokolade?", "Ja.", "Nein."],
            ["Phủ định", "Essen wir jetzt keine Schokolade?", "Doch!", "Nein."] ] }
        ] },
      { id: "pronomen-man", titleDe: "👥 Pronomen: man",
        blocks: [
          { type: "text", html: "<strong>man</strong> chỉ “người ta, mọi người” nói chung. Động từ chia như với <strong>er / sie / es</strong>." },
          { type: "table", head: ["Chủ ngữ", "Động từ nguyên mẫu", "Động từ đã chia"], rows: [
            ["man", "sagen", "sagt"], ["man", "essen", "isst"], ["man", "können", "kann"] ] },
          { type: "note", html: "Đừng nhầm <strong>man</strong> (người ta) với <strong>der Mann</strong> (người đàn ông). Đầu câu viết hoa thành <em>Man</em>." }
        ] }
    ],
    kommunikation: [
      { id: "ueber-das-wetter-sprechen", titleDe: "🌦️ Über das Wetter sprechen",
        groups: [
          { label: "Hỏi thời tiết", items: [
            q("Wie ist das Wetter heute?", "Hôm nay thời tiết thế nào?", "Heute ist es sonnig. / Es ist bewölkt und windig.", "Hôm nay trời nắng. / Trời nhiều mây và có gió."),
            q("Wie ist das Wetter in Hanoi?", "Thời tiết ở Hà Nội thế nào?", "In Hanoi ist es warm und sonnig.", "Ở Hà Nội trời ấm và nắng.") ] },
          { label: "Câu hỏi Có / Không", items: [
            q("Regnet es heute?", "Hôm nay trời có mưa không?", "Ja, es regnet. / Nein, es regnet nicht.", "Có, trời mưa. / Không, trời không mưa."),
            q("Scheint die Sonne?", "Có nắng không?", "Ja, die Sonne scheint. / Nein, die Sonne scheint nicht.", "Có, trời nắng. / Không, trời không nắng.") ] },
          { label: "Nhiệt độ và mùa", items: [
            q("Wie viel Grad sind es?", "Trời bao nhiêu độ?", "Es sind 25 Grad.", "Trời 25 độ."),
            q("Wie viel Grad sind es im Frühling?", "Mùa xuân trời bao nhiêu độ?", "Im Frühling sind es 15 bis 20 Grad.", "Mùa xuân trời từ 15 đến 20 độ."),
            q("Wie viel Grad sind es im Januar?", "Tháng Một trời bao nhiêu độ?", "Im Januar sind es minus zwei Grad. / plus fünf Grad.", "Tháng Một trời âm 2 độ. / dương 5 độ."),
            q("Schneit es im Winter viel?", "Mùa đông tuyết rơi nhiều không?", "Im Winter schneit es viel. / Im Winter schneit es wenig.", "Mùa đông tuyết rơi nhiều. / ít.") ] },
          { label: "Tháng yêu thích", items: [ q("Was ist dein Lieblingsmonat?", "Tháng yêu thích của bạn là tháng nào?", "Mein Lieblingsmonat ist der Januar.", "Tháng yêu thích của tôi là tháng Một.") ] },
          { label: "Mẫu trả lời nhanh", items: [
            s("Es ist + sonnig / bewölkt / windig / kalt / warm / neblig ...", "Trời + nắng / nhiều mây / có gió / lạnh / ấm / sương mù ..."),
            s("Es regnet. / Es schneit. / Die Sonne scheint.", "Trời mưa. / Trời có tuyết. / Trời nắng.") ] }
        ] },
      { id: "ueber-zeitplanung-sprechen", titleDe: "📅 Über Zeitplanung sprechen",
        groups: [
          { label: "Kể trình tự trong ngày", items: [
            q("Was machst du heute Nachmittag?", "Chiều nay bạn làm gì?", "Zuerst mache ich Sport. Dann dusche ich und danach kaufe ich ein.", "Đầu tiên tôi tập thể thao. Sau đó tôi tắm và rồi đi mua sắm.") ] },
          { label: "Hỏi giờ của một hoạt động", items: [
            q("Um wie viel Uhr stehst du auf?", "Bạn thức dậy lúc mấy giờ?", "Ich stehe um sechs Uhr auf.", "Tôi thức dậy lúc 6 giờ."),
            q("Um wie viel Uhr steht Herr Wagner auf?", "Ông Wagner thức dậy lúc mấy giờ?", "Er steht um halb sieben auf.", "Ông ấy thức dậy lúc 6 giờ 30.") ] }
        ] },
      { id: "sagen-was-es-zu-essen-gibt", titleDe: "🍲 Sagen, was es zu essen / trinken gibt",
        groups: [
          { label: "Hỏi và nói món có sẵn", items: [
            q("Was gibt es heute?", "Hôm nay có món gì?", "Heute gibt es Salat und Reis.", "Hôm nay có salad và cơm."),
            q("Gibt es heute Suppe?", "Hôm nay có súp không?", "Ja, heute gibt es Suppe. / Nein, heute gibt es keine Suppe.", "Có, hôm nay có súp. / Không, hôm nay không có súp."),
            s("Zum Frühstück gibt es Brot und Käse.", "Bữa sáng có bánh mì và phô mai.") ] }
        ] }
    ],
    woerter: []
  };
})();
