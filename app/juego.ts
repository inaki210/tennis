
    <script src="./app/juego.js" type="text/javascript" charset="utf-8"></script>
    <script src="./app/jugador.js" type="text/javascript" charset="utf-8"></script>
import { Jugador } from "../app/jugador";

/* 
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 * asdf
 */
export class Juego {

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

        let punt1 = this.j1.getPuntuacion(),
            punt2 = this.j2.getPuntuacion(),
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


