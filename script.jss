const fraseMotivacional = "🚀 O seu limite é a sua imaginação! Programe seu futuro com coragem. 🌟";

const marqueeElement = document.getElementById('marqueeText');

// Insere a frase no elemento do letreiro
marqueeElement.textContent = fraseMotivacional;

// Garante que o CSS não está sendo sobrescrito de forma errada
const velocidadeSegundos = 15;
marqueeElement.style.animationDuration = `${velocidadeSegundos}s`;

// Nota: O 'alternate' foi movido para o CSS para garantir que a animação funcione.
// Se você usar o JS para forçar a animação, remova a linha de CSS e use:
// marqueeElement.style.animationName = 'slide-marquee';
// marqueeElement.style.animationDirection = 'alternate'; 
// Recomenda-se deixar no CSS para maior estabilidade.