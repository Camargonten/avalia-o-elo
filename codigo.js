function calcularRating() {
    let totalPontos = 0;
    const totalPerguntas = 12;
    let perguntasRespondidas = 0;

    // Valida o preenchimento e calcula a pontuação
    for (let i = 1; i <= totalPerguntas; i++) {
        const resposta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (resposta) {
            perguntasRespondidas++;
            totalPontos += parseFloat(resposta.value);
        }
    }

    const divResultado = document.getElementById("resultado");

    // Trava de segurança: impede o avanço se faltarem respostas
    if (perguntasRespondidas < totalPerguntas) {
        divResultado.innerHTML = `
            <div style="background-color: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; border: 1px solid #ffeeba; margin-top: 20px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                 <strong>Faltam perguntas!</strong> Você respondeu apenas <strong>${perguntasRespondidas} de ${totalPerguntas}</strong>. Responda todas para ver o seu rating.
            </div>
        `;
        return;
    }

    let nivelRating = "";
    let imagemCaminho = "";

    // Classificação do elo baseado na pontuação
    if (totalPontos <= 12) {
        nivelRating = "0 a 900 Elo (O Iniciante / Caçador de Peões)";
        imagemCaminho = "imagens/iniciante.jpeg";
    } else if (totalPontos >= 13 && totalPontos <= 15) {
        nivelRating = "900 a 1600 Elo (O Intermediário / Tático Malandro)";
        imagemCaminho = "imagens/intermediario.jpeg";
    } else if (totalPontos >= 16 && totalPontos <= 19) {
        nivelRating = "1600 a 2000 Elo (O Avançado / Tubarão)";
        imagemCaminho = "imagens/avancado.jpeg";
    } else if (totalPontos >= 20 && totalPontos <= 24) {
        nivelRating = "2000 a 2300 Elo (O Expert / Estrategista)";
        imagemCaminho = "imagens/mestre.jpeg";  
    } else {
        nivelRating = "2300+ Elo (O Mestre / Alienígena)";
        imagemCaminho = "imagens/mestre.jpeg";
    }

    // Exibe o resultado dinamicamente
    divResultado.innerHTML = `
        <h3>O seu resultado:</h3>
        <img src="${imagemCaminho}" alt="Ilustração do Nível" class="imagem-resultado">
        <p><strong>Pontuação total:</strong> ${totalPontos} pontos</p>
        <p><strong>O seu nível:</strong> ${nivelRating}</p>
        
        <div style="margin-top: 25px; text-align: center;">
            <button type="button" onclick="refazerTeste()" class="btn-acao">Refazer Teste</button>
        </div>
    `;
}

// Reseta o quiz
function refazerTeste() {
    location.reload();
}
