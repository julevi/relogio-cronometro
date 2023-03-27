var hora = window.document.getElementById('horas')
var minuto = window.document.getElementById('minutos')
var segundo = window.document.getElementById('segundos')

const relogio = setInterval(function time(){
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    hora.innerHTML = `${hour}`
    minuto.innerHTML = `${minute}`
    segundo.innerHTML = `${second}`

    if(hour<10){
        horas.innerHTML =  `0${hour}`
    }
    if(minute<10){
        minuto.innerHTML =  `0${minute}`
    }
    if(second<10){
        segundo.innerHTML =  `0${second}`
    }
})
