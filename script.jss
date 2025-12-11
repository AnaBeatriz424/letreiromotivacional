const letreiro = document.getElementById("letreiro");
const container = document.querySelector(".container");

let pos = container.offsetWidth; // posição inicial (fora da tela)
let velocidade = 2; // velocidade do letreiro

function animar() {
    pos -= velocidade; // move para a esquerda
    if (pos < -letreiro.offsetWidth) {
        pos = container.offsetWidth; // reinicia quando sair da tela
    }
    letreiro.style.left = pos + "px";
    requestAnimationFrame(animar); // chama a função novamente
}

animar();
