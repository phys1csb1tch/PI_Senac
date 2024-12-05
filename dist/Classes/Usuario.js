"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
/**
 * Classe que representa um usuário do sistema.
 */
class Usuario {
    /**
     * Lista de todos os usuários cadastrados.
     */
    static listaUsuarios = [];
    /**
     * CPF do usuário.
     * @private
     */
    _cpf;
    /**
     * Endereço do usuário.
     * @private
     */
    _endereco;
    /**
     * Contador de IDs dos usuários, usado para atribuir um ID único a cada novo usuário.
     * @private
     */
    static contadorID = 1;
    /**
     * ID do usuário.
     */
    id;
    /**
     * Nome do usuário.
     */
    _nome;
    /**
     * Senha do usuário.
     */
    _senha;
    /**
     * Flag que indica se o usuário é um administrador.
     */
    verificaAdmin;
    /**
     * Construtor da classe Usuario.
     * Cria um novo usuário com nome, CPF, endereço e senha.
     *
     * @param nome Nome do usuário.
     * @param cpf CPF do usuário.
     * @param endereco Endereço do usuário.
     * @param senha Senha do usuário.
     */
    constructor(nome, cpf, endereco, senha) {
        this.id = Usuario.contadorID++;
        this._nome = nome;
        this._senha = senha;
        this.verificaAdmin = false;
        this._cpf = cpf;
        this._endereco = endereco;
        // Verifica se o nome ou CPF já estão cadastrados.
        const usuarioExistente = Usuario.listaUsuarios.find((usuario) => usuario._nome === nome || usuario._cpf === cpf);
        if (usuarioExistente) {
            console.error("Nome de usuário ou CPF já cadastrado.");
        }
        else {
            Usuario.listaUsuarios.push(this);
            console.log("Usuário cadastrado com sucesso!");
        }
    }
    /**
     * Exibe as informações do usuário no formato string.
     *
     * @returns String com as informações do usuário.
     */
    exibir() {
        return `Id: ${this.id}| Nome: ${this._nome} | CPF: ${this._cpf} | Endereço: ${this._endereco}`;
    }
    /**
     * Getter para o CPF do usuário.
     *
     * @returns O CPF do usuário.
     */
    get cpf() {
        return this._cpf;
    }
    /**
     * Getter para a senha do usuário.
     *
     * @returns A senha do usuário.
     */
    get senha() {
        return this._senha;
    }
    /**
     * Setter para a senha do usuário.
     *
     * @param novasenha A nova senha a ser atribuída ao usuário.
     */
    set senha(novasenha) {
        this._senha = novasenha;
    }
    /**
     * Getter para o nome do usuário.
     *
     * @returns O nome do usuário.
     */
    get nome() {
        return this._nome;
    }
    /**
     * Setter para o nome do usuário.
     *
     * @param novoNome O novo nome a ser atribuído ao usuário.
     */
    set nome(novoNome) {
        this._nome = novoNome;
    }
    //   set endereco(novoEndereco: string) {
    //     this._endereco = novoEndereco;
    //   }
    /**
     * Função que permite ao usuário trocar seu endereço após autenticação.
     * Solicita ao usuário o nome de usuário e senha para validação.
     *
     * @param novoEndereco O novo endereço a ser atribuído ao usuário.
     */
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
     * Função estática que lista todos os usuários cadastrados no sistema.
     * Exibe no console as informações de cada usuário.
     */
    static listarUsuarios() {
        Usuario.listaUsuarios.forEach((usuario) => console.log(usuario.exibir()));
    }
    /**
     * Consulta um usuário pelo nome ou ID.
     *
     * @param criterio Pode ser o nome ou ID do usuário.
     * @returns O usuário correspondente ou null caso não encontrado.
     */
    static consultarUsuario(criterio) {
        return (Usuario.listaUsuarios.find((usuario) => usuario._nome === criterio || usuario.id.toString() === criterio) || null);
    }
    /**
     * Verifica internamente se um usuário é válido, retornando o usuário ou null.
     *
     * @param criterio O nome ou ID do usuário.
     * @returns O usuário correspondente ou null caso não encontrado.
     */
    getUserOrNullInternal(criterio) {
        return (Usuario.listaUsuarios.find((usuario) => usuario._nome === criterio || usuario.id.toString() === criterio) || null);
    }
}
exports.Usuario = Usuario;
