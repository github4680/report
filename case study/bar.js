'use strict';
let canvas = document.getElementById('thisCanvas');
let ctx = canvas.getContext('2d');
let distanceMove = 50;
function gameover(){
    
}
class Bar {
    constructor() {
        this.xBar = 0;
        this.yBar = 750;
        this.widthBar = 150;
        this.heightBar = 20;

    }

    drawBarMove() {
        ctx.beginPath();
        ctx.fillStyle = '#fa4b2a';
        ctx.fillRect(this.xBar, this.yBar, this.widthBar, this.heightBar);
    }

    barMoveRight() {//khi di chuyen sang ben phai
        ctx.clearRect(this.xBar, this.yBar, this.widthBar, this.heightBar);
        //kiểm tra xem chạm biên bên phải chưa
        if (this.xBar + this.widthBar < canvas.offsetWidth) {
            this.xBar += distanceMove;
        } else {
            this.xBar = canvas.offsetWidth - this.widthBar;
        }
        // drawBarMove();
        ctx.beginPath();
        ctx.fillStyle = '#fa4b2a';
        ctx.fillRect(this.xBar, this.yBar, this.widthBar, this.heightBar);
    }


    barMoveLeft() {
        ctx.clearRect(this.xBar, this.yBar, this.widthBar, this.heightBar);
        if (this.xBar <= 0) { //kiểm tra xem chạm biên bên trái chưa
            this.xBar = 0
        } else {
            this.xBar -= distanceMove;
        }
        // drawBarMove();
        ctx.beginPath();
        ctx.fillStyle = '#fa4b2a';
        ctx.fillRect(this.xBar, this.yBar, this.widthBar, this.heightBar);
    }
}


let bar = new Bar();
bar.drawBarMove();
addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        bar.barMoveLeft();
    } else
        if (event.keyCode == 39) {
            bar.barMoveRight();
        }
});




