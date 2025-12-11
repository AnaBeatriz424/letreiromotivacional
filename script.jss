window.addEventListener("load", () => {
    const letreiro = document.getElementById("letreiro");
    const container = document.querySelector(".container");

    let pos = container.offsetWidth; // começa fora da tela à direita
    let velocidade = 2; // pixels por frame

    function animar() {
        pos -= velocidade; // move para a esquerda
        if (pos < -letreiro.offsetWidth) {
            pos = container.offsetWidth; // reinicia quando sair da tela
        }
        letreiro.style.left = pos + "px";
        requestAnimationFrame(animar);
    }

    animar();
});
