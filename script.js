function calcular(){
    var anoNascimento = document.getElementById('txano')
    var ano = Number(anoNascimento.value)
    var agora = new Date()
    var hoje = agora.getFullYear()
    var res = window.document.getElementById('res')
    var idade = (hoje - ano)
    var def = document.getElementById('def')
    
    if (anoNascimento.value.length == 0){
        window.alert('Preencha o ano de nascimento!')
    }else{
        res.innerHTML = `Você tem ${idade} anos!`
        if(idade < 16){
            res.innerHTML += '<p>Não Vota!</p>'
        } else if(idade <= 17 || idade > 65){
            res.innerHTML += '<p>Voto opcional!</p>'
        } else{
            res.innerHTML += '<p>Voto Obrigatório!</p>'
        }
        
    }
}