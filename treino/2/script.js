
//res.innerHTML = ''

function parimpar(n){ if (n%2==0) {return 'par'}
                    else {return 'impar'}}



var x = document.getElementById('x')




function verificar(){var r = parimpar(Number(x.value))
var z = Number(x.value)
res.innerHTML = `O número ${z} é ${r}`
x.value = ''//para limpar depois de verificar
x.focus()//para deixar o foco no input, no site
}