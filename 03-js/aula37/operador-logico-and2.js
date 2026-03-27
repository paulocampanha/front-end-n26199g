let idade = 18;

if (idade <= 12) {
    console.log("Faixa Infantil");
} else if (idade > 12 && idade < 18) {
    console.log("Faixa Adolescente");
} else if (idade >= 18 && idade < 65) {
    console.log("Faixa Adulta");
} else {
    console.log("Faixa de Idoso");
}