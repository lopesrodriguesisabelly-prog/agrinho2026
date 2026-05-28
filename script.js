// Função para navegar entre as seções
function showSection(id) {
    // Remove a classe 'active' de todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    // Adiciona a classe 'active' na seção clicada
    document.getElementById(id).classList.add('active');
}

// Lógica do Simulador de Pegada
function calcularPegada() {
    const km = document.getElementById('km').value;
    const impactoBase = document.getElementById('alimento').value;
    const resultadoDiv = document.getElementById('resultado');

    if (km === "" || km <= 0) {
        alert("Por favor, insira uma distância válida.");
        return;
    }

    // Cálculo fictício baseado em CO2 por km/alimento
    const totalCO2 = (km * (impactoBase / 100)).toFixed(2);

    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = "#d8f3dc";
    
    let mensagem = "";
    if (totalCO2 < 10) {
        mensagem = "🌱 Ótima escolha! Impacto baixo por ser consumo local.";
    } else {
        mensagem = "⚠️ Alerta: Esse alimento percorreu muito chão. Tente comprar de produtores locais!";
    }

    resultadoDiv.innerHTML = `
        <strong>Resultado:</strong><br>
        Seu prato gerou aproximadamente <strong>${totalCO2}kg</strong> de CO2 no transporte.<br>
        ${mensagem}
    `;
}
