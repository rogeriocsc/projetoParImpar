function calcular() {
    let val = window.document.getElementById('ival')
    let res = window.document.getElementById('resposta')

      // Verifica se o campo está vazio
    if (val.value.trim() === "") {
        alert("Digite um número!")
        val.focus()
        return
    }

    let vl = Number(val.value)
    if (vl % 2 == 0) {
        res.innerHTML = `<p>O Valor ${vl} <strong> é PAR </strong>
        </p>`
    } else {
        res.innerHTML = `<p>O Valor ${vl} é
        <strong> ÍMPAR </strong></p>`
    }
}
