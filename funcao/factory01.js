// Factory simple

// function criarPessoa(){
//     return {
//         nome: 'Ana',
//         sobrenome: 'Silva'
//     }
// }

//Meu Code

function criarProduto(nome, valor){
    return {
        nomeProduto: nome,
        valorProduto: valor
    }
}

console.log(criarProduto('Caneta', 1.5))

console.log(criarProduto('Lapis', 2.5))

