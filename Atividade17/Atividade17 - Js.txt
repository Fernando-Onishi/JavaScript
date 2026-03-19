// 1
let tituloEx1 = document.getElementById("tituloEx1")
function mudar(){
    tituloEx1.innerText = "Aprendendo DOM com JavaScript"
}

// 2
let tituloEx2 = document.getElementById("tituloEx2")
function entrar(){
    let nome = document.getElementById("nome").value
    tituloEx2.innerText = "Bem-Vindo ao sistema, " + nome
}

// 3
let paragrafo = document.getElementById("paragrafo")
function mudarTexto(){
    paragrafo.innerText = "Manipulando HTML com JavaScript"
}

// 4
let mensagem = document.getElementById("mensagem")
function BotaoEnviar(){
    let nome1 = document.getElementById("nome1").value
    if(nome1 == ""){
        mensagem.innerText = "Digite um nome primeiro"
    }else{
        mensagem.innerText = "Olá, " + nome1
    }
}

// 5
const fundo = document.getElementById("fundo")
fundo.style.backgroundColor = "white"
function ModoEscuro(){
    if(fundo.style.backgroundColor == "white"){
        fundo.style.backgroundColor = "black"
    }else{
        fundo.style.backgroundColor = "white"
    }
}

// 6
let resultado = document.getElementById("resultado")
function VerificarNota(){
    let nota = document.getElementById("nota").value
    if(nota >= 7){
        resultado.innerText = "Aluno Aprovado"
    }else{
        resultado.innerText = "Aluno Reprovado"
    }
}

// 7
const mensagemSupresa = document.getElementById("mensagemSupresa")
function surpresa(){
    mensagemSurpresa.innerText = "Você encontrou a mensagem Surpresa"
}

// 8
const mensagemEx8 = document.getElementById("mensagemEx8")
function DestacarTexto(){
    mensagemEx8.style.color = "red"
    mensagemEx8.style.fontWeight = "bold"
}

// 9
const resultado1 = document.getElementById("resultado1")
function Verificar(){
    let nome2 = document.getElementById("nome2").value
    resultado1.innerText = "Você digitou "+ nome2.length + " caracteres"
}

// 10
const texto1 = document.getElementById("texto1")
function MudarCor(){
    texto1.style.color = "blue"
}

// 11
const texto2 = document.getElementById("texto2")
function EsconderTexto(){
    if(texto2.style.display == "none"){
        texto2.style.display = "block"
    }else{
        texto2.style.display = "none"
    }
}

// 12
const resultado2 = document.getElementById("resultado2")
function Resultado(){
    let idade = document.getElementById("idade").value
    let idadeMeses = idade * 12
    resultado2.innerText = "Você já viveu "+ idadeMeses + " meses"
}

// 13
const resultado3 = document.getElementById("resultado3")
function VerificarIdade(){
    let idade1 = document.getElementById("idade1").value
    if(idade1 >= 18){
        resultado3.innerText = "Você é maior de idade"
    }else{
        resultado3.innerText = "Você é menor de idade"
    }
}