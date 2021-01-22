// Resto da divisao

const restoDiv = function(div, divisor){
    return{
        resultaldo: div / divisor,
        resto: div % divisor
    }
}

console.log(restoDiv(4, 2))