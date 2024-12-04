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
const locacao1 = new Locacao_1.Locacao(4, 1, new Date("09-08-2021"), new Date("09-08-2021"), null);
// const locacao1 = new Locacao(1, )
// console.log(locacao1.isLate() ? "Atrasado" : "No prazo")
// Locacao.listarLocacoes();
// console.log(new Date().toLocaleDateString())
locacao1.exibir();
