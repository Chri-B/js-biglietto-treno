// chiedere l'età del passeggero (var=anni);
// chiedere il chilometraggio;
// calcolare il costo dei chilometri (0,21€/km);
// se gli anni <18 allora sconto del 20%;
// se gli anni > 65 allora sconto del 40%, altrimenti prezzo pieno;

var anniPasseggero = prompt('Inserisci la tua età');
var km = prompt('Inserisci i km che vuoi percorrere');

var prezzoPienoBiglietto = km * 0.21; // calcolo il prezzo pieno del biglietto come da riga 3

var prezzoBiglietto20 = ( prezzoPienoBiglietto - ( (prezzoPienoBiglietto / 100) * 20 ) );
var prezzoBiglietto40 = ( prezzoPienoBiglietto - ( (prezzoPienoBiglietto / 100) * 40 ) );

if ( anniPasseggero < 18 ) {
    document.getElementById('costoFinale').innerHTML = prezzoBiglietto20;
} else if (anniPasseggero > 65) {
    document.getElementById('costoFinale').innerHTML = prezzoBiglietto40;
} else {
    document.getElementById('costoFinale').innerHTML = prezzoPienoBiglietto;
}

console.log(prezzoPienoBiglietto);
console.log(prezzoBiglietto20);
console.log(prezzoBiglietto40);
