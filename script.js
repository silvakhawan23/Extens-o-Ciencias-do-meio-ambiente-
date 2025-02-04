const questions = [
    {
        question: "Qual é a principal causa do aquecimento global?",
        options: [
            "Emissão de gases de efeito estufa",
            "Desmatamento",
            "Poluição dos oceanos",
            "Uso de energia renovável"
        ],
        correct: 0
    },
    {
        question: "Qual é a maior floresta tropical do mundo?",
        options: [
            "Floresta Amazônica",
            "Floresta do Congo",
            "Floresta Boreal",
            "Floresta da Indonésia"
        ],
        correct: 0
    },
    {
        question: "Qual gás é o principal responsável pelo efeito estufa?",
        options: [
            "Oxigênio",
            "Dióxido de Carbono",
            "Hidrogênio",
            "Metano"
        ],
        correct: 1
    },
    {
        question: "O que significa o termo biodiversidade?",
        options: [
            "Variedade de espécies em um ecossistema",
            "Quantidade de árvores em uma floresta",
            "Nível de poluição do ar",
            "Área coberta por florestas"
        ],
        correct: 0
    },
    {
        question: "A lixeira amarela é responsável por qual tipo de descarte de lixo?",
        options: [
            "Plástico",
            "Papel",
            "Vidro",
            "Metal"
        ],
        correct: 3
    },

    {
        question: "Como a poluição dos oceanos afeta a vida marinha?",
        options: [
            "Asfixia os peixes",
            "Destroi os habitats marinhos",
            "Contamina os oceanos com substâncias tóxicas",
            "Todas as alternativas acima"
        ],
        correct: 3
    },
    {
        question: "Qual destas ações ajuda a reduzir o desmatamento?",
        options: [
            "Uso excessivo de papel",
            "Queimadas controladas",
            "Reciclagem de papel",
            "Construção de mais estradas"
        ],
        correct: 2
    },
    {
        question: "O que significa a sigla 'ODS', usada pela ONU para sustentabilidade?",
        options: [
            "Objetivos de Desenvolvimento Sustentável",
            "Organização para Defesa da Sustentabilidade",
            "Ordem de Desenvolvimento Social",
            "Oficina de Diretrizes Sustentáveis"
        ],
        correct: 0
    },
    {
        question: "Qual bioma é considerado o mais biodiverso do planeta?",
        options: [
            "Cerrado",
            "Pantanal",
            "Amazônia",
            "Caatinga"
        ],
        correct: 2
    },
    {
        question: "Qual fonte de energia é considerada renovável?",
        options: [
            "Carvão mineral",
            "Energia eólica",
            "Petróleo",
            "Gás natural"
        ],
        correct: 1
    },
    {
        question: "Qual é a principal causa do aquecimento global?",
        options: [
            "Atividade solar",
            "Erupções vulcânicas",
            "Emissão de gases do efeito estufa",
            "Movimento das placas tectônicas"
        ],
        correct: 2
    },
    {
        question: "O que é biodiversidade?",
        options: [
            "Variedade de ecossistemas no mundo",
            "Quantidade de espécies em um habitat",
            "Diversidade de seres vivos na Terra",
            "Variedade de animais em uma floresta"
        ],
        correct: 2
    },
    {
        question: "Qual destes resíduos deve ser descartado na lixeira azul?",
        options: [
            "Metal",
            "Papel",
            "Vidro",
            "Plástico"
        ],
        correct: 1
    },
    {
        question: "O que é um ecossistema?",
        options: [
            "Um conjunto de seres vivos e o ambiente em que vivem",
            "A biodiversidade de um único bioma",
            "Um local onde só vivem animais",
            "Uma floresta sem interferência humana"
        ],
        correct: 0
    },
    {
        question: "Qual destes materiais leva mais tempo para se decompor na natureza?",
        options: [
            "Papel",
            "Plástico",
            "Casca de banana",
            "Vidro"
        ],
        correct: 3
    },
    {
        question: "Qual das alternativas é um exemplo de energia limpa?",
        options: [
            "Energia solar",
            "Carvão mineral",
            "Queima de madeira",
            "Energia nuclear"
        ],
        correct: 0
    },
    {
        question: "Qual é uma prática sustentável para a conservação da água?",
        options: [
            "Descarte de resíduos industriais em rios",
            "Irrigação em horários de sol intenso",
            "Reutilização de água da chuva",
            "Desperdício de água potável"
        ],
        correct: 2
    },
    {
        question: "O que significa reciclagem?",
        options: [
            "Transformação de resíduos em novos produtos",
            "Reutilização de materiais sem alterar sua composição",
            "Descarte correto de resíduos orgânicos",
            "Queima de materiais para produção de energia"
        ],
        correct: 0
    },
    {
        question: "O que é a pegada ecológica?",
        options: [
            "O impacto ambiental causado por uma pessoa ou sociedade",
            "A quantidade de CO2 emitida na atmosfera",
            "A área necessária para plantar árvores",
            "O consumo de água por uma população"
        ],
        correct: 0
    },
    {
        question: "Qual destes impactos ambientais está diretamente ligado ao desmatamento?",
        options: [
            "Aumento da biodiversidade",
            "Diminuição da erosão do solo",
            "Redução da emissão de gases do efeito estufa",
            "Perda de habitat para diversas espécies"
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let scores = [0, 0];
let currentPlayer = 0;
let players = [];

function startGame() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    if (!player1 || !player2) {
        alert('Por favor, preencha os nomes dos dois jogadores!');
        return;
    }

    players = [player1, player2];
    document.querySelector('.start-container').classList.add('hidden');
    document.querySelector('.question-container').classList.remove('hidden');
    document.querySelector('.next-btn').classList.remove('hidden');
    loadQuestion();
}

function selectOption(button) {
    const options = document.querySelectorAll('.options button');
    options.forEach(btn => btn.disabled = true);
    const index = Array.from(options).indexOf(button);

    if (index === questions[currentQuestion].correct) {
        button.style.backgroundColor = '#4caf50';
        scores[currentPlayer]++;
    } else {
        button.style.backgroundColor = '#d32f2f';
    }
    document.querySelector('.next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentPlayer = (currentPlayer + 1) % 2;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function loadQuestion() {
    const questionContainer = document.querySelector('.question-container');
    const nextBtn = document.querySelector('.next-btn');

    questionContainer.querySelector('.question').innerText = `${players[currentPlayer]}, ${questions[currentQuestion].question}`;
    const optionsList = questionContainer.querySelector('.options');
    optionsList.innerHTML = '';

    questions[currentQuestion].options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(button);
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    nextBtn.classList.add('hidden');
}

function showResults() {
    document.querySelector('.quiz-container').innerHTML = `
        <h1>Resultados Finais</h1>
        <p>${players[0]}: <strong>${scores[0]}</strong> pontos</p>
        <p>${players[1]}: <strong>${scores[1]}</strong> pontos</p>
    `;
}

loadQuestion();
