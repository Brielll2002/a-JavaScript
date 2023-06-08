function carregar(){var msg = document.getElementById('msg')
var img = document.getElementById('manha')
var data = new Date()
var hora = data.getHours()
//var hora = ''
msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora <= 12){img.src = 'manha2.jpeg'
document.body.style.background = '#87cefa'
msg2.innerHTML = 'Bom Dia!'}
else if(hora >= 12 && hora <= 18){img.src = 'tarde2.jpeg'
document.body.style.background = '#f87021'
msg2.innerHTML = 'Boa Tarde!'}
else if(hora > 18){img.src = 'noite2.jpeg'
document.body.style.background = '#110a24'
msg2.innerHTML = 'Boa Noite!'}}

