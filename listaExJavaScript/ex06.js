//calcular juros simples

const jurosSimples = function(capIni, i, t){
    return (capIni*i*t)+capIni
}


//calcular juros composto

const jurosComposto = function(capIni, i, t){
    return (capIni * (1 + i) ** t).toFixed(2)
 
}


console.log(jurosSimples(1000, 0.02, 12))
console.log(jurosComposto(1400, 0.07, 2))

