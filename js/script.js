function compararValores() {
    var valorDigitado = document.getElementById("valorDigitado").value;
    var valorDeComparacao = "50";  // Substitua por seu valor

    if (valorDigitado == valorDeComparacao) {
        
        location = 'js/ganhou.html'

    } else {
            let i;
            i++;
			document.getElementById("botao").innerHTML = i;
            location = 'index.html'
    }
}