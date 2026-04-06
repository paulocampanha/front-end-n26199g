const select = document.getElementById("anoNascimento");
const anoAtual = new Date().getFullYear();
for (let i = anoAtual; i>= 1950; i--) {
    select.innerHTML += `<option value="${i}">${i}</option>`;
}