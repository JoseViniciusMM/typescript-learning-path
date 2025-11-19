import Endereco1 from "./Endereco"

interface Estudante {
    nome: string,
    dataNascimento: Date,
    pai?: string,
    mae?: string,
    enderco: Endereco1

}

export default Estudante