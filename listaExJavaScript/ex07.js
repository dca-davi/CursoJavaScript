//Formula de Bhaskara

const Bhaskara = function (a, b, c){

    let delta = b**2 - 4*a*c
    let x1 = (-b + Math.sqrt(delta)) / (2*a)
    let x2 = (-b - Math.sqrt(delta)) / (2*a)

    return {
        valorDelta: delta,
        coeficiente1: x1,
        coeficiente2: x2
    }

}

console.log(Bhaskara(3, -15, 12))