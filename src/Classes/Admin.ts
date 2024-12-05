import promptSync from 'prompt-sync';
import { Usuario } from './Usuario';
const prompt = promptSync();

/**
 * Classe que representa um administrador, que herda da classe Usuario.
 * O administrador pode realizar operações específicas, como trocar senhas de usuários.
 * @extends Usuario
 */
export class Admin extends Usuario {

    /**
     * Cria uma nova instância de Admin, inicializando com nome e senha.
     * @param {string} nome - Nome do administrador.
     * @param {string} senha - Senha do administrador.
     */
    constructor(nome: string, senha: string) {
        super(nome, "", "", senha);
        this.verificaAdmin = true;
        console.log("Admin cadastrado com sucesso!");
    }

    /**
     * Exibe os detalhes do administrador, como ID e nome.
     * @returns {string} - Retorna uma string com os detalhes do administrador.
     */
    exibir() {
        return `Id: ${this.id} | Nome: ${this._nome}`;
    }

    /**
     * Permite que o administrador troque a senha de um usuário.
     * O administrador pode buscar o usuário por nome ou ID e confirmar a troca de senha.
     * Se o usuário for encontrado, a senha será alterada conforme a confirmação do administrador.
     */
    trocaSenha() {
        const pesquisaUsuario = prompt("Entre com o nome ou ID de usuário: ");

        // Encontrar "pesquisaUsuario" em "ID" ou "nome" no array listaUsuarios
        const usuarioEncontrado = Usuario.consultarUsuario(pesquisaUsuario);

        if (usuarioEncontrado) {
            console.log(`Usuário Encontrado: \n ${usuarioEncontrado.exibir()}`);
            const confirma = prompt("Confirma a troca de senha para este usuário? 1. Sim | 2. Não");
            if (confirma === "1") {
                const novaSenha = prompt("Digite a nova senha: ");
                usuarioEncontrado.senha = novaSenha;
                console.log("Senha atualizada.");
            } else {
                console.log("Troca de senha cancelada.");
            }
        } else {
            console.log("Usuário não encontrado.");
        }
    }
}
