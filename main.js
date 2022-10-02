let mp3 = document.querySelector('#mp3');
let js = document.querySelector('#js');
let KASI = [];
let readerMp3 = new FileReader();
let textJs = new FileReader();
let fileMp3, fileJs;
let newTag;

const a = document.querySelector('#audio');
const b = document.querySelector('.mainB');
const h1 = document.querySelector('h1');
const main = document.querySelector('main');

mp3.addEventListener('input', function (e) {
    fileMp3 = e.target.files[0];
    readerMp3.readAsDataURL(fileMp3);
}, false);

readerMp3.addEventListener('load', function (e) {
    a.setAttribute('src', readerMp3.result);
}, false);

function plusPlayPoint(s) {
    a.currentTime += s;
}

function setPlayPoint(s) {
    a.currentTime = s;
}

function startStop() {
    if (a.paused) {
        a.play();
        b.textContent = "▮▮";
    } else {
        a.pause();
        b.textContent = "▷";
    }
}

js.addEventListener('input', function (e) {
    fileJs = e.target.files[0];
    textJs.readAsText(fileJs);
}, false);

textJs.addEventListener('load', function (e) {
    eval(e.target.result);
    console.log(KASI);
}, false);

function startPlaying() {
    $('#start-menu').css('display', 'none');
    if (KASI.length) { //0はfalse -> 0以外で実行
        KASI.forEach((ele1,i) => {
            newTag = document.createElement("h2");
            newTag.innerHTML = "<span>" + (i+1) + "番" + "</span>";
            newTag.setAttribute("id", "B" + (i+1));
            newTag.setAttribute("onclick", "setPlayPoint(" + KASI[i][0][1] + ")");
            main.appendChild(newTag);
            KASI[i].forEach((ele2,j) => {
                newTag = document.createElement("p");
                newTag.innerHTML = KASI[i][j][0];
                newTag.setAttribute("onclick", "setPlayPoint(" + KASI[i][j][1] + ")");
                main.appendChild(newTag);
            });
        });
    }
}