// Novo recurso do ES2015
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const objeto = { max: 50, min: 40 }
console.log(rand(objeto))
console.log(rand({ min: 955 }))
console.log(rand({}))
console.log(rand())