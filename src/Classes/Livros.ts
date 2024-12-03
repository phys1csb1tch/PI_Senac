import { Genero } from './Genero';

export class Livros {
    protected static contadorId: number = 1; //contador auto incrementado
    protected idLivro: number;
    protected nome: string;
    protected autor: string;
    protected dataPublicacao: Date;
    protected editora: string;
    protected edicao: string;
    protected numeroPaginas: number;
    protected disponivel: boolean = true; // aqui torna o livro disponivel no momento da criação
    protected genero: Genero[];
    static listaLivros: Livros[]=[] // array de armazenamento

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
            (livro) => livro.nome === nome );
    
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

    exibir(): string{

       return `ID: ${this.idLivro}
            Título: ${this.nome}
            Autor: ${this.autor}
            Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}
            Editora: ${this.editora}
            Edição: ${this.edicao}
            Número de Páginas: ${this.numeroPaginas}
            Disponível para locação? ${this.disponivel ? 'Sim' : 'Não'}
            Gênero: ${Genero.exibirSoNomes(this.genero)} 
            `
    }


    verificaDisponibilidade(){
        this.disponivel ? 'O livro está disponível para locação.' : 'Este livro está locado.'
    }

    trocaDisponibilidade(){
        this.disponivel=!this.disponivel;
        console.log(`O livro agora está ${this.disponivel? "disponível." : "indisponível."}`)
    }

    adicionaGenero(){ // metodo incompleto
        Genero.listarGeneros
        const novoGenero = prompt ("Escolha um Gênero: ")

    }
}