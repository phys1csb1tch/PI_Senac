export class Locacao {
  protected static contadorId: number = 1;
  protected idLivro: string | number;
  protected idUsuario: string | number;
  protected dataLocacao: Date;
  protected dataDevolucao: Date;
  protected dataDevolvida: Date | null;
  protected devolvido: boolean = false;
  static listaLocacao: Locacao[] = [];

  constructor(
    idLivro: string | number,
    idUsuario: string | number,
    dataLocacao: Date,
    dataDevolucao: Date,
    dataDevolvida: Date | null
  ) {
    this.idLivro = idLivro;
    this.idUsuario = idUsuario;
    this.dataLocacao = dataLocacao;
    this.dataDevolucao = dataDevolucao;
    this.dataDevolvida = dataDevolvida ?? null;

    Locacao.listaLocacao.push(this);
  }

  exibir() {
    console.log(
      `ID livro: ${this.idLivro} | ID Usuario: ${
        this.idUsuario
      } | Locado em: ${this.dataLocacao.toLocaleDateString()} | Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()}`
    );
  }
  /**
   * Verifica se o livro está atrasado
   * @returns {Boolean} True == Atrasado | False == No prazo
   */
  isLate(): boolean { // FIX
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

  static listarLocacoes(): void {
    Locacao.listaLocacao.forEach((el: Locacao) => {
      console.log(el.exibir());
    });
  }
}
