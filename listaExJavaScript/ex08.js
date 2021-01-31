const controlePontos = function (pontos = []){
    count = pontos.length
    let i = 1
    let recorde = []
    while(i<=count){
        if(pontos[i] > pontos[i-1]){
            recorde.push(pontos[i])
        }
    }
    
    //console.log(pontos[0])
}

controlePontos("2 5 4 8 9")