import Papel from "./Papel";
import Permissao from "./Permissao";
import Usuario from "./Usuario";
import { v4 as uuidv4 } from 'uuid';

let usuarios: Usuario[] = [];


export function cadastrarUsuario( nome: string,email: string,senha: string,dataDeCriacao: Date,papel: Papel,
    permissoes: Permissao[]) {
   
        let novoUsuario: Usuario = {
            id: uuidv4(),
            nome: nome,
            email: email,
            senha: senha,
            dataDeCriacao: new Date(),
            papel: papel,
            permissoes: permissoes
        };
        usuarios.push(novoUsuario);
        console.log('Usuário cadastrado com sucesso:', novoUsuario);
}

export function listarUsuarios(): Usuario[] {
    return usuarios;
}

export function registarLog() {

}

export function verificarPermissoes( ){
    
}