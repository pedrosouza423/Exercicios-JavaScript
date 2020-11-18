const usuario = {
    nome: "Pedro",
    transacoes: [],
    saldo: 0
}  

function criartransacao(transacao){
    usuario.transacoes.push(transacao)

    if(transacao.type == 'credito'){
        usuario.saldo += transacao.value
    }else{
        usuario.saldo -= transacao.value
    }
}

criartransacao({ type: "credito", value: 50 })
criartransacao({ type: "credito", value: 120 })
criartransacao({ type: "debito", value: 80 })
criartransacao({ type: "debito", value: 30 })

console.log(usuario.saldo); // 60