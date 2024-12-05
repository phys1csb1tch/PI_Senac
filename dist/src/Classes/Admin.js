"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Usuario_1 = require("./Usuario");
const prompt = (0, prompt_sync_1.default)();
class Admin extends Usuario_1.Usuario {
    constructor(nome, senha) {
        super(nome, "", "", senha);
        this.verificaAdmin = true;
        console.log("Admin cadastrado com sucesso!");
    }
    exibir() {
        return `Id: ${this.id} | Nome: ${this._nome}`;
    }
    trocaSenha() {
        const pesquisaUsuario = prompt("Entre com o nome ou ID de usuário: ");
        // encontrar "pesquisaUsuario" em "ID" ou "nome" no array listaUsuarios
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
