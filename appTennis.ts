
import { Juego } from "./app/juego";

/* 
 * Aplicación de Tennis
 * Crea la app Juego que creará los dos jugadores.
 * Introduce los nómbres de los jugadores.
 * 
 */

 
console.log("Comienza el partido:");

let nom1:string = prompt("Jugador 1: "),
    nom2:string = prompt("Jugador 2: "),
    nombre1:string = "Jugador1",
    nombre2:string = "Jugador2";

if (nom1 != "") { 
    nombre1 = nom1; 
}
if (nom2 != "") { 
    nombre2 = nom2; 
}

let juego1:Juego = new Juego(nombre1, nombre2);

console.log(juego1.getScore());
juego1.wonPoint(juego1.j1);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j2);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j1);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j1);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j2);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j2);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j1);
console.log(juego1.getScore());
juego1.wonPoint(juego1.j1);
console.log(juego1.getScore());


console.log("Puntuación J1: " + juego1.j1.getPuntuacion());
console.log("Puntuación J2: " + juego1.j2.getPuntuacion());
console.log("Resultado: " + juego1.getScore());
console.log("Ganador: " + juego1.ganador.getNombre());



/*
let nom1:string = prompt("Jugador 1: "),
    nom2:string = prompt("Jugador 2: "),
    nombre1:string = "Jugador1",
    nombre2:string = "Jugador2";

if (nom1 != "") { nombre1 = nom1; }
if (nom2 != "") { nombre2 = nom2; }  

let juego1:Juego = new Juego(nombre1, nombre2);
console.log(juego1.getScore());

while (juego1.ganador == null) {
    let gana:number = parseInt(prompt("Ha marcado jugador [1|2]: "));
    if (gana == 1) {
        juego1.wonPoint(juego1.j1);
    }
    else {
        juego1.wonPoint(juego1.j2);
    }

    console.log(juego1.getScore());
    //document.getElementById("resul").innerHTML = juego1.getScore();
}
*/


