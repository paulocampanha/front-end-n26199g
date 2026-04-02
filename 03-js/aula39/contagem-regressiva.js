// Faça um programa usando a estrutura while para imprimir uma
// contagem regressiva, conforme exemplos abaixo
// 10...9...8...7...6...5...4...3...2...1...F O G O ! ! !

let contador = 10;
let saida = "";

while (contador > 0){
    saida = saida + contador + "...";   // 10...9...8...
    contador--;
}
console.log(saida + "F O G O ! ! !");
