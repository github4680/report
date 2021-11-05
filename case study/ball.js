let xMove = 20;
let yMove = 20;
class Ball {
    constructor() {
        this.rBall = 10;
        this.xBall = Math.random() * 800 - this.rBall + this.rBall;

        this.yBall = this.rBall + 10;


    }
    
    drawBall() {// vẽ quả bóng

        ctx.beginPath();
        ctx.arc(this.xBall, this.yBall, this.rBall, 0, Math.PI * 2);
        ctx.fillStyle = '#fa4b2a';
        ctx.fill();

    }
    ballMoveY() {
        //chuyển động theo trục Oy

        if (this.yBall - this.rBall * 2 < 0) {
            yMove = -yMove;
        } else if (this.yBall + this.rBall >= canvas.offsetHeight) {
            gameover();
        }
        this.yBall += yMove;

    }
    ballMoveX() {
    //chuyển động theo trục Ox
    
        if (this.xBall - this.rBall * 2 < 0 || this.xBall + this.rBall * 2 >= canvas.offsetWidth) {
            xMove = - xMove;
        }

        this.xBall += xMove;

    }
    ballRemove() {
        //xóa quả bóng
        ctx.clearRect(this.xBall - this.rBall - 1, this.yBall - this.rBall - 1, this.rBall * 2 + 2, this.rBall * 2 + 2)
    }
    ballxBar() {
        if (this.yBall + this.rBall * 2 >= bar.yBar
            && this.xBall <= bar.xBar + bar.widthBar //nếu tọa độ quả bóng nằm trong khoảng tọa độ của thanh bar
            && this.xBall >= bar.xBar - 20) {
            yMove = -yMove;
        }

    }
}
let ball = new Ball();
ball.drawBall();

function game() {
    ball.ballRemove();
    bar.drawBarMove();
    ball.ballMoveY();
    ball.ballMoveX();
    ball.ballxBar();
    ball.drawBall();
}
var time = setInterval(game, 100);

function gameover() {
    clearInterval(time);
    clearInterval(runScore);
    radioOff();
    alert('game over');
}
