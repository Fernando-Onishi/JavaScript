let perguntas = [
    {   image: "imagens/Trevor_Philips.jpg",
        pergunta: "Qual jogo da Rockstar possui o personagem Trevor?",
        respostas: ["Red Dead Redemption 2", "GTA V", "Bully", "Max Payne"],
        correta: 1
    },
    {   
        image: "imagens/pergunta2.jpg",
        pergunta: "Em qual jogo existe o mapa “Summoner's Rift”?",
        respostas: ["Valorant", "CS2", "League of Legends", "Fortnite"],
        correta: 2
    },
    {   
        image: "imagens/pergunta3.jpg",
        pergunta: "Qual jogo da Riot Games é um FPS tático?",
        respostas: ["Valorant" , "Minecraft" ,"Roblox" , "EA FC 25"],
        correta: 0
    },

    {   
        image: "imagens/pergunta4.jpg",
        pergunta: "Qual desses jogos é focado em blocos e sobrevivência?",
        respostas: ["Minecraft" , "Warzone" , "Fortnite" , "The Sims 4"],
        correta: 0
    },
    
    {
        image: "imagens/pergunta5.jpg",
        pergunta: "Qual jogo possui o modo “Ultimate Team”?",
        respostas: ["NBA 2K" , "EA FC 25", "Valorant", "Forza Horizon 5"],
        correta: 1
    },

    {
        image: "imagens/pergunta6.jpg",
        pergunta: "Qual jogo ficou famoso pelo mapa Verdansk",
        respostas: ["Call of Duty: Warzone" ,"PUBG","Fortnite","Apex Legends"],
        correta: 0  
    },

    {
        image: "imagens/pergunta7.jpg",
        pergunta: "Qual desses jogos é conhecido pelos personagens Jett e Phoenix?",
        respostas: ["Overwatch 2" , "CS2" , "Valorant " , "Rainbow Six Siege"],
        correta: 2
    },

    {
        image: "imagens/pergunta8.jpg",
        pergunta: "Qual jogo permite criar experiências dentro da própria plataforma?",
        respostas: ["Valorant" , "Minecraft" ,"Roblox" , "EA FC 25"],
        correta: 1
    },

    {   
        image: "imagens/pergunta9.png",
        pergunta: "Qual jogo possui o personagem Steve?",
        respostas: ["Terraria" ,"Minecraft" ,"Fortnite", "Roblox"],
        correta: 1
    },

    {   
        image: "imagens/pergunta10.jpg",
        pergunta: "Qual jogo é conhecido pelo modo ranqueada com patentes como Prata e Global?",
        respostas: ["Fortnite","Valorant","CS2", "Rocket League"],
        correta: 2
    },
]

// Variáveis de controle
let perguntaAtual = 0
// Qual pergunta ta sendo exibida
// Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta(){
    let pergunta = perguntas[perguntaAtual]
    // Pega a pergunta atual dentro do array
    document.getElementById("pergunta").innerText = pergunta.pergunta
    document.getElementById("imagem").src = pergunta.image

    let respostasDiv = document.getElementById("respostas")

    respostasDiv.innerHTML = ""
    // Limpa a div antes de adicionar novas respostas

    pergunta.respostas.forEach(function(resposta,index){
        respostasDiv.innerHTML += `<button id="botaoResposta" onclick="verificarResposta(${index})">${resposta}</button>` 
    })
}
function verificarResposta(index){
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    let container = document.getElementById("container")
    if(index == pergunta.correta){
        resultado.innerText = "Acertou"
        resultado.style.color = "#7CCF2F"
        resultado.style.fontSize = "32px"
        pontuacao++
    }else{
        resultado.innerText = "Errou"
        resultado.style.color = "red"
        resultado.style.fontSize = "32px"
    }
}

function proximaPergunta(){
    perguntaAtual++
    // Vai para a próxima pergunta
    if(perguntaAtual < perguntas.length){
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    }else{
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal(){
    document.getElementById("container").innerHTML = `
    <div class="container3">
    <h2 id="tituloFinal">Quiz Finalizado!</h2>
    <p id="pontos">Pontos Totais: ${pontuacao}</p>
    <button id="botaoJogarNovamente" onclick="location.reload()">Jogar Novamente</button>
    </div>`
    document.getElementById("botao").style.display = "none"
    // location.reload() = Recarrega a página
}

mostrarPergunta()