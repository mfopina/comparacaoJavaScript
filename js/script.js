function compararValores() {
    var valorDigitado = document.getElementById("valorDigitado").value;
    var valorDeComparacao = "50";  // Substitua por seu valor

    if (valorDigitado == valorDeComparacao) {
        
        location = 'js/ganhou.html'

    } else {
        location = 'js/perdeu.html'
    }
}