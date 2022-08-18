export class Persona{
    id?: number;
    nombreE: string;
    apellidoE: string;
    imgE: string;
    acercadeE: string;
    tituloE: string;

    constructor(nombreE: string, apellidoE: string, imgE: string, acercadeE: string, tituloE: string){
        this.nombreE = nombreE;
        this.apellidoE = apellidoE;
        this.imgE = imgE;
        this.acercadeE = acercadeE;
        this.tituloE = tituloE;
    }
}