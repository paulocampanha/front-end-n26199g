// Nesse programa vamos estudar a estrutura de desvio condicional if
let idade =20;

if (idade >= 18){
    console.log("Você pode tirar carta de motorista");
}

console.log("Fim da estrutura if");
console.log("======================================");
// Nesse programa vamos estudar a estrutura de desvio condicional if else

let media = 40;

if (media >= 50) {
    console.log("Aluno aprovado com a média " + media);
} else {
    console.log("Aluno reprovado com a média " + media);
    console.log("Faça o pagamento da rematricula no link.");
    console.log("Desconto de 15% somente hoje");
}

console.log("======================================");

// Nesse programa vamos estudar a estrutura de desvio condicional if else if else

let cor = "Verde";

if (cor == "Azul") {
    console.log("Cor azul");
} else if (cor == "Vermelho") {
    console.log("Cor Vermelha");
} else if (cor == "Branco") {
    console.log("Cor Branca");
} else {
    console.log("Sem Cor");
}
