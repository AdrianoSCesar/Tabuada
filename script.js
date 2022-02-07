function gerar_tabuada() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')
    var n=Number(num.value)
    res.innerHTML = ``
    for (var i=1;i<=10;i++) {
        res.innerHTML += `${n} x ${i} = ${n*i} <br>`
    }
}