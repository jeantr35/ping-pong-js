export default class Ball{

    constructor(xPosition, yPosition, radius, board){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.speedY = 0;
        this.speedX = 3;
        this.board = board;
        this.radius = radius;
        board.ball = this;
        this.kind = "circle";
        this.direction = 1;
    }

    move(){
        this.xPosition += this.speedX * this.direction;
        this.yPosition += this.speedY * this.direction;
    }

}