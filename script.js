const botao = document.getElementById("novaMissao");
const missaoDiv = document.getElementById("missao");

function gerarMissao() {
    const missoes = [
        "Criar um chatbot para ajudar estudantes.",
        "Desenvolver uma IA que recomenda livros.",
        "Treinar uma IA para identificar animais em fotos.",
        "Criar um assistente virtual para organizar tarefas.",
        "Desenvolver uma IA para traduzir idiomas.",
        "Criar uma IA que sugere músicas baseado no humor.",
        "Desenvolver uma IA para detectar notícias falsas."
    ];

    const indice = Math.floor(Math.random() * missoes.length);
    return missoes[indice];
}

botao.addEventListener("click", () => {
    const missao = gerarMissao();
    missaoDiv.textContent = "🤖 Sua missão: " + missao;
});
