function calcular() {
    let val = window.document.getElementById('ival')
    let vl = (val.value)
    let res = window.document.getElementById('resposta')
    if (vl % 2 == 0) {
        res.innerHTML = `O Valor ${vl} <strong> é PAR </strong>`
    } else {
        res.innerHTML = `O Valor ${vl} é
        <strong> ÍMPAR </strong>`
    }
}
