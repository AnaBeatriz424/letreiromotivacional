const letreiro = document.querySelector('.letreiro');
const container = document.querySelector('.container');

// Lista de frases motivacionais
const frases = [
  "🌟 Acredite em você e vá além! 🌟",
  "🚀 O sucesso começa com um passo! 🚀",
  "💡 Nunca desista dos seus sonhos! 💡",
  "🔥 A persistência supera qualquer obstáculo! 🔥",
  "🌈 Cada dia é uma nova oportunidade! 🌈"
];

let fraseIndex = 0;
let pos = 0;                 // posição inicial
let direction = 1;           // 1 = direita, -1 = esquerda
const speed = 2;             // controle da velocidade (px por frame)

// Inicializa com a primeira frase
letreiro.textContent = frases[fraseIndex];

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

    // Troca de frase quando chega na esquerda
    fraseIndex = (fraseIndex + 1) % frases.length;
    letreiro.textContent = frases[fraseIndex];
  }

  requestAnimationFrame(animar);
}

// iniciar animação
animar();
