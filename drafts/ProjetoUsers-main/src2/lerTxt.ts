import {writeFile, readFile} from 'fs/promises';

let messagens: string = 'Dados do Arquivo\n';

async function escrever() {
    await writeFile('./data/mensagens.txt', messagens, "utf-8");
}

escrever();


async function ler() {
    const resposta = await readFile('./data/mensagens.txt', "utf-8");
    console.log(resposta);
}

ler();

