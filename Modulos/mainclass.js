/*Importar el módulo a script */
import { Square } from "./Modules/squareclass.js"
import { Canvas } from "./Modules/canvasclass.js";

let myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

let square1 = new Square (myCanvas.ctx, myCanvas.listId, 50, 50, 100,'blue');
square1.draw();
square1.reportArea();
//square1.reportPerimeter();