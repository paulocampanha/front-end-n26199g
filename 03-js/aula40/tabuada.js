function gerarTabuada() {
    const numero = document.getElementById("numeroTabuada").value;
    const resultado = document.getElementById("resultadoTabuada");
    resultado.innerHTML = "";
    if (numero !== "") {
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `<p>${numero} X ${i} = ${numero * i}</p>`;

        }
    } else {
        alert("Digite um número para tabuada!");
    }
}

const inputNum = document.getElementById("numeroTabuada");

inputNum.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        gerarTabuada();
    }
});