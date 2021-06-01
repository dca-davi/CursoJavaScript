const pilotos = ['Vetter', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remoce o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//add element with splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remove element with splice
pilotos.splice(3, 1) //remove the element of index 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // create a new array starting index 2
console.log(algunsPilotos1)
