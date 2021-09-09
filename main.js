import Board from "./Board.js";
import BoardView from "./BoardView.js";
import Bar from "./Bar.js";
import Ball from "./Ball.js";


var board = new Board(800,400);
var bar = new Bar(20, 150, 40, 100, board);
var bar2 = new Bar(750, 150, 40, 100, board);
var ball = new Ball(400, 200, 10, board);
var canvas = document.getElementById("canvas");
var boardView = new BoardView(canvas, board);

window.addEventListener("load", main);
window.requestAnimationFrame(main);
boardView.draw();

document.addEventListener("keydown", function(ev){
    
    if (ev.key === "ArrowDown") {
        ev.preventDefault();
        bar2.up();
    }
    else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        bar2.down();
    }
    else if (ev.key === "w") {
        ev.preventDefault();
        bar.down()
    }
    else if (ev.key === "s") {
        ev.preventDefault();
        bar.up();
    }
    else if (ev.key === " ") {
        ev.preventDefault();
        boardView.playing = !boardView.playing;
    }
    else if (ev.key === "p") {
        if (boardView.gameover == true){
            boardView.gameover = false;
            boardView.playing = false;
            bar.setDefaulValues(20, 150);
            bar2.setDefaulValues(750, 150);
            ball.setDefaulValues(400, 200);
            boardView.clean();
            boardView.draw();
        }
    }
})

function main() {
    boardView.play();
    window.requestAnimationFrame(main);
}

