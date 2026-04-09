// Nesse arquivo vamos estudar Arrow Function
// Função tradicional
function dobrarValor(numero) {
    let total = numero * 2;
    return total;
}

let valor = 6;
let dobro = dobrarValor(valor);
console.log("Valor dobrado: " + dobro);

// Função de linha única
const dobrarValor2 = function(numero) { return numero * 2};

valor = 8;
dobro = dobrarValor2(valor);
console.log("Valor dobrado: " + dobro);

// Arrow Function
const dobrarValor3 = numero => numero * 2;

valor = 12;
dobro = dobrarValor3(valor);
console.log("Valor dobrado: " + dobro);




