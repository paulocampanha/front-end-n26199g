// Função sem parâmetro e sem retorno
function saudacao() {
    console.log("Boa Noite!");
    console.log("Nossa aula de hoje é sobre Funções.");
}

saudacao();

// Função com parâmetros e sem retorno
function saudarUsuario(nome) {
    console.log("Olá, " + nome + "!");
    console.log("Bem-vindo ao sistema.");
    console.log("=".repeat(40));
}

saudarUsuario("Gaspar");

let nomeUsuario = "Anabela";
saudarUsuario(nomeUsuario);