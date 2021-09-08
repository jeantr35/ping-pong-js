import Board from "./Board.js";
import BoardView from "./BoardView.js";
import Bar from "./Bar.js";

window.addEventListener("load", main);

function main() {
    var board = new Board(800,400);
    var bar = new Bar(20, 100, 40, 100, board);
    var bar2 = new Bar(750, 100, 40, 100, board);
    var canvas = document.getElementById("canvas");
    var boardView = new BoardView(canvas, board);

    boardView.draw();
}