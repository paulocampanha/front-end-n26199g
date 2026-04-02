// Nesse programa vamos usar uma estrutura for para buscar um item em uma array
const nomes = ["Gaspar", "Jorge", "Luiza", "Anabela", "Bruce"];
const busca = "Paulo";
let encontrou = false;

for (let i = 0; i < nomes.length; i++){
    if (nomes[i] === busca) {
        console.log(`Usuario ${busca} encontrado na posição ${i}`);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log(`Usuário ${busca} não encontrado`);
}

