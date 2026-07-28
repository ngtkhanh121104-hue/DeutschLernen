/*
 * DỮ LIỆU CHIA ĐỘNG TỪ TIẾNG ĐỨC A1
 *
 * category:
 * - regular: động từ có quy tắc
 * - irregular: động từ bất quy tắc
 * - separable: động từ tách và cụm động từ
 * - modal: động từ khuyết thiếu
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

window.verbData = [
    /*
     * 1. ĐỘNG TỪ CÓ QUY TẮC
     */

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

        notes: {}
    },

    {
        infinitive: "heißen",
        meaning: "tên là",
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

        notes: {}
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

        notes: {}
    },

    {
        infinitive: "wohnen",
        meaning: "sống, trú ngụ",
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

        notes: {}
    },

    /*
     * 2. ĐỘNG TỪ BẤT QUY TẮC
     */

    {
        infinitive: "essen",
        meaning: "ăn",
        category: "irregular",
        separable: false,

        forms: {
            ich: "esse",
            du: "isst",
            erSieEs: "isst",
            wir: "essen",
            ihr: "esst",
            sieSie: "essen"
        },
        changedParts: {
            du: "i",
            erSieEs: "i"
        },
        notes: {
            du: "e → i",
            erSieEs: "e → i"
        }

    },

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

        notes: {
            du: "Bỏ chữ b.",
            erSieEs: "Bỏ chữ b."
        }
    },

    {
        infinitive: "lesen",
        meaning: "đọc",
        category: "irregular",
        separable: false,

        forms: {
            ich: "lese",
            du: "liest",
            erSieEs: "liest",
            wir: "lesen",
            ihr: "lest",
            sieSie: "lesen"
        },
        changedParts: {
            du: "ie",
            erSieEs: "ie"
        },
        notes: {
            du: "e → ie",
            erSieEs: "e → ie"
        }
    },

    {
        infinitive: "möchten",
        meaning: "muốn, cách nói lịch sự",
        category: "irregular",
        separable: false,

        forms: {
            ich: "möchte",
            du: "möchtest",
            erSieEs: "möchte",
            wir: "möchten",
            ihr: "möchtet",
            sieSie: "möchten"
        },
        changedParts: {
            erSieEs: "e",
        },
        notes: {}
    },

    {
        infinitive: "mögen",
        meaning: "thích",
        category: "irregular",
        separable: false,

        forms: {
            ich: "mag",
            du: "magst",
            erSieEs: "mag",
            wir: "mögen",
            ihr: "mögt",
            sieSie: "mögen"
        },
        changedParts: {
            ich: "a",
            du: "a",
            erSieEs: "a"
        },
        notes: {
            ich: "ö → a",
            du: "ö → a",
            erSieEs: "ö → a"
        }
    },

    {
        infinitive: "nehmen",
        meaning: "lấy, chọn",
        category: "irregular",
        separable: false,

        forms: {
            ich: "nehme",
            du: "nimmst",
            erSieEs: "nimmt",
            wir: "nehmen",
            ihr: "nehmt",
            sieSie: "nehmen"
        },
        changedParts: {
            du: "imm",
            erSieEs: "imm"
        },
        notes: {
            du: "e → i, hm → mm",
            erSieEs: "e → i, hm → mm"
        }
    },

    {
        infinitive: "schlafen",
        meaning: "ngủ",
        category: "irregular",
        separable: false,

        forms: {
            ich: "schlafe",
            du: "schläfst",
            erSieEs: "schläft",
            wir: "schlafen",
            ihr: "schlaft",
            sieSie: "schlafen"
        },
        changedParts: {
            du: "ä",
            erSieEs: "ä"
        },
        notes: {
            du: "a → ä",
            erSieEs: "a → ä"
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
    },

    {
        infinitive: "sprechen",
        meaning: "nói",
        category: "irregular",
        separable: false,

        forms: {
            ich: "spreche",
            du: "sprichst",
            erSieEs: "spricht",
            wir: "sprechen",
            ihr: "sprecht",
            sieSie: "sprechen"
        },
        changedParts: {
            du: "i",
            erSieEs: "i"
        },
        notes: {
            du: "e → i",
            erSieEs: "e → i"
        }
    },

    {
        infinitive: "treffen",
        meaning: "gặp",
        category: "irregular",
        separable: false,

        forms: {
            ich: "treffe",
            du: "triffst",
            erSieEs: "trifft",
            wir: "treffen",
            ihr: "trefft",
            sieSie: "treffen"
        },
        changedParts: {
            du: "i",
            erSieEs: "i"
        },
        notes: {
            du: "e → i",
            erSieEs: "e → i"
        }
    },

    /*
     * 3. ĐỘNG TỪ TÁCH VÀ CỤM ĐỘNG TỪ
     */

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

        notes: {}
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

        notes: {}
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

        notes: {}
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

        notes: {}
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

        notes: {}
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

        notes: {
            du: "e → ie",
            erSieEs: "e → ie"
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

        notes: {}
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

        notes: {
            general: "Đây là cụm động từ; chỉ động từ gehen được chia."
        }
    },

    /*
     * 4. ĐỘNG TỪ KHUYẾT THIẾU
     */

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
        changedParts: {
            ich: "a",
            du: "a",
            erSieEs: "a"
        },
        notes: {
            ich: "ö → a",
            du: "ö → a",
            erSieEs: "ö → a"
        }
    },

    {
        infinitive: "wollen",
        meaning: "muốn",
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

        changedParts: {
            ich: "i",
            du: "i",
            erSieEs: "i"
        },
        notes: {
            ich: "o → i",
            du: "o → i",
            erSieEs: "o → i"
        }
    }
];  