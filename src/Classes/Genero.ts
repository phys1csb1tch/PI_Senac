/**
 * Classe que representa um gênero.
 * Cada gênero tem um ID único e um nome.
 */
export class Genero {
    protected static contadorId: number = 1; // Contador auto incrementado para gerar IDs únicos
    protected idGenero: number; // ID único do gênero
    protected nomeGenero: string; // Nome do gênero
    static listaGeneros: Genero[] = []; // Lista de gêneros cadastrados

    /**
     * Cria uma nova instância de Genero e a adiciona à lista de gêneros.
     * @param {string} nomeGenero - Nome do gênero a ser cadastrado.
     */
    constructor(nomeGenero: string) {
        this.idGenero = Genero.contadorId++;
        this.nomeGenero = nomeGenero;

        // Verifica se o gênero já existe na lista
        const generoExistente = Genero.listaGeneros.find(
            (genero) => genero.nomeGenero === nomeGenero);

        if (generoExistente) {
            console.error("Gênero já cadastrado.");
        } else {
            Genero.listaGeneros.push(this);
            console.log("Gênero cadastrado com sucesso!");
        }
    }

    /**
     * Exibe os detalhes do gênero, como ID e nome.
     * @returns {string} - Retorna uma string com as informações do gênero.
     */
    exibir(): string {
        return `ID: ${this.idGenero} | Nome: ${this.nomeGenero}`;
    }

    /**
     * Método estático que lista todos os gêneros cadastrados.
     * Exibe os detalhes de cada gênero utilizando o método `exibir()`.
     */
    static listarGeneros() {
        Genero.listaGeneros.forEach((genero) => genero.exibir());
    }

    /**
     * Método estático que exibe apenas os nomes dos gêneros em uma string.
     * @param {Genero[]} generos - Array de gêneros.
     * @returns {string} - Retorna uma string contendo os nomes dos gêneros separados por vírgula.
     */
    static exibirSoNomes(generos: Genero[]): string {
        return generos.map((genero) => genero.nomeGenero).join(', ');
    }
}
