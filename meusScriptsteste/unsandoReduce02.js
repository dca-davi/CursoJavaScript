const alunos = [
    {nome: "Pedro", nota: 7.5, bolsista: false},
    {nome: "Joao", nota: 9.2, bolsista: true},
    {nome: "Maria", nota: 6.9, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    return acumulador + atual
})

const nomealuno = a => a.nome
const aBolsista = a => a.bolsista === true

const resultado2 = alunos
.filter(nomealuno)
.filter(aBolsista)

console.log(resultado)
console.log(resultado2)

