const select = document.getElementById("listaAnos");
let contador = 0;

//Enquanto o contador for menor do que 20, 
//cria um option no select
while (contador <= 20) {
    let opcao = document.createElement("option");
    opcao.text = contador + " anos";
    opcao.value = contador;
    select.add(opcao);
    select.add
    contador++;
}