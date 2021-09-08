export default class Board{

    constructor(width, height){
        this.height = height;
        this.width = width;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    } 

    get elements() {
        var elements = this.bars;
        elements.push(this.ball);
        return elements;
    }

}