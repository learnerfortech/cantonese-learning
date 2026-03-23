// ========== 粵學堂 數據 ==========

// ===== 日常口語 =====
const DAILY_CATEGORIES = [
    { id: 'greeting', name: '打招呼', icon: '👋' },
    { id: 'dining', name: '食飯', icon: '🍜' },
    { id: 'shopping', name: '買嘢', icon: '🛒' },
    { id: 'transport', name: '交通', icon: '🚇' },
    { id: 'weather', name: '天氣', icon: '🌤' },
    { id: 'body', name: '身體', icon: '💪' },
    { id: 'home', name: '屋企', icon: '🏠' },
    { id: 'phone', name: '電話', icon: '📱' },
    { id: 'hospital', name: '睇醫生', icon: '🏥' },
    { id: 'bank', name: '銀行', icon: '🏦' },
    { id: 'hotel', name: '酒店', icon: '🏨' },
    { id: 'airport', name: '機場', icon: '✈️' },
    { id: 'hair', name: '理髮', icon: '💇' },
    { id: 'expressions', name: '感嘆詞', icon: '😯' }
];

const DAILY_PHRASES = {
    greeting: [
        { zh: '你好', jyutping: 'nei5 hou2', meaning: '你好（最常用）' },
        { zh: '早晨', jyutping: 'zou2 san4', meaning: '早上好' },
        { zh: '早抖', jyutping: 'zou2 tau2', meaning: '晚安' },
        { zh: '食咗飯未？', jyutping: 'sik6 zo2 faan6 mei6?', meaning: '吃饭了吗？' },
        { zh: '好耐冇見', jyutping: 'hou2 noi6 mou5 gin3', meaning: '好久不见' },
        { zh: '最近點呀？', jyutping: 'zeoi3 gan6 dim2 aa3?', meaning: '最近怎么样？' },
        { zh: '幾好呀', jyutping: 'gei2 hou2 aa3', meaning: '挺好的' },
        { zh: '麻麻哋', jyutping: 'maa4 maa4 dei2', meaning: '一般般/马马虎虎' },
        { zh: '你去邊度呀？', jyutping: 'nei5 heoi3 bin1 dou6 aa3?', meaning: '你去哪里？' },
        { zh: '拜拜', jyutping: 'baai1 baai3', meaning: '拜拜（常用）' },
        { zh: '聽日見', jyutping: 'ting1 jat6 gin3', meaning: '明天见' },
        { zh: '得閒飲茶', jyutping: 'dak1 haan4 jam2 caa4', meaning: '有空喝茶（约人的说法）' }
    ],
    dining: [
        { zh: '有冇位？', jyutping: 'jau5 mou5 wai2?', meaning: '有没有位子？' },
        { zh: '兩位', jyutping: 'loeng5 wai2', meaning: '两位' },
        { zh: '我要一個餐', jyutping: 'ngo5 jiu3 jat1 go3 caan1', meaning: '我要一个套餐' },
        { zh: '唔該畀個餐牌我', jyutping: 'm4 goi1 bei2 go3 caan1 paai2 ngo5', meaning: '请给我菜单' },
        { zh: '凍嘢定熱嘢？', jyutping: 'dung1 je5 ding6 jit6 je5?', meaning: '冷的还是热的？' },
        { zh: '要辣唔要？', jyutping: 'jiu3 laat6 m4 jiu3?', meaning: '要辣吗？' },
        { zh: '唔該埋單', jyutping: 'm4 goi1 maai4 daan1', meaning: '请结账' },
        { zh: '可唔可以畀現金？', jyutping: 'ho2 m4 ho2 ji5 bei2 jin6 gam1?', meaning: '可以付现金吗？' },
        { zh: '呢度有冇wifi？', jyutping: 'nei1 dou6 jau5 mou5 wifi?', meaning: '这里有wifi吗？' },
        { zh: '好食', jyutping: 'hou2 sik6', meaning: '好吃' },
        { zh: '打包', jyutping: 'daa2 baau1', meaning: '打包带走' },
        { zh: '唔該快啲', jyutping: 'm4 goi1 faai3 di1', meaning: '请快一点' }
    ],
    shopping: [
        { zh: '呢個幾多錢？', jyutping: 'nei1 go3 gei2 do1 cin2?', meaning: '这个多少钱？' },
        { zh: '有冇平啲？', jyutping: 'jau5 mou5 peng4 di1?', meaning: '有没有便宜一点的？' },
        { zh: '可唔可以平啲？', jyutping: 'ho2 m4 ho2 ji5 peng4 di1?', meaning: '可以便宜点吗？' },
        { zh: '我要呢個', jyutping: 'ngo5 jiu3 nei1 go3', meaning: '我要这个' },
        { zh: '有冇其他色？', jyutping: 'jau5 mou5 kei4 taa1 sik1?', meaning: '有没有其他颜色？' },
        { zh: '試唔試到？', jyutping: 'si3 m4 si3 dou2?', meaning: '可以试吗？' },
        { zh: '太大', jyutping: 'taai3 daai6', meaning: '太大' },
        { zh: '太細', jyutping: 'taai3 sai3', meaning: '太小' },
        { zh: '有冇大啲？', jyutping: 'jau5 mou5 daai6 di1?', meaning: '有没有大一点的？' },
        { zh: '用Alipay得唔得？', jyutping: 'jung6 Alipay dak1 m4 dak1?', meaning: '可以用支付宝吗？' },
        { zh: '用八達通', jyutping: 'jung6 baat3 daat6 tung1', meaning: '用八达通' },
        { zh: '幾錢？', jyutping: 'gei2 cin2?', meaning: '多少钱？（口语）' }
    ],
    transport: [
        { zh: '我想去……', jyutping: 'ngo5 soeng2 heoi3...', meaning: '我想去……' },
        { zh: '點樣去……？', jyutping: 'dim2 joeng2 heoi3...?', meaning: '怎么去……？' },
        { zh: '搭地鐵去', jyutping: 'daap3 dei6 tit3 heoi3', meaning: '坐地铁去' },
        { zh: '搭巴士去', jyutping: 'daap3 baa1 si2 heoi3', meaning: '坐巴士去' },
        { zh: '搭的士', jyutping: 'daap3 dik1 si2', meaning: '打的' },
        { zh: '落車', jyutping: 'lok6 ce1', meaning: '下车' },
        { zh: '第幾個站落？', jyutping: 'dai6 gei2 go3 zaam6 lok6?', meaning: '第几站下？' },
        { zh: '轉車', jyutping: 'zyun3 ce1', meaning: '换乘' },
        { zh: '要幾耐？', jyutping: 'jiu3 gei2 noi6?', meaning: '要多久？' },
        { zh: '行路去得唔得？', jyutping: 'haang4 lou6 heoi3 dak1 m4 dak1?', meaning: '走路去可以吗？' },
        { zh: '呢度係邊度？', jyutping: 'nei1 dou6 hai6 bin1 dou6?', meaning: '这里是哪里？' },
        { zh: '我蕩失路', jyutping: 'ngo5 tong6 sat1 lou6', meaning: '我迷路了' }
    ],
    weather: [
        { zh: '今日天氣點呀？', jyutping: 'gam1 jat6 tin1 hei3 dim2 aa3?', meaning: '今天天气怎么样？' },
        { zh: '今日好好天', jyutping: 'gam1 jat6 hou2 hou2 tin1', meaning: '今天天气很好' },
        { zh: '落雨', jyutping: 'lok6 jyu5', meaning: '下雨' },
        { zh: '落緊雨', jyutping: 'lok6 gan2 jyu5', meaning: '正在下雨' },
        { zh: '好大風', jyutping: 'hou2 daai6 fung1', meaning: '风很大' },
        { zh: '行雷', jyutping: 'haang4 leoi4', meaning: '打雷' },
        { zh: '好凍', jyutping: 'hou2 dung3', meaning: '很冷' },
        { zh: '好熱', jyutping: 'hou2 jit6', meaning: '很热' },
        { zh: '記得帶遮', jyutping: 'gei3 dak1 daai3 ze1', meaning: '记得带伞' },
        { zh: '著多件衫', jyutping: 'zoek3 do1 gin6 saam1', meaning: '多穿件衣服' }
    ],
    body: [
        { zh: '我唔舒服', jyutping: 'ngo5 m4 syu1 fuk6', meaning: '我不舒服' },
        { zh: '頭痛', jyutping: 'tau4 tung3', meaning: '头疼' },
        { zh: '肚痛', jyutping: 'tou5 tung3', meaning: '肚子疼' },
        { zh: '喉嚨痛', jyutping: 'hau4 lung4 tung3', meaning: '喉咙痛' },
        { zh: '發燒', jyutping: 'faat3 siu1', meaning: '发烧' },
        { zh: '傷風', jyutping: 'soeng1 fung1', meaning: '感冒' },
        { zh: '咳', jyutping: 'kat1', meaning: '咳嗽' },
        { zh: '肚痾', jyutping: 'tou5 o1', meaning: '拉肚子' },
        { zh: '想嘔', jyutping: 'soeng2 au2', meaning: '想吐' },
        { zh: '好攰', jyutping: 'hou2 gui6', meaning: '很累' },
        { zh: '瞓唔着', jyutping: 'fan3 m4 zoek6', meaning: '睡不着' },
        { zh: '好眼瞓', jyutping: 'hou2 ngaan5 fan3', meaning: '很困/很想睡' }
    ],
    home: [
        { zh: '返屋企', jyutping: 'faan1 uk1 kei2', meaning: '回家' },
        { zh: '開冷氣', jyutping: 'hoi1 laang5 hei3', meaning: '开空调' },
        { zh: '關燈', jyutping: 'gwaan1 dang1', meaning: '关灯' },
        { zh: '開燈', jyutping: 'hoi1 dang1', meaning: '开灯' },
        { zh: '開電視', jyutping: 'hoi1 din6 si6', meaning: '开电视' },
        { zh: '沖涼', jyutping: 'cung1 loeng4', meaning: '洗澡' },
        { zh: '洗碗', jyutping: 'sai2 wun2', meaning: '洗碗' },
        { zh: '洗衫', jyutping: 'sai2 saam1', meaning: '洗衣服' },
        { zh: '晾衫', jyutping: 'long6 saam1', meaning: '晾衣服' },
        { zh: '掃地', jyutping: 'sou3 dei6', meaning: '扫地' },
        { zh: '倒垃圾', jyutping: 'dou3 laap6 saap3', meaning: '倒垃圾' },
        { zh: '鎖門', jyutping: 'so2 mun4', meaning: '锁门' }
    ],
    phone: [
        { zh: '你打錯電話', jyutping: 'nei5 daa2 co3 din6 waa2', meaning: '你打错电话了' },
        { zh: '唔好意思打搞你', jyutping: 'm4 hou2 ji3 si1 daa2 gaau2 nei5', meaning: '不好意思打扰你' },
        { zh: '可唔可以講大聲啲？', jyutping: 'ho2 m4 ho2 ji5 gong2 daai6 seng1 di1?', meaning: '可以讲大声点吗？' },
        { zh: '聽唔到', jyutping: 'teng1 m4 dou2', meaning: '听不到' },
        { zh: '收線', jyutping: 'sau1 sin3', meaning: '挂电话' },
        { zh: 'whatsapp我', jyutping: 'whatsapp ngo5', meaning: 'whatsapp我' },
        { zh: 'send張相畀我', jyutping: 'send zoeng1 soeng2 bei2 ngo5', meaning: '发张照片给我' },
        { zh: '打俾我', jyutping: 'daa2 bei2 ngo5', meaning: '打给我' }
    ],
    hospital: [
        { zh: '我想睇醫生', jyutping: 'ngo5 soeng2 tai2 ji1 saang1', meaning: '我想看医生' },
        { zh: '要唔要預約？', jyutping: 'jiu3 m4 jiu3 jyu6 joek3?', meaning: '需要预约吗？' },
        { zh: '等幾耐？', jyutping: 'dang2 gei2 noi6?', meaning: '等多久？' },
        { zh: '邊度唔舒服？', jyutping: 'bin1 dou6 m4 syu1 fuk6?', meaning: '哪里不舒服？' },
        { zh: '食藥', jyutping: 'sik6 joek6', meaning: '吃药' },
        { zh: '要唔要覆診？', jyutping: 'jiu3 m4 jiu3 fuk1 can2?', meaning: '需要复诊吗？' }
    ],
    bank: [
        { zh: '我想開戶口', jyutping: 'ngo5 soeng2 hoi1 wu6 hau2', meaning: '我想开户' },
        { zh: '我要攞號碼', jyutping: 'ngo5 jiu3 lo2 hou6 maa5', meaning: '我要取号' },
        { zh: '呢度有ATM嗎？', jyutping: 'nei1 dou6 jau5 ATM maa1?', meaning: '这里有ATM吗？' },
        { zh: '我想換錢', jyutping: 'ngo5 soeng2 wun6 cin2', meaning: '我想换钱' },
        { zh: '匯率幾多？', jyutping: 'wui6 leot6 gei2 do1?', meaning: '汇率多少？' },
        { zh: '用人民幣可唔可以？', jyutping: 'jung6 jan4 man4 bai6 ho2 m4 ho2 ji5?', meaning: '可以用人民币吗？' },
        { zh: '我想要人民幣', jyutping: 'ngo5 soeng2 jiu3 jan4 man4 bai6', meaning: '我想要人民币' },
        { zh: '請問邊度可以換錢？', jyutping: 'cing2 mun6 bin1 dou6 ho2 ji5 wun6 cin2?', meaning: '请问哪里可以换钱？' }
    ],
    hotel: [
        { zh: '我想訂房', jyutping: 'ngo5 soeng2 deng6 fong2', meaning: '我想订房' },
        { zh: '有冇房？', jyutping: 'jau5 mou5 fong2?', meaning: '有房吗？' },
        { zh: '幾錢一晚？', jyutping: 'gei2 cin2 jat1 maan5?', meaning: '多少钱一晚？' },
        { zh: '有冇大床房？', jyutping: 'jau5 mou5 daai6 cong4 fong2?', meaning: '有大床房吗？' },
        { zh: 'check-in', jyutping: 'ciu1 jip6', meaning: '入住' },
        { zh: 'check-out', jyutping: 'ceot1 jip6', meaning: '退房' },
        { zh: '房間有wifi嗎？', jyutping: 'fong2 gaan3 jau5 wifi maa1?', meaning: '房间有wifi吗？' },
        { zh: '早餐幾點開始？', jyutping: 'zou2 caan1 gei2 dim2 hoi1 ci2?', meaning: '早餐几点开始？' },
        { zh: '可唔可以晏啲退房？', jyutping: 'ho2 m4 ho2 ji5 aan3 di1 ceot1 fong2?', meaning: '可以晚点退房吗？' },
        { zh: '房卡唔見咗', jyutping: 'fong2 kaa1 m4 gin3 zo2', meaning: '房卡不见了' },
        { zh: '換條毛巾', jyutping: 'wun6 tiu4 mou4 gan1', meaning: '换条毛巾' },
        { zh: '水喉冇水', jyutping: 'seoi2 hau4 mou5 seoi2', meaning: '水龙头没水' }
    ],
    airport: [
        { zh: '登機閘口喺邊度？', jyutping: 'dang1 gei1 zaap3 hau2 hai2 bin1 dou6?', meaning: '登机口在哪里？' },
        { zh: '幾點登機？', jyutping: 'gei2 dim2 dang1 gei1?', meaning: '几点登机？' },
        { zh: '行李寄存喺邊？', jyutping: 'hang4 lei5 gei3 cyun4 hai2 bin1?', meaning: '行李寄存在哪？' },
        { zh: '免稅店喺邊度？', jyutping: 'min5 seoi3 dim3 hai2 bin1 dou6?', meaning: '免税店在哪里？' },
        { zh: '我想買機票', jyutping: 'ngo5 soeng2 maai5 gei1 piu3', meaning: '我想买机票' },
        { zh: '有冇後日嘅機位？', jyutping: 'jau5 mou5 hau6 jat6 ge3 gei1 wai2?', meaning: '有后天的机位吗？' },
        { zh: '去香港幾錢？', jyutping: 'heoi3 hoeng1 gong2 gei2 cin2?', meaning: '去香港多少钱？' },
        { zh: '行李超重幾多錢？', jyutping: 'hang4 lei5 ciu1 zung5 gei2 do1 cin2?', meaning: '行李超重多少钱？' },
        { zh: '邊度可以攞行李？', jyutping: 'bin1 dou6 ho2 ji5 lo2 hang4 lei5?', meaning: '哪里可以拿行李？' },
        { zh: '入境卡點填？', jyutping: 'jap6 ging2 kaat1 dim2 tim4?', meaning: '入境卡怎么填？' }
    ],
    hair: [
        { zh: '我想剪頭髮', jyutping: 'ngo5 soeng2 gaam2 tau4 faat3', meaning: '我想剪头发' },
        { zh: '剪短啲', jyutping: 'gaam2 dyun2 di1', meaning: '剪短一点' },
        { zh: '唔使太短', jyutping: 'm4 sai2 taai3 dyun2', meaning: '不用太短' },
        { zh: '我想燙髮', jyutping: 'ngo5 soeng2 tong3 faat3', meaning: '我想烫发' },
        { zh: '我想染髮', jyutping: 'ngo5 soeng2 jim5 faat3', meaning: '我想染发' },
        { zh: '洗頭要幾錢？', jyutping: 'sai2 tau4 jiu3 gei2 cin2?', meaning: '洗头要多少钱？' },
        { zh: '可唔可以幫我set頭？', jyutping: 'ho2 m4 ho2 ji5 bong1 ngo5 set tau4?', meaning: '可以帮我做发型吗？' },
        { zh: '剪到幾多錢？', jyutping: 'gaam2 dou3 gei2 do1 cin2?', meaning: '剪到多少钱？' }
    ],
    expressions: [
        { zh: '係咩？', jyutping: 'hai6 me1?', meaning: '真的吗？（惊讶）' },
        { zh: '真係？', jyutping: 'zan1 hai6?', meaning: '真的？' },
        { zh: '唔係掛？', jyutping: 'm4 hai6 gwaa3?', meaning: '不会吧？（不相信）' },
        { zh: '估唔到', jyutping: 'gu2 m4 dou2', meaning: '没想到' },
        { zh: '唔怪得', jyutping: 'm4 gwaai3 dak1', meaning: '怪不得' },
        { zh: '梗係啦', jyutping: 'gang2 hai6 laa1', meaning: '当然啦' },
        { zh: '做咩呀', jyutping: 'zou6 me1 aa3', meaning: '干嘛呀' },
        { zh: '得啦得啦', jyutping: 'dak1 laa1 dak1 laa1', meaning: '好啦好啦（不耐烦）' },
        { zh: '講咩呀', jyutping: 'gong2 me1 aa3', meaning: '说什么呢' },
        { zh: '傻佬', jyutping: 'so4 lou2', meaning: '傻瓜（朋友间打趣）' },
        { zh: '衰仔', jyutping: 'seoi1 zai2', meaning: '臭小子' },
        { zh: '痴線', jyutping: 'ci1 sin3', meaning: '神经病（开玩笑）' },
        { zh: '正', jyutping: 'zeng3', meaning: '太棒了！' },
        { zh: '好正', jyutping: 'hou2 zeng3', meaning: '非常棒' },
        { zh: '堅', jyutping: 'gin1', meaning: '厉害' },
        { zh: '好犀利', jyutping: 'hou2 sai1 lei6', meaning: '好厉害' },
        { zh: '好攰', jyutping: 'hou2 gui6', meaning: '好累' },
        { zh: '好肚餓', jyutping: 'hou2 tou5 ngo6', meaning: '好饿' },
        { zh: '好眼瞓', jyutping: 'hou2 ngaan5 fan3', meaning: '好困' },
        { zh: '好口渴', jyutping: 'hou2 hau2 hot3', meaning: '好渴' }
    ]
};

// ===== 職場對話 =====
const WORKPLACE_CATEGORIES = [
    { id: 'meeting', name: '開會', icon: '📋' },
    { id: 'email', name: '電郵', icon: '📧' },
    { id: 'phone_call', name: '電話應對', icon: '📞' },
    { id: 'greeting_work', name: '同事見面', icon: '🤝' },
    { id: 'presentation', name: '做報告', icon: '📊' },
    { id: 'schedule', name: 'schedule/時間', icon: '📅' }
];

const WORKPLACE_DIALOGUES = {
    meeting: [
        {
            title: '會議開始',
            lines: [
                { speaker: 'A', zh: '各位，我哋開始開會啦。', jyutping: 'gok3 wai2, ngo5 dei6 hoi1 ci2 hoi1 wui2 laa1.' },
                { speaker: 'B', zh: '好，今日主要傾邊個議程？', jyutping: 'hou2, gam1 jat6 zyu2 jiu3 king1 bin1 go3 ji6 cing4?' },
                { speaker: 'A', zh: '今日主要傾三個議題：第一係新項目進度，第二係預算，第三係下個月嘅安排。', jyutping: 'gam1 jat6 zyu2 jiu3 king1 saam1 go3 ji6 tai4: dai6 jat1 hai6 san1 hong6 muk6 zeon3 dou6, dai6 ji6 hai6 jyu6 syun3, dai6 saam1 hai6 haa6 go3 jyut6 ge3 on1 paai4.' },
                { speaker: 'B', zh: '明白，咁我哋由第一個開始。', jyutping: 'ming4 baak6, gam2 ngo5 dei6 jau4 dai6 jat1 go3 hoi1 ci2.' }
            ]
        },
        {
            title: '表達意見',
            lines: [
                { speaker: 'A', zh: '呢個方案你哋覺得點？', jyutping: 'nei1 go3 fong1 on3 nei5 dei6 gok3 dak1 dim2?' },
                { speaker: 'B', zh: '我覺得個idea幾好，但係budget方面可能要再傾吓。', jyutping: 'ngo5 gok3 dak1 go3 idea gei2 hou2, daan6 hai6 budget fong1 min6 ho2 nang5 jiu3 zoi3 king1 haa5.' },
                { speaker: 'A', zh: '有冇其他建議？', jyutping: 'jau5 mou5 kei4 taa1 gin3 ji5?' },
                { speaker: 'B', zh: '我建議先做個test run，睇吓效果再決定。', jyutping: 'ngo5 gin3 ji5 sin1 zou2 go3 test run, tai2 haa5 haau3 gwo2 zoi3 kyut3 ding6.' }
            ]
        }
    ],
    email: [
        {
            title: '跟進電郵常用句',
            lines: [
                { speaker: '', zh: '關於嗰件事……', jyutping: 'gwaan1 jyu1 go2 gin6 si6...', meaning: '关于那件事……' },
                { speaker: '', zh: '如附件，請查收。', jyutping: 'jyu4 fu6 gin2, cing2 caa4 sau1.', meaning: '附件已发，请查收。' },
                { speaker: '', zh: '如有問題，隨時搵我。', jyutping: 'jyu4 jau5 man6 tai4, ceoi4 si4 wan2 ngo5.', meaning: '如有问题，随时找我。' },
                { speaker: '', zh: '可唔可以喺禮拜五之前畀我？', jyutping: 'ho2 m4 ho2 ji5 hai2 lai5 baai3 ng5 zi1 cin4 bei2 ngo5?', meaning: '可以在周五之前给我吗？' },
                { speaker: '', zh: '收到，多謝！', jyutping: 'sau1 dou2, do1 ze6!', meaning: '收到，谢谢！' },
                { speaker: '', zh: '已閱，唔該！', jyutping: 'ji5 jyut6, m4 goi1!', meaning: '已阅，谢了！' }
            ]
        }
    ],
    phone_call: [
        {
            title: '接電話',
            lines: [
                { speaker: 'A', zh: '喂，XX公司，你好。', jyutping: 'wai3, XX gung1 si1, nei5 hou2.' },
                { speaker: 'B', zh: '你好，我想搵陳小姐。', jyutping: 'nei5 hou2, ngo5 soeng2 wan2 can4 siu2 ze2.' },
                { speaker: 'A', zh: '請問你邊位？', jyutping: 'cing2 mun6 nei5 bin1 wai2?' },
                { speaker: 'B', zh: '我係ABC公司嘅張三。', jyutping: 'ngo5 hai6 ABC gung1 si1 ge3 zoeng1 saam1.' },
                { speaker: 'A', zh: '唔該等陣，我幫你轉過去。', jyutping: 'm4 goi1 dang2 zan6, ngo5 bong1 nei5 zyun2 gwo3 heoi3.' }
            ]
        }
    ],
    greeting_work: [
        {
            title: '朝早打招呼',
            lines: [
                { speaker: 'A', zh: '早晨！', jyutping: 'zou2 san4!' },
                { speaker: 'B', zh: '早晨！食咗早餐未？', jyutping: 'zou2 san4! sik6 zo2 zou2 caan1 mei6?' },
                { speaker: 'A', zh: '食咗啦。你呢？', jyutping: 'sik6 zo2 laa1. nei5 ne1?' },
                { speaker: 'B', zh: '我食咗個包，晏晝一齊食飯？', jyutping: 'ngo5 sik6 zo2 go3 baau1, aan3 zau3 jat1 caai1 sik6 faan6?' },
                { speaker: 'A', zh: '好呀，晏晝見！', jyutping: 'hou2 aa3, aan3 zau3 gin3!' }
            ]
        }
    ],
    presentation: [
        {
            title: '做報告常用句',
            lines: [
                { speaker: '', zh: '各位同事，早晨。', jyutping: 'gok3 wai2 tung4 si6, zou2 san4.', meaning: '各位同事，早上好。' },
                { speaker: '', zh: '今日我想同大家分享吓……', jyutping: 'gam1 jat6 ngo5 soeng2 tung4 daai6 gaa1 fan1 hoeng2 haa5...', meaning: '今天我想跟大家分享一下……' },
                { speaker: '', zh: '首先，我哋睇吓張圖。', jyutping: 'sau2 sin1, ngo5 dei6 tai2 haa5 zoeng1 tou4.', meaning: '首先，我们看一下这张图。' },
                { speaker: '', zh: '第二點係……', jyutping: 'dai6 ji6 dim2 hai6...', meaning: '第二点是……' },
                { speaker: '', zh: '總結嚟講……', jyutping: 'zung2 git3 lai4 gong2...', meaning: '总结来说……' },
                { speaker: '', zh: '多謝大家，有冇問題？', jyutping: 'do1 ze6 daai6 gaa1, jau5 mou5 man6 tai4?', meaning: '谢谢大家，有没有问题？' }
            ]
        }
    ],
    schedule: [
        {
            title: '安排時間',
            lines: [
                { speaker: 'A', zh: '你禮拜三得唔得閒？', jyutping: 'nei5 lai5 baai3 saam1 dak1 m4 dak1 haan4?' },
                { speaker: 'B', zh: '禮拜三朝早我有嘢做，晏晝得。', jyutping: 'laai5 baai3 saam1 ziu1 zou2 ngo5 jau5 je5 zou2, aan3 zau3 dak1.' },
                { speaker: 'A', zh: '咁兩點半ok嗎？', jyutping: 'gam2 loeng5 dim2 bun3 ok maa1?' },
                { speaker: 'B', zh: 'ok，兩點半喺會議室見。', jyutping: 'ok, loeng5 dim2 bun3 hai2 wui2 ji5 sat1 gin3.' },
                { speaker: 'A', zh: '得，聽日見！', jyutping: 'dak1, ting1 jat6 gin3!' }
            ]
        }
    ]
};

// ===== 情景對話 =====
const SCENARIOS = [
    {
        id: 'restaurant',
        icon: '🍽',
        title: '去茶餐廳食飯',
        desc: '學點樣喺茶餐廳點餐',
        dialogue: [
            { bot: '歡迎光臨！幾位呀？', jyutping: 'fun1 jing4 gwong1 lam4! gei2 wai2 aa3?' },
            { expect: '兩位', jyutping: 'loeng5 wai2' },
            { bot: '好，呢邊坐。要啲乜嘢飲呀？', jyutping: 'hou2, nei1 bin1 co5. jiu3 di1 mat1 je5 jam2 aa3?' },
            { expect: '凍奶茶 / 熱檸茶', jyutping: 'dung3 naai5 caa4 / jit6 ning4 caa4' },
            { bot: '食啲乜嘢？', jyutping: 'sik6 di1 mat1 je5?' },
            { expect: '常餐 / 公司麵 / 乾炒牛河', jyutping: 'soeng4 caan1 / gung1 si1 min6 / gon1 caau2 ngau4 ho4' },
            { bot: '好，等陣就嚟。', jyutping: 'hou2, dang2 zan6 zau6 lai4.' },
            { bot: '⋯⋯（食完）唔該埋單！', jyutping: 'm4 goi1 maai4 daan1!' },
            { expect: '幾錢？', jyutping: 'gei2 cin2?' },
            { bot: '三十八蚊。', jyutping: 'saam1 sap6 baat3 man1.' }
        ]
    },
    {
        id: 'mtr',
        icon: '🚇',
        title: '搭地鐵',
        desc: '學點樣問路同搭車',
        dialogue: [
            { bot: '唔好意思，我想問吓……', jyutping: 'm4 goi1, ngo5 soeng2 man6 haa5...' },
            { expect: '乜嘢事？', jyutping: 'mat1 je5 si6?' },
            { bot: '去中環點樣搭？', jyutping: 'heoi3 zung1 waan4 dim2 joeng2 daap3?' },
            { expect: '你搭荃灣綫，坐四個站就到。', jyutping: 'nei5 daap3 cyun4 waan1 sin3, co5 sei3 go3 zaam6 zau6 dou3.' },
            { bot: '喺邊度轉車？', jyutping: 'hai2 bin1 dou6 zyun3 ce1?' },
            { expect: '唔使轉車，直接坐到。', jyutping: 'm4 sai2 zyun3 ce1, zik6 zip3 co5 dou3.' },
            { bot: '好多謝你！', jyutping: 'hou2 do1 ze6 nei5!' }
        ]
    },
    {
        id: 'market',
        icon: '🛒',
        title: '去街市買餸',
        desc: '學點樣喺街市買嘢',
        dialogue: [
            { bot: '靚女，買啲乜嘢呀？', jyutping: 'leng3 neoi5, maai5 di1 mat1 je5 aa3?' },
            { expect: '呢個幾多錢一斤？', jyutping: 'nei1 go3 gei2 do1 cin2 jat1 gan1?' },
            { bot: '三十蚊一斤。', jyutping: 'saam1 sap6 man1 jat1 gan1.' },
            { expect: '貴咗喎，平啲得唔得？', jyutping: 'gwai3 zo2 wo3, peng4 di1 dak1 m4 dak1?' },
            { bot: '咁⋯⋯二十五蚊啦，平唔到啦。', jyutping: 'gam2... ji6 sap6 ng5 man1 laa1, peng4 m4 dou2 laa1.' },
            { expect: '好啦，幫我稱兩斤。', jyutping: 'hou2 laa1, bong1 ngo5 cing1 loeng5 gan1.' },
            { bot: '好，五十蚊。送條蔥畀你。', jyutping: 'hou2, ng5 sap6 man1. sung3 tiu4 cung1 bei2 nei5.' },
            { expect: '多謝！', jyutping: 'do1 ze6!' }
        ]
    },
    {
        id: 'taxi',
        icon: '🚕',
        title: '搭的士',
        desc: '學點樣搭的士講目的地',
        dialogue: [
            { bot: '去邊度？', jyutping: 'heoi3 bin1 dou6?' },
            { expect: '去銅鑼灣時代廣場。', jyutping: 'heoi3 tung4 lo4 waan1 si4 doi6 gwong2 coeng4.' },
            { bot: 'ok。', jyutping: 'ok.' },
            { expect: '師傅，可唔可以行快啲？趕時間。', jyutping: 'si1 fu2, ho2 m4 ho2 ji5 haang4 faai3 di1? gon2 si4 gaan3.' },
            { bot: '塞車呀，可能要耐啲。', jyutping: 'sak1 ce1 aa3, ho2 nang5 jiu3 noi6 di1.' },
            { bot: '到啦。', jyutping: 'dou2 laa1.' },
            { expect: '幾錢？', jyutping: 'gei2 cin2?' },
            { bot: '六十八蚊。', jyutping: 'luk6 sap6 baat3 man1.' },
            { expect: '畀一百蚊。唔使找。', jyutping: 'bei2 jat1 baak3 man1. m4 sai2 zaau2.' }
        ]
    },
    {
        id: 'doctor',
        icon: '🏥',
        title: '睇醫生',
        desc: '學點樣喺診所睇醫生',
        dialogue: [
            { bot: '你好，有冇預約？', jyutping: 'nei5 hou2, jau5 mou5 jyu6 joek3?' },
            { expect: '有，約咗三點。', jyutping: 'jau5, joek3 zo2 saam1 dim2.' },
            { bot: '等陣，入去坐。', jyutping: 'dang2 zan6, jap6 heoi3 co5.' },
            { bot: '邊度唔舒服？', jyutping: 'bin1 dou6 m4 syu1 fuk6?' },
            { expect: '頭痛同咳。', jyutping: 'tau4 tung3 tung4 kat1.' },
            { bot: '有冇發燒？', jyutping: 'jau5 mou5 faat3 siu1?' },
            { expect: '好似有啲燒。', jyutping: 'hou2 ci5 jau5 di1 siu1.' },
            { bot: '我幫你探吓熱。食咗藥未？', jyutping: 'ngo5 bong1 nei5 taam3 haa5 jit6. sik6 zo2 joek6 mei6?' },
            { expect: '未食。', jyutping: 'mei6 sik6.' },
            { bot: '我開啲藥畀你，食三日就得。', jyutping: 'ngo5 hoi1 di1 joek6 bei2 nei5, sik6 saam1 jat6 zau6 dak1.' }
        ]
    },
    {
        id: 'hotel',
        icon: '🏨',
        title: '酒店check-in',
        desc: '學點樣喺酒店辦理入住',
        dialogue: [
            { bot: '歡迎，有預約嗎？', jyutping: 'fun1 jing4, jau5 jyu6 joek3 maa1?' },
            { expect: '有，我姓陳。', jyutping: 'jau5, ngo5 sing3 can4.' },
            { bot: '等陣⋯⋯好，住幾晚？', jyutping: 'dang2 zan6... hou2, zyu6 gei2 maan5?' },
            { expect: '兩晚。', jyutping: 'loeng5 maan5.' },
            { bot: '身份證攞嚟睇吓。', jyutping: 'san1 fan6 zing3 lo2 lai4 tai2 haa5.' },
            { expect: '畀你。', jyutping: 'bei2 nei5.' },
            { bot: '好，你嘅房喺八樓，房卡呢度。早餐七點到十點。', jyutping: 'hou2, nei5 ge3 fong2 hai2 baat3 lau4, fong2 kaa1 nei1 dou6. zou2 caan1 cat1 dim2 dou3 sap6 dim2.' },
            { expect: '多謝！', jyutping: 'do1 ze6!' }
        ]
    },
    {
        id: 'bakery',
        icon: '🧁',
        title: '去麵包店',
        desc: '學點樣喺麵包店買嘢',
        dialogue: [
            { bot: '想買啲乜嘢？', jyutping: 'soeng2 maai5 di1 mat1 je5?' },
            { expect: '我想買個菠蘿包。', jyutping: 'ngo5 soeng2 maai5 go3 bo1 lo4 baau1.' },
            { bot: '要唔要加牛油？', jyutping: 'jiu3 m4 jiu3 gaa1 ngau4 jau4?' },
            { expect: '要呀！', jyutping: 'jiu3 aa3!' },
            { bot: '仲有呢度啲蛋撻好出名。', jyutping: 'zung6 jau5 nei1 dou6 di1 daan2 taat3 hou2 ceot1 meng2.' },
            { expect: '咁要兩個蛋撻。', jyutping: 'gam2 jiu3 loeng5 go3 daan2 taat3.' },
            { bot: '好，一共二十二蚊。', jyutping: 'hou2, jat1 gung6 ji6 sap6 ji6 man1.' },
            { expect: '畀三十蚊。', jyutping: 'bei2 saam1 sap6 man1.' }
        ]
    },
    {
        id: 'convenience',
        icon: '🏪',
        title: '去便利店',
        desc: '學點樣喺7-11/OK便利店買嘢',
        dialogue: [
            { bot: '早晨！', jyutping: 'zou2 san4!' },
            { expect: '早晨！我想買支水。', jyutping: 'zou2 san4! ngo5 soeng2 maai5 zi1 seoi2.' },
            { bot: '呢啲做緊特價。', jyutping: 'nei1 di1 zou6 gan2 dak6 gaa3.' },
            { expect: '咁我要呢支。', jyutping: 'gam2 ngo5 jiu3 nei1 zi1.' },
            { bot: '仲要啲乜？', jyutping: 'zung6 jiu3 di1 mat1?' },
            { expect: '唔使啦，就咁多。', jyutping: 'm4 sai2 laa1, zau6 gam2 do1.' },
            { bot: '十一蚊。', jyutping: 'sap6 jat1 man1.' },
            { expect: '八達通得唔得？', jyutping: 'baat3 daat6 tung1 dak1 m4 dak1?' },
            { bot: '得。', jyutping: 'dak1.' }
        ]
    },
    {
        id: 'playground',
        icon: '🎪',
        title: '帶小朋友去公園',
        desc: '帶細路去公園玩',
        dialogue: [
            { bot: '媽咪，我想去公園玩！', jyutping: 'maa4 mi1, ngo5 soeng2 heoi3 gung1 jyun4 waan2!' },
            { expect: '好呀，換衫先！', jyutping: 'hou2 aa3, wun6 saam1 sin1!' },
            { bot: '我想玩滑梯！', jyutping: 'ngo5 soeng2 waan2 waat6 tai1!' },
            { expect: '好，但係要小心。', jyutping: 'hou2, daan6 hai6 jiu3 siu2 sam1.' },
            { bot: '媽咪，我想飲嘢！', jyutping: 'maa4 mi1, ngo5 soeng2 jam2 je5!' },
            { expect: '等陣，媽咪買杯果汁畀你。', jyutping: 'dang2 zan6, maa4 mi1 maai5 bui1 gwo2 zap1 bei2 nei5.' },
            { bot: '好開心！', jyutping: 'hou2 hoi1 sam1!' }
        ]
    },
    {
        id: 'school',
        icon: '🏫',
        title: '同老師傾小朋友',
        desc: '學點樣同學校老師溝通',
        dialogue: [
            { bot: '張太，你好！請問有啲乜嘢可以幫到你？', jyutping: 'zoeng1 taai3, nei5 hou2! cing2 man6 jau5 di1 mat1 je5 ho2 ji3 bong1 dou2 nei5?' },
            { expect: '老師你好，我想問吓我仔仔嘅學習情況。', jyutping: 'lou5 si1 nei5 hou2, ngo5 soeng2 man6 haa5 ngo5 zai2 zai2 ge3 hok6 zaap6 cing4 fong3.' },
            { bot: '你仔仔表現都幾好，不過有時上堂比較靜，唔太主動舉手。', jyutping: 'nei5 zai2 zai2 biu2 jin6 dou1 gei2 hou2, bat1 gwo3 jau5 si4 soeng5 tong4 bei2 gaau3 zing6, m4 taai3 zyu2 dung6 geoi5 sau2.' },
            { expect: '係呀，佢係比較慢熱。請問功課方面有冇需要加強？', jyutping: 'hai6 aa3, keoi5 hai6 bei2 gaau3 maan5 jit6. cing2 man6 gung1 fu2 fong1 min6 jau5 mou5 seoi1 jiu3 gaa1 koeng4?' },
            { bot: '數學OK，英文閱讀可以多啲練習。我哋學校有閱讀計劃，你要唔要拎份資料？', jyutping: 'sou3 hok3 OK, jing1 man2 jat6 dung6 ho2 ji3 do1 di1 lin6 zaap6. ngo5 dei4 hok6 haau6 jau5 jat6 dung6 gai3 waak6, nei5 jiu3 m4 jiu3 ling1 fan6 zi1 liu2?' },
            { expect: '好呀，多謝老師！', jyutping: 'hou2 aa3, do1 ze6 lou5 si1!' }
        ]
    },
    {
        id: 'school_admission',
        icon: '📝',
        title: '學校報名/插班',
        desc: '學點樣同學校查詢報名',
        dialogue: [
            { bot: '你好，請問你想問啲乜嘢？', jyutping: 'nei5 hou2, cing2 man6 nei5 soeng2 man6 di1 mat1 je5?' },
            { expect: '你好，我想問吓小二插班嘅手續。', jyutping: 'nei5 hou2, ngo5 soeng2 man6 haa5 siu2 ji6 caap3 baan1 ge3 sau2 zuk6.' },
            { bot: '你小朋友而家讀緊邊間學校？係咪本區嘅？', jyutping: 'nei5 siu2 pang4 jau5 ji4 gaa1 duk6 gan2 bin1 gaan1 hok6 haau6? hai6 mai3 bun2 keoi1 ge3?' },
            { expect: '唔係本區，但係我哋搬咗過嚟呢邊住。', jyutping: 'm4 hai6 bun2 keoi1, daan6 hai6 ngo5 dei6 bun1 zo2 gwo2 lai4 nei1 bin1 zyu6.' },
            { bot: '咁你要帶埋成績表同埋轉學證明嚟學校登記。我哋會安排面試。', jyutping: 'gam2 nei5 jiu3 daai3 maai4 sing4 zik1 biu2 tung4 maai4 zyun3 hok6 zing3 ming4 lai4 hok6 haau6 dang1 gei3. ngo5 dei4 wui3 on1 paai4 min6 si5.' },
            { expect: '面試幾時呀？要考啲乜嘢？', jyutping: 'min6 si5 gei2 si4 aa3? jiu3 haau2 di1 mat1 je5?' },
            { bot: '下禮拜三下午兩點。會考中文、英文同數學。', jyutping: 'haa5 lai5 baai3 saam1 haa6 ng5 loeng5 dim2. wui3 haau2 zung1 man4, jing1 man2 tung4 sou3 hok3.' },
            { expect: '好，我記低咗。多謝你！', jyutping: 'hou2, ngo5 ge3 dai1 zo2. do1 ze6 nei5!' }
        ]
    },
    {
        id: 'hk_university',
        icon: '🎓',
        title: '諮詢碩士課程',
        desc: '學點樣查詢大學課程',
        dialogue: [
            { bot: '你好，呢度係香港城市大學招生辦。有乜嘢可以幫到你？', jyutping: 'nei5 hou2, nei1 dou6 hai6 hoeng1 sing4 syun4 daai6 hok6 ziu1 saap6 baan6. jau5 mat1 je5 ho2 ji3 bong1 dou2 nei5?' },
            { expect: '你好，我想問吓傳媒同新媒體碩士課程嘅入學要求。', jyutping: 'nei5 hou2, ngo5 soeng2 man6 haa5 cyun4 mui4 tung4 san1 mui4 tai2 suk6 si1 fo3 cing3 ge3 jap6 hok6 jiu1 kau4.' },
            { bot: '呢個課程需要本科學位同埋雅思6.5。你有冇相關工作經驗？', jyutping: 'nei1 go3 fo3 cing3 seoi1 jiu3 bun6 fo1 hok6 wai2 tung4 maai4 aa3 ci2 6 dim5. nei5 jau5 mou5 soeng1 gwaan1 gung1 zok3 ging1 jim6?' },
            { expect: '有，我喺出版社做咗十三年編輯工作。', jyutping: 'jau5, ngo5 hai2 ceot3 baan2 se5 zo6 zo2 sap6 saam1 nin4 pin1 zap6 gung1 zok3.' },
            { bot: '咁都幾好喎。申請截止日期係四月三十號。你需要推薦信同個人陳述。', jyutping: 'gam2 dou1 gei2 hou2 wo3. san1 cing2 zit3 zi2 jat6 kei4 hai6 sei3 jyut6 sap6 saam1 hou6. nei5 seoi1 jiu3 teoi1 zaan3 seon1 tung4 go3 jan5 can4 seot6.' },
            { expect: '明白，請問推薦信要幾多封？', jyutping: 'ming4 baak6, cing2 man6 teoi1 zaan3 seon1 jiu3 gei2 do1 fung1?' },
            { bot: '最少兩封。一封學術推薦，一封工作推薦。', jyutping: 'zeoi3 siu2 loeng5 fung1. jat1 fung1 hok6 seot6 teoi1 zaan3, jat1 fung1 gung1 zok3 teoi1 zaan3.' }
        ]
    },
    {
        id: 'doctor',
        icon: '🏥',
        title: '帶小朋友睇醫生',
        desc: '學點樣喺診所溝通',
        dialogue: [
            { bot: '你好，請問小朋友有啲乜嘢唔舒服？', jyutping: 'nei5 hou2, cing2 man6 siu2 pang4 jau5 jau5 di1 mat1 je5 m4 syu1 fuk6?' },
            { expect: '佢琴日開始咳，夜晚仲有啲發燒。', jyutping: 'keoi5 kam4 jat6 hoi1 ci2 kat1, je6 maan5 zung6 jau5 di1 faat3 siu1.' },
            { bot: '咳咗幾日？有冇流鼻水？', jyutping: 'kat1 zo2 gei2 jat6? jau5 mou5 lau4 bei6 seoi2?' },
            { expect: '兩日。有少少鼻水。食慾都差咗。', jyutping: 'loeng5 jat6. jau5 siu2 siu2 bei6 seoi2. sik6 juk1 dou1 caa1 zo2.' },
            { bot: '我聽吓佢個肺⋯⋯冇乜問題。應該係普通感冒。我開啲藥畀佢。', jyutping: 'ngo5 teng1 haa5 keoi5 go3 fai3... mou5 mat1 man6 tai4. jing1 goi1 hai6 pou2 tung1 gam2 mou6. ngo5 hoi1 di1 joek6 bei2 keoi5.' },
            { expect: '多謝醫生！有冇要戒口？', jyutping: 'do1 ze6 ji1 sang1! jau5 mou5 jiu3 gaai3 hau2?' },
            { bot: '凍嘢同煎炸嘢少啲食。多飲水，早啲瞓。', jyutping: 'dung3 je5 tung4 zin1 zaa3 je5 siu2 di1 sik6. do1 jam2 seoi2, zou2 di2 fan5.' }
        ]
    }
];

// ===== 粵語歌 =====
const SONGS = [
    {
        id: 'hai_gwong_yat',
        title: '海闊天空',
        artist: 'Beyond',
        lyrics: [
            { zh: '今天我 寒夜裏看雪飄過', jyutping: 'gam1 tin1 ngo5 hon4 je6 lei5 hon3 syut3 piu1 gwo3' },
            { zh: '懷著冷却了的心窩漂遠方', jyutping: 'waai4 zoek6 laang4 gwo3 liu5 ge3 sam1 wo1 piu1 jyun5 fong1' },
            { zh: '風雨裏追趕 霧裏分不清影踪', jyutping: 'fung1 jyu5 lei5 zeoi1 gon2 mou6 lei5 fan1 bat1 cing1 jing2 zung1' },
            { zh: '天空海闊你與我 可會變 誰沒在變', jyutping: 'tin1 hung1 hoi2 fut3 nei5 jyu5 ngo5 ho2 wui2 bin3 seoi4 mut6 zoi2 bin3' },
            { zh: '多少次 迎著冷眼與嘲笑', jyutping: 'do1 siu2 ci3 jing4 zoek6 laang5 ngaan5 jyu5 caau4 siu3' },
            { zh: '從沒有放棄過心中的理想', jyutping: 'cung4 mut6 jau5 fong3 hei3 gwo3 sam1 zung1 ge3 lei5 soeng2' },
            { zh: '一剎那恍惚 若有所失的感覺', jyutping: 'jat1 saat3 naa5 fong2 fat1 joek6 jau5 so2 sat1 ge3 gam2 gok3' },
            { zh: '不知不觉已變淡 心裏愛', jyutping: 'bat1 zi1 bat1 gok3 ji5 bin3 daam6 sam1 lei5 oi3' },
            { zh: '原諒我這一生不羈放縱愛自由', jyutping: 'jyun4 loeng5 ngo5 ze5 jat1 sang1 bat1 gei1 fong3 zung3 oi3 zi6 jau4' },
            { zh: '也會怕有一天會跌倒', jyutping: 'jaa5 wui5 paa3 jau5 jat1 tin1 wui5 dit3 dou2' },
            { zh: '背棄了理想 誰人都可以', jyutping: 'bui3 hei3 liu5 lei5 soeng2 seoi4 jan4 dou1 ho2 ji5' },
            { zh: '那會怕有一天只你共我', jyutping: 'naa5 wui5 paa3 jau5 jat1 tin1 zi2 nei5 gung6 ngo5' }
        ]
    },
    {
        id: 'siu_yat_jiu',
        title: '小城大事',
        artist: '楊千嬅',
        lyrics: [
            { zh: '青春彷似煙 不知怎算', jyutping: 'cing1 ceon1 fong4 ci5 jin1 bat1 zi1 zam2 syun3' },
            { zh: '凡塵俗世都已看穿', jyutping: 'faan4 cung4 zuk6 sai3 dou1 ji5 hon3 cyun1' },
            { zh: '情字卻偏偏 捨不得放低', jyutping: 'cing4 zi6 koek3 pin1 pin1 se2 bat1 dung6 fong3 dai1' },
            { zh: '半生也跟你兜兜轉轉', jyutping: 'bun3 sang1 jaa5 gan1 nei5 dau1 dau1 zyun3 zyun3' },
            { zh: '如常地靠依 在你身邊', jyutping: 'jyu4 soeng4 dei6 kaau3 ji1 zoi6 nei5 san1 bin1' },
            { zh: '能被你愛著', jyutping: 'nang4 bei3 nei5 oi3 zoek6' },
            { zh: '拾回樂趣 繼續每天', jyutping: 'sap6 wui4 lok6 ceoi3 gai3 zuk6 mui5 jat1 tin1' }
        ]
    },
    {
        id: 'ji_ji_jyu_jyu',
        title: '知己知彼',
        artist: '陳奕迅',
        lyrics: [
            { zh: '知不知我共你 雙雙對對', jyutping: 'zi1 bat1 zi1 ngo5 gung6 nei5 soeng1 soeng1 deoi3 deoi3' },
            { zh: '不需將故事還未說到 結尾', jyutping: 'bat1 seoi1 zoeng1 gu3 si6 waan4 mei6 syut3 dou2 git3 mei5' },
            { zh: '誰人能合意 原來是轉機', jyutping: 'seoi4 jan4 nang4 hap3 ji3 jyun4 loi4 hai6 zyun3 gei1' },
            { zh: '即使相隔兩地', jyutping: 'zik1 si2 soeng1 gaak3 loeng5 dei6' },
            { zh: '我心跟你飛', jyutping: 'ngo5 sam1 gan1 nei5 fei1' }
        ]
    },
    {
        id: 'yue_gwong_jap_juk',
        title: '月光曲',
        artist: '張國榮',
        lyrics: [
            { zh: '月亮代表我的心', jyutping: 'jyut6 loeng6 doi6 biu2 ngo5 ge3 sam1' },
            { zh: '輕輕的一個吻', jyutping: 'heng1 heng1 ge3 jat1 gwo3 wan5' },
            { zh: '已經打動我的心', jyutping: 'ji5 ging1 daa2 dung6 ngo5 ge3 sam1' },
            { zh: '深深的一段情', jyutping: 'sam1 sam1 ge3 jat1 dyun6 cing4' },
            { zh: '教我思念到如今', jyutping: 'gaau3 ngo5 si1 nim6 dou3 jyu4 gam1' }
        ]
    },
    {
        id: 'sai_gwong_jau',
        title: '獅子山下',
        artist: '羅文',
        lyrics: [
            { zh: '人生中有歡喜', jyutping: 'jan4 sang1 zung1 jau5 fun1 hei2' },
            { zh: '難免亦有淚', jyutping: 'naan4 min5 jik5 jau5 leoi6' },
            { zh: '我哋大家在獅子山下相遇上', jyutping: 'ngo5 dei6 daai6 gaa1 zoi6 si1 zi2 saan1 haa5 soeng1 jyu4 soeng5' },
            { zh: '總算是歡笑多於唏噓', jyutping: 'zung2 syun3 hai6 fun1 siu3 do1 jyu1 hei1 heoi1' },
            { zh: '且珍惜時光 心裏有情', jyutping: 'ce2 zan1 sik1 si4 gwong1 sam1 lei5 jau5 cing4' },
            { zh: '心裏有情', jyutping: 'sam1 lei5 jau5 cing4' },
            { zh: '人生不免崎嶇', jyutping: 'jan4 sang1 bat1 min5 kei4 keoi1' },
            { zh: '難以絕無掛慮', jyutping: 'naan4 ji5 zyut6 mou4 gwaa3 leoi6' },
            { zh: '既是同舟在獅子山下且共濟', jyutping: 'gei3 si6 tung4 zau1 zoi6 si1 zi2 saan1 haa5 ce2 gung6 zai3' },
            { zh: '拋棄區分求共對', jyutping: 'paau1 hei3 keoi1 fan1 kau4 gung6 deoi3' }
        ]
    },
    {
        id: 'mong_cing_jeung',
        title: '蒙娜麗莎',
        artist: '陳奕迅',
        lyrics: [
            { zh: '蒙娜麗莎只是一幅畫', jyutping: 'mung4 naa4 lai6 saa1 zi2 si6 jat1 fuk1 waa2' },
            { zh: '笑容不多也不少', jyutping: 'siu3 jung4 bat1 do1 jaa5 bat1 siu2' },
            { zh: '什麼 都好', jyutping: 'mat1 je5 dou1 hou2' },
            { zh: '你不必太早', jyutping: 'nei5 bat1 bit1 taai3 zou2' },
            { zh: '慢慢 你就會懂', jyutping: 'maan6 maan6 nei5 zau6 wui5 dung2' }
        ]
    },
    {
        id: 'keoi_mong_tong',
        title: '葡萄成熟時',
        artist: '陳奕迅',
        lyrics: [
            { zh: '差不多冬至一早一晚還是有雨', jyutping: 'caa1 bat1 do1 dung1 zi3 jat1 zou2 jat1 maan5 waan4 si6 jau5 jyu5' },
            { zh: '當初的堅持現已令你很懷疑', jyutping: 'dong1 co1 ge3 gin1 ci4 jin6 ji5 ling6 nei5 han5 waai4 ji4' },
            { zh: '你最尾只得一個 收成太少', jyutping: 'nei5 zeoi3 mei5 zi2 dak1 jat1 go3 sau1 sing4 taai3 siu2' },
            { zh: '留低到葡萄成熟時', jyutping: 'lau4 dai1 dou3 pou4 tou4 sing4 suk6 si4' },
            { zh: '要與過去 某日一起去', jyutping: 'jiu3 jyu5 gwo3 heoi3 mau5 jat6 jat1 hei2 heoi3' },
            { zh: '命裏有時終須有 命裏無時莫強求', jyutping: 'ming6 lei5 jau5 si4 zung1 seoi1 jau5 ming6 lei5 mou4 si4 mok6 koeng5 kau4' }
        ]
    },
    {
        id: 'fu_ji_gei',
        title: '富士山下',
        artist: '陳奕迅',
        lyrics: [
            { zh: '攔路雨偏似雪花', jyutping: 'laan4 lou6 jyu5 pin1 ci5 syut3 faa1' },
            { zh: '飲泣的你凍嗎', jyutping: 'jam2 jap1 ge3 nei5 dung3 maa1' },
            { zh: '這風褸我給你磨到有線頭', jyutping: 'ze5 fung1 lau1 ngo5 kap1 nei5 mo4 dou3 jau5 sin3 tau4' },
            { zh: '留在車站跟我靜候', jyutping: 'lau4 zoi6 ce1 zaam6 gan1 ngo5 zing6 hau6' },
            { zh: '你如果想有人疼', jyutping: 'nei5 jyu4 gwo2 soeng2 jau5 jan4 cing4' },
            { zh: '就别等掌紋擴大', jyutping: 'zau6 bit6 dang2 zoeng2 man4 kwong3 daai6' },
            { zh: '前塵硬化像石頭', jyutping: 'cin4 cang4 ngaang6 faa3 zoeng6 sek6 tau4' },
            { zh: '於富士山下', jyutping: 'jyu1 fu3 si6 saan1 haa5' }
        ]
    },
    {
        id: 'ci_gam_ji_gwo',
        title: '祇有你不知道',
        artist: '張學友',
        lyrics: [
            { zh: '祇有你不知道', jyutping: 'zi2 jau5 nei5 bat1 zi1 dou3' },
            { zh: '祇有你不知道', jyutping: 'zi2 jau5 nei5 bat1 zi1 dou3' },
            { zh: '我最愛的是你', jyutping: 'ngo5 zeoi3 oi3 ge3 hai6 nei5' },
            { zh: '祇有你不知道', jyutping: 'zi2 jau5 nei5 bat1 zi1 dou3' },
            { zh: '你最好欺負是我', jyutping: 'nei5 zeoi3 hou2 hei1 fu6 hai6 ngo5' }
        ]
    },
    {
        id: 'soeng_gong',
        title: '傷信',
        artist: '陳奕迅',
        lyrics: [
            { zh: '呼吸著你的香水味', jyutping: 'fu1 kap1 zoek6 nei5 ge3 hoeng1 seoi2 wai2' },
            { zh: '沉醉在你的甜言蜜語', jyutping: 'cam4 zeoi3 zoi6 nei5 ge3 tim4 jin4 mat6 jyu5' },
            { zh: '那些照片 可否給我看看', jyutping: 'naa5 se1 ciu3 pin3 ho2 fau1 kap1 ngo5 hon3 hon3' },
            { zh: '你最近好嗎', jyutping: 'nei5 zeoi3 gan6 hou2 maa1' },
            { zh: '會不會想念著我', jyutping: 'wui5 bat1 wui5 soeng2 nim6 zoek6 ngo5' },
            { zh: '我會想你', jyutping: 'ngo5 wui5 soeng2 nei5' }
        ]
    },
    {
        id: 'bat_gung_siu_si',
        title: '不老傳說',
        artist: '陳百強',
        lyrics: [
            { zh: '人生如夢 匆匆過', jyutping: 'jan4 sang1 jyu4 mung6 cung1 cung1 gwo3' },
            { zh: '光陰似水 滔滔過', jyutping: 'gwong1 jam1 ci5 seoi2 tou1 tou1 gwo3' },
            { zh: '從未問世間怎樣對', jyutping: 'cung4 mei6 man6 sai3 gaan1 zam2 joeng2 deoi3' },
            { zh: '心中祇知活著沒有對錯', jyutping: 'sam1 zung1 zi2 zi1 wut6 zoek6 mut6 jau5 deoi3 co3' },
            { zh: '心中祇有我', jyutping: 'sam1 zung1 zi2 jau5 ngo5' },
            { zh: '祇有一個我', jyutping: 'zi2 jau5 jat1 go3 ngo5' }
        ]
    },
    {
        id: 'gwong_jaak_dik_sai_gaan',
        title: '光輝歲月',
        artist: 'Beyond',
        lyrics: [
            { zh: '鍾聲響起歸家的訊號', jyutping: 'zung1 seng1 hoeng2 hei2 gwai1 gaa1 ge3 seon3 hou6' },
            { zh: '在他生命裏彷似帶點唏噓', jyutping: 'zoi6 taa1 sang1 ming6 lei5 fong4 ci5 daai3 dim2 hei1 heoi1' },
            { zh: '黑色肌膚給他的意義', jyutping: 'hak1 sik1 gei1 fu1 kap1 taa1 ge3 ji3 ji6' },
            { zh: '是一生奉獻 膚色鬥爭中', jyutping: 'hai6 jat1 sang1 fung6 hin3 fu1 sik1 dau3 zang1 zung1' },
            { zh: '年月把擁有變做失去', jyutping: 'nin4 jyut6 baa2 jung5 jau5 bin3 zou6 sat1 heoi3' },
            { zh: '疲倦的雙眼帶著期望', jyutping: 'pei4 gyun6 ge3 soeng1 ngaan5 daai3 zoek6 kei4 mong6' },
            { zh: '今天祇有殘留的軀殼', jyutping: 'gam1 tin1 zi2 jau5 caan4 lau4 ge3 keoi1 hok3' },
            { zh: '迎接光輝歲月', jyutping: 'jing4 zip3 gwong1 gwai1 seoi3 jyut6' },
            { zh: '風雨中抱緊自由', jyutping: 'fung1 jyu5 zung1 pou5 gan2 zi6 jau4' },
            { zh: '一生經過彷徨的掙扎', jyutping: 'jat1 sang1 ging1 gwo3 fong4 wong4 ge3 zang1 zaat3' },
            { zh: '自信可改變未來', jyutping: 'zi6 seon3 ho2 goi2 bin3 mei6 loi4' },
            { zh: '問誰又能做到', jyutping: 'man6 seoi4 jau6 nang4 zou6 dou3' }
        ]
    },
    {
        id: 'jyu_hak_si',
        title: '如一',
        artist: '林家謙',
        lyrics: [
            { zh: '如一 從未變更過', jyutping: 'jyu4 jat1 cung4 mei6 bin3 gang1 gwo3' },
            { zh: '明明是我 原地裡等你', jyutping: 'ming4 ming4 hai6 ngo5 jyun4 dei6 lei5 dang2 nei5' },
            { zh: '如一 從未放低你', jyutping: 'jyu4 jat1 cung4 mei6 fong3 dai1 nei5' },
            { zh: '沿途寂寞都有味', jyutping: 'jyun4 tou4 jik6 muk6 dou1 jau5 wai6' },
            { zh: '仍舊記得 那段途徑', jyutping: 'jing4 gau6 gei3 dak1 naa5 dyun6 tou4 ging3' },
            { zh: '沿途有你 已是風景', jyutping: 'jyun4 tou4 jau5 nei5 ji5 hai6 fung1 ging2' }
        ]
    },
    {
        id: 'gwai_tiu_mung',
        title: '鬼迷心竅',
        artist: '李克勤',
        lyrics: [
            { zh: '我彷彿給你迷住了', jyutping: 'ngo5 fong2 fat1 kap1 nei5 mai4 zyu6 liu5' },
            { zh: '神魂顛倒地在笑', jyutping: 'san4 wan4 din1 dou2 dei6 zoi6 siu3' },
            { zh: '無可救藥地動了情', jyutping: 'mou4 ho2 gaau3 joek6 dei6 dung6 liu5 cing4' },
            { zh: '是你的魔力', jyutping: 'hai6 nei5 ge3 mo1 lik6' },
            { zh: '明知不應該', jyutping: 'ming4 zi1 bat1 jing3 goi1' },
            { zh: '偏偏愛上你', jyutping: 'pin1 pin1 oi3 soeng5 nei5' }
        ]
    },
    {
        id: 'siu_hak_sang',
        title: '下一站天后',
        artist: 'Twins',
        lyrics: [
            { zh: '站在大丸前 細心看看我的路', jyutping: 'zaam6 zoi6 daai6 jyun2 cin4 sai3 sam1 hon3 hon3 ngo5 ge3 lou6' },
            { zh: '再下個車站 到天后 當然最好', jyutping: 'zoi3 haa6 go3 ce1 zaam6 dou3 tin1 hau6 dong1 jin4 zeoi3 hou2' },
            { zh: '但就算不及格 全部都只得一個', jyutping: 'daan6 zau6 syun3 bat1 kap1 gaak3 cyun4 bou6 dou1 zi2 dak1 jat1 go3' },
            { zh: '因為天后 會是在那個天台', jyutping: 'jan1 wai6 tin1 hau6 wui5 hai6 zoi6 naa5 go3 tin1 toi4' },
            { zh: '在百德新街的愛人', jyutping: 'zoi6 baak3 dak1 san1 gaai1 ge3 oi3 jan4' },
            { zh: '面帶一種冷傲卻是動人', jyutping: 'min6 daai3 jat1 zung2 laang5 ngou6 koek3 hai6 dung6 jan4' }
        ]
    },
    {
        id: 'sin_sang',
        title: '先',
        artist: 'Eason Chan 陳奕迅',
        lyrics: [
            { zh: '誰人能為我先打點', jyutping: 'seoi4 jan4 nang4 wai6 ngo5 sin1 daa2 dim2' },
            { zh: '誰人能為我打算', jyutping: 'seoi4 jan4 nang4 wai6 ngo5 daa2 syun3' },
            { zh: '無人能在這一生𥄫到我', jyutping: 'mou4 jan4 nang4 zoi6 ze5 jat1 sang1 kap1 dou2 ngo5' },
            { zh: '無論再多幾多歲', jyutping: 'mou4 lun6 zoi3 do1 gei2 do1 seoi3' },
            { zh: '祇想可跟你 隨時享受', jyutping: 'zi2 soeng2 ho2 gan1 nei5 ceoi4 si4 hoeng2 sau6' },
            { zh: '祇想可跟你 隨時分享一切', jyutping: 'zi2 soeng2 ho2 gan1 nei5 ceoi4 si4 fan1 hoeng2 jat1 cai3' }
        ]
    },
    {
        id: 'hou_jau_yi',
        title: '好心好報',
        artist: '梁漢文',
        lyrics: [
            { zh: '命運就算顛沛流離', jyutping: 'ming6 wan6 zau6 syun3 din1 pui3 lau4 lei4' },
            { zh: '命運就算曲折離奇', jyutping: 'ming6 wan6 zau6 syun3 kuk3 zit3 lei4 kei4' },
            { zh: '命運就算恐嚇著你', jyutping: 'ming6 wan6 zau6 syun3 hung2 haak3 zoek6 nei5' },
            { zh: '做人沒趣味', jyutping: 'zou6 jan4 mut6 ceoi3 mei6' },
            { zh: '流淚眼望流淚眼', jyutping: 'lau4 leoi6 ngaan5 mong6 lau4 leoi6 ngaan5' },
            { zh: '問誰又未曾在故事裡兜圈', jyutping: 'man6 seoi4 jau6 mei6 cang4 zoi6 gu3 si6 lei5 dau1 hyun1' },
            { zh: '人活著要精彩', jyutping: 'jan4 wut6 zoek6 jiu3 zing1 coi2' }
        ]
    },
    {
        id: 'sam_jyu_seon',
        title: '可惜我是水瓶座',
        artist: '楊千嬅',
        lyrics: [
            { zh: '彷彿等了一百年', jyutping: 'fong2 fat1 dang2 liu5 jat1 baak3 nin4' },
            { zh: '忽然明白', jyutping: 'fat1 jin4 ming4 baak6' },
            { zh: '如果再見面會如何', jyutping: 'jyu4 gwo2 zoi3 gin3 min6 wui5 jyu4 ho4' },
            { zh: '可不可放下種種', jyutping: 'ho2 bat1 ho2 fong3 haa5 zung2 zung2' },
            { zh: '祇得一個你', jyutping: 'zi2 dak1 jat1 go3 nei5' },
            { zh: '但我祇得我自己', jyutping: 'daan6 ngo5 zi2 dak1 ngo5 zi6 gei2' }
        ]
    }
];

// ===== 快速翻譯短句 =====
const QUICK_PHRASES = [
    { zh: '你好', yue: '你好', jyutping: 'nei5 hou2' },
    { zh: '谢谢', yue: '多謝', jyutping: 'do1 ze6' },
    { zh: '对不起', yue: '對唔住', jyutping: 'deoi3 m4 zyu6' },
    { zh: '请问', yue: '唔該', jyutping: 'm4 goi1' },
    { zh: '多少钱', yue: '幾多錢', jyutping: 'gei2 do1 cin2' },
    { zh: '在哪里', yue: '喺邊度', jyutping: 'hai2 bin1 dou6' },
    { zh: '我不知道', yue: '我唔知', jyutping: 'ngo5 m4 zi1' },
    { zh: '我听不懂', yue: '我聽唔明', jyutping: 'ngo5 teng1 m4 ming4' },
    { zh: '请说慢一点', yue: '請講慢啲', jyutping: 'cing2 gong2 maan6 di1' },
    { zh: '好的', yue: '好呀', jyutping: 'hou2 aa3' },
    { zh: '不行', yue: '唔得', jyutping: 'm4 dak1' },
    { zh: '可以', yue: '得', jyutping: 'dak1' }
];

// ===== 糾音練習句 =====
const PRON_SENTENCES = [
    { zh: '今日天氣好好。', jyutping: 'gam1 jat6 tin1 hei3 hou2 hou2.' },
    { zh: '我好鍾意食叉燒飯。', jyutping: 'ngo5 hou2 zung1 ji3 sik6 caa1 siu1 faan6.' },
    { zh: '你識唔識講廣東話？', jyutping: 'nei5 sik1 m4 sik1 gong2 gwong2 dung1 waa6?' },
    { zh: '我想搭地鐵去銅鑼灣。', jyutping: 'ngo5 soeng2 daap3 dei6 tit3 heoi3 tung4 lo4 waan1.' },
    { zh: '唔該幫我搵個位。', jyutping: 'm4 goi1 bong1 ngo5 wan2 go3 wai2.' },
    { zh: '呢間餐廳好好食。', jyutping: 'nei1 gaan1 caan1 teng1 hou2 hou2 sik6.' },
    { zh: '幾時可以放工？', jyutping: 'gei2 si4 ho2 ji5 fong3 gung1?' },
    { zh: '聽日見，拜拜！', jyutping: 'ting1 jat6 gin3, baai1 baai3!' },
    { zh: '唔好意思，我唔記得咗。', jyutping: 'm4 hou2 ji3 si1, ngo5 m4 gei3 dak1 zo2.' },
    { zh: '多謝你嘅幫忙！', jyutping: 'do1 ze6 nei5 ge3 bong1 mong4!' },
    { zh: '我係第一次嚟香港。', jyutping: 'ngo5 hai6 dai6 jat1 ci3 lai4 hoeng1 gong2.' },
    { zh: '呢度有冇wifi？', jyutping: 'nei1 dou6 jau5 mou5 wifi?' },
    { zh: '可唔可以講多次？', jyutping: 'ho2 m4 ho2 ji5 gong2 do1 ci3?' },
    { zh: '我肚餓，想食嘢。', jyutping: 'ngo5 tou5 ngo6, soeng2 sik6 je5.' },
    { zh: '落雨啦，記得帶遮。', jyutping: 'lok6 jyu5 laa1, gei3 dak1 daai3 ze1.' }
];

// ===== 普通話↔粵語翻譯字典 =====
const MANDARIN_TO_CANTONESE = {
    // 稱呼
    '你好': '你好', '谢谢': '多謝', '对不起': '對唔住', '没关系': '冇問題', '请问': '唔該',
    '多少钱': '幾多錢', '在哪里': '喺邊度', '什么时候': '幾時', '怎么': '點樣', '为什么': '點解',
    '什么': '乜嘢', '这个': '呢個', '那个': '嗰個', '这里': '呢度', '那里': '嗰度',
    '不知道': '唔知', '听不懂': '聽唔明', '看不见': '睇唔到', '不可以': '唔可以',
    '没有': '冇', '不是': '唔係', '不要': '唔要', '不能': '唔得',
    // 動作
    '吃饭': '食飯', '喝水': '飲水', '睡觉': '瞓覺', '起床': '起身', '上班': '返工',
    '下班': '放工', '上学': '返學', '放学': '放學', '回家': '返屋企', '吃饭了吗': '食咗飯未',
    '买东西': '買嘢', '看医生': '睇醫生', '坐地铁': '搭地鐵', '坐公交': '搭巴士',
    '打车': '搭的士', '下雨': '落雨', '很冷': '好凍', '很热': '好熱', '很好': '好好',
    '很累': '好攰', '很开心': '好開心', '很饿': '好肚餓', '很漂亮': '好靚',
    '很贵': '好貴', '很便宜': '好平', '快点': '快啲', '慢点': '慢啲',
    '说': '講', '看': '睇', '听': '聽', '吃': '食', '喝': '飲', '来': '嚟',
    '去': '去', '走': '行', '坐': '坐', '站': '企', '拿': '攞', '扔': '掟',
    '跑': '走', '跳': '跳', '睡觉': '瞓覺', '起床': '起身', '洗脸': '洗面',
    '刷牙': '刷牙', '洗澡': '沖涼', '穿衣服': '著衫', '脱衣服': '除衫',
    // 代詞
    '我': '我', '你': '你', '他': '佢', '她': '佢', '我们': '我哋', '你们': '你哋',
    '他们': '佢哋', '她们': '佢哋', '这个': '呢個', '那个': '嗰個', '这些': '呢啲', '那些': '嗰啲',
    // 形容詞
    '好': '好', '坏': '差', '大': '大', '小': '細', '多': '多', '少': '少',
    '高': '高', '矮': '矮', '长': '長', '短': '短', '宽': '闊', '窄': '窄',
    '快': '快', '慢': '慢', '早': '早', '晚': '夜', '新': '新', '旧': '舊',
    '漂亮': '靚', '丑': '醜', '贵': '貴', '便宜': '平', '容易': '易', '难': '難',
    '远': '遠', '近': '近', '热': '熱', '冷': '凍',
    // 時間
    '今天': '今日', '明天': '聽日', '昨天': '尋日', '前天': '前日', '后天': '後日',
    '早上': '朝早', '中午': '晏晝', '晚上': '夜晚', '今天早上': '今日朝早',
    '明天早上': '聽日朝早', '今晚': '今晚', '明天晚上': '聽晚', '昨天晚上': '琴晚',
    // 禮貌用語
    '谢谢': '多謝', '对不起': '對唔住', '不好意思': '唔好意思', '请等一下': '請等陣',
    '再见': '拜拜', '明天见': '聽日見', '好久不见': '好耐冇見', '你好吗': '你好嗎',
    '我很好': '我幾好', '好久': '好耐', '一会儿': '一陣',
    '好的': '好呀', '可以': '得', '不行': '唔得', '当然': '梗係',
    // 稱謂
    '老板': '老闆', '服务员': '伙計', '师傅': '師傅', '医生': '醫生', '护士': '護士',
    '警察': '警察', '同学': '同學', '同事': '同事', '朋友': '朋友',
    '妈妈': '媽咪', '爸爸': '爹哋', '哥哥': '哥哥', '弟弟': '弟弟', '姐姐': '家姐', '妹妹': '阿妹',
    '奶奶': '嫲嫲', '爷爷': '爺爺', '外婆': '婆婆', '外公': '公公',
    // 其他
    '一起': '一齊', '马上': '即刻', '刚才': '啱啱', '现在': '而家',
    '以后': '之後', '以前': '以前', '已经': '已經', '还': '仲',
    '很喜欢': '好鍾意', '喜欢': '鍾意', '讨厌': '乞人憎', '生气': '嬲',
    '害怕': '驚', '担心': '擔心', '想': '想', '知道': '知道',
    '家里': '屋企', '外面': '出面', '里面': '入面', '中间': '中間',
    '旁边': '隔籬', '前面': '前邊', '后面': '後邊', '左边': '左邊', '右边': '右邊',
    '上边': '上面', '下边': '下面',
    '这里': '呢度', '那里': '嗰度', '哪里': '邊度', '到处': '周圍',
    '怎么去': '點樣去', '怎么走': '點樣行', '干什么': '做乜', '去哪': '去邊度',
    '怎么做': '點樣做', '什么意思': '乜嘢意思',
    // 粵語特有表達
    '给': '畀', '找': '搵', '玩': '玩', '叫': '叫', '问': '問',
    '交': '交', '教': '教', '帮': '幫', '回': '返',
    '商店': '舖', '超市': '超市', '餐厅': '餐廳', '饭店': '飯店', '学校': '學校',
    '医院': '醫院', '银行': '银行', '邮局': '郵局', '图书馆': '圖書館',
    '车站': '車站', '地铁站': '地鐵站', '机场': '機場', '酒店': '酒店',
    '房间': '房', '厕所': '廁所', '洗手间': '洗手間',
    // 更多動作
    '帮我': '幫我', '给我': '畀我', '找你': '搵你',
    '看一看': '睇吓', '想一想': '諗吓', '等一等': '等陣',
    // 量詞
    '一个': '一個', '两个': '兩個', '三个': '三個', '四个': '四個', '五个': '五個',
    '一点': '啲', '一些': '啲', '很多': '好多', '非常': '好',
    // 食物
    '米饭': '白飯', '面条': '麵', '包子': '包', '馒头': '饅頭',
    '饺子': '餃子', '粥': '粥', '汤': '湯', '菜': '餸',
    '肉': '肉', '鱼': '魚', '鸡': '雞', '猪': '豬', '牛': '牛',
    '水果': '生果', '苹果': '蘋果', '橙子': '橙', '西瓜': '西瓜',
    '香蕉': '蕉', '葡萄': '提子', '芒果': '芒果',
    '茶': '茶', '咖啡': '咖啡', '牛奶': '奶', '水': '水',
    // 數字
    '一': '一', '二': '二', '三': '三', '四': '四', '五': '五',
    '六': '六', '七': '七', '八': '八', '九': '九', '十': '十',
    '百': '百', '千': '千', '万': '萬',
    // 身體
    '头': '頭', '脸': '面', '眼睛': '眼', '耳朵': '耳仔', '鼻子': '鼻',
    '嘴': '口', '手': '手', '脚': '腳', '肚子': '肚', '背': '背脊',
    '头': '頭', '脸': '面', '眼睛': '眼', '耳朵': '耳仔', '鼻子': '鼻',
    // 動物
    '猫': '貓', '狗': '狗', '鸟': '雀仔', '鱼': '魚', '鸡': '雞',
    '猪': '豬', '牛': '牛', '马': '馬', '羊': '羊', '兔': '兔仔',
    // 顏色
    '红色': '紅色', '蓝色': '藍色', '绿色': '綠色', '黄色': '黃色',
    '白色': '白色', '黑色': '黑色', '紫色': '紫色', '橙色': '橙色',
    '粉色': '粉紅色', '灰色': '灰色',
    // 交通工具
    '车': '車', '汽车': '汽車', '巴士': '巴士', '地铁': '地鐵',
    '出租车': '的士', '飞机': '飛機', '船': '船', '自行车': '單車',
    '火车': '火車', '高铁': '高鐵'
};

// ===== 兒童學粵語 =====
const CHILDREN_CATEGORIES = [
    { id: 'abc', name: '學字母 A-Z', icon: '🔤' },
    { id: 'numbers', name: '學數字', icon: '🔢' },
    { id: 'colors', name: '學顏色', icon: '🎨' },
    { id: 'animals', name: '學動物', icon: '🐾' },
    { id: 'family', name: '家人稱呼', icon: '👨‍👩‍👧‍👦' },
    { id: 'body', name: '身體部位', icon: '👃' },
    { id: 'food', name: '食物', icon: '🍎' },
    { id: 'songs', name: '童謠', icon: '🎵' },
    { id: 'rhymes', name: '粵語兒歌', icon: '🎶' },
    { id: 'quiz', name: '小測驗', icon: '📝' }
];

const CHILDREN_ABC = [
    { letter: 'A', word: 'Apple 蘋果', jyutping: 'ping4 gwo2' },
    { letter: 'B', word: 'Ball 波', jyutping: 'bo1' },
    { letter: 'C', word: 'Cat 貓', jyutping: 'maau1' },
    { letter: 'D', word: 'Dog 狗', jyutping: 'gau2' },
    { letter: 'E', word: 'Egg 蛋', jyutping: 'daan2' },
    { letter: 'F', word: 'Fish 魚', jyutping: 'jyu4' },
    { letter: 'G', word: 'Girl 女仔', jyutping: 'neoi5 zai2' },
    { letter: 'H', word: 'House 屋', jyutping: 'uk1' },
    { letter: 'I', word: 'Ice 冰', jyutping: 'bing1' },
    { letter: 'J', word: 'Juice 枱汁', jyutping: 'zi4 zap1' },
    { letter: 'K', word: 'Kite 紙鳶', jyutping: 'zi2 jin1' },
    { letter: 'L', word: 'Lion 獅', jyutping: 'si1' },
    { letter: 'M', word: 'Moon 月光', jyutping: 'jyut6 gwong1' },
    { letter: 'N', word: 'Nose 鼻', jyutping: 'bei6' },
    { letter: 'O', word: 'Orange 橙', jyutping: 'caang2' },
    { letter: 'P', word: 'Pig 豬', jyutping: 'zyu1' },
    { letter: 'Q', word: 'Queen 女王', jyutping: 'neoi5 wong4' },
    { letter: 'R', word: 'Rain 雨', jyutping: 'jyu5' },
    { letter: 'S', word: 'Sun 太陽', jyutping: 'taai3 joeng4' },
    { letter: 'T', word: 'Tree 樹', jyutping: 'syu6' },
    { letter: 'U', word: 'Umbrella 遮', jyutping: 'ze1' },
    { letter: 'V', word: 'Van 鬧車', jyutping: 'naau6 ce1' },
    { letter: 'W', word: 'Water 水', jyutping: 'seoi2' },
    { letter: 'X', word: 'Xmas 聖誕', jyutping: 'sing3 daan3' },
    { letter: 'Y', word: 'Yellow 黃色', jyutping: 'wong4 sik1' },
    { letter: 'Z', word: 'Zoo 動物園', jyutping: 'dung6 mat6 jyun4' }
];

const CHILDREN_NUMBERS = [
    { num: '1', word: '一', jyutping: 'jat1', en: 'one' },
    { num: '2', word: '二', jyutping: 'ji6', en: 'two' },
    { num: '3', word: '三', jyutping: 'saam1', en: 'three' },
    { num: '4', word: '四', jyutping: 'sei3', en: 'four' },
    { num: '5', word: '五', jyutping: 'ng5', en: 'five' },
    { num: '6', word: '六', jyutping: 'luk6', en: 'six' },
    { num: '7', word: '七', jyutping: 'cat1', en: 'seven' },
    { num: '8', word: '八', jyutping: 'baat3', en: 'eight' },
    { num: '9', word: '九', jyutping: 'gau2', en: 'nine' },
    { num: '10', word: '十', jyutping: 'sap6', en: 'ten' },
    { num: '100', word: '一百', jyutping: 'jat1 baak3', en: 'one hundred' },
    { num: '1000', word: '一千', jyutping: 'jat1 cin1', en: 'one thousand' }
];

const CHILDREN_COLORS = [
    { zh: '紅色', jyutping: 'hung4 sik1', en: 'red', emoji: '🔴' },
    { zh: '橙色', jyutping: 'caang2 sik1', en: 'orange', emoji: '🟠' },
    { zh: '黃色', jyutping: 'wong4 sik1', en: 'yellow', emoji: '🟡' },
    { zh: '綠色', jyutping: 'luk6 sik1', en: 'green', emoji: '🟢' },
    { zh: '藍色', jyutping: 'laam4 sik1', en: 'blue', emoji: '🔵' },
    { zh: '紫色', jyutping: 'zi2 sik1', en: 'purple', emoji: '🟣' },
    { zh: '粉紅色', jyutping: 'fan2 hung4 sik1', en: 'pink', emoji: '🩷' },
    { zh: '白色', jyutping: 'baak6 sik1', en: 'white', emoji: '⚪' },
    { zh: '黑色', jyutping: 'hak1 sik1', en: 'black', emoji: '⚫' },
    { zh: '灰色', jyutping: 'fui1 sik1', en: 'grey', emoji: '🩶' }
];

const CHILDREN_ANIMALS = [
    { zh: '貓', jyutping: 'maau1', en: 'cat', emoji: '🐱' },
    { zh: '狗', jyutping: 'gau2', en: 'dog', emoji: '🐶' },
    { zh: '兔仔', jyutping: 'tou4 zai2', en: 'rabbit', emoji: '🐰' },
    { zh: '雀仔', jyutping: 'zoek3 zai2', en: 'bird', emoji: '🐦' },
    { zh: '魚', jyutping: 'jyu4', en: 'fish', emoji: '🐟' },
    { zh: '烏龜', jyutping: 'wu1 gwai1', en: 'turtle', emoji: '🐢' },
    { zh: '青蛙', jyutping: 'cing1 waa1', en: 'frog', emoji: '🐸' },
    { zh: '蝴蝶', jyutping: 'wu4 dip6', en: 'butterfly', emoji: '🦋' },
    { zh: '蜜蜂', jyutping: 'mat6 fung1', en: 'bee', emoji: '🐝' },
    { zh: '螞蟻', jyutping: 'maa5 ngai5', en: 'ant', emoji: '🐜' },
    { zh: '馬', jyutping: 'maa5', en: 'horse', emoji: '🐴' },
    { zh: '豬', jyutping: 'zyu1', en: 'pig', emoji: '🐷' },
    { zh: '牛', jyutping: 'ngau4', en: 'cow', emoji: '🐮' },
    { zh: '羊', jyutping: 'joeng4', en: 'sheep', emoji: '🐑' },
    { zh: '猴子', jyutping: 'hau4 zi2', en: 'monkey', emoji: '🐵' },
    { zh: '大象', jyutping: 'daai6 zoeng6', en: 'elephant', emoji: '🐘' },
    { zh: '獅子', jyutping: 'si1 zi2', en: 'lion', emoji: '🦁' },
    { zh: '老虎', jyutping: 'lou5 fu2', en: 'tiger', emoji: '🐯' },
    { zh: '熊貓', jyutping: 'hung4 maau1', en: 'panda', emoji: '🐼' },
    { zh: '企鵝', jyutping: 'kei5 ngo4', en: 'penguin', emoji: '🐧' },
    { zh: '海豚', jyutping: 'hoi2 tyun4', en: 'dolphin', emoji: '🐬' },
    { zh: '蛇', jyutping: 'se4', en: 'snake', emoji: '🐍' },
    { zh: '雞', jyutping: 'gai1', en: 'chicken', emoji: '🐔' },
    { zh: '鴨', jyutping: 'aap3', en: 'duck', emoji: '🦆' }
];

const CHILDREN_FAMILY = [
    { zh: '爸爸', jyutping: 'baa4 baa1', en: 'daddy', emoji: '👨' },
    { zh: '媽咪', jyutping: 'maa4 mi1', en: 'mummy', emoji: '👩' },
    { zh: '哥哥', jyutping: 'go1 go1', en: 'older brother', emoji: '👦' },
    { zh: '弟弟', jyutping: 'dai6 dai2', en: 'younger brother', emoji: '🧒' },
    { zh: '家姐', jyutping: 'gaa1 ze1', en: 'older sister', emoji: '👧' },
    { zh: '妹妹', jyutping: 'mui4 mui2', en: 'younger sister', emoji: '👶' },
    { zh: '嫲嫲', jyutping: 'maa4 maa4', en: 'paternal grandma', emoji: '👵' },
    { zh: '爺爺', jyutping: 'je4 je4', en: 'paternal grandpa', emoji: '👴' },
    { zh: '婆婆', jyutping: 'po4 po2', en: 'maternal grandma', emoji: '👵' },
    { zh: '公公', jyutping: 'gung1 gung1', en: 'maternal grandpa', emoji: '👴' },
    { zh: '叔叔', jyutping: 'suk1 suk1', en: 'uncle', emoji: '👨' },
    { zh: '阿姨', jyutping: 'aa3 ji1', en: 'auntie', emoji: '👩' },
    { zh: '我哋一家人', jyutping: 'ngo5 dei6 jat1 gaa1 jan4', en: 'our family', emoji: '👨‍👩‍👧‍👦' }
];

const CHILDREN_BODY = [
    { zh: '頭', jyutping: 'tau4', en: 'head', emoji: '👤' },
    { zh: '眼', jyutping: 'ngaan5', en: 'eye', emoji: '👁' },
    { zh: '耳仔', jyutping: 'ji5 zai2', en: 'ear', emoji: '👂' },
    { zh: '鼻', jyutping: 'bei6', en: 'nose', emoji: '👃' },
    { zh: '口', jyutping: 'hau2', en: 'mouth', emoji: '👄' },
    { zh: '牙', jyutping: 'ngaa4', en: 'tooth', emoji: '🦷' },
    { zh: '手', jyutping: 'sau2', en: 'hand', emoji: '✋' },
    { zh: '腳', jyutping: 'goek3', en: 'foot', emoji: '🦶' },
    { zh: '肚', jyutping: 'tou5', en: 'tummy', emoji: '🫄' },
    { zh: '背脊', jyutping: 'bui3 zek3', en: 'back', emoji: '🫸' },
    { zh: '手指', jyutping: 'sau2 zi2', en: 'finger', emoji: '☝' },
    { zh: '腳趾', jyutping: 'goek3 zi2', en: 'toe', emoji: '🦶' }
];

const CHILDREN_FOOD = [
    { zh: '飯', jyutping: 'faan6', en: 'rice', emoji: '🍚' },
    { zh: '麵', jyutping: 'min6', en: 'noodles', emoji: '🍜' },
    { zh: '包', jyutping: 'baau1', en: 'bread/bun', emoji: '🍞' },
    { zh: '粥', jyutping: 'zuk1', en: 'congee', emoji: '🥣' },
    { zh: '牛奶', jyutping: 'ngau4 naai5', en: 'milk', emoji: '🥛' },
    { zh: '雞蛋', jyutping: 'gai1 daan2', en: 'egg', emoji: '🥚' },
    { zh: '蘋果', jyutping: 'ping4 gwo2', en: 'apple', emoji: '🍎' },
    { zh: '橙', jyutping: 'caang2', en: 'orange', emoji: '🍊' },
    { zh: '香蕉', jyutping: 'hoeng1 ziu1', en: 'banana', emoji: '🍌' },
    { zh: '西瓜', jyutping: 'sai1 gwaa1', en: 'watermelon', emoji: '🍉' },
    { zh: '葡萄', jyutping: 'pou4 tou4', en: 'grape', emoji: '🍇' },
    { zh: '草莓', jyutping: 'cou2 mui4', en: 'strawberry', emoji: '🍓' },
    { zh: '雪糕', jyutping: 'syut3 gou1', en: 'ice cream', emoji: '🍦' },
    { zh: '餅乾', jyutping: 'beng2 gon1', en: 'biscuit', emoji: '🍪' },
    { zh: '朱古力', jyutping: 'zyu1 gu1 lik1', en: 'chocolate', emoji: '🍫' },
    { zh: '蛋糕', jyutping: 'daan2 gou1', en: 'cake', emoji: '🎂' },
    { zh: '糖果', jyutping: 'tong4 gwo2', en: 'candy', emoji: '🍬' },
    { zh: '水', jyutping: 'seoi2', en: 'water', emoji: '💧' },
    { zh: '果汁', jyutping: 'gwo2 zap1', en: 'juice', emoji: '🧃' },
    { zh: '湯', jyutping: 'tong1', en: 'soup', emoji: '🍲' }
];

const CHILDREN_SONGS = [
    {
        title: '一隻小蜜蜂',
        en: 'Little Bee',
        lyrics: '一隻小蜜蜂呀\n飛到花叢中呀\n飛呀 飛呀\n\n一隻小蜜蜂呀\n飛到花叢中呀\n飛呀 飛呀\n\n採蜜忙 採蜜忙\n採得花蜜甜又香',
        jyutping: 'jat1 zek3 siu2 mat1 fung1 aa3\nfei1 dou3 faa1 cung4 zung1 aa3\nfei1 aa3 fei1 aa3\n\njat1 zek3 siu2 mat1 fung1 aa3\nfei1 dou3 faa1 cung4 zung1 aa3\nfei1 aa3 fei1 aa3\n\ncoi2 mat6 mong4 coi2 mat6 mong4\ncoi2 dak1 faa1 mat6 tim4 jau6 hoeng1'
    },
    {
        title: '小星星',
        en: 'Twinkle Twinkle Little Star',
        lyrics: '一閃一閃亮晶晶\n滿天都是小星星\n掛在天上放光明\n好像許多小眼睛\n一閃一閃亮晶晶\n滿天都是小星星',
        jyutping: 'jat1 sim2 jat1 sim2 leng6 zing1 zing1\nmun5 tin1 dou1 si6 siu2 sing1 sing1\ngwaa3 zoi6 tin1 soeng5 fong3 gwong1 ming4\nhou2 coeng5 heoi2 do1 siu2 ngaan5 sing1\njat1 sim2 jat1 sim2 leng6 zing1 zing1\nmun5 tin1 dou1 si6 siu2 sing1 sing1'
    },
    {
        title: '排排坐',
        en: 'Sit in a Row',
        lyrics: '排排坐 吃果果\n你一個 我一個\n大家吃飽笑呵呵\n排排坐 吃果果\n弟弟睡著了\n留番一個給哥哥',
        jyutping: 'paai4 paai4 co5 sik6 gwo2 gwo2\nnei5 jat1 go3 ngo5 jat1 go3\ndaai6 gaa1 sik6 baau2 siu3 ho1 ho1\npaai4 paai4 co5 sik6 gwo2 gwo2\ndai6 dai2 seoi6 zoek6 liu5\nlau4 faan1 jat1 go3 kap1 go1 go1'
    },
    {
        title: '落雨大',
        en: 'Rain Rain Go Away',
        lyrics: '落雨大 水浸街\n阿哥擔柴上街賣\n阿嫂出街着花鞋\n花鞋花襪花腰帶\n珍珠蝴蝶兩邊排',
        jyutping: 'lok6 jyu5 daai6 seoi2 zam3 gaai1\naa3 go1 daam1 caai4 soeng5 gaai1 maai6\naa3 sou2 ceot1 gaai1 zoek3 faa1 haai4\nfaa1 haai4 faa1 mat6 faa1 jiu1 daai3\nzan1 zyu1 wu4 dip6 loeng5 bin1 paai4'
    },
    {
        title: '氹氹轉',
        en: 'Round and Round',
        lyrics: '氹氹轉 菊花園\n炒米餅 糯米糰\n五月初五係龍舟節啊\n阿媽叫我去睇龍船\n龍船真係好睇\n睇到龍船沉落水',
        jyutping: 'tam4 tam4 zyun3 guk1 faa1 jyun4\ncaau2 mai5 beng2 no6 mai5 tyun4\nng5 jyut6 co1 ng5 hai6 lung4 zau1 zit3 aa3\naa3 maa1 giu3 ngo5 heoi3 tai2 lung4 syun4\nlung4 syun4 zan1 hai6 hou2 tai2\ntai2 dou3 lung4 syun4 cam4 lok6 seoi2'
    },
    {
        title: '月光光',
        en: 'Moonlight',
        lyrics: '月光光 照地堂\n年卅晚 摘摘檳榔\n檳榔香 摘子薑\n子薑辣 買菩達\n菩達苦 買豬肚\n豬肚肥 買牛皮\n牛皮薄 買菱角\n菱角尖 買馬鞭',
        jyutping: 'jyut6 gwong1 gwong1 ziu3 dei6 tong4\nnin4 saa3 maan5 zaak3 ban1 tong4\nban1 tong4 hoeng1 zaak3 zi2 goeng1\nzi2 goeng4 laat6 maai5 pou4 daat6\npou4 daat6 fu2 maai5 zyu1 tou2\nzyu1 tou2 fei4 maai5 ngau4 pei4\nngau4 pei4 bok6 maai5 ling4 gok3\nling4 gok3 zim1 maai5 maa5 bin1'
    },
    {
        title: '生日快樂',
        en: 'Happy Birthday',
        lyrics: '祝你生日快樂\n祝你生日快樂\n祝你生日快樂\n祝你生日快樂\n\n快高長大\n身體健康\n學業進步\n天天開心',
        jyutping: 'zuk1 nei5 sang1 jat6 faai3 lok6\nzuk1 nei5 sang1 jat6 faai3 lok6\nzuk1 nei5 sang1 jat6 faai3 lok6\nzuk1 nei5 sang1 jat6 faai3 lok6\n\nfaai3 gou1 coeng4 daai6\nsan1 tai2 gin6 hong1\nhok6 jip6 zeon3 bou6\ntin1 tin1 hoi1 sam1'
    },
    {
        title: '頭肩膀膝腳趾',
        en: 'Head Shoulders Knees and Toes',
        lyrics: '頭 頭\n肩膀 肩膀\n膝頭 膝頭 腳趾\n膝頭 膝頭 腳趾\n\n頭 頭\n肩膀 肩膀\n膝頭 膝頭 腳趾\n膝頭 膝頭 腳趾\n\n眼 耳 鼻 口\n眼 耳 鼻 口\n\n頭 頭\n肩膀 肩膀\n膝頭 膝頭 腳趾',
        jyutping: 'tau4 tau4\ngin1 bong2 gin1 bong2\nsat1 tau4 sat1 tau4 goek3 zi2\nsat1 tau4 sat1 tau4 goek3 zi2\n\ntau4 tau4\ngin1 bong2 gin1 bong2\nsat1 tau4 sat1 tau4 goek3 zi2\nsat1 tau4 sat1 tau4 goek3 zi2\n\nngaan5 ji5 bei6 hau2\nngaan5 ji5 bei6 hau2\n\ntau4 tau4\ngin1 bong2 gin1 bong2\nsat1 tau4 sat1 tau4 goek3 zi2'
    }
];

const CHILDREN_QUIZ = [
    {
        question: '呢隻動物係乜嘢？',
        jyutping: 'nei1 zek3 dung6 mat6 hai6 mat1 je5?',
        emoji: '🐱',
        options: ['狗', '貓', '兔仔'],
        correct: 1,
        correctJyutping: 'maau1'
    },
    {
        question: '呢個係乜嘢色？',
        jyutping: 'nei1 go3 hai6 mat1 je5 sik1?',
        emoji: '🔴',
        options: ['藍色', '紅色', '黃色'],
        correct: 1,
        correctJyutping: 'hung4 sik1'
    },
    {
        question: '呢個係幾多？',
        jyutping: 'nei1 go3 hai6 gei2 do1?',
        emoji: '🖐️',
        options: ['三', '四', '五'],
        correct: 2,
        correctJyutping: 'ng5'
    },
    {
        question: '呢個生果係乜嘢？',
        jyutping: 'nei1 go3 saang1 gwo2 hai6 mat1 je5?',
        emoji: '🍎',
        options: ['橙', '蘋果', '西瓜'],
        correct: 1,
        correctJyutping: 'ping4 gwo2'
    },
    {
        question: '呢個係邊個？',
        jyutping: 'nei1 go3 hai6 bin1 go3?',
        emoji: '👨',
        options: ['哥哥', '爸爸', '弟弟'],
        correct: 1,
        correctJyutping: 'baa4 baa1'
    },
    {
        question: '呢個係乜嘢色？',
        jyutping: 'nei1 go3 hai6 mat1 je5 sik1?',
        emoji: '🔵',
        options: ['藍色', '綠色', '紫色'],
        correct: 0,
        correctJyutping: 'laam4 sik1'
    },
    {
        question: '呢隻動物係乜嘢？',
        jyutping: 'nei1 zek3 dung6 mat6 hai6 mat1 je5?',
        emoji: '🐶',
        options: ['貓', '狗', '雞'],
        correct: 1,
        correctJyutping: 'gau2'
    },
    {
        question: '呢個係幾多？',
        jyutping: 'nei1 go3 hai6 gei2 do1?',
        emoji: '✌️',
        options: ['一', '二', '三'],
        correct: 1,
        correctJyutping: 'ji6'
    },
    {
        question: '呢個食物係乜嘢？',
        jyutping: 'nei1 go3 sik6 mat6 hai6 mat1 je5?',
        emoji: '🍦',
        options: ['蛋糕', '雪糕', '餅乾'],
        correct: 1,
        correctJyutping: 'syut3 gou1'
    },
    {
        question: '呢個係乜嘢色？',
        jyutping: 'nei1 go3 hai6 mat1 je5 sik1?',
        emoji: '🟡',
        options: ['紅色', '黃色', '橙色'],
        correct: 1,
        correctJyutping: 'wong4 sik1'
    },
    {
        question: '呢個係邊個？',
        jyutping: 'nei1 go3 hai6 bin1 go3?',
        emoji: '👩',
        options: ['媽咪', '家姐', '妹妹'],
        correct: 0,
        correctJyutping: 'maa4 mi1'
    },
    {
        question: '呢隻動物係乜嘢？',
        jyutping: 'nei1 zek3 dung6 mat6 hai6 mat1 je5?',
        emoji: '🐘',
        options: ['馬', '猴子', '大象'],
        correct: 2,
        correctJyutping: 'daai6 zoeng6'
    }
];

// ===== 九聲六調 =====
const TONES = [
    { num: 1, name: '陰平', value: '55 (高平)', example: '詩', jyutping: 'si1', desc: '高而平，像普通話一聲' },
    { num: 2, name: '陰上', value: '35 (高升)', example: '史', jyutping: 'si2', desc: '由中升到高，像普通話二聲' },
    { num: 3, name: '陰去', value: '33 (中平)', example: '試', jyutping: 'si3', desc: '中間平，不高不低' },
    { num: 4, name: '陽平', value: '21 (低降)', example: '時', jyutping: 'si4', desc: '由低降至最低，像輕輕嘆氣' },
    { num: 5, name: '陽上', value: '23 (低升)', example: '市', jyutping: 'si5', desc: '由低升至中間' },
    { num: 6, name: '陽去', value: '22 (低平)', example: '事', jyutping: 'si6', desc: '低而平，輕輕落下' },
    { num: 7, name: '高入 (陰入)', value: '5 (高短)', example: '識', jyutping: 'sik1', desc: '短促高音，以p/t/k結尾' },
    { num: 8, name: '中入 (中入)', value: '3 (中短)', example: '錫', jyutping: 'sek3', desc: '短促中音' },
    { num: 9, name: '低入 (陽入)', value: '2 (低短)', example: '食', jyutping: 'sik6', desc: '短促低音' }
];

// ===== 語法 =====
const GRAMMAR = [
    {
        title: '「嘅」= 的',
        rule: '嘅 (ge3) = 的，用嚟修飾名詞',
        examples: [
            { zh: '呢個係我嘅書。', jp: 'nei1 go3 hai6 ngo5 ge3 syu1.', meaning: '这是我的书。' },
            { zh: '香港嘅天氣好好。', jp: 'hoeng1 gong2 ge3 tin1 hei3 hou2 hou2.', meaning: '香港的天气很好。' }
        ]
    },
    {
        title: '「咗」= 了（完成時態）',
        rule: '咗 (zo2) = 了，表示動作已完成',
        examples: [
            { zh: '我食咗飯。', jp: 'ngo5 sik6 zo2 faan6.', meaning: '我吃了饭。' },
            { zh: '佢去咗香港。', jp: 'keoi5 heoi3 zo2 hoeng1 gong2.', meaning: '他去了香港。' }
        ]
    },
    {
        title: '「緊」= 着（進行時態）',
        rule: '緊 (gan2) = 着，表示動作正在進行',
        examples: [
            { zh: '佢食緊飯。', jp: 'keoi5 sik6 gan2 faan6.', meaning: '他正在吃饭。' },
            { zh: '落緊雨。', jp: 'lok6 gan2 jyu5.', meaning: '正在下雨。' }
        ]
    },
    {
        title: '「過」= 過（經驗時態）',
        rule: '過 (gwo3) = 过，表示曾經做過某事',
        examples: [
            { zh: '我去過香港。', jp: 'ngo5 heoi3 gwo3 hoeng1 gong2.', meaning: '我去过香港。' },
            { zh: '我冇試過。', jp: 'ngo5 mou5 si3 gwo3.', meaning: '我没试过。' }
        ]
    },
    {
        title: '「先」= 先',
        rule: '先 (sin1) 放在動詞後面',
        examples: [
            { zh: '你食先。', jp: 'nei5 sik6 sin1.', meaning: '你先吃。' },
            { zh: '換衫先！', jp: 'wun6 saam1 sin1!', meaning: '先换衣服！' }
        ]
    },
    {
        title: '「得」= 可以/能',
        rule: '得 (dak1) = 可以、能',
        examples: [
            { zh: '得唔得？', jp: 'dak1 m4 dak1?', meaning: '可以吗？' },
            { zh: '唔得！', jp: 'm4 dak1!', meaning: '不行！' }
        ]
    },
    {
        title: '否定詞：唔、冇、未、咪',
        rule: '粵語有四個常用否定詞',
        examples: [
            { zh: '唔係/唔好/唔得', jp: 'm4 hai6 / m4 hou2 / m4 dak1', meaning: '唔 = 不' },
            { zh: '冇錢/冇問題', jp: 'mou5 cin2 / mou5 man6 tai4', meaning: '冇 = 沒有' },
            { zh: '未食/未做完', jp: 'mei6 sik6 / mei6 zou6 jyun4', meaning: '未 = 還沒' },
            { zh: '咪嘈/咪走', jp: 'mai5 cou4 / mai5 zau2', meaning: '咪 = 不要' }
        ]
    },
    {
        title: '語尾助詞：啦、喎、咩、㗎',
        rule: '語尾助詞改變句子語氣',
        examples: [
            { zh: '好啦！走啦！', jp: 'hou2 laa1! zau2 laa1!', meaning: '啦 = 催促、同意' },
            { zh: '係咩？', jp: 'hai6 me1?', meaning: '咩 = 疑問、質疑' },
            { zh: '係㗎！', jp: 'hai6 gaa4!', meaning: '㗎 = 強調肯定' }
        ]
    }
];

// ===== 聽力訓練 =====
const LISTENING_EXERCISES = [
    { title: '打招呼', audioText: '早晨！你好嗎？', jyutping: 'zou2 san4! nei5 hou2 maa1?', question: '呢個人講乜嘢？', options: ['早晨', '拜拜', '晚安'], correct: 0 },
    { title: '食飯', audioText: '你食咗飯未？', jyutping: 'nei5 sik6 zo2 faan6 mei6?', question: '佢問乜嘢？', options: ['你去咗邊度？', '你食咗飯未？', '你返咗屋企未？'], correct: 1 },
    { title: '買嘢', audioText: '呢個幾多錢？', jyutping: 'nei1 go3 gei2 do1 cin2?', question: '佢想知乜嘢？', options: ['邊度有得買？', '呢個幾多錢？', '可唔可以平啲？'], correct: 1 },
    { title: '搭車', audioText: '去中環點樣搭？', jyutping: 'heoi3 zung1 waan4 dim2 joeng2 daap3?', question: '佢想知乜嘢？', options: ['中環幾遠？', '去中環點樣搭？', '中環有幾多個站？'], correct: 1 },
    { title: '天氣', audioText: '今日好凍，記得多着件衫。', jyutping: 'gam1 jat6 hou2 dung3, gei3 dak1 do1 zoek3 gin6 saam1.', question: '佢提醒你乜嘢？', options: ['帶遮', '多着衫', '帶口罩'], correct: 1 },
    { title: '問路', audioText: '唔好意思，洗手間喺邊度？', jyutping: 'm4 hou2 ji3 si1, sai2 sau2 gaan1 hai2 bin1 dou6?', question: '佢想搵乜嘢？', options: ['便利店', '洗手間', '地鐵站'], correct: 1 },
    { title: '埋單', audioText: '唔該埋單，用八達通。', jyutping: 'm4 goi1 maai4 daan1, jung6 baat3 daat6 tung1.', question: '佢想做乜嘢？', options: ['叫外賣', '埋單', '訂枱'], correct: 1 },
    { title: '打招呼', audioText: '好耐冇見，最近點呀？', jyutping: 'hou2 noi6 mou5 gin3, zeoi3 gan6 dim2 aa3?', question: '佢問乜嘢？', options: ['你叫乜嘢名？', '最近點呀？', '你幾歲？'], correct: 1 }
];

// ===== AI對話場景 =====
const AI_SCENARIOS = [
    { id: 'cafe', name: '☕ 咖啡店', desc: '喺咖啡店order嘢飲', systemPrompt: '你係一個咖啡店嘅店員。用粵語同客人講嘢。' },
    { id: 'friend', name: '👫 傾偈', desc: '同朋友吹水', systemPrompt: '你係一個香港朋友。用粵語吹水。' },
    { id: 'work', name: '💼 辦公室', desc: '同同事傾工作', systemPrompt: '你係一個香港同事。用粵語傾工作。' },
    { id: 'shop', name: '🛍 買衫', desc: '喺服裝店買衫', systemPrompt: '你係服裝店sales。用粵語招呼客人。' },
    { id: 'school', name: '🏫 學校溝通', desc: '同老師傾小朋友', systemPrompt: '你係一個香港小學嘅班主任。一個家長嚟問佢小朋友嘅學習情況。用粵語同佢傾。' },
    { id: 'admission', name: '📝 插班報名', desc: '查詢學校報名', systemPrompt: '你係一個香港學校嘅行政人員。一個家長嚟問插班報名嘅事。用粵語同佢傾。' },
    { id: 'university', name: '🎓 大學諮詢', desc: '查詢碩士課程', systemPrompt: '你係香港城市大學招生辦嘅職員。一個有意申請碩士課程嘅人嚟查詢。用粵語同佢傾。' },
    { id: 'clinic', name: '🏥 睇醫生', desc: '帶小朋友睇醫生', systemPrompt: '你係一個香港診所嘅醫生。一個媽咪帶小朋友嚟睇病。用粵語問診。' },
    { id: 'flat', name: '🏠 租樓', desc: '問吓租盤', systemPrompt: '你係地產agent。用粵語講租盤。' }
];

// ===== 閃卡卡組 =====
const FLASHCARD_DECKS = [
    { id: 'greeting', name: '打招呼', icon: '👋', cards: [
        { front: '你好', back: 'nei5 hou2', en: 'Hello', meaning: '你好' },
        { front: '早晨', back: 'zou2 san4', en: 'Good morning', meaning: '早上好' },
        { front: '拜拜', back: 'baai1 baai3', en: 'Bye bye', meaning: '拜拜' },
        { front: '多謝', back: 'do1 ze6', en: 'Thank you', meaning: '谢谢' },
        { front: '唔該', back: 'm4 goi1', en: 'Please / Excuse me', meaning: '请/不好意思' },
        { front: '對唔住', back: 'deoi3 m4 zyu6', en: 'Sorry', meaning: '对不起' },
        { front: '好耐冇見', back: 'hou2 noi6 mou5 gin3', en: 'Long time no see', meaning: '好久不见' },
        { front: '你好嗎', back: 'nei5 hou2 maa1', en: 'How are you?', meaning: '你好吗' },
        { front: '我好好', back: 'ngo5 hou2 hou2', en: "I'm great", meaning: '我很好' },
        { front: '你叫乜名', back: 'nei5 giu3 mat1 meng2', en: 'What is your name?', meaning: '你叫什么名字' },
        { front: '我叫⋯⋯', back: 'ngo5 giu3...', en: 'My name is...', meaning: '我叫⋯⋯' },
        { front: '好高興見到你', back: 'hou2 gou1 hing1 gin3 dou2 nei5', en: 'Nice to meet you', meaning: '很高兴见到你' },
        { front: '一路順風', back: 'jat1 lou6 seon6 fung1', en: 'Safe travels', meaning: '一路顺风' },
        { front: '身體健康', back: 'san1 tai2 gin6 hong1', en: 'Stay healthy', meaning: '身体健康' },
        { front: '恭喜發財', back: 'gung1 hei2 faat3 coi4', en: 'Happy New Year / Prosperity', meaning: '恭喜发财' },
    ]},
    { id: 'dining', name: '食飯', icon: '🍜', cards: [
        { front: '食飯', back: 'sik6 faan6', en: 'Eat (a meal)', meaning: '吃饭' },
        { front: '飲茶', back: 'jam2 caa4', en: 'Drink tea / Yum cha', meaning: '喝茶' },
        { front: '埋單', back: 'maai4 daan1', en: 'Bill please', meaning: '结账' },
        { front: '好食', back: 'hou2 sik6', en: 'Delicious', meaning: '好吃' },
        { front: '肚餓', back: 'tou5 ngo6', en: 'Hungry', meaning: '饿' },
        { front: '口渴', back: 'hau2 hot3', en: 'Thirsty', meaning: '口渴' },
        { front: '凍飲', back: 'dung3 jam2', en: 'Cold drink', meaning: '冷饮' },
        { front: '熱飲', back: 'jit6 jam2', en: 'Hot drink', meaning: '热饮' },
        { front: '白飯', back: 'baak6 faan6', en: 'White rice', meaning: '白米饭' },
        { front: '炒飯', back: 'caau2 faan6', en: 'Fried rice', meaning: '炒饭' },
        { front: '雲吞麵', back: 'wan4 tan1 min6', en: 'Wonton noodles', meaning: '馄饨面' },
        { front: '叉燒', back: 'caa1 siu1', en: 'Char siu / BBQ pork', meaning: '叉烧' },
        { front: '燒賣', back: 'siu1 maai2', en: 'Siu mai', meaning: '烧卖' },
        { front: '蝦餃', back: 'ha1 gaau2', en: 'Har gow / Shrimp dumpling', meaning: '虾饺' },
        { front: '菠蘿包', back: 'bo1 lo4 baau1', en: 'Pineapple bun', meaning: '菠萝包' },
        { front: '奶茶', back: 'naai5 caa4', en: 'Milk tea', meaning: '奶茶' },
        { front: '檸檬茶', back: 'ning4 mung4 caa4', en: 'Lemon tea', meaning: '柠檬茶' },
        { front: '一個餐', back: 'jat1 go3 caan1', en: 'A set meal', meaning: '一份套餐' },
        { front: '加底', back: 'gaa1 dai2', en: 'Add noodles (extra)', meaning: '加面' },
        { front: '走冰', back: 'zau2 bing1', en: 'No ice', meaning: '不要冰' },
        { front: '走甜', back: 'zau2 tim4', en: 'No sugar', meaning: '不要糖' },
        { front: '外賣', back: 'ngoi6 maai6', en: 'Takeaway', meaning: '外卖' },
    ]},
    { id: 'shopping', name: '買嘢', icon: '🛒', cards: [
        { front: '幾多錢', back: 'gei2 do1 cin2', en: 'How much?', meaning: '多少钱' },
        { front: '平啲', back: 'peng4 di1', en: 'Cheaper', meaning: '便宜点' },
        { front: '貴', back: 'gwai3', en: 'Expensive', meaning: '贵' },
        { front: '八達通', back: 'baat3 daat6 tung1', en: 'Octopus card', meaning: '八达通' },
        { front: '我想買⋯⋯', back: 'ngo5 soeng2 maai5...', en: 'I want to buy...', meaning: '我想买⋯⋯' },
        { front: '有冇⋯⋯', back: 'jau5 mou5...', en: 'Do you have...?', meaning: '有没有⋯⋯' },
        { front: '太貴', back: 'taai3 gwai3', en: 'Too expensive', meaning: '太贵' },
        { front: '有冇優惠', back: 'jau5 mou5 jau1 wai6', en: 'Any discounts?', meaning: '有没有优惠' },
        { front: '試吓', back: 'si3 haa2', en: 'Try it', meaning: '试试' },
        { front: '要呢個', back: 'jiu3 ni1 go3', en: 'I want this one', meaning: '要这个' },
        { front: '唔要', back: 'm4 jiu3', en: "Don't want", meaning: '不要' },
        { front: '大碼', back: 'daai6 maa5', en: 'Large size', meaning: '大码' },
        { front: '細碼', back: 'sai3 maa5', en: 'Small size', meaning: '小码' },
        { front: '收銀台', back: 'sau1 ngan4 toi4', en: 'Cashier', meaning: '收银台' },
        { front: '可唔可以碌卡', back: 'ho2 m4 ho2 ji5 luk1 kaat1', en: 'Can I pay by card?', meaning: '可以刷卡吗' },
        { front: '現金', back: 'jin6 gam1', en: 'Cash', meaning: '现金' },
    ]},
    { id: 'transport', name: '交通', icon: '🚇', cards: [
        { front: '搭地鐵', back: 'daap3 dei6 tit3', en: 'Take the MTR', meaning: '坐地铁' },
        { front: '搭巴士', back: 'daap3 baa1 si2', en: 'Take the bus', meaning: '坐公交' },
        { front: '搭的士', back: 'daap3 dik1 si2', en: 'Take a taxi', meaning: '打的' },
        { front: '落車', back: 'lok6 ce1', en: 'Get off', meaning: '下车' },
        { front: '蕩失路', back: 'tong6 sat1 lou6', en: 'Lost', meaning: '迷路' },
        { front: '去邊度', back: 'heoi3 bin1 dou6', en: 'Where to?', meaning: '去哪里' },
        { front: '轉車', back: 'zyun2 ce1', en: 'Transfer', meaning: '换乘' },
        { front: '出口', back: 'ceot1 hau2', en: 'Exit', meaning: '出口' },
        { front: '入口', back: 'jap6 hau2', en: 'Entrance', meaning: '入口' },
        { front: '月台', back: 'jyut6 toi4', en: 'Platform', meaning: '站台' },
        { front: '幾耐到', back: 'gei2 noi6 dou3', en: 'How long to arrive?', meaning: '多久到' },
        { front: '唔好意思，請問⋯⋯', back: 'm4 ho2 ji3 si1, cing2 man6...', en: 'Excuse me, may I ask...', meaning: '不好意思，请问⋯⋯' },
        { front: '行路去', back: 'haang4 lou6 heoi3', en: 'Walk there', meaning: '走路去' },
        { front: '紅磡站', back: 'hung4 ham3 zaam6', en: 'Hung Hom Station', meaning: '红磡站' },
        { front: '尖沙咀', back: 'zim1 saa1 zeoi2', en: 'Tsim Sha Tsui', meaning: '尖沙咀' },
        { front: '中環', back: 'zung1 waan4', en: 'Central', meaning: '中环' },
        { front: '銅鑼灣', back: 'tung4 lo4 waan1', en: 'Causeway Bay', meaning: '铜锣湾' },
    ]},
    { id: 'feelings', name: '感情', icon: '😊', cards: [
        { front: '開心', back: 'hoi1 sam1', en: 'Happy', meaning: '开心' },
        { front: '嬲', back: 'nau1', en: 'Angry', meaning: '生气' },
        { front: '攰', back: 'gui6', en: 'Tired', meaning: '累' },
        { front: '鍾意', back: 'zung1 ji3', en: 'Like / Love', meaning: '喜欢' },
        { front: '唔鍾意', back: 'm4 zung1 ji3', en: "Don't like", meaning: '不喜欢' },
        { front: '驚', back: 'geng1', en: 'Scared', meaning: '害怕' },
        { front: '擔心', back: 'daam1 sam1', en: 'Worried', meaning: '担心' },
        { front: '冇問題', back: 'mou5 man6 tai4', en: 'No problem', meaning: '没问题' },
        { front: '唔得', back: 'm4 dak1', en: "Can't / Not allowed", meaning: '不行' },
        { front: '好耐', back: 'hou2 noi6', en: 'Long time', meaning: '很久' },
        { front: '辛苦', back: 'san1 fu2', en: 'Hard / Exhausting', meaning: '辛苦' },
        { front: '舒服', back: 'syu1 fuk6', en: 'Comfortable', meaning: '舒服' },
        { front: '心急', back: 'sam1 gap1', en: 'Anxious / Impatient', meaning: '着急' },
        { front: '得㗎啦', back: 'dak1 gaa4 laa1', en: "It'll work / It's fine", meaning: '没问题的' },
    ]},
    { id: 'numbers', name: '數字', icon: '🔢', cards: [
        { front: '一', back: 'jat1', en: 'One', meaning: '一' },
        { front: '二', back: 'ji6', en: 'Two', meaning: '二' },
        { front: '三', back: 'saam1', en: 'Three', meaning: '三' },
        { front: '四', back: 'sei3', en: 'Four', meaning: '四' },
        { front: '五', back: 'ng5', en: 'Five', meaning: '五' },
        { front: '六', back: 'luk6', en: 'Six', meaning: '六' },
        { front: '七', back: 'cat1', en: 'Seven', meaning: '七' },
        { front: '八', back: 'baat3', en: 'Eight', meaning: '八' },
        { front: '九', back: 'gau2', en: 'Nine', meaning: '九' },
        { front: '十', back: 'sap6', en: 'Ten', meaning: '十' },
        { front: '二十', back: 'ji6 sap6', en: 'Twenty', meaning: '二十' },
        { front: '一百', back: 'jat1 baak3', en: 'One hundred', meaning: '一百' },
        { front: '一千', back: 'jat1 cin1', en: 'One thousand', meaning: '一千' },
        { front: '一萬', back: 'jat1 maan6', en: 'Ten thousand', meaning: '一万' },
    ]},
    { id: 'time', name: '時間', icon: '⏰', cards: [
        { front: '今日', back: 'gam1 jat6', en: 'Today', meaning: '今天' },
        { front: '聽日', back: 'ting1 jat6', en: 'Tomorrow', meaning: '明天' },
        { front: '尋日', back: 'cam4 jat6', en: 'Yesterday', meaning: '昨天' },
        { front: '而家', back: 'ji4 gaa1', en: 'Now', meaning: '现在' },
        { front: '朝早', back: 'ziu1 zou2', en: 'Morning', meaning: '早上' },
        { front: '晏晝', back: 'aan3 zau3', en: 'Noon / Afternoon', meaning: '中午' },
        { front: '夜晚', back: 'je6 maan5', en: 'Night', meaning: '晚上' },
        { front: '幾點', back: 'gei2 dim2', en: 'What time?', meaning: '几点' },
        { front: '幾時', back: 'gei2 si4', en: 'When?', meaning: '什么时候' },
        { front: '返工', back: 'faan1 gung1', en: 'Go to work', meaning: '上班' },
        { front: '放工', back: 'fong3 gung1', en: 'Get off work', meaning: '下班' },
        { front: '放假', back: 'fong3 gaa3', en: 'Holiday', meaning: '放假' },
        { front: '星期一', back: 'sing1 kei1 jat1', en: 'Monday', meaning: '星期一' },
        { front: '星期六', back: 'sing1 kei1 luk6', en: 'Saturday', meaning: '星期六' },
        { front: '禮拜日', back: 'lai5 baai3 jat6', en: 'Sunday', meaning: '周日' },
    ]},
    { id: 'place', name: '地點', icon: '📍', cards: [
        { front: '屋企', back: 'uk1 kei2', en: 'Home', meaning: '家' },
        { front: '學校', back: 'hok6 haau6', en: 'School', meaning: '学校' },
        { front: '公司', back: 'gung1 si1', en: 'Company / Office', meaning: '公司' },
        { front: '醫院', back: 'ji1 jyun2', en: 'Hospital', meaning: '医院' },
        { front: '街市', back: 'gaai1 si5', en: 'Wet market', meaning: '菜市场' },
        { front: '超市', back: 'ciu1 si5', en: 'Supermarket', meaning: '超市' },
        { front: '圖書館', back: 'tou4 syu1 gun2', en: 'Library', meaning: '图书馆' },
        { front: '公園', back: 'gung1 jyun2', en: 'Park', meaning: '公园' },
        { front: '洗手間', back: 'sai2 sau2 gaan1', en: 'Toilet', meaning: '洗手间' },
        { front: '機場', back: 'gei1 coeng4', en: 'Airport', meaning: '机场' },
        { front: '酒店', back: 'zau2 dim3', en: 'Hotel', meaning: '酒店' },
        { front: '銀行', back: 'ngan4 hong4', en: 'Bank', meaning: '银行' },
        { front: '郵局', back: 'jau4 guk6', en: 'Post office', meaning: '邮局' },
    ]},
    { id: 'weather', name: '天氣', icon: '🌦️', cards: [
        { front: '天氣', back: 'tin1 hei3', en: 'Weather', meaning: '天气' },
        { front: '落雨', back: 'lok6 jyu5', en: 'Raining', meaning: '下雨' },
        { front: '好熱', back: 'hou2 jit6', en: 'Very hot', meaning: '很热' },
        { front: '好凍', back: 'hou2 dung3', en: 'Very cold', meaning: '很冷' },
        { front: '凍親', back: 'dung3 can1', en: 'Caught a cold', meaning: '着凉' },
        { front: '打風', back: 'daa2 fung1', en: 'Typhoon', meaning: '台风' },
        { front: '濕', back: 'sap1', en: 'Wet / Humid', meaning: '潮湿' },
        { front: '乾', back: 'gon1', en: 'Dry', meaning: '干燥' },
        { front: '帶遮', back: 'daai3 ze1', en: 'Bring umbrella', meaning: '带伞' },
    ]},
    { id: 'health', name: '健康', icon: '🏥', cards: [
        { front: '睇醫生', back: 'tai2 ji1 sang1', en: 'See a doctor', meaning: '看医生' },
        { front: '頭痛', back: 'tau4 tung3', en: 'Headache', meaning: '头疼' },
        { front: '肚痛', back: 'tou5 tung3', en: 'Stomachache', meaning: '肚子疼' },
        { front: '發燒', back: 'faat3 siu1', en: 'Fever', meaning: '发烧' },
        { front: '咳', back: 'kat1', en: 'Cough', meaning: '咳嗽' },
        { front: '食藥', back: 'sik6 joek6', en: 'Take medicine', meaning: '吃药' },
        { front: '好返', back: 'hou2 faan1', en: 'Recovered', meaning: '好了' },
        { front: '瞓覺', back: 'fan3 gaau3', en: 'Sleep', meaning: '睡觉' },
        { front: '瞓唔着', back: 'fan3 m4 zoek6', en: "Can't sleep", meaning: '睡不着' },
        { front: '好眼瞓', back: 'hou2 ngaan5 fan3', en: 'Sleepy', meaning: '很困' },
    ]},
    { id: 'workplace', name: '職場', icon: '💼', cards: [
        { front: '開會', back: 'hoi1 wui2', en: 'Meeting', meaning: '开会' },
        { front: '返工', back: 'faan1 gung1', en: 'Go to work', meaning: '上班' },
        { front: '放工', back: 'fong3 gung1', en: 'Off work', meaning: '下班' },
        { front: '加班', back: 'gaa1 baan1', en: 'Overtime', meaning: '加班' },
        { front: '開工', back: 'hoi1 gung1', en: 'Start working', meaning: '开工' },
        { front: '收工', back: 'sau1 gung1', en: 'Finish work', meaning: '收工' },
        { front: '老細', back: 'lou5 sai2', en: 'Boss', meaning: '老板' },
        { front: '同事', back: 'tung4 si6', en: 'Colleague', meaning: '同事' },
        { front: '請假', back: 'cing2 gaa3', en: 'Take leave', meaning: '请假' },
        { front: '得唔得', back: 'dak1 m4 dak1', en: 'Is it okay?', meaning: '行不行' },
        { front: '搞掂', back: 'gaau2 dim6', en: 'Done / Sorted', meaning: '搞定了' },
        { front: '趕唔切', back: 'gon2 m4 cit3', en: "Can't make it in time", meaning: '来不及' },
    ]},
    { id: 'directions', name: '方位', icon: '🧭', cards: [
        { front: '呢度', back: 'ni1 dou6', en: 'Here', meaning: '这里' },
        { front: '嗰度', back: 'go2 dou6', en: 'There', meaning: '那里' },
        { front: '邊度', back: 'bin1 dou6', en: 'Where?', meaning: '哪里' },
        { front: '前面', back: 'cin4 min6', en: 'Front', meaning: '前面' },
        { front: '後面', back: 'hau6 min6', en: 'Behind', meaning: '后面' },
        { front: '左邊', back: 'zo2 bin1', en: 'Left', meaning: '左边' },
        { front: '右邊', back: 'jau6 bin1', en: 'Right', meaning: '右边' },
        { front: '上面', back: 'soeng6 min6', en: 'Above / Upstairs', meaning: '上面' },
        { front: '下面', back: 'haa6 min6', en: 'Below / Downstairs', meaning: '下面' },
        { front: '隔籬', back: 'gaak3 lei4', en: 'Next door / Beside', meaning: '隔壁' },
        { front: '轉角', back: 'zyun2 gok3', en: 'Corner', meaning: '拐角' },
    ]},
    { id: 'family', name: '家庭', icon: '👨‍👩‍👧‍👦', cards: [
        { front: '爸爸', back: 'baa1 baa1', en: 'Dad', meaning: '爸爸' },
        { front: '媽咪', back: 'maa1 mi4', en: 'Mom', meaning: '妈妈' },
        { front: '仔', back: 'zai2', en: 'Son', meaning: '儿子' },
        { front: '女', back: 'neoi5', en: 'Daughter', meaning: '女儿' },
        { front: '阿哥', back: 'aa3 go1', en: 'Older brother', meaning: '哥哥' },
        { front: '細佬', back: 'sai3 lou2', en: 'Younger brother', meaning: '弟弟' },
        { front: '家姐', back: 'gaa1 ze2', en: 'Older sister', meaning: '姐姐' },
        { front: '妹妹', back: 'mui4 mui2', en: 'Younger sister', meaning: '妹妹' },
        { front: '阿爺', back: 'aa3 je4', en: 'Grandpa (paternal)', meaning: '爷爷' },
        { front: '嫲嫲', back: 'maa4 maa4', en: 'Grandma (paternal)', meaning: '奶奶' },
        { front: '公公', back: 'gung1 gung1', en: 'Grandpa (maternal)', meaning: '外公' },
        { front: '婆婆', back: 'po4 po4', en: 'Grandma (maternal)', meaning: '外婆' },
    ]},
    { id: 'slang', name: '口語/俗語', icon: '🔥', cards: [
        { front: '係咩', back: 'hai6 me1', en: 'Really? / Is it?', meaning: '是吗' },
        { front: '冇錯', back: 'mou5 co3', en: "That's right", meaning: '没错' },
        { front: '梗係', back: 'gang2 hai6', en: 'Of course', meaning: '当然' },
        { front: '唔通', back: 'm4 tung1', en: 'Could it be...?', meaning: '难道' },
        { front: '點解', back: 'dim2 gaai2', en: 'Why?', meaning: '为什么' },
        { front: '點算', back: 'dim2 syun3', en: 'What to do?', meaning: '怎么办' },
        { front: '攪乜鬼', back: 'gaau2 mat1 gwai2', en: 'What the heck?', meaning: '搞什么鬼' },
        { front: '吹水', back: 'ceoi1 seoi2', en: 'Chat / Shoot the breeze', meaning: '吹牛' },
        { front: '食嘢', back: 'sik6 je5', en: 'Eat something', meaning: '吃东西' },
        { front: '飲嘢', back: 'jam2 je5', en: 'Drink something', meaning: '喝东西' },
        { front: '買嘢', back: 'maai5 je5', en: 'Buy things', meaning: '买东西' },
        { front: '去玩', back: 'heoi3 waan2', en: 'Go have fun', meaning: '去玩' },
        { front: '唔使客氣', back: 'm4 sai2 haak3 hei3', en: "You're welcome / No need to be polite", meaning: '不用客气' },
        { front: '慢慢嚟', back: 'maan6 maan6 lei4', en: 'Take it slow', meaning: '慢慢来' },
        { front: '行快啲', back: 'haang4 faai3 di1', en: 'Walk faster', meaning: '走快点' },
        { front: '做咩', back: 'zou6 me1', en: 'What are you doing?', meaning: '干嘛' },
        { front: '唔緊要', back: 'm4 gan2 jiu3', en: "It doesn't matter", meaning: '没关系' },
        { front: '有咩所謂', back: 'jau5 me1 so2 wai6', en: "Whatever / Who cares", meaning: '有什么所谓' },
    ]},
    { id: 'hklife', name: '香港生活', icon: '🏙️', cards: [
        { front: '茶餐廳', back: 'caa4 caan1 teng1', en: 'Cha chaan teng / HK diner', meaning: '茶餐厅' },
        { front: '街市', back: 'gaai1 si5', en: 'Wet market', meaning: '菜市场' },
        { front: '便利店', back: 'bin6 lei6 dim3', en: 'Convenience store', meaning: '便利店' },
        { front: '屋苑', back: 'uk1 jyun2', en: 'Housing estate', meaning: '小区' },
        { front: '管理處', back: 'gun2 lei5 cyu3', en: 'Property management', meaning: '管理处' },
        { front: '小巴', back: 'siu2 baa1', en: 'Minibus', meaning: '小巴' },
        { front: '渡海小輪', back: 'dou6 hoi2 siu2 syun4', en: 'Star Ferry', meaning: '天星小轮' },
        { front: '山頂', back: 'saan1 deng2', en: 'The Peak', meaning: '太平山顶' },
        { front: '維港', back: 'wai4 gong2', en: 'Victoria Harbour', meaning: '维多利亚港' },
        { front: '煲劇', back: 'bou1 kek6', en: 'Binge-watch TV', meaning: '追剧' },
        { front: '瞓晏覺', back: 'fan3 aan3 gaau3', en: 'Take a nap', meaning: '睡午觉' },
        { front: '飲杯', back: 'jam2 bui1', en: "Let's have a drink", meaning: '喝一杯' },
    ]},
];