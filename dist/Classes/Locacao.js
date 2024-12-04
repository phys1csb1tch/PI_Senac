"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    static contadorId = 1;
    idLivro;
    idUsuario;
    dataLocacao;
    dataDevolucao;
    dataDevolvida;
    devolvido = false;
    static listaLocacao = [];
    constructor(idLivro, idUsuario, dataLocacao, dataDevolucao, dataDevolvida) {
        this.idLivro = idLivro;
        this.idUsuario = idUsuario;
        this.dataLocacao = dataLocacao;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolvida = dataDevolvida ?? null;
        Locacao.listaLocacao.push(this);
    }
    /**
     * Exibe informações sobre a locação
     */
    exibir() {
        return (` ID livro: ${this.idLivro} \n ID Usuario: ${this.idUsuario} \n Locado em: ${this.dataLocacao.toLocaleDateString()} \n Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()} \n Status: ${this.isLate() ? "Atrasado" : "No Prazo"} \n Devolvido: ${this.devolvido ? "Sim" : "Não"}`);
    }
    devolver() {
        this.devolvido = true;
        if (this.devolvido) {
            return true;
        }
        else {
            return false;
        }
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
    /**
     * Busca as locações por usuário
     * @param criterio - Pode ser o ID ou o Nome do usuário
     */
    static buscarLocacaoPorUsuario(criterio) {
        let locacoes = Locacao.listaLocacao.filter((el) => el.idUsuario == criterio.toString()); // FEATURE: Exibir o nome do usuario, implementar método na classe Usuarios para mostrar infos buscando por id
        if (locacoes) {
            console.log(`O usuário possui ${locacoes.length} locações no seu histórico`); // FEATURE: Exibir o nome do livro, implementar método na classe Livros para mostrar infos buscando por id
            locacoes.forEach((el) => {
                console.log(`ID do livro: ${el.idLivro}`);
            });
        }
        else {
            console.log(`O usuário não possuí locações`);
        }
        // console.log(Locacao.listaLocacao.filter(el => el.idUsuario == criterio))
    }
}
exports.Locacao = Locacao;
