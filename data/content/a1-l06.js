/* A1 · Bài 6 · Haben Sie keine Croissants? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l06"] = {
    grammatik: [
      { id: "verbkonjugation-essen-nehmen-moegen", titleDe: "⚙️ Verbkonjugation: essen, nehmen, mögen, möchte",
        blocks: [
          { type: "table", head: ["", "essen", "nehmen", "mögen", "möchte"], rows: [
            ["ich", "esse", "nehme", "mag", "möchte"],
            ["du", "isst", "nimmst", "magst", "möchtest"],
            ["er / sie", "isst", "nimmt", "mag", "möchte"],
            ["wir", "essen", "nehmen", "mögen", "möchten"],
            ["ihr", "esst", "nehmt", "mögt", "möchtet"],
            ["sie / Sie", "essen", "nehmen", "mögen", "möchten"] ] },
          { type: "note", html: "<strong>essen</strong> và <strong>nehmen</strong> đổi nguyên âm <strong>e → i</strong> ở <em>du</em> và <em>er / sie</em> (nehmen còn đổi thành <em>nimm-</em>). <strong>mögen</strong> = thích; <strong>möchte</strong> = muốn (lịch sự), thường đi với danh từ ở Akkusativ hoặc một động từ nguyên mẫu." }
        ] },
      { id: "nomen-und-artikel-plural", titleDe: "🧺 Nomen und Artikel: Plural",
        blocks: [
          { type: "text", html: "Danh từ số nhiều không có một công thức duy nhất, cần học thuộc từng từ. Mạo từ xác định số nhiều luôn là <strong>die</strong>." },
          { type: "table", head: ["Cách tạo số nhiều", "Số ít", "Số nhiều"], rows: [
            ["– (không đổi)", "das Brötchen", "die Brötchen"], ["¨ (đổi nguyên âm)", "der Apfel", "die Äpfel"],
            ["-e", "das Brot", "die Brote"], ["¨ + -e", "der Baum", "die Bäume"],
            ["-er", "das Ei", "die Eier"], ["¨ + -er", "das Buch", "die Bücher"],
            ["-n", "die Birne", "die Birnen"], ["-en", "die Uhr", "die Uhren"], ["-s", "das Croissant", "die Croissants"] ] },
          { type: "table", head: ["Cách", "Giống", "Xác định", "Không xác định", "Phủ định"], rows: [
            ["Nominativ", "đực / trung / cái", "der / das / die", "ein / ein / eine", "kein / kein / keine"],
            ["Nominativ", "số nhiều", "die", "—", "keine"],
            ["Akkusativ", "đực / trung / cái", "den / das / die", "einen / ein / eine", "keinen / kein / keine"],
            ["Akkusativ", "số nhiều", "die", "—", "keine"] ] },
          { type: "note", html: "Số nhiều <strong>không có</strong> mạo từ không xác định; muốn phủ định dùng <strong>keine</strong>." }
        ] },
      { id: "wortbildung-komposita", titleDe: "🧩 Wortbildung: Komposita",
        blocks: [
          { type: "text", html: "Hai hay nhiều từ ghép thành một danh từ mới, viết liền. <strong>Từ cuối cùng</strong> quyết định giống (der/die/das) và nghĩa chính." },
          { type: "table", head: ["Cấu tạo", "Danh từ ghép", "Nghĩa"], rows: [
            ["das Schinken + das Brötchen", "das Schinkenbrötchen", "bánh mì kẹp giăm bông"],
            ["die Birne + der Kuchen", "der Birnenkuchen", "bánh lê"],
            ["die Banane + die Milch", "die Bananenmilch", "sữa chuối"] ] },
          { type: "note", html: "Mẹo hiểu nghĩa: đọc từ <strong>phải sang trái</strong>. Từ đứng trước chỉ bổ nghĩa cho từ cuối." }
        ] },
      { id: "praepositionen-mit-ohne", titleDe: "📌 Modale Präpositionen: mit, ohne",
        blocks: [
          { type: "table", head: ["Giới từ", "Nghĩa", "Ghi chú"], rows: [
            ["mit", "cùng với, có", "đi với Dativ (học kỹ ở Bài 10)"],
            ["ohne", "không có", "đi với Akkusativ"] ] },
          { type: "note", html: "Ở bài này dùng với đồ ăn, thức uống không có mạo từ, ví dụ: <em>mit Milch</em>, <em>ohne Zucker</em>." }
        ] }
    ],
    kommunikation: [
      { id: "etwas-bestellen", titleDe: "☕ Etwas bestellen",
        groups: [
          { label: "Gọi món", items: [
            q("Was nimmst du? / Was nehmen Sie?", "Bạn chọn món gì? / Quý khách chọn món gì ạ?", "Ich nehme einen Milchkaffee.", "Tôi chọn một ly cà phê sữa."),
            s("Ich hätte gern ein Croissant.", "Tôi muốn một chiếc bánh sừng bò."),
            s("Ich möchte noch ... , bitte.", "Cho tôi thêm ... ạ.") ] },
          { label: "Phục vụ hỏi thêm và tính tiền", items: [
            q("Möchten Sie sonst noch etwas?", "Quý khách dùng thêm gì không ạ?", "Nein, danke. Das ist alles.", "Không, cảm ơn. Vậy là đủ."),
            s("Das macht dann ... Euro. – Hier, bitte. – Vielen Dank.", "Tổng cộng ... euro. – Của bạn đây. – Cảm ơn nhiều.") ] }
        ] },
      { id: "nach-dem-preis-fragen", titleDe: "💶 Nach dem Preis fragen",
        groups: [
          { label: "Hỏi giá", items: [
            q("Wie viel kostet das Buch? / Was kostet ein Kaffee?", "Cuốn sách giá bao nhiêu? / Một ly cà phê giá bao nhiêu?", "Es kostet 2,56 €. / Ein Kaffee kostet 3 €.", "Giá 2,56 euro. / Một ly cà phê giá 3 euro.") ] },
          { label: "Nhận xét về giá", items: [ q("Das ist teuer!", "Đắt thật!", "Ja, das stimmt. / Nein, das ist billig.", "Đúng vậy. / Không, rẻ mà.") ] }
        ] },
      { id: "vorlieben-beim-essen", titleDe: "🍽️ Über Vorlieben beim Essen sprechen",
        groups: [
          { label: "Món và đồ uống yêu thích", items: [
            q("Was ist dein Lieblingsessen?", "Món ăn yêu thích của bạn là gì?", "Mein Lieblingsessen ist Pizza.", "Món yêu thích của tôi là pizza."),
            q("Was ist dein Lieblingsgetränk?", "Đồ uống yêu thích của bạn là gì?", "Mein Lieblingsgetränk ist Kaffee.", "Đồ uống yêu thích của tôi là cà phê.") ] },
          { label: "Thích hoặc không thích", items: [
            q("Trinkst du gern Milch?", "Bạn có thích uống sữa không?", "Ja, ich trinke gern Milch. / Nein, ich trinke nicht gern Milch.", "Có, tôi thích uống sữa. / Không, tôi không thích uống sữa."),
            s("Ich mag Käse. / Ich mag keinen Käse.", "Tôi thích phô mai. / Tôi không thích phô mai."),
            s("Ich esse kein Fleisch.", "Tôi không ăn thịt."),
            q("Magst du Kaffee mit Milch?", "Bạn thích cà phê có sữa không?", "Ja. / Nein, ich mag Kaffee ohne Milch.", "Có. / Không, tôi thích cà phê không sữa.") ] },
          { label: "Tần suất trong bữa ăn", items: [
            q("Wie oft trinkst du Saft zum Frühstück?", "Bạn uống nước ép vào bữa sáng thường xuyên thế nào?", "Ich trinke oft Saft zum Frühstück.", "Tôi thường uống nước ép vào bữa sáng."),
            s("immer – meistens – oft – manchmal – selten – nie", "luôn luôn – hầu hết – thường – thỉnh thoảng – hiếm khi – không bao giờ") ] }
        ] },
      { id: "bedauern-ausdruecken", titleDe: "😔 Bedauern ausdrücken",
        groups: [ { label: "Nói tiếc", items: [ s("Das finde ich schade.", "Tôi thấy tiếc quá.") ] } ] }
    ],
    woerter: []
  };
})();
