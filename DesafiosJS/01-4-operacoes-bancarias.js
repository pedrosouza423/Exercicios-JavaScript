const usuario = {
    nome: "Pedro",
    transacoes: [],
    saldo: 0
}  

//Adicionar transações
function criartransacao(transacao){
    usuario.transacoes.push(transacao)

    if(transacao.type == 'credito'){
        usuario.saldo += transacao.value
    }else{
        usuario.saldo -= transacao.value
    }
}

//Relatórios

//Maior transação por tipo
function obterMaiorTransacao (type) {
    let maiorValor = 0

    for(let transacoes of usuario.transacoes){
        if((transacoes.type === type) && transacoes.value > maiorValor) {
            maiorValor = transacoes.value
        }
    }

    console.log(maiorValor)
}

//Média de transações independente de tipo
function valorMedioTransacao(usuario){
    let media = 0

    for(let transacoes of usuario.transacoes){
        media += transacoes.value
    }

    media /= usuario.transacoes.length

    console.log(media)
}

function contagemDeTransacao(usuario){
    let contagem = {credito: 0, debito:0}

    for(let transacoes of usuario.transacoes){
        if(transacoes.type === 'credito') {
            contagem.credito++
        }else{
            contagem.debito++
        }
    }
    console.log(contagem)
}

criartransacao({ type: "credito", value: 50 })
criartransacao({ type: "credito", value: 120 })
criartransacao({ type: "debito", value: 80 })
criartransacao({ type: "debito", value: 30 })

console.log(usuario.saldo); // 60

obterMaiorTransacao('credito')
obterMaiorTransacao('debito')

valorMedioTransacao(usuario)

contagemDeTransacao(usuario)