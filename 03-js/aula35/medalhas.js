function verificarPontuacao(){
    let ptsInput = document.getElementById("pontos").value;
    let result = document.getElementById("resultado");

    // Validação para campo vazio
    if (ptsInput === ""){
        result.innerText = "DIGITE ALGO";
        result.style.color = "#ff4757";
        return;
    }

    let pts = Number(ptsInput);


    if (pts >= 1000) {
        result.innerText = "Nível: OURO";
        result.style.color = "#f1c40f";
    } else if (pts >= 500) {
        result.innerText = "Nível: PRATA";
        result.style.color = "#95a5a6"; 
    } else if (pts >= 100) {
        result.innerText = "Nivel: BRONZE";
        result.style.color = "#d35400";
    } else {
        result.innerText = "Pontuação sem medalha";
        result.style.color = "#000";
    }
}