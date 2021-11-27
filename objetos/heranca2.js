// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não faça isso em casa!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())