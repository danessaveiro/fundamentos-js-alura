// declaração de função
/*
function minhaFuncao(param) {
    // bloco de código
}
minhaFuncao("param")
*/

// expressão de função
/*
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))
*/

// diferença principal: HOISTING
// funções e var são listadas ao iniciar o arquivo, por isso as funções podem ser executadas antes de serem declaradas

//funciona
console.log(apresentar())

function apresentar() {
    return "olá"
}

//não funciona
console.log(soma(1, 2))
const soma = function(num1, num2) { return num1 + num2 }