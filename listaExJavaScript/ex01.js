function soma(num1, num2) {
    return{
        soma: num1 + num2,
        sub: num1 - num2,
        mul: num1 * num2,
        div: num1/num2
    }
}

console.log(soma(4, 4))