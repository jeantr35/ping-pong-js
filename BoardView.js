import draw from "./HelperMethods.js";
export default class BoardView{

    constructor(canvas, board){
        this.canvas = canvas;
        this.board = board;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.context = canvas.getContext("2d");
    }

    draw(){
        for (let i = this.board.elements.length - 1; i >= 0; i--) {
            let element = this.board.elements[i];

            draw(this.context, element);
            
        }
    }

}