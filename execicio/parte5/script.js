function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por Favor, Digite um numero')
        
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <=10){
            //criamdo elemento no html via JS
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            
        }
        
    }
        
}