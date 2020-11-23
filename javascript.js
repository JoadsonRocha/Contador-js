function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pular = document.getElementById('txtp')
    var res = document.getElementById('res')    
    if (ini.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
        window.alert('Falta algum Valor!')
    } else {
        res.innerHTML = 'Contando Aguade... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pular.value)
        if (p <= 0){
            alert('Passo Inválido [considerando passo 1')
            p = 1
        }
        if (i < f){ //conatgem descrecente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { //contagem decrescente
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    }
} 