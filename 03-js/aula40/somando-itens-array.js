// Nesse programa vamos usar a estrura for para somar os preços listados em
// uma array

const precos = [150.55, 78.99, 12.27, 38.42];
let total = 0;
for (let i = 0; i < precos.length; i++){
    total += precos[i];    // equivalente à total = total + precos[i]
}
console.log("Total do Carrinho: R$ " + total.toFixed(2));

