const name = "square";

function draw(ctx,length,x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,length,length);

    return{
        length: length,
        x: x,
        y: y,
        color: color
    };
}

function reportArea(length,listId){
    let listItem = document.createElement("li");
    listItem.textContent = `${name} area es ${length * length}px squared.`

    let list = document.getElementById(listId);
    list.appendChild(listItem);
}

function reportPerimeter(length, listId){
    let listItem = document.createElement("li");
    listItem.textContent = `${name} perimetró es ${length * 4}px.`

    let list = document.getElementById(listId);
    list.append(listItem);
}
//Elementos a exportar

export { name, draw, reportArea,
 reportPerimeter};