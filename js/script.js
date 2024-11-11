function calcular() {
    let val = window.document.getElementById('val')
    let vl = (val.value)
    let res = window.document.getElementById('resp')
    if (vl % 2 == 0) {
        res.innerHTML = `O Valor ${vl} <strong> é PAR </strong>`
    } else {
        res.innerHTML = `O Valor ${vl} é
        <strong> ÍMPAR </strong>`
    }
}
