// 三年级下册（外研版三起）单词表
const BOOK_TITLE = "📚 三年级下册（外研版）";
const STORAGE_KEY = "vocabApp_grade3b";
const BOOK_WORDS = [
  // Module 1 — It's the ABC song.
  {word:"song",phonetic:"/sɒŋ/",meaning:"歌曲",example:"It's the ABC song.",exampleCn:"这是ABC歌。",category:"Module 1"},
  {word:"favourite",phonetic:"/ˈfeɪvərɪt/",meaning:"最喜欢的",example:"What's your favourite song?",exampleCn:"你最喜欢的歌是什么？",category:"Module 1"},
  {word:"colour",phonetic:"/ˈkʌlər/",meaning:"颜色",example:"What's your favourite colour?",exampleCn:"你最喜欢的颜色是什么？",category:"Module 1"},
  {word:"here",phonetic:"/hɪər/",meaning:"这里",example:"Here you are.",exampleCn:"给你。",category:"Module 1"},

  // Module 2 — They're monkeys.
  {word:"tiger",phonetic:"/ˈtaɪɡər/",meaning:"老虎",example:"It's a tiger.",exampleCn:"这是一只老虎。",category:"Module 2"},
  {word:"lion",phonetic:"/ˈlaɪən/",meaning:"狮子",example:"That's a lion.",exampleCn:"那是一只狮子。",category:"Module 2"},
  {word:"elephant",phonetic:"/ˈelɪfənt/",meaning:"大象",example:"Look at the elephant.",exampleCn:"看那只大象。",category:"Module 2"},
  {word:"monkey",phonetic:"/ˈmʌŋki/",meaning:"猴子",example:"They're monkeys.",exampleCn:"它们是猴子。",category:"Module 2"},
  {word:"panda",phonetic:"/ˈpændə/",meaning:"熊猫",example:"It's a panda.",exampleCn:"这是一只熊猫。",category:"Module 2"},
  {word:"big",phonetic:"/bɪɡ/",meaning:"大的",example:"The elephant is big.",exampleCn:"大象很大。",category:"Module 2"},
  {word:"little",phonetic:"/ˈlɪtl/",meaning:"小的",example:"It's a little cat.",exampleCn:"这是一只小猫。",category:"Module 2"},
  {word:"fat",phonetic:"/fæt/",meaning:"胖的",example:"The panda is fat.",exampleCn:"熊猫很胖。",category:"Module 2"},
  {word:"thin",phonetic:"/θɪn/",meaning:"瘦的",example:"The monkey is thin.",exampleCn:"猴子很瘦。",category:"Module 2"},
  {word:"tall",phonetic:"/tɔːl/",meaning:"高的",example:"The man is tall.",exampleCn:"这个男人很高。",category:"Module 2"},
  {word:"short",phonetic:"/ʃɔːrt/",meaning:"矮的",example:"The boy is short.",exampleCn:"这个男孩很矮。",category:"Module 2"},

  // Module 3 — I like football.
  {word:"like",phonetic:"/laɪk/",meaning:"喜欢",example:"I like football.",exampleCn:"我喜欢足球。",category:"Module 3"},
  {word:"football",phonetic:"/ˈfʊtbɔːl/",meaning:"足球",example:"I like football.",exampleCn:"我喜欢足球。",category:"Module 3"},
  {word:"basketball",phonetic:"/ˈbɑːskɪtbɔːl/",meaning:"篮球",example:"I like basketball.",exampleCn:"我喜欢篮球。",category:"Module 3"},
  {word:"table tennis",phonetic:"/ˈteɪbl ˈtenɪs/",meaning:"乒乓球",example:"I don't like table tennis.",exampleCn:"我不喜欢乒乓球。",category:"Module 3"},
  {word:"morning",phonetic:"/ˈmɔːrnɪŋ/",meaning:"早上",example:"Good morning.",exampleCn:"早上好。",category:"Module 3"},
  {word:"ride",phonetic:"/raɪd/",meaning:"骑",example:"I like to ride my bike.",exampleCn:"我喜欢骑自行车。",category:"Module 3"},
  {word:"bike",phonetic:"/baɪk/",meaning:"自行车",example:"This is my bike.",exampleCn:"这是我的自行车。",category:"Module 3"},

  // Module 4 — Do you like meat?
  {word:"meat",phonetic:"/miːt/",meaning:"肉",example:"Do you like meat?",exampleCn:"你喜欢肉吗？",category:"Module 4"},
  {word:"noodles",phonetic:"/ˈnuːdlz/",meaning:"面条",example:"I like noodles.",exampleCn:"我喜欢面条。",category:"Module 4"},
  {word:"rice",phonetic:"/raɪs/",meaning:"米饭",example:"Do you like rice?",exampleCn:"你喜欢米饭吗？",category:"Module 4"},
  {word:"fish",phonetic:"/fɪʃ/",meaning:"鱼；鱼肉",example:"I don't like fish.",exampleCn:"我不喜欢鱼。",category:"Module 4"},
  {word:"milk",phonetic:"/mɪlk/",meaning:"牛奶",example:"I like milk.",exampleCn:"我喜欢牛奶。",category:"Module 4"},
  {word:"pass",phonetic:"/pɑːs/",meaning:"传递",example:"Pass me the rice, please.",exampleCn:"请把米饭递给我。",category:"Module 4"},
  {word:"but",phonetic:"/bʌt/",meaning:"但是",example:"I like meat, but I don't like fish.",exampleCn:"我喜欢肉，但我不喜欢鱼。",category:"Module 4"},

  // Module 5 — She goes to school on Mondays.
  {word:"go",phonetic:"/ɡoʊ/",meaning:"去",example:"I go to school.",exampleCn:"我去上学。",category:"Module 5"},
  {word:"goes",phonetic:"/ɡoʊz/",meaning:"去（第三人称单数）",example:"She goes to school.",exampleCn:"她去上学。",category:"Module 5"},
  {word:"on",phonetic:"/ɒn/",meaning:"在……（某天）",example:"She goes to school on Mondays.",exampleCn:"她星期一去上学。",category:"Module 5"},
  {word:"Monday",phonetic:"/ˈmʌndeɪ/",meaning:"星期一",example:"On Monday I go swimming.",exampleCn:"星期一我去游泳。",category:"Module 5"},
  {word:"play",phonetic:"/pleɪ/",meaning:"玩；打（球）",example:"I play football on Mondays.",exampleCn:"我星期一踢足球。",category:"Module 5"},
  {word:"phone",phonetic:"/foʊn/",meaning:"电话",example:"I phone Grandma on Sundays.",exampleCn:"我星期天给奶奶打电话。",category:"Module 5"},
  {word:"too",phonetic:"/tuː/",meaning:"也",example:"I like football, too.",exampleCn:"我也喜欢足球。",category:"Module 5"},

  // Module 6 — What do you do on Sundays?
  {word:"Sunday",phonetic:"/ˈsʌndeɪ/",meaning:"星期日",example:"What do you do on Sundays?",exampleCn:"你星期天做什么？",category:"Module 6"},
  {word:"swimming",phonetic:"/ˈswɪmɪŋ/",meaning:"游泳",example:"I go swimming on Sundays.",exampleCn:"我星期天去游泳。",category:"Module 6"},
  {word:"Saturday",phonetic:"/ˈsætərdeɪ/",meaning:"星期六",example:"On Saturday I watch TV.",exampleCn:"星期六我看电视。",category:"Module 6"},
  {word:"watch",phonetic:"/wɒtʃ/",meaning:"看；观看",example:"I watch TV on Saturdays.",exampleCn:"我星期六看电视。",category:"Module 6"},
  {word:"TV",phonetic:"/tiːˈviː/",meaning:"电视",example:"I watch TV at home.",exampleCn:"我在家看电视。",category:"Module 6"},
  {word:"sleep",phonetic:"/sliːp/",meaning:"睡觉",example:"I sleep at nine.",exampleCn:"我九点睡觉。",category:"Module 6"},

  // Module 7 — We fly kites in spring.
  {word:"spring",phonetic:"/sprɪŋ/",meaning:"春天",example:"We fly kites in spring.",exampleCn:"我们春天放风筝。",category:"Module 7"},
  {word:"summer",phonetic:"/ˈsʌmər/",meaning:"夏天",example:"We go swimming in summer.",exampleCn:"我们夏天去游泳。",category:"Module 7"},
  {word:"autumn",phonetic:"/ˈɔːtəm/",meaning:"秋天",example:"We play football in autumn.",exampleCn:"我们秋天踢足球。",category:"Module 7"},
  {word:"winter",phonetic:"/ˈwɪntər/",meaning:"冬天",example:"It's cold in winter.",exampleCn:"冬天很冷。",category:"Module 7"},
  {word:"warm",phonetic:"/wɔːrm/",meaning:"温暖的",example:"It's warm in spring.",exampleCn:"春天很温暖。",category:"Module 7"},
  {word:"hot",phonetic:"/hɒt/",meaning:"热的",example:"It's hot in summer.",exampleCn:"夏天很热。",category:"Module 7"},
  {word:"cool",phonetic:"/kuːl/",meaning:"凉爽的",example:"It's cool in autumn.",exampleCn:"秋天很凉爽。",category:"Module 7"},
  {word:"cold",phonetic:"/koʊld/",meaning:"寒冷的",example:"It's cold in winter.",exampleCn:"冬天很冷。",category:"Module 7"},
  {word:"fly",phonetic:"/flaɪ/",meaning:"放（风筝）；飞",example:"We fly kites in spring.",exampleCn:"我们春天放风筝。",category:"Module 7"},
  {word:"kite",phonetic:"/kaɪt/",meaning:"风筝",example:"I have a kite.",exampleCn:"我有一个风筝。",category:"Module 7"},

  // Module 8 — It's on your desk.
  {word:"toy",phonetic:"/tɔɪ/",meaning:"玩具",example:"It's a toy.",exampleCn:"这是一个玩具。",category:"Module 8"},
  {word:"under",phonetic:"/ˈʌndər/",meaning:"在……下面",example:"The ball is under the bed.",exampleCn:"球在床下面。",category:"Module 8"},
  {word:"behind",phonetic:"/bɪˈhaɪnd/",meaning:"在……后面",example:"The cat is behind the door.",exampleCn:"猫在门后面。",category:"Module 8"},
  {word:"in",phonetic:"/ɪn/",meaning:"在……里面",example:"The book is in the bag.",exampleCn:"书在包里。",category:"Module 8"},
  {word:"box",phonetic:"/bɒks/",meaning:"盒子；箱子",example:"It's in the box.",exampleCn:"它在盒子里。",category:"Module 8"},
  {word:"bedroom",phonetic:"/ˈbedruːm/",meaning:"卧室",example:"It's in the bedroom.",exampleCn:"它在卧室里。",category:"Module 8"},

  // Module 9 — Has he got a new book?
  {word:"has got",phonetic:"/hæz ɡɒt/",meaning:"有（第三人称单数）",example:"He has got a new book.",exampleCn:"他有一本新书。",category:"Module 9"},
  {word:"have got",phonetic:"/hæv ɡɒt/",meaning:"有",example:"I have got a new kite.",exampleCn:"我有一个新风筝。",category:"Module 9"},
  {word:"dress",phonetic:"/dres/",meaning:"连衣裙",example:"She has got a new dress.",exampleCn:"她有一条新连衣裙。",category:"Module 9"},
  {word:"coat",phonetic:"/koʊt/",meaning:"外套",example:"He has got a new coat.",exampleCn:"他有一件新外套。",category:"Module 9"},
  {word:"sweater",phonetic:"/ˈswetər/",meaning:"毛衣",example:"I have got a sweater.",exampleCn:"我有一件毛衣。",category:"Module 9"},
  {word:"T-shirt",phonetic:"/ˈtiːʃɜːrt/",meaning:"T恤衫",example:"He has got a T-shirt.",exampleCn:"他有一件T恤衫。",category:"Module 9"},

  // Module 10 — She's got a pet.
  {word:"pet",phonetic:"/pet/",meaning:"宠物",example:"She's got a pet.",exampleCn:"她有一只宠物。",category:"Module 10"},
  {word:"cat",phonetic:"/kæt/",meaning:"猫",example:"I've got a cat.",exampleCn:"我有一只猫。",category:"Module 10"},
  {word:"dog",phonetic:"/dɒɡ/",meaning:"狗",example:"He's got a dog.",exampleCn:"他有一只狗。",category:"Module 10"},
  {word:"bird",phonetic:"/bɜːrd/",meaning:"鸟",example:"She's got a bird.",exampleCn:"她有一只鸟。",category:"Module 10"},
  {word:"head",phonetic:"/hed/",meaning:"头",example:"It's got a big head.",exampleCn:"它有一个大脑袋。",category:"Module 10"},
  {word:"leg",phonetic:"/leɡ/",meaning:"腿",example:"It's got long legs.",exampleCn:"它有长腿。",category:"Module 10"},
  {word:"body",phonetic:"/ˈbɒdi/",meaning:"身体",example:"It's got a small body.",exampleCn:"它有一个小身体。",category:"Module 10"},
  {word:"tail",phonetic:"/teɪl/",meaning:"尾巴",example:"It's got a long tail.",exampleCn:"它有一条长尾巴。",category:"Module 10"}
];
