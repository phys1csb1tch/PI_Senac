import promptSync from 'prompt-sync';
import { Usuario } from './Usuario';
const prompt = promptSync();

export class Admin extends Usuario{

    constructor (nome: string, senha: string){
        super (nome, "", "", senha)
        this.verificaAdmin=true;
        console.log("Admin cadastrado com sucesso!")
    }

    exibir(){
        return `Id: ${this.id} | Nome: ${this._nome}`
    }


    trocaSenha(){
        const pesquisaUsuario = prompt ("Entre com o nome ou ID de usuário: ")

        // encontrar "pesquisaUsuario" em "ID" ou "nome" no array listaUsuarios
        const usuarioEncontrado = Usuario.consultarUsuario(pesquisaUsuario); 

        if (usuarioEncontrado){
            console.log(`Usuário Encontrado: \n ${usuarioEncontrado.exibir()}`)
            const confirma = prompt ("Confirma a troca de senha para este usuário? 1. Sim | 2. Não")
                if (confirma==="1"){
                const novaSenha = prompt("Digite a nova senha: ")
                usuarioEncontrado.senha=novaSenha;
                
                console.log("Senha atualizada.")
                } else {
                    console.log("Troca de senha cancelada.")
                } 
        } else {
            console.log ("Usuário não encontrado.")
        }
    }

}

