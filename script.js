const kanaToRomajiMap = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
    'ー': '-'
};

function hiraganaToRomaji(str) {
    let result = '';
    let i = 0;
    while (i < str.length) {
        if (str[i] === 'っ') {
            if (i + 1 < str.length) {
                let nextKana = str.substr(i + 1, 2);
                let romaji = kanaToRomajiMap[nextKana];
                if (!romaji && i + 1 < str.length) {
                    romaji = kanaToRomajiMap[str[i + 1]];
                }
                if (romaji) result += romaji[0];
            }
            i++;
            continue;
        }
        if (i + 1 < str.length) {
            let twoChar = str.substr(i, 2);
            if (kanaToRomajiMap[twoChar]) {
                result += kanaToRomajiMap[twoChar];
                i += 2;
                continue;
            }
        }
        let oneChar = str[i];
        if (kanaToRomajiMap[oneChar]) {
            result += kanaToRomajiMap[oneChar];
        } else {
            result += oneChar; 
        }
        i++;
    }
    return result.toUpperCase();
}

const masterVocabList = [
    { word: "だいがく", romaji: "DAIGAKU", meaning: "university" },
    { word: "えき", romaji: "EKI", meaning: "station" },
    { word: "せんせい", romaji: "SENSEI", meaning: "teacher" },
    { word: "あいます", romaji: "AIMASU", meaning: "to meet" },
    { word: "あおい", romaji: "AOI", meaning: "blue" },
    { word: "あかい", romaji: "AKAI", meaning: "red" },
    { word: "あかるい", romaji: "AKARUI", meaning: "bright" },
    { word: "あき", romaji: "AKI", meaning: "autumn" },
    { word: "あけます", romaji: "AKEMASU", meaning: "to open" },
    { word: "あさ", romaji: "ASA", meaning: "morning" },
    { word: "あさごはん", romaji: "ASAGOHAN", meaning: "breakfast" },
    { word: "あし", romaji: "ASHI", meaning: "leg, foot" },
    { word: "あした", romaji: "ASHITA", meaning: "tomorrow" },
    { word: "あたま", romaji: "ATAMA", meaning: "head" },
    { word: "あたらしい", romaji: "ATARASHII", meaning: "new" },
    { word: "あつい", romaji: "ATSUI", meaning: "hot (weather)" },
    { word: "あに", romaji: "ANI", meaning: "older brother" },
    { word: "あね", romaji: "ANE", meaning: "older sister" },
    { word: "あめ", romaji: "AME", meaning: "rain" },
    { word: "あるきます", romaji: "ARUKIMASU", meaning: "to walk" },
    { word: "いえ", romaji: "IE", meaning: "house" },
    { word: "いきます", romaji: "IKIMASU", meaning: "to go" },
    { word: "いしゃ", romaji: "ISHA", meaning: "doctor" },
    { word: "いす", romaji: "ISU", meaning: "chair" },
    { word: "いぬ", romaji: "INU", meaning: "dog" },
    { word: "いま", romaji: "IMA", meaning: "now" },
    { word: "いもうと", romaji: "IMOUTO", meaning: "younger sister" },
    { word: "いりぐち", romaji: "IRIGUCHI", meaning: "entrance" },
    { word: "うた", romaji: "UTA", meaning: "song" },
    { word: "うみ", romaji: "UMI", meaning: "sea, ocean" },
    { word: "えいが", romaji: "EIGA", meaning: "movie" },
    { word: "えいご", romaji: "EIGO", meaning: "English" },
    { word: "えんぴつ", romaji: "ENPITSU", meaning: "pencil" },
    { word: "おいしい", romaji: "OISHII", meaning: "delicious" },
    { word: "おおきい", romaji: "OOKII", meaning: "big" },
    { word: "おかね", romaji: "OKANE", meaning: "money" },
    { word: "おちゃ", romaji: "OCHA", meaning: "green tea" },
    { word: "おんがく", romaji: "ONGAKU", meaning: "music" },
    { word: "がいこく", romaji: "GAIKOKU", meaning: "foreign country" },
    { word: "かいしゃ", romaji: "KAISHA", meaning: "company" },
    { word: "かぎ", romaji: "KAGI", meaning: "key" },
    { word: "がくせい", romaji: "GAKUSEI", meaning: "student" },
    { word: "かさ", romaji: "KASA", meaning: "umbrella" },
    { word: "かぞく", romaji: "KAZOKU", meaning: "family" },
    { word: "がっこう", romaji: "GAKKOU", meaning: "school" },
    { word: "かばん", romaji: "KABAN", meaning: "bag" },
    { word: "かんじ", romaji: "KANJI", meaning: "kanji" },
    { word: "き", romaji: "KI", meaning: "tree" },
    { word: "きっさてん", romaji: "KISSATEN", meaning: "coffee shop" },
    { word: "きっぷ", romaji: "KIPPU", meaning: "ticket" },
    { word: "きのう", romaji: "KINOU", meaning: "yesterday" },
    { word: "ぎゅうにゅう", romaji: "GYUUNYUU", meaning: "milk" },
    { word: "きょう", romaji: "KYOU", meaning: "today" },
    { word: "きょうしつ", romaji: "KYOUSHITSU", meaning: "classroom" },
    { word: "くだもの", romaji: "KUDAMONO", meaning: "fruit" },
    { word: "くつ", romaji: "KUTSU", meaning: "shoes" },
    { word: "くるま", romaji: "KURUMA", meaning: "car" },
    { word: "けしごむ", romaji: "KESHIGOMU", meaning: "eraser" },
    { word: "こうえん", romaji: "KOUEN", meaning: "park" },
    { word: "さかな", romaji: "SAKANA", meaning: "fish" },
    { word: "ざっし", romaji: "ZASSHI", meaning: "magazine" },
    { word: "じかん", romaji: "JIKAN", meaning: "time" },
    { word: "じしょ", romaji: "JISHO", meaning: "dictionary" },
    { word: "じてんしゃ", romaji: "JITENSHA", meaning: "bicycle" },
    { word: "しゃしん", romaji: "SHASHIN", meaning: "photo" },
    { word: "しんぶん", romaji: "SHINBUN", meaning: "newspaper" },
    { word: "すし", romaji: "SUSHI", meaning: "sushi" },
    { word: "たべもの", romaji: "TABEMONO", meaning: "food" },
    { word: "たまご", romaji: "TAMAGO", meaning: "egg" },
    { word: "ちかてつ", romaji: "CHIKATETSU", meaning: "subway" },
    { word: "ちず", romaji: "CHIZU", meaning: "map" },
    { word: "でんしゃ", romaji: "DENSHA", meaning: "train" },
    { word: "でんわ", romaji: "DENWA", meaning: "telephone" },
    { word: "とうきょう", romaji: "TOUKYOU", meaning: "Tokyo" },
    { word: "としょかん", romaji: "TOSHOKAN", meaning: "library" },
    { word: "とり", romaji: "TORI", meaning: "bird" },
    { word: "なつ", romaji: "NATSU", meaning: "summer" },
    { word: "にく", romaji: "NIKU", meaning: "meat" },
    { word: "にほん", romaji: "NIHON", meaning: "Japan" },
    { word: "ねこ", romaji: "NEKO", meaning: "cat" },
    { word: "はな", romaji: "HANA", meaning: "flower" },
    { word: "ひこうき", romaji: "HIKOUKI", meaning: "airplane" },
    { word: "ふゆ", romaji: "FUYU", meaning: "winter" },
    { word: "ほん", romaji: "HON", meaning: "book" },
    { word: "みず", romaji: "MIZU", meaning: "water" },
    { word: "やま", romaji: "YAMA", meaning: "mountain" },
    { word: "りんご", romaji: "RINGO", meaning: "apple" }
];

const SESSION_LIMIT = 50;
const TIME_LIMIT = 45;
let currentShuffleList = [];
let currentIndex = 0;
let score = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

let userName = "";
let startTime = null;
let endTime = null;
let videoStream = null;

function startPractice() {
    const nameInput = document.getElementById('user-name-input').value.trim();
    if (!nameInput) {
        alert("Namae wo nyuuryoku shite kudasai (Please enter your name).");
        return;
    }
    userName = nameInput;
    startTime = new Date();

    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('practice-screen').classList.add('active');
    initGame();
}

function initGame() {
    currentShuffleList = [...masterVocabList]
        .sort(() => Math.random() - 0.5)
        .slice(0, SESSION_LIMIT);
        
    currentIndex = 0;
    score = 0;
    loadWord();
}

function startTimer() {
    stopTimer();
    timeLeft = TIME_LIMIT;
    const timerBadge = document.getElementById('timer-display');
    timerBadge.classList.remove('expired');
    timerBadge.textContent = `Time: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            timerBadge.textContent = `Time: ${timeLeft}s`;
        } else {
            stopTimer();
            timerBadge.classList.add('expired');
            timerBadge.textContent = `Jikan Kire!`;
            document.getElementById('error-message').textContent = "⏰ Time's up! You can still enter your answer and check.";
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function loadWord() {
    document.getElementById('feedback-overlay').style.display = 'none';
    document.getElementById('error-message').textContent = '';
    
    const inputField = document.getElementById('hiragana-input');
    inputField.value = '';
    inputField.focus();

    const item = currentShuffleList[currentIndex];
    
    document.getElementById('vocab-romaji').textContent = item.romaji;
    document.getElementById('vocab-meaning').textContent = item.meaning;

    document.getElementById('word-count').textContent = `Item/Word no: ${currentIndex + 1} / ${currentShuffleList.length}`;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    const progress = (currentIndex / currentShuffleList.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    startTimer();
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const inputField = document.getElementById('romaji-input');
    const userInput = inputField.value.trim().toUpperCase();
    const correctItem = currentShuffleList[currentIndex];
    const errorDisplay = document.getElementById('error-message');

    if (!userInput) return;

    if (userInput === correctItem.romaji) {
        stopTimer();
        
        const pointsEarned = isTimeExpired ? 5 : 10;
        score += pointsEarned;
        document.getElementById('score').textContent = `Score: ${score}`;
        errorDisplay.textContent = '';
        
        document.getElementById('feedback-title').textContent = "CORRECT! 🎉";
        document.getElementById('feedback-title').style.color = "var(--primary-green)";
        document.getElementById('feedback-msg').textContent = `"${correctItem.word}" is spelled "${correctItem.romaji}" (+${pointsEarned} pts)!`;
        document.getElementById('feedback-overlay').style.display = 'flex';
        document.getElementById('next-btn').focus();
    } else {
        score = Math.max(0, score - 1);
        document.getElementById('score').textContent = `Score: ${score}`;
        
        errorDisplay.textContent = `Incorrect! You typed "${userInput}". Try again! (-1 pt)`;
        inputField.select();
    }
}
function nextWord() {
    currentIndex++;
    if (currentIndex < currentShuffleList.length) {
        loadWord();
    } else {
        stopTimer();
        endTime = new Date();
        startCameraScreen();
    }
}

function startCameraScreen() {
    document.getElementById('practice-screen').classList.remove('active');
    document.getElementById('camera-screen').classList.add('active');

    const video = document.getElementById('webcam-video');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
        })
        .catch(err => {
            alert("Camera access was denied or not found. A placeholder image will be used.");
        });
}

function takeSnapshot() {
    const video = document.getElementById('webcam-video');
    const canvas = document.getElementById('photo-canvas');
    const photo = document.getElementById('captured-photo');

    canvas.width = video.videoWidth || 320;
    canvas.height = video.videoHeight || 240;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    photo.src = dataUrl;
    
    video.style.display = 'none';
    photo.style.display = 'block';

    document.getElementById('snap-btn').style.display = 'none';
    document.getElementById('retake-btn').style.display = 'inline-block';
    document.getElementById('cert-btn').style.display = 'inline-block';
}

function resetCamera() {
    const video = document.getElementById('webcam-video');
    const photo = document.getElementById('captured-photo');

    video.style.display = 'block';
    photo.style.display = 'none';

    document.getElementById('snap-btn').style.display = 'inline-block';
    document.getElementById('retake-btn').style.display = 'none';
    document.getElementById('cert-btn').style.display = 'none';
}

function showCertificate() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    document.getElementById('camera-screen').classList.remove('active');
    document.getElementById('certificate-screen').classList.add('active');

    document.getElementById('cert-user-name').textContent = userName;
    document.getElementById('cert-score').textContent = score;
    
    const totalSeconds = Math.floor((endTime - startTime) / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    document.getElementById('cert-total-time').textContent = `${mins}m ${secs}s`;

    const today = new Date();
    document.getElementById('cert-date').textContent = today.toISOString().split('T')[0];

    // Apply captured photo as certificate background
    const photoData = document.getElementById('captured-photo').src;
    const certCard = document.getElementById('certificate');
    if (photoData) {
        certCard.style.backgroundImage = `url('${photoData}')`;
    }
}
