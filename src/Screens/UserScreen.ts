import { Livros } from "../Classes/Livros";
import { Usuario } from "../Classes/Usuario";
import promptSync from 'prompt-sync';
const prompt = promptSync();
export function UserScreen(user : Usuario | null){
    // console.log(user)
    let loopMainUserScreenControl = true;
    let usuario = Number(prompt(" Escolha uma opção: \n (1) Consultar Acervo \n (2) Ver Conta \n (3) Alterar dados de conta \n (4) Ver suas locações "))
    while(loopMainUserScreenControl){
    switch(usuario){
        case 1:
            Livros.listarLivros();
            prompt("Aperte qualquer tecla para continuar...")
            break;
         
        case 2:
            console.log(user?.exibir());
            prompt("Aperte qualquer tecla para continuar...")
            break;
        
        case 3:
            // let opcaoAlterar = Number(prompt("O que deseja alterar? (1) Endereço - (2) Senha "))
            // if(opcaoAlterar = 1){
            //     user?.trocarEndereco()
            // }
            // else if(opcaoAlterar = 2){
            //     user?.trocaSenha();
            // }
            // prompt("Aperte qualquer tecla para continuar...")
            // break;
        
        case 4:
            break;
        default:
            break;
        }
};
}