const mainText = document.querySelector('.mainText');
const imageQuestion = document.querySelector('.imageQuestion');
const playBtn = document.querySelector('.playBtn');
const answerBtn01 = document.querySelector('.answerBtn01');
const answerBtn02 = document.querySelector('.answerBtn02');
const answerBtn03 = document.querySelector('.answerBtn03');
const answerBtn04 = document.querySelector('.answerBtn04');
const answerBtnDisplay = document.querySelector ('.answerBtnDisplay');
const restartBtn = document.querySelector('.restartBtn');
const judgmentText = document.querySelector('.judgmentText');
const answerBtn = [
    answerBtn01,
    answerBtn02,
    answerBtn03,
    answerBtn04,
];
const nextBtn = document.querySelector('.nextBtn');
const imageQuestions = [
    "img/UnitedKingdom.png",
    "img/Turkey.png",
    "img/Switzerland.png",
    "img/Sweden.png",
    "img/Olympic.png",
    "img/Netherlands.png",
    "img/Morocco.png",
    "img/Mongolia.png",
    "img/Belgium.png",
    "img/Australia.png",
];
const answerText = [
    ['オーストラリア', 'イギリス', 'アメリカ', 'ニュージーランド'],
    ['カメルーン', 'ロシア', '中国', 'トルコ'],
    ['スイス', 'チュニジア', 'エチオピア', 'カナダ'],
    ['フィンランド', 'デンマーク', 'スウェーデン', 'ウクライナ'],
    ['アウディ', 'パラリンピック', 'パリコレ', 'オリンピック'],
    ['セネガル', 'フランス', 'オランダ', 'ルクセンブルク'],
    ['キルギス', 'モロッコ', 'カメルーン', 'ガーナ'],
    ['モンゴル', 'スロバキア', 'スロベニア', 'キューバ'],
    ['ベルギー', 'ドイツ', 'ルーマニア', 'コロンビア'],
    ['アイスランド', 'ニュージーランド', 'オーストラリア', 'フィリピン']
];
let correct01 = 0;
let correct02 = [1,3,0,2,3,2,1,0,0,2];
let correctArray = 0;
let imageNo = 0;
let answerArray = 0;

// 解答ボタン
const answer = () =>{
    answerBtn[0].value = answerText[answerArray][0];
    answerBtn[1].value = answerText[answerArray][1];
    answerBtn[2].value = answerText[answerArray][2];
    answerBtn[3].value = answerText[answerArray][3];
}

// 解答
const judgment = () =>{
    answerBtn.forEach(function(target){
        target.addEventListener('click', (e)=>{
            if(e.target.value === answerText[correct01][correct02[correctArray]]){
                judgmentText.textContent = '正解です';
                judgmentText.style.backgroundColor = 'rgb(63, 194, 235, .5)';
                nextBtn.style.display = 'block';
            }else{
                judgmentText.textContent = '不正解です';
                judgmentText.style.backgroundColor = 'rgba(245, 22, 33, 0.5)';
                nextBtn.style.display = 'none';
            }
        }) 
    });
}

// スタート＆１問目

const start =  () =>{
    playBtn.onclick = () =>{
        mainText.textContent = 'これはどこの国の国旗でしょう？';
        imageQuestion.src = imageQuestions[imageNo];
        playBtn.style.display = 'none';
        answerBtnDisplay.style.display = 'block';
        answer();
        judgment();
    }
}
start();

// 2問目〜１０問目
const nextQuestion = () =>{   
    nextBtn.onclick = () =>{
        if(correct01 < 9){
            correct01 += 1;
            correctArray += 1;
            imageNo += 1;
            answerArray += 1;
            imageQuestion.src = imageQuestions[imageNo];
            judgmentText.textContent = '';
            nextBtn.style.display ='none';
            answer();
            judgment();
        }else{
            mainText.textContent = 'クイズはこれで終了です。もう一度挑戦したいときは「最初に戻る」ボタンを押してください。';
            imageQuestion.src = 'img/nationalFlags_02.png';
            judgmentText.style.display = 'none';
            answerBtnDisplay.style.display = 'none';
            nextBtn.style.display = 'none';
            restartBtn.style.display = 'block';
            restart();
        }
    }
}
nextQuestion();

// 最初に戻る
const restart = () =>{
    restartBtn.onclick = () =>{
        document.location.reload();
    }
}


