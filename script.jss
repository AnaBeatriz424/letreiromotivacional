// (c) Frase motivacional
const fraseMotivacional = "🚀 O seu limite é a sua imaginação! Programe seu futuro com coragem. 🌟";

const marqueeElement = document.getElementById('marqueeText');

// Insere a frase no elemento do letreiro
marqueeElement.textContent = fraseMotivacional;

// --- Configurações Adicionais via JS (para controle mais fino) ---

// (g) Controle de Velocidade (em segundos)
const velocidadeSegundos = 15; // Ajuste este valor para mudar a velocidade
marqueeElement.style.animationDuration = `${velocidadeSegundos}s`;

// (a) e (b) Garante o início da esquerda para a direita e a volta.
// A propriedade 'alternate' no CSS fará ele voltar, mas precisamos garantir que a animação
// comece de um ponto que cubra a tela (o 'from' e 'to' do @keyframes)
marqueeElement.style.animationDirection = 'alternate';
marqueeElement.style.animationName = 'slide-marquee';