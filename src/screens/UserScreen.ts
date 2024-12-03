import { Livros } from "../Classes/Livros";
import { Usuario } from "../Classes/Usuario";
import promptSync from 'prompt-sync';
const prompt = promptSync();
export function UserScreen(){
    let usuario = Number(prompt("Escolha uma opção: 1- Consultar Acervo, 2- Ver Conta, 3- Alterar dados de conta, 4- Ver suas locações "))

    switch(usuario){
        case 1:
            Livros.listarLivros();
            break;
         
        case 2:
            Usuario.exibir();
            break;
        
        case 3:
            let opcaoAlterar = Number(prompt("O que deseja alterar? 1- Endereço, 2- Senha "))
            if(opcaoAlterar = 1){

            }
            else if(opcaoAlterar = 2){
                Usuario.trocaSenha();
            }
            break;
        
        case 4:

};
}