
/* import Municipio from "./Municipio";
import Estados from "./Estados";
import TipoLogradouro from "./TipoLogradouro";
import Endereco from "./Endereco";
import Estudante from "./Estudante";

const m1: Municipio = {
    nome: "Vilhena",
    uf: Estados.RO
}

console.log(m1) 


const e1: Endereco = {
    tipoLogradouro: TipoLogradouro.ALAMEDA,
    nomeLogradouro: "dos Anjos",
    numero: "4566",
    bairro: "Centro",
    municipio: m1
}

console.log(`Nome do logradouro: ${e1.nomeLogradouro}`)

*/

/*
let hoje: Date = new Date()

console.log(hoje) //Forma padrão ISO 8601

console.log(hoje.toString()) //formato na configuração de fuso horário do computador

console.log(hoje.toLocaleDateString("pt-BR"))//imprime a data no formato do Brasil

console.log(hoje.toLocaleTimeString("pt-BR"))//imprime a hora no formato do Brasil

console.log(hoje.getTime())//imprime a quantidade de milissegundos desde 1 de janeiro de 1970


//os meses em JavaScript começam do zero
let dataPagamentoBoleto: Date = new Date(2025, 8, 22,0, 0, 0)
console.log(dataPagamentoBoleto.toString())
console.log(dataPagamentoBoleto.toLocaleDateString("pt-BR"))

//let dataVencimento: Date =  new Date("2025-09-22T00:00:00Z") //formato ISO 8601 com a letra Z no final indica que é no horário UTC
let dataVencimento: Date = new Date("2025-09-22T00:00:00")
console.log(`dataVencimento: ${dataVencimento.toString()}`)


let horarioLogin: Date = new Date()
console.log(`Ano: ${horarioLogin.getFullYear()}`)
console.log(horarioLogin.getMonth() + 1)//mês começa do zero
console.log(horarioLogin.getDate())
console.log(horarioLogin.getDay())//dia da semana começa do zero (0=domingo, 1=segunda,...)

console.log(`Dia da semana: ${['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][horarioLogin.getDay()]}`)

//dado uma data qualquer calcule quantos dias faltam para o Natal
//dado uma data qualquer formate a impressão no formato dd/mm/aaaa hh:mm:s
//dado uma data qualquer adicione 30 dias e imprima o resultado
//dado uma data qualquer diga em qual dia da semana caira

//dado duas datas verifique se a primeira data é menor que a segunda

//crie uma função que recebe duas datas e calcule quantos dias de diferernca há entre elas


//1) Dado uma data qualquer calcule quantos dias falta para o natal

function diasParaNatalCurto(dataNumero: number): string {
  const s = String(dataNumero).padStart(8, '0');
  const ano = Number(s.substring(4, 8));
  const mes = Number(s.substring(2, 4));
  const dia = Number(s.substring(0, 2));

  const dataAtual = new Date(ano, mes - 1, dia);
  let natal = new Date(ano, 11, 25);

  if (dataAtual > natal) {
    natal = new Date(ano + 1, 11, 25);
  }

  // A conta de milissegundos (1000 * 60 * 60 * 24) foi substituída por seu resultado: 86400000
  const diasFaltantes = Math.round((natal.getTime() - dataAtual.getTime()) / 86400000);

  if (diasFaltantes === 0) return "É Natal! 🎄";
  if (diasFaltantes === 1) return "Falta 1 dia para o Natal!";
  return Faltam ${diasFaltantes} dias para o Natal.;
}

// Uso:
console.log("1) Dias para o Natal (versão curta):", diasParaNatalCurto(22092025));

// 2) Dado una data qualquer formate a impressão no formato dd/mm/yyyy HH:mm:55

//function formatarDataCurto(data: Date): string {
//  const dia = String(data.getDate()).padStart(2, '0');
//  const mes = String(data.getMonth() + 1).padStart(2, '0');
//  const ano = data.getFullYear();
  //const hora = String(data.getHours()).padStart(2, '0');
  //const minutos = String(data.getMinutes()).padStart(2, '0');

  // A crase (`) permite montar a string de uma só vez.
//  return ${dia}/${mes}/${ano} ${hora}:${minutos}:55;
//}

// Uso:
//console.log("2) Formatar Data (versão curta):", formatarDataCurto(new Date()));

//3) Dado uma data qualquer adicione 30 dias e imprima o resultado
function adicionar30DiasCurto(data: Date): Date {
  // Esta linha faz tudo: pega o dia atual, soma 30 e já atualiza a data.
  data.setDate(data.getDate() + 30);
  return data;
}

// Uso:
//const hoje = new Date(2025, 8, 22); // Criando a data de hoje de novo
const dataFutura = adicionar30DiasCurto(hoje);

console.log("3) Adicionar 30 dias (versão curta):", dataFutura.toLocaleDateString('pt-BR'));

// ATENÇÃO: Veja que a variável 'hoje' também foi alterada!
console.log("   -> A data original 'hoje' agora é:", hoje.toLocaleDateString('pt-BR'));

//4) Dado uma data qualquer diga en qual dia da semana cairá
function diaDaSemanaCurto(data: Date): string {
  const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  // Retorna diretamente o resultado da busca na lista.
  return dias[data.getDay()];
}

// --- COMO USAR ---
const hojeCurto = new Date();
console.log("Dia da semana (versão curta):", diaDaSemanaCurto(hojeCurto));

 //5) Dado duas datas verifique se a primeira data é menor que a segunda
/**
 * Verifica se a primeira data é anterior (menor que) a segunda.
 * @param data1 A primeira data para comparar.
 * @param data2 A segunda data para comparar.
 * @returns true se data1 for anterior a data2, caso contrário false.
 */
function primeiraDataEhMenor(data1: Date, data2: Date): boolean {
  // A comparação direta já retorna true ou false.
  return data1 < data2;
}


// --- COMO USAR ---

//const hoje = new Date(); // Ex: 22/09/2025
const ontem = new Date(2025, 8, 21); // 21/09/2025 (mês 8 = Setembro)
const amanha = new Date(2025, 8, 23); // 23/09/2025

// Teste 1: A primeira data é realmente menor? (Sim)
//console.log('ontem' é menor que 'hoje'?, primeiraDataEhMenor(ontem, hoje));
// Saída: 'ontem' é menor que 'hoje'? true

// Teste 2: A primeira data é menor? (Não, é maior)
//console.log('amanha' é menor que 'hoje'?, primeiraDataEhMenor(amanha, hoje));
// Saída: 'amanha' é menor que 'hoje'? false

// Teste 3: As datas são iguais? (Não, então não é menor)
const mesmaData = new Date();
//console.log('hoje' é menor que 'hoje'?, primeiraDataEhMenor(hoje, mesmaData));
// Saída: 'hoje' é menor que 'hoje'? false

// Para verificar se é menor OU IGUAL, você usaria o operador <=
//console.log('hoje' é menor ou igual a 'hoje'?, hoje <= mesmaData);
// Saída: 'hoje' é menor ou igual a 'hoje'? true
//6) Crie uma função que recebe duas datas e calcule quantos dias de diferente ha entre ambas

function calcularDiferencaEmDiasCurto(data1: Date, data2: Date): number {
  // A conta 86400000 é o mesmo que 1000 * 60 * 60 * 24.
  return Math.round(Math.abs(data2.getTime() - data1.getTime()) / 86400000);
}

// --- COMO USAR ---
const dataA = new Date(2025, 8, 22);
const dataB = new Date(2025, 9, 22);

console.log("Diferença (versão curta):", calcularDiferencaEmDiasCurto(dataA, dataB));
// Saída: Diferença (versão curta): 30

