function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' /* limpa o conteúdo antes */
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` 
            /* A linha acima dá um value para cada option 
            (linha da tabuada) do Select
            Importante para linguagens como o php (backend) */
            tab.appendChild(item)
            c++
        }
    }
}