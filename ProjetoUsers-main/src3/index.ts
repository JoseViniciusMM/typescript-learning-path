//Sistema de Registro de Refeições para estudantes do IFRO 

// Tipos de Refeições (lanche, almoço, jantar)
// Dados do Estudante (id, nome, email, curso)
// Dados das Refeições (id, tipo, data, estudanteId)
// Registrar Refeições em um arquivo JSON
// Relatorio de refeções (data inicial, data final, estudanteId)
// Função para exportar dados em CSV

import { writeFile, readFile } from 'fs/promises'; 

let estudante1 = {
    id: 1,
    nome: 'João',
    email: 'joao@gmaiil',
    curso: 'ADS'
}

let estudante2 = {
    id: 2,
    nome: 'Maria',
    email: 'maria@gmail',
    curso: 'SI'
}

let refeicao1 = {
    id: 1,
    tipo: 'Almoço',
    data: new Date('2023-10-01'),
    estudanteId: estudante1.id = 1
}

let refeicao2 = {
    id: 2,
    tipo: 'Jantar',
    data: new Date('2023-10-01'),
    estudanteId: estudante2.id = 2
}

// Array para armazenar os dados
let Registro = {
    estudantes: [estudante1, estudante2],
    refeicoes: [refeicao1, refeicao2]
}

async function registrarRefeições() {
    await writeFile("./data/refeicoes.json", JSON.stringify(Registro), "utf-8") 
}

registrarRefeições();

async function relatorioRefeições() {
    let dataInicial = new Date();
    let dataFinal = new Date();
    const Registro  = await readFile('./data/relatorio.json', "utf-8");
    const dados = JSON.parse(Registro);
    console.log(Registro);
}

relatorioRefeições();

async function exportarCSV() {
    const resposta = await readFile('./data/refeicoes.csv', "utf-8");
    const dados = JSON.parse(resposta);
}

exportarCSV();