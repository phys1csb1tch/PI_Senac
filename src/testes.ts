import { Admin } from "./Classes/Admin";
import { Usuario } from "./Classes/Usuario";
import { Genero } from "./Classes/Genero";
import { Livros } from "./Classes/Livros";

var usuario1 = new Usuario ("Jade", "028", "ali", "123")

usuario1.exibir();
usuario1.trocaSenha();
var admin1 = new Admin ("admin", "admin")
admin1.exibir();
// admin1.trocaSenha(Admin[admin1]);
