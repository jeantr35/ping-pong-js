import Board from "./Board.js";
import BoardView from "./BoardView.js";
import Bar from "./Bar.js";
import Ball from "./Ball.js";


var board = new Board(800,400);
var bar = new Bar(20, 100, 40, 100, board);
var bar2 = new Bar(750, 100, 40, 100, board);
var ball = new Ball(400, 100, 10, board);
var canvas = document.getElementById("canvas");
var boardView = new BoardView(canvas, board);

window.addEventListener("load", main);
window.requestAnimationFrame(main);
boardView.draw();

document.addEventListener("keydown", function(ev){
    
    if (ev.key === "ArrowDown") {
        ev.preventDefault();
        bar.down();
    }
    else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        bar.up();
    }
    else if (ev.key === "s") {
        ev.preventDefault();
        bar2.down()
    }
    else if (ev.key === "w") {
        ev.preventDefault();
        bar2.up();
    }
    else if (ev.key === " ") {
        ev.preventDefault();
        boardView.playing = !boardView.playing;
    }
})

function main() {
    boardView.play();
    window.requestAnimationFrame(main); // Candidato #2
}

