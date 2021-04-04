console.log(Math.ceil(6.1))

const objeto = {}
objeto.nome = 'Bola'
// objeto['nome'] = 'Rede'

function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log('Exec...')
  }
}

const objeto2 = new Obj('Cadeira')
const objeto3 = new Obj('Mesa')

console.log(objeto2)
console.log(objeto3)
objeto3.exec()