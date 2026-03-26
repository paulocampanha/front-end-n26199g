// Nesse código vamos estudar atribuição composta em 
// JavaScript

let saldo = 5000;

// Deposito de 500
let deposito = 500;
saldo += deposito;   // equivalente a saldo = saldo + deposito
console.log("Novo saldo após deposito de 500: R$ " + saldo);

// Saque de 1300
let saque = 1300;
saldo -= saque;     // equivalente a saldo = saldo - saque
console.log("Novo saldo após saque de 1300: R$ " + saldo);

// Juros de de 5% de juros
let juros = 0.05;
saldo *= juros;     // equivalente a saldo = saldo * juros
console.log("Valor de 5% de juros sobre o saldo: R$ " + saldo);


// Divisão do juros em 12 meses
let meses = 12;
saldo /= meses;       // equivalente a saldo = saldo / meses
console.log("Juros por mês: R$ " + saldo);

// Devisão de caixas com sobra de peças
let pecas = 5000;
let caixas = 70;
pecas %= caixas;   // pecas = pecas % caixas
console.log("Sobre de peças sem embalagem: " + pecas);



