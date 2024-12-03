export class Genero {
    protected static contadorId: number = 0;
    protected idGenero: number;
    protected nomeGenero: string;

    constructor(nomeGenero: string){
        this.idGenero=Genero.contadorId++;
        this.nomeGenero=nomeGenero;
    }

    exibir(){
        console.log(
            `ID: ${this.idGenero}
            Nome: ${this.nomeGenero}`)
    }
}