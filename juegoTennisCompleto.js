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
                if (punt1 == 50 && punt2 == 50) {
                    this.j1.setPuntuacion(40);
                    this.j2.setPuntuacion(40);
                }
                return "Deuce";
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
                punt1 = 40;
                punt = "forty";
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
//console.log("Comienza el partido:");
// variables de elementos y estado
var juego1 = new Juego(null, null), resultadoCadena;
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
        juego1 = new Juego(nombre1, nombre2);
        // resetea el resultado y comienza desde cero (love-love)
        resultadoCadena = "";
        this.imprimirResultado();
        // Poner nombres
        lblJugador1.innerHTML = nombre1;
        lblJugador2.innerHTML = nombre2;
        // Mostrar botones
        btnPunto1.classList.remove("display-none");
        btnPunto2.classList.remove("display-none");
        // Esconder cajas de texto
        txtJugador1.value = "";
        txtJugador2.value = "";
        txtJugador1.classList.add("display-none");
        txtJugador2.classList.add("display-none");
        /*
        txtJugador1.style = "display: none;";
        txtJugador2.style = "display: none;";
        */
        // coultar botón Play y mostrar el botón New
        document.getElementById("btnPlay").classList.add("display-none");
        document.getElementById("btnNew").classList.remove("display-none");
    }
    else if (accion == "nuevo") {
        // Poner titulos
        lblJugador1.innerHTML = "Player 1";
        lblJugador2.innerHTML = "Player 2";
        // Esconder botones
        btnPunto1.disabled = false;
        btnPunto2.disabled = false;
        btnPunto1.classList.add("display-none");
        btnPunto2.classList.add("display-none");
        /*btnPunto1.style = "display: none;";
        btnPunto2.style = "display: none;";*/
        // Mostrar cajas de texto
        txtJugador1.classList.remove("display-none");
        txtJugador2.classList.remove("display-none");
        // Borrar resultados
        document.getElementById("divResultados").innerHTML = "";
        // coultar botón New y mostrar el botón Play
        document.getElementById("btnNew").classList.add("display-none");
        document.getElementById("btnPlay").classList.remove("display-none");
    }
}
