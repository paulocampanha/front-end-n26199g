// Crie um programa javascript para percorer um lista de produtos
// e imprimir o nome do produto e o valor. 
// Antes de imprimir cada item da lista, verifique se o valor
// é maior do que R$ 500,00. Para valores acima de 500 aplique 
// um desconto de 10% ants de imprimir.
// Exemplo: preco -= preco * 0.1;   

const produtos = [
    { nome: "Monitor 23", preco: 1500 },
    { nome: "Mouse", preco: 75.99 },
    { nome: "Teclado", preco: 189.90 },
    { nome: "Impressora HP", preco: 980 }
]


produtos.forEach(produto => {
    if (produto.preco > 500) {
        produto.preco -= produto.preco * 0.1; // desconto de 10%
    }

    console.log(`Produto: ${produto.nome} - 
        Preço: R$ ${produto.preco.toFixed(2)}`);
});
