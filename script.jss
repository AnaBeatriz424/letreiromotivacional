const texto = document.getElementById("texto");
const container = document.querySelector(".letreiro-container");

let posicao = 0;          // posição inicial
let direcao = 1;          // 1 = direita, -1 = esquerda
const velocidade = 2;     // controle da velocidade (px por frame)

function animar() {
  const larguraContainer = container.offsetWidth;
  const larguraTexto = texto.offsetWidth;

  posicao += direcao * velocidade;
  texto.style.left = posicao + "px";

  // inverter direção ao chegar nas bordas
  if (posicao + larguraTexto >= larguraContainer) {
    direcao = -1; // volta para esquerda
  } else if (posicao <= 0) {
    direcao = 1;  // vai para direita
  }

  requestAnimationFrame(animar);
}

animar();
