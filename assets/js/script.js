console.log("calculando orçamento")

document.querySelector("#QtdDados").addEventListener("change", CalcularOrcamento)
document.querySelector("#SN").addEventListener("change", CalcularOrcamento)
document.querySelector("#AutoGerido").addEventListener("change", CalcularOrcamento)
document.querySelector("#Serverless").addEventListener("change", CalcularOrcamento)
document.querySelector("#Ctrl3").addEventListener("change", CalcularOrcamento)
document.querySelector("#prazo").addEventListener("change", CalcularOrcamento)


function CalcularOrcamento(){
    
    let preco = QtdDados.value*0.50
    
    if (SH.checked)  preco*=1.1

    if(AutoGerido.checked) preco*=0.8
    if(Serverless.checked) preco+=400
    if(Ctrl3.checked) outuput.innerHTML="R$"+preco.toFixed(2)+" + R$50.00 Mensais"

    let prazo = document.querySelector("#prazo").value
    preco+=preco*(1.1 - prazo*0.1)
    label_prazo.innerhtml="Prazo ("+prazo+"semanas)"

    output.innerHTML ="R$"+preco.toFixed(2)

}