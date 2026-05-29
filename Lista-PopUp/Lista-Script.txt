// 1
function entrar(){
    document.getElementById("PopUp1").style.display = "none"
}

function abrirPopUp(){
    document.getElementById("PopUp1").style.display = "flex"
    document.getElementById("PopUp1").style.justifyContent = "center"
    document.getElementById("PopUp1").style.alignItems = "center"   
}

// 2
function abrirPopUp1(){
    document.getElementById("PopUp2").style.display = "flex"
    document.getElementById("PopUp2").style.justifyContent = "center"
    document.getElementById("PopUp2").style.alignItems = "center"
}

function botaoNao(){
    document.getElementById("PopUp2").style.display = "none"
}

function botaoSim(){
    document.getElementById("PopUp2").style.display = "none"
}

// 3
img.addEventListener("click", function(){
    document.getElementById("PopUp3").style.display = "flex"
    document.getElementById("PopUp3").style.justifyContent = "center"
    document.getElementById("PopUp3").style.alignItems = "center"

})

imgAtiva.addEventListener("click", function(){
    document.getElementById("PopUp3").style.display = "none"
})

// 4
function abrirPopUp2(){
    document.getElementById("PopUp4").style.display = "flex"
    document.getElementById("PopUp4").style.justifyContent = "center"
    document.getElementById("PopUp4").style.alignItems = "center"
}
function fechar(){
    document.getElementById("PopUp4").style.display = "none"
}

// 5
function abrirPopUp3(){
    document.getElementById("PopUp5").style.display = "flex"
    document.getElementById("PopUp5").style.justifyContent = "center"
    document.getElementById("PopUp5").style.alignItems = "center"
}
function resultado(){
    let senhaCerta = "123"
    let senha = document.getElementById("senha1")
    if(senha.value == senhaCerta){
        document.getElementById("PopUp5").style.display = "none"
        document.getElementById("PopUpAcerto").style.display = "flex"
        document.getElementById("PopUpAcerto").style.justifyContent = "center"
        document.getElementById("PopUpAcerto").style.alignItems = "center"
    }else{
        document.getElementById("PopUpErrou").style.display = "flex"
        document.getElementById("PopUpErrou").style.justifyContent = "center"
        document.getElementById("PopUpErrou").style.alignItems = "center"
        function tenteNovamente(){
            document.getElementById("PopUpErrou").style.display = "none"
            senha.value = ""
            abrirPopUp3
        }
    }
}
function fechar1(){
    document.getElementById("PopUpAcerto").style.display = "none"
    senha.value = ""
}