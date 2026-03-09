// 四年级上册（人教PEP）单词表
const BOOK_TITLE = "📚 四年级上册";
const STORAGE_KEY = "vocabApp_grade4a";
const BOOK_WORDS = [
  // Unit 1 My classroom
  {word:"classroom",phonetic:"/ˈklɑːsruːm/",meaning:"教室",example:"This is my classroom.",exampleCn:"这是我的教室。",category:"Unit 1"},
  {word:"window",phonetic:"/ˈwɪndoʊ/",meaning:"窗户",example:"Open the window, please.",exampleCn:"请打开窗户。",category:"Unit 1"},
  {word:"blackboard",phonetic:"/ˈblækbɔːrd/",meaning:"黑板",example:"Look at the blackboard.",exampleCn:"看黑板。",category:"Unit 1"},
  {word:"light",phonetic:"/laɪt/",meaning:"灯",example:"Turn on the light.",exampleCn:"打开灯。",category:"Unit 1"},
  {word:"picture",phonetic:"/ˈpɪktʃər/",meaning:"图画",example:"There is a picture on the wall.",exampleCn:"墙上有一幅画。",category:"Unit 1"},
  {word:"door",phonetic:"/dɔːr/",meaning:"门",example:"Close the door, please.",exampleCn:"请关上门。",category:"Unit 1"},
  {word:"floor",phonetic:"/flɔːr/",meaning:"地板",example:"Clean the floor.",exampleCn:"打扫地板。",category:"Unit 1"},
  {word:"computer",phonetic:"/kəmˈpjuːtər/",meaning:"计算机",example:"We have a new computer.",exampleCn:"我们有一台新电脑。",category:"Unit 1"},
  {word:"fan",phonetic:"/fæn/",meaning:"风扇",example:"Turn on the fan.",exampleCn:"打开风扇。",category:"Unit 1"},
  {word:"wall",phonetic:"/wɔːl/",meaning:"墙壁",example:"The picture is on the wall.",exampleCn:"画在墙上。",category:"Unit 1"},
  {word:"clean",phonetic:"/kliːn/",meaning:"打扫；干净的",example:"Let me clean the window.",exampleCn:"让我来擦窗户。",category:"Unit 1"},
  {word:"near",phonetic:"/nɪr/",meaning:"在……附近",example:"My seat is near the door.",exampleCn:"我的座位在门附近。",category:"Unit 1"},

  // Unit 2 My schoolbag
  {word:"schoolbag",phonetic:"/ˈskuːlbæɡ/",meaning:"书包",example:"Put it in your schoolbag.",exampleCn:"把它放进你的书包。",category:"Unit 2"},
  {word:"maths book",phonetic:"/mæθs bʊk/",meaning:"数学书",example:"I have a maths book.",exampleCn:"我有一本数学书。",category:"Unit 2"},
  {word:"English book",phonetic:"/ˈɪŋɡlɪʃ bʊk/",meaning:"英语书",example:"This is my English book.",exampleCn:"这是我的英语书。",category:"Unit 2"},
  {word:"Chinese book",phonetic:"/tʃaɪˈniːz bʊk/",meaning:"语文书",example:"Where is my Chinese book?",exampleCn:"我的语文书在哪里？",category:"Unit 2"},
  {word:"storybook",phonetic:"/ˈstɔːribʊk/",meaning:"故事书",example:"I have a new storybook.",exampleCn:"我有一本新故事书。",category:"Unit 2"},
  {word:"candy",phonetic:"/ˈkændi/",meaning:"糖果",example:"I have some candy.",exampleCn:"我有一些糖果。",category:"Unit 2"},
  {word:"notebook",phonetic:"/ˈnoʊtbʊk/",meaning:"笔记本",example:"Open your notebook.",exampleCn:"打开你的笔记本。",category:"Unit 2"},
  {word:"toy",phonetic:"/tɔɪ/",meaning:"玩具",example:"I have a toy in my schoolbag.",exampleCn:"我书包里有一个玩具。",category:"Unit 2"},
  {word:"key",phonetic:"/kiː/",meaning:"钥匙",example:"I lost my key.",exampleCn:"我丢了钥匙。",category:"Unit 2"},

  // Unit 3 My friends
  {word:"strong",phonetic:"/strɒŋ/",meaning:"强壮的",example:"He is strong.",exampleCn:"他很强壮。",category:"Unit 3"},
  {word:"friendly",phonetic:"/ˈfrendli/",meaning:"友好的",example:"She is friendly.",exampleCn:"她很友好。",category:"Unit 3"},
  {word:"quiet",phonetic:"/ˈkwaɪət/",meaning:"安静的",example:"He is quiet.",exampleCn:"他很安静。",category:"Unit 3"},
  {word:"hair",phonetic:"/heər/",meaning:"头发",example:"She has long hair.",exampleCn:"她有长头发。",category:"Unit 3"},
  {word:"shoe",phonetic:"/ʃuː/",meaning:"鞋",example:"His shoes are blue.",exampleCn:"他的鞋子是蓝色的。",category:"Unit 3"},
  {word:"glasses",phonetic:"/ˈɡlæsɪz/",meaning:"眼镜",example:"He has glasses.",exampleCn:"他戴着眼镜。",category:"Unit 3"},
  {word:"his",phonetic:"/hɪz/",meaning:"他的",example:"His name is Tom.",exampleCn:"他的名字叫汤姆。",category:"Unit 3"},
  {word:"her",phonetic:"/hɜːr/",meaning:"她的",example:"Her name is Amy.",exampleCn:"她的名字叫艾米。",category:"Unit 3"},
  {word:"right",phonetic:"/raɪt/",meaning:"正确的；右边的",example:"You're right.",exampleCn:"你说得对。",category:"Unit 3"},
  {word:"hat",phonetic:"/hæt/",meaning:"帽子",example:"He has a blue hat.",exampleCn:"他有一顶蓝色帽子。",category:"Unit 3"},

  // Unit 4 My home
  {word:"bedroom",phonetic:"/ˈbedruːm/",meaning:"卧室",example:"This is my bedroom.",exampleCn:"这是我的卧室。",category:"Unit 4"},
  {word:"living room",phonetic:"/ˈlɪvɪŋ ruːm/",meaning:"客厅",example:"The sofa is in the living room.",exampleCn:"沙发在客厅里。",category:"Unit 4"},
  {word:"study",phonetic:"/ˈstʌdi/",meaning:"书房",example:"I read books in the study.",exampleCn:"我在书房看书。",category:"Unit 4"},
  {word:"kitchen",phonetic:"/ˈkɪtʃɪn/",meaning:"厨房",example:"My mom is in the kitchen.",exampleCn:"我妈妈在厨房。",category:"Unit 4"},
  {word:"bathroom",phonetic:"/ˈbæθruːm/",meaning:"浴室",example:"The bathroom is clean.",exampleCn:"浴室很干净。",category:"Unit 4"},
  {word:"bed",phonetic:"/bed/",meaning:"床",example:"The bed is big.",exampleCn:"床很大。",category:"Unit 4"},
  {word:"phone",phonetic:"/foʊn/",meaning:"电话",example:"Where is the phone?",exampleCn:"电话在哪里？",category:"Unit 4"},
  {word:"table",phonetic:"/ˈteɪbl/",meaning:"桌子",example:"The book is on the table.",exampleCn:"书在桌子上。",category:"Unit 4"},
  {word:"sofa",phonetic:"/ˈsoʊfə/",meaning:"沙发",example:"Sit on the sofa.",exampleCn:"坐在沙发上。",category:"Unit 4"},
  {word:"fridge",phonetic:"/frɪdʒ/",meaning:"冰箱",example:"The milk is in the fridge.",exampleCn:"牛奶在冰箱里。",category:"Unit 4"},

  // Unit 5 Dinner's ready
  {word:"beef",phonetic:"/biːf/",meaning:"牛肉",example:"I'd like some beef.",exampleCn:"我想要一些牛肉。",category:"Unit 5"},
  {word:"chicken",phonetic:"/ˈtʃɪkɪn/",meaning:"鸡肉",example:"I like chicken.",exampleCn:"我喜欢鸡肉。",category:"Unit 5"},
  {word:"noodles",phonetic:"/ˈnuːdlz/",meaning:"面条",example:"I'd like some noodles.",exampleCn:"我想要一些面条。",category:"Unit 5"},
  {word:"soup",phonetic:"/suːp/",meaning:"汤",example:"Have some soup.",exampleCn:"喝一些汤吧。",category:"Unit 5"},
  {word:"vegetable",phonetic:"/ˈvedʒtəbl/",meaning:"蔬菜",example:"Eat more vegetables.",exampleCn:"多吃蔬菜。",category:"Unit 5"},
  {word:"chopsticks",phonetic:"/ˈtʃɒpstɪks/",meaning:"筷子",example:"I can use chopsticks.",exampleCn:"我会用筷子。",category:"Unit 5"},
  {word:"bowl",phonetic:"/boʊl/",meaning:"碗",example:"Pass me the bowl.",exampleCn:"把碗递给我。",category:"Unit 5"},
  {word:"fork",phonetic:"/fɔːrk/",meaning:"叉子",example:"Use a fork, please.",exampleCn:"请用叉子。",category:"Unit 5"},
  {word:"knife",phonetic:"/naɪf/",meaning:"刀",example:"Cut with a knife.",exampleCn:"用刀切。",category:"Unit 5"},
  {word:"spoon",phonetic:"/spuːn/",meaning:"勺子",example:"I need a spoon.",exampleCn:"我需要一把勺子。",category:"Unit 5"},
  {word:"dinner",phonetic:"/ˈdɪnər/",meaning:"正餐；晚餐",example:"Dinner is ready.",exampleCn:"晚餐准备好了。",category:"Unit 5"},
  {word:"ready",phonetic:"/ˈredi/",meaning:"准备好的",example:"Are you ready?",exampleCn:"你准备好了吗？",category:"Unit 5"},
  {word:"help",phonetic:"/help/",meaning:"帮助；帮忙",example:"Can I help you?",exampleCn:"我能帮你吗？",category:"Unit 5"},

  // Unit 6 Meet my family
  {word:"parents",phonetic:"/ˈpeərənts/",meaning:"父母",example:"These are my parents.",exampleCn:"这是我的父母。",category:"Unit 6"},
  {word:"cousin",phonetic:"/ˈkʌzn/",meaning:"堂/表兄弟姐妹",example:"This is my cousin.",exampleCn:"这是我的表弟。",category:"Unit 6"},
  {word:"uncle",phonetic:"/ˈʌŋkl/",meaning:"叔叔；舅舅",example:"My uncle is a doctor.",exampleCn:"我叔叔是一名医生。",category:"Unit 6"},
  {word:"aunt",phonetic:"/ɑːnt/",meaning:"阿姨；姑姑",example:"My aunt is a nurse.",exampleCn:"我阿姨是一名护士。",category:"Unit 6"},
  {word:"baby brother",phonetic:"/ˈbeɪbi ˈbrʌðər/",meaning:"小弟弟",example:"This is my baby brother.",exampleCn:"这是我的小弟弟。",category:"Unit 6"},
  {word:"doctor",phonetic:"/ˈdɒktər/",meaning:"医生",example:"My father is a doctor.",exampleCn:"我爸爸是一名医生。",category:"Unit 6"},
  {word:"cook",phonetic:"/kʊk/",meaning:"厨师；烹饪",example:"My uncle is a cook.",exampleCn:"我叔叔是一名厨师。",category:"Unit 6"},
  {word:"driver",phonetic:"/ˈdraɪvər/",meaning:"司机",example:"He is a driver.",exampleCn:"他是一名司机。",category:"Unit 6"},
  {word:"farmer",phonetic:"/ˈfɑːrmər/",meaning:"农民",example:"My grandpa is a farmer.",exampleCn:"我爷爷是一名农民。",category:"Unit 6"},
  {word:"nurse",phonetic:"/nɜːrs/",meaning:"护士",example:"She is a nurse.",exampleCn:"她是一名护士。",category:"Unit 6"},
  {word:"people",phonetic:"/ˈpiːpl/",meaning:"人们",example:"How many people are there?",exampleCn:"有多少人？",category:"Unit 6"},
  {word:"but",phonetic:"/bʌt/",meaning:"但是",example:"He is tall but thin.",exampleCn:"他很高但很瘦。",category:"Unit 6"},
  {word:"little",phonetic:"/ˈlɪtl/",meaning:"小的",example:"He is a little boy.",exampleCn:"他是一个小男孩。",category:"Unit 6"},
  {word:"puppy",phonetic:"/ˈpʌpi/",meaning:"小狗",example:"I have a cute puppy.",exampleCn:"我有一只可爱的小狗。",category:"Unit 6"},
  {word:"football player",phonetic:"/ˈfʊtbɔːl ˈpleɪər/",meaning:"足球运动员",example:"He is a football player.",exampleCn:"他是一名足球运动员。",category:"Unit 6"},
  {word:"basketball player",phonetic:"/ˈbɑːskɪtbɔːl ˈpleɪər/",meaning:"篮球运动员",example:"She is a basketball player.",exampleCn:"她是一名篮球运动员。",category:"Unit 6"}
];
