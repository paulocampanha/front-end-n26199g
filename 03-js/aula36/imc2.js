function calcularIMC() {
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);
    let mensagem = document.getElementById("mensagem");

    // Limpa classes anteriores
    mensagem.className = "";

    // Validação dos campos
    if (altura === 0 || peso === 0 || isNaN(altura) || isNaN(peso)) {
        mensagem.innerHTML = "Por favor, preencha todos os campos.";
        mensagem.classList.add("erro");
        return;
    }

    if (altura <= 0 || peso <= 0) {
        mensagem.innerHTML = "Altura e peso devem ser valores positivos.";
        mensagem.classList.add("erro");
        return;
    }

    // Cálculo do IMC
    let imc = peso / (altura * altura);
    let imcFormatado = imc.toFixed(2);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        mensagem.classList.add("abaixo");
    } else if (imc < 25) {
        classificacao = "Peso normal";
        mensagem.classList.add("normal");
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        mensagem.classList.add("sobrepeso");
    } else {
        classificacao = "Obesidade";
        mensagem.classList.add("obesidade");
    }

    mensagem.innerHTML = `IMC: ${imcFormatado} - ${classificacao}`;
}