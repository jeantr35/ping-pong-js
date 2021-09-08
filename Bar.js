export default class Bar{

    constructor(xPosition, yPosition, width, height, board){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 10;
    }

    down(){
        this.yPosition -= this.speed;
    }

    up(){
        this.yPosition += this.speed;
    }

    toString(){
        return "x: " + this.xPosition + " y: " + this.yPosition;
    }

}