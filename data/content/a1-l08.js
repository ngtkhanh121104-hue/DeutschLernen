/* A1 · Bài 8 · Du spielst super Fußball! */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a1-l08"] = {
    grammatik: [
      { id: "modalverben-koennen-wollen", titleDe: "🧩 Modalverben: können, wollen",
        blocks: [
          { type: "text", html: "<strong>können</strong> = có thể, biết làm gì. <strong>wollen</strong> = muốn, có ý định. Đi cùng một động từ chính ở dạng nguyên mẫu." },
          { type: "table", head: ["", "können", "wollen"], rows: [
            ["ich", "kann", "will"], ["du", "kannst", "willst"], ["er / sie", "kann", "will"],
            ["wir", "können", "wollen"], ["ihr", "könnt", "wollt"], ["sie / Sie", "können", "wollen"] ] },
          { type: "note", html: "Ở <em>ich</em> và <em>er / sie</em> động từ khuyết thiếu <strong>không có đuôi</strong> (ich kann, er kann)." }
        ] },
      { id: "satzklammer-modalverben", titleDe: "📍 Sätze: Satzklammer bei Modalverben",
        blocks: [
          { type: "text", html: "Động từ khuyết thiếu đã chia ở <strong>vị trí 2</strong> (hoặc vị trí 1 trong Ja-/Nein-Frage); động từ chính ở dạng nguyên mẫu đứng <strong>cuối câu</strong>." },
          { type: "table", head: ["Loại câu", "Vị trí 1", "Vị trí 2 (modal)", "Giữa câu", "Cuối câu (nguyên mẫu)"], rows: [
            ["W-Frage", "Wer", "kann", "sehr gut Fußball", "spielen?"],
            ["W-Frage", "Wo", "willst", "du", "studieren?"],
            ["Ja-/Nein-Frage", "—", "Kannst", "du gut Fußball", "spielen?"],
            ["Ja-/Nein-Frage", "—", "Will", "Amadou Deutsch", "lernen?"],
            ["Aussage", "Ich", "kann", "nicht so gut Fußball", "spielen."],
            ["Aussage", "Amadou", "will", "eine Ausbildung", "machen."] ] }
        ] },
      { id: "haeufigkeitsangaben-jed", titleDe: "🔁 Häufigkeitsangaben mit jed-",
        blocks: [
          { type: "text", html: "<strong>jed-</strong> (mỗi) đổi đuôi theo giống của danh từ chỉ thời gian ở Akkusativ." },
          { type: "table", head: ["Giống", "Biến đổi", "Cách nói"], rows: [
            ["der (đực)", "jeden", "jeden Tag, jeden Morgen, jeden Montag, jeden Monat"],
            ["die (cái)", "jede", "jede Woche, jede Nacht, jede Stunde"],
            ["das (trung)", "jedes", "jedes Wochenende, jedes Jahr, jedes Mal"] ] },
          { type: "table", head: ["Cách nói", "Nghĩa", "Cấu trúc"], rows: [
            ["einmal", "một lần", "einmal + pro + thời gian"], ["zweimal", "hai lần", "zweimal pro Woche"], ["dreimal", "ba lần", "dreimal pro Monat"] ] }
        ] }
    ],
    kommunikation: [
      { id: "sagen-wie-oft-man-etwas-macht", titleDe: "🔁 Sagen, wie oft man etwas macht",
        groups: [
          { label: "Hỏi tần suất", items: [
            q("Wie oft machst du Sport?", "Bạn tập thể thao bao lâu một lần?", "Ich mache jeden Tag Sport. / Ich mache zweimal pro Woche Sport.", "Tôi tập thể thao mỗi ngày. / hai lần mỗi tuần."),
            q("Wie oft spielst du Klavier?", "Bạn chơi đàn piano bao lâu một lần?", "Ich spiele jeden Tag Klavier. / dreimal pro Woche.", "Tôi chơi piano mỗi ngày. / ba lần mỗi tuần.") ] },
          { label: "Một số câu hỏi khác", items: [ s("Wie oft lernst du Deutsch? / Wie oft gehst du schwimmen? / Wie oft gehst du ins Kino?", "Bạn học tiếng Đức / đi bơi / đi xem phim bao lâu một lần?") ] }
        ] },
      { id: "widersprechen", titleDe: "🗣️ Widersprechen",
        groups: [
          { label: "Nêu ý kiến", items: [ s("Ich glaube, das ist richtig. / Ich denke, das ist eine gute Idee.", "Tôi tin điều đó đúng. / Tôi nghĩ đó là ý hay.") ] },
          { label: "Nói ý kiến trái ngược", items: [
            q("Ich glaube, Sport ist langweilig.", "Tôi nghĩ thể thao nhàm chán.", "Also, ich weiß nicht. Ich denke, Sport macht Spaß.", "Ừm, tôi không chắc. Tôi nghĩ thể thao rất vui."),
            s("Ich glaube nicht. / Ich denke, das ist anders.", "Tôi không nghĩ vậy. / Tôi nghĩ điều đó khác.") ] }
        ] },
      { id: "ueber-faehigkeiten-sprechen", titleDe: "💪 Über Fähigkeiten sprechen",
        groups: [
          { label: "Hỏi ai làm được gì", items: [
            q("Wer kann gut singen / kochen?", "Ai hát / nấu ăn giỏi?", "Ich kann gut singen / kochen.", "Tôi hát / nấu ăn giỏi."),
            q("Kannst du gut ...?", "Bạn có giỏi ... không?", "Ja, ich kann ein bisschen ... / Nein, ich kann nicht gut ...", "Có, tôi biết một chút ... / Không, tôi không giỏi ...") ] }
        ] },
      { id: "ueber-plaene-sprechen", titleDe: "🗓️ Über Pläne sprechen",
        groups: [
          { label: "Hỏi và nói dự định", items: [
            q("Was willst du machen?", "Bạn muốn làm gì?", "Ich will den Führerschein machen.", "Tôi muốn thi bằng lái xe."),
            q("Willst du eine Ausbildung machen?", "Bạn có muốn học nghề không?", "Ja. / Nein, ich will studieren.", "Có. / Không, tôi muốn học đại học.") ] }
        ] },
      { id: "vorlieben-und-hobbys", titleDe: "🎨 Über Vorlieben und Hobbys sprechen",
        groups: [
          { label: "Hỏi sở thích", items: [
            q("Was machst du gern? / Was sind deine Hobbys?", "Bạn thích làm gì? / Sở thích của bạn là gì?", "Mein Hobby ist Malen. Mein Lieblingssport ist Schwimmen.", "Sở thích của tôi là vẽ. Môn thể thao yêu thích của tôi là bơi."),
            q("Malst du gern?", "Bạn có thích vẽ không?", "Nein, ich male nicht so gern. / Ich mag das nicht.", "Không, tôi không thích vẽ lắm. / Tôi không thích điều đó."),
            s("... macht (keinen) Spaß. / Ich hasse ... / Ich liebe ...", "... (không) vui. / Tôi ghét ... / Tôi yêu thích ...") ] }
        ] }
    ],
    woerter: []
  };
})();
