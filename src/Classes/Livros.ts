import { Genero } from './Genero';

/**
 * Classe que representa um livro.
 */
export class Livros {
    protected static contadorId: number = 1; // contador auto incrementado
    protected idLivro: number; // ID único do livro
    protected nome: string; // Nome do livro
    protected autor: string; // Autor do livro
    protected dataPublicacao: Date; // Data de publicação do livro
    protected editora: string; // Editora do livro
    protected edicao: string; // Edição do livro
    protected numeroPaginas: number; // Número de páginas do livro
    protected disponivel: boolean = true; // Disponibilidade do livro (inicia como disponível)
    protected genero: Genero[]; // Gêneros associados ao livro
    static listaLivros: Livros[] = []; // Lista de livros cadastrados

    /**
     * Cria uma nova instância de livro e adiciona ao banco de dados.
     * @param {string} nome - Nome do livro.
     * @param {string} autor - Autor do livro.
     * @param {Date} dataPublicacao - Data de publicação do livro.
     * @param {string} editora - Nome da editora do livro.
     * @param {string} edicao - Edição do livro.
     * @param {number} numeroPaginas - Número de páginas do livro.
     * @param {Genero[]} genero - Array de gêneros associados ao livro.
     */
    constructor(nome: string,
                autor: string,
                dataPublicacao: Date,
                editora: string,
                edicao: string,
                numeroPaginas: number,
                genero: Genero[]) {
        this.idLivro = Livros.contadorId++;
        this.nome = nome;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.editora = editora;
        this.edicao = edicao;
        this.numeroPaginas = numeroPaginas;
        this.genero = genero;

        // Verifica se o livro já está cadastrado
        const livroExistente = Livros.listaLivros.find(
            (livro) => livro.nome === nome);
    
        if (livroExistente) {
            console.error("Livro já cadastrado.");
        } else {
            Livros.listaLivros.push(this);
            console.log("Livro cadastrado com sucesso!");
        }
    }

    /**
     * Método estático para listar todos os livros cadastrados.
     */
    static listarLivros() {
        Livros.listaLivros.forEach((livro) => console.log(livro.exibir()));
    }

    /**
     * Exibe os detalhes do livro, como ID, título, autor, data de publicação, etc.
     * @returns {string} - Retorna uma string com as informações detalhadas do livro.
     */
    exibir(): string {
       return `ID: ${this.idLivro}
            Título: ${this.nome}
            Autor: ${this.autor}
            Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}
            Editora: ${this.editora}
            Edição: ${this.edicao}
            Número de Páginas: ${this.numeroPaginas}
            Disponível para locação? ${this.disponivel ? 'Sim' : 'Não'}
            Gênero: ${Genero.exibirSoNomes(this.genero)}`;
    }

    /**
     * Verifica a disponibilidade do livro para locação.
     * @returns {string} - Retorna uma mensagem indicando se o livro está disponível ou locado.
     */
    verificaDisponibilidade() {
        return this.disponivel ? 'O livro está disponível para locação.' : 'Este livro está locado.';
    }

    /**
     * Altera o estado de disponibilidade do livro (disponível/indisponível).
     * Exibe a mensagem correspondente à mudança.
     */
    trocaDisponibilidade() {
        this.disponivel = !this.disponivel;
        console.log(`O livro agora está ${this.disponivel ? "disponível." : "indisponível."}`);
    }

    /**
     * Adiciona um novo gênero ao livro. (Método incompleto)
     * Este método está incompleto e não está funcionando corretamente no momento.
     */
    adicionaGenero() {
        // Método incompleto
        Genero.listarGeneros;
        const novoGenero = prompt("Escolha um Gênero: ");
    }
}