/**
 * Classe para ser a base de todas as clases que precisam se auto-gerenciar
 */
export abstract class BaseClassConstructor{
  static list: BaseClassConstructor[]=[];
  constructor(){
    BaseClassConstructor.list.push(this);
  }
  /**
   * Exibe as informações sobre as instancias criadas a partir da classe
   */
  // Precisa melhorar a lógica de exibição, talvez não usar console.log() e sim um return como onjeto e tratar o dado onde ele foi chamado. Se tivermos tempo, então implementamos
  static showList(){
    (BaseClassConstructor.list).forEach((el : BaseClassConstructor) => {
      console.log(el);
    })
  }
} 