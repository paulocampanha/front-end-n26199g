// Função com parâmetros não necessários ou valor padrão
function criarMensagem(texto = "Mensagem Padrão", autor = "Sistema"){
    console.log("Autor da Mensagem: " + autor);
    console.log("Mensagem: " + texto);
}

criarMensagem("Desenvolvimento de sites dinâmicos.", "Gaspar Neve");
criarMensagem("Falha no Sistema. Acesso Negado.");
criarMensagem();

// Função usando array como parâmetro
function listaFrutas(frutas) {
    for (let i = 0; i < frutas.length; i++) {
        console.log((i + 1) + "ª fruta: " + frutas[i]);
    }
}

let minhasFrutas = ["Banana", "Goiaba", "Melancia", "Melão"];
listaFrutas(minhasFrutas);

// Função usando lista de objetos
function exibirTotal(produtos) {
    let total = 0;
    produtos.forEach(item => {
        console.log("Produto: " + item.produto + " R$ " + item.preco.toFixed(2));
        total += item.preco
    });
    console.log("=".repeat(40));
    console.log("Total do carrinho: R$ " + total.toFixed(2));
}

const carrinho = [
    { produto: "Camiseta", preco: 85.9 },
    { produto: "Calça", preco: 125 },
    { produto: "Bermuda", preco: 55 },
    { produto: "Chinelo Havaiana", preco: 29.9 }
]
console.log("=".repeat(40));
exibirTotal(carrinho);