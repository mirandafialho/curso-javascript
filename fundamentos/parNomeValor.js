// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Fala' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 31,
  peso: 80,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)