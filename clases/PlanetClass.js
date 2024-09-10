/*EJEMPLO DE FUNCIONES DENTRO DE CLASE */

function Planet(name,galaxy,numberOfMoons,weight){
    this.name = name;
    this.galaxy = galaxy;
    this.numberOfMoons = numberOfMoons;
    this.weight = weight;

    this.welcomeMessage = function(guestName){
        return "Saludos para" + guestName
        + "from" + this.name + "@" + this.galaxy;
    }
}

let earth = new Planet("Earth","Milky Way",1,10000);
Planet("Earth","Milky Way",1,10000);
//document.write es para escribir 
document.write(earth.welcomeMessage("Dr Isha"));