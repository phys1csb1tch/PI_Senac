"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./Classes/Admin");
const Usuario_1 = require("./Classes/Usuario");
const Genero_1 = require("./Classes/Genero");
const Livros_1 = require("./Classes/Livros");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// import { UserScreen } from "./screens/UserScreen";
const prompt = (0, prompt_sync_1.default)();
// let login: boolean = false;
// ----------- INSTANCIANDO USUARIOS -------------------
const user1 = new Usuario_1.Usuario("Jade", "038", "ali", "123");
const admin1 = new Admin_1.Admin("admin", "admin");
// ---------------- INSTANCIANDO GENEROS ---------------
const generoFiccao = new Genero_1.Genero("Ficção Científica");
const generoFantasia = new Genero_1.Genero("Fantasia");
const generoTerror = new Genero_1.Genero("Terror");
const generoRomance = new Genero_1.Genero("Romance");
const generoAventura = new Genero_1.Genero("Aventura");
const generoHistoria = new Genero_1.Genero("História");
const generoBiografia = new Genero_1.Genero("Biografia");
const generoDrama = new Genero_1.Genero("Drama");
const generoPolicial = new Genero_1.Genero("Policial");
const generoComedia = new Genero_1.Genero("Comédia");
// ---------------- INSTANCIANDO LIVROS -----------------
const livro1 = new Livros_1.Livros("O Guia do Mochileiro das Galáxias", "Douglas Adams", new Date(1979, 0, 1), "", "", 320, [generoFiccao]);
const livro2 = new Livros_1.Livros("O Senhor dos Anéis", "J.R.R. Tolkien", new Date(1954, 6, 29), "", "", 1178, [generoFantasia]);
const livro3 = new Livros_1.Livros("Drácula", "Bram Stoker", new Date(1897, 4, 26), "", "", 500, [generoTerror]);
const livro4 = new Livros_1.Livros("Orgulho e Preconceito", "Jane Austen", new Date(1813, 0, 28), "", "", 432, [generoRomance]);
const livro5 = new Livros_1.Livros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", new Date(1997, 5, 26), "", "", 223, [generoFantasia]);
const livro6 = new Livros_1.Livros("O Código Da Vinci", "Dan Brown", new Date(2003, 2, 18), "", "", 689, [generoPolicial]);
const livro7 = new Livros_1.Livros("O Pequeno Príncipe", "Antoine de Saint-Exupéry", new Date(1943, 3, 6), "", "", 96, [generoAventura]);
const livro8 = new Livros_1.Livros("O Diário de Anne Frank", "Anne Frank", new Date(1947, 5, 25), "", "", 283, [generoHistoria]);
const livro9 = new Livros_1.Livros("Steve Jobs", "Walter Isaacson", new Date(2011, 9, 24), "", "", 656, [generoBiografia]);
const livro10 = new Livros_1.Livros("O Corvo", "Edgar Allan Poe", new Date(1845, 1, 1), "", "", 64, [generoTerror]);
const livro11 = new Livros_1.Livros("A Comédia Humana", "Honoré de Balzac", new Date(1842, 3, 1), "", "", 2000, [generoComedia]);
const livro12 = new Livros_1.Livros("A Cabana", "William P. Young", new Date(2007, 2, 1), "", "", 256, [generoDrama]);
console.clear();
/*



IDEIA: SEPARAR OS MENUS VISITANTE, USUARIO E ADMIN EM ARQUIVOS DIFERENTES
1. Login
    SE LOGIN É USUARIO >
    ----------Menu---------
    Consultar Acervo
    Ver conta
    Alterar dados de conta (Nome, cpf, endereço, senha)
    Ver livros locados em seu nome

    SE LOGIN É ADMIN >
    ---------Menu ----------
    Cadastrar novo Usuário
    Listar Usuários
    Editar Usuário
    Excluir Usuário
    Tornar admin?
    
    Cadastro de Livro
    Consultar acervo
    Editar livros
    Excluir livros

    Cadastrar novo Gênero
    Listar Gênero
    Editar Gênero
    Exibir Gênero

    Registrar locação
    Registrar devolução
    Alterar data de devolução

    
2. Listar Acervo
3. Consultar no Acervo
4. Cadastrar novo Usuário
5. Sair
 */
// ----------------------- MENU --------------------------
let controle = true;
let logado = false;
while (controle) {
    console.clear();
    if (logado) {
        console.log("Bem vindo ao BookMatch!");
        console.log("2. Listar Acervo");
        console.log("3. Buscar no acervo");
        console.log("5. Sair");
    }
    else {
        console.log("Bem vindo ao BookMatch!");
        console.log("1. Login");
        console.log("2. Listar Acervo");
        console.log("3. Buscar no acervo");
        console.log("4. Novo cadastro");
        console.log("5. Sair");
    }
    let opcao = Number(prompt("Escolha uma opção: "));
    let again = "1";
    switch (opcao) {
        case 1: // -------------------- LOGIN ----------------------   
            while (again) {
                const user = prompt(`Entre com o nome de Usuário: `);
                const usuarioEncontrado = Usuario_1.Usuario.consultarUsuario(user);
                if (usuarioEncontrado) {
                    const password = prompt(`Entre com a senha para o Usuário '${usuarioEncontrado.nome}': `);
                    if (password === usuarioEncontrado.senha) {
                        console.log(`Bem vinde, ${usuarioEncontrado.nome}`);
                        // login = true;
                        // UserScreen();
                        prompt("Aperte qualquer tecla para continuar...");
                        logado = true;
                        break;
                    }
                    else {
                        console.error("Senha incorreta.");
                        again = prompt(`Deseja tentar novamente? 1: Sim | 2: Não`);
                        if (again === "2") {
                            break;
                        }
                    }
                }
                else {
                    console.error("Usuário não encontrado.");
                    again = prompt(`Deseja tentar novamente? 1: Sim | 2: Não`);
                    if (again === "2") {
                        break;
                    }
                }
            }
            break;
        case 2: // ----------- listar acervo ----------------
            console.log("Listando acervo: ");
            Livros_1.Livros.listarLivros();
            prompt("Aperte enter para continuar: ");
            break;
        case 3: // ------------ consultar no acervo ---------
            while (again) {
                const keyword = prompt("Entre com uma palavra-chave para pesquisa: ");
                let encontrada = false;
                for (let livro of Livros_1.Livros.listaLivros) {
                    const valoresLivro = Object.values(livro).map((v) => v.toString().toLowerCase());
                    if (valoresLivro.some((valor) => valor.includes(keyword))) {
                        console.log(`Correspondência encontrada!`);
                        console.log(livro.exibir());
                        encontrada = true;
                    }
                }
                if (!encontrada) {
                    console.log("Correspondência não encontrada.");
                }
                again = prompt(`Deseja buscar novamente? 1: Sim | 2: Não: `);
                if (again === "2") {
                    break;
                }
            }
            break;
        case 4: // --------------- Cadastre-se ---------------
            const novoNome = prompt("Nome: ");
            const novoCPF = prompt("CPF: ");
            const novoEndereco = prompt("Endereço: ");
            const nova_senha = prompt("Senha: ");
            new Usuario_1.Usuario(novoNome, novoCPF, novoEndereco, nova_senha);
            break;
        case 5:
            console.log("Saindo. Até mais!");
            controle = false;
            break;
    }
}
// // ------------------------ login --------------------------
// -------------------------- TESTES -------------------------------
// Admin.listarUsuarios()
// const user2 = new Usuario ("Johann", "999", "aqui", "321")
// const admin2 = new Admin ("admin2", "admin2")
// const user3 = new Usuario ("Jasmin", "123", "aqui tbm", "222")
// const user4 = new Usuario ("Jasmin2", "123", "aqui tbm", "222")
// Usuario.listarUsuarios()
// admin1.trocaSenha()
// user1.trocaSenha()
