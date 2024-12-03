import promptSync from 'prompt-sync';
import { Usuario } from './Usuario';
const prompt = promptSync();
// Estão sendo criados dois vetores, Admin[] e Usuarios[], tem que ver pra encaixar no mesmo vetor pq não sei se não vai dar problema isso depois ; os dois carregam a mesma propriedade estática chamada listaUsuarios, pelos testes parecia que tava funcionando certo, mas agora nao sei direito qual é

export class Admin {
    static listaUsuarios: Admin[]=[];
    protected static contadorId: number=1;
    protected id: number;
    protected _nome: string;
    protected _senha: string;
    protected verificaAdmin: boolean;


    constructor (nome: string, senha: string){
        this.id = Admin.contadorId++;
        this.verificaAdmin=true;
         //saudade tua jadinha <3
        this._nome=nome;
        this._senha=senha;
        Admin.listaUsuarios.push(this);
    }
    get nome(): string{
        return this._nome
    }
    get senha (): string{
        return this._senha
    }

    static listarUsuarios(){
        Admin.listaUsuarios.forEach((usuario) => usuario.exibir())
    }

    static consultarUsuario(criterio: string): Admin | null {
        return (
            Admin.listaUsuarios.find(
                (usuario) => usuario.nome === criterio || usuario.id.toString() === criterio
            ) || null
        );
    }

    exibir(){
        return `Id: ${this.id} | Nome: ${this.nome}`
    }


    trocaSenha(){
        const pesquisaUsuario = prompt ("Entre com o nome ou ID de usuário: ")

        // encontrar "pesquisaUsuario" em "ID" ou "nome" no array listaUsuarios
        const usuarioEncontrado = Admin.consultarUsuario(pesquisaUsuario); 

        if (usuarioEncontrado){
            console.log(`Usuário Encontrado: \n ${usuarioEncontrado.exibir()}`)
            const confirma = prompt ("Confirma a troca de senha para este usuário? 1. Sim | 2. Não")
                if (confirma==="1"){
                const novaSenha = prompt("Digite a nova senha: ")
                usuarioEncontrado._senha=novaSenha;
                
                console.log("Senha atualizada.")
                } else {
                    console.log("Troca de senha cancelada.")
                } 
        } else {
            console.log ("Usuário não encontrado.")
        }
    }
}

