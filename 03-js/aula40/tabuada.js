function gerarTabuada() {
    const numero = document.getElementById("numeroTabuada").value;
    const resultado = document.getElementById("resultadoTabuada");
    resultado.innerHTML = "";
    for (let i = 1; i <= 10; i++){
        resultado.innerHTML += `<p>${numero} X ${i} = ${numero * i}</p>`;               
        
    }
}