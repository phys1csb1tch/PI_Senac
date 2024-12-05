"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Usuario_1 = require("./Usuario");
const prompt = (0, prompt_sync_1.default)();
/**
 * Classe que representa um administrador, que herda da classe Usuario.
 * O administrador pode realizar operações específicas, como trocar senhas de usuários.
 * @extends Usuario
 */
class Admin extends Usuario_1.Usuario {
    /**
     * Cria uma nova instância de Admin, inicializando com nome e senha.
     * @param {string} nome - Nome do administrador.
     * @param {string} senha - Senha do administrador.
     */
    constructor(nome, senha) {
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
        const usuarioEncontrado = Usuario_1.Usuario.consultarUsuario(pesquisaUsuario);
        if (usuarioEncontrado) {
            console.log(`Usuário Encontrado: \n ${usuarioEncontrado.exibir()}`);
            const confirma = prompt("Confirma a troca de senha para este usuário? 1. Sim | 2. Não");
            if (confirma === "1") {
                const novaSenha = prompt("Digite a nova senha: ");
                usuarioEncontrado.senha = novaSenha;
                console.log("Senha atualizada.");
            }
            else {
                console.log("Troca de senha cancelada.");
            }
        }
        else {
            console.log("Usuário não encontrado.");
        }
    }
}
exports.Admin = Admin;
