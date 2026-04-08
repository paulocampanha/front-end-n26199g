const produtos = [
    {nome: "Monitor 23'", preco: 1250},
    {nome: "Teclado", preco: 150},
    {nome: "Mouse", preco: 80},
    {nome: "Impressora HP", preco: 980},
    {nome: "Pen-drive 64Gb", preco: 89}
]

const vitrine = document.getElementById("vitrine");

produtos.forEach(produto => {
    vitrine.innerHTML += `
        <div class="item"><h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="alert('Comprado!')">Comprar</button></div>
    `;
});

