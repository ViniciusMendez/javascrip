let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isnumero(n ){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return  false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert('valor invalido ou ja encontrado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione Valores Antes de Finalizar')
    }else{
        let tot = valores.length
       
        res.innerHTML = ''
        res.innerHTML += ` Ao todo temos ${tot} Numeros Cadastrados `

    }
}