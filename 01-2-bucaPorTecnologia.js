/*
    Baseado no desafio anterior, utilize a mesma lista de usuários construída.

    Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
*/

const usuarios = [
    { nome: "Priscila", tecnologias: ["HTML", "CSS"] },
    { nome: "Pedro", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Julio", tecnologias: ["HTML", "Node.js"] }
  ]

//EXERCÍCIO ANTERIOR
// for(let i in usuarios){
//       console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

  function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    let verificarCSS = false
    for(let i in usuario.tecnologias){
        if(usuario.tecnologias[i] == 'CSS')
        verificarCSS = true
    }

    return verificarCSS
  }

  for (let i in usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }