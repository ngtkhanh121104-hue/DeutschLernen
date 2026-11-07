/* A2 · Bài 8 · Unterwegs */
(function () {
  const q = (fd, fv, ad, av, note) => ({ frage: { de: fd, vi: fv }, antwort: { de: ad, vi: av }, note });
  const s = (d, v) => ({ satz: { de: d, vi: v } });
  window.lessonContent = window.lessonContent || {};
  window.lessonContent["a2-l08"] = {
    grammatik: [
      { id: "konjunktiv-ii-waere-haette-wuerde", titleDe: "⚙️ Verben: Konjugation im Konjunktiv II (wäre, hätte, würde)",
        blocks: [
          { type: "text", html: "<strong>Konjunktiv II</strong> dùng để diễn đạt điều ước, điều mong và lời đề nghị lịch sự. Ba dạng quan trọng nhất là <strong>wäre</strong> (sein), <strong>hätte</strong> (haben) và <strong>würde</strong> (+ nguyên mẫu)." },
          { type: "table", head: ["", "wäre (sein)", "hätte (haben)", "würde"], rows: [
            ["ich", "wäre", "hätte", "würde"], ["du", "wärst", "hättest", "würdest"], ["er / sie", "wäre", "hätte", "würde"],
            ["wir", "wären", "hätten", "würden"], ["ihr", "wärt", "hättet", "würdet"], ["sie / Sie", "wären", "hätten", "würden"] ] }
        ] },
      { id: "satzklammer-konjunktiv-ii-wuerd", titleDe: "📍 Wiederholung: Satzklammer bei Konjunktiv II mit würd-",
        blocks: [
          { type: "table", head: ["Vị trí 1", "Vị trí 2 (würd-)", "Giữa câu", "Cuối câu (nguyên mẫu)"], rows: [ ["Ich", "würde", "gern mit dir", "wandern."] ] }
        ] },
      { id: "durch-und-entlang", titleDe: "🚶 Lokale Präpositionen: durch und entlang + Akkusativ",
        blocks: [
          { type: "table", head: ["Giới từ", "der", "das", "die"], rows: [
            ["durch", "durch den / einen Park", "durch das / ein Haus", "durch die / eine Unterführung"],
            ["entlang", "den / einen Fluss entlang", "das / ein Haus entlang", "die / eine Straße entlang"] ] },
          { type: "note", html: "<strong>durch</strong> = xuyên qua, <strong>entlang</strong> = dọc theo (đặt <strong>sau</strong> danh từ). Cả hai đi với <strong>Akkusativ</strong>." }
        ] },
      { id: "gegenueber-bis-zu-vorbei", titleDe: "📌 Lokale Präpositionen: gegenüber, bis zu und an … vorbei + Dativ",
        blocks: [
          { type: "table", head: ["Giới từ", "der / das", "die"], rows: [
            ["gegenüber", "dem / einem Turm, dem / einem Haus", "der / einer Schule"],
            ["bis zu", "bis zum Turm / Haus", "bis zur Post"],
            ["an … vorbei", "am Bahnhof / am Haus vorbei", "an der Apotheke vorbei"] ] },
          { type: "note", html: "<strong>zu + dem = zum</strong>, <strong>zu + der = zur</strong>, <strong>an + dem = am</strong>. <strong>gegenüber</strong> có thể đứng trước hoặc sau danh từ." }
        ] }
    ],
    kommunikation: [
      { id: "fahrplan-erkundigen", titleDe: "🚆 Sich nach einem Fahrplan erkundigen / Auskunft geben",
        groups: [ { label: "Hỏi và trả lời về lịch tàu xe", items: [
          q("Wie lange dauert die Fahrt von ... nach ...?", "Chuyến đi từ ... đến ... mất bao lâu?", "Zwei Stunden und zehn Minuten.", "Hai tiếng mười phút."),
          q("Wann fährt der Zug / die S-Bahn nach ... ab?", "Khi nào tàu / tàu điện đi ... xuất phát?", "In zehn Minuten.", "Mười phút nữa."),
          q("Wo fährt der Zug ab?", "Tàu chạy từ đâu?", "Von Gleis 3.", "Từ đường ray số 3."),
          q("Wo kommt der Zug in ... an?", "Tàu đến ... ở đâu?", "Auf Gleis 6.", "Ở đường ray số 6."),
          q("Wie oft muss man umsteigen?", "Phải đổi tàu mấy lần?", "Zweimal.", "Hai lần."),
          q("Wie viel Zeit hat man zum Umsteigen?", "Có bao nhiêu thời gian để đổi tàu?", "Nicht viel. Nur acht Minuten.", "Không nhiều. Chỉ tám phút."),
          q("Wie viel kostet die Fahrt von ... nach ...?", "Chuyến đi từ ... đến ... giá bao nhiêu?", "... Euro.", "... euro.") ] } ] },
      { id: "hoeflich-bitten", titleDe: "🎩 Höflich bitten",
        groups: [ { label: "Nhờ vả lịch sự (Konjunktiv II)", items: [
          s("Hätten Sie / Hättest du etwas ... für mich?", "Ông/bà / bạn có ... cho tôi không?"),
          s("Könnten Sie / Könntest du mir bitte helfen?", "Ông/bà / bạn có thể giúp tôi được không?"),
          s("Würden Sie / Würdest du mir bitte ... geben?", "Ông/bà / bạn vui lòng đưa tôi ... nhé?") ] } ] },
      { id: "auf-hoefliche-bitten-reagieren", titleDe: "🙂 Auf höfliche Bitten reagieren",
        groups: [ { label: "Đáp lại lời nhờ", items: [
          s("Klar, gern! / Sicher, hier. / Ja, hier bitte!", "Dĩ nhiên rồi! / Chắc chắn rồi, đây. / Vâng, đây ạ!"),
          s("Tut mir leid! / Leider nein.", "Rất tiếc! / Tiếc là không.") ] } ] },
      { id: "platz-frei-nachfragen", titleDe: "💺 Nachfragen, ob der Platz noch frei ist / reagieren",
        groups: [ { label: "Hỏi chỗ ngồi", items: [
          q("Entschuldigung, ist der Platz hier noch frei?", "Xin lỗi, chỗ này còn trống không?", "Ja, bitte. / Nein, der Platz ist besetzt.", "Vâng, mời. / Không, chỗ này có người rồi.") ] } ] },
      { id: "gute-wuensche", titleDe: "🍀 Gute Wünsche",
        groups: [ { label: "Lời chúc", items: [
          q("Gute Reise! / Gute Fahrt und einen schönen Tag!", "Chúc đi thượng lộ bình an! / Chúc một ngày tốt lành!", "Danke, Ihnen auch!", "Cảm ơn, chúc ông/bà cũng vậy!") ] } ] },
      { id: "weg-beschreiben", titleDe: "🗺️ Einen Weg beschreiben",
        groups: [ { label: "Hỏi và chỉ đường", items: [
          q("Wie komme ich von hier zur Post?", "Từ đây tôi đến bưu điện bằng cách nào?", "Sie gehen am Bahnhof vorbei, dann durch das Tor ...", "Ông/bà đi qua nhà ga, rồi đi qua cổng ..."),
          s("Wohin möchten Sie? / Wohin möchtest du (denn)?", "Ông/bà muốn đến đâu? / Bạn muốn đến đâu?") ] } ] },
      { id: "an-der-rezeption", titleDe: "🏨 An der Rezeption",
        groups: [ { label: "Ở quầy lễ tân", items: [
          q("Guten Tag, kann ich Ihnen helfen?", "Xin chào, tôi có thể giúp gì ạ?", "Ich suche ein Doppelzimmer mit Frühstück.", "Tôi tìm một phòng đôi có ăn sáng."),
          q("Wie lange möchten Sie bleiben?", "Ông/bà muốn ở bao lâu?", "Drei Nächte.", "Ba đêm."),
          s("Ich hätte gern WLAN auf dem Zimmer.", "Tôi muốn có WLAN trong phòng."),
          q("Natürlich. Das ist inklusive.", "Dĩ nhiên. Đã bao gồm trong giá.", "Wunderbar!", "Tuyệt!"),
          q("Wie viel kostet das Zimmer pro Nacht?", "Phòng giá bao nhiêu một đêm?", "... Euro.", "... euro."),
          s("Oh, das ist mir (eigentlich) zu teuer.", "Ồ, thật ra như vậy hơi đắt với tôi.") ] } ] }
    ],
    woerter: []
  };
})();
