"use strict";
// import { Admin } from "./Classes/Admin";
// import { Usuario } from "./Classes/Usuario";
// import { Genero } from "./Classes/Genero";
// import { Livros } from "./Classes/Livros";
Object.defineProperty(exports, "__esModule", { value: true });
// var usuario1 = new Usuario ("Jade", "028", "ali", "123")
// usuario1.exibir();
// usuario1.trocaSenha();
// var admin1 = new Admin ("admin", "admin")
// admin1.exibir();
// // admin1.trocaSenha(Admin[admin1]);
// ========================
// Locação
// ========================
const Locacao_1 = require("./Classes/Locacao");
const locacao1 = new Locacao_1.Locacao(1, 1, new Date("09-08-2021"), new Date("09-08-2021"), null);
const locacao2 = new Locacao_1.Locacao(2, 1, new Date("05-02-2021"), new Date("03-08-2021"), null);
// locacao2.devolver()
// const locacao1 = new Locacao(1, )
// console.log(locacao1.isLate() ? "Atrasado" : "No prazo")
// Locacao.listarLocacoes();
Locacao_1.Locacao.buscarLocacaoPorUsuario(0);
// const user1 = new Usuario("Roberto", "04933212344", "Rua Lobos", "123");
// const user2 = new Usuario("Carlos", "03324912344", "Rua Lobos", "123");
// Usuario.listarUsuarios()
