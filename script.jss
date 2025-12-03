const texto = document.getElementById("texto");
const container = document.querySelector(".letreiro-container");
const botao = document.getElementById("trocarFrase");

let posicao = container.offsetWidth; // começa fora da tela à direita
const velocidade = 2; // px por frame

// Lista de frases motivacionais
const frases = [
  "🌟 Acredite em você! Grandes conquistas começam com pequenos passos. 🌟",
  "💪 Nunca desista, pois cada esforço te aproxima da vitória. 💪",
  "🚀 O sucesso é a soma de pequenos esforços repetidos diariamente. 🚀",
  "✨ Você é mais forte do que imagina, siga em frente! ✨",
  "🔥 Transforme seus sonhos em metas e suas metas em conquistas. 🔥"
];

let indiceFrase = 0;

// Função de animação contínua
function animar() {
  posicao -= velocidade;
  texto.style.left = posicao + "px";

  const larguraTexto = texto.offsetWidth;

  // Quando o texto sai totalmente da tela à esquerda, reinicia à direita
  if (posicao + larguraTexto < 0) {
    posicao = container.offsetWidth;
  }

  requestAnimationFrame(animar);
}

// Trocar frase ao clicar no botão
botao.addEventListener("click", () => {
  indiceFrase = (indiceFrase + 1) % frases.length;
  texto.textContent = frases[indiceFrase];
  posicao = container.offsetWidth; // reinicia posição
});

animar();
