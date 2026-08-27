/*
 * DỮ LIỆU SỔ TAY TỪ VỰNG
 * Khi có buổi học mới, thêm một object mới vào lessonData.
 */
window.lessonData = [
    {
        id: "2026-08-26",
        date: "26/08/2026",
        title: "Gesundheit und Medikamente",
        note: "Từ vựng về triệu chứng, thuốc và lời khuyên sức khỏe.",

        nouns: {
            der: [
                {
                    word: "der Rezept",
                    meaning: "toa thuốc, đơn thuốc"
                },
                {
                    word: "der Schnupfen",
                    meaning: "cảm lạnh, sổ mũi"
                },
                {
                    word: "der Husten",
                    meaning: "ho"
                }
            ],

            die: [
                {
                    word: "die Tablette",
                    meaning: "viên thuốc"
                },
                {
                    word: "die Nasentropfen",
                    meaning: "thuốc nhỏ mũi"
                },
                {
                    word: "die Schmerztablette",
                    meaning: "thuốc giảm đau"
                },
                {
                    word: "die Salbe",
                    meaning: "thuốc bôi, mỡ bôi"
                }
            ],

            das: [
                {
                    word: "das Rezept",
                    meaning: "toa thuốc, đơn thuốc"
                },
                {
                    word: "das Hustensaft",
                    meaning: "siro ho"
                }
            ]
        },

        verbs: [
            {
                word: "bleiben",
                meaning: "ở lại, vẫn",
                example: "Bleiben Sie bitte ruhig!"
            },
            {
                word: "halten",
                meaning: "giữ, dừng",
                example: "Halten Sie bitte an!"
            },
            {
                word: "rufen",
                meaning: "gọi",
                example: "Rufen Sie bitte 112 an!"
            },
            {
                word: "helfen",
                meaning: "giúp đỡ",
                example: "Nasentropfen helfen gegen Schnupfen."
            }
        ],

        adjectives: [],

        others: [
            {
                word: "gegen",
                meaning: "chống lại, dùng để trị",
                example: "Schmerztabletten helfen gegen Kopfschmerzen."
            },
            {
                word: "Kopfschmerzen",
                meaning: "đau đầu",
                example: "Ich habe Kopfschmerzen."
            }
        ]
    },
    {
        id: "2026-08-25",
        date: "25/08/2026",
        title: "Körperteile und Schmerzen",
        note: "Từ vựng về các bộ phận cơ thể, đau và cảnh báo.",

        nouns: {
            der: [
                {
                    word: "der Kopf",
                    meaning: "đầu"
                },
                {
                    word: "der Mund",
                    meaning: "miệng"
                },
                {
                    word: "der Hals",
                    meaning: "cổ, họng"
                },
                {
                    word: "der Arm",
                    meaning: "cánh tay"
                },
                {
                    word: "der Rücken",
                    meaning: "lưng"
                },
                {
                    word: "der Fuß",
                    meaning: "bàn chân"
                },
                {
                    word: "der Radfahrer",
                    meaning: "người đi xe đạp"
                },
                {
                    word: "der Fußgänger",
                    meaning: "người đi bộ"
                },
                {
                    word: "der Unfall",
                    meaning: "tai nạn"
                },
                {
                    word: "der Schmerz",
                    meaning: "cơn đau"
                }
            ],

            die: [
                {
                    word: "die Nase",
                    meaning: "mũi"
                },
                {
                    word: "die Brust",
                    meaning: "ngực"
                },
                {
                    word: "die Schulter",
                    meaning: "vai"
                },
                {
                    word: "die Hand",
                    meaning: "bàn tay"
                }
            ],

            das: [
                {
                    word: "das Auge",
                    meaning: "mắt"
                },
                {
                    word: "das Ohr",
                    meaning: "tai"
                },
                {
                    word: "das Bein",
                    meaning: "chân"
                }
            ]
        },

        verbs: [],

        adjectives: [
            {
                word: "vorsichtig",
                meaning: "cẩn thận",
                example: "Seien Sie vorsichtig!"
            }
        ],

        others: []
    },
    {
        id: "2026-08-24",
        date: "24/08/2026",
        title: "E-Mail und Briefe",
        note: "Từ vựng về thư điện tử, thư từ và cách viết thư.",

        nouns: {
            der: [
                {
                    word: "der Betreff",
                    meaning: "tiêu đề (thư/email)"
                },
                {
                    word: "der Ort",
                    meaning: "nơi chốn, địa điểm"
                },
                {
                    word: "der Gruß",
                    meaning: "lời chào"
                }
            ],

            die: [
                {
                    word: "die Anlage",
                    meaning: "tệp đính kèm, phụ lục"
                },
                {
                    word: "die Anrede",
                    meaning: "lời chào đầu thư"
                }
            ],

            das: [
                {
                    word: "das Datum",
                    meaning: "ngày, ngày tháng"
                }
            ]
        },

        verbs: [
            {
                word: "baden",
                meaning: "tắm bồn",
                example: "Ich bade gern."
            },
            {
                word: "im Internet surfen",
                meaning: "lướt web",
                example: "Ich surfe gern im Internet."
            },
            {
                word: "grillen",
                meaning: "nướng",
                example: "Wir grillen am Wochenende."
            },
            {
                word: "streichen",
                meaning: "sơn, quét sơn",
                example: "Ich streiche die Wand."
            }
        ],

        adjectives: [
            {
                word: "formell",
                meaning: "trang trọng",
                example: "Die Anrede ist formell."
            },
            {
                word: "informell",
                meaning: "thân mật",
                example: "Die Anrede ist informell."
            }
        ],

        others: [
            {
                word: "Nö",
                meaning: "không, cách nói thân mật của Nein",
                example: "Nö, das möchte ich nicht."
            },
            {
                word: "Sehr geehrter Herr Meyer",
                meaning: "Kính gửi ông Meyer"
            },
            {
                word: "Sehr geehrte Frau Meyer",
                meaning: "Kính gửi bà Meyer"
            },
            {
                word: "Sehr geehrte Damen und Herren",
                meaning: "Kính gửi quý ông bà"
            },
            {
                word: "Mit freundlichen Grüßen",
                meaning: "Trân trọng"
            },
            {
                word: "Viele Grüße",
                meaning: "Thân ái, lời chào thân mật"
            },
            {
                word: "Lieber Quan",
                meaning: "Quan thân mến"
            },
            {
                word: "Liebe Hang",
                meaning: "Hang thân mến"
            }
        ]
    },
    {
        id: "2026-08-20",
        date: "20/08/2026",
        title: "Formulare und Behörden",
        note: "Từ vựng về mẫu đơn, giấy tờ và các cơ quan hành chính.",

        nouns: {
            der: [
                {
                    word: "der Antrag auf Kindergeld",
                    meaning: "đơn xin trợ cấp trẻ em"
                },
                {
                    word: "der Agentur für Arbeit",
                    meaning: "cơ quan việc làm"
                }
            ],

            die: [
                {
                    word: "die Anlage Kind",
                    meaning: "phụ lục trẻ em"
                },
                {
                    word: "die Familienkasse",
                    meaning: "quỹ gia đình"
                },
                {
                    word: "die Agentur für Arbeit",
                    meaning: "cơ quan việc làm"
                },
                {
                    word: "die Bundesagentur für Arbeit",
                    meaning: "Cơ quan Việc làm Liên bang Đức"
                }
            ],

            das: [
                {
                    word: "das Formular",
                    meaning: "đơn biểu, mẫu đơn"
                },
                {
                    word: "das Kindergeld",
                    meaning: "trợ cấp trẻ em"
                },
                {
                    word: "das Bürgerbüro",
                    meaning: "văn phòng tiếp dân"
                },
                {
                    word: "das Bürgeramt",
                    meaning: "văn phòng hành chính công"
                }
            ]
        },

        verbs: [
            {
                word: "unterschreiben",
                meaning: "ký tên",
                example: "Ich unterschreibe das Formular."
            },
            {
                word: "ausdrucken",
                meaning: "in ra giấy",
                example: "Ich drucke das Formular aus."
            },
            {
                word: "schicken",
                meaning: "gửi",
                example: "Ich schicke das Formular."
            },
            {
                word: "ausfüllen",
                meaning: "điền vào",
                example: "Ich fülle das Formular aus."
            },
            {
                word: "müssen",
                meaning: "phải",
                example: "Ich muss das Formular ausfüllen."
            }
        ],

        adjectives: [],

        others: []
    },
    {
        id: "2026-08-19",
        date: "19/8/2026",
        title: "Preise, Materialien und Maße",
        note: "Giá cả, chất liệu và kích thước",

        nouns: {
            der: [
                {
                    word: "der Preis",
                    meaning: "giá cả",
                    extra: "die Preise"
                },
                {
                    word: "der Euro",
                    meaning: "Euro, đồng Euro",
                    extra: "€"
                },
                {
                    word: "der Meter",
                    meaning: "mét",
                    extra: "m"
                },
                {
                    word: "der Zentimeter",
                    meaning: "centimét",
                    extra: "cm"
                },
                {
                    word: "der Schreibtisch",
                    meaning: "bàn làm việc"
                }
            ],

            die: [
                {
                    word: "die Länge",
                    meaning: "chiều dài",
                    extra: "lang = dài"
                },
                {
                    word: "die Höhe",
                    meaning: "chiều cao",
                    extra: "hoch = cao"
                },
                {
                    word: "die Breite",
                    meaning: "chiều rộng",
                    extra: "breit = rộng"
                },
                {
                    word: "die Tiefe",
                    meaning: "chiều sâu, chiều ngang",
                    extra: "tief = sâu"
                }
            ],

            das: [
                {
                    word: "das Metall",
                    meaning: "kim loại"
                },
                {
                    word: "das Holz",
                    meaning: "gỗ"
                },
                {
                    word: "das Leder",
                    meaning: "da"
                },
                {
                    word: "das Plastik",
                    meaning: "nhựa"
                },
                {
                    word: "das Material",
                    meaning: "chất liệu, vật liệu"
                }
            ]
        },

        verbs: [],

        adjectives: [
            {
                word: "günstig",
                meaning: "rẻ, có giá tốt",
                example: "Das Sofa ist günstig."
            },
            {
                word: "kostenlos",
                meaning: "miễn phí",
                example: "Der Versand ist kostenlos."
            },
            {
                word: "gratis",
                meaning: "miễn phí",
                example: "Das ist gratis."
            },
            {
                word: "lang",
                meaning: "dài",
                example: "Der Tisch ist zwei Meter lang."
            },
            {
                word: "hoch",
                meaning: "cao",
                example: "Der Schrank ist 190 cm hoch."
            },
            {
                word: "breit",
                meaning: "rộng",
                example: "Das Bett ist 160 cm breit."
            },
            {
                word: "tief",
                meaning: "sâu",
                example: "Der Schrank ist 50 cm tief."
            },
            {
                word: "weiß",
                meaning: "màu trắng",
                example: "Der Schrank ist weiß."
            }
        ],

        others: []
    },
    {
        id: "2026-08-18",
        date: "18/08/2026",
        title: "Ortsangaben und Wohnung",
        note: "Vị trí đồ vật, đồ dùng trong nhà và cách hỏi cảm nhận",

        nouns: {
            der: [
                {
                    word: "Wasserhahn",
                    meaning: "vòi nước",
                    extra: "Plural: die Wasserhähne"
                },
                {
                    word: "Teppich",
                    meaning: "tấm thảm",
                    extra: "Plural: die Teppiche"
                },
                {
                    word: "Sessel",
                    meaning: "ghế bành, ghế tựa",
                    extra: "Plural: die Sessel"
                }

            ],

            die: [
                {
                    word: "Dusche",
                    meaning: "vòi sen, phòng tắm vòi sen",
                    extra: "Plural: die Duschen"
                },
                {
                    word: "Couch",
                    meaning: "ghế dài, ghế sofa",
                    extra: "Plural: die Couches"
                },
                {
                    word: "Badewanne",
                    meaning: "bồn tắm",
                    extra: "Plural: die Badewannen"
                }

            ],

            das: [
                {
                    word: "Bild",
                    meaning: "bức tranh, bức ảnh",
                    extra: "Plural: die Bilder"
                }
            ]
        },

        verbs: [
            {
                word: "gefallen",
                meaning: "làm ai đó thích, hợp ý ai đó",
                form: "gefällt / gefallen",
                example: "Das Zimmer gefällt mir sehr gut."
            }
        ],

        adjectives: [
            {
                word: "hell",
                meaning: "sáng, rõ ràng",
                example: "Das Zimmer ist hell."
            },
            {
                word: "dunkel",
                meaning: "tối, không sáng",
                example: "Das Zimmer ist dunkel."
            },
            {
                word: "sauber",
                meaning: "sạch, gọn gàng",
                example: "Das Sofa ist sauber."
            },
            {
                word: "schmutzig",
                meaning: "dơ, bẩn",
                example: "Das Sofa ist schmutzig."
            },
            {
                word: "neu",
                meaning: "mới, chưa sử dụng",
                example: "Der Stuhl ist neu."
            },
            {
                word: "alt",
                meaning: "cũ, đã sử dụng",
                example: "Der Stuhl ist alt."
            },
            {
                word: "schön",
                meaning: "đẹp, hấp dẫn",
                example: "Das Bett ist schön."
            },
            {
                word: "hässlich",
                meaning: "xấu, không hấp dẫn",
                example: "Das Bett ist hässlich."
            },
            {
                word: "groß",
                meaning: "lớn",
                example: "Der Tisch ist groß."
            },
            {
                word: "klein",
                meaning: "nhỏ",
                example: "Der Stuhl ist klein."
            },
            {
                word: "modern",
                meaning: "hiện đại",
                example: "Der Computer ist modern."
            },
            {
                word: "unmodern",
                meaning: "không hiện đại",
                example: "Der Computer ist unmodern."
            },
            {
                word: "gemütlich",
                meaning: "thuận tiện, dễ chịu",
                example: "Das Zimmer ist gemütlich."
            },
            {
                word: "ungemütlich",
                meaning: "không thuận tiện, không dễ chịu",
                example: "Das Zimmer ist ungemütlich."
            }
        ],

        others: []
    },

    {
        id: "2026-08-17",
        date: "17/08/2026",
        title: "Wohnen, Möbel und Miete",
        note: "Nhà ở, đồ nội thất và các khoản tiền thuê nhà",

        nouns: {
            der: [
                {
                    word: "Mitbewohner",
                    meaning: "bạn cùng phòng nam",
                    extra: "Plural: die Mitbewohner"
                },
                {
                    word: "Aufzug",
                    meaning: "thang máy",
                    extra: "Plural: die Aufzüge"
                },
                {
                    word: "Lift",
                    meaning: "thang máy",
                    extra: "Plural: die Lifte"
                },
                {
                    word: "Schrank",
                    meaning: "cái tủ",
                    extra: "Plural: die Schränke"
                },
                {
                    word: "Balkon",
                    meaning: "ban công",
                    extra: "Plural: die Balkone"
                },
                {
                    word: "Keller",
                    meaning: "tầng hầm",
                    extra: "Plural: die Keller"
                },
                {
                    word: "Herd",
                    meaning: "bếp nấu",
                    extra: "Plural: die Herde"
                },
                {
                    word: "Kühlschrank",
                    meaning: "tủ lạnh",
                    extra: "Plural: die Kühlschränke"
                },
                {
                    word: "Ordner",
                    meaning: "bìa hồ sơ, tập tài liệu",
                    extra: "Plural: die Ordner"
                }
            ],

            die: [
                {
                    word: "Mitbewohnerin",
                    meaning: "bạn cùng phòng nữ",
                    extra: "Plural: die Mitbewohnerinnen"
                },
                {
                    word: "Küche",
                    meaning: "nhà bếp",
                    extra: "Plural: die Küchen"
                },
                {
                    word: "Miete",
                    meaning: "tiền thuê nhà",
                    extra: "Plural: die Mieten"
                },
                {
                    word: "Kaltmiete",
                    meaning: "tiền thuê chưa bao gồm phụ phí",
                    extra: "Plural: die Kaltmieten"
                },
                {
                    word: "Warmmiete",
                    meaning: "tổng tiền thuê đã bao gồm phụ phí",
                    extra: "Plural: die Warmmieten"
                },
                {
                    word: "Nebenkosten",
                    meaning: "các phụ phí nhà ở",
                    extra: "Chỉ dùng ở số nhiều"
                },
                {
                    word: "Heizung",
                    meaning: "hệ thống sưởi, lò sưởi",
                    extra: "Plural: die Heizungen"
                },
                {
                    word: "Spülmaschine",
                    meaning: "máy rửa bát",
                    extra: "Plural: die Spülmaschinen"
                },
                {
                    word: "Waschmaschine",
                    meaning: "máy giặt",
                    extra: "Plural: die Waschmaschinen"
                },
                {
                    word: "Mikrowelle",
                    meaning: "lò vi sóng",
                    extra: "Plural: die Mikrowellen"
                },
                {
                    word: "Pflanze",
                    meaning: "cây cảnh, cây cối",
                    extra: "Plural: die Pflanzen"
                },
                {
                    word: "Maus",
                    meaning: "con chuột, chuột máy tính",
                    extra: "Plural: die Mäuse"
                },
                {
                    word: "Wand",
                    meaning: "bức tường",
                    extra: "Plural: die Wände"
                },
                {
                    word: "Tastatur",
                    meaning: "bàn phím",
                    extra: "Plural: die Tastaturen"
                },
                {
                    word: "Lampe",
                    meaning: "cái đèn",
                    extra: "Plural: die Lampen"
                },
                {
                    word: "Steckdose",
                    meaning: "ổ cắm điện",
                    extra: "Plural: die Steckdosen"
                }
            ],

            das: [
                {
                    word: "Zimmer",
                    meaning: "căn phòng",
                    extra: "Plural: die Zimmer"
                },
                {
                    word: "Wohnzimmer",
                    meaning: "phòng khách",
                    extra: "Plural: die Wohnzimmer"
                },
                {
                    word: "Schlafzimmer",
                    meaning: "phòng ngủ",
                    extra: "Plural: die Schlafzimmer"
                },
                {
                    word: "Möbel",
                    meaning: "món đồ nội thất",
                    extra: "Plural: die Möbel"
                },
                {
                    word: "Bett",
                    meaning: "cái giường",
                    extra: "Plural: die Betten"
                },
                {
                    word: "Arbeitszimmer",
                    meaning: "phòng làm việc",
                    extra: "Plural: die Arbeitszimmer"
                }
            ]
        },

        verbs: [],

        adjectives: [
            {
                word: "möbliert",
                meaning: "có sẵn đồ nội thất",
                example: "Das Zimmer ist möbliert."
            },
            {
                word: "dringend",
                meaning: "gấp, khẩn cấp",
                example: "Ich suche dringend ein Zimmer."
            }
        ],

        others: [
            {
                word: "an (+ Dativ)",
                meaning: "ở sát, ở bên và có tiếp xúc",
                example: "Das Bild hängt an der Wand."
            },
            {
                word: "neben (+ Dativ)",
                meaning: "ở bên cạnh",
                example: "Die Maus ist neben dem Buch."
            },
            {
                word: "auf (+ Dativ)",
                meaning: "ở trên và có tiếp xúc",
                example: "Das Handy ist auf dem Tisch."
            },
            {
                word: "über (+ Dativ)",
                meaning: "ở phía trên và không tiếp xúc",
                example: "Das Bild hängt über dem Sofa."
            },
            {
                word: "vor (+ Dativ)",
                meaning: "ở phía trước",
                example: "Der Stuhl steht vor dem Tisch."
            },
            {
                word: "hinter (+ Dativ)",
                meaning: "ở phía sau",
                example: "Die Pflanze ist hinter dem Drucker."
            },
            {
                word: "unter (+ Dativ)",
                meaning: "ở phía dưới",
                example: "Die Tasche ist unter dem Tisch."
            },
            {
                word: "in (+ Dativ)",
                meaning: "ở bên trong",
                example: "Das Handy ist in der Tasche."
            },
            {
                word: "zwischen (+ Dativ)",
                meaning: "ở giữa",
                example: "Der Sessel steht zwischen dem Tisch und dem Schrank."
            }
        ]
    },
    {
        id: "2026-08-11",
        date: "11/08/2026",
        title: "Orte in der Stadt und Wegbeschreibung",
        note: "Từ vựng về các địa điểm trong thành phố, phương hướng và chỉ đường.",

        nouns: {
            der: [
                {
                    word: "der Bahnhof",
                    meaning: "nhà ga",
                    extra: "Số nhiều: die Bahnhöfe"
                },
                {
                    word: "der Hafen",
                    meaning: "bến cảng, cảng",
                    extra: "Số nhiều: die Häfen"
                }
            ],

            die: [
                {
                    word: "die Station",
                    meaning: "ga, trạm",
                    extra: "Số nhiều: die Stationen"
                },
                {
                    word: "die Haltestelle",
                    meaning: "trạm dừng",
                    extra: "Số nhiều: die Haltestellen"
                },
                {
                    word: "die Bibliothek",
                    meaning: "thư viện",
                    extra: "Số nhiều: die Bibliotheken"
                },
                {
                    word: "die Disco",
                    meaning: "sàn nhảy, vũ trường",
                    extra: "Số nhiều: die Discos"
                },
                {
                    word: "die Kirche",
                    meaning: "nhà thờ",
                    extra: "Số nhiều: die Kirchen"
                },
                {
                    word: "die Bar",
                    meaning: "quán bar",
                    extra: "Số nhiều: die Bars"
                },
                {
                    word: "die Kneipe",
                    meaning: "quán rượu, quán bia nhỏ",
                    extra: "Số nhiều: die Kneipen"
                },
                {
                    word: "die Richtung",
                    meaning: "phương hướng, hướng",
                    extra: "Số nhiều: die Richtungen"
                }
            ],

            das: [
                {
                    word: "das Schwimmbad",
                    meaning: "bể bơi, hồ bơi",
                    extra: "Số nhiều: die Schwimmbäder"
                },
                {
                    word: "das Theater",
                    meaning: "nhà hát",
                    extra: "Số nhiều: die Theater"
                },
                {
                    word: "das Café",
                    meaning: "quán cà phê",
                    extra: "Số nhiều: die Cafés"
                },
                {
                    word: "das Museum",
                    meaning: "bảo tàng",
                    extra: "Số nhiều: die Museen"
                },
                {
                    word: "das Restaurant",
                    meaning: "nhà hàng",
                    extra: "Số nhiều: die Restaurants"
                },
                {
                    word: "das Kaufhaus",
                    meaning: "trung tâm mua sắm, cửa hàng bách hóa",
                    extra: "Số nhiều: die Kaufhäuser"
                },
                {
                    word: "das Kino",
                    meaning: "rạp chiếu phim",
                    extra: "Số nhiều: die Kinos"
                },
                {
                    word: "das Stadion",
                    meaning: "sân vận động",
                    extra: "Số nhiều: die Stadien"
                }
            ]
        },

        verbs: [
            {
                word: "aussteigen",
                meaning: "xuống xe",
                example: "Ich steige an der nächsten Haltestelle aus."
            },
            {
                word: "erklären",
                meaning: "giải thích, chỉ dẫn",
                example: "Können Sie mir den Weg erklären?"
            }
        ],

        adjectives: [],

        others: [
            {
                word: "wohin",
                meaning: "đi đâu, đến đâu",
                example: "Wohin fährst du?"
            },
            {
                word: "nach links",
                meaning: "sang trái, về phía trái",
                example: "Gehen Sie hier nach links."
            },
            {
                word: "geradeaus",
                meaning: "đi thẳng",
                example: "Gehen Sie immer geradeaus."
            },
            {
                word: "nach rechts",
                meaning: "sang phải, về phía phải",
                example: "Dann gehen Sie nach rechts."
            }
        ]
    },
    {
        id: "2026-07-28",
        date: "28/07/2026",
        title: "Fähigkeiten und Freizeitaktivitäten",
        note: "Từ vựng về khả năng, nghề nghiệp và các hoạt động trong thời gian rảnh.",

        nouns: {
            der: [
                {
                    word: "der Trainer",
                    meaning: "huấn luyện viên",
                    extra: "Số nhiều: die Trainer; giống cái: die Trainerin"
                },
                {
                    word: "der Spieler",
                    meaning: "cầu thủ, người chơi",
                    extra: "Số nhiều: die Spieler; giống cái: die Spielerin"
                }
            ],

            die: [],

            das: []
        },

        verbs: [
            {
                word: "können",
                meaning: "có thể, biết làm gì",
                example: "Ich kann gut Fußball spielen."
            },
            {
                word: "fotografieren",
                meaning: "chụp ảnh",
                example: "Ich fotografiere gern."
            },
            {
                word: "Klavier spielen",
                meaning: "chơi đàn piano",
                example: "Sie kann sehr gut Klavier spielen."
            },
            {
                word: "malen",
                meaning: "vẽ, vẽ tranh",
                example: "Das Kind malt ein Bild."
            },
            {
                word: "nähen",
                meaning: "may, khâu",
                example: "Meine Mutter kann gut nähen."
            },
            {
                word: "Rad fahren",
                meaning: "đi xe đạp",
                example: "Ich fahre jeden Tag Rad."
            },
            {
                word: "rechnen",
                meaning: "tính toán",
                example: "Er kann sehr gut rechnen."
            },
            {
                word: "Schach spielen",
                meaning: "chơi cờ vua",
                example: "Wir spielen am Wochenende Schach."
            },
            {
                word: "schwimmen",
                meaning: "bơi",
                example: "Ich gehe zweimal pro Woche schwimmen."
            },
            {
                word: "singen",
                meaning: "hát",
                example: "Sie kann sehr gut singen."
            }
        ],

        adjectives: [],

        others: []
    },
    {
        id: "2026-07-24",
        date: "24/07/2026",
        title: "Jahreszeiten und Monate",
        note: "Từ vựng về bốn mùa, các tháng và nhiệt độ.",

        nouns: {
            der: [
                // 4 mùa
                {
                    word: "der Frühling",
                    meaning: "mùa xuân",
                    extra: "Số nhiều: die Frühlinge"
                },
                {
                    word: "der Sommer",
                    meaning: "mùa hè",
                    extra: "Số nhiều: die Sommer"
                },
                {
                    word: "der Herbst",
                    meaning: "mùa thu",
                    extra: "Số nhiều: die Herbste"
                },
                {
                    word: "der Winter",
                    meaning: "mùa đông",
                    extra: "Số nhiều: die Winter"
                },

                // 12 tháng
                {
                    word: "der Monat",
                    meaning: "tháng",
                    extra: "Số nhiều: die Monate"
                },
                {
                    word: "der Januar",
                    meaning: "tháng Một",
                    extra: "Im Januar ist es kalt."
                },
                {
                    word: "der Februar",
                    meaning: "tháng Hai",
                    extra: "Im Februar ist es oft kalt."
                },
                {
                    word: "der März",
                    meaning: "tháng Ba",
                    extra: "Im März beginnt der Frühling."
                },
                {
                    word: "der April",
                    meaning: "tháng Tư",
                    extra: "Im April regnet es oft."
                },
                {
                    word: "der Mai",
                    meaning: "tháng Năm",
                    extra: "Im Mai ist es warm."
                },
                {
                    word: "der Juni",
                    meaning: "tháng Sáu",
                    extra: "Im Juni beginnt der Sommer."
                },
                {
                    word: "der Juli",
                    meaning: "tháng Bảy",
                    extra: "Im Juli ist es heiß."
                },
                {
                    word: "der August",
                    meaning: "tháng Tám",
                    extra: "Im August ist es sonnig."
                },
                {
                    word: "der September",
                    meaning: "tháng Chín",
                    extra: "Im September beginnt der Herbst."
                },
                {
                    word: "der Oktober",
                    meaning: "tháng Mười",
                    extra: "Im Oktober ist es oft windig."
                },
                {
                    word: "der November",
                    meaning: "tháng Mười một",
                    extra: "Im November ist es oft neblig."
                },
                {
                    word: "der Dezember",
                    meaning: "tháng Mười hai",
                    extra: "Im Dezember beginnt der Winter."
                },

                // Nhiệt độ
                {
                    word: "der Grad",
                    meaning: "độ, đơn vị đo nhiệt độ",
                    extra: "Heute sind es 25 Grad."
                }
            ],

            die: [
                {
                    word: "die Jahreszeit",
                    meaning: "mùa",
                    extra: "Số nhiều: die Jahreszeiten"
                },
                {
                    word: "die Temperatur",
                    meaning: "nhiệt độ",
                    extra: "Số nhiều: die Temperaturen"
                }
            ],

            das: []
        },

        verbs: [],
        adjectives: [],
        others: []
    },
    {
        id: "2026-07-23",
        date: "23/07/2026",
        title: "Tagesablauf",
        note: "Từ vựng về các hoạt động hằng ngày.",

        nouns: {
            der: [],
            die: [],
            das: []
        },

        verbs: [
            {
                word: "duschen",
                meaning: "tắm",
                example: "Ich dusche am Morgen."
            },
            {
                word: "frühstücken",
                meaning: "ăn sáng",
                example: "Ich frühstücke um sieben Uhr."
            },
            {
                word: "schlafen",
                meaning: "ngủ",
                example: "Ich schlafe acht Stunden."
            },
            {
                word: "treffen",
                meaning: "gặp",
                example: "Ich treffe meine Freunde am Nachmittag."
            },
            {
                word: "lesen",
                meaning: "đọc",
                example: "Ich lese am Abend ein Buch."
            },
            {
                word: "aufstehen",
                meaning: "thức dậy",
                example: "Ich stehe um sechs Uhr auf."
            },
            {
                word: "aufräumen",
                meaning: "dọn dẹp",
                example: "Ich räume mein Zimmer auf."
            },
            {
                word: "einkaufen",
                meaning: "mua sắm",
                example: "Ich kaufe am Nachmittag ein."
            },
            {
                word: "anrufen",
                meaning: "gọi điện",
                example: "Ich rufe meine Mutter an."
            },
            {
                word: "abholen",
                meaning: "đón",
                example: "Ich hole meinen Bruder von der Schule ab."
            },
            {
                word: "fernsehen",
                meaning: "xem tivi",
                example: "Ich sehe am Abend fern."
            },
            {
                word: "rausgehen",
                meaning: "đi ra ngoài",
                example: "Ich gehe am Wochenende raus."
            },
            {
                word: "spazieren gehen",
                meaning: "đi dạo",
                example: "Ich gehe am Abend spazieren."
            }
        ],

        adjectives: [],
        others: []
    },
    {
        id: "2026-07-22",
        date: "22/07/2026",
        title: "Essen und Wetter",
        note: "Từ vựng về ăn uống và các cách miêu tả thời tiết.",

        nouns: {
            der: [],

            die: [
                {
                    word: "die Sonne",
                    meaning: "mặt trời",
                    extra: "Số nhiều: die Sonnen"
                }
            ],

            das: [
                {
                    word: "das Frühstück",
                    meaning: "bữa sáng",
                    extra: "Số nhiều: die Frühstücke"
                },
                {
                    word: "das Mittagessen",
                    meaning: "bữa trưa",
                    extra: "Số nhiều không đổi: die Mittagessen"
                },
                {
                    word: "das Abendessen",
                    meaning: "bữa tối",
                    extra: "Số nhiều không đổi: die Abendessen"
                }
            ]
        },

        verbs: [
            {
                word: "scheinen",
                meaning: "chiếu sáng",
                example: "Die Sonne scheint."
            },
            {
                word: "schneien",
                meaning: "tuyết rơi",
                example: "Es schneit."
            },
            {
                word: "regnen",
                meaning: "mưa",
                example: "Es regnet."
            }
        ],

        adjectives: [
            {
                word: "vegetarisch",
                meaning: "chay",
                example: "Ich esse vegetarisch."
            },
            {
                word: "vegan",
                meaning: "thuần chay",
                example: "Das Essen ist vegan."
            },
            {
                word: "sonnig",
                meaning: "có nắng",
                example: "Es ist sonnig."
            },
            {
                word: "bewölkt",
                meaning: "nhiều mây",
                example: "Es ist bewölkt."
            },
            {
                word: "windig",
                meaning: "có gió",
                example: "Es ist windig."
            },
            {
                word: "regnerisch",
                meaning: "có mưa, nhiều mưa",
                example: "Es ist regnerisch."
            },
            {
                word: "kalt",
                meaning: "lạnh",
                example: "Es ist kalt."
            },
            {
                word: "warm",
                meaning: "ấm",
                example: "Es ist warm."
            },
            {
                word: "stürmisch",
                meaning: "có gió bão",
                example: "Es ist stürmisch."
            },
            {
                word: "neblig",
                meaning: "có sương mù",
                example: "Es ist neblig."
            },
            {
                word: "gewittrig",
                meaning: "có giông, có sấm chớp",
                example: "Es ist gewittrig."
            }
        ],

        others: []
    },
    {
        id: "2026-07-20",
        date: "20/07/2026",
        title: "Frühstück",
        note: "Từ vựng về bữa sáng và cách diễn tả mức độ thường xuyên.",

        nouns: {
            der: [
                {
                    word: "der Käse",
                    meaning: "phô mai",
                    extra: "Thường không dùng số nhiều"
                },
                {
                    word: "der Schinken",
                    meaning: "thịt nguội, giăm bông",
                    extra: "Thường không dùng số nhiều"
                },
                {
                    word: "der Joghurt",
                    meaning: "sữa chua",
                    extra: "Số nhiều: die Joghurts"
                },
                {
                    word: "der Saft",
                    meaning: "nước ép",
                    extra: "Số nhiều: die Säfte"
                },
                {
                    word: "der Becher",
                    meaning: "cốc, hộp đựng",
                    extra: "Số nhiều: die Becher"
                },
                {
                    word: "der Liter",
                    meaning: "lít",
                    extra: "Số nhiều: die Liter; cũng có thể dùng das Liter"
                }
            ],

            die: [
                {
                    word: "die Butter",
                    meaning: "bơ",
                    extra: "Thường không dùng số nhiều"
                },
                {
                    word: "die Wurst",
                    meaning: "xúc xích",
                    extra: "Số nhiều: die Würste"
                },
                {
                    word: "die Dose",
                    meaning: "lon, hộp kim loại",
                    extra: "Số nhiều: die Dosen"
                },
                {
                    word: "die Flasche",
                    meaning: "chai, lọ",
                    extra: "Số nhiều: die Flaschen"
                }
            ],

            das: [
                {
                    word: "das Brot",
                    meaning: "bánh mì",
                    extra: "Số nhiều: die Brote"
                },
                {
                    word: "das Brötchen",
                    meaning: "bánh mì nhỏ",
                    extra: "Số nhiều: die Brötchen"
                },
                {
                    word: "das Müsli",
                    meaning: "ngũ cốc",
                    extra: "Số nhiều: die Müslis"
                },
                {
                    word: "das Croissant",
                    meaning: "bánh sừng bò",
                    extra: "Số nhiều: die Croissants"
                },
                {
                    word: "das Ei",
                    meaning: "trứng",
                    extra: "Số nhiều: die Eier"
                },
                {
                    word: "das Obst",
                    meaning: "hoa quả",
                    extra: "Không có số nhiều"
                },
                {
                    word: "das Gramm",
                    meaning: "gam",
                    extra: "Số nhiều không đổi: die Gramm"
                },
                {
                    word: "das Kilo",
                    meaning: "kilôgam, cân",
                    extra: "Số nhiều: die Kilos"
                }
            ]
        },

        verbs: [],

        adjectives: [],

        others: [
            {
                word: "immer",
                meaning: "luôn luôn",
                example: "Ich trinke immer Saft zum Frühstück."
            },
            {
                word: "meistens",
                meaning: "thường xuyên, hầu hết các lần",
                example: "Ich trinke meistens Saft zum Frühstück."
            },
            {
                word: "oft",
                meaning: "thường",
                example: "Ich trinke oft Saft zum Frühstück."
            },
            {
                word: "manchmal",
                meaning: "thỉnh thoảng",
                example: "Ich trinke manchmal Saft zum Frühstück."
            },
            {
                word: "selten",
                meaning: "hiếm khi",
                example: "Ich trinke selten Saft zum Frühstück."
            },
            {
                word: "nie",
                meaning: "không bao giờ",
                example: "Ich trinke nie Saft zum Frühstück."
            }
        ]
    }
];