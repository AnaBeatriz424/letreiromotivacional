document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto");
  const container = document.querySelector(".letreiro-container");
  const botao = document.getElementById("trocarFrase");

  // Frases motivacionais
  const frases = [
    "🌟 Acredite em você! Grandes conquistas começam com pequenos passos. 🌟",
    "💪 Perseverança transforma tentativa em conquista. Continue firme! 💪",
    "🚀 O sucesso nasce da disciplina diária. Faça um pouco hoje. 🚀",
    "✨ Você é capaz. Um passo por vez, sem desistir. ✨",
    "🔥 Sonhos viram metas. Metas viram conquistas. Comece agora! 🔥",
    "🌈 A coragem não é ausência de medo, é seguir apesar dele. 🌈",
    "🌻 Foque no progresso, não na perfeição. Crescer é avançar. 🌻"
  ];

  let indiceFrase = 0;

  // Velocidade fixa e suave (px por segundo)
  const speedPxPerSec = 220;

  // Estado da animação
  let x;                 // posição atual (px)
  let larguraTexto = 0;  // largura do texto atual
  let larguraContainer = 0; // largura do container
  let lastTs = 0;        // timestamp do frame anterior
  let rafId = null;

  // Medir e posicionar o texto fora da borda direita
  function medir() {
    larguraContainer = container.clientWidth;
    // força reflow antes de medir o scrollWidth
    texto.style.transform = "translate(0px, -50%)";
    larguraTexto = texto.scrollWidth;
    x = larguraContainer; // começa fora da tela (à direita)
    texto.style.transform = `translate(${x}px, -50%)`;
  }

  // Loop de animação contínua
  function loop(ts) {
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) / 1000; // segundos
    lastTs = ts;

    x -= speedPxPerSec * dt;

    // Reinicia à direita quando sair totalmente à esquerda
    if (x + larguraTexto < 0) {
      x = larguraContainer;
    }

    texto.style.transform = `translate(${x}px, -50%)`;
    rafId = requestAnimationFrame(loop);
  }

  // Trocar frase e recalcular medidas
  botao.addEventListener("click", () => {
    indiceFrase = (indiceFrase + 1) % frases.length;
    texto.textContent = frases[indiceFrase];
    medir();
    lastTs = 0;
  });

  // Recalcular ao redimensionar a janela
  window.addEventListener("resize", () => {
    medir();
  });

  // Inicialização confiável após pintura
  requestAnimationFrame(() => {
    medir();
    rafId = requestAnimationFrame(loop);
  });
});
