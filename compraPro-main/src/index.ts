import cliente from "./Cliente";
import banco from "./ContaBancaria";
import tipoBancaria from "./TipoDaConta";
import { saldo, sacar, depositar } from "./ContaBancariaService";

let cliente: cliente = {
    id: 1,
    nome: "João Silva",
};

let contaBancaria = {
    cliente,
    id: "12345",
    saldo: 1000,
    tipoBancaria: tipoBancaria.corrente
};

console.log(contaBancaria);
depositar(contaBancaria, 500);

sacar(contaBancaria, 200);
console.log(contaBancaria);

saldo(contaBancaria);
console.log(saldo(contaBancaria));

sacar(contaBancaria, 100);
console.log(saldo(contaBancaria));