/*
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 * asdf
 */
var Juego = /** @class */ (function () {
    function Juego(nombre1, nombre2) {
        this.ganador = null;
        this.j1 = new Jugador(nombre1);
        this.j2 = new Jugador(nombre2);
        this.ganador = null;
    }
    Juego.prototype.wonPoint = function (PJ) {
        PJ.anota();
    };
    Juego.prototype.getScore = function () {
        var punt1 = this.j1.getPuntuacion(), punt2 = this.j2.getPuntuacion(), punt;
        // Iguales, Ventaja
        if (punt1 >= 40 && punt2 >= 40) {
            if (punt1 == 60) {
                this.ganador = this.j1;
            }
            else if (punt2 == 60) {
                this.ganador = this.j2;
            }
            else if (punt1 == 50 && punt2 == 40) {
                return "Ventaja " + this.j1.getNombre();
            }
            else if (punt1 == 40 && punt2 == 50) {
                return "Ventaja " + this.j2.getNombre();
            }
            else {
                if (punt1 == 40 && punt2 == 40) {
                    return "Deuce";
                }
                else {
                    this.j1.setPuntuacion(40);
                    this.j2.setPuntuacion(40);
                }
            }
        }
        else if (punt1 == 50) {
            this.ganador = this.j1;
        }
        else if (punt2 == 50) {
            this.ganador = this.j2;
        }
        // Ganador y salir
        if (this.ganador != undefined) {
            return "Win " + this.ganador.getNombre() + "!!!";
        }
        // puntos J1
        switch (punt1) {
            case 0:
                punt = "love";
                break;
            case 15:
                punt = "fiveteen";
                break;
            case 30:
                punt = "thirty";
                break;
            case 40:
                punt = "forty";
                break;
            default:
                break;
        }
        // Iguales (All)
        if (punt1 == punt2) {
            return punt + " All";
        }
        // puntos J2
        switch (punt2) {
            case 0:
                punt += " - love";
                break;
            case 15:
                punt += " - fiveteen";
                break;
            case 30:
                punt += " - thirty";
                break;
            case 40:
                punt += " - forty";
                break;
            default:
                break;
        }
        return punt;
    };
    return Juego;
}());
/*
 * Recibe de la Clase Juego la orden de anotar e incrementa su puntuación.
 * Cuando la puntuación alcance 50 ganará el juego.
 * En caso de empate (iguales) 50 será ventaja y cuando llegue a 60 ganará.
 * Cuando el otro jugador tenga la ventaja se modificará la puntuación de éste a 40.
 */
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.nombre = nombre;
        this.puntuacion = 0;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getPuntuacion = function () {
        return this.puntuacion;
    };
    Jugador.prototype.setPuntuacion = function (nueva) {
        this.puntuacion = nueva;
    };
    Jugador.prototype.getVentaja = function () {
        return this.ventaja;
    };
    Jugador.prototype.setVentaja = function (nuevaVentaja) {
        this.ventaja = nuevaVentaja;
    };
    // Incrementa la puntuación un nivel.
    Jugador.prototype.anota = function () {
        var p = this.getPuntuacion();
        if (p == 0 || p == 15) {
            p += 15;
        }
        else {
            p += 10;
        }
        this.setPuntuacion(p);
    };
    return Jugador;
}());
/*
 * Aplicación de Tennis
 * Crea la app Juego que creará los dos jugadores.
 * Introduce los nómbres de los jugadores.
 *
 */
console.log("Comienza el partido:");
var /*nom1:string = prompt("Jugador 1: "),
    nom2:string = prompt("Jugador 2: "),*/ nombre1 = "Jugador1", nombre2 = "Jugador2";
/*
if (nom1 != "") {
    nombre1 = nom1;
}
if (nom2 != "") {
    nombre2 = nom2;
}
*/
var juego1 = new Juego(nombre1, nombre2);
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
