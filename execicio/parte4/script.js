function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML='Impossivel Contar'
        //window.alert('[ERRO] Faltam Dados!')
    } else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if(i<f){
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML  +=  ` ${c}  \u{1F449}`
             }
            }else{
            //CONTGEM DESCRESCENTE
            for(let c = i ; c>= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}` 
    }
}