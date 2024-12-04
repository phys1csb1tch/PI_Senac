"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClassConstructor = void 0;
/**
 * Classe para ser a base de todas as clases que precisam se auto-gerenciar
 */
class BaseClassConstructor {
    static list = [];
    constructor() {
        BaseClassConstructor.list.push(this);
    }
    /**
     * Exibe as informações sobre as instancias criadas a partir da classe
     */
    // Precisa melhorar a lógica de exibição, talvez não usar console.log() e sim um return como onjeto e tratar o dado onde ele foi chamado. Se tivermos tempo, então implementamos
    static showList() {
        (BaseClassConstructor.list).forEach((el) => {
            console.log(el);
        });
    }
}
exports.BaseClassConstructor = BaseClassConstructor;
