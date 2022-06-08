//let num = [2,3,5,4,7]
//num.push(9)
//num.sort
//console.log(`Nosso vetor é o ${num}`)
//console.log(num[0])

let valores =[8,5,6,3,4,1]

//for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}

for(let pos in valores){
    console.log(`A posição ${pos} tem o vaalor ${valores[pos]}`)
}

// num.indexOf() busca a posição baseado no valor e e não ouver valor ele retorna ZERO