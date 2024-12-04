"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Locacao_1 = require("../src/Classes/Locacao");
describe("Testando a classe Locação", () => {
    test("Devolver livro", () => {
        let locacao1 = new Locacao_1.Locacao(1, 1, new Date("09-08-2021"), new Date("09-08-2021"), null);
        expect(locacao1.devolver()).toBe(true);
    });
});
