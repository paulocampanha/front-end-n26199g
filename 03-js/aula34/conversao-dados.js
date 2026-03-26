// Nesse programa vamos estudar a conversão de números no formato texto 
// para números no formato número.

let numeroTexto1 = "29";
console.log("Tipo de dados de numeroTexto1: " + typeof numeroTexto1);
let numeroTexto2 = "35.5";
let somaTexto = numeroTexto1 + numeroTexto2;
console.log("Resultao da soma de numeroTexto1 com numeroTexto2: " + somaTexto);
let multTexto = numeroTexto1 * numeroTexto2;
console.log("Resultado de numeroTexto1 x numroTexto2: " + multTexto);

let numero1 = parseInt(numeroTexto1);
console.log("Tipo de dados de numero1: " + typeof numero1);
let numero2 = parseFloat(numeroTexto2);
console.log("Tipo de dados de numero2: " + typeof numero2);

console.log("Numero1: " + numero1);
console.log("Numero2: " + numero2);

let numero3 = parseInt(numeroTexto2);
console.log("Numero3: " + numero3);

// Conversor universal: Number()
numero4 = Number(numeroTexto1);
numero5 = Number(numeroTexto2);

console.log("Numero4: " + numero4);
console.log("Numero5: " + numero5);

let numeroTexto4 = String(numero4);
let numeroTexto5 = numero5.toString();
console.log("numeroTexto4: " + typeof numeroTexto4);
console.log("numeroTexto5: " + typeof numeroTexto5);
console.log("numeroTexto2 em formato brasileiro: " 
    + numeroTexto2.replace(".",","));



