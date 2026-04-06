function carregarFotos() {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = "";
    for (let i = 1; i <= 15; i++){
        galeria.innerHTML +=  
        `<img src="https://picsum.photos/200?random=${i}" style="border-radius:8px">`;
    }
}

