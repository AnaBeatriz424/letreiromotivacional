const letreiro = document.querySelector('.letreiro');
const container = document.querySelector('.container');

let pos = 0;                 // posição inicial
let direction = 1;           // 1 = direita, -1 = esquerda
const speed = 2;             // controle da velocidade (px por frame)

function animar() {
  pos += direction * speed;
  letreiro.style.left = pos + 'px';

  // limites do container
  const limiteDireita = container.offsetWidth - letreiro.offsetWidth;
  const limiteEsquerda = 0;

  if (pos >= limiteDireita) {
    direction = -1; // volta para a esquerda
  } else if (pos <= limiteEsquerda) {
    direction = 1;  // vai para a direita
  }

  requestAnimationFrame(animar);
}

// iniciar animação
animar();
