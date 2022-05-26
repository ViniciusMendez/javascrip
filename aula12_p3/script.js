function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Tente Digitar os valores corretos')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
             genero = 'Homem'
             if(idade >=0 && idade < 10){
                 // CRIANÇA
                 img.setAttribute('src','garoto.jpg')
             } else if (idade< 21){
                //JOVEM
                img.setAttribute('src', 'rapaz.jpg')
             } else if(idade <50){
                 //ADULTO
                 img.setAttribute('src','adulto.jpg')
             } else{
                 //IDOSO
                 img.setAttribute('src', 'velho.jpg')
             }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // CRIANÇA
               img.setAttribute('src', 'garota.jpg') 
            } else if (idade< 21){
               //JOVEM
               img.setAttribute('src', 'jovam.jpg')
            } else if(idade <50){
                //ADULTO
                img.setAttribute('src', 'adulta.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}