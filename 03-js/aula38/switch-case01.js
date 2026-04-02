// Nesse programa vamos estudar o uso do switch case para imprimir o conceito 
// de um serviço

let nota = 4;
let msg = "";

switch (nota) {
    case 1:
        msg = "Atendimento pessímo";
        break;
    case 2:
        msg = "Atendimeto ruim";
        break;
    case 3:
        msg = "Arendimento Regular";
        break
    case 4:
        msg = "Atendimento bom";
        break;
    case 5:
        msg = "Atendimento Excelente";
        break;
    default:
        msg = "nota inválida" 
}

console.log(msg);
