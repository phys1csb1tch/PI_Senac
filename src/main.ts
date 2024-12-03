import { Admin } from "./Classes/Admin";
import { Usuario } from "./Classes/Usuario";
import { Genero } from "./Classes/Genero";
import { Livros } from "./Classes/Livros";
import promptSync from 'prompt-sync';
const prompt = promptSync();


// ----------- INSTANCIANDO USUARIOS -------------------
const user1 = new Usuario ("Jade", "038", "ali", "123")
const admin1 = new Admin("admin", "admin")


// ---------------- INSTANCIANDO GENEROS ---------------


// ---------------- INSTANCIANDO LIVROS -----------------




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
                const usuarioEncontrado = Admin.consultarUsuario(user)
                if (usuarioEncontrado){
                    const password = prompt (`Entre com a senha para o Usuário '${usuarioEncontrado.nome}': `)
                    if (password === usuarioEncontrado.senha){
                    console.log(`Bem vinde, ${usuarioEncontrado.nome}`)
                    break; 
                    } else {
                        console.error("Senha incorreta.")
                        again = prompt (`Deseja tentar novamente? S: Sim | N: Não`)
                    }
                    
                } else {
                    console.error("Usuário não encontrado.")
                } // tem pobrema nesse loop aqui !
                }
            break;
        case 2: // ----------- listar acervo ----------------
            break;
        case 3: // ------------ consultar no acervo ---------
            break;
        case 4: // --------------- Cadastre-se ---------------
            const novoNome = prompt ("Nome: ")
            const novoCPF = prompt ("CPF: ")
            const novoEndereco = prompt ("Endereço: ")
            const nova_senha = prompt ("Senha: ")

            const novoUsuario = new Usuario (novoNome, novoCPF, novoEndereco, nova_senha)

            break;
        case 5: 
            console.log("Saindo. Até mais!")
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

