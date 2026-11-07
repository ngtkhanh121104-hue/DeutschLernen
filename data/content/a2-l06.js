/* A2 · Bài 6 · Feierabend */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l06"] = {
    grammatik: [
      { id: "konjunktion-dass", titleDe: "🔗 Sätze: Konjunktion dass",
        blocks: [
          { type: "text", html: "<strong>dass</strong> mở đầu một mệnh đề phụ để nói <strong>nội dung</strong> của điều ai đó nghĩ, nói, hy vọng… Trong mệnh đề <strong>dass</strong> động từ đứng <strong>cuối câu</strong>." },
          { type: "table", head: ["Mệnh đề chính", "dass", "Mệnh đề phụ (động từ ở cuối)"], rows: [
            ["Mia denkt,", "dass", "Tom zu wenig für seine Karriere tut."],
            ["Frau Heidemann sagt,", "dass", "sie beim nächsten Streit die Polizei rufen will."],
            ["Hoffen wir mal,", "dass", "das gut ausgeht."],
            ["Es ist wichtig,", "dass", "man pünktlich kommt."] ] },
          { type: "note", html: "<strong>dass</strong> thường đi sau các động từ nói/nghĩ (<em>denken, sagen, hoffen, glauben, finden</em>) hoặc sau cấu trúc như <em>Es ist schön / wichtig / schade, dass …</em>. Động từ tách <strong>dính liền</strong> khi đứng cuối (…<strong>ausgeht</strong>)." }
        ] },
      { id: "verbindungsadverb-trotzdem", titleDe: "🔗 Sätze: Verbindungsadverb trotzdem",
        blocks: [
          { type: "text", html: "<strong>trotzdem</strong> = tuy vậy, dù thế. Chỉ <strong>kết quả trái với mong đợi</strong>. Động từ đứng ngay sau <strong>trotzdem</strong>." },
          { type: "table", head: ["Mệnh đề trước", "Vị trí 1", "Vị trí 2 (động từ)", "Phần còn lại"], rows: [
            ["Samir und Ludmilla wollen etwas zusammen machen.", "Trotzdem", "macht", "jeder etwas allein."],
            ["Samir und Ludmilla wollen etwas zusammen machen,", "trotzdem", "macht", "jeder etwas allein."] ] }
        ] }
    ],
    kommunikation: [
      { id: "vorschlaege-machen", titleDe: "💡 Vorschläge machen",
        groups: [ { label: "Đề nghị", items: [ s("Was hältst du davon?", "Bạn thấy sao về điều đó?"), s("Hast du was dagegen?", "Bạn có phản đối gì không?") ] } ] },
      { id: "zoegernd-zustimmen", titleDe: "🤔 (Zögernd) zustimmen",
        groups: [ { label: "Đồng ý một cách ngập ngừng", items: [
          s("(Also,) ich weiß nicht. Vielleicht.", "Ừm, tôi không biết. Có lẽ."),
          s("Okay, dann ... wir eben ...", "Được rồi, vậy thì chúng ta ... thôi.") ] } ] },
      { id: "zoegernd-ablehnen", titleDe: "🙅 (Zögernd) ablehnen",
        groups: [ { label: "Từ chối một cách ngập ngừng", items: [
          s("Muss das sein?", "Có nhất thiết phải vậy không?"),
          s("Ach, nein. Ich habe (jetzt) keine Lust.", "Ôi, không. Bây giờ tôi không có hứng."),
          s("Das können wir doch morgen machen.", "Chuyện đó mình làm ngày mai cũng được mà."),
          s("Nein, bitte nicht. Ich bin dagegen. Ich möchte lieber ...", "Không, đừng. Tôi phản đối. Tôi thích ... hơn.") ] } ] },
      { id: "jemanden-ueberreden", titleDe: "😉 Jemanden überreden",
        groups: [ { label: "Thuyết phục", items: [
          s("Ach, komm! / Na los!", "Thôi nào! / Đi nào!"),
          s("Das ist (echt) lustig / spannend. Das macht bestimmt Spaß.", "Việc đó (thật sự) vui / hấp dẫn. Chắc chắn sẽ thú vị."),
          s("Bist du dafür? Kannst du das denn nicht verstehen?", "Bạn có đồng ý không? Bạn không thể hiểu sao?") ] } ] },
      { id: "versprechen-und-reagieren", titleDe: "🤞 Etwas versprechen und auf ein Versprechen reagieren",
        groups: [ { label: "Hứa và đáp lại", items: [
          s("Weißt du was? Wir machen ... am ...", "Bạn biết không? Chúng ta sẽ làm ... vào ..."),
          q("Wirklich? Versprochen?", "Thật không? Hứa nhé?", "Ganz bestimmt!", "Chắc chắn rồi!"),
          s("Das ist schön!", "Tuyệt quá!") ] } ] },
      { id: "meinung-aeussern-und-wiedergeben", titleDe: "💬 Eine Meinung äußern / wiedergeben",
        groups: [
          { label: "Nêu ý kiến", items: [
            s("Es ist wichtig / schön / traurig / interessant / schade, dass ...", "Điều ... quan trọng / hay / buồn / thú vị / đáng tiếc là ..."),
            s("Ich finde es gut / nicht so toll, dass ...", "Tôi thấy ... tốt / không hay lắm khi ..."),
            q("Das sehe ich auch so.", "Tôi cũng thấy như vậy.", "Ich sehe das anders.", "Tôi thấy khác.") ] },
          { label: "Thuật lại ý kiến của người khác", items: [ s("Er / Sie sagt / findet / ist sicher, dass ...", "Anh ấy / cô ấy nói / thấy / chắc chắn rằng ...") ] }
        ] },
      { id: "mediengewohnheiten", titleDe: "📺 Sich über Mediengewohnheiten austauschen",
        groups: [ { label: "Thói quen xem và dùng truyền thông", items: [
          q("Siehst du gern Filme?", "Bạn có thích xem phim không?", "Nein, ich sehe lieber Serien.", "Không, tôi thích xem phim bộ hơn."),
          s("Serien / Filme schauen macht (keinen) Spaß.", "Xem phim bộ / phim (không) vui."),
          s("Wenn ich etwas ganz genau wissen möchte, dann ...", "Khi tôi muốn biết điều gì thật chính xác, thì ...") ] } ] }
    ],
    woerter: []
  };
})();
