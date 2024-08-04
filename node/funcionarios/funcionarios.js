const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url)
    .then(response => {
        const funcionarios = response.data

        const funcionariasChinesas = funcionarios.filter(funcionario => {
            return funcionario.pais === 'China' && funcionario.genero === 'F'
        })

        const funcionariaComMenorSalario = funcionariasChinesas.reduce((func1, func2) => {
            return func1.salario < func2.salario ? func1 : func2
        })

        console.log("Funcionaria com menor salario: ", funcionariaComMenorSalario)
    })
    .catch(err => {
        console.error(err)
    })
