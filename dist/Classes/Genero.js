"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
/**
 * Classe que representa um gênero.
 * Cada gênero tem um ID único e um nome.
 */
class Genero {
    static contadorId = 1; // Contador auto incrementado para gerar IDs únicos
    idGenero; // ID único do gênero
    nomeGenero; // Nome do gênero
    static listaGeneros = []; // Lista de gêneros cadastrados
    /**
     * Cria uma nova instância de Genero e a adiciona à lista de gêneros.
     * @param {string} nomeGenero - Nome do gênero a ser cadastrado.
     */
    constructor(nomeGenero) {
        this.idGenero = Genero.contadorId++;
        this.nomeGenero = nomeGenero;
        // Verifica se o gênero já existe na lista
        const generoExistente = Genero.listaGeneros.find((genero) => genero.nomeGenero === nomeGenero);
        if (generoExistente) {
            console.error("Gênero já cadastrado.");
        }
        else {
            Genero.listaGeneros.push(this);
            console.log("Gênero cadastrado com sucesso!");
        }
    }
    /**
     * Exibe os detalhes do gênero, como ID e nome.
     * @returns {string} - Retorna uma string com as informações do gênero.
     */
    exibir() {
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
    static exibirSoNomes(generos) {
        return generos.map((genero) => genero.nomeGenero).join(', ');
    }
}
exports.Genero = Genero;
