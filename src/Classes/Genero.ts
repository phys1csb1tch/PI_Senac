export class Genero {
    protected static contadorId: number = 0;
    protected idGenero: number;
    protected nomeGenero: string;
    static listaGeneros: Genero[]=[]

    constructor(nomeGenero: string){
        this.idGenero=Genero.contadorId++;
        this.nomeGenero=nomeGenero;

        const generoExistente = Genero.listaGeneros.find(
            (genero) => genero.nomeGenero === nomeGenero );
    
        if (generoExistente) {
            console.error("Gênero já cadastrado.");
        } else {
            Genero.listaGeneros.push(this);
            console.log("Gênero cadastrado com sucesso!");
        }
    }

    exibir(){
        console.log(
            `ID: ${this.idGenero}
            Nome: ${this.nomeGenero}`)
    }

    static listarGeneros() {
        Genero.listaGeneros.forEach((genero) => console.log(genero.exibir()));
    }
}