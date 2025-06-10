document.addEventListener("DOMContentLoaded", () => {

    const contadorElemento = document.getElementById("contador");
    const botaoTeste = document.getElementById("botaoTeste");

let contadorErros = 0;

function compararValores(valorDigitado) {
        var valorDeComparacao = "50";  // Substitua por seu valor

    if (valorDigitado == valorDeComparacao) {
        
        location = 'js/ganhou.html'

    } else {
            contadorErros++;
            contadorElemento.textContent = `Contagem de erros: ${contadorErros}`;
            alert("Resposta errada. Contagem atualizada.");
    }
}


botaoTeste.addEventListener("click", () => {
        var valorDigitado = document.getElementById("valorDigitado").value;
        compararValores(valorDigitado);
    });
});
