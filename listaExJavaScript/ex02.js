const classTriang = function (l1, l2, l3) {
    //Equilatero
    if(l1 == l2 && l2 == l3) {
        console.log('O Triangulo e equilatero')
    }else if(l1 == l2 || l1 == l3 || l2 == l3){
        console.log('O Triangulo e Isoscele')
    }else{
        console.log('O triangulo e Escaleno')
    }
}

classTriang(2,2,2)

classTriang(2,3,3)

classTriang(2,3,4)
