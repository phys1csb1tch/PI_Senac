"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
/**
 *
 */
class Usuario {
    static listaUsuarios = [];
    _cpf;
    _endereco;
    static contadorID = 1;
    id;
    _nome;
    _senha;
    verificaAdmin;
    constructor(nome, cpf, endereco, senha) {
        this.id = Usuario.contadorID++;
        this._nome = nome;
        this._senha = senha;
        this.verificaAdmin = false;
        this._cpf = cpf;
        this._endereco = endereco;
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
        return `Id: ${this.id}| Nome: ${this._nome} | CPF: ${this._cpf} | Endereço: ${this._endereco}`;
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
    //   set endereco(novoEndereco: string) {
    //     this._endereco = novoEndereco;
    //   }
    trocarEndereco(novoEndereco) {
        this._endereco = novoEndereco;
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
    // trocaSenha(novaSenha: string) {
    //   //aqui posso expandir colocando uma verificação pra indicar erro no usuario ou na senha
    //   const usuario = prompt(PROMPT_ENTER_THE_USERNAME);
    //   const senha = prompt(PROMPT_ENTER_THE_PASSWORD);
    //   let isValid = this.validUserInternal(usuario, senha);
    //   if (isValid) {
    //     this._senha = novaSenha;
    //   } else {
    //     console.log(INVALID_CREDENTIALS);
    //   }
    // }
    // protected validUserInternal(inptUsuario: string, inptPassword: string) {
    //   const usuario = inptUsuario;
    //   const senha = inptPassword;
    //   let user = this.consultarUsuario(usuario);
    //   if (usuario == this._nome && senha == this._senha) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    /**
     * Exibe usuarios do sistema com um console.log()
     * @param teste
     */
    static listarUsuarios() {
        // Ideia futura, definir tipo de retorno que deseja passando um parametro na função
        Usuario.listaUsuarios.forEach((usuario) => console.log(usuario.exibir()));
    }
    /**
     * Verifica se o usuario é valido
     * @param criterio ```nome``` ou ```id```
     * @returns ```Usuario``` | ```null```
     */
    static consultarUsuario(criterio) {
        return (Usuario.listaUsuarios.find((usuario) => usuario._nome === criterio || usuario.id.toString() === criterio) || null);
    }
    /**
     * ## Get User Or Null Internal
     * ### Verifica se o usuario é valido, sendo, ele retorna o usuario, senão retorna nulo.
     * utilizar esse método para validações internas da classe Usuario
     * @param {string} criterio ```nome``` ou ```id```
     * @returns ```Usuario``` | ```null```
     */
    getUserOrNullInternal(criterio) {
        return (Usuario.listaUsuarios.find((usuario) => usuario._nome === criterio || usuario.id.toString() === criterio) || null);
    }
}
exports.Usuario = Usuario;
