var canvas2 = document.getElementById('thisCanvas2');
var ctx2 = canvas2.getContext('2d');
var x = document.getElementById('myAudio');
let score = 0;
ctx2.font = "20px Verdana";
ctx2.fillText("*CÁCH  CHƠI:", 10, 100);
ctx2.fillText("Dùng phím di chuyển (→　←) để chơi:", 10, 150);
ctx2.fillText(" để chơi:", 10, 180);
ctx2.fillText("SCORE:", 10, 250);

function drawScore() {
    ctx2.font = "20px Verdana";
    ctx2.fillText(score, 100, 250);
}
function newScore() {
    ctx2.clearRect(100, 230, canvas2.offsetWidth, 22);
    score += 10;
    drawScore();
}


function radioOn() {
    x.autoplay = true;
    x.load;
}
function radioOff() {
    x.autoplay = false;
    x.load;
}

radioOn();
let runScore = setInterval(newScore, 1000);
