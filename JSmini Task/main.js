var button_saugoti = document.getElementById('Saugoti')
var button_lenktyniauti = document.getElementById('lenktyniauti')
var duomenys = document.getElementById('Duomenys')
var lenktynes = document.getElementById('varzybos')

function Automobilis(automobilis, greitis_kmh) {
    this.Automobilio_pavadinimas = automobilis;
    this.Greitis = greitis_kmh
}

button_saugoti.addEventListener('click', function () {
    var auto_pavadinimas = document.getElementById('auto_pavadinimas').value
    var greitis = document.getElementById('greitis').value
    var dalyvis = new Automobilis(auto_pavadinimas, greitis)
    console.log(dalyvis)
    duomenys.innerHTML += '<tr><td>' + auto_pavadinimas + '</td><td>' + greitis + '</td></tr>'
    document.getElementById('greitis').value = ""
    document.getElementById('auto_pavadinimas').value = ""
})

button_lenktyniauti.addEventListener('click', function () {
    var laikas = document.getElementById('laikas').value
    var atstumai = []
    for (i = 0; i < duomenys.rows.length; i++) {
        var greitis_ = duomenys.rows[i].querySelectorAll('td')[1].innerHTML
        var lenktyninkas = duomenys.rows[i].querySelectorAll('td')[0].innerHTML
        var atstumas = greitis_ * laikas
        atstumai.push(atstumas)
        lenktynes.innerHTML += '<tr><td>' + lenktyninkas + '</td><td>' + atstumas + '</td></tr>'
        document.getElementById('laikas').value = ""
    }
    var max = Math.max(...atstumai)
    console.log(max)
    for (i = 0; i < atstumai.length; i++)
        if (atstumai[i] === max) {
            lenktynes.rows[i].style.backgroundColor = 'red'
        }
})