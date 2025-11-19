import Papel from "./Papel";
import Permissao from "./Permissao";
import { cadastrarUsuario, listarUsuarios } from "./usuarioController";

cadastrarUsuario('Maria Souza', 'mariasousa@gamil.com', 'senha123', new Date(), Papel.USUARIO, [Permissao.LEITURA]);

cadastrarUsuario('João Silva', 'joaoSila@mail.com', 'asdfasdf', new Date(), Papel.ADMINISTRADOR, [Permissao.LEITURA, Permissao.ESCRITA]);

console.table(listarUsuarios()); 