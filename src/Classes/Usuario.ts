import promptSync from 'prompt-sync';
import { Admin } from './Admin';
const prompt = promptSync();

export class Usuario extends Admin{
    static listaUsuarios: Usuario[]=[];
    protected _cpf: string;
    protected endereco: string;

    constructor (nome: string, cpf: string, endereco: string, senha: string){
        super (nome, senha)
        this.verificaAdmin=false;
        this._cpf=cpf;
        this.endereco=endereco;

        const usuarioExistente = Usuario.listaUsuarios.find(
            (usuario) => usuario.nome === nome || usuario._cpf === cpf
        );
    
        if (usuarioExistente) {
            console.error("Nome de usuário ou CPF já cadastrado.");
        } else {
            Usuario.listaUsuarios.push(this);
            console.log("Usuário cadastrado com sucesso!");
        }
    }

    exibir (){
        return super.exibir() + ` | CPF: ${this.cpf} | Endereço: ${this.endereco}`
    }

    get cpf (){
        return this._cpf
    }

    trocaSenha(){//aqui posso expandir colocando uma verificação pra indicar erro no usuario ou na senha
        const usuario= prompt (`Entre com o nome de usuário: `)
        const senha= prompt (`Senha: `)

        if (usuario==this.nome && senha==this._senha) {
            this._senha = prompt ("Nova senha: ")
            console.log ("Senha atualizada!")
        } else {
            console.log ("Usuário não encontrado ou senha incorreta.") 
        }
    }
}

