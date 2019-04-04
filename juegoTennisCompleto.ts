

/* 
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 * asdf
 */
class Juego {

    public j1:Jugador;
    public j2:Jugador;
    public ganador:Jugador = null;

	constructor(nombre1:string, nombre2:string) {
		this.j1 = new Jugador(nombre1);
        this.j2 = new Jugador(nombre2);
        this.ganador = null;
    }
    
    public wonPoint(PJ:Jugador) {
        PJ.anota();
    }

    public getScore():string {

        let punt1:number = this.j1.getPuntuacion(),
            punt2:number = this.j2.getPuntuacion(),
            punt:string;

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
            return "Win " + this.ganador.getNombre() + "!!!"
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
    }
}




/* 
 * Recibe de la Clase Juego la orden de anotar e incrementa su puntuación.
 * Cuando la puntuación alcance 50 ganará el juego.
 * En caso de empate (iguales) 50 será ventaja y cuando llegue a 60 ganará.
 * Cuando el otro jugador tenga la ventaja se modificará la puntuación de éste a 40.
 */
class Jugador {

    private nombre:string;
    private puntuacion:number;
    private ventaja:boolean;

	constructor(nombre:string) {
        this.nombre = nombre;
        this.puntuacion = 0;
	}

    public getNombre():string {
        return this.nombre;
    }

	public getPuntuacion():number {
		return this.puntuacion;
    }
	public setPuntuacion(nueva:number) {
        this.puntuacion = nueva;
    }

    public getVentaja():boolean {
        return this.ventaja;
    }
    public setVentaja(nuevaVentaja:boolean) {
        this.ventaja = nuevaVentaja;
    }
    
    // Incrementa la puntuación un nivel.
	public anota() {
        let p:number = this.getPuntuacion();
        
        if (p == 0 || p == 15) {
            p += 15;
        }
        else {
            p += 10;
        }

        this.setPuntuacion(p);
	}
}




/* 
 * Aplicación de Tennis
 * Crea la app Juego que creará los dos jugadores.
 * Introduce los nómbres de los jugadores.
 * 
 */

 
//console.log("Comienza el partido:");
// variables de elementos y estado
let juego1:Juego = new Juego(null, null),
    resultadoCadena:string;

function anotarPunto(num:number) {
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

function iniciar(accion:string) {
    // variables con valores
    var accion:string = accion,
        lblJugador1:Element = document.getElementById("lblPlayer1"),
        lblJugador2:Element = document.getElementById("lblPlayer2"),
        txtJugador1:Element = document.getElementById("txtPlayer1"),
        txtJugador2:Element = document.getElementById("txtPlayer2"),
        btnPunto1:Element = document.getElementById("btnPlayer1"),
        btnPunto2:Element = document.getElementById("btnPlayer2"),
        nombre1:string = txtJugador1.value,
        nombre2:string = txtJugador2.value;


    if (accion == "jugar") {
        
        if (nombre1 == null || nombre1 == "") {
            nombre1 = "Jugador1";
        }
        if (nombre2 == null || nombre2 == "") {
            nombre2 = "Jugador2";
        }
        juego1 = new Juego(nombre1, nombre2)


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
    else if (accion == "nuevo"){
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




