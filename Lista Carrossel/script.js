let imagens = document.querySelectorAll(".img")
let indice = 0

function mostrarImagem(){
    imagens.forEach(function(img) {
        img.classList.remove("ativa")
    });
    imagens[indice].classList.add("ativa")
}

function voltar(){
    indice--
    if(indice < 0){
        indice = imagens.length -1
    }
    mostrarImagem()
}

function avancar(){
    indice++
    if(indice >= imagens.length){
        indice = 0
    }
    mostrarImagem()
}

// Ex2
let imagens1 = document.querySelectorAll(".img1")
let indice1 = 0
function mostrarImagem1(){
    imagens1.forEach(function(img){
        img.classList.remove("ativa1")
    })
    imagens1[indice1].classList.add("ativa1")
}

function avancarAutomatico(){
    indice1++
    if(indice1 >= imagens1.length){
        indice1 = 0
    }
    mostrarImagem1()
}
setInterval(avancarAutomatico, 1000)