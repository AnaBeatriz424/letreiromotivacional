document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto");
  const container = document.querySelector(".letreiro-container");
  const botao = document.getElementById("trocarFrase");
  const velSlider = document.getElementById("velSlider");

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

  // Estado da animação
  let x;                 // posição atual (px)
  let larguraTexto = 0;  // largura do texto atual
  let larguraContainer = 0; // largura do container
  let lastTs = 0;        // timestamp do frame anterior
  let speedPxPerSec = parseInt(velSlider.value, 10); // velocidade em px/s
  let rafId = null;

  // Inicializa dimensões e posição
  function medir() {
    larguraContainer = container.clientWidth;
    larguraTexto = texto.scrollWidth;
    // Começa fora da tela, à direita
    x = larguraContainer;
    texto.style.transform = `translate(${x}px, -50%)`;
  }

  // Loop de animação usando tempo real (suave e independente de FPS)
  function loop(ts) {
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) / 1000; // segundos desde o último frame
    lastTs = ts;

    // Move para a esquerda
    x -= speedPxPerSec * dt;

    // Quando o texto saiu totalmente à esquerda, reinicia à direita
    if (x + larguraTexto < 0) {
      x = larguraContainer;
    }

    texto.style.transform = `translate(${x}px, -50%)`;
    rafId = requestAnimationFrame(loop);
  }

  // Trocar frase ao clicar
  botao.addEventListener("click", () => {
    indiceFrase = (indiceFrase + 1) % frases.length;
    texto.textContent = frases[indiceFrase];
    medir();          // recalcula largura
    lastTs = 0;       // reseta tempo para suavidade
  });

  // Ajustar velocidade via slider
  velSlider.addEventListener("input", () => {
    speedPxPerSec = parseInt(velSlider.value, 10);
  });

  // Recalcular ao redimensionar a janela
  window.addEventListener("resize", () => {
    medir();
  });

  // Garantir que fonte e layout estejam prontos antes de medir
  // Usa requestAnimationFrame para esperar próximo ciclo de pintura
  requestAnimationFrame(() => {
    medir();
    rafId = requestAnimationFrame(loop);
  });
});
