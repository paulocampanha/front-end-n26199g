function tr(){
    console.log("=".repeat(40));
}

// Função sem parâmetro e com retorno
function valorPI() {
    return 3.14159;
}

let numeroPi = valorPI();

console.log("PI: " + numeroPi);
console.log("PI 2: " + valorPI());

tr();

// Função com parâmetro e com retorno
function somar(a, b) {
    let total = a + b;
    return total;
}

let somaNumeros = somar(13, 29);
console.log("A soma de 13 + 29 = " + somaNumeros);
tr();
console.log("A soma de 25 + 32 = " + somar(25, 32));
tr();

// Função com parâmetros, retorno e regra do negócio (lógica condicional)
function verificaParImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é PAR";
    } else {
        return "O número " + numero + " é ÍMPAR";
    }
}

console.log(verificaParImpar(25));
tr()
console.log(verificaParImpar(20));