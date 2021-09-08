export default class Bar{

    constructor(xPosition, yPosition, width, height, board){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
    }

    down(){
        
    }

}