import Board from "./Board.js";
import BoardView from "./BoardView.js";
import Bar from "./Bar.js";

var board = new Board(800,400);
var bar = new Bar(20, 100, 40, 100, board);
var bar2 = new Bar(750, 100, 40, 100, board);
var canvas = document.getElementById("canvas");
var boardView = new BoardView(canvas, board);

window.addEventListener("load", main);

document.addEventListener("keydown", function(ev){
    if (ev.key === "ArrowDown") {
        bar.down();
    }
    else if (ev.key === "ArrowUp") {
        bar.up();
    }
    console.log(""+bar);
})

function main() {

    boardView.draw();
}

