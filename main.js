var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;


function Chutar() {
    
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    var elementoContador = document.getElementById("contador");

    if(chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "Número inválido, digite um número de 0 a 10!";
    } else if (tentativas > 0 && chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!";
        tentativas = 0;
    } else if (tentativas > 0 && chute > numeroSecreto) {
        elementoResultado.innerHTML = "Você errou, o número sorteado é menor que o número chutado!";
        tentativas--;
        elementoContador.innerHTML = "Vocé tem mais " + tentativas + " tentativas";
    } else if (tentativas > 0 && chute < numeroSecreto) {
        elementoResultado.innerHTML = "Você errou, o número sorteado é maior que o número chutado!";
        tentativas--;
        elementoContador.innerHTML = "Você tem mais " + tentativas + " tentativas";
    } else if (tentativas == 0) {
      elementoResultado.innerHtml = "Você não tem mais tentativas, tente mais tarde!";
    }
}
