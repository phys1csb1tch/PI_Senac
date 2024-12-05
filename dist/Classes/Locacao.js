"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
/**
 *# Classe para gerenciar locações
 */
class Locacao {
    static contadorId = 1;
    idLivro;
    idUsuario;
    dataLocacao;
    dataDevolucao;
    dataDevolvida;
    devolvido = false;
    static listaLocacao = [];
    /**
     * Representa uma locação de livro.
     *
     * **Exemplo de uso:**
     *
     * ```js
     * const locacao = new Locacao(1, 101, '2024-12-01', '2024-12-15', '2024-12-10');
     * ```
     *
     * @param {number|string} idLivro - O ID do livro que está sendo locado.
     * @param {number|string} idUsuario - O ID do usuário que está fazendo a locação.
     * @param {string} dataLocacao - A data em que o livro foi locado.
     * @param {string} dataDevolucao - A data em que o livro deve ser devolvido.
     * @param {string} dataDevolvida - A data em que o livro foi realmente devolvido.
     *
     */
    constructor(idLivro, idUsuario, dataLocacao, dataDevolucao, dataDevolvida) {
        this.idLivro = idLivro;
        this.idUsuario = idUsuario;
        this.dataLocacao = dataLocacao;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolvida = dataDevolvida ?? null;
        Locacao.listaLocacao.push(this);
    }
    /**
     * O método exibir nos retorna uma string com as informações da locação.
     *
     *  **Exemplo de retorno**
     * ```txt
     *‎ ‎
     * "ID livro: 1 \n ID Usuario: 2 \n Locado em: 12/02/2024 \n Entrega Devolução: 16/02/2024 \n Status: No prazo \n Devolvido: Sim";
     *‎ ‎
     * ```
     * @returns string
     */
    exibir() {
        return ` ID livro: ${this.idLivro} \n ID Usuario: ${this.idUsuario} \n Locado em: ${this.dataLocacao.toLocaleDateString()} \n Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()} \n Status: ${this.isLate() ? "Atrasado" : "No Prazo"} \n Devolvido: ${this.devolvido ? "Sim" : "Não"}`;
    }
    /**
     * Atualiza o status da locação para verdadeiro
     * @returns boolean
     */
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
