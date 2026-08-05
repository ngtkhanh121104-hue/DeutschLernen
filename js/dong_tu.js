/*
 * DỮ LIỆU CHIA ĐỘNG TỪ TIẾNG ĐỨC A1
 *
 * category:
 * - regular: động từ có quy tắc
 * - irregular: động từ bất quy tắc
 * - separable: động từ tách và cụm động từ
 * - modal: động từ khuyết thiếu
 */

/*
 * Thứ tự các ngôi trong bảng.
 */
window.verbPronouns = [
    {
        key: "ich",
        label: "ich"
    },
    {
        key: "du",
        label: "du"
    },
    {
        key: "erSieEs",
        label: "er / sie / es"
    },
    {
        key: "wir",
        label: "wir"
    },
    {
        key: "ihr",
        label: "ihr"
    },
    {
        key: "sieSie",
        label: "sie / Sie"
    }
];

/*
 * Khởi tạo danh sách động từ.
 */
window.verbData = [];

/*
 * 1. ĐỘNG TỪ CÓ QUY TẮC
 */
window.verbData.push(
    {
        infinitive: "arbeiten",
        meaning: "làm việc",
        category: "regular",
        separable: false,

        forms: {
            ich: "arbeite",
            du: "arbeitest",
            erSieEs: "arbeitet",
            wir: "arbeiten",
            ihr: "arbeitet",
            sieSie: "arbeiten"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gearbeitet",
            example: "Ich habe gestern gearbeitet."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "duschen",
        meaning: "tắm",
        category: "regular",
        separable: false,

        forms: {
            ich: "dusche",
            du: "duschst",
            erSieEs: "duscht",
            wir: "duschen",
            ihr: "duscht",
            sieSie: "duschen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "geduscht",
            example: "Ich habe am Morgen geduscht."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "frühstücken",
        meaning: "ăn sáng",
        category: "regular",
        separable: false,

        forms: {
            ich: "frühstücke",
            du: "frühstückst",
            erSieEs: "frühstückt",
            wir: "frühstücken",
            ihr: "frühstückt",
            sieSie: "frühstücken"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gefrühstückt",
            example: "Ich habe um sieben Uhr gefrühstückt."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "heißen",
        meaning: "tên là, được gọi là",
        category: "regular",
        separable: false,

        forms: {
            ich: "heiße",
            du: "heißt",
            erSieEs: "heißt",
            wir: "heißen",
            ihr: "heißt",
            sieSie: "heißen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "geheißen",
            example: "Wie hat der Film geheißen?"
        },

        changedParts: {},

        notes: {}
    },

    {
        infinitive: "kochen",
        meaning: "nấu ăn",
        category: "regular",
        separable: false,

        forms: {
            ich: "koche",
            du: "kochst",
            erSieEs: "kocht",
            wir: "kochen",
            ihr: "kocht",
            sieSie: "kochen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gekocht",
            example: "Meine Mutter hat Suppe gekocht."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "kommen",
        meaning: "đến",
        category: "regular",
        separable: false,

        forms: {
            ich: "komme",
            du: "kommst",
            erSieEs: "kommt",
            wir: "kommen",
            ihr: "kommt",
            sieSie: "kommen"
        },

        perfect: {
            auxiliary: "sein",
            participle: "gekommen",
            example: "Sie ist spät nach Hause gekommen."
        },

        changedParts: {},
        notes: {
            perfect: "Perfekt dùng sein vì kommen diễn tả sự di chuyển."
        }
    },

    {
        infinitive: "leben",
        meaning: "sinh sống",
        category: "regular",
        separable: false,

        forms: {
            ich: "lebe",
            du: "lebst",
            erSieEs: "lebt",
            wir: "leben",
            ihr: "lebt",
            sieSie: "leben"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gelebt",
            example: "Er hat fünf Jahre in Berlin gelebt."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "machen",
        meaning: "làm",
        category: "regular",
        separable: false,

        forms: {
            ich: "mache",
            du: "machst",
            erSieEs: "macht",
            wir: "machen",
            ihr: "macht",
            sieSie: "machen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gemacht",
            example: "Was hast du gestern gemacht?"
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "spielen",
        meaning: "chơi",
        category: "regular",
        separable: false,

        forms: {
            ich: "spiele",
            du: "spielst",
            erSieEs: "spielt",
            wir: "spielen",
            ihr: "spielt",
            sieSie: "spielen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gespielt",
            example: "Wir haben Fußball gespielt."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "suchen",
        meaning: "tìm kiếm",
        category: "regular",
        separable: false,

        forms: {
            ich: "suche",
            du: "suchst",
            erSieEs: "sucht",
            wir: "suchen",
            ihr: "sucht",
            sieSie: "suchen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gesucht",
            example: "Ich habe meinen Schlüssel gesucht."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "trinken",
        meaning: "uống",
        category: "regular",
        separable: false,

        forms: {
            ich: "trinke",
            du: "trinkst",
            erSieEs: "trinkt",
            wir: "trinken",
            ihr: "trinkt",
            sieSie: "trinken"
        },

        perfect: {
            auxiliary: "haben",
            participle: "getrunken",
            example: "Ich habe einen Kaffee getrunken."
        },

        changedParts: {},
        notes: {
            perfect: "Partizip II bất quy tắc: trinken → getrunken."
        }
    },

    {
        infinitive: "wohnen",
        meaning: "sống, cư trú",
        category: "regular",
        separable: false,

        forms: {
            ich: "wohne",
            du: "wohnst",
            erSieEs: "wohnt",
            wir: "wohnen",
            ihr: "wohnt",
            sieSie: "wohnen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gewohnt",
            example: "Ich habe früher in Hanoi gewohnt."
        },

        changedParts: {},
        notes: {}
    }
);
/*
 * 3. ĐỘNG TỪ TÁCH VÀ CỤM ĐỘNG TỪ
 */
window.verbData.push(
    {
        infinitive: "abholen",
        meaning: "đón",
        category: "separable",
        separable: true,
        prefix: "ab",

        forms: {
            ich: "hole ... ab",
            du: "holst ... ab",
            erSieEs: "holt ... ab",
            wir: "holen ... ab",
            ihr: "holt ... ab",
            sieSie: "holen ... ab"
        },

        perfect: {
            auxiliary: "haben",
            participle: "abgeholt",
            example: "Ich habe meinen Bruder von der Schule abgeholt."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố ab đứng cuối câu.",
            perfect: "Partizip II: ab + ge + holt → abgeholt."
        }
    },

    {
        infinitive: "anrufen",
        meaning: "gọi điện",
        category: "separable",
        separable: true,
        prefix: "an",

        forms: {
            ich: "rufe ... an",
            du: "rufst ... an",
            erSieEs: "ruft ... an",
            wir: "rufen ... an",
            ihr: "ruft ... an",
            sieSie: "rufen ... an"
        },

        perfect: {
            auxiliary: "haben",
            participle: "angerufen",
            example: "Ich habe gestern meine Mutter angerufen."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố an đứng cuối câu.",
            perfect: "Partizip II bất quy tắc: anrufen → angerufen."
        }
    },

    {
        infinitive: "aufräumen",
        meaning: "dọn dẹp",
        category: "separable",
        separable: true,
        prefix: "auf",

        forms: {
            ich: "räume ... auf",
            du: "räumst ... auf",
            erSieEs: "räumt ... auf",
            wir: "räumen ... auf",
            ihr: "räumt ... auf",
            sieSie: "räumen ... auf"
        },

        perfect: {
            auxiliary: "haben",
            participle: "aufgeräumt",
            example: "Ich habe gestern mein Zimmer aufgeräumt."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố auf đứng cuối câu.",
            perfect: "Partizip II: auf + ge + räumt → aufgeräumt."
        }
    },

    {
        infinitive: "aufstehen",
        meaning: "thức dậy",
        category: "separable",
        separable: true,
        prefix: "auf",

        forms: {
            ich: "stehe ... auf",
            du: "stehst ... auf",
            erSieEs: "steht ... auf",
            wir: "stehen ... auf",
            ihr: "steht ... auf",
            sieSie: "stehen ... auf"
        },

        perfect: {
            auxiliary: "sein",
            participle: "aufgestanden",
            example: "Ich bin heute um sechs Uhr aufgestanden."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố auf đứng cuối câu.",
            perfect: "Dùng sein vì aufstehen diễn tả sự thay đổi trạng thái."
        }
    },

    {
        infinitive: "einkaufen",
        meaning: "mua sắm",
        category: "separable",
        separable: true,
        prefix: "ein",

        forms: {
            ich: "kaufe ... ein",
            du: "kaufst ... ein",
            erSieEs: "kauft ... ein",
            wir: "kaufen ... ein",
            ihr: "kauft ... ein",
            sieSie: "kaufen ... ein"
        },

        perfect: {
            auxiliary: "haben",
            participle: "eingekauft",
            example: "Ich habe gestern im Supermarkt eingekauft."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố ein đứng cuối câu.",
            perfect: "Partizip II: ein + ge + kauft → eingekauft."
        }
    },

    {
        infinitive: "fernsehen",
        meaning: "xem tivi",
        category: "separable",
        separable: true,
        prefix: "fern",

        forms: {
            ich: "sehe ... fern",
            du: "siehst ... fern",
            erSieEs: "sieht ... fern",
            wir: "sehen ... fern",
            ihr: "seht ... fern",
            sieSie: "sehen ... fern"
        },

        perfect: {
            auxiliary: "haben",
            participle: "ferngesehen",
            example: "Ich habe gestern Abend ferngesehen."
        },

        changedParts: {
            du: "ie",
            erSieEs: "ie"
        },

        notes: {
            du: "e → ie",
            erSieEs: "e → ie",
            present: "Tiền tố fern đứng cuối câu.",
            perfect: "Partizip II bất quy tắc: fernsehen → ferngesehen."
        }
    },

    {
        infinitive: "rausgehen",
        meaning: "đi ra ngoài",
        category: "separable",
        separable: true,
        prefix: "raus",

        forms: {
            ich: "gehe ... raus",
            du: "gehst ... raus",
            erSieEs: "geht ... raus",
            wir: "gehen ... raus",
            ihr: "geht ... raus",
            sieSie: "gehen ... raus"
        },

        perfect: {
            auxiliary: "sein",
            participle: "rausgegangen",
            example: "Ich bin gestern Abend mit meinen Freunden rausgegangen."
        },

        changedParts: {},

        notes: {
            present: "Tiền tố raus đứng cuối câu.",
            perfect: "Dùng sein vì rausgehen diễn tả sự di chuyển."
        }
    },

    {
        infinitive: "spazieren gehen",
        meaning: "đi dạo",
        category: "separable",
        separable: false,
        verbPhrase: true,

        forms: {
            ich: "gehe spazieren",
            du: "gehst spazieren",
            erSieEs: "geht spazieren",
            wir: "gehen spazieren",
            ihr: "geht spazieren",
            sieSie: "gehen spazieren"
        },

        perfect: {
            auxiliary: "sein",
            participle: "spazieren gegangen",
            example: "Wir sind gestern im Park spazieren gegangen."
        },

        changedParts: {},

        notes: {
            general: "Đây là cụm động từ; chỉ động từ gehen được chia.",
            perfect: "Trong Perfekt, gegangen đứng cuối cụm: spazieren gegangen."
        }
    }
);
/*
 * 4. ĐỘNG TỪ KHUYẾT THIẾU
 */
window.verbData.push(
    {
        infinitive: "können",
        meaning: "có thể, biết làm gì",
        category: "modal",
        separable: false,

        forms: {
            ich: "kann",
            du: "kannst",
            erSieEs: "kann",
            wir: "können",
            ihr: "könnt",
            sieSie: "können"
        },

        /*
         * Präteritum được sử dụng phổ biến hơn Perfekt
         * khi können đi cùng một động từ khác.
         */
        preterite: {
            ich: "konnte",
            du: "konntest",
            erSieEs: "konnte",
            wir: "konnten",
            ihr: "konntet",
            sieSie: "konnten"
        },

        preteriteExample:
            "Ich konnte gestern nicht kommen.",

        /*
         * Perfekt đơn giản khi không có động từ chính khác.
         */
        perfect: {
            auxiliary: "haben",
            participle: "gekonnt",
            example: "Ich habe das früher nicht gekonnt."
        },

        /*
         * Khi có thêm động từ chính, Perfekt dùng hai
         * động từ nguyên mẫu ở cuối câu.
         */
        perfectWithVerb: {
            structure:
                "haben + ... + động từ nguyên mẫu + können",

            example:
                "Ich habe gestern nicht kommen können.",

            meaning:
                "Hôm qua tôi đã không thể đến."
        },

        changedParts: {
            ich: "a",
            du: "a",
            erSieEs: "a"
        },

        notes: {
            ich: "ö → a",
            du: "ö → a",
            erSieEs: "ö → a",

            preterite:
                "Ở Präteritum, Umlaut ö bị mất: können → konnte.",

            usage:
                "Ở trình độ A1, nên ưu tiên dùng konnte thay cho cấu trúc Perfekt phức tạp."
        }
    },

    {
        infinitive: "wollen",
        meaning: "muốn, có ý định",
        category: "modal",
        separable: false,

        forms: {
            ich: "will",
            du: "willst",
            erSieEs: "will",
            wir: "wollen",
            ihr: "wollt",
            sieSie: "wollen"
        },

        /*
         * Dùng Präteritum để nói về mong muốn
         * hoặc ý định trong quá khứ.
         */
        preterite: {
            ich: "wollte",
            du: "wolltest",
            erSieEs: "wollte",
            wir: "wollten",
            ihr: "wolltet",
            sieSie: "wollten"
        },

        preteriteExample:
            "Ich wollte gestern Fußball spielen.",

        /*
         * Perfekt đơn giản khi wollen không đi kèm
         * một động từ chính khác.
         */
        perfect: {
            auxiliary: "haben",
            participle: "gewollt",
            example: "Ich habe das nicht gewollt."
        },

        /*
         * Perfekt khi có thêm động từ chính.
         */
        perfectWithVerb: {
            structure:
                "haben + ... + động từ nguyên mẫu + wollen",

            example:
                "Ich habe am Wochenende Fußball spielen wollen.",

            meaning:
                "Cuối tuần tôi đã muốn chơi bóng đá."
        },

        changedParts: {
            ich: "ill",
            du: "ill",
            erSieEs: "ill"
        },

        notes: {
            ich: "o → i và ll",
            du: "o → i và ll",
            erSieEs: "o → i và ll",

            preterite:
                "wollen → wollte",

            usage:
                "Ở trình độ A1, nên dùng wollte để nói về mong muốn trong quá khứ."
        }
    }
);
/*
 * 5. CÁC ĐỘNG TỪ VÀ CỤM ĐỘNG TỪ HOẠT ĐỘNG
 */
window.verbData.push(
    {
        infinitive: "fotografieren",
        meaning: "chụp ảnh",
        category: "regular",
        separable: false,

        forms: {
            ich: "fotografiere",
            du: "fotografierst",
            erSieEs: "fotografiert",
            wir: "fotografieren",
            ihr: "fotografiert",
            sieSie: "fotografieren"
        },

        perfect: {
            auxiliary: "haben",
            participle: "fotografiert",
            example: "Ich habe im Park fotografiert."
        },

        changedParts: {},

        notes: {
            perfect:
                "Động từ kết thúc bằng -ieren không thêm ge-: fotografieren → fotografiert."
        }
    },

    {
        infinitive: "Klavier spielen",
        meaning: "chơi đàn piano",
        category: "regular",
        separable: false,
        verbPhrase: true,

        forms: {
            ich: "spiele Klavier",
            du: "spielst Klavier",
            erSieEs: "spielt Klavier",
            wir: "spielen Klavier",
            ihr: "spielt Klavier",
            sieSie: "spielen Klavier"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gespielt",
            example: "Sie hat gestern Klavier gespielt."
        },

        changedParts: {},

        notes: {
            general:
                "Đây là cụm gồm danh từ Klavier và động từ spielen; chỉ spielen được chia."
        }
    },

    {
        infinitive: "malen",
        meaning: "vẽ, vẽ tranh",
        category: "regular",
        separable: false,

        forms: {
            ich: "male",
            du: "malst",
            erSieEs: "malt",
            wir: "malen",
            ihr: "malt",
            sieSie: "malen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gemalt",
            example: "Das Kind hat ein Bild gemalt."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "nähen",
        meaning: "may, khâu",
        category: "regular",
        separable: false,

        forms: {
            ich: "nähe",
            du: "nähst",
            erSieEs: "näht",
            wir: "nähen",
            ihr: "näht",
            sieSie: "nähen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "genäht",
            example: "Meine Mutter hat eine Tasche genäht."
        },

        changedParts: {},
        notes: {}
    },

    {
        infinitive: "Rad fahren",
        meaning: "đi xe đạp",
        category: "irregular",
        separable: false,
        verbPhrase: true,

        forms: {
            ich: "fahre Rad",
            du: "fährst Rad",
            erSieEs: "fährt Rad",
            wir: "fahren Rad",
            ihr: "fahrt Rad",
            sieSie: "fahren Rad"
        },

        perfect: {
            auxiliary: "sein",
            participle: "Rad gefahren",
            example: "Ich bin gestern Rad gefahren."
        },

        changedParts: {
            du: "ä",
            erSieEs: "ä"
        },

        notes: {
            du: "a → ä",
            erSieEs: "a → ä",
            general:
                "Đây là cụm gồm danh từ Rad và động từ fahren.",
            perfect:
                "Dùng sein vì Rad fahren diễn tả sự di chuyển."
        }
    },

    {
        infinitive: "rechnen",
        meaning: "tính toán",
        category: "regular",
        separable: false,

        forms: {
            ich: "rechne",
            du: "rechnest",
            erSieEs: "rechnet",
            wir: "rechnen",
            ihr: "rechnet",
            sieSie: "rechnen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gerechnet",
            example: "Er hat die Aufgabe richtig gerechnet."
        },

        changedParts: {},

        notes: {}
    },

    {
        infinitive: "Schach spielen",
        meaning: "chơi cờ vua",
        category: "regular",
        separable: false,
        verbPhrase: true,

        forms: {
            ich: "spiele Schach",
            du: "spielst Schach",
            erSieEs: "spielt Schach",
            wir: "spielen Schach",
            ihr: "spielt Schach",
            sieSie: "spielen Schach"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gespielt",
            example: "Wir haben am Wochenende Schach gespielt."
        },

        changedParts: {},

        notes: {
            general:
                "Đây là cụm gồm danh từ Schach và động từ spielen; chỉ spielen được chia."
        }
    },

    {
        infinitive: "schwimmen",
        meaning: "bơi",
        category: "irregular",
        separable: false,

        forms: {
            ich: "schwimme",
            du: "schwimmst",
            erSieEs: "schwimmt",
            wir: "schwimmen",
            ihr: "schwimmt",
            sieSie: "schwimmen"
        },

        perfect: {
            auxiliary: "sein",
            participle: "geschwommen",
            example: "Ich bin gestern im See geschwommen."
        },

        changedParts: {},

        notes: {
            perfect:
                "Partizip II bất quy tắc: schwimmen → geschwommen.",
            auxiliary:
                "Ở trình độ A1, dùng sein khi schwimmen diễn tả sự vận động."
        }
    },

    {
        infinitive: "singen",
        meaning: "hát",
        category: "irregular",
        separable: false,

        forms: {
            ich: "singe",
            du: "singst",
            erSieEs: "singt",
            wir: "singen",
            ihr: "singt",
            sieSie: "singen"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gesungen",
            example: "Sie hat gestern ein Lied gesungen."
        },

        changedParts: {},

        notes: {
            perfect:
                "Partizip II bất quy tắc: singen → gesungen."
        }
    }

);
/*
 * BỔ SUNG HABEN VÀ SEIN
 */
window.verbData.push(
    {
        infinitive: "haben",
        meaning: "có",
        category: "irregular",
        separable: false,

        forms: {
            ich: "habe",
            du: "hast",
            erSieEs: "hat",
            wir: "haben",
            ihr: "habt",
            sieSie: "haben"
        },

        perfect: {
            auxiliary: "haben",
            participle: "gehabt",
            example: "Ich habe gestern keine Zeit gehabt."
        },

        preterite: {
            ich: "hatte",
            du: "hattest",
            erSieEs: "hatte",
            wir: "hatten",
            ihr: "hattet",
            sieSie: "hatten"
        },

        preteriteExample:
            "Ich hatte gestern keine Zeit.",

        changedParts: {
            du: "hast",
            erSieEs: "hat"
        },

        notes: {
            du: "Bỏ chữ b.",
            erSieEs: "Bỏ chữ b.",

            perfect:
                "Partizip II: haben → gehabt.",

            preterite:
                "Trong giao tiếp, hatte thường được dùng để nói về quá khứ."
        }
    },

    {
        infinitive: "sein",
        meaning: "thì, là, ở",
        category: "irregular",
        separable: false,

        forms: {
            ich: "bin",
            du: "bist",
            erSieEs: "ist",
            wir: "sind",
            ihr: "seid",
            sieSie: "sind"
        },

        perfect: {
            auxiliary: "sein",
            participle: "gewesen",
            example: "Ich bin gestern im Kino gewesen."
        },

        preterite: {
            ich: "war",
            du: "warst",
            erSieEs: "war",
            wir: "waren",
            ihr: "wart",
            sieSie: "waren"
        },

        preteriteExample:
            "Ich war gestern im Kino.",

        changedParts: {
            ich: "bin",
            du: "bist",
            erSieEs: "ist",
            wir: "sind",
            ihr: "seid",
            sieSie: "sind"
        },

        notes: {
            general:
                "Tất cả các dạng hiện tại của sein đều bất quy tắc.",

            perfect:
                "Partizip II: sein → gewesen.",

            preterite:
                "Trong giao tiếp, war thường được dùng để nói về quá khứ."
        }
    }
);
/*
 * Sắp xếp toàn bộ động từ theo bảng chữ cái tiếng Đức.
 * Hàm hiển thị cũng có thể tự sắp xếp lại theo từng nhóm.
 */
window.verbData.sort((firstVerb, secondVerb) =>
    firstVerb.infinitive.localeCompare(
        secondVerb.infinitive,
        "de"
    )
);