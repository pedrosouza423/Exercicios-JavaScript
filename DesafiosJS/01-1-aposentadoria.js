/*
Crie um programa para calcular a aposentadoria de uma pessoa.
Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
*/

const nome = 'Pedro'
const sexo = 'M'
const idade = 50
const constribuicao = 35

if(sexo=='M' && constribuicao >=35 || sexo=='F' && constribuicao >=30 ){
    if(sexo=='M' && idade+constribuicao >= 95 || sexo=='F' && idade+constribuicao >= 85){
        console.log(`${nome}, você já pode se aposentar`)
    }else{
        console.log(`${nome}, você jainda não pode se aposentar`)
    }
}else{
    console.log(`${nome}, você ainda não pode se aposentar`)

}