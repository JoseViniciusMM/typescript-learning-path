const idade: number = 30;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//Operador Ternário
const veficadorIdade: string = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(veficadorIdade);


//Operador AND (&&)
const isAdmin: boolean = true;
if (isAdmin) {
  console.log("Acesso concedido ao painel de administração.");
}

// Mesma lógica usando o operador AND (&&)

isAdmin && console.log("Acesso concedido ao painel de administração.");


// dotenv 

import dotenv from 'dotenv';
dotenv.config();
console.log(`A variável de ambiente EXEMPLO_VAR é: ${process.env.DB_PASS}`);


// Operador OR (||)
interface Config {
    tema: "claro" | "escuro";
}

const configUsuario: Config = {
    tema: "claro"   
}


//Optional Chaining (?.) e Nullish Coalescing (??)
interface Cidade {
    nome: string;
    estado: string;
    cordenadas?: {
        lat: number;
        lon: number;
    }   
}

const cidade: Cidade = {
    nome: "São Paulo",
    estado: "SP"
}

const latitude: number = cidade.cordenadas?.lat || 0;
const longitude: number = cidade.cordenadas?.lon ?? 0;


//Early Return
function criarUsuarioRuim(usuario: any) {
    if(usuario){
        if(usuario.nome){
            if(usuario.email){
                console.log("Usuário criado com sucesso!");
            }
        }
    }
}
 
function criarUsuario(usuario: any) {
    if(!usuario) return "Dados inválidos";
    if(!usuario.nome) return "Nome é obrigatório";
    if(!usuario.email) return "Email é obrigatório";

    console.log("Usuário criado com sucesso!");
}

console.log(criarUsuario({nome: "Martines"}));
console.log(criarUsuario({email: "marcos@asdf"}));
console.log(criarUsuario({nome: "Martines", email: "marcos@asdf"}));