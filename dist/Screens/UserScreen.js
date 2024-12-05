"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScreen = UserScreen;
const Livros_1 = require("../Classes/Livros");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function UserScreen(user) {
    // console.log(user)
    let loopMainUserScreenControl = true;
    let usuario = Number(prompt(" Escolha uma opção: \n (1) Consultar Acervo \n (2) Ver Conta \n (3) Alterar dados de conta \n (4) Ver suas locações "));
    while (loopMainUserScreenControl) {
        switch (usuario) {
            case 1:
                Livros_1.Livros.listarLivros();
                prompt("Aperte qualquer tecla para continuar...");
                break;
            case 2:
                console.log(user?.exibir());
                prompt("Aperte qualquer tecla para continuar...");
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
    }
    ;
}
