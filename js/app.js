// ========== 粵學堂 主邏輯 ==========

// ===== 全局狀態 =====
let currentSection = 'home';
let pronIndex = 0;
let isRecording = false;
let recognition = null;
let karaokeIndex = 0;
let karaokeTimer = null;
let isKaraokeActive = false;
let currentChildCategory = 'abc';

// ===== 初始化 =====
// Init: handle both cases (script runs before or after DOMContentLoaded)
function initApp() {
    initNav();
    loadQuickPhrases();
    loadWorkplaceCategories();
    loadScenarios();
    loadSongs();
    loadKaraokeList();
    loadPronCard();
    loadChildrenCategories();
    loadChildrenContent('abc');
    loadProgress();
    initSpeechRecognition();
    loadVoices();
    loadTones();
    loadGrammar();
    loadFlashcards();
    loadListening();
    loadAIChat();
}

// ===== 導航切換 =====
function initNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            switchSection(item.dataset.section);
        });
    });
}

function switchSection(id) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-section="${id}"]`)?.classList.add('active');
    document.getElementById(id)?.classList.add('active');
    currentSection = id;
}

// ===== 首頁：每日口語 =====
function loadDailyTip() {
    const allPhrases = Object.values(DAILY_PHRASES).flat();
    const today = new Date().getDate();
    const tip = allPhrases[today % allPhrases.length];
    document.getElementById('dailyTip').innerHTML = `
        <div class="tip-line">${tip.zh}</div>
        <div class="tip-jyutping">${tip.jyutping}</div>
        <div class="tip-jyutping" style="margin-top:8px">${tip.meaning || ''}</div>
        <button onclick="speakText('${tip.zh}')" style="margin-top:8px;padding:6px 16px;border:none;background:rgba(255,255,255,0.2);color:#fff;border-radius:16px;cursor:pointer">🔊 聽發音</button>
    `;
}

// ===== 粵拼查詢 =====
function lookupJyutping() {
    const input = document.getElementById('dictInput').value.trim();
    if (!input) return;

    const container = document.getElementById('dictResults');
    container.innerHTML = '';

    for (const char of input) {
        if (char === ' ' || char === '\n') continue;
        const jyutping = lookupChar(char);
        const div = document.createElement('div');
        div.className = 'dict-char';
        div.innerHTML = `
            <div class="char">${char}</div>
            <div class="jyutping">${jyutping || '—'}</div>
            ${jyutping ? `<button onclick="speakText('${char}')" style="margin-top:8px;padding:4px 12px;border:none;background:#6C5CE7;color:#fff;border-radius:12px;cursor:pointer;font-size:12px">🔊</button>` : ''}
        `;
        container.appendChild(div);
    }

    // 同時顯示整句的粵拼
    const fullJyutping = toJyutping(input);
    const fullDiv = document.createElement('div');
    fullDiv.style.cssText = 'width:100%;margin-top:16px;padding:16px;background:#F0F0F0;border-radius:8px;';
    fullDiv.innerHTML = `
        <div style="font-size:14px;color:#636E72;margin-bottom:8px">整句粵拼</div>
        <div style="font-size:20px;color:#6C5CE7;font-weight:bold">${fullJyutping}</div>
        <button onclick="speakText('${input}')" style="margin-top:8px;padding:8px 20px;border:none;background:#6C5CE7;color:#fff;border-radius:16px;cursor:pointer">🔊 聽整句</button>
    `;
    container.appendChild(fullDiv);
}

// 回車查詢
document.getElementById('dictInput')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') lookupJyutping();
});

// ===== 翻譯 =====
// ===== 整段翻譯（普通話→粵語＋英語） =====
async function translateParagraph() {
    const srcText = document.getElementById('srcText').value.trim();
    if (!srcText) return;

    const yueDiv = document.getElementById('yueResult');
    const enDiv = document.getElementById('enResult');
    yueDiv.innerHTML = '<span style="color:#636E72">翻譯中...</span>';
    enDiv.innerHTML = '<span style="color:#636E72">翻譯中...</span>';

    // 粵語翻譯（字典＋語法規則）
    const yue = mandarinToCantonese(srcText);
    const yueJyutping = toJyutping(yue);
    yueDiv.innerHTML = `
        <div style="font-size:20px;margin-bottom:8px">${yue}</div>
        <div style="font-size:13px;color:#6C5CE7">${yueJyutping}</div>
    `;

    // 英語翻譯（MyMemory API，免費無需key）
    try {
        const resp = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(srcText)}&langpair=zh-CN|en-GB`);
        const data = await resp.json();
        const enText = data.responseData?.translatedText || 'Translation unavailable';
        enDiv.innerHTML = `<div style="font-size:20px">${enText}</div>`;
    } catch (e) {
        // API失敗時用本地詞典
        const enLocal = mandarinToEnglish(srcText);
        enDiv.innerHTML = `<div style="font-size:20px">${enLocal}</div><div style="font-size:11px;color:#FD79A8;margin-top:4px">⚠️ 使用本地詞典（API不可用）</div>`;
    }
}

function mandarinToEnglish(text) {
    const dict = {
        '今天': 'today', '天氣': 'weather', '很好': 'very good', '我想': 'I want',
        '去': 'go to', '外面': 'outside', '走走': 'walk around', '吃': 'eat',
        '飯': 'meal', '喝水': 'drink water', '謝謝': 'thank you', '你好': 'hello',
        '再見': 'goodbye', '對不起': 'sorry', '沒關係': "it's okay", '多少錢': 'how much',
        '在': 'at/in', '哪裏': 'where', '什麼': 'what', '怎麼': 'how',
        '為什麼': 'why', '什麼時候': 'when', '可以': 'can/may', '需要': 'need',
        '想要': 'want', '喜歡': 'like', '不喜歡': "don't like", '知道': 'know',
        '不知道': "don't know", '明白': 'understand', '不明白': "don't understand",
        '幫助': 'help', '工作': 'work', '學校': 'school', '家': 'home',
        '醫院': 'hospital', '餐廳': 'restaurant', '商店': 'shop', '地鐵': 'subway',
        '機場': 'airport', '酒店': 'hotel', '洗手間': 'toilet'
    };
    let result = text;
    for (const [zh, en] of Object.entries(dict).sort((a, b) => b[0].length - a[0].length)) {
        result = result.split(zh).join(en);
    }
    return result;
}

function speakSrc() {
    const text = document.getElementById('srcText').value.trim();
    if (text) speakText(text, 'zh-CN');
}
function speakYue() {
    const el = document.querySelector('#yueResult div');
    if (el) speakText(el.textContent);
}
function speakEn() {
    const el = document.querySelector('#enResult div');
    if (el) speakText(el.textContent, 'en-GB');
}

// 快捷例句點擊即翻
function quickTranslate(text) {
    document.getElementById('srcText').value = text;
    translateParagraph();
}

function mandarinToCantonese(text) {
    let result = text;
    // 按長度排序替換（先替換長的短語，避免短匹配截斷長匹配）
    const sorted = Object.entries(MANDARIN_TO_CANTONESE).sort((a, b) => {
        // 先按长度降序，长度一样按key长度降序
        const lenDiff = b[0].length - a[0].length;
        if (lenDiff !== 0) return lenDiff;
        return b[0].length - a[0].length;
    });

    // 用正则做全局替换，避免只替换第一个
    for (const [mandarin, cantonese] of sorted) {
        // 用正则转义特殊字符
        const escaped = mandarin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        result = result.replace(regex, cantonese);
    }
    return result;
}

function englishToCantonese(text) {
    const dict = {
        'hello': '你好', 'thank you': '多謝', 'sorry': '對唔住', 'goodbye': '拜拜',
        'yes': '係', 'no': '唔係', 'how much': '幾多錢', 'where': '邊度',
        'what': '乜嘢', 'when': '幾時', 'why': '點解', 'how': '點樣',
        'eat': '食', 'drink': '飲', 'go': '去', 'come': '嚟',
        'i want': '我想要', 'help': '幫忙', 'water': '水', 'food': '嘢食',
        'good': '好', 'bad': '唔好', 'happy': '開心', 'tired': '攰',
        'today': '今日', 'tomorrow': '聽日', 'yesterday': '尋日',
        'morning': '朝早', 'afternoon': '晏晝', 'evening': '夜晚'
    };
    let result = text.toLowerCase();
    const sorted = Object.entries(dict).sort((a, b) => b[0].length - a[0].length);
    for (const [eng, yue] of sorted) {
        result = result.split(eng).join(yue);
    }
    return result;
}


// ===== 快速短句 =====
function loadQuickPhrases() {
    const container = document.getElementById('quickPhrases');
    if (!container) return;
    container.innerHTML = QUICK_PHRASES.map(p => `
        <div class="quick-phrase" onclick="quickTranslate('${p.zh}')" title="${p.yue} | ${p.jyutping}">
            ${p.zh}
        </div>
    `).join('');
}

// ===== 日常口語 =====
function loadDailyPhrases(categoryId) {
    // 載入分類標籤
    const tabsContainer = document.getElementById('dailyCategories');
    tabsContainer.innerHTML = DAILY_CATEGORIES.map(c => `
        <div class="cat-tab ${c.id === categoryId ? 'active' : ''}" onclick="loadDailyPhrases('${c.id}')">
            ${c.icon} ${c.name}
        </div>
    `).join('');

    // 載入短語
    const container = document.getElementById('dailyPhrases');
    const phrases = DAILY_PHRASES[categoryId] || [];
    container.innerHTML = phrases.map(p => `
        <div class="phrase-card">
            <div>
                <div class="phrase-zh">${p.zh}</div>
                <div class="phrase-jyutping">${p.jyutping}</div>
                <div class="phrase-meaning">${p.meaning}</div>
            </div>
            <div class="phrase-actions">
                <button class="btn-speak" onclick="speakText('${p.zh}')" title="聽發音">🔊</button>
                <button class="btn-bookmark" onclick="this.classList.toggle('bookmarked')" title="收藏">⭐</button>
            </div>
        </div>
    `).join('');
}

// ===== 職場對話 =====
function loadWorkplaceCategories() {
    const tabsContainer = document.getElementById('workplaceCategories');
    tabsContainer.innerHTML = WORKPLACE_CATEGORIES.map(c => `
        <div class="cat-tab ${c.id === 'meeting' ? 'active' : ''}" onclick="loadWorkplaceDialogues('${c.id}')">
            ${c.icon} ${c.name}
        </div>
    `).join('');
    loadWorkplaceDialogues('meeting');
}

function loadWorkplaceDialogues(categoryId) {
    document.querySelectorAll('#workplaceCategories .cat-tab').forEach(t => t.classList.remove('active'));
    event?.target?.classList.add('active');

    const container = document.getElementById('workplaceDialogues');
    const dialogues = WORKPLACE_DIALOGUES[categoryId] || [];
    container.innerHTML = dialogues.map(d => `
        <div class="dialogue-card" onclick="this.querySelector('.dialogue-body').style.display = this.querySelector('.dialogue-body').style.display === 'none' ? 'block' : 'none'">
            <h4>📋 ${d.title}</h4>
            <p>點擊展開對話</p>
            <div class="dialogue-body" style="display:none;margin-top:12px">
                ${d.lines.map(l => `
                    <div style="margin-bottom:10px;padding:10px;background:#F8F9FA;border-radius:8px">
                        ${l.speaker ? `<span style="color:#6C5CE7;font-weight:bold">${l.speaker}：</span>` : ''}
                        <span>${l.zh}</span>
                        <div style="font-size:12px;color:#636E72;margin-top:4px">${l.jyutping}</div>
                        ${l.meaning ? `<div style="font-size:12px;color:#FD79A8;margin-top:2px">${l.meaning}</div>` : ''}
                        <button onclick="event.stopPropagation();speakText('${l.zh}')" style="margin-top:4px;padding:4px 10px;border:none;background:#A29BFE;color:#fff;border-radius:10px;cursor:pointer;font-size:11px">🔊</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ===== 情景對話 =====
function loadScenarios() {
    const container = document.getElementById('scenarioList');
    container.innerHTML = SCENARIOS.map(s => `
        <div class="scenario-card" onclick="startScenario('${s.id}')">
            <div class="scenario-icon">${s.icon}</div>
            <div>
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
            </div>
        </div>
    `).join('');
}

let currentScenario = null;
let scenarioStep = 0;

function startScenario(id) {
    currentScenario = SCENARIOS.find(s => s.id === id);
    scenarioStep = 0;
    document.getElementById('scenarioList').style.display = 'none';
    document.getElementById('dialogueArea').style.display = 'block';
    document.getElementById('dialogueTitle').textContent = currentScenario.title;
    document.getElementById('dialogueMessages').innerHTML = '';
    nextScenarioStep();
}

function nextScenarioStep() {
    if (!currentScenario || scenarioStep >= currentScenario.dialogue.length) {
        addBotMessage('做得好好！👏 呢個情景對話完結啦。想再嚟一次？', '');
        return;
    }

    const step = currentScenario.dialogue[scenarioStep];
    if (step.bot) {
        addBotMessage(step.bot, step.jyutping);
        scenarioStep++;
    }
}

function addBotMessage(text, jyutping) {
    const container = document.getElementById('dialogueMessages');
    const div = document.createElement('div');
    div.className = 'msg msg-bot';
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = `${text}${jyutping ? `<div class="msg-jyutping">${jyutping}</div>` : ''}`;
    const btn = document.createElement('button');
    btn.textContent = '🔊';
    btn.style.cssText = 'margin-top:6px;padding:2px 10px;border:none;background:rgba(99,110,114,0.15);color:#636E72;border-radius:10px;cursor:pointer;font-size:12px';
    btn.addEventListener('click', () => speakText(text));
    bubble.appendChild(btn);
    div.innerHTML = '<div class="msg-avatar">🤖</div>';
    div.appendChild(bubble);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    // 自動播放語音
    speakText(text);
}

function addUserMessage(text) {
    const container = document.getElementById('dialogueMessages');
    const jyutping = toJyutping(text);
    const div = document.createElement('div');
    div.className = 'msg msg-user';
    div.innerHTML = `
        <div class="msg-avatar">你</div>
        <div class="msg-bubble">
            ${text}
            <div class="msg-jyutping">${jyutping}</div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function sendDialogue() {
    const input = document.getElementById('dialogueInput');
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';

    // 檢查是否有期望回答
    if (currentScenario && scenarioStep < currentScenario.dialogue.length) {
        const step = currentScenario.dialogue[scenarioStep];
        if (step.expect) {
            scenarioStep++;
            setTimeout(() => nextScenarioStep(), 500);
        } else {
            scenarioStep++;
            setTimeout(() => nextScenarioStep(), 500);
        }
    } else {
        setTimeout(() => nextScenarioStep(), 500);
    }
}

function speakDialogue() {
    if (!recognition) {
        const SpeechRecognition2 = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition2) {
            alert('你嘅瀏覽器唔支援語音識別，請用Chrome瀏覽器。');
            return;
        }
        initSpeechRecognition();
    }
    if (recognition) {
        // 使用默認onresult（initSpeechRecognition設置的），它已處理情景對話模式
        recognition.onerror = (event) => {
            if (event.error === 'not-allowed') {
                alert('請允許瀏覽器使用麥克風 🎤');
            } else if (event.error === 'service-not-allowed') {
                alert('語音功能需要HTTPS連接。請用本地(http://localhost)或HTTPS地址訪問。');
            } else {
                console.error('語音錯誤:', event.error);
            }
        };
        recognition.start();
        // 按钮变红表示正在听
        const btn = document.querySelector('#dialogueArea .dialogue-input button:last-child');
        if (btn) { btn.style.background = '#FF6B6B'; btn.textContent = '🔴 聽緊...'; }
        recognition.onend = () => {
            if (btn) { btn.style.background = '#00B894'; btn.textContent = '🎤 語音'; }
        };
    }
}

function endDialogue() {
    document.getElementById('scenarioList').style.display = 'block';
    document.getElementById('dialogueArea').style.display = 'none';
    currentScenario = null;
    scenarioStep = 0;
}

// ===== 粵語歌 =====
function loadSongs() {
    const container = document.getElementById('songList');
    container.innerHTML = SONGS.map(s => `
        <div class="song-card" onclick="showSong('${s.id}')">
            <div class="song-info">
                <h4>🎵 ${s.title}</h4>
                <p>${s.artist}</p>
            </div>
            <div style="display:flex;gap:8px">
                <a href="https://music.163.com/search?keyword=${encodeURIComponent(s.title + ' ' + s.artist)}" target="_blank" style="padding:8px 12px;background:#C20C0C;color:#fff;border:none;border-radius:8px;cursor:pointer;text-decoration:none;font-size:13px" onclick="event.stopPropagation()">▶ 播放</a>
                <button style="padding:8px 16px;border:none;background:#6C5CE7;color:#fff;border-radius:8px;cursor:pointer">歌詞</button>
            </div>
        </div>
    `).join('');
}

function showSong(id) {
    const song = SONGS.find(s => s.id === id);
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songPlayer').style.display = 'block';
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('songArtist').textContent = song.artist;

    // 添加播放按钮 - 网易云音乐嵌入播放
    const musicUrl = `https://music.163.com/search?keyword=${encodeURIComponent(song.title + ' ' + song.artist)}`;
    const mp = document.getElementById('musicPlayer');
    const mf = document.getElementById('musicFrame');
    mp.style.display = 'block';
    mf.src = musicUrl;

    document.getElementById('lyricsDisplay').innerHTML = song.lyrics.map((l, i) => `
        <div class="lyric-line" id="lyric-${i}" onclick="speakText('${l.zh}')">
            <div class="lyric-zh">${l.zh}</div>
            <div class="lyric-jyutping">${l.jyutping}</div>
        </div>
    `).join('');

    // 自動滾動歌詞
    let currentLyric = 0;
    const lyricLines = document.querySelectorAll('.lyric-line');
    const highlightInterval = setInterval(() => {
        lyricLines.forEach(l => l.classList.remove('active'));
        if (currentLyric < lyricLines.length) {
            lyricLines[currentLyric].classList.add('active');
            lyricLines[currentLyric].scrollIntoView({ behavior: 'smooth', block: 'center' });
            currentLyric++;
        } else {
            clearInterval(highlightInterval);
        }
    }, 3000);
}

function closeSongPlayer() {
    document.getElementById('songList').style.display = 'block';
    document.getElementById('songPlayer').style.display = 'none';
    document.getElementById('musicPlayer').style.display = 'none';
    document.getElementById('musicFrame').src = '';
}

// ===== K歌 =====
function loadKaraokeList() {
    const container = document.getElementById('karaokeList');
    container.innerHTML = SONGS.map(s => `
        <div class="song-card" onclick="openKaraoke('${s.id}')">
            <div class="song-info">
                <h4>🎤 ${s.title}</h4>
                <p>${s.artist}</p>
            </div>
            <button style="padding:8px 16px;border:none;background:#00B894;color:#fff;border-radius:8px;cursor:pointer">開始K歌</button>
        </div>
    `).join('');
}

function openKaraoke(id) {
    const song = SONGS.find(s => s.id === id);
    karaokeIndex = 0;
    document.getElementById('karaokeList').style.display = 'none';
    document.getElementById('karaokeStage').style.display = 'block';
    document.getElementById('karaokeTitle').textContent = `🎤 ${song.title} — ${song.artist}`;
    document.getElementById('karaokeScore').textContent = '得分：--';

    const lyricsDiv = document.getElementById('karaokeLyrics');
    lyricsDiv.innerHTML = `
        <div class="karaoke-current" id="karaokeCurrent">${song.lyrics[0]?.zh || ''}</div>
        <div class="karaoke-next" id="karaokeNext">${song.lyrics[1]?.zh || ''}</div>
    `;

    document.getElementById('karaokeFeedback').innerHTML = `<p>按「開始唱」開始！跟住歌詞唱，我會幫你打分。</p>`;
}

function startKaraoke() {
    isKaraokeActive = true;
    document.getElementById('karaokeStart').style.display = 'none';
    document.getElementById('karaokeStop').style.display = 'inline-block';
    document.getElementById('karaokeFeedback').innerHTML = '<p style="color:#00B894">🎤 錄音中⋯⋯跟住唱！</p>';

    if (recognition) {
        recognition.start();
    }

    // 每4秒切換歌詞
    const song = SONGS.find(s => document.getElementById('karaokeTitle').textContent.includes(s.title));
    if (!song) return;

    karaokeTimer = setInterval(() => {
        karaokeIndex++;
        if (karaokeIndex >= song.lyrics.length) {
            stopKaraoke();
            return;
        }
        const current = song.lyrics[karaokeIndex];
        const next = song.lyrics[karaokeIndex + 1];
        document.getElementById('karaokeCurrent').textContent = current?.zh || '';
        document.getElementById('karaokeNext').textContent = next?.zh || '(完)';
    }, 4000);
}

function stopKaraoke() {
    isKaraokeActive = false;
    clearInterval(karaokeTimer);
    document.getElementById('karaokeStart').style.display = 'inline-block';
    document.getElementById('karaokeStop').style.display = 'none';

    if (recognition) {
        recognition.stop();
    }

    // 模擬評分
    const score = Math.floor(Math.random() * 30) + 70;
    document.getElementById('karaokeScore').textContent = `得分：${score}分`;
    document.getElementById('karaokeFeedback').innerHTML = `
        <p style="color:#00B894;font-size:18px">🎉 唱完啦！</p>
        <p>得分：<strong style="font-size:24px;color:#6C5CE7">${score}</strong> / 100</p>
        <p>${score >= 90 ? '唱得好好！完美！' : score >= 80 ? '唱得唔錯！繼續努力！' : score >= 70 ? 'OK啦，多啲練習就好！' : '加油！多聽幾次再唱！'}</p>
    `;
}

// ===== 糾音打分 =====
function loadPronCard() {
    const sentence = PRON_SENTENCES[pronIndex];
    document.getElementById('pronTarget').textContent = sentence.zh;
    document.getElementById('pronJyutping').textContent = sentence.jyutping;
    document.getElementById('pronProgress').textContent = `${pronIndex + 1} / ${PRON_SENTENCES.length}`;
    document.getElementById('pronResult').innerHTML = '';
}

function pronTTS() {
    const sentence = PRON_SENTENCES[pronIndex];
    speakText(sentence.zh);
}

function startPronRecord() {
    isRecording = true;
    document.getElementById('pronStart').style.display = 'none';
    document.getElementById('pronStop').style.display = 'inline-block';
    document.getElementById('pronStart').classList.add('recording');
    document.getElementById('pronResult').innerHTML = '<p style="color:#E17055">🎤 錄音中⋯⋯請讀出上面嘅句子</p>';

    if (recognition) {
        recognition.start();
    }
}

function stopPronRecord() {
    isRecording = false;
    document.getElementById('pronStart').style.display = 'inline-block';
    document.getElementById('pronStop').style.display = 'none';
    document.getElementById('pronStart').classList.remove('recording');

    if (recognition) {
        recognition.stop();
    }

    // 模擬評分
    const score = Math.floor(Math.random() * 25) + 75;
    const feedback = score >= 90 ? '發音非常標準！' : score >= 80 ? '發音唔錯，聲調再準啲就更好！' : '需要多啲練習，特別係聲調。';
    document.getElementById('pronResult').innerHTML = `
        <div class="pron-score">${score}</div>
        <div>分</div>
        <div class="pron-feedback">${feedback}</div>
        <div style="margin-top:12px;font-size:14px;color:#636E72">
            目標：${PRON_SENTENCES[pronIndex].zh}<br>
            你的發音：（語音識別中⋯⋯）
        </div>
    `;

    // 保存進度
    saveProgress('pronunciation', score);
}

function pronNext() {
    pronIndex = (pronIndex + 1) % PRON_SENTENCES.length;
    loadPronCard();
}

function pronPrev() {
    pronIndex = (pronIndex - 1 + PRON_SENTENCES.length) % PRON_SENTENCES.length;
    loadPronCard();
}

// ===== 語音合成（TTS） =====
function speakText(text, lang, rate) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang || 'zh-HK';
        utterance.rate = rate || (lang === 'en-GB' || lang === 'en-US' ? 0.9 : 0.88);
        utterance.pitch = 1.05; // 微高一點，更自然

        // 嘗試找到合適語音
        const voices = window.speechSynthesis.getVoices();
        if (lang === 'en-GB' || lang === 'en-US') {
            const enVoice = voices.find(v => v.lang.startsWith('en-GB')) || voices.find(v => v.lang.startsWith('en'));
            if (enVoice) utterance.voice = enVoice;
        } else {
            // 優先選粵語語音，macOS Sin-ji最自然
            const cantoVoice = voices.find(v => v.name.includes('Sin-ji'))
                || voices.find(v => v.lang.includes('zh-HK'))
                || voices.find(v => v.lang.includes('yue'))
                || voices.find(v => v.name.includes('Cantonese'));
            if (cantoVoice) utterance.voice = cantoVoice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

// ===== 語音識別 =====
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.log('瀏覽器不支援語音識別');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'zh-HK';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (isRecording) {
            // 糾音模式
            stopPronRecord();
            const target = PRON_SENTENCES[pronIndex].zh;
            const similarity = calculateSimilarity(transcript, target);
            const score = Math.round(similarity * 100);
            const feedback = score >= 90 ? '發音非常標準！' : score >= 70 ? '發音唔錯！繼續努力！' : '同目標有啲差距，再試一次。';
            document.getElementById('pronResult').innerHTML = `
                <div class="pron-score">${score}</div>
                <div>分</div>
                <div class="pron-feedback">${feedback}</div>
                <div style="margin-top:12px;font-size:14px;color:#636E72">
                    目標：${target}<br>
                    你講：${transcript}
                </div>
            `;
            saveProgress('pronunciation', score);
        } else if (isKaraokeActive) {
            // K歌模式
            document.getElementById('karaokeFeedback').innerHTML = `<p>你唱：${transcript}</p>`;
        } else if (currentScenario) {
            // 情景對話模式
            document.getElementById('dialogueInput').value = transcript;
            sendDialogue();
        }
    };

    recognition.onerror = (event) => {
        console.error('語音識別錯誤:', event.error);
        if (isRecording) stopPronRecord();
    };

    // 預載語音
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
}

// ===== 相似度計算 =====
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    if (longer.length === 0) return 1.0;

    // 簡單字符匹配
    let matches = 0;
    const chars = [...shorter];
    for (const char of chars) {
        if (longer.includes(char)) matches++;
    }
    return matches / longer.length;
}

// ===== 學習進度 =====
function loadProgress() {
    const data = JSON.parse(localStorage.getItem('cantoneseProgress') || '{}');
    document.getElementById('statPhrases').textContent = data.phrasesLearned || 0;
    document.getElementById('statSongs').textContent = data.songsLearned || 0;
    document.getElementById('statScore').textContent = data.avgScore || 0;
    document.getElementById('statDays').textContent = data.studyDays || 1;

    // 連續學習
    const streak = data.streak || 0;
    document.getElementById('streakInfo').textContent = streak > 0
        ? `已經連續學習 ${streak} 日！繼續加油！`
        : '今日開始計起！';
}

function saveProgress(type, value) {
    const data = JSON.parse(localStorage.getItem('cantoneseProgress') || '{}');

    if (type === 'pronunciation') {
        const scores = data.pronScores || [];
        scores.push(value);
        data.pronScores = scores;
        data.avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }

    // 更新學習天數
    const today = new Date().toDateString();
    if (data.lastStudyDate !== today) {
        data.studyDays = (data.studyDays || 0) + 1;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        data.streak = data.lastStudyDate === yesterday ? (data.streak || 0) + 1 : 1;
        data.lastStudyDate = today;
    }

    localStorage.setItem('cantoneseProgress', JSON.stringify(data));
    loadProgress();
}

// ===== Enter 鍵發送 =====
document.getElementById('dialogueInput')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendDialogue();
});

document.getElementById('srcText')?.addEventListener('keypress', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        translate();
    }
});

// ===== 語音加載 =====
function loadVoices() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
}

// ===== 兒童學粵語 =====
function loadChildrenCategories() {
    const container = document.getElementById('childrenCategories');
    if (!container) return;
    container.innerHTML = CHILDREN_CATEGORIES.map(c => `
        <div class="cat-tab ${c.id === 'abc' ? 'active' : ''}" onclick="loadChildrenContent('${c.id}')">
            ${c.icon} ${c.name}
        </div>
    `).join('');
}

function loadChildrenContent(categoryId) {
    currentChildCategory = categoryId;
    document.querySelectorAll('#childrenCategories .cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`#childrenCategories [onclick*="${categoryId}"]`)?.classList.add('active');

    const container = document.getElementById('childrenContent');
    if (!container) return;

    switch (categoryId) {
        case 'abc':
            container.innerHTML = `<div class="alphabet-grid">${CHILDREN_ABC.map(item => `
                <div class="alphabet-card" onclick="speakText('${item.word.split(' ')[1]}')">
                    <div class="letter">${item.letter}</div>
                    <div class="jyutping">${item.word}</div>
                    <div class="jyutping">${item.jyutping}</div>
                </div>
            `).join('')}</div>`;
            break;

        case 'numbers':
            container.innerHTML = `<div class="numbers-grid">${CHILDREN_NUMBERS.map(item => `
                <div class="number-card" onclick="speakText('${item.word}')">
                    <div class="num">${item.num}</div>
                    <div class="word">${item.word}</div>
                    <div class="jp">${item.jyutping} · ${item.en}</div>
                </div>
            `).join('')}</div>`;
            break;

        case 'colors':
            container.innerHTML = `<div class="children-grid">${CHILDREN_COLORS.map(c => `
                <div class="child-card" onclick="speakText('${c.zh}')">
                    <div style="font-size:48px;text-align:center">${c.emoji}</div>
                    <h3 style="text-align:center">${c.zh}</h3>
                    <p style="text-align:center">${c.jyutping} · ${c.en}</p>
                </div>
            `).join('')}</div>`;
            break;

        case 'animals':
            container.innerHTML = `<div class="children-grid">${CHILDREN_ANIMALS.map(a => `
                <div class="child-card" onclick="speakText('${a.zh}')">
                    <div style="font-size:48px;text-align:center">${a.emoji}</div>
                    <h3 style="text-align:center">${a.zh}</h3>
                    <p style="text-align:center">${a.jyutping} · ${a.en}</p>
                </div>
            `).join('')}</div>`;
            break;

        case 'family':
            container.innerHTML = `<div class="children-grid">${CHILDREN_FAMILY.map(f => `
                <div class="child-card" onclick="speakText('${f.zh}')">
                    <div style="font-size:48px;text-align:center">${f.emoji}</div>
                    <h3 style="text-align:center">${f.zh}</h3>
                    <p style="text-align:center">${f.jyutping} · ${f.en}</p>
                </div>
            `).join('')}</div>`;
            break;

        case 'body':
            container.innerHTML = `<div class="children-grid">${CHILDREN_BODY.map(b => `
                <div class="child-card" onclick="speakText('${b.zh}')">
                    <div style="font-size:48px;text-align:center">${b.emoji}</div>
                    <h3 style="text-align:center">${b.zh}</h3>
                    <p style="text-align:center">${b.jyutping} · ${b.en}</p>
                </div>
            `).join('')}</div>`;
            break;

        case 'food':
            container.innerHTML = `<div class="children-grid">${CHILDREN_FOOD.map(f => `
                <div class="child-card" onclick="speakText('${f.zh}')">
                    <div style="font-size:48px;text-align:center">${f.emoji}</div>
                    <h3 style="text-align:center">${f.zh}</h3>
                    <p style="text-align:center">${f.jyutping} · ${f.en}</p>
                </div>
            `).join('')}</div>`;
            break;

        case 'songs':
            container.innerHTML = `<div style="margin-top:16px">${CHILDREN_SONGS.map((s, i) => `
                <div class="children-song-card" onclick="this.querySelector('.song-body').style.display = this.querySelector('.song-body').style.display === 'none' ? 'block' : 'none'">
                    <div style="font-size:36px">🎵</div>
                    <div style="flex:1">
                        <h4>${s.title}</h4>
                        <p style="color:#636E72">${s.en}</p>
                        <div class="song-body" style="display:none;margin-top:12px">
                            <div style="white-space:pre-line;line-height:2;font-size:16px">${s.lyrics}</div>
                            <div style="white-space:pre-line;line-height:1.8;font-size:13px;color:#6C5CE7;margin-top:12px">${s.jyutping}</div>
                            <button onclick="event.stopPropagation();speakText('${s.lyrics.replace(/\n/g, ' ')}')" style="margin-top:12px;padding:8px 20px;border:none;background:#6C5CE7;color:#fff;border-radius:16px;cursor:pointer">🔊 聽一次</button>
                        </div>
                    </div>
                </div>
            `).join('')}</div>`;
            break;

        case 'rhymes':
            container.innerHTML = `<div style="margin-top:16px">${CHILDREN_SONGS.map(s => `
                <div class="rhyme-card">
                    <h4>🎵 ${s.title} (${s.en})</h4>
                    <div class="lyrics">${s.lyrics}</div>
                    <div class="jp-lyrics">${s.jyutping}</div>
                    <button onclick="speakText('${s.lyrics.replace(/\n/g, ' ')}')" style="margin-top:12px;padding:8px 20px;border:none;background:rgba(255,255,255,0.2);color:#fff;border-radius:16px;cursor:pointer">🔊 聽一次</button>
                </div>
            `).join('')}</div>`;
            break;

        case 'quiz':
            loadChildrenQuiz();
            break;
    }
}

// ===== 兒童測驗 =====
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function loadChildrenQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizIndex >= CHILDREN_QUIZ.length) {
        const container = document.getElementById('childrenContent');
        const percent = Math.round((quizScore / CHILDREN_QUIZ.length) * 100);
        container.innerHTML = `
            <div class="quiz-card">
                <div style="font-size:64px;margin-bottom:16px">${percent >= 80 ? '🎉' : percent >= 50 ? '😊' : '💪'}</div>
                <h3>測驗完成！</h3>
                <div class="quiz-score" style="font-size:48px;color:#6C5CE7;margin:16px 0">${quizScore} / ${CHILDREN_QUIZ.length}</div>
                <p style="font-size:18px;margin-bottom:16px">${percent >= 80 ? '做得好好！你係粵語小天才！' : percent >= 50 ? '唔錯！繼續努力！' : '唔緊要，再試一次！'}</p>
                <button onclick="loadChildrenQuiz()" style="padding:12px 32px;border:none;background:#6C5CE7;color:#fff;border-radius:16px;cursor:pointer;font-size:16px">再來一次</button>
            </div>
        `;
        return;
    }

    const q = CHILDREN_QUIZ[quizIndex];
    quizAnswered = false;
    const container = document.getElementById('childrenContent');
    container.innerHTML = `
        <div class="quiz-card">
            <div style="margin-bottom:8px;color:#636E72">第 ${quizIndex + 1} 題 / ${CHILDREN_QUIZ.length}</div>
            <h4>${q.question}</h4>
            <p style="color:#6C5CE7;margin-bottom:16px">${q.jyutping}</p>
            <div style="font-size:64px;margin:20px 0">${q.emoji}</div>
            <div class="quiz-options" id="quizOptions">
                ${q.options.map((opt, i) => `
                    <div class="quiz-option" onclick="checkQuizAnswer(${i}, ${q.correct})" id="quizOpt${i}">${opt}</div>
                `).join('')}
            </div>
            <div id="quizFeedback" style="margin-top:16px;font-size:16px"></div>
            <div style="margin-top:8px;color:#636E72">得分：${quizScore} / ${quizIndex}</div>
        </div>
    `;
}

function checkQuizAnswer(selected, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = CHILDREN_QUIZ[quizIndex];
    document.getElementById(`quizOpt${selected}`).classList.add(selected === correct ? 'correct' : 'wrong');
    if (selected !== correct) {
        document.getElementById(`quizOpt${correct}`).classList.add('correct');
    }

    if (selected === correct) {
        quizScore++;
        document.getElementById('quizFeedback').innerHTML = `<span style="color:#00B894;font-size:18px">✅ 正確！答得好！</span>`;
        speakText(q.options[correct]);
    } else {
        document.getElementById('quizFeedback').innerHTML = `<span style="color:#E17055;font-size:18px">❌ 唔緊要，答案係：${q.options[correct]}</span>`;
        speakText(q.options[correct]);
    }

    setTimeout(() => {
        quizIndex++;
        showQuizQuestion();
    }, 2000);
}

// ===== 九聲六調 =====
function loadTones() {
    const container = document.getElementById('tonesGrid');
    if (!container) return;
    container.innerHTML = TONES.map(t => `
        <div class="tone-card" onclick="speakText('${t.example}')">
            <div class="tone-num">${t.num}</div>
            <div class="tone-name">${t.name}</div>
            <div class="tone-example">${t.example}</div>
            <div class="tone-jp">${t.jyutping}</div>
            <div style="font-size:12px;color:#636E72;margin-top:4px">${t.value}</div>
            <div style="font-size:12px;margin-top:4px">${t.desc}</div>
        </div>
    `).join('');
}

// ===== 語法精講 =====
function loadGrammar() {
    const container = document.getElementById('grammarContent');
    if (!container) return;
    container.innerHTML = GRAMMAR.map(g => `
        <div class="grammar-card">
            <h4>${g.title}</h4>
            <div class="grammar-rule">${g.rule}</div>
            ${g.examples.map(e => `
                <div class="grammar-example">
                    <strong>${e.zh}</strong>
                    <div class="jp">${e.jp}</div>
                    <div class="jp" style="color:#FD79A8">${e.meaning}</div>
                    <button onclick="speakText('${e.zh}')" style="margin-top:4px;padding:3px 10px;border:none;background:#A29BFE;color:#fff;border-radius:10px;cursor:pointer;font-size:11px">🔊</button>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// ===== 閃卡記憶 =====
let currentDeck = null;
let cardIndex = 0;

function loadFlashcards() {
    const container = document.getElementById('flashcardArea');
    if (!container) return;
    container.innerHTML = `
        <div class="deck-selector">
            ${FLASHCARD_DECKS.map(d => `
                <div class="deck-btn" onclick="selectDeck('${d.id}')" id="deck-${d.id}">
                    ${d.icon} ${d.name} (${d.cards.length}張)
                </div>
            `).join('')}
        </div>
        <div id="flashcardContent">
            <p style="text-align:center;color:#636E72;margin-top:40px">👆 揀一個卡組開始！</p>
        </div>
    `;
}

function selectDeck(id) {
    currentDeck = FLASHCARD_DECKS.find(d => d.id === id);
    cardIndex = 0;
    document.querySelectorAll('.deck-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`deck-${id}`).classList.add('active');
    showFlashcard();
}

function showFlashcard() {
    if (!currentDeck || cardIndex >= currentDeck.cards.length) {
        document.getElementById('flashcardContent').innerHTML = `
            <div style="text-align:center;margin-top:40px">
                <div style="font-size:64px">🎉</div>
                <h3>卡組完成！</h3>
                <p style="color:#636E72">你學完咗 ${currentDeck.cards.length} 張卡</p>
                <button onclick="cardIndex=0;showFlashcard()" style="margin-top:16px;padding:12px 32px;border:none;background:#6C5CE7;color:#fff;border-radius:16px;cursor:pointer">再來一次</button>
            </div>
        `;
        return;
    }

    const card = currentDeck.cards[cardIndex];
    document.getElementById('flashcardContent').innerHTML = `
        <div class="flashcard-wrapper" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
            <div class="flashcard" id="currentFlashcard">
                <div class="flashcard-front">
                    <div>${card.front}</div>
                    <div class="card-hint">點擊翻卡</div>
                </div>
                <div class="flashcard-back">
                    <div class="answer-zh">${card.back}</div>
                    <div class="answer-jp">${card.meaning}</div>
                    <div class="answer-en">${card.en}</div>
                    <button onclick="event.stopPropagation();speakText('${card.front}')" style="margin-top:8px;padding:6px 16px;border:none;background:#6C5CE7;color:#fff;border-radius:12px;cursor:pointer">🔊</button>
                </div>
            </div>
        </div>
        <div style="text-align:center;color:#636E72;margin-bottom:12px">${cardIndex + 1} / ${currentDeck.cards.length}</div>
        <div class="flashcard-controls">
            <button class="btn-easy" onclick="flashNext()">✅ 記得</button>
            <button class="btn-hard" onclick="flashNext()">🤔 再睇一次</button>
            <button class="btn-again" onclick="flashNext()">❌ 唔記得</button>
        </div>
    `;
}

function flashNext() {
    cardIndex++;
    showFlashcard();
}

// ===== 聽力訓練 =====
let listenIndex = 0;
let listenAnswered = false;

function loadListening() {
    listenIndex = 0;
    listenAnswered = false;
    showListeningQuestion();
}

function showListeningQuestion() {
    if (listenIndex >= LISTENING_EXERCISES.length) {
        document.getElementById('listeningContent').innerHTML = `
            <div class="listening-card" style="text-align:center">
                <div style="font-size:64px">🎉</div>
                <h3>聽力訓練完成！</h3>
                <button onclick="loadListening()" style="padding:12px 32px;border:none;background:#6C5CE7;color:#fff;border-radius:16px;cursor:pointer">再來一次</button>
            </div>
        `;
        return;
    }

    const ex = LISTENING_EXERCISES[listenIndex];
    listenAnswered = false;
    document.getElementById('listeningContent').innerHTML = `
        <div class="listening-card">
            <div style="margin-bottom:8px;color:#636E72">第 ${listenIndex + 1} 題 / ${LISTENING_EXERCISES.length}</div>
            <h3>${ex.title}</h3>
            <div class="listening-audio">
                <button onclick="speakText('${ex.audioText}')">🔊 聽一次</button>
                <button onclick="speakText('${ex.audioText}')" style="opacity:0.7">🔊 慢速</button>
            </div>
            <div class="listening-question">${ex.question}</div>
            <div class="listening-options">
                ${ex.options.map((opt, i) => `
                    <div class="listening-opt" onclick="checkListening(${i}, ${ex.correct})" id="listenOpt${i}">${opt}</div>
                `).join('')}
            </div>
            <div id="listenFeedback" style="margin-top:16px"></div>
        </div>
    `;

    // 自動播放
    setTimeout(() => speakText(ex.audioText), 500);
}

function checkListening(selected, correct) {
    if (listenAnswered) return;
    listenAnswered = true;

    document.getElementById(`listenOpt${selected}`).classList.add(selected === correct ? 'correct' : 'wrong');
    if (selected !== correct) {
        document.getElementById(`listenOpt${correct}`).classList.add('correct');
    }

    const ex = LISTENING_EXERCISES[listenIndex];
    document.getElementById('listenFeedback').innerHTML = selected === correct
        ? '<span style="color:#00B894">✅ 正確！</span>'
        : `<span style="color:#E17055">❌ 答案係：${ex.options[correct]}</span><br><span style="color:#636E72">原文：${ex.audioText}</span>`;

    setTimeout(() => { listenIndex++; showListeningQuestion(); }, 2500);
}

// ===== AI對話 =====
let aiChatMessages = [];
let aiCurrentScenario = null;

function loadAIChat() {
    const container = document.getElementById('aiChatArea');
    if (!container) return;
    container.innerHTML = `
        <p style="margin-bottom:16px;color:#636E72">揀一個場景，開始用粵語傾偈：</p>
        <div class="ai-scenario-picker">
            ${AI_SCENARIOS.map(s => `
                <div class="ai-scenario" onclick="startAIChat('${s.id}')">
                    <div style="font-size:24px;margin-bottom:8px">${s.name}</div>
                    <p style="font-size:13px;color:#636E72">${s.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function startAIChat(id) {
    aiCurrentScenario = AI_SCENARIOS.find(s => s.id === id);
    aiChatMessages = [];
    const container = document.getElementById('aiChatArea');
    container.innerHTML = `
        <div class="ai-chat-container">
            <div class="ai-chat-header">
                <h3>${aiCurrentScenario.name}</h3>
                <button onclick="loadAIChat()" style="background:rgba(255,255,255,0.2);color:#fff;border:none;padding:8px 16px;border-radius:8px;cursor:pointer">換場景</button>
            </div>
            <div class="ai-chat-messages" id="aiMessages">
                <div class="msg msg-bot">
                    <div class="msg-avatar">🤖</div>
                    <div class="msg-bubble">
                        歡迎！我哋開始傾偈啦。用粵語同我講嘢！😊
                    </div>
                </div>
            </div>
            <div class="ai-chat-input">
                <input type="text" id="aiInput" placeholder="用粵語輸入⋯⋯" onkeypress="if(event.key==='Enter')sendAIMessage()">
                <button onclick="sendAIMessage()" style="background:#6C5CE7;color:#fff">發送</button>
                <button onclick="startAIListen()" style="background:#00B894;color:#fff">🎤</button>
            </div>
        </div>
    `;
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if (!text) return;

    const messagesDiv = document.getElementById('aiMessages');
    const jyutping = toJyutping(text);

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg msg-user';
    userMsg.innerHTML = `
        <div class="msg-avatar">你</div>
        <div class="msg-bubble">${text}<div class="msg-jyutping">${jyutping}</div></div>
    `;
    messagesDiv.appendChild(userMsg);
    input.value = '';

    // Generate AI response (simple rule-based for now)
    const reply = generateAIReply(text);
    const replyJyutping = toJyutping(reply);

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'msg msg-bot';
        botMsg.innerHTML = `
            <div class="msg-avatar">🤖</div>
            <div class="msg-bubble">${reply}<div class="msg-jyutping">${replyJyutping}</div>
                <button onclick="speakText('${reply}')" style="margin-top:6px;padding:4px 12px;border:none;background:#6C5CE7;color:#fff;border-radius:10px;cursor:pointer;font-size:11px">🔊</button>
            </div>
        `;
        messagesDiv.appendChild(botMsg);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 800);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateAIReply(userText) {
    const text = userText.toLowerCase();
    const replies = {
        'cafe': [
            { match: ['你好', '早晨'], reply: '歡迎！請問想飲啲乜嘢？我哋今日有特價咖啡。' },
            { match: ['咖啡', '咖啡'], reply: '我哋有凍/熱咖啡，仲有拿鐵、美式。你想要邊種？' },
            { match: ['凍', 'iced'], reply: '好呀，凍咖啡一杯。要唔要加糖？' },
            { match: ['多少錢', '幾多錢'], reply: '凍咖啡二十八蚊，熱咖啡二十五蚊。' },
            { match: ['打包', '帶走'], reply: '好，幫你打包。請問堂食定帶走？' }
        ],
        'friend': [
            { match: ['你好', '早晨'], reply: '喂！好耐冇見！最近點呀？' },
            { match: ['好', 'ok', '幾好'], reply: '我OK啦。你呢？做緊啲乜嘢？' },
            { match: ['忙', '好忙'], reply: '係咩？忙啲乜嘢呀？' },
            { match: ['食飯', '食嘢'], reply: '好呀！今晚一齊食飯？去邊度食？' }
        ]
    };

    const scenarioReplies = replies[aiCurrentScenario.id] || replies['friend'];

    for (const r of scenarioReplies) {
        if (r.match.some(m => text.includes(m))) {
            return r.reply;
        }
    }

    // Default replies
    const defaults = [
        '我明白。你可唔可以講多啲？',
        '係咩？我唔係好明。你可以用簡單啲嘅粵語講多次嗎？',
        '哦，咁樣呀。咁你點睇？',
        '好有趣！繼續講吓。',
        '我聽緊，你繼續講啦。'
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

function startAIListen() {
    if (!recognition) {
        initSpeechRecognition();
    }
    if (recognition) {
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('aiInput').value = transcript;
            sendAIMessage();
        };
        recognition.onerror = (event) => {
            if (event.error === 'not-allowed') {
                alert('請允許瀏覽器使用麥克風 🎤');
            } else if (event.error === 'service-not-allowed') {
                alert('語音功能需要HTTPS連接。請用本地(http://localhost)或HTTPS地址訪問。');
            }
        };
        recognition.start();
    }
}
// ===== 啟動 =====
initApp();

