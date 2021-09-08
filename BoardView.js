import draw from "./HelperMethods.js";
export default class BoardView{

    constructor(canvas, board){
        this.canvas = canvas;
        this.board = board;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.context = canvas.getContext("2d");
        this.playing = false;
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

    play(){
        if(this.playing){
            this.clean();
            this.draw();
            this.board.ball.move();
        }
    }

}