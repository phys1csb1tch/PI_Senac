export class Genero {
    protected static contadorId: number = 1;
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

    exibir(): string{
        return `ID: ${this.idGenero} | Nome: ${this.nomeGenero}`
    }

    static listarGeneros() {
        Genero.listaGeneros.forEach((genero) => genero.exibir());
    }

    static exibirSoNomes(generos: Genero[]): string {
        return generos.map((genero) => genero.nomeGenero).join(', ')
    }
}