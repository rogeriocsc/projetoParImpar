function verificar() {
    let val = window.document.getElementById('i_val')
    let res = window.document.getElementById('resp')

      // Verifica se o campo está vazio
    if (val.value === "") {
        alert("Digite um número!")
        val.focus()
        return
    }

    let vl = Number(val.value)
    if (vl % 2 == 0) {
        res.innerHTML = `<p>
            O Valor ${vl} <strong> é PAR </strong>
        </p>`
    } else {
        res.innerHTML = `<p>
            O Valor ${vl} é
            <strong> ÍMPAR </strong>
        </p>`
    }
}
