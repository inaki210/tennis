"use strict";
exports.__esModule = true;
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
exports.Jugador = Jugador;
