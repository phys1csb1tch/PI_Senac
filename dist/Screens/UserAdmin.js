"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdmin = UserAdmin;
const Genero_1 = require("../Classes/Genero");
const Usuario_1 = require("../Classes/Usuario");
const Livros_1 = require("../Classes/Livros");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function UserAdmin() {
    let admin = Number(prompt("Escolha a sua opção: 1- Usuário, 2- Livros, 3- Gênero, 4- Locação "));
    switch (admin) {
        case 1:
            let opcao = Number(prompt("Escolha a sua opção: 1- Novo cadastro, 2- Listar usuários, 3- Editar usuário, 4- Excluir usuário, 5- Voltar "));
            switch (opcao) {
                case 1:
                    //Aqui entra em um método de cadastro de usuário pelo Admin.
                    const user2 = new Usuario_1.Usuario("", "", "", "");
                    break;
                case 2:
                    //Aqui lista todos os usuários cadastrados.
                    Usuario_1.Usuario.listarUsuarios();
                    break;
                case 3:
                    //Aqui entra em um método de edição do usuário pelo Admin.
                    break;
                case 4:
                    //Aqui entra em um método de exclusão de usuário pelo Admin.
                    break;
                case 5:
                    //Volta para o primeiro menu de opções.
                    break;
            }
        case 2:
            let opcao2 = Number(prompt("Escolha a sua opção: 1: Cadastrar livro, 2- Consultar acervo, 3- Editar livro, 4- Excluir livro, 5- Voltar"));
            switch (opcao2) {
                case 1:
                    //Aqui entra em um método de cadastro de livro pelo Admin.
                    const livro13 = new Livros_1.Livros("", "", new Date(), "", "", 1, []);
                    break;
                case 2:
                    //Aqui lista todos os livros cadastrados.
                    Livros_1.Livros.listarLivros();
                    break;
                case 3:
                    //Aqui entra em um método de edição do livro pelo Admin.
                    break;
                case 4:
                    //Aqui entra em um método de exclusão de livro pelo Admin.
                    break;
                case 5:
                    //Volta para o primeiro menu de opções.
                    break;
            }
        case 3:
            let opcao3 = Number(prompt("Escolha a sua opção: 1- Listar Gênero, 2- Editar gênero, 3- Voltar "));
            switch (opcao3) {
                case 1:
                    //Lista todos os gêneros disponíveis.
                    Genero_1.Genero.listarGeneros();
                    break;
                case 2:
                    //Aqui entra em um método de edição de gênero pelo Admin.
                    break;
                case 3:
                    //Volta para o primeiro menu de opções.
                    break;
            }
        case 4:
            let opcao4 = Number(prompt("Escolha a sua opção: 1- Registar locação, 2- Registar devolução, 3- Alterar data de devolução, 4- Voltar"));
            switch (opcao4) {
                case 1:
                    //Aqui entra em um método de locação de livros.
                    break;
                case 2:
                    //Aqui entra em um método de devolução de livros.
                    break;
                case 3:
                    //Aqui entra em um método de ampliação da data de devolução.
                    break;
                case 4:
                    //Volta para o primeiro menu de opções.
                    break;
            }
    }
}
