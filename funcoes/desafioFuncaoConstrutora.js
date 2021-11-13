function Pessoa(nome = 'João') {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Yuri')
p1.falar()