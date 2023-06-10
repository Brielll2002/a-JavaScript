function verificar(){

    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var res = document.getElementById('res')

    var nm1 = Number(n1.value)
    var nm2 = Number(n2.value)
    var nm3 = Number(n3.value)
    var v = nm1

    res.innerHTML = ''
    /*para limpar antes que mostrar o próximo caulculo*/

    while(v < nm2){v= v + nm3
    res.innerHTML += ` > ${v}`}
}