window.alert("Bem vindo")

function mudar_cor() {
    window.document.getElementById("titulo1").style.color = "blue";
}

function mudar_cor2() {
    window.document.getElementById("titulo1").style.color = "white";
}

function mudar_texto() {
    const titulo = document.getElementById("titulo1");

    if (titulo.innerText === "VAI CABO VERDE") {
        titulo.innerText = "CABO VERDE";
    } else {
        titulo.innerText = "VAI CABO VERDE";
    }
}

const paragrafo = document.getElementById("paragrafo");

function alterarTexto() {
    paragrafo.textContent = " A torcida Tubarão Azul se estende pelo mundo todo. Estima-se que existam mais cabo-verdianos vivendo fora do país (cerca de 1,5 milhão) do que dentro do próprio arquipélago.";
}

paragrafo.addEventListener("click", alterarTexto);

function redirecionar1() {
    window.location.href = 'eliminatorias.html';
}

function eliminado(){
    window.document.getElementById("eliminado").style.color = "red";
    window.document.getElementById("eliminado").linha.style.textDecoration = "line-through";
}

function eliminado2(){
    window.document.getElementById("eliminado").style.color = "white";
}

function classificada(id) {
    const linha = document.getElementById(id);

    linha.style.color = "green";
    linha.style.fontWeight = "bold";
}

function normal(id) {
    const linha = document.getElementById(id);

    linha.style.color = "white";
    linha.style.fontWeight = "normal";
}