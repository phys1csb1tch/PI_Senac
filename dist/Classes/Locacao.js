"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    constructor(idLivro, idUsuario, dataLocacao, dataDevolucao, dataDevolvida) {
        this.devolvido = false;
        this.idLivro = idLivro;
        this.idUsuario = idUsuario;
        this.dataLocacao = dataLocacao;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolvida = dataDevolvida !== null && dataDevolvida !== void 0 ? dataDevolvida : null;
        Locacao.listaLocacao.push(this);
    }
    /**
     * Exibe informações sobre a locação
     */
    exibir() {
        console.log(` ID livro: ${this.idLivro} \n ID Usuario: ${this.idUsuario} \n Locado em: ${this.dataLocacao.toLocaleDateString()} \n Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()} \n Status: ${this.isLate() ? "Atrasado" : "No Prazo"} \n Devolvido: ${this.devolvido ? "Sim" : "Não"}`);
    }
    /**
     * Verifica se o livro está atrasado
     * @returns {Boolean} True == Atrasado | False == No prazo
     */
    isLate() {
        let isLate = new Date().getTime() > this.dataDevolucao.getTime() &&
            this.devolvido === false;
        return isLate ? true : false;
    }
    /**
     * Lista os registros de locação
     * @returns [void] - Printa no console as informações
     */
    static listarLocacoes() {
        Locacao.listaLocacao.forEach((el) => {
            console.log(el.exibir());
        });
    }
}
exports.Locacao = Locacao;
Locacao.contadorId = 1;
Locacao.listaLocacao = [];
