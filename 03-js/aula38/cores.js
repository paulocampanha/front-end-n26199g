
function mudarCor(){
    const opt = document.getElementById("seletorCores").value;
    const caixa = document.getElementById("caixa");
    const nomeDaCor = document.getElementById("nomeDaCor");

    
    switch (opt){
        case "azul":
            caixa.style.backgroundColor = "#3498db";
            nomeDaCor.innerText = "Cor Atual: Azul Oceano.";
            break;
        case "verde":
            caixa.style.backgroundColor = "#27ae60";
            nomeDaCor.innerText = "Cor Atual: Verde Floresta.";
            break;
        case "vermelho":
            caixa.style.backgroundColor = "#e74c3c";
            nomeDaCor.innerText = "Cor Atual: Vermelho Alerta.";
            break;
        case "roxo":
            caixa.style.backgroundColor = "#9b59b6";
            nomeDaCor.innerText = "Cor Atual: Roxo royal.";
            break;
        case "laranja":
            caixa.style.backgroundColor = "#e67e22";
            nomeDaCor.innerText = "Cor Atual: Laranja Vibrante.";
            break;        
        default:
            caixa.style.backgroundColor = "#bdc3c3";
            nomeDaCor.innerText = "Cor Atual: Padrão.";
            
    }

}

