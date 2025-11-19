import { writeFile, readFile } from 'fs/promises'; 

interface Usuario {
    nome: string;
    email: string;
}

const usuarios: Usuario[] = [];

const u1: Usuario = {
    nome: 'João',
    email: 'joaodasilv@gmail.com',
}

const u2: Usuario = {
    nome: 'Maria',
    email: 'maria Sila',
}

const u3: Usuario = {
    nome: 'Ana',
    email: 'ana#gmail.com',
}

usuarios.push(u1);
usuarios.push(u2);
usuarios.push(u3);  


async function escrever() {
    await writeFile("./data/usuarios.json", JSON.stringify(usuarios), "utf-8") 
}
escrever() ;

async function ler() {
    const resposta = await readFile('./data/usuarios.json', "utf-8");
    const dados: Usuario = JSON.parse(resposta);
    console.log(dados);
}

ler();
