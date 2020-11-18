/*
    Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)

    Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
    Ex: Carlos trabalha com HTML, CSS
*/

const usuarios = [
    { nome: "Priscila", tecnologias: ["HTML", "CSS"] },
    { nome: "Pedro", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Julio", tecnologias: ["HTML", "Node.js"] }
  ]

  for(let i in usuarios){
      console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
  }