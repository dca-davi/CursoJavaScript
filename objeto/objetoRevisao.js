//Colecao Dinamica de pares Chave/Valor
const produto = new Object
produto.name = 'Cadeira'
produto['marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            lagradouro: 'Rua abc',
            numero: 123
        }
    },
    consutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42 

    }],
    calcularValorSeguro: function(){

    }


}