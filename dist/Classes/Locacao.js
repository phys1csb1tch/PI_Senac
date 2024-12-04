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
    exibir() {
        console.log(`ID livro: ${this.idLivro} | ID Usuario: ${this.idUsuario} | Locado em: ${this.dataLocacao.toLocaleDateString()} | Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()}`);
    }
    /**
     * Verifica se o livro está atrasado
     * @returns {Boolean} True == Atrasado | False == No prazo
     */
    isLate() {
        // let dataDevolvida = 
        // return   this.dataDevolucao.getTime() > (this.dataDevolvida.getTime()) &&
        //   this.devolvido === false
        //   ? true
        //   : false;
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
