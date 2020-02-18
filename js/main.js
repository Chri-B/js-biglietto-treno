// chiedere l'età del passeggero (var=anni);
// chiedere il chilometraggio;
// calcolare il costo dei chilometri (0,21€/km);
// se gli anni <18 allora sconto del 20%;
// se gli anni > 65 allora sconto del 40%, altrimenti prezzo pieno;

var anniPasseggero = prompt('Inserisci la tua età');
var km = prompt('Inserisci i km che vuoi percorrere');

var prezzoPienoBiglietto = km * 0.21; // calcolo il prezzo pieno del biglietto come da riga 3

var prezzoBiglietto20 = ( prezzoPienoBiglietto - ( (prezzoPienoBiglietto / 100) * 20 ) ); // esprimo il valore della variabile tramite calcolo dello sconto 20%
var prezzoBiglietto40 = ( prezzoPienoBiglietto - ( (prezzoPienoBiglietto / 100) * 40 ) ); // esprimo il valore della variabile tramite calcolo dello sconto 40%

// inizio if
if ( anniPasseggero < 18 ) { // insieme dei passeggeri minorenni con sconto 20%
    document.getElementById('costoFinale').innerHTML = prezzoBiglietto20.toFixed(2) + '€';
} else if (anniPasseggero >= 65) { // insieme dei passeggeri over 65 (compreso)
    document.getElementById('costoFinale').innerHTML = prezzoBiglietto40.toFixed(2) + '€';
} else { // insieme dei passeggeri di età tra i 18 (compresi) e i 65anni (esclusi)
    document.getElementById('costoFinale').innerHTML = prezzoPienoBiglietto.toFixed(2) + '€';
}

document.getElementById('comparsa').setAttribute('class','visible'); // rendo visibile il div #comparsa solo dopo la compilazione del prompt
