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
        if (this.yPosition > 0) {
            this.yPosition -= this.speed;    
        }
        else{this.yPosition = 0;}
        
    }

    up(){
        if (this.yPosition < this.board.height - this.height) {
            this.yPosition += this.speed;    
        }
        else{this.yPosition = this.board.height - this.height;}
    }

    toString(){
        return "x: " + this.xPosition + " y: " + this.yPosition;
    }

    setDefaulValues(x, y){
        this.xPosition = x;
        this.yPosition = y;
    }

}