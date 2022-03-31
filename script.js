
function carregar() {
var msg = window.document.getElementById('msg')
var sds = window.document.getElementById ('saudação')
var img = window.document.getElementById('imagem')
var data = new Date()

var hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas!!`
if (hora >=0 && hora < 12) {
    img.src = 'modelo/dia.png'
    document.body.style.background = '#BFDAE7'
    sds.innerHTML = `Bom dia!!`

}else if ( hora >= 12 && hora < 18) {
    //Boa Tarde!!
    img.src = 'modelo/tarde.png'
    document.body.style.background = '#FCD668'
    sds.innerHTML = `Boa Tarde!!`            

}else {
    
    img.src = 'modelo/noite.png'
   document.body.style.background = '#2A4678'
   sds.innerHTML = `Boa Noite!!`            
}
}