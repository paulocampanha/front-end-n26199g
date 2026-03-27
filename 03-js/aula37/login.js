function validarAcesso() {
    // Simulando dados vindos do banco de dados
    const USER_DB = "admin";
    const PASS_DB = "senha123";

    let userDigitado = document.getElementById("usuario").value;
    let passDigitado = document.getElementById("senha").value;
    let display = document.getElementById("mensagem");

    if (userDigitado === USER_DB && passDigitado === PASS_DB) {
        display.innerText = "Acesso autorizado! Bem-vindo.";
    } else {
        display.innerText = "Usuário ou senha incorretos.";
    }
}