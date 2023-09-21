function verificar() {
    var pantes = window.prompt('Qual era o preço anterior do produto?')
    var pdepois = window.prompt('Qual é o preço atual do produto?')
    res.innerHTML = `<p>Analisando os valores informados</p>`
    res.innerHTML += `<p>O produto custava ${pantes} reais e agora custa ${pdepois} reais.</p>`
    var pdif = Math.abs(pdepois - pantes)
    //var pvar = 


    if (pantes < pdepois ) {
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${pdif}</p>`
        //res.innerHTML += `<p>Uma variação de ${pvar}</p>`
    } else {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${pdif}</p>`
        //res.innerHTML += `<p>Uma variação de ${pvar}</p>`
    }
}