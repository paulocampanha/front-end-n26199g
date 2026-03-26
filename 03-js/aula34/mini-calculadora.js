function calcularSoma() {
    // Capturar os elementos do HTML pelo ID
    const numero1 = document.getElementById("num1");
    const numero2 = document.getElementById("num2");
    const display = document.getElementById("displayResultado");

    // Captura os VALORES e converte em Números
    let n1 = Number(numero1.value);  
    let n2 = Number(numero2.value);

    // Realiza o calculo
    let resultado = n1 + n2;
    let resultadoFinal = String(resultado).replace(".",",")

    // Exibe o resultao no HTML (Usamos .innerText)
    display.innerText = "Resultado: " + resultadoFinal;

}

function calcularSubtracao() {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const display = document.getElementById("displayResultado");

    let n1 = Number(input1.value);
    let n2 = Number(input2.value);

    let resultado = n1 - n2;
    let resultadoFinal = String(resultado).replace(".",",")

    display.innerText = "O resultado é: " + resultadoFinal;
}

function calcularMultiplicacao() {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const display = document.getElementById("displayResultado");

    let n1 = Number(input1.value);
    let n2 = Number(input2.value);

    let resultado = n1 * n2;
    let resultadoFinal = String(resultado).replace(".",",")

    display.innerText = "O resultado é: " + resultadoFinal;
}

function calcularDivisao() {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const display = document.getElementById("displayResultado");

    let n1 = Number(input1.value);
    let n2 = Number(input2.value);

    let resultado = n1 / n2;
    let resultadoFinal = String(resultado.toFixed(2)).replace(".",",")

    display.innerText = "O resultado é: " + resultadoFinal;
}