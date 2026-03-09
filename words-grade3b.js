// 三年级下册（人教PEP）单词表
const BOOK_TITLE = "📚 三年级下册";
const STORAGE_KEY = "vocabApp_grade3b";
const BOOK_WORDS = [
  // Unit 1 Welcome back to school
  {word:"UK",phonetic:"/juːˈkeɪ/",meaning:"英国",example:"I'm from the UK.",exampleCn:"我来自英国。",category:"Unit 1"},
  {word:"Canada",phonetic:"/ˈkænədə/",meaning:"加拿大",example:"She is from Canada.",exampleCn:"她来自加拿大。",category:"Unit 1"},
  {word:"USA",phonetic:"/juːesˈeɪ/",meaning:"美国",example:"He is from the USA.",exampleCn:"他来自美国。",category:"Unit 1"},
  {word:"China",phonetic:"/ˈtʃaɪnə/",meaning:"中国",example:"I'm from China.",exampleCn:"我来自中国。",category:"Unit 1"},
  {word:"she",phonetic:"/ʃiː/",meaning:"她",example:"She is a student.",exampleCn:"她是一名学生。",category:"Unit 1"},
  {word:"he",phonetic:"/hiː/",meaning:"他",example:"He is my friend.",exampleCn:"他是我的朋友。",category:"Unit 1"},
  {word:"boy",phonetic:"/bɔɪ/",meaning:"男孩",example:"The boy is tall.",exampleCn:"这个男孩很高。",category:"Unit 1"},
  {word:"girl",phonetic:"/ɡɜːrl/",meaning:"女孩",example:"The girl is nice.",exampleCn:"这个女孩很好。",category:"Unit 1"},
  {word:"teacher",phonetic:"/ˈtiːtʃər/",meaning:"老师",example:"She is a teacher.",exampleCn:"她是一位老师。",category:"Unit 1"},
  {word:"student",phonetic:"/ˈstjuːdənt/",meaning:"学生",example:"I am a student.",exampleCn:"我是一名学生。",category:"Unit 1"},
  {word:"friend",phonetic:"/frend/",meaning:"朋友",example:"This is my friend.",exampleCn:"这是我的朋友。",category:"Unit 1"},
  {word:"new",phonetic:"/njuː/",meaning:"新的",example:"I have a new friend.",exampleCn:"我有一个新朋友。",category:"Unit 1"},
  {word:"today",phonetic:"/təˈdeɪ/",meaning:"今天",example:"We have two new friends today.",exampleCn:"今天我们有两个新朋友。",category:"Unit 1"},

  // Unit 2 My family
  {word:"father",phonetic:"/ˈfɑːðər/",meaning:"父亲；爸爸",example:"This is my father.",exampleCn:"这是我的爸爸。",category:"Unit 2"},
  {word:"dad",phonetic:"/dæd/",meaning:"爸爸（口语）",example:"My dad is tall.",exampleCn:"我爸爸很高。",category:"Unit 2"},
  {word:"mother",phonetic:"/ˈmʌðər/",meaning:"母亲；妈妈",example:"My mother is a teacher.",exampleCn:"我妈妈是一位老师。",category:"Unit 2"},
  {word:"mom",phonetic:"/mɒm/",meaning:"妈妈（口语）",example:"I love my mom.",exampleCn:"我爱我妈妈。",category:"Unit 2"},
  {word:"man",phonetic:"/mæn/",meaning:"男人",example:"Who is that man?",exampleCn:"那个男人是谁？",category:"Unit 2"},
  {word:"woman",phonetic:"/ˈwʊmən/",meaning:"女人",example:"Who is that woman?",exampleCn:"那个女人是谁？",category:"Unit 2"},
  {word:"grandmother",phonetic:"/ˈɡrænmʌðər/",meaning:"（外）祖母",example:"She is my grandmother.",exampleCn:"她是我的奶奶。",category:"Unit 2"},
  {word:"grandma",phonetic:"/ˈɡrænmɑː/",meaning:"奶奶；姥姥（口语）",example:"My grandma is kind.",exampleCn:"我奶奶很和蔼。",category:"Unit 2"},
  {word:"grandfather",phonetic:"/ˈɡrænfɑːðər/",meaning:"（外）祖父",example:"He is my grandfather.",exampleCn:"他是我的爷爷。",category:"Unit 2"},
  {word:"grandpa",phonetic:"/ˈɡrænpɑː/",meaning:"爷爷；姥爷（口语）",example:"My grandpa is funny.",exampleCn:"我爷爷很有趣。",category:"Unit 2"},
  {word:"sister",phonetic:"/ˈsɪstər/",meaning:"姐妹",example:"She is my sister.",exampleCn:"她是我的姐姐。",category:"Unit 2"},
  {word:"brother",phonetic:"/ˈbrʌðər/",meaning:"兄弟",example:"He is my brother.",exampleCn:"他是我的哥哥。",category:"Unit 2"},
  {word:"family",phonetic:"/ˈfæməli/",meaning:"家庭",example:"This is my family.",exampleCn:"这是我的家庭。",category:"Unit 2"},

  // Unit 3 At the zoo
  {word:"thin",phonetic:"/θɪn/",meaning:"瘦的",example:"The monkey is thin.",exampleCn:"这只猴子很瘦。",category:"Unit 3"},
  {word:"fat",phonetic:"/fæt/",meaning:"胖的",example:"The bear is fat.",exampleCn:"这只熊很胖。",category:"Unit 3"},
  {word:"tall",phonetic:"/tɔːl/",meaning:"高的",example:"The giraffe is tall.",exampleCn:"长颈鹿很高。",category:"Unit 3"},
  {word:"short",phonetic:"/ʃɔːrt/",meaning:"矮的；短的",example:"The rabbit is short.",exampleCn:"兔子很矮。",category:"Unit 3"},
  {word:"long",phonetic:"/lɒŋ/",meaning:"长的",example:"It has a long nose.",exampleCn:"它有一个长鼻子。",category:"Unit 3"},
  {word:"small",phonetic:"/smɔːl/",meaning:"小的",example:"The mouse is small.",exampleCn:"老鼠很小。",category:"Unit 3"},
  {word:"big",phonetic:"/bɪɡ/",meaning:"大的",example:"The elephant is big.",exampleCn:"大象很大。",category:"Unit 3"},
  {word:"giraffe",phonetic:"/dʒɪˈrɑːf/",meaning:"长颈鹿",example:"Look at the giraffe.",exampleCn:"看那只长颈鹿。",category:"Unit 3"},
  {word:"children",phonetic:"/ˈtʃɪldrən/",meaning:"孩子们",example:"Come here, children.",exampleCn:"孩子们，过来。",category:"Unit 3"},
  {word:"tail",phonetic:"/teɪl/",meaning:"尾巴",example:"It has a long tail.",exampleCn:"它有一条长尾巴。",category:"Unit 3"},

  // Unit 4 Where is my car?
  {word:"on",phonetic:"/ɒn/",meaning:"在……上面",example:"The book is on the desk.",exampleCn:"书在桌子上。",category:"Unit 4"},
  {word:"in",phonetic:"/ɪn/",meaning:"在……里面",example:"The ball is in the box.",exampleCn:"球在盒子里。",category:"Unit 4"},
  {word:"under",phonetic:"/ˈʌndər/",meaning:"在……下面",example:"The cat is under the chair.",exampleCn:"猫在椅子下面。",category:"Unit 4"},
  {word:"chair",phonetic:"/tʃeər/",meaning:"椅子",example:"Sit on the chair.",exampleCn:"坐在椅子上。",category:"Unit 4"},
  {word:"desk",phonetic:"/desk/",meaning:"书桌",example:"The book is on the desk.",exampleCn:"书在书桌上。",category:"Unit 4"},
  {word:"cap",phonetic:"/kæp/",meaning:"帽子",example:"Where is my cap?",exampleCn:"我的帽子在哪里？",category:"Unit 4"},
  {word:"ball",phonetic:"/bɔːl/",meaning:"球",example:"The ball is under the desk.",exampleCn:"球在桌子下面。",category:"Unit 4"},
  {word:"car",phonetic:"/kɑːr/",meaning:"小汽车",example:"Where is my car?",exampleCn:"我的小汽车在哪里？",category:"Unit 4"},
  {word:"boat",phonetic:"/boʊt/",meaning:"小船",example:"The boat is on the water.",exampleCn:"小船在水上。",category:"Unit 4"},
  {word:"map",phonetic:"/mæp/",meaning:"地图",example:"Look at the map.",exampleCn:"看这张地图。",category:"Unit 4"},
  {word:"toy",phonetic:"/tɔɪ/",meaning:"玩具",example:"Is it in your toy box?",exampleCn:"它在你的玩具箱里吗？",category:"Unit 4"},
  {word:"box",phonetic:"/bɒks/",meaning:"盒子",example:"The toy is in the box.",exampleCn:"玩具在盒子里。",category:"Unit 4"},

  // Unit 5 Do you like pears?
  {word:"pear",phonetic:"/peər/",meaning:"梨",example:"Do you like pears?",exampleCn:"你喜欢梨吗？",category:"Unit 5"},
  {word:"apple",phonetic:"/ˈæpl/",meaning:"苹果",example:"I like apples.",exampleCn:"我喜欢苹果。",category:"Unit 5"},
  {word:"orange",phonetic:"/ˈɒrɪndʒ/",meaning:"橙子",example:"Have some oranges.",exampleCn:"吃一些橙子吧。",category:"Unit 5"},
  {word:"banana",phonetic:"/bəˈnɑːnə/",meaning:"香蕉",example:"I don't like bananas.",exampleCn:"我不喜欢香蕉。",category:"Unit 5"},
  {word:"watermelon",phonetic:"/ˈwɔːtərmelən/",meaning:"西瓜",example:"The watermelon is sweet.",exampleCn:"西瓜很甜。",category:"Unit 5"},
  {word:"strawberry",phonetic:"/ˈstrɔːbəri/",meaning:"草莓",example:"I like strawberries.",exampleCn:"我喜欢草莓。",category:"Unit 5"},
  {word:"grape",phonetic:"/ɡreɪp/",meaning:"葡萄",example:"Have some grapes.",exampleCn:"吃一些葡萄吧。",category:"Unit 5"},
  {word:"buy",phonetic:"/baɪ/",meaning:"买",example:"Can I buy some fruit?",exampleCn:"我能买一些水果吗？",category:"Unit 5"},
  {word:"fruit",phonetic:"/fruːt/",meaning:"水果",example:"I like fruit.",exampleCn:"我喜欢水果。",category:"Unit 5"},

  // Unit 6 How many?
  {word:"eleven",phonetic:"/ɪˈlevn/",meaning:"十一",example:"I have eleven crayons.",exampleCn:"我有十一支蜡笔。",category:"Unit 6"},
  {word:"twelve",phonetic:"/twelv/",meaning:"十二",example:"There are twelve months.",exampleCn:"一年有十二个月。",category:"Unit 6"},
  {word:"thirteen",phonetic:"/ˌθɜːrˈtiːn/",meaning:"十三",example:"I am thirteen years old.",exampleCn:"我十三岁了。",category:"Unit 6"},
  {word:"fourteen",phonetic:"/ˌfɔːrˈtiːn/",meaning:"十四",example:"There are fourteen desks.",exampleCn:"有十四张桌子。",category:"Unit 6"},
  {word:"fifteen",phonetic:"/ˌfɪfˈtiːn/",meaning:"十五",example:"I have fifteen books.",exampleCn:"我有十五本书。",category:"Unit 6"},
  {word:"sixteen",phonetic:"/ˌsɪksˈtiːn/",meaning:"十六",example:"She is sixteen.",exampleCn:"她十六岁。",category:"Unit 6"},
  {word:"seventeen",phonetic:"/ˌsevnˈtiːn/",meaning:"十七",example:"There are seventeen students.",exampleCn:"有十七个学生。",category:"Unit 6"},
  {word:"eighteen",phonetic:"/ˌeɪˈtiːn/",meaning:"十八",example:"He is eighteen years old.",exampleCn:"他十八岁了。",category:"Unit 6"},
  {word:"nineteen",phonetic:"/ˌnaɪnˈtiːn/",meaning:"十九",example:"I have nineteen pencils.",exampleCn:"我有十九支铅笔。",category:"Unit 6"},
  {word:"twenty",phonetic:"/ˈtwenti/",meaning:"二十",example:"There are twenty chairs.",exampleCn:"有二十把椅子。",category:"Unit 6"},
  {word:"kite",phonetic:"/kaɪt/",meaning:"风筝",example:"The kite is beautiful.",exampleCn:"这个风筝很漂亮。",category:"Unit 6"},
  {word:"beautiful",phonetic:"/ˈbjuːtɪfl/",meaning:"美丽的",example:"How beautiful!",exampleCn:"多美啊！",category:"Unit 6"}
];
