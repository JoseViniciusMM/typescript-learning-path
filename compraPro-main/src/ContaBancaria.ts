import tipoBancaria from "./TipoDaConta";

export default interface ContaBancaria {
    id: string;
    saldo: number;
    tipoBancaria?: tipoBancaria;
}


