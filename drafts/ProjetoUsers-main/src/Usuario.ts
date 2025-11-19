import Papel from "./Papel";
import Permissao from "./Permissao";

interface Usuario {
    id: string,
    nome: string,
    email: string,
    senha: string,
    dataDeCriacao: Date,
    papel: Papel,
    permissoes: Permissao[]
}

export default Usuario;