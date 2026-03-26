let numero1 = 29;
let numero2 = 13;

let soma = numero1 + numero2;
let sub = numero1 - numero2;
let sub2 = numero2 - numero1;
let mult = numero1 * numero2;
let div1 = numero1 / numero2;
let div2 = numero2 / numero1;
let resto1 = numero1 % numero2;
let resto2 = numero2 % numero1
let potencia1 = numero1 ** 2;
let potencia2 = numero2 ** 3;
let potencia3 = numero1 ** numero2 

console.log(numero1, " + ", numero2 , " = ", soma);
console.log(numero1, " - ", numero2 , " = ", sub);
console.log(numero2, " - ", numero1 , " = ", sub2);
console.log(numero1, " x ", numero2 , " = ", mult);
console.log(numero1, " : ", numero2 , " = ", div1.toFixed(3));
console.log(numero2, " : ", numero1 , " = ", div2.toFixed(2));
console.log("O resto de",numero1, " : ", numero2 , " é ", resto1);
console.log("O resto de",numero2, " : ", numero1 , " é ", resto2);
console.log(numero1, "elevado a 2 é igual a", potencia1);
console.log(numero2, "elevado a 3 é igual a", potencia2);
console.log(numero1, "elevado a", numero2, 
    "é igual a", potencia3.toLocaleString('pt-BR'));
