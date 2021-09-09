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
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI / 12;
        this.speed = 3;
    }

    collision(bar){
    //Reacciona a la colisiona con una barra que recibe como parametro  
    var relative_intersect_y = ( bar.yPosition + (bar.height / 2) ) - this.yPosition;

    var normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

    this.speedY = this.speed * -Math.sin(this.bounce_angle);
    this.speedX = this.speed * Math.cos(this.bounce_angle);

    if (this.xPosition > (this.board.width / 2)) this.direction = -1;
    else this.direction = 1;

    }

    borderCollision(){
    if(this.yPosition + this.speedY > this.board.height - this.radius || this.yPosition + this.speedY < this.radius){
        this.speedY = -this.speedY;
    }}

    goalCollision(){
        if (this.xPosition + this.speedX > this.board.width - this.radius || this.xPosition + this.speedX < this.radius) {
            return true;
        }
    }

    get width(){
        return this.radius * 2;
    }

    get height(){
        return this.radius * 2;
    }

    setDefaulValues(x, y){
        this.xPosition = x;
        this.yPosition = y;
        this.direction = 1;
        this.bounce_angle = 0;
        this.speedY = 0;
        this.speedX = 3;
    }

    move(){
        this.xPosition += this.speedX * this.direction;
        this.yPosition += this.speedY * this.direction;
    }

}