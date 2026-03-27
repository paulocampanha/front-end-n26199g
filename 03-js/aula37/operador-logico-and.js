let idade = 19;
let sexo = "m";

if (idade == 18 && sexo == "m"){
    console.log("Dirija-se à junta militar para " + 
        " alistamento obrigatorio.");
} else if (sexo == "f") {
    console.log("Mulheres não são obrigado ao "+
        "alistamento militar");
} else {
    console.log("Idade fora da faixa de alistamento militar")
}