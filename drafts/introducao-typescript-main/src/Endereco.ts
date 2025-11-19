import Municipio from "./Municipio";
import TipoLogradouro from "./TipoLogradouro";

interface Endereco1{
    tipoLogradouro: TipoLogradouro,
    nomeLogradouro: string,
    numero: string,
    bairro: string,
    complemento?: string,
    municipio: Municipio

}

export default Endereco1








interface Endereco {
    nameRua: string;
    NumeroCasa: string;
    Bairro: string;
    Cidade: string;
    Estado: string;
    Cep: string;
}

const endereco: Endereco = {
    nameRua: "Rua dos Boys",
    NumeroCasa: "2755",
    Bairro: "Centro",
    Cidade: "São Paulo",
    Estado: "SP",
    Cep: "089750-000"
};
