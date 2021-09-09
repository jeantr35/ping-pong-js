import { draw, hit } from "./HelperMethods.js";
export default class BoardView{

    constructor(canvas, board){
        this.canvas = canvas;
        this.board = board;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.context = canvas.getContext("2d");
        this.playing = false;
        this.gameover = false;
    }

    draw(){
        for (let i = this.board.elements.length - 1; i >= 0; i--) {
            let element = this.board.elements[i];

            draw(this.context, element);
            
        }
    }

    clean(){
        this.context.clearRect(0, 0, this.board.width, this.board.height);
    }

    checkCollisions(){
        for (var i = this.board.bars.length - 1; i >= 0; i--) {
            var bar = this.board.bars[i];
            if (hit(bar, this.board.ball)) {
                this.board.ball.collision(bar);
            }
        }
        this.board.ball.borderCollision();
    }

    play(){
        if(this.playing && !this.gameover){
            this.clean();
            this.draw();
            this.checkCollisions();
            if (this.board.ball.goalCollision()) {
                this.gameover = true;
            }
            this.board.ball.move();
        }
    }

}