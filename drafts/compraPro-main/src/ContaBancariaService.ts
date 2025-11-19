import ContaBancaria from "./ContaBancaria";
import banco from "./ContaBancaria";

export function saldo(contaBancaria: ContaBancaria){
    return contaBancaria.saldo; 
}

export function sacar(contaBancaria: ContaBancaria, saque: number){
    contaBancaria.saldo -= saque; 
}

export function depositar(contaBancaria: ContaBancaria, deposito: number){
    contaBancaria.saldo += deposito; 
}