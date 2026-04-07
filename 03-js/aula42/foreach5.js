// Nesse programa vamos percorrer uma lista de alunos e 
// verificar se o mesmo foi aprovado ou reprovado
// Para ser aprovado a media deve se maior ou igual a 6

const alunos = [
    { nome: "Gaspar", media: 5, trabalho: true },
    { nome: "Jorge", media: 4, trabalho: false },
    { nome: "Luiza", media: 8.5, trabalho: false },
    { nome: "Anabela", media: 9, trabalho: true}
];

alunos.forEach(aluno => {
    if (aluno.trabalho){   // if (aluno.trabalho === true)
        aluno.media += 1;
    } 
    if (aluno.media >= 6){
        console.log("Aluno: " + aluno.nome + " - APROVADO");
    } else {
        console.log("Aluno: " + aluno.nome + " - REPROVADO");
    }
});
