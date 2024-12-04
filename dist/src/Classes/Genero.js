"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
class Genero {
    static contadorId = 1;
    idGenero;
    nomeGenero;
    static listaGeneros = [];
    constructor(nomeGenero) {
        this.idGenero = Genero.contadorId++;
        this.nomeGenero = nomeGenero;
        const generoExistente = Genero.listaGeneros.find((genero) => genero.nomeGenero === nomeGenero);
        if (generoExistente) {
            console.error("Gênero já cadastrado.");
        }
        else {
            Genero.listaGeneros.push(this);
            console.log("Gênero cadastrado com sucesso!");
        }
    }
    exibir() {
        return `ID: ${this.idGenero} | Nome: ${this.nomeGenero}`;
    }
    static listarGeneros() {
        Genero.listaGeneros.forEach((genero) => genero.exibir());
    }
    static exibirSoNomes(generos) {
        return generos.map((genero) => genero.nomeGenero).join(', ');
    }
}
exports.Genero = Genero;
