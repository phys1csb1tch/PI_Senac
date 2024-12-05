"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Locacao_1 = require("../Classes/Locacao");
describe("Testando a classe Locação", () => {
    test("Devolver livro", () => {
        let locacao1 = new Locacao_1.Locacao(1, 1, new Date("09-08-2021"), new Date("09-08-2021"), null);
        expect(locacao1.devolver()).toBe(true);
    });
    test("Exibe as informações da locação", () => {
        let locacao1 = new Locacao_1.Locacao(1, 1, new Date("09-08-2021"), new Date("09-08-2021"), null);
        expect(locacao1.exibir()).toBe(` ID livro: 1 
 ID Usuario: 1 
 Locado em: 08/09/2021 
 Entrega Devolução: 08/09/2021 
 Status: Atrasado 
 Devolvido: Não`);
    });
});
