// Nesse programa vamos estudar outras formar de Arrow Function

// Arrow Function sem Parâmetros
const saudar = () => console.log("Curso Desenvolvedor Front-end");

saudar();

// Arrow Function com múltiplos parâmetros
const areaRetangulo = (base, altura) => base * altura;

console.log("Área do Retângulo de 10 X 5: " + 
    areaRetangulo(10, 5));

// Exercício: elabore uma arrow function para receber 4 notas
// calcular e retorna a média das notas
// fórmula (n1 + n2 + n3 + n4) / 4;

const calcularMedia = (n1, n2, n3, n4) => (n1+n2+n3+n4) /4;

const media = calcularMedia(5, 6.5, 8, 4.2);
console.log(media);