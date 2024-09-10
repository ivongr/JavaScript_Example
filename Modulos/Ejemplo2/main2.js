import {capitalize, roundToDecimalPlace} from "./Modules2/number.js";

function displayTotal(name,total){
    return `${capitalize(name)},tu costo total es
    ${roundToDecimalPlace(total)}`;
}

displayTotal("hola",10.444);

export {displayTotal};