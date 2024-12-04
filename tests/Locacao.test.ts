import { Locacao } from "../src/Classes/Locacao";

describe("Testando a classe Locação", () => {
  test("Devolver livro", () => {
    let locacao1 = new Locacao(
      1,
      1,
      new Date("09-08-2021"),
      new Date("09-08-2021"),
      null
    );
    expect(locacao1.devolver()).toBe(true);
  });
});
