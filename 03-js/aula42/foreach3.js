// Nesse programa vamos somar os elementos de um array usando
// forEach()

const valores = [355.67, 56.82, 100, 145,99, 505,50];
let total = 0;
valores.forEach(valor => {
    total += valor;   // equivalente à total = total + valor
});
console.log("Total a pagar: R$ " + total.toFixed(2));

