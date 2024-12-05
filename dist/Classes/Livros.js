"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
const Genero_1 = require("./Genero");
/**
 * Classe que representa um livro.
 */
class Livros {
    static contadorId = 1; // contador auto incrementado
    idLivro; // ID único do livro
    nome; // Nome do livro
    autor; // Autor do livro
    dataPublicacao; // Data de publicação do livro
    editora; // Editora do livro
    edicao; // Edição do livro
    numeroPaginas; // Número de páginas do livro
    disponivel = true; // Disponibilidade do livro (inicia como disponível)
    genero; // Gêneros associados ao livro
    static listaLivros = []; // Lista de livros cadastrados
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
    constructor(nome, autor, dataPublicacao, editora, edicao, numeroPaginas, genero) {
        this.idLivro = Livros.contadorId++;
        this.nome = nome;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.editora = editora;
        this.edicao = edicao;
        this.numeroPaginas = numeroPaginas;
        this.genero = genero;
        // Verifica se o livro já está cadastrado
        const livroExistente = Livros.listaLivros.find((livro) => livro.nome === nome);
        if (livroExistente) {
            console.error("Livro já cadastrado.");
        }
        else {
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
    exibir() {
        return `ID: ${this.idLivro}
            Título: ${this.nome}
            Autor: ${this.autor}
            Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}
            Editora: ${this.editora}
            Edição: ${this.edicao}
            Número de Páginas: ${this.numeroPaginas}
            Disponível para locação? ${this.disponivel ? 'Sim' : 'Não'}
            Gênero: ${Genero_1.Genero.exibirSoNomes(this.genero)}`;
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
        Genero_1.Genero.listarGeneros;
        const novoGenero = prompt("Escolha um Gênero: ");
    }
}
exports.Livros = Livros;
