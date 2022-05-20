function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem') 
   var data = new Date()
   //var hora = data.getHours()
   var hora = 12
   msg.innerHTML = `Agora são ${hora} horas.`

   if(hora>=0 && hora <12 ){
       //bom dia
       img.src = "imagens/manha.jpg"
   }else if(hora>= 12 && hora<18){
       //boa tarde
       img.src ="imagens/tarde.jpg"
   }else{
       //boa noitei
       img.src = "imagens/noite.jpg"
   }
}
