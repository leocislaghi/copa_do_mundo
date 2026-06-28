window.alert("Bem vindo")

function mudar_cor() {
    window.document.getElementById("titulo1").style.color = "blue";
}

function mudar_cor2() {
    window.document.getElementById("titulo1").style.color = "white";
}

function mudar_texto() {
    window.document.getElementById("titulo1").innerText = "VAI CABO VERDE";
}

const paragrafo = document.getElementById("paragrafo");

function alterarTexto() {
    paragrafo.textContent = " A torcida Tubarão Azul se estende pelo mundo todo. Estima-se que existam mais cabo-verdianos vivendo fora do país (cerca de 1,5 milhão) do que dentro do próprio arquipélago.";
}

paragrafo.addEventListener("click", alterarTexto);
