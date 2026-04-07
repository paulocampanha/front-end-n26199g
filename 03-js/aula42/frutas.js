function gerarLista() {
    const frutas = ["Maçã", "Pera", "Uva", "Banana", "Goiaba", "Manga"];
    const ul = document.getElementById("listaFrutas");
    ul.innerHTML = "";

    frutas.forEach(fruta => {
        ul.innerHTML += `<li>${fruta}</li>`;
    });
}