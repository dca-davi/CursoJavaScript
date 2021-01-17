//Funcao de forma literal

function fun1() {

}

//Armazenar Funcao em uma variavel

const fun2 = function() {

}

//Armazenar Funcao dentro de uma arry

const array = [function (a, b) {return a + b}]

console.log(array[0](2,3))

//Armazenando funcao como um atributo de obj

const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar funcao como param

function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

//Um funcao pode retornar/conter um funcao

function soma(a, b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(5)