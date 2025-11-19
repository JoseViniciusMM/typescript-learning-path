import { dbPromise, initDB } from "./db";

initDB();

interface Usuario {
    id?: number;
    name: string;
    email: string;
}

async function addUuario(usuario: Usuario) {
    const db = await dbPromise;
    const resultado = await db.run(
        "INSERT INTO usuarios (name, email) VALUES (?, ?)",
        usuario.name,
        usuario.email
    );
    return resultado
}

async function listarUsuarios(){
    const db = await dbPromise;
    return db.all<Usuario[]>("SELECT * FROM usuarios");

}

const u1: Usuario = {
    name: "João Silva",
    email: "jaosilva@gmail",
};

const u2: Usuario = {
    name: "Maria Souza",
    email: "mariasouza@gmail",
};

addUuario(u1)
addUuario(u2)

console.table(await listarUsuarios());


interface Produto {
    id?: number;
    nome: string;
    preco: number;
}

async function addProduto(produto: Produto) {
    const db = await dbPromise;
    const resultado = await db.run(
        "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
        produto.nome,
        produto.preco
    );
    return resultado
}

async function listarProdutos(){
    const db = await dbPromise;
    return db.all<Produto[]>("SELECT * FROM produtos");

}

const p1: Produto = {
    nome: "Notebook",
    preco: 3500,
};

const p2: Produto = {
    nome: "Smartphone",
    preco: 2000,
};

addProduto(p1)
addProduto(p2)

console.table(await listarProdutos());