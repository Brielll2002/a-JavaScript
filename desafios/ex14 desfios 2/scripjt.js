function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value < 1903|| fano.value > ano){window.alert('Verifique os dados e tente novamente.')}
    else {var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        if(fsex[0].checked){genero = 'Homem'
        document.body.style.background = '#87cefa'}
        else if(fsex[1].checked){genero = 'Mulher'
        document.body.style.background = '#f1afba'}
    
    res.innerHTML = `Verificamos. Você é ${genero} e tem ${idade} anos.`}
}
