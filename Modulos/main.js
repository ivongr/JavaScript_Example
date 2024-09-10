/*Importar el módulo a script */
import { name, draw, reportArea,
reportPerimeter } from "./Modules/square.js";


import { create, createReportList } from "./Modules/canvas.js";
let myCanvas = create("myCanvas", 
    document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 100, 100, 150,
    "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);