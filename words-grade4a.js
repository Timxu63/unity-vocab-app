// 四年级上册（外研版三起）单词表
const BOOK_TITLE = "📚 四年级上册（外研版）";
const STORAGE_KEY = "vocabApp_grade4a";
const BOOK_WORDS = [
  // Module 1 — Go straight on!
  {word:"go straight on",phonetic:"/ɡoʊ streɪt ɒn/",meaning:"直着走",example:"Go straight on.",exampleCn:"直着走。",category:"Module 1"},
  {word:"left",phonetic:"/left/",meaning:"左边",example:"Turn left.",exampleCn:"向左转。",category:"Module 1"},
  {word:"right",phonetic:"/raɪt/",meaning:"右边",example:"Turn right.",exampleCn:"向右转。",category:"Module 1"},
  {word:"turn",phonetic:"/tɜːrn/",meaning:"转",example:"Turn left at the school.",exampleCn:"在学校左转。",category:"Module 1"},
  {word:"live",phonetic:"/lɪv/",meaning:"住；居住",example:"I live in Beijing.",exampleCn:"我住在北京。",category:"Module 1"},
  {word:"road",phonetic:"/roʊd/",meaning:"路；道路",example:"Go down the road.",exampleCn:"沿着这条路走。",category:"Module 1"},
  {word:"supermarket",phonetic:"/ˈsuːpərmɑːrkɪt/",meaning:"超市",example:"The supermarket is on the left.",exampleCn:"超市在左边。",category:"Module 1"},
  {word:"station",phonetic:"/ˈsteɪʃn/",meaning:"车站",example:"Where's the station?",exampleCn:"车站在哪里？",category:"Module 1"},
  {word:"next to",phonetic:"/nekst tuː/",meaning:"紧挨着；在……旁边",example:"It's next to the park.",exampleCn:"它在公园旁边。",category:"Module 1"},
  {word:"excuse me",phonetic:"/ɪkˈskjuːz miː/",meaning:"对不起；打扰一下",example:"Excuse me, where's the park?",exampleCn:"打扰一下，公园在哪里？",category:"Module 1"},

  // Module 2 — It's at the station.
  {word:"hill",phonetic:"/hɪl/",meaning:"小山",example:"It's up the hill.",exampleCn:"它在山上。",category:"Module 2"},
  {word:"house",phonetic:"/haʊs/",meaning:"房屋",example:"This is my house.",exampleCn:"这是我的房子。",category:"Module 2"},
  {word:"close to",phonetic:"/kloʊs tuː/",meaning:"靠近",example:"It's close to the park.",exampleCn:"它靠近公园。",category:"Module 2"},
  {word:"train",phonetic:"/treɪn/",meaning:"火车",example:"The train is at the station.",exampleCn:"火车在车站。",category:"Module 2"},
  {word:"up",phonetic:"/ʌp/",meaning:"向上",example:"Go up the hill.",exampleCn:"上山。",category:"Module 2"},
  {word:"down",phonetic:"/daʊn/",meaning:"向下",example:"Go down the hill.",exampleCn:"下山。",category:"Module 2"},
  {word:"near",phonetic:"/nɪr/",meaning:"在……附近",example:"It's near the houses.",exampleCn:"它在房子附近。",category:"Module 2"},

  // Module 3 — What are they doing?
  {word:"kid",phonetic:"/kɪd/",meaning:"小孩",example:"These kids are playing.",exampleCn:"这些小孩在玩。",category:"Module 3"},
  {word:"noodles",phonetic:"/ˈnuːdlz/",meaning:"面条",example:"They're eating noodles.",exampleCn:"他们在吃面条。",category:"Module 3"},
  {word:"drinking",phonetic:"/ˈdrɪŋkɪŋ/",meaning:"喝",example:"She's drinking milk.",exampleCn:"她在喝牛奶。",category:"Module 3"},
  {word:"playing",phonetic:"/ˈpleɪɪŋ/",meaning:"玩；打（球）",example:"They're playing football.",exampleCn:"他们在踢足球。",category:"Module 3"},
  {word:"running",phonetic:"/ˈrʌnɪŋ/",meaning:"跑",example:"The boy is running.",exampleCn:"男孩在跑步。",category:"Module 3"},
  {word:"talking",phonetic:"/ˈtɔːkɪŋ/",meaning:"说话",example:"They're talking.",exampleCn:"他们在说话。",category:"Module 3"},

  // Module 4 — What are you doing?
  {word:"reading",phonetic:"/ˈriːdɪŋ/",meaning:"读；阅读",example:"I'm reading a book.",exampleCn:"我在读书。",category:"Module 4"},
  {word:"writing",phonetic:"/ˈraɪtɪŋ/",meaning:"写",example:"She's writing a letter.",exampleCn:"她在写信。",category:"Module 4"},
  {word:"drawing",phonetic:"/ˈdrɔːɪŋ/",meaning:"画画",example:"He's drawing a picture.",exampleCn:"他在画画。",category:"Module 4"},
  {word:"singing",phonetic:"/ˈsɪŋɪŋ/",meaning:"唱歌",example:"She's singing a song.",exampleCn:"她在唱歌。",category:"Module 4"},
  {word:"jumping",phonetic:"/ˈdʒʌmpɪŋ/",meaning:"跳",example:"The children are jumping.",exampleCn:"孩子们在跳。",category:"Module 4"},
  {word:"taking pictures",phonetic:"/ˈteɪkɪŋ ˈpɪktʃərz/",meaning:"拍照",example:"He's taking pictures.",exampleCn:"他在拍照。",category:"Module 4"},
  {word:"watching TV",phonetic:"/ˈwɒtʃɪŋ tiːˈviː/",meaning:"看电视",example:"I'm watching TV.",exampleCn:"我在看电视。",category:"Module 4"},

  // Module 5 — Can you run fast?
  {word:"can",phonetic:"/kæn/",meaning:"能；会",example:"I can run fast.",exampleCn:"我能跑得快。",category:"Module 5"},
  {word:"run fast",phonetic:"/rʌn fɑːst/",meaning:"跑得快",example:"Can you run fast?",exampleCn:"你能跑得快吗？",category:"Module 5"},
  {word:"jump high",phonetic:"/dʒʌmp haɪ/",meaning:"跳得高",example:"He can jump high.",exampleCn:"他能跳得高。",category:"Module 5"},
  {word:"jump far",phonetic:"/dʒʌmp fɑːr/",meaning:"跳得远",example:"She can jump far.",exampleCn:"她能跳得远。",category:"Module 5"},
  {word:"ride fast",phonetic:"/raɪd fɑːst/",meaning:"骑得快",example:"Can you ride fast?",exampleCn:"你能骑得快吗？",category:"Module 5"},
  {word:"winner",phonetic:"/ˈwɪnər/",meaning:"获胜者",example:"The winner is Sam.",exampleCn:"获胜者是萨姆。",category:"Module 5"},
  {word:"pudding",phonetic:"/ˈpʊdɪŋ/",meaning:"布丁",example:"Can I have some pudding?",exampleCn:"我能吃些布丁吗？",category:"Module 5"},

  // Module 6 — Can I have some sweets?
  {word:"sweets",phonetic:"/swiːts/",meaning:"糖果",example:"Can I have some sweets?",exampleCn:"我能吃些糖果吗？",category:"Module 6"},
  {word:"soup",phonetic:"/suːp/",meaning:"汤",example:"Can I have some soup?",exampleCn:"我能喝些汤吗？",category:"Module 6"},
  {word:"bread",phonetic:"/bred/",meaning:"面包",example:"Can I have some bread?",exampleCn:"我能吃些面包吗？",category:"Module 6"},
  {word:"light",phonetic:"/laɪt/",meaning:"灯",example:"Turn on the light.",exampleCn:"开灯。",category:"Module 6"},
  {word:"sorry",phonetic:"/ˈsɒri/",meaning:"对不起",example:"Sorry, you can't.",exampleCn:"对不起，你不能。",category:"Module 6"},
  {word:"come in",phonetic:"/kʌm ɪn/",meaning:"进来",example:"Come in, please.",exampleCn:"请进来。",category:"Module 6"},
  {word:"of course",phonetic:"/əv kɔːrs/",meaning:"当然",example:"Of course you can.",exampleCn:"你当然可以。",category:"Module 6"},

  // Module 7 — There is a horse in this photo.
  {word:"there is",phonetic:"/ðeər ɪz/",meaning:"有（单数）",example:"There is a horse in this photo.",exampleCn:"这张照片里有一匹马。",category:"Module 7"},
  {word:"there are",phonetic:"/ðeər ɑːr/",meaning:"有（复数）",example:"There are twelve boys.",exampleCn:"有十二个男孩。",category:"Module 7"},
  {word:"horse",phonetic:"/hɔːrs/",meaning:"马",example:"There is a horse.",exampleCn:"有一匹马。",category:"Module 7"},
  {word:"photo",phonetic:"/ˈfoʊtoʊ/",meaning:"照片",example:"Look at this photo.",exampleCn:"看这张照片。",category:"Module 7"},
  {word:"vegetable",phonetic:"/ˈvedʒtəbl/",meaning:"蔬菜",example:"There are some vegetables.",exampleCn:"有一些蔬菜。",category:"Module 7"},
  {word:"chicken",phonetic:"/ˈtʃɪkɪn/",meaning:"鸡肉",example:"There is some chicken.",exampleCn:"有一些鸡肉。",category:"Module 7"},
  {word:"egg",phonetic:"/eɡ/",meaning:"鸡蛋",example:"There are some eggs.",exampleCn:"有一些鸡蛋。",category:"Module 7"},
  {word:"bear",phonetic:"/beər/",meaning:"熊",example:"There is a bear.",exampleCn:"有一只熊。",category:"Module 7"},
  {word:"pig",phonetic:"/pɪɡ/",meaning:"猪",example:"There are some pigs.",exampleCn:"有一些猪。",category:"Module 7"},

  // Module 8 — We're going to visit Hainan.
  {word:"visit",phonetic:"/ˈvɪzɪt/",meaning:"参观；拜访",example:"We're going to visit Hainan.",exampleCn:"我们打算去海南。",category:"Module 8"},
  {word:"tomorrow",phonetic:"/təˈmɒroʊ/",meaning:"明天",example:"We're going to go tomorrow.",exampleCn:"我们明天去。",category:"Module 8"},
  {word:"plane",phonetic:"/pleɪn/",meaning:"飞机",example:"We're going by plane.",exampleCn:"我们坐飞机去。",category:"Module 8"},
  {word:"get up",phonetic:"/ɡet ʌp/",meaning:"起床",example:"I get up at seven.",exampleCn:"我七点起床。",category:"Module 8"},
  {word:"from",phonetic:"/frɒm/",meaning:"来自",example:"I'm from China.",exampleCn:"我来自中国。",category:"Module 8"},
  {word:"sea",phonetic:"/siː/",meaning:"大海",example:"We're going to swim in the sea.",exampleCn:"我们打算在海里游泳。",category:"Module 8"},
  {word:"swim",phonetic:"/swɪm/",meaning:"游泳",example:"I can swim.",exampleCn:"我会游泳。",category:"Module 8"},

  // Module 9 — Are you going to run on Sports Day?
  {word:"Sports Day",phonetic:"/spɔːrts deɪ/",meaning:"运动日",example:"It's Sports Day.",exampleCn:"今天是运动日。",category:"Module 9"},
  {word:"run",phonetic:"/rʌn/",meaning:"跑",example:"I'm going to run.",exampleCn:"我打算跑步。",category:"Module 9"},
  {word:"win",phonetic:"/wɪn/",meaning:"赢；获胜",example:"I'm going to win.",exampleCn:"我会赢的。",category:"Module 9"},
  {word:"month",phonetic:"/mʌnθ/",meaning:"月份",example:"What month is it?",exampleCn:"现在是几月？",category:"Module 9"},
  {word:"hundred metres",phonetic:"/ˈhʌndrəd ˈmiːtərz/",meaning:"一百米",example:"I'm going to run the hundred metres.",exampleCn:"我打算跑一百米。",category:"Module 9"},
  {word:"every day",phonetic:"/ˈevri deɪ/",meaning:"每天",example:"I run every day.",exampleCn:"我每天跑步。",category:"Module 9"},
  {word:"long jump",phonetic:"/lɒŋ dʒʌmp/",meaning:"跳远",example:"I'm going to do the long jump.",exampleCn:"我打算跳远。",category:"Module 9"},
  {word:"high jump",phonetic:"/haɪ dʒʌmp/",meaning:"跳高",example:"She's going to do the high jump.",exampleCn:"她打算跳高。",category:"Module 9"},

  // Module 10 — Happy New Year!
  {word:"Happy New Year",phonetic:"/ˈhæpi njuː jɪər/",meaning:"新年快乐",example:"Happy New Year!",exampleCn:"新年快乐！",category:"Module 10"},
  {word:"New Year",phonetic:"/njuː jɪər/",meaning:"新年",example:"It's Chinese New Year.",exampleCn:"这是中国新年。",category:"Module 10"},
  {word:"eat",phonetic:"/iːt/",meaning:"吃",example:"We eat dumplings.",exampleCn:"我们吃饺子。",category:"Module 10"},
  {word:"hair",phonetic:"/heər/",meaning:"头发",example:"She has long hair.",exampleCn:"她有长头发。",category:"Module 10"},
  {word:"Christmas",phonetic:"/ˈkrɪsməs/",meaning:"圣诞节",example:"Merry Christmas!",exampleCn:"圣诞快乐！",category:"Module 10"},
  {word:"England",phonetic:"/ˈɪŋɡlənd/",meaning:"英格兰",example:"He's from England.",exampleCn:"他来自英格兰。",category:"Module 10"},
  {word:"sing",phonetic:"/sɪŋ/",meaning:"唱歌",example:"We sing songs.",exampleCn:"我们唱歌。",category:"Module 10"},
  {word:"give",phonetic:"/ɡɪv/",meaning:"给",example:"We give presents.",exampleCn:"我们送礼物。",category:"Module 10"},
  {word:"present",phonetic:"/ˈpreznt/",meaning:"礼物",example:"Here's your present.",exampleCn:"这是你的礼物。",category:"Module 10"}
];
