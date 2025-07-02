let val = window.document.getElementById('ival')
let res = window.document.getElementById('resposta')

function calcular() {
    let vl = Number(val.value)
    if (vl % 2 == 0) {
        res.innerHTML = `O Valor ${vl} <strong> é PAR </strong>`
    } else {
        res.innerHTML = `O Valor ${vl} é
        <strong> ÍMPAR </strong>`
    }
}
