function tratarErroELancar(e) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'Mensagem'
  throw {
    nome: e.name,
    msg: e.message,
    date: new Date
  }
}

function imprimirNomeGritado(objeto) {
  try {
    console.log(objeto.name.toUpperCase() + '!')
  } catch (error) {
    tratarErroELancar(error)
  } finally {
    console.log('Final')
  }
}

const objeto = { nome: 'Roberto' }
imprimirNomeGritado(objeto)