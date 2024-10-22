const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 18 * * *', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    tarefa2.cancel()
    console.log('Cancelando tarefa 1!')
    console.log('Cancelando tarefa 2!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18
regra.seconds = 30

const tarefa2 = schedule.scheduleJob(regra, function() { 
    console.log('Executando tarefa 2!', new Date().getSeconds())
})
