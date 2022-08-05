export class Proyecto {
    id: number;
    nombreE: string;
    descripcionE: string;
    urlE: string;

    constructor(nombreE: string, descripcionE: string, urlE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.urlE = urlE;
    }
}