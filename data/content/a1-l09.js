/* A1 · Bài 9 · Wie war dein Tag? */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l09"] = {
    grammatik: [
      { id: "praeteritum-haben-sein", titleDe: "🕰️ Verben: Präteritum von haben und sein",
        blocks: [
          { type: "text", html: "Trong giao tiếp, <strong>haben</strong> và <strong>sein</strong> thường dùng ở quá khứ đơn (Präteritum): haben → <strong>hatte</strong>, sein → <strong>war</strong>." },
          { type: "table", head: ["", "haben", "sein"], rows: [
            ["ich", "hatte", "war"], ["du", "hattest", "warst"], ["er / sie", "hatte", "war"],
            ["wir", "hatten", "waren"], ["ihr", "hattet", "wart"], ["sie / Sie", "hatten", "waren"] ] }
        ] },
      { id: "perfekt-partizip", titleDe: "🕰️ Verben: Perfekt und Partizip II",
        blocks: [
          { type: "text", html: "<strong>Perfekt</strong> = <strong>haben / sein</strong> đã chia + <strong>Partizip II</strong> (đứng cuối câu). Đây là dạng quá khứ phổ biến nhất trong giao tiếp." },
          { type: "table", head: ["Nhóm động từ", "Công thức Partizip II", "Ví dụ"], rows: [
            ["Có quy tắc", "ge- + thân từ + -(e)t", "machen → gemacht, kaufen → gekauft, sparen → gespart"],
            ["Thân từ kết thúc -t / -d", "ge- + thân từ + -et", "arbeiten → gearbeitet"],
            ["Bất quy tắc", "ge- … -en (thường)", "sehen → gesehen, sprechen → gesprochen, fahren → gefahren"],
            ["Kết thúc -ieren", "không có ge-", "fotografieren → fotografiert, studieren → studiert"],
            ["⚠ Đặc biệt", "cần học thuộc", "denken → gedacht, bringen → gebracht, sein → gewesen"] ] }
        ] },
      { id: "perfekt-mit-sein", titleDe: "🚲 Verben: Perfekt mit sein",
        blocks: [
          { type: "text", html: "Động từ chỉ <strong>di chuyển</strong> hoặc <strong>thay đổi vị trí</strong> tạo Perfekt với <strong>sein</strong>; đa số động từ khác dùng <strong>haben</strong>." },
          { type: "table", head: ["Động từ", "Perfekt"], rows: [
            ["gehen", "ist gegangen"], ["fahren", "ist gefahren"], ["schwimmen", "ist geschwommen"],
            ["fliegen", "ist geflogen"], ["kommen", "ist gekommen"], ["joggen", "ist gejoggt"] ] }
        ] },
      { id: "satzklammer-perfekt", titleDe: "📍 Sätze: Satzklammer bei Perfekt",
        blocks: [
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (haben/sein)", "Giữa câu", "Cuối câu (Partizip II)"], rows: [
            ["W-Frage", "Was", "haben", "Sie", "gemacht?"],
            ["Ja-/Nein-Frage", "—", "Hat", "Emin am Samstagabend", "getanzt?"],
            ["Ja-/Nein-Frage", "—", "Bist", "du", "geschwommen?"],
            ["Aussage", "Wir", "haben", "das Geld", "gespart."] ] }
        ] },
      { id: "adjektive-letzt-naechst", titleDe: "📅 Adjektive: letzt-, nächst-",
        blocks: [
          { type: "text", html: "<strong>letzt-</strong> = vừa qua, trước. <strong>nächst-</strong> = tiếp theo, sắp tới. Đuôi đổi theo giống danh từ khi không có mạo từ." },
          { type: "table", head: ["Giống", "Danh từ", "letzt-", "nächst-"], rows: [
            ["der → -en", "der Dienstag", "letzten Dienstag", "nächsten Dienstag"],
            ["das → -es", "das Wochenende", "letztes Wochenende", "nächstes Wochenende"],
            ["die → -e", "die Woche", "letzte Woche", "nächste Woche"] ] }
        ] }
    ],
    kommunikation: [
      { id: "ueber-vergangenes-berichten", titleDe: "🕰️ Über Vergangenes berichten",
        groups: [
          { label: "Hỏi người ta đã làm gì", items: [
            q("Was hast du gestern gemacht?", "Hôm qua bạn đã làm gì?", "Ich habe gestern Deutsch gelernt.", "Hôm qua tôi đã học tiếng Đức."),
            s("Ich habe einen Film gesehen. / Ich habe die Wohnung aufgeräumt.", "Tôi đã xem một bộ phim. / Tôi đã dọn dẹp căn hộ.") ] },
          { label: "Hỏi người ta đã ở đâu", items: [
            q("Wo warst du gestern? Hattest du frei?", "Hôm qua bạn đã ở đâu? Bạn có được nghỉ không?", "Ja, ich hatte gestern frei. Ich war im Technikmarkt.", "Có, hôm qua tôi được nghỉ. Tôi đã ở cửa hàng điện máy.") ] },
          { label: "Hỏi về di chuyển", items: [
            q("Wohin bist du am Wochenende gefahren?", "Cuối tuần bạn đã đi đâu?", "Ich bin am Wochenende nach Berlin gefahren.", "Cuối tuần tôi đã đi Berlin."),
            s("Ich bin ins Kino gegangen. / Ich bin um acht Uhr aufgestanden.", "Tôi đã đi xem phim. / Tôi đã thức dậy lúc 8 giờ.") ] },
          { label: "Hỏi về cuối tuần", items: [ q("Wie war dein Wochenende?", "Cuối tuần của bạn thế nào?", "Mein Wochenende war sehr schön. Ich habe meine Freunde getroffen.", "Cuối tuần của tôi rất vui. Tôi đã gặp bạn bè.") ] },
          { label: "Cụm thời gian trong quá khứ", items: [ s("gestern – vorgestern – am Wochenende – letzte Woche – letzten Monat – letztes Jahr", "hôm qua – hôm kia – cuối tuần – tuần trước – tháng trước – năm ngoái") ] }
        ] },
      { id: "interesse-erstaunen-signalisieren", titleDe: "😮 Interesse / Erstaunen signalisieren",
        groups: [ { label: "Thể hiện sự quan tâm hoặc ngạc nhiên", items: [
          s("Interessant! / Echt? / Wirklich?", "Thú vị đấy! / Thật à? / Thật sao?"),
          s("Super! / Das ist toll!", "Tuyệt! / Hay quá!"),
          s("Das ist aber traurig! / Das finde ich aber schade!", "Buồn quá! / Tôi thấy tiếc quá!"),
          s("Und dann?", "Rồi sao nữa?") ] } ] },
      { id: "smalltalk-fuehren", titleDe: "☕ Smalltalk führen",
        groups: [ { label: "Trò chuyện xã giao (ví dụ trên taxi)", items: [
          q("Waren Sie beruflich hier?", "Ông/bà đến đây vì công việc à?", "Nein, privat. Ich war bei meinem Bruder.", "Không, đi riêng. Tôi đến thăm anh trai."),
          q("Waren Sie lange hier?", "Ông/bà ở đây lâu không?", "Nein, leider nur ein paar Tage.", "Không, tiếc là chỉ vài ngày."),
          q("Und jetzt fliegen Sie wieder nach Hause?", "Và bây giờ ông/bà bay về nhà ạ?", "Ja, genau.", "Vâng, đúng vậy.") ] } ] },
      { id: "lebensstationen-und-migration", titleDe: "🧭 Über Lebensstationen und Migrationserfahrung sprechen",
        groups: [ { label: "Năm sinh và thời điểm đến Đức", items: [
          q("Bist du 1998 geboren?", "Bạn sinh năm 1998 phải không?", "Nein, ich bin 1992 geboren.", "Không, tôi sinh năm 1992."),
          q("Und 2020 bist du nach Deutschland gekommen?", "Và năm 2020 bạn đến Đức à?", "Ja, genau.", "Vâng, đúng vậy.") ] } ] },
      { id: "nicht-sprechen-moechten", titleDe: "🤐 Signalisieren, dass man über etwas nicht sprechen möchte",
        groups: [ { label: "Từ chối nói về một chủ đề", items: [
          s("Darüber möchte ich nicht so gern sprechen.", "Tôi không muốn nói nhiều về chuyện đó."),
          q("Entschuldigung, das wollte ich nicht.", "Xin lỗi, tôi không có ý đó.", "Schon gut. / Kein Problem.", "Không sao. / Không vấn đề gì.") ] } ] }
    ],
    woerter: []
  };
})();
