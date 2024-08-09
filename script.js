const res=document.querySelector("#res")
const btn=document.getElementById("btn_verificar")

function parImpar(val) {
    if (val % 2 == 0) {
        return "PAR"
    } else {
        return "ÍMPAR"
    }  
}

btn.addEventListener("click",(el)=>{ 
    const num=document.querySelector("#numer").value
    const valor=parImpar(num)
    res.innerHTML=`O número ${num} é um valor <strong>${valor}</strong>`   
})