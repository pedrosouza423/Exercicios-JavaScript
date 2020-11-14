/*
    Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
    Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

    Imprima em tela o nome e especialidade da PRIMEIRA tecnologia que o usuário utiliza no seguinte formato:
    O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
*/

const programador = {
    nome: 'Pedro',
    idade: 18,
    tecnologias: [
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'C++', especialidade: 'Desktop' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)