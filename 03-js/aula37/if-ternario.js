let usuarioLogado = true;

let mensagem = usuarioLogado ? "Bem-vindo ao sistema" 
: "Usuário ou senha inválido";

// O código acima é equivalente ao código abaixo
if (usuarioLogado) {
    mensagem = "Bem-vindo ao sistema";
} else {
    mensagem= "Usuário ou senha inválido";
}

console.log(mensagem);