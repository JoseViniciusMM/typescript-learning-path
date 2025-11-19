//Defina um enum para os métodos de pagamento (BOLETO, PIX, DEBITO, CREDITO).
//Defina um enum para o status do boleto (PENDENTE, PAGO, VENCIDO).
//Interface para produto, contendo informações como nome e preço.
//Interface para compra, que contém uma lista de produtos e o método de pagamento.
//Interface para boleto, que inclui número, valor, data de vencimento e status.


enum MetodoPagamento {
    BOLETO,
    PIX,
    DEBITO,
    CREDITO
}


enum StatusBoleto {
    PENDENTE,
    PAGO,
    VENCIDO
}

interface Produto {
    nome: string;
    preco: number;
}

interface Compra {
    produtos: Produto[];
    metodoPagamento: MetodoPagamento;
}

interface Boleto {
    numero: string;
    valor: number;
    dataVencimento: Date;
    status: StatusBoleto;
}

//Exemplo de uso das interfaces e enums definidos acima
const produto1: Produto = { nome: "Notebook", preco: 2500 };
const produto2: Produto = { nome: "Mouse", preco: 150 };

const compra: Compra = {
    produtos: [produto1, produto2],
    metodoPagamento: MetodoPagamento.BOLETO
};

const boleto: Boleto = {
    numero: "123456789",
    valor: 2650,
    dataVencimento          : new Date("2023-12-31"),
    status: StatusBoleto.PENDENTE
};

console.log(compra);
console.log(boleto);

