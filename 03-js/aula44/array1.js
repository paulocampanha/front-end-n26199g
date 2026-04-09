// Nesse programa vamos estudar os comando de array

let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);
console.log("Número de frutas: " + frutas.length);

// alterando um item via índice
frutas[1] = "Morango";
console.log(frutas);

// Manipulando o length
frutas.length = 2;
console.log(frutas);

// Adicionando elementos no final da array
frutas.push("Abacate", "Melão");
console.log(frutas);

// Removendo o último elemento da Array
frutas.pop();
console.log(frutas);

// Adicionando elementos no inicio da Array
frutas.unshift("Laranja", "Melância");
console.log(frutas);

// Removendo o primeiro elemento da Array
frutas.shift();
console.log(frutas);

// Manipulação no meio da array
// splice(inicio, quantidade, item1, item2, ...)

// Removendo o segundo item
// Remover 1 item a partir do indice 1
frutas.splice(1, 1);
console.log(frutas);

// Inserindo sem remover (quantidade = 0)
// Inserir 2 itens a partir do indice 1
frutas.splice(1, 0, "Pera", "Manga");
console.log(frutas);

// Substituir itens
// Trocar o elemento do indice 0
frutas.splice(0, 1, "Goiaba");
console.log(frutas);

// Removendo no meio
// Removendo o elemento do indice 2
frutas.splice(2, 1);
console.log(frutas);

// Removendo um elemento específico
// Localizamos o indice do elemento e removemos.
let indice = frutas.indexOf("Morango");
frutas.splice(indice,1);
console.log(frutas);

