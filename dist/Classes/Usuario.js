"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Usuario {
    static trocaSenha() {
        throw new Error("Method not implemented.");
    }
    static exibir() {
        throw new Error("Method not implemented.");
    }
    constructor(nome, cpf, endereco, senha) {
        this.id = Usuario.contadorID++;
        this._nome = nome;
        this._senha = senha;
        this.verificaAdmin = false;
        this._cpf = cpf;
        this.endereco = endereco;
        const usuarioExistente = Usuario.listaUsuarios.find((usuario) => usuario._nome === nome || usuario._cpf === cpf);
        if (usuarioExistente) {
            console.error("Nome de usuário ou CPF já cadastrado.");
        }
        else {
            Usuario.listaUsuarios.push(this);
            console.log("Usuário cadastrado com sucesso!");
        }
    }
    exibir() {
        return `Id: ${this.id}| Nome: ${this._nome} | CPF: ${this._cpf} | Endereço: ${this.endereco}`;
    }
    get cpf() {
        return this._cpf;
    }
    get senha() {
        return this._senha;
    }
    set senha(novasenha) {
        this._senha = novasenha;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    trocaSenha() {
        const usuario = prompt(`Entre com o nome de usuário: `);
        const senha = prompt(`Senha: `);
        if (usuario == this._nome && senha == this._senha) {
            this._senha = prompt("Nova senha: ");
            console.log("Senha atualizada!");
        }
        else {
            console.log("Usuário não encontrado ou senha incorreta.");
        }
    }
    static listarUsuarios() {
        Usuario.listaUsuarios.forEach((usuario) => console.log(usuario.exibir()));
    }
    static consultarUsuario(criterio) {
        return (Usuario.listaUsuarios.find((usuario) => usuario._nome === criterio || usuario.id.toString() === criterio) || null);
    }
}
exports.Usuario = Usuario;
Usuario.listaUsuarios = [];
Usuario.contadorID = 1;
