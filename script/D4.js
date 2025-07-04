/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let area = l1 * l2;
  return area;
};
console.log(area(2, 15));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    let sommaPazzerella = (n1 + n2) * 3; // n1 * 6 EASY PEASY
    console.log(" WAO, HAI SBLOCCATO L'ACHIEVEMENT SEGRETO");
    return sommaPazzerella;
  } else {
    let sommaPocoPazzerella = n1 + n2;
    return sommaPocoPazzerella;
  }
};
console.log(crazySum(4, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta 
 tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora
  il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  if (n1 < 19) {
    let diffAssoluta = 19 - n1;
    return diffAssoluta;
  } else {
    let diffAssolutaEPazzerella = (n1 - 19) * 3; //ma perchè per tre sempre?  Sarà un numero magico?
    return diffAssolutaEPazzerella;
  }
};
console.log(crazyDiff(23));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(404));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    // oppure si poteva trasformare la stringa in un array di paroline e confrontare il primo elemento...etc
    return stringa;
  } else {
    let stringaEpica = "EPICODE " + stringa;
    return stringaEpica;
  }
};
console.log(epify("Gianfrancioschio"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n > 0) {
    if (n % 3 === 0 || n % 7 === 0) {
      console.log("Il numero fornito è un multiplo di 3 o 7");
    } else {
      console.log(
        "Mi spiaze ma non è un multiplino di 3 o 7! Ritenta sarai piu fortunato.."
      );
    }
  } else {
    console.log(
      "Il numero inserito non è valido, inserisci solo n positivi o maggiori di 0"
    );
  }
};
console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (stringa) {
  let stringaConfusa = stringa.split("").reverse().join("");
  return stringaConfusa;
  //SPIEGAZIONE PASSAGGI
  //   let stringaConfusa = stringa.split("");
  //   stringaConfusa = stringaConfusa.reverse();
  //   stringaNonPiuConfusa = stringaConfusa.join("");
  //   return stringaNonPiuConfusa;
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa 
 formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola
  contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (stringa) {
  const stringaInArray = stringa.split(" ");
  const arr = [];
  for (let i = 0; i < stringaInArray.length; i++) {
    let parola = stringaInArray[i];
    parola = parola.charAt(0).toUpperCase() + parola.slice(1);
    arr.push(parola);
  }
  return arr.join(" ");
  /*return stringa.replace(/\b\w/g, lettera => lettera.toUpperCase()); GRAZIE GOOGLE
  \b è l'inizio di una parola -.- molto più semplice
  \w indica caratteri alfanmerici
  /g agisce su tutta la stringa*/
};
console.log(upperFirst("ciao mondo!"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringa) {
  let nuovaStringa = stringa.slice(1, stringa.length);
  return nuovaStringa;
};
console.log(cutString("Fantasmagorico"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let arrayDiNumeri = [];
  for (let i = 0; i < n; i++) {
    let num = Math.ceil(Math.random() * 10);
    arrayDiNumeri.push(num);
  }
  return arrayDiNumeri;
};
console.log(giveMeRandom(6));
