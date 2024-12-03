import { Genero } from './Genero';

export class Livros {
    protected static contadorId: number = 0;
    protected idLivro: number;
    protected nome: string;
    protected autor: string;
    protected dataPublicacao: Date;
    protected editora: string;
    protected edicao: string;
    protected numeroPaginas: number;
    protected disponivel: boolean;
    protected genero: Genero[];

    constructor(nome: string,
    autor: string,
    dataPublicacao: Date,
    editora: string,
    edicao: string,
    numeroPaginas: number,
    disponivel: boolean,
    genero: Genero[]
    ){
        this.idLivro=Livros.contadorId++;
        this.nome=nome;
        this.autor=autor;
        this.dataPublicacao=dataPublicacao;
        this.editora=editora;
        this.edicao=edicao;
        this.numeroPaginas=numeroPaginas;
        this.disponivel=disponivel;
        this.genero=genero;
    }

    exibir(){
        console.log(
            `ID: ${this.idLivro}
            Título: ${this.nome}
            Autor: ${this.autor}
            Data de Publicação: ${this.dataPublicacao}
            Editora: ${this.editora}
            Edição: ${this.edicao}
            Número de Páginas: ${this.numeroPaginas}
            Disponível para locação? ${this.disponivel ? 'Sim' : 'Não'}
            `
        )
    }

    verificaDisponibilidade(){
        this.disponivel ? 'O livro está disponível para locação.' : 'Este livro está locado.'
    }

    trocaDisponibilidade(){
        this.disponivel=!this.disponivel;
        console.log(`O livro agora está ${this.disponivel? "disponível." : "indisponível."}`)
    }

}