var LAppDefine = {
    
    
    DEBUG_LOG : false,
    DEBUG_MOUSE_LOG : false, 
    // DEBUG_DRAW_HIT_AREA : false, 
    // DEBUG_DRAW_ALPHA_MODEL : false, 
    
    
    
    
    VIEW_MAX_SCALE : 2,
    VIEW_MIN_SCALE : 0.8,

    VIEW_LOGICAL_LEFT : -1,
    VIEW_LOGICAL_RIGHT : 1,

    VIEW_LOGICAL_MAX_LEFT : -2,
    VIEW_LOGICAL_MAX_RIGHT : 2,
    VIEW_LOGICAL_MAX_BOTTOM : -2,
    VIEW_LOGICAL_MAX_TOP : 2,
    
    
    PRIORITY_NONE : 0,
    PRIORITY_IDLE : 1,
    PRIORITY_NORMAL : 2,
    PRIORITY_FORCE : 3,

    MODEL_POSITION_X : 0,
    MODEL_POSITION_Y : -0.125,
    
    
    BACK_IMAGE_NAME : "assets/image/back_class_normal.png",

    MODEL_IROHA : "assets/live2d/100100/model.json",

    
    MOTION_GROUP_IDLE : "motion", 
    MOTION_GROUP_TAP_BODY : "tap_body", 
    MOTION_GROUP_FLICK_HEAD : "flick_head", 
    MOTION_GROUP_PINCH_IN : "pinch_in", 
    MOTION_GROUP_PINCH_OUT : "pinch_out", 
    MOTION_GROUP_SHAKE : "shake", 

    
    HIT_AREA_HEAD : "head",
    HIT_AREA_BODY : "body",

    CHAR_MODEL : {
        "Akemi Homura" : "200200",
        "Akemi Homura (School)" : "200201",
        "Akemi Homura (MagiRepo)" : "200288",
        "Akemi Homura Glasses Ver." : "200300",
        "Akemi Homura Glasses Ver. (School)" : "200301",
        "Akemi Homura Glasses Ver. (Shadow)" : "200302",
        "Akemi Homura Glasses Ver. (Haregi)" : "200350",
        "Akemi Homura Glasses Ver. (Winter)" : "200351",
        "Akemi Homura Glasses Ver. (Loungewear)" : "200352",
        "Akemi Homura Glasses Ver. (Mermyngii・Miracle Swimmer)" : "200353",
        "Akemi Homura Glasses Ver. (MagiRepo)" : "200388",
        "Akemi Homura Glasses Ver. (MagiRepo 2)" : "200389",
        "Akemi Homura Swimsuit Ver." : "230000",
        "Akemi Homura Swimsuit Ver. (MagiRepo)" : "230088",
        "Akino Kaede" : "101100",
        "Akino Kaede (School)" : "101101",
        "Akino Kaede (Shadow)" : "101102",
        "Akino Kaede (Swimsuit)" : "101150",
        "Akino Kaede (Winter)" : "101151",
        "Akino Kaede (MagiRepo)" : "101188",
        "Akino Kaede (? [101190])" : "101190",
        "Alina Gray" : "100800",
        "Alina Gray (Uniform)" : "100801",
        "Alina Gray (Swimsuit)" : "100850",
        "Alina Gray (MagiRepo)" : "100888",
        "Amane Tsukasa" : "101900",
        "Amane Tsukasa (School)" : "101901",
        "Amane Tsukasa (Winter)" : "101950",
        "Amane Tsukasa (Christmas)" : "101951",
        "Amane Tsukasa (MagiRepo)" : "101988",
        "Amane Tsukuyo" : "101800",
        "Amane Tsukuyo (Casual)" : "101801",
        "Amane Tsukuyo (Christmas)" : "101850",
        "Amane Tsukuyo (MagiRepo)" : "101888",
        "Amane Sisters Mizugi Ver." : "111800",
        "Amane Sisters Mizugi Ver. (Tsukuyo)" : "111801",
        "Amane Sisters Mizugi Ver. (Tsukasa)" : "111802",
        //"Amane Sisters Mizugi Ver. (Tsukasa)" : "111900",
        "Azusa Mifuyu" : "100600",
        "Azusa Mifuyu (Casual)" : "100601",
        "Azusa Mifuyu (School)" : "100602",
        "Azusa Mifuyu (Swimsuit)" : "100650",
        "Azusa Mifuyu (MagiRepo)" : "100688",
        "Azusa Mifuyu (? [100690])" : "100690",
        "Felicia-chan" : "110500",
        "Futaba Sana" : "100400",
        "Futaba Sana (School)" : "100401",
        "Futaba Sana (Loungewear)" : "100402",
        "Futaba Sana (Black Feather)" : "100403",
        "Futaba Sana (Winter)" : "100450",
        "Futaba Sana (Swimsuit)" : "100451",
        "Futaba Sana (MagiRepo)" : "100488",
        "Futaba Sana (MagiRepo 2)" : "100489",
        "Hiiragi Nemu" : "101400",
        "Hiiragi Nemu (School)" : "101401",
        "Hiiragi Nemu (Casual)" : "101402",
        "Hiiragi Nemu (School 2)" : "101403",
        "Hiiragi Nemu (Swimsuit)" : "101450",
        "Hiiragi Nemu (MagiRepo)" : "101488",
        "Holy Alina" : "110800",
        "Holy Alina (MagiRepo)" : "110888",
        "Holy Alina Final Form" : "120800",
        "Holy Mami" : "250000",
        "Holy Mami (Magius)" : "250001",
        "Holy Mami (MagiRepo)" : "250088",
        "Iroha-chan" : "120100",
        "Izumi Kanagi" : "101600",
        "Izumi Kanagi (School)" : "101601",
        "Izumi Kanagi (Maid)" : "101602",
        "Izumi Kanagi (Winter)" : "101650",
        "Izumi Kanagi (MagiRepo)" : "101688",
        "Kaname Madoka" : "200100",
        "Kaname Madoka (School)" : "200101",
        "Kaname Madoka (Winter)" : "200150",
        "Kaname Madoka (Swimsuit)" : "200151",
        "Kaname Madoka (Loungewear)" : "200152",
        "Kaname Madoka (MagiRepo)" : "200188",
        "Kaname Madoka (MagiRepo 2)" : "200189",
        "Kaname Madoka (MagiRepo 3)" : "200190",
        "Kaname Madoka (MagiRepo 4)" : "200191",
        "Kaname Madoka Haregi Ver." : "210000",
        "Kaname Madoka Haregi Ver. (MagiRepo)" : "210088",
        "Madoka-senpai" : "210200",
        "Miki Sayaka" : "200400",
        "Miki Sayaka (School)" : "200401",
        "Miki Sayaka (Winter)" : "200450",
        "Miki Sayaka (Swimsuit)" : "200451",
        "Miki Sayaka (Loungewear)" : "200452",
        "Miki Sayaka (Mermyngii・Miracle Swimmer)" : "200453",
        "Miki Sayaka (MagiRepo)" : "200488",
        "Miki Sayaka (MagiRepo 2)" : "200489",
        "Miki Sayaka (MagiRepo 3)" : "200490",
        "Minami Rena" : "100900",
        "Minami Rena (School)" : "100901",
        "Minami Rena (Christmas)" : "100950",
        "Minami Rena (Swimsuit)" : "100951",
        "Minami Rena (MagiRepo)" : "100988",
        "Minami Rena (? [100990])" : "100990",
        "Misono Karin" : "101200",
        "Misono Karin (School)" : "101201",
        "Misono Karin (MagiRepo)" : "101288",
        "Mitsuki Felicia" : "100500",
        "Mitsuki Felicia (School)" : "100501",
        "Mitsuki Felicia (Loungewear)" : "100502",
        "Mitsuki Felicia (Halloween)" : "100503",
        "Mitsuki Felicia (Black Feather)" : "100504",
        "Mitsuki Felicia (Shadow)" : "100505",
        "Mitsuki Felicia (Swimsuit)" : "100550",
        "Mitsuki Felicia (Winter)" : "100551",
        "Mitsuki Felicia (MagiRepo)" : "100588",
        "Mitsuki Felicia (MagiRepo 2)" : "100589",
        "Momoe Nagisa" : "200700",
        "Momoe Nagisa (School)" : "200701",
        "Momoe Nagisa (MagiRepo)" : "200788",
        "Momoe Nagisa (MagiRepo 2)" : "200789",
        //"Mitsuki Felicia (MagiRepo 3)" : "100590",
        "Sakura Kyouko" : "200600",
        "Sakura Kyouko (Casual)" : "200601",
        "Sakura Kyouko (Halloween)" : "200602",
        "Sakura Kyouko (Swimsuit)" : "200650",
        "Sakura Kyouko (Loungewear)" : "200651",
        "Sakura Kyouko (Winter)" : "200652",
        "Sakura Kyouko (MagiRepo)" : "200688",
        "Sakura Kyouko (MagiRepo 2)" : "200689",
        "Sakura Kyouko Swimsuit Ver." : "260000",
        "Satomi Touka" : "100700",
        "Satomi Touka (School)" : "100701",
        "Satomi Touka (Casual)" : "100702",
        "Satomi Touka (Swimsuit)" : "100750",
        "Satomi Touka (MagiRepo)" : "100788",
        "Tamaki Iroha" : "100100",
        "Tamaki Iroha (School)" : "100101",
        "Tamaki Iroha (School [Former])" : "100102",
        "Tamaki Iroha (Swimsuit)" : "100103",
        "Tamaki Iroha (Loungewear)" : "100104",
        "Tamaki Iroha (Christmas)" : "100150",
        "Tamaki Iroha (Winter)" : "100151",
        "Tamaki Iroha (Maid)" : "100152",
        "Tamaki Iroha (Haregi)" : "100153",
        "Tamaki Iroha (MagiRepo)" : "100188",
        "Tamaki Iroha (MagiRepo 2)" : "100189",
        "Tamaki Iroha (? [100190])" : "100190",
        "Tamaki Iroha (? [100191])" : "100191",
        "Tamaki Iroha Swimsuit Ver." : "110100",
        "Tamaki Iroha Swimsuit Ver. (MagiRepo)" : "110188",
        "Tamaki Ui" : "101500",
        "Tamaki Ui (School)" : "101501",
        "Tamaki Ui (Casual)" : "101502",
        "Tamaki Ui (Loungewear)" : "101503",
        "Tamaki Ui (Shadow)" : "101504",
        "Tamaki Ui (MagiRepo)" : "101588",
        "Tatsuki Asuka" : "101300",
        "Tatsuki Asuka (School)" : "101301",
        "Tatsuki Asuka (Shadow)" : "101302",
        "Tatsuki Asuka (MagiRepo)" : "101388",
        "Togame Momoko" : "101000",
        "Togame Momoko (School)" : "101001",
        "Togame Momoko (Winter)" : "101050",
        "Togame Momoko (Swimsuit)" : "101051",
        "Togame Momoko (MagiRepo)" : "101088",
        "Togame Momoko (? [101090])" : "101090",
        "Tomoe Mami" : "200500",
        "Tomoe Mami (School)" : "200501",
        "Tomoe Mami (Swimsuit)" : "200550",
        "Tomoe Mami (Loungewear)" : "200551",
        "Tomoe Mami (Winter)" : "200552",
        "Tomoe Mami (MagiRepo)" : "200588",
        "Tomoe Mami (MagiRepo 2)" : "200589",
        "Ultimate Madoka" : "210100",
        "Ultimate Madoka (MagiRepo)" : "210188",
        "Yachiyo Nanami" : "100200",
        "Yachiyo Nanami (Casual)" : "100201",
        "Yachiyo Nanami (Loungewear)" : "100202",
        "Yachiyo Nanami (Shadow)" : "100203",
        "Yachiyo Nanami (School)" : "100204",
        "Yachiyo Nanami (Casual 2)" : "100205",
        "Yachiyo Nanami (Haregi)" : "100250",
        "Yachiyo Nanami (MagiRepo)" : "100288",
        "Yachiyo Nanami (MagiRepo 2)" : "100289",
        "Yakumo Mitama" : "101700",
        "Yakumo Mitama (Casual)" : "101701",
        "Yakumo Mitama (School)" : "101702",
        "Yakumo Mitama (MagiRepo)" : "101788",
        "Yakumo Mitama (? [101799])" : "101799",
        "Yakumo Mitama Haregi Ver." : "111700",
        "Yakumo Mitama Haregi Ver. (MagiRepo)" : "111788",
        "Yayoi Kanoko" : "300100",
        "Yayoi Kanoko (School)" : "300101",
        "Yayoi Kanoko (Mermyngii・Miracle Swimmer)" : "300153",
        "Yayoi Kanoko (MagiRepo)" : "300188",
        "Yui Tsuruno" : "100300",
        "Yui Tsuruno (School)" : "100301",
        "Yui Tsuruno (Shadow)" : "100302",
        "Yui Tsuruno (Loungewear)" : "100303",
        "Yui Tsuruno (Christmas)" : "100350",
        "Yui Tsuruno (Swimsuit)" : "100351",
        "Yui Tsuruno (Haregi)" : "100352",
        "Yui Tsuruno (Winter)" : "100353",
        "Yui Tsuruno (MagiRepo)" : "100388",
        "Yui Tsuruno (MagiRepo 2)" : "100389",
        "Yui Tsuruno Rumor Ver." : "110300",
        "Yui Tsuruno Rumor Ver. (MagiRepo)" : "110388",
    }
    
};
