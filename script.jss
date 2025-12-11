/* ARQUIVO: script.js */

// Frase motivacional
const fraseMotivacional = "🌟 A persistência realiza o impossível. Não desista do seu código! 💡";

const marqueeElement = document.getElementById('marqueeText');

// CRÍTICO: Verifica se o elemento existe antes de tentar inserir o texto
if (marqueeElement) {
    marqueeElement.textContent = fraseMotivacional;
} else {
    // Apenas para debug, caso o elemento não seja encontrado
    console.error("Erro: O elemento com ID 'marqueeText' não foi encontrado no HTML.");
}