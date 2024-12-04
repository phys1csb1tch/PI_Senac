"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
const Genero_1 = require("./Genero");
class Livros {
    constructor(nome, autor, dataPublicacao, editora, edicao, numeroPaginas, genero) {
        this.disponivel = true; // aqui torna o livro disponivel no momento da criação
        this.idLivro = Livros.contadorId++;
        this.nome = nome;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.editora = editora;
        this.edicao = edicao;
        this.numeroPaginas = numeroPaginas;
        ;
        this.genero = genero;
        const livroExistente = Livros.listaLivros.find((livro) => livro.nome === nome);
        if (livroExistente) {
            console.error("Livro já cadastrado.");
        }
        else {
            Livros.listaLivros.push(this);
            console.log("Livro cadastrado com sucesso!");
        }
    }
    static listarLivros() {
        Livros.listaLivros.forEach((livro) => console.log(livro.exibir()));
    }
    exibir() {
        return `ID: ${this.idLivro}
            Título: ${this.nome}
            Autor: ${this.autor}
            Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}
            Editora: ${this.editora}
            Edição: ${this.edicao}
            Número de Páginas: ${this.numeroPaginas}
            Disponível para locação? ${this.disponivel ? 'Sim' : 'Não'}
            Gênero: ${Genero_1.Genero.exibirSoNomes(this.genero)} 
            `;
    }
    verificaDisponibilidade() {
        this.disponivel ? 'O livro está disponível para locação.' : 'Este livro está locado.';
    }
    trocaDisponibilidade() {
        this.disponivel = !this.disponivel;
        console.log(`O livro agora está ${this.disponivel ? "disponível." : "indisponível."}`);
    }
    adicionaGenero() {
        Genero_1.Genero.listarGeneros;
        const novoGenero = prompt("Escolha um Gênero: ");
    }
}
exports.Livros = Livros;
Livros.contadorId = 1; //contador auto incrementado
Livros.listaLivros = []; // array de armazenamento
