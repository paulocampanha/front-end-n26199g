// Declarando variáveis (valores mutáveis)
let nomeAluno;
nomeAluno = "Gaspar";

let idade = 17;
let email = "gaspar@sp.senai.br";
let estaMatriculado = true;
let nota = 90.55;

let observacaoMedia = null;
let curso;

let sobrenomeAluno = 'Souza';

// Declarando constantes (valores imutáveis)
const nomeEscola = "Senai";
const unidade = "Celso Charuri";

console.log("--- Ficha de Cadastro ---");
console.log("Escola:", nomeEscola);
console.log("Unidade:", unidade);
console.log("Nome:", nomeAluno + " " + sobrenomeAluno);
console.log("Idade:", idade);
console.log("E-mail:", email);
console.log("Aluno Matriculado:", estaMatriculado);
console.log("Nota:", nota);
console.log("Observação:", observacaoMedia);

console.log("==================================")
console.log("--- Atualizando Dados ---");
idade = 18;
sobrenomeAluno = "Souza Fernandes";
console.log("Idade Atualizada:", idade, "anos.");
console.log("Nome Completo:", nomeAluno, sobrenomeAluno);

console.log("Curso:", curso);

// Usando Template String
console.log(`Olá, ${nomeAluno} ${sobrenomeAluno}! Seja bem vindo à escola ${nomeEscola}.`)





