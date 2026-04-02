function limpar(){
    let campo = document.getElementById("cpf");
    let valor = campo.value;
    do {
        valor = valor.replace(".", "").replace("-", "");
    } while (valor.includes(".") || valor.includes("-"))
    campo.value = valor;
}

