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
let pos = container.offsetWidth; // começa fora da tela à direita
const speed = 2; // velocidade

// Inicializa com a primeira frase
letreiro.textContent = frases[fraseIndex];

function animar() {
  pos -= speed; // movimento para a esquerda
  letreiro.style.left = pos + 'px';

  // Quando o texto sai totalmente da tela pela esquerda
  if (pos < -letreiro.offsetWidth) {
    // troca de frase
    fraseIndex = (fraseIndex + 1) % frases.length;
    letreiro.textContent = frases[fraseIndex];

    // reinicia posição à direita
    pos = container.offsetWidth;
  }

  requestAnimationFrame(animar);
}

// iniciar animação
animar();
