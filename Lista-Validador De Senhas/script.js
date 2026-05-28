let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let resultado = document.getElementById("resultado")

confirmar.addEventListener("input", function(){
    let numeros = /[0-9]/.test(senha.value)
    let minusculo = /[a-z]/.test(senha.value)
    let maiusculo = /[A-Z]/.test(senha.value)
    let especial = /[!@#$%&*]/.test(senha.value)

    let tamanho = senha.value.length >= 12

    if(senha.value == confirmar.value && numeros && maiusculo && minusculo && especial && tamanho){
        resultado.innerText = "As senhas são iguais"
        resultado.classList.add("certo")
        resultado.classList.remove("errado")
    }else{
        resultado.innerText = "A senha precisa ter letra maiuscula e minuscula, números, caracter especial, no minimo 12 caracteres e serem iguais"
        resultado.classList.add("errado")
        resultado.classList.remove("certo")
        let resultadoDiv = document.getElementById("resultadoDiv").style.height = "100px"
    }
})