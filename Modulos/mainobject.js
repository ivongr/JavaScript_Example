/*Modulo  objeto*/
/*Importar el módulo a script */
import * as Square from "./Modules/square.js";
import * as Canvas from "./Modules/canvas.js";

let myCanvas = Canvas.create("myCanvas", 
    document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let square1 = Square.draw(myCanvas.ctx, 100, 100, 150,
    "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);