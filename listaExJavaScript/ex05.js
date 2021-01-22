//trabalhando com casa Decimais

const simplifica = function(valor){
    return valor.toFixed(2)
}

console.log(`R$ ${simplifica(0.30000000000000004).replace(".", ",")}`)