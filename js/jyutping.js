// ========== 粵拼字典 ==========
const JYUTPING_DICT = {
    // 常用字
    '我': 'ngo5', '你': 'nei5', '佢': 'keoi5', '我哋': 'ngo5 dei6', '你哋': 'nei5 dei6', '佢哋': 'keoi5 dei6',
    '佢哋': 'keoi5 dei6', '呢': 'nei1', '嗰': 'go2', '呢個': 'nei1 go3', '嗰個': 'go2 go3',
    '呢度': 'nei1 dou6', '嗰度': 'go2 dou6', '邊度': 'bin1 dou6', '乜嘢': 'mat1 je5', '點解': 'dim2 gaai2',
    '點樣': 'dim2 joeng2', '幾時': 'gei2 si4', '幾多': 'gei2 do1', '做乜': 'zou6 mat1', '做咩': 'zou6 me1',
    '係': 'hai6', '唔係': 'm4 hai6', '有': 'jau5', '冇': 'mou5', '喺': 'hai2', '唔喺': 'm4 hai2',
    '去': 'heoi3', '嚟': 'lai4', '返': 'faan1', '走': 'zau2', '食': 'sik6', '飲': 'jam2',
    '睇': 'tai2', '聽': 'teng1', '講': 'gong2', '話': 'waa6', '問': 'man6', '答': 'daap3',
    '買': 'maai5', '賣': 'maai6', '攞': 'lo2', '俾': 'bei2', '拎': 'ling1', '揾': 'wan2',
    '做': 'zou6', '返工': 'faan1 gung1', '放工': 'fong3 gung1', '讀書': 'duk6 syu1', '返學': 'faan1 hok6',
    '一': 'jat1', '二': 'ji6', '三': 'saam1', '四': 'sei3', '五': 'ng5', '六': 'luk6',
    '七': 'cat1', '八': 'baat3', '九': 'gau2', '十': 'sap6', '百': 'baak3', '千': 'cin1',
    '萬': 'maan6', '億': 'jik1',
    '人': 'jan4', '男': 'naam4', '女': 'neoi5', '細路': 'sai3 lou6', '細路仔': 'sai3 lou5 zai2',
    '細路女': 'sai3 lou5 neoi5', '先生': 'sin1 saang1', '小姐': 'siu2 ze2', '朋友': 'pang4 jau5',
    '大佬': 'daai6 lou2', '細佬': 'sai3 lou2', '家姐': 'gaa1 ze1', '阿妹': 'aa3 mui4',
    '爸爸': 'baa4 baa1', '媽媽': 'maa4 maa1', '阿爸': 'aa3 baa4', '阿媽': 'aa3 maa1',
    '天': 'tin1', '日': 'jat6', '月': 'jyut6', '年': 'nin4', '時': 'si4', '分': 'fan1',
    '鐘': 'zung1', '今日': 'gam1 jat6', '聽日': 'ting1 jat6', '尋日': 'cam4 jat6',
    '朝早': 'ziu1 zou2', '晏晝': 'aan3 zau3', '夜晚': 'je6 maan5', '食晏': 'sik6 aan3',
    '食早餐': 'sik6 zou2 caan1', '食午餐': 'sik6 ng5 caan1', '食晚飯': 'sik6 maan5 faan6',
    '好': 'hou2', '唔好': 'm4 hou2', '大': 'daai6', '細': 'sai3', '多': 'do1', '少': 'siu2',
    '高': 'gou1', '矮': 'ai2', '長': 'coeng4', '短': 'dyun2', '闊': 'fut3', '窄': 'zaak3',
    '快': 'faai3', '慢': 'maan6', '早': 'zou2', '夜': 'je6', '新': 'san1', '舊': 'gau6',
    '靚': 'leng3', '醜': 'cau2', '貴': 'gwai3', '平': 'peng4', '易': 'ji6', '難': 'naan4',
    '遠': 'jyun5', '近': 'kan5', '熱': 'jit6', '凍': 'dung3', '凍': 'dung1',
    '天氣': 'tin1 hei3', '晴天': 'cing4 tin1', '落雨': 'lok6 jyu5', '行雷': 'haang4 leoi4',
    '閃電': 'sim2 din6', '風': 'fung1', '打風': 'daa2 fung1',
    '食': 'sik6', '飯': 'faan6', '麵': 'min6', '粥': 'zuk1', '湯': 'tong1', '水': 'seoi2',
    '茶': 'caa4', '咖啡': 'gaa3 fe1', '奶': 'naai5', '糖': 'tong4', '鹽': 'jim4',
    '豬肉': 'zyu1 juk6', '牛肉': 'ngau4 juk6', '雞肉': 'gai1 juk6', '魚': 'jyu4',
    '菜': 'coi3', '蛋': 'daan2', '生果': 'saang1 gwo2', '蘋果': 'ping4 gwo2',
    '橙': 'caang2', '蕉': 'ziu1', '西瓜': 'sai1 gwaa1',
    '巴士': 'baa1 si2', '地鐵': 'dei6 tit3', '的士': 'dik1 si2', '小巴': 'siu2 baa1',
    '火車': 'fo2 ce1', '飛機': 'fei1 gei1', '船': 'syun4', '單車': 'daan1 ce1',
    '屋企': 'uk1 kei2', '學校': 'hok6 haau6', '公司': 'gung1 si1', '舖': 'pou3',
    '醫院': 'ji1 jyun2', '銀行': 'ngan4 hong4', '郵局': 'jau4 guk6', '超級市場': 'ciu1 kap1 si5 coeng4',
    '街': 'gaai1', '路': 'lou6', '橋': 'kiu4', '門': 'mun4', '窗': 'coeng1',
    '枱': 'toi4', '櫈': 'dang3', '床': 'cong4', '書': 'syu1', '筆': 'bat1',
    '紙': 'zi2', '電話': 'din6 waa2', '電腦': 'din6 nou5', '銀包': 'ngan4 baau1',
    '鎖匙': 'so2 si4', '衫': 'saam1', '褲': 'fu3', '裙': 'kwan4', '鞋': 'haai4',
    '帽': 'mou2', '襪': 'mat6', '手錶': 'sau2 biu1', '眼鏡': 'ngaan5 geng3',
    '頭': 'tau4', '面': 'min6', '眼': 'ngaan5', '耳': 'ji5', '鼻': 'bei6',
    '口': 'hau2', '手': 'sau2', '腳': 'goek3', '心': 'sam1', '肚': 'tou5',
    '一': 'jat1', '二': 'ji6', '三': 'saam1', '四': 'sei3', '五': 'ng5',
    '六': 'luk6', '七': 'cat1', '八': 'baat3', '九': 'gau2', '十': 'sap6',
    '咁': 'gam2', '好': 'hou2', '係': 'hai6', '都': 'dou1', '就': 'zau6',
    '會': 'wui5', '可以': 'ho2 ji5', '要': 'jiu3', '想': 'soeng2', '可以': 'ho2 ji5',
    '唔': 'm4', '冇': 'mou5', '未': 'mei6', '咪': 'mai5', '唔使': 'm4 sai2',
    '多謝': 'do1 ze6', '對唔住': 'deoi3 m4 zyu6', '唔該': 'm4 goi1', '唔好意思': 'm4 hou2 ji3 si1',
    '早晨': 'zou2 san4', '早抖': 'zou2 tau2', '拜拜': 'baai1 baai3', '再見': 'zoi3 gin3',
    '你好': 'nei5 hou2', '食咗飯未': 'sik6 zo2 faan6 mei6', '食咗未': 'sik6 zo2 mei6',
    '好耐冇見': 'hou2 noi6 mou5 gin3', '最近點呀': 'zeoi3 gan6 dim2 aa3',
    '幾好': 'gei2 hou2', '麻麻哋': 'maa4 maa4 dei2', '唔錯': 'm4 co3',
    '幫手': 'bong1 sau2', '抵達': 'dai2 daat6', '搭': 'daap3',
    '坐': 'co5', '企': 'kei5', '瞓': 'fan3', '起身': 'hei2 san1',
    '著': 'zoek3', '除': 'ceoi4', '洗': 'sai2', '抹': 'mut3',
    '開': 'hoi1', '關': 'gwaan1', '入': 'jap6', '出': 'ceot1',
    '上': 'soeng5', '落': 'lok6', '左': 'zo2', '右': 'jau6',
    '前': 'cin4', '後': 'hau6', '入面': 'jap6 min6', '出面': 'ceot1 min6',
    '上面': 'soeng5 min6', '下面': 'haa6 min6', '隔籬': 'gaak3 lei4',
    '呢度': 'nei1 dou6', '嗰度': 'go2 dou6', '邊度': 'bin1 dou6', '度': 'dou6',
    '嘅': 'ge3', '嘢': 'je5', '啲': 'di1', '咗': 'zo2', '緊': 'gan2',
    '過': 'gwo3', '住': 'zyu6', '埋': 'maai4', '晒': 'saai3', '得': 'dak1',
    '唔得': 'm4 dak1', '得唔得': 'dak1 m4 dak1', '可唔可以': 'ho2 m4 ho2 ji5',
    '錢': 'cin2', '銀紙': 'ngan4 zi2', '蚊': 'man1', '個': 'go3', '蚊': 'man1',
    '幾多錢': 'gei2 do1 cin2', '平啲': 'peng4 di1', '貴啲': 'gwai3 di1',
    '餐廳': 'caan1 teng1', '酒店': 'zau2 dim3', '房': 'fong2', '洗手間': 'sai2 sau2 gaan1',
    '廁所': 'ci3 so2', '出入口': 'ceot1 jap6 hau2', '收銀': 'sau1 ngan4',
    '老闆': 'lou5 baan2', '同事': 'tung4 si6', '客人': 'haak3 jan4',
    '學生': 'hok6 saang1', '老師': 'lou5 si1', '護士': 'wu6 si6',
    '警察': 'ging2 caat3', '司機': 'si1 gei1', '廚師': 'cyu4 si1'
};

// 词组词典（两个字以上的常用词）
const PHRASE_DICT = {
    '你好': 'nei5 hou2', '多謝': 'do1 ze6', '唔該': 'm4 goi1', '對唔住': 'deoi3 m4 zyu6',
    '早晨': 'zou2 san4', '早抖': 'zou2 tau2', '食咗飯未': 'sik6 zo2 faan6 mei6',
    '好耐冇見': 'hou2 noi6 mou5 gin3', '最近點呀': 'zeoi3 gan6 dim2 aa3',
    '幾好呀': 'gei2 hou2 aa3', '唔好意思': 'm4 hou2 ji3 si1', '唔使客氣': 'm4 sai2 haak3 hei3',
    '冇問題': 'mou5 man6 tai4', '得唔得': 'dak1 m4 dak1', '可唔可以': 'ho2 m4 ho2 ji5',
    '今日天氣': 'gam1 jat6 tin1 hei3', '聽日見': 'ting1 jat6 gin3', '拜拜': 'baai1 baai3',
    '我唔明': 'ngo5 m4 ming4', '可唔可以講多次': 'ho2 m4 ho2 ji5 gong2 do1 ci3',
    '呢個幾多錢': 'nei1 go3 gei2 do1 cin2', '太貴啦': 'taai3 gwai3 laa1',
    '平啲得唔得': 'peng4 di1 dak1 m4 dak1', '我想要': 'ngo5 soeng2 jiu3',
    '洗手間喺邊': 'sai2 sau2 gaan1 hai2 bin1', '幫我攞': 'bong1 ngo5 lo2',
    '我係': 'ngo5 hai6', '你叫乜嘢名': 'nei5 giu2 mat1 je5 meng2',
    '我係來自': 'ngo5 hai6 zi4 lai6', '很高興認識你': 'hou2 gou1 hing3 jing6 sik1 nei5',
    '返工': 'faan1 gung1', '放工': 'fong3 gung1', '搭車': 'daap3 ce1', '搭地鐵': 'daap3 dei6 tit3',
    '搭巴士': 'daap3 baa1 si2', '落雨': 'lok6 jyu5', '行雷': 'haang4 leoi4',
    '食早餐': 'sik6 zou2 caan1', '食晏': 'sik6 aan3', '食晚飯': 'sik6 maan5 faan6',
    '飲茶': 'jam2 caa4', '飲杯嘢': 'jam2 bui1 je5', '食飯': 'sik6 faan6',
    '行街': 'haang4 gaai1', '瞓覺': 'fan3 gaau3', '起身': 'hei2 san1',
    '刷牙': 'caat3 ngaa4', '洗面': 'sai2 min6', '沖涼': 'cung1 loeng4',
    '睇戲': 'tai2 hei3', '聽歌': 'teng1 go1', '睇書': 'tai2 syu1',
    '做運動': 'zou6 wan6 dung6', '打波': 'daa2 bo1', '游水': 'jau4 seoi2',
    '買嘢': 'maai5 je5', '賣嘢': 'maai6 je5', '搵工': 'wan2 gung1',
    '開會': 'hoi1 wui2', '返學': 'faan1 hok6', '放學': 'fong3 hok6',
    '寫字': 'se2 zi6', '睇電視': 'tai2 din6 si6', '玩電話': 'waan2 din6 waa2',
    '瞓着咗': 'fan3 zoek6 zo2', '肚餓': 'tou5 ngo6', '口渴': 'hau2 hot3',
    '好攰': 'hou2 gui6', '好開心': 'hou2 hoi1 sam1', '好嬲': 'hou2 nau1',
    '好驚': 'hou2 geng1', '好悶': 'hou2 mun6', '好凍': 'hou2 dung3',
    '好熱': 'hou2 jit6', '好好食': 'hou2 hou2 sik6', '好靚': 'hou2 leng3',
    '好貴': 'hou2 gwai3', '好平': 'hou2 peng4', '好近': 'hou2 kan5',
    '好遠': 'hou2 jyun5', '好快': 'hou2 faai3', '好慢': 'hou2 maan6',
    '香港': 'hoeng1 gong2', '廣東話': 'gwong2 dung1 waa2', '粵語': 'jyut6 jyu5',
    '普通話': 'pou2 tung1 waa2', '英文': 'jing1 man4', '中文': 'zung1 man4'
};

/**
 * 将中文文本转为粤拼
 */
function toJyutping(text) {
    let result = [];
    let i = 0;
    
    while (i < text.length) {
        // 尝试匹配4字词
        if (i + 3 < text.length) {
            const w4 = text.substring(i, i + 4);
            if (PHRASE_DICT[w4]) {
                result.push(PHRASE_DICT[w4]);
                i += 4;
                continue;
            }
        }
        // 尝试匹配3字词
        if (i + 2 < text.length) {
            const w3 = text.substring(i, i + 3);
            if (PHRASE_DICT[w3]) {
                result.push(PHRASE_DICT[w3]);
                i += 3;
                continue;
            }
        }
        // 尝试匹配2字词
        if (i + 1 < text.length) {
            const w2 = text.substring(i, i + 2);
            if (PHRASE_DICT[w2]) {
                result.push(PHRASE_DICT[w2]);
                i += 2;
                continue;
            }
        }
        // 单字
        const char = text[i];
        if (JYUTPING_DICT[char]) {
            result.push(JYUTPING_DICT[char]);
        } else {
            result.push(char);
        }
        i++;
    }
    
    return result.join(' ');
}

/**
 * 查单个字的粤拼
 */
function lookupChar(char) {
    const jyutping = JYUTPING_DICT[char] || PHRASE_DICT[char];
    return jyutping || null;
}

/**
 * 获取声调数字
 */
function getTone(jyutping) {
    const match = jyutping.match(/(\d)$/);
    return match ? parseInt(match[1]) : 0;
}

/**
 * 声调描述
 */
const TONE_NAMES = {
    1: '阴平 (55)', 2: '阴上 (35)', 3: '阴去 (33)',
    4: '阳平 (21)', 5: '阳上 (23)', 6: '阳去 (22)'
};