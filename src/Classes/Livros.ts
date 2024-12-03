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
    protected disponivel: boolean = true; // aqui torna o livro disponivel no momento da criação
    protected genero: Genero[];
    static listaLivros: Livros[]=[]

    constructor(nome: string,
    autor: string,
    dataPublicacao: Date,
    editora: string,
    edicao: string,
    numeroPaginas: number,
    genero: Genero[]
    ){
        this.idLivro=Livros.contadorId++;
        this.nome=nome;
        this.autor=autor;
        this.dataPublicacao=dataPublicacao;
        this.editora=editora;
        this.edicao=edicao;
        this.numeroPaginas=numeroPaginas;;
        this.genero=genero;

        const livroExistente = Livros.listaLivros.find(
            (genero) => genero.nome === nome );
    
        if (livroExistente) {
            console.error("Livro já cadastrado.");
        } else {
            Livros.listaLivros.push(this);
            console.log("Livro cadastrado com sucesso!");
        }
    }

    static listarLivros() {
        Livros.listaLivros.forEach((livro) => console.log(livro.exibir()));
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
            Gênero: ${Genero.listarGeneros()} 
            `
        ) // ta dando problema na listagem de generos!
    }


    verificaDisponibilidade(){
        this.disponivel ? 'O livro está disponível para locação.' : 'Este livro está locado.'
    }

    trocaDisponibilidade(){
        this.disponivel=!this.disponivel;
        console.log(`O livro agora está ${this.disponivel? "disponível." : "indisponível."}`)
    }

}