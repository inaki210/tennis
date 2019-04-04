"use strict";
exports.__esModule = true;
var juego_1 = require("../app/juego");
/*
 * Aplicación de Tennis
 * Crea la app Juego que creará los dos jugadores.
 * Introduce los nómbres de los jugadores.
 *
 */
//console.log("Comienza el partido:");
// variables de elementos y estado
var juego1 = new juego_1.Juego(null, null), resultadoCadena;
function anotarPunto(num) {
    if (num == 1) {
        juego1.wonPoint(juego1.j1);
    }
    else if (num == 2) {
        juego1.wonPoint(juego1.j2);
    }
    else {
    }
    this.imprimirResultado();
}
function imprimirResultado() {
    resultadoCadena += "<p>" + juego1.getScore() + "</p>";
    document.getElementById("divResultados").innerHTML = resultadoCadena;
    // Si ha ganado un jugador : se bloquean los botones
    if (juego1.getScore().indexOf("Win") >= 0) {
        // Esconder botones
        document.getElementById("btnPlayer1").disabled = true;
        document.getElementById("btnPlayer2").disabled = true;
    }
}
function iniciar(accion) {
    // variables con valores
    var accion = accion, lblJugador1 = document.getElementById("lblPlayer1"), lblJugador2 = document.getElementById("lblPlayer2"), txtJugador1 = document.getElementById("txtPlayer1"), txtJugador2 = document.getElementById("txtPlayer2"), btnPunto1 = document.getElementById("btnPlayer1"), btnPunto2 = document.getElementById("btnPlayer2"), nombre1 = txtJugador1.value, nombre2 = txtJugador2.value;
    if (accion == "jugar") {
        if (nombre1 == null || nombre1 == "") {
            nombre1 = "Jugador1";
        }
        if (nombre2 == null || nombre2 == "") {
            nombre2 = "Jugador2";
        }
        juego1 = new juego_1.Juego(nombre1, nombre2);
        // resetea el resultado y comienza desde cero (love-love)
        resultadoCadena = "";
        this.imprimirResultado();
        // Poner nombres
        lblJugador1.innerHTML = nombre1;
        lblJugador2.innerHTML = nombre2;
        // Mostrar botones
        btnPunto1.style = "display: ;";
        btnPunto2.style = "display: ;";
        // Esconder cajas de texto
        txtJugador1.value = "";
        txtJugador2.value = "";
        txtJugador1.style = "display: none;";
        txtJugador2.style = "display: none;";
        // coultar botón Play y mostrar el botón New
        document.getElementById("btnPlay").style = "display: none;";
        document.getElementById("btnNew").style = "display: ;";
    }
    else if (accion == "nuevo") {
        // Poner titulos
        lblJugador1.innerHTML = "Player 1";
        lblJugador2.innerHTML = "Player 2";
        // Esconder botones
        btnPunto1.disabled = false;
        btnPunto2.disabled = false;
        btnPunto1.style = "display: none;";
        btnPunto2.style = "display: none;";
        // Mostrar cajas de texto
        txtJugador1.style = "display: ;";
        txtJugador2.style = "display: ;";
        // Borrar resultados
        document.getElementById("divResultados").innerHTML = "";
        // coultar botón New y mostrar el botón Play
        document.getElementById("btnNew").style = "display: none;";
        document.getElementById("btnPlay").style = "display: ;";
    }
}
