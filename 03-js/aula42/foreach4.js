// Nesse programa vamos usar o forEach() para percorrer uma
// lista.

const alunos = [
    { nome: "Gaspar", idade: 18, peso: 80, altura: 1.75 },
    { nome: "Luiza", idade: 25, peso: 63, altura: 1.65 },
    { nome: "Jorge", idade: 30, peso: 75, altura: 1.70 }
];

alunos.forEach(aluno => {
    console.log("Nome do aluno: " + aluno.nome);
    console.log("Idade: " + aluno.idade);
    console.log("Peso: " + aluno.peso + 
        " - Altura: " + aluno.altura);
    console.log("=============================");
});