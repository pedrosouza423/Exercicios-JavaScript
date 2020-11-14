/*
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
Comece criando constantes para armazenar o nome, peso, altura de uma pessoa, por exemplo:
*/

//Dados do usuário
const nome = 'Pedro'
const peso = 80
const altura = 1.88

const imc= peso / (altura*altura)

if(imc >= 30){
    console.log(`${nome} você está acima do peso`)
}else{
    console.log(`${nome} você NÃO está acima do peso`)
    
}
