import { Admin } from "./Classes/Admin";
import { Usuario } from "./Classes/Usuario";
import { Genero } from "./Classes/Genero";
import { Livros } from "./Classes/Livros";
import promptSync from 'prompt-sync';
const prompt = promptSync();
// let login: boolean = false;

// ----------- INSTANCIANDO USUARIOS -------------------
const user1 = new Usuario ("Jade", "038", "ali", "123")
const admin1 = new Admin("admin", "admin")


// ---------------- INSTANCIANDO GENEROS ---------------

const generoFiccao = new Genero("Ficção Científica");
const generoFantasia = new Genero("Fantasia");
const generoTerror = new Genero("Terror");
const generoRomance = new Genero("Romance");
const generoAventura = new Genero("Aventura");
const generoHistoria = new Genero("História");
const generoBiografia = new Genero("Biografia");
const generoDrama = new Genero("Drama");
const generoPolicial = new Genero("Policial");
const generoComedia = new Genero("Comédia");

// ---------------- INSTANCIANDO LIVROS -----------------

const livro1 = new Livros("O Guia do Mochileiro das Galáxias", "Douglas Adams", new Date(1979, 0, 1), "", "", 320, [generoFiccao])
const livro2 = new Livros("O Senhor dos Anéis", "J.R.R. Tolkien", new Date(1954, 6, 29), "", "", 1178, [generoFantasia]);
const livro3 = new Livros("Drácula", "Bram Stoker", new Date(1897, 4, 26), "", "", 500, [generoTerror]);
const livro4 = new Livros("Orgulho e Preconceito", "Jane Austen", new Date(1813, 0, 28), "", "", 432, [generoRomance]);
const livro5 = new Livros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", new Date(1997, 5, 26), "", "", 223, [generoFantasia]);
const livro6 = new Livros("O Código Da Vinci", "Dan Brown", new Date(2003, 2, 18),"", "", 689, [generoPolicial]);
const livro7 = new Livros("O Pequeno Príncipe", "Antoine de Saint-Exupéry", new Date(1943, 3, 6), "", "", 96, [generoAventura]);
const livro8 = new Livros("O Diário de Anne Frank", "Anne Frank", new Date(1947, 5, 25), "", "", 283, [generoHistoria]);
const livro9 = new Livros("Steve Jobs", "Walter Isaacson", new Date(2011, 9, 24), "", "", 656, [generoBiografia]);
const livro10 = new Livros("O Corvo", "Edgar Allan Poe", new Date(1845, 1, 1), "", "", 64, [generoTerror]);
const livro11 = new Livros("A Comédia Humana", "Honoré de Balzac", new Date(1842, 3, 1), "", "", 2000, [generoComedia]);
const livro12 = new Livros("A Cabana", "William P. Young", new Date(2007, 2, 1), "", "", 256, [generoDrama]);


/*
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

    
2. Consultar Acervo
3. Cadastrar novo Usuário
4. Sair
 */

// ----------------------- MENU --------------------------

let controle=true;
while (controle){
    console.log("Bem vindo ao BookMatch!")
    console.log("1. Login")
    console.log("2. Listar Acervo")
    console.log("3. Buscar no acervo")
    console.log("4. Novo cadastro")
    console.log("5. Sair")
    let opcao = Number(prompt("Escolha uma opção: "))


    switch (opcao){
        case 1: // -------------------- LOGIN ----------------------   
            let again= "1";
            while(again){
                const user = prompt (`Entre com o nome de Usuário: `);
                const usuarioEncontrado = Usuario.consultarUsuario(user)
                if (usuarioEncontrado){
                    const password = prompt (`Entre com a senha para o Usuário '${usuarioEncontrado.nome}': `)
                    if (password === usuarioEncontrado.senha){
                    console.log(`Bem vinde, ${usuarioEncontrado.nome}`)
                    // login = true;
                    break; 
                    } else {
                        console.error("Senha incorreta.")
                        again = prompt (`Deseja tentar novamente? 1: Sim | 2: Não`)
                        if (again ==="2"){ break;}
                    }
                    
                } else {
                    console.error("Usuário não encontrado.")
                    again = prompt (`Deseja tentar novamente? 1: Sim | 2: Não`)
                        if (again ==="2"){break}
                }
                }
            break;
        case 2: // ----------- listar acervo ----------------
            console.log("Listando acervo: ")

            Livros.listarLivros(); // aqui ta dando problema 
                
            break;
        case 3: // ------------ consultar no acervo ---------
            break;
        case 4: // --------------- Cadastre-se ---------------
            const novoNome = prompt ("Nome: ")
            const novoCPF = prompt ("CPF: ")
            const novoEndereco = prompt ("Endereço: ")
            const nova_senha = prompt ("Senha: ")

            new Usuario (novoNome, novoCPF, novoEndereco, nova_senha)

            break;
        case 5: 
            console.log("Saindo. Até mais!") // aqui nao ta saindo do loop quando manda
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

