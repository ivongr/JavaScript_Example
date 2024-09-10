import {Factura} from "./module4/factura.js";


const factura1 = new Factura  (201,"ADO.SOLIT","usd",5,54);
const factura2 = new Factura  (201,"SQO","usd",23,4);

Factura.subtotal(factura1);