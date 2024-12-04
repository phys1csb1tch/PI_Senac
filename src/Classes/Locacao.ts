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
  /**
   * Exibe informações sobre a locação
   */
  exibir() {
    console.log(
      ` ID livro: ${this.idLivro} \n ID Usuario: ${
        this.idUsuario
      } \n Locado em: ${this.dataLocacao.toLocaleDateString()} \n Entrega Devolução: ${this.dataDevolucao.toLocaleDateString()} \n Status: ${
        this.isLate() ? "Atrasado" : "No Prazo"
      } \n Devolvido: ${this.devolvido ? "Sim" : "Não"}`
    );
  }

  devolver() {
    this.devolvido = true;
    if (this.devolvido) {
      return true;
    }else{
      return false;
    }
  }
  /**
   * Verifica se o livro está atrasado
   * @returns {Boolean} True == Atrasado | False == No prazo
   */
  isLate(): boolean {
    let isLate =
      new Date().getTime() > this.dataDevolucao.getTime() &&
      this.devolvido === false;
    return isLate ? true : false;
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

  /**
   * Busca as locações por usuário
   * @param criterio - Pode ser o ID ou o Nome do usuário
   */
  static buscarLocacaoPorUsuario(criterio: string | number) {
    let locacoes = Locacao.listaLocacao.filter(
      (el) => el.idUsuario == criterio.toString()
    ); // FEATURE: Exibir o nome do usuario, implementar método na classe Usuarios para mostrar infos buscando por id
    if (locacoes) {
      console.log(
        `O usuário possui ${locacoes.length} locações no seu histórico`
      ); // FEATURE: Exibir o nome do livro, implementar método na classe Livros para mostrar infos buscando por id
      locacoes.forEach((el) => {
        console.log(`ID do livro: ${el.idLivro}`);
      });
    } else {
      console.log(`O usuário não possuí locações`);
    }
    // console.log(Locacao.listaLocacao.filter(el => el.idUsuario == criterio))
  }
}
