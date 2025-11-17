//1) chiedete all'utente il nome e fategli gli auguri di compleanno
//2) chiedete all'utente la base e l'esponente e calcolate la potenza
//3) chiedete all'utente un numero e ditegli se è pari o dispari (operatore modulo)
//4) fate inserire all'utente l'età e se è maggiore o uguale a 18 rispondete "puoi entrare"
//5) fate inserire all'utente una stringa e convertitela in maiuscolo (cercare su internet)

// 1) ////////////////////////////////////////
// const firstName = prompt("Come ti chiami?");
// alert("Tanti Auguri a "+firstName);


// 2) ////////////////////////////////////////
// const numberOne = prompt("Dammi la base della potenza");
// const numberTwo = prompt("Dammi l'esponente");

// const n1Converted = Number(numberOne);
// const n2Converted = Number(numberTwo);

// const result = n1Converted**n2Converted;

// alert("Il risultato è: "+result)

// 3) /////////////////////////////////////////

// const numb = prompt("dammi un numero");

// const numbConverted = Number(numb);

// const isEven = numbConverted % 2 === 0;

// if (isEven) {
//     alert("pari")
// } else {
//     alert("dispari")
// }


// 4) /////////////////////////////////////////

// const age = prompt("dammi l'eta")

// const ageConverted = Number(age);

// const isAdult = ageConverted >= 18;

// if (isAdult) {
//     alert("puoi entrare")
// }

// 5) /////////////////////////////////////////

// let word= prompt("insert stirngs of words");
// let wordUperCase = word.toUpperCase();
// // let wordUperCase = word.toLocaleUpperCase;

// alert(wordUperCase);


// 6) fai un ciclo for che stampi il quadrato dei numeri da 1 a 100

// for (let i = 1; i <= 100; i++) {
//     const square = i ** 2;
//     console.log(square);

// }

//7) fai un ciclo che per i numeri da 1 a 100 stampi pari se il numero è pari e dispari se il numero è dispari

// for (let i = 1; i < 101; i++) {

//     if (i % 2 === 0) {
//         console.log("pari");


//     } else {
//         console.log("dispari");
//     }

// }

// 8) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// for (let i = 1; i <= 100; i++) {

//     if (i % 7 === 0) {
//         console.log(i + '*');
//     } else {
//         console.log(i);
//     }

// }

// 9) usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (let i = 1; i <= 100 ; i++) {

//     let squareRoot = Math.sqrt(i);

//     if (Number.isInteger(squareRoot)) {
//         console.log(i + "*");
//     } else {
//         console.log(i);
//     }

// }

// 10) chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0


// let userResponse = prompt('Dammi un numero positivo?');

// let userNumber = Number(userResponse);

// for (let i = userNumber; i >= 0; i--) {

//     console.log(i);

// }


// 11) chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// const number1 = prompt('inserisci il primo numero?');
// const convertedNumber1 = Number(number1);

// const number2 = prompt('inserisci il secondo numero?');
// const convertedNumber2 = Number(number2);

// for (let i = convertedNumber1; i <= convertedNumber2; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 12) chiedi all'utente quanti anni ha e digli quante ore ha gia' vissuto

// let age = Number(prompt('Quanti anni hai?'));

// const hours = age * 365 * 24;

// console.log('Hai gia sprecato ' + hours + ' ore');

// 13) Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


// let line = '#';

// for (let i = 0; i < 7; i++) {

//     console.log(line);

//     line = line + '#';

// }

//14) Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0){
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 5 === 0){
//         console.log('buzz');
//     } else if (i % 3 === 0){
//         console.log('fizz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0){
//         console.log('buzz');
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log('fizzbuzz');
//     } else {
//         console.log(i);
//     }

// }

// for (let i = 1; i <= 100; i++) {

//     let response = '';

//     if (i % 3 === 0) {
//         response = response + 'fizz';
//     }
//     if (i % 5 === 0) {
//         response = response + 'buzz';
//     }
//     if (response === '') {
//         console.log(i);
//     } else {
//         console.log(response);
//     }

// }



// 1 : 3 = 0 -> r: 1 -> 1 % 3 = 1
// 2 : 3 = 0 -> r: 2 -> 2 % 3 = 2
// 3 : 3 = 1 -> r: 0 -> 3 % 3 = 0
// ---
// 5 : 3 = 1 -> r: 2 -> 5 % 3 = 2
// ---
// 27 : 3 = 9 -> r: 0 -> 27 % 3 = 0


// 15) Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(' # # # #');
//     } else {
//         console.log('# # # # ');
//     }
// }


// let chessboard = '';

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         chessboard = chessboard + ' # # # #\n';
//     } else {
//         chessboard = chessboard + '# # # # \n';
//     }
// }

// console.log(chessboard);

// let size = 18;

// let chessboard = '';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//         if (line % 2 === 0) {
//             if (column % 2 === 0) {
//                 chessboard = chessboard + ' ';
//             } else {
//                 chessboard = chessboard + '#';
//             }
//         } else {
//             if (column % 2 === 0) {
//                 chessboard = chessboard + '#';
//             } else {
//                 chessboard = chessboard + ' ';
//             }
//         }
//     }
//     chessboard = chessboard + '\n';
// }

// console.log(chessboard)


// let size = 50;

// let chessboard = '';

// for (let line = 0; line < size; line++) {
//     for (let column = 0; column < size; column++) {
//         if ((line + column) % 2 === 0) {
//             chessboard = chessboard + ' ';
//         } else {
//             chessboard = chessboard + '#';
//         }
//     }
//     chessboard = chessboard + '\n';
// }

// console.log(chessboard)


// 16) Scrivere una funzione che mi dice se un numero è pari;

// function checkEven(inputNumber) {

//     const isEven = inputNumber % 2 === 0;

//     return isEven;
// }

// const checkEvenLambda = inputNumber => inputNumber % 2 === 0;

// const res1 = checkEven(22);
// console.log(res1);
// const res2 = checkEven(21);
// console.log(res2);

// const res3 = checkEvenLambda(221);
// console.log(res3);
// const res4 = checkEvenLambda(212);
// console.log(res4);

// 17) scrivere una funzione che moltiplichi una stringa per un numero
// es: se inserisco 'cacca' e 3, l'output sarà 'caccacaccacacca'

// function multiplyString(inputString, multiplier){

//     let multipliedString = '';

//     for (let i = 0; i < multiplier; i++) {

//         //multipliedString = multipliedString + inputString;
//         multipliedString += inputString;

//     }

//     return multipliedString;

// }

// const multiplyStringLambda = (inputString, multiplier) => inputString.repeat(multiplier);


// const res5 = multiplyString('pippo', 3)

// console.log(res5)

// const res6 = multiplyString('cacca', 100)

// console.log(res6)

// const res7 = multiplyStringLambda('basta', 5)

// console.log(res7)

// const res8 = multiplyStringLambda('incubo', 10)

// console.log(res8)

// 18) Scrivi una funzione che dato un numero mi dice se è intero oppure no

// function checkInteger(n) {

//     const isInteger = n % 1 === 0

//     return isInteger;

// }

// const checkIntegerLambda = n => n % 1 === 0;


// const res9 = checkInteger(3);

// console.log(res9);

// const res10 = checkInteger(3.14);

// console.log(res10);

// const res11 = checkInteger(30);

// console.log(res11);

// const res12 = checkInteger(0.5);

// console.log(res12);

// 19) Scrivere una funzione che dati in input due numeri ritorni il maggiore;

// function findGreaterNumber(n1, n2) {

//     // let choosenNumber;

//     // if( n1 < n2 ){
//     //     choosenNumber = n2;
//     // } else {
//     //     choosenNumber = n1;
//     // }

//     // return choosenNumber;

//     if (n1 < n2) {
//         return n2;
//     } else {
//         return n1;
//     }

// }


// console.log(findGreaterNumber(30, 31))

// const first = 50;
// const second = 100;

// const greater = findGreaterNumber(first, second);

// console.log(greater);

// const findGreaterNumberLambda = (n1, n2) => {
//     if (n1 < n2) {
//         return n2;
//     } else {
//         return n1;
//     }
// }

// const findGreaterNumberLambdaShort = (n1, n2) => n1 < n2 ? n2 : n1;

// function findGreaterNumberShort(n1, n2) {
//     return n1 < n2 ? n2 : n1;
// }

// 20) Scrivere una funzione che date in input due stringhe ritorni la più corta;

// function findShortestString(s1, s2){

//     if(s1.length < s2.length){
//         return s1;
//     } else {
//         return s2;
//     }

// }

// console.log(findShortestString('ciao mamma!', 'ciao nonnina!!'))


// 21) Scrivere una funzione che data in input una stringa ritorni la sua iniziale;

// function findFirstChar(str) {
//     // return str.charAt(0);
//     return str[0];
// }

// const findFirstCharLambda = str => str[0];

// console.log(findFirstChar('leaonardo'));

// 22) scrivere una funzione che dati in input una stringa e un numero,
// logghi la stringa tante volte quante il numereo dato;

// function stringMultiLogger(str, times) {

//     for (let i = 0; i < times; i++) {

//         console.log(str);

//     }

// }

// const stringMultiLoggerLambda = (str, times) => {

//     for (let i = 0; i < times; i++) {
//         console.log(str);
//     }

// }

// const result = stringMultiLogger('leonardo', 30);

// console.log(result)


//23) You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.


// function countBs(str) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase()

//         if (lowerChar === 'b') {
//             counter++
//         }

//     }

//     return counter;
// }

// console.log(countBs('babbeo')) //->3
// console.log(countBs('leonardo')) //->0
// console.log(countBs('BAMBINO')) //->2

// function countChar(str, char) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];

//         const selectedLower = selectedChar.toLowerCase();
//         const charLower = char.toLowerCase();

//         if (selectedLower === charLower) {
//             counter++
//         }

//     }

//     return counter;

// }

// console.log(countChar('mammamia', 'm')) //->4
// console.log(countChar('mammamia', 'i')) //->1
// console.log(countChar('leonardo', 'L')) //->1


// function countCharSensitive(str, char, isSensitive) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         let selectedChar = str[i];

//         if (!isSensitive) {
//             selectedChar = selectedChar.toLowerCase();
//             char = char.toLowerCase()
//         }

//         if (selectedChar === char) {
//             counter++
//         }

//     }

//     return counter;

// }

// console.log(countCharSensitive('leonardo', 'L', false)) //->1
// console.log(countCharSensitive('leonardo', 'L', true)) //->0


//24) Inversione di un numero
//Scrivi una funzione invertiNumero che prenda un numero come parametro e restituisca il numero con le cifre invertite (es. 123 → 321).

// function reverseNumber(nbr) {

//     const nbrToString = String(nbr);

//     let reversed = '';

//     for (let i = nbrToString.length - 1 ; i >= 0 ; i--) {

//         const char = nbrToString[i];
//         reversed += char;

//     }

//     const reversedToNumber = Number(reversed);
//     return reversedToNumber;
// }

// console.log(reverseNumber(123345))

//25) Tabellina
//Scrivi una funzione tabellina che prenda un numero come parametro e stampi in console la tabellina di quel numero fino a 10.

// function tabellina(nbr){
//     console.log(nbr * 1);
//     console.log(nbr * 2);
//     console.log(nbr * 3);
//     console.log(nbr * 4);
//     console.log(nbr * 5);
//     console.log(nbr * 6);
//     console.log(nbr * 7);
//     console.log(nbr * 8);
//     console.log(nbr * 9);
//     console.log(nbr * 10);
// }

// tabellina(3);
// tabellina(10);

// function tabellinaEvolution(nbr){
//     for (let i = 1; i < 11; i++) {
//         const result = nbr * i;
//         console.log(result);
//     }
// }

// tabellinaEvolution(3);
// tabellinaEvolution(10);

// function tabellinaString(nbr){

//     let tabellinaStr = '';

//     for (let i = 1; i < 11; i++) {
//         const result = nbr * i;
//         tabellinaStr += result;
//         tabellinaStr += ' ';
//     }

//     return tabellinaStr;
// }

// for (let i = 1; i < 11; i++) {
//     console.log(tabellinaString(i))
// }

//26) Fibonacci
//Scrivi una funzione fibonacci che prenda un numero N come parametro e restituisca l’N-esimo numero della sequenza di Fibonacci.

// function fibo(pos) {

//     let first = 0;
//     let second = 1;

//     if (pos === 1) {
//         return first;
//     } else if (pos === 2){
//         return second;
//     } else if (pos > 2) {
//         let fib;
//         for (let i = 3; i <= pos; i++) {
//             fib = first + second;
//             first = second;
//             second = fib;
//         }
//         return fib;
//     } else {
//         console.log('ERRRRRORE!!')
//     }

// }

// console.log(fibo(7));

// function fiboRecursive(pos) {

//     if (pos === 0) {
//         return 0;
//     } else if (pos === 1){
//         return 1;
//     } else {
//         return fiboRecursive(pos - 1) + fiboRecursive(pos - 2);
//     }

// }

//27)  Conteggio vocali
//Scrivi una funzione contaVocali che prenda una stringa come parametro e restituisca il numero di vocali presenti.

// function countVowels(str) {

//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {

//         const selectedChar = str[i];
//         const lowerChar = selectedChar.toLowerCase()

//         if (lowerChar === 'a'
//             || lowerChar === 'e'
//             || lowerChar === 'i'
//             || lowerChar === 'o'
//             || lowerChar === 'u') {
//             counter++
//         }

//     }

//     return counter;
// }

// console.log(countVowels('aiuola'))

//28) Sconto
//Scrivi una funzione applicaSconto che prenda due numeri come parametri (prezzo e percentuale di sconto) e restituisca il prezzo scontato.

// function applySale(price, salePercent) {

//     const sale = price / 100 * salePercent;
//     const priceWithSale = price - sale;

//     return priceWithSale;

// }

// console.log(applySale(100, 20));

//29) Conversione gradi
//Scrivi una funzione convertiGradi che prenda un numero come parametro (gradi Celsius) e restituisca la conversione in Fahrenheit

// function celsiusToFahrenheit(c){

//     const f = (c * (9 / 5)) + 32;
//     return f;
// }

// console.log(celsiusToFahrenheit(30));

//30) Verifica password
//Scrivi una funzione verificaPassword che prenda una stringa e restituisca true se:
// - Ha almeno 8 caratteri
// - Contiene almeno una lettera maiuscola
// - Contiene almeno un carattere speciale tra questi '!#@$%'
// - Non contiene la parola 'cacca'

// function hasSpecialCharacters(str){
//     if (str.includes("!")
//         || str.includes('#')
//         || str.includes('@')
//         || str.includes('$')
//         || str.includes('%')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsUppercaseChar(str){
//     if (str.toLowerCase() === str) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function isTooShort(str){
//     if(str.length < 8){
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsCacca(str){
//     if(str.includes('cacca')){
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkPassword(password) {
//     // if(password.length < 8){
//     //     return false;
//     // } else {
//     //     if(password.toLowerCase() === password){
//     //         return false;
//     //     } else {
//     //         if (password.includes("!")
//     //         || password.includes('#')
//     //         || password.includes('@')
//     //         || password.includes('$')
//     //         || password.includes('%')) {
//     //             if (password.includes('cacca')) {
//     //                 return false;
//     //             } else {
//     //                 return true;
//     //             }
//     //         } else {
//     //             return false;
//     //         }
//     //     }
//     // }


//     if (isTooShort(password)) {
//         return false;
//     } else if (!containsUppercaseChar(password)){
//         return false;
//     } else if (!hasSpecialCharacters(password)){
//         return false;
//     } else if (containsCacca(password)) {
//         return false;
//     } else {
//         return true;
//     }



// }


// console.log(checkPassword('caccacaccacacca'));
// console.log(checkPassword('Leonardo!'));

// 31) Somma dei numeri fino a n
// Scrivi una funzione sommaFinoAN(n) che restituisce la somma dei numeri da 1 a n.
// sommaFinoAN(5) -> 1 + 2 + 3 + 4 + 5 -> 15

// function sommaFinoAN(nbr){

//     let sum = 0

//     for (let i = 1; i <= nbr; i++) {
//         sum = sum + i;
//     }

//     return sum;
// }

// console.log(sommaFinoAN(5))
// console.log(sommaFinoAN(50))

// 32) Conteggio cifre
// Scrivi una funzione contaCifre(num) che restituisce il numero di cifre di un numero


// function contaCifre(nbr){

//     let nbrToString = String(nbr);
//            // '1245'
//     let length = nbrToString.length;
//            // 4
//     return length;
// }

// console.log(contaCifre(5))// -> 1
// console.log(contaCifre(1245))// -> 4


// 33) Somma delle cifre
// Scrivi una funzione sommaCifre(num) che restituisce la somma delle cifre di un numero
// sommaCifre(5) -> 5
// sommaCifre(1245) -> 12

// function sommaCifre(nbr){
//                   //1245
//     //debugger;

//     let nbrToString = String(nbr);
//         //'1245'

//     let sum = 0

//     for (let i = 0; i < nbrToString.length; i++) {
//                             //4

//         const nChar = nbrToString[i];
//             //'5'                //3

//         const n = Number(nChar);
//             //5

//         sum = sum + n;
//         //12   //7 //5
//     }

//     return sum;
//           //12
// }

// console.log(sommaCifre(1245));

// 34) Conversione valuta
// Scrivi una funzione euroToDollaro(euro) che converte un importo in euro in dollari (1 euro = 1.15 dollari).

// function euroToDollaro(euro) {

//     const dollaro = euro * 1.15;

//     return dollaro;
// }

// console.log(euroToDollaro(5));


// 35) Calcolo area rettangolo
// Scrivi una funzione areaRettangolo(base, altezza) che restituisce l’area di un rettangolo.

// function areaRettangolo(base, altezza){

//     const area = base * altezza;

//     return area;

// }

// console.log(areaRettangolo(5, 20));

// 36) Calcolo media
// Scrivi una funzione media(a, b, c) che restituisce la media di tre numeri.

// function media(a, b, c){

//     const sum = a + b + c;

//     const mean = sum / 3;

//     return mean;
// }

// console.log(media(5, 20, 11));

// 37) Generatore di password casuale
// Scrivi una funzione generaPasswordCasuale() che restituisce una password di 8 caratteri usando solo lettere maiuscole e numeri (usa Math.random())

// function generaPasswordCasuale() {

//     const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789';
//                                //012345678..
//     let password = '';

//     for (let i = 0; i < 8; i++) {

//         const numeroRandomico = Math.random();

//         const position = numeroRandomico * (availableCharacters.length - 1);

//         const roundedPosition = Math.round(position);

//         password = password + availableCharacters[roundedPosition];

//     }

//     return password;
// }

// console.log(generaPasswordCasuale())

// 38) Potenza con ciclo
// Scrivi una funzione potenzaCiclo(base, esponente) che calcola la potenza usando un ciclo.
// function potenzaCiclo(base, esponente) {

//     if (esponente === 0) {
//         return 1;
//     }

//     // let pow = 1;

//     // for (let i = 0; i < esponente; i++) {

//     //     pow = pow * base;

//     // }

//     // return pow;

//     let pow = base;

//     for (let i = 1; i < esponente; i++) {

//         pow = pow * base;

//     }

//     return pow;
// }

// console.log(potenzaCiclo(2, 5))

// 39) Scrivi un validatore di email con queste regole:
// -deve contenere una @
// -deve contenere un punto posizionato dopo la @
// -le parti di testo prima della @ e tra la @ e il punto devono almeno avere tre lettere
// -il punto non può essere l'ultimo carattere

// function constainsAt(email) {
//     if(email.includes('@')){
//         return true;
//     } else {
//         return false;
//     }
// }

// function containsDotAfterAt(email) {
//     const dotPosition = email.indexOf('.');
//     if (dotPosition === -1) {
//         return false;
//     }
//     const atPosition = email.indexOf('@');
//     if (dotPosition > atPosition) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function firstAndSecondPartlengthIsThreeOrMore(email) {

//     const atPosition = email.indexOf('@');
//     const firstPart = email.substring(0, atPosition);

//     const dotPosition = email.indexOf('.');
//     const secondPart = email.substring(atPosition + 1, dotPosition);

//     if (firstPart.length >= 3 && secondPart.length >=3) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function lastCharMustBeDifferentFromDot(email) {
//     const lastPosition = email.length - 1;
//     const lastChar = email[lastPosition];

//     if (lastChar === '.') {
//         return false;
//     } else {
//         return true;
//     }
// }

// function emailValidator(email) {
//     if (!constainsAt(email)) {
//         return false
//     } else if (!containsDotAfterAt(email)){
//         return false
//     } else if (!firstAndSecondPartlengthIsThreeOrMore(email)){
//         return false
//     } else if (!lastCharMustBeDifferentFromDot(email)){
//         return false
//     } else {
//         return true;
//     }
// }



// console.log(emailValidator('ciaociao'))
// console.log(emailValidator('ciao@ciao'))
// console.log(emailValidator('ci.ao@ciao'))
// console.log(emailValidator('ciao@ciao.'))
// console.log(emailValidator('ciao@cia.o'))


// 40) crea un converitore tra italiano e farfallino(https://it.wikipedia.org/wiki/Alfabeto_farfallino)

// function farfallinoTranslator(str) {

//     const vowels = 'aeiou';

//     let farfallinoStr = '';

//     for (let i = 0; i < str.length; i++) {

//         const char = str[i]

//         if (vowels.includes(char.toLowerCase())) {
//             farfallinoStr = farfallinoStr + char + 'f' + char;
//         } else {
//             farfallinoStr = farfallinoStr + char;
//         }
//     }
//     return farfallinoStr;
// }

// console.log(farfallinoTranslator('leonardo'))
// console.log(farfallinoTranslator('LEONARDO'))
// console.log(farfallinoTranslator('viva la pausa!!'))


//const pippo = [1, 2, 4, 56, 78, 11, -123, 3, -23, 2, 22, 4];

//41) creare una funzione che dato un array di numeri li eleva tutti al quadrato

// function squareArray(nbrArray) {

//     const newArray = [];


//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         const square = element * element;

//         newArray.push(square);

//     }


//     // for (const nbr of nbrArray) {

//     //     const square = nbr ** 2;

//     //     newArray.push(square);

//     // }

//     return newArray;
// }

//console.log(squareArray(pippo)) //-> [1, 4, 16, 3136, ....]


//42) creare una funzione che dato un array di numeri li eleva al quadrato solo i numeri dispari

// function squareOddArray(nbrArray) {

//         const newArray = [];


//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if(element % 2 === 0){

//             newArray.push(element);

//         } else {

//             const square = element * element;

//             newArray.push(square);

//         }

//     }

//     return newArray;


// }

// console.log(squareOddArray(pippo)) //-> [1, 2, 4, 56, 78, 121, 15129, 9, 529, 2, 22, 4]

//42) creare una funzione che dato un array di numeri moltiplichi per due quelli positivi e divida per due i negativi

// function multiplyPoisitiveAndDivideNegative(nbrArray) {

//         const newArray = [];


//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];


//         if (element >= 0) {

//             const multiplied = element * 2;

//             newArray.push(multiplied);

//         } else {

//             const divided = element / 2;

//             newArray.push(divided);

//         }


//     }

//     return newArray;

// }

// console.log(multiplyPoisitiveAndDivideNegative(pippo)) //-> [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];

// const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

// const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];

//const numberArray2 = [5, 7, 9]
// 43) Trova il Minimo
// Scrivi una funzione trovaMinimo(array) che restituisce il numero più piccolo in un array di numeri.
// function trovaMinimo(array) {

//     let min = array[0];

//     for (let i = 1; i < array.length; i++) {
//         const element = array[i];

//         if (element < min) {
//             min = element;
//         }

//     }

//     return min;
// }

// console.log(trovaMinimo(numberArray));



// 44) Inverti Array con un ciclo
// Scrivi una funzione invertiArray(array) che restituisce un nuovo array con gli elementi in ordine inverso.



// function invertiArray(array){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[(array.length - 1) - i];

//         newArray.push(element)

//     }

//     return newArray;
// }

// function invertiArray2(array){

//     const newArray = [];

//     for (let i = array.length - 1; i >= 0; i--) {

//         const element = array[i];

//         newArray.push(element)

//     }

//     return newArray;
// }

// function invertiArray3(array){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[i];

//         newArray.unshift(element)

//     }

//     return newArray;
// }


// console.log(invertiArray(stringArray));
// console.log(invertiArray2(stringArray));
// console.log(invertiArray3(stringArray));


// 45) Maiuscolo Tutte le Parole
// Scrivi una funzione maiuscoloTutto(array) che restituisce un nuovo array con tutte le stringhe in maiuscolo.

// function maiuscoloTutto(array){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const selectedString = array[i];

//         const upperCase = selectedString.toUpperCase();

//         newArray.push(upperCase);
//     }

//     return newArray;

// }

// console.log(maiuscoloTutto(stringArray));


// 46) Somma Righe Matrice
// Scrivi una funzione sommaRighe(matrice) che restituisce un array con la somma degli elementi di ogni riga.

// const superArray = [[1, 2, 3, 6],
// [1, 1, 1],
// [3, 2, 1, 2, 5]];

// function sommaRighe(matrice) {

//     const newArray = [];

//     for (let rowNumber = 0; rowNumber < matrice.length; rowNumber++) {

//         const row = matrice[rowNumber];
//         let rowSum = 0;

//         for (let columnNumber = 0; columnNumber < row.length; columnNumber++) {

//             const cell = row[columnNumber]
//             rowSum = rowSum + cell;
//         }
//         newArray.push(rowSum);
//     }
//     return newArray;
// }
// console.log(sommaRighe(superArray))


// 47) Conta Occorrenze
// Scrivi una funzione contaOccorrenze(array, elemento) che conta quante volte un elemento appare in un array

// function contaOccorrenze(array, elemento){

//     let counter = 0;

//     for (let i = 0; i < array.length; i++) {

//         const selected = array[i];

//         if (selected === elemento) {
//             counter++;
//         }

//     }

//     return counter;
// }

// console.log(contaOccorrenze(numberArray, 10000));
// console.log(contaOccorrenze(numberArray, 4));
// console.log(contaOccorrenze(numberArray, 8));
// console.log(contaOccorrenze(numberArray, 2));

// 48) Filtra indice pari
// Scrivi una funzione filtraIndicePari(array) che tiene tutti gli elementi in posizione dispari

// function filtraIndicePari(array){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[i];

//         if(i % 2 === 1){
//             newArray.push(element);
//         }

//     }

//     return newArray;

// }

// console.log(filtraIndicePari(numberArray));
// console.log(filtraIndicePari(stringArray));


// 49) Somma pari
// Scrivi una funzione sommaPari(array) che somma tutti i numeri pari

//const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8];

// function sommaPari(nbrArray){

//     let result = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const element = nbrArray[i];

//         if (element % 2 === 0) {
//             result = result + element;
//         }

//     }

//     return result
// }

// console.log(sommaPari(numberArray))

// 50) trova lunghezze
// Scrivi una funzione trovaLunghezzeParola(array) che restituisce un array delle lunghezze(numeri) delle stringhe che compongono l'array in input

// function trovaLunghezzeParola(stringArray){

//     const newArray = [];

//     for (let i = 0; i < stringArray.length; i++) {

//         const selectedString = stringArray[i];

//         const length = selectedString.length;

//         newArray.push(length);
//     }

//     return newArray;

// }

// console.log(trovaLunghezzeParola(stringArray));


// const pippo = 1;

// pippo = pippo + 1;


// const pluto = [3, 4];

// pluto.push(6); // aggiungere o togliere cose è possibile

// pluto = [1, 1, 1]; // errore è una costante



///// HIGH ORDER FUNCTIONS


// function highFilter(array, conditionFunction){

//     const newArray = []

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (conditionFunction(element, i, array)) {
//             newArray.push(element);
//         }
        
//     }

//     return newArray;
// }

// function highMap(array, transformFunction){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[i];

//         const newElement = transformFunction(element, i);

//         newArray.push(newElement); 
//     }
//     return newArray;
// }


// function highReduce(array, reduceFunction, startingValue){

//     let accumulator = startingValue;

//     for (let i = 0; i < array.length; i++) {

//         const current = array[i];

//         accumulator = reduceFunction(accumulator, current, i)
        
//     }

//     return accumulator;
// }

// const numberArray = [2, 4, 8, 112, 156, 22, -61.5, 6, -11.5, 4, 44, 8, 4];

// const stringArray = ['pizza', 'spaghetti', 'frittata', 'lasagne'];



// // filter
// //51) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// // maggiori di 100

// function keepGreaterThan100(nbrArray){

//     const newArray = [];
//     for (const nbr of nbrArray) {        
//         if (nbr > 100) {
//             newArray.push(nbr);
//         }
//     }
//     return newArray;

// }
// console.log(keepGreaterThan100(numberArray));

// function isGreaterThan100(nbr){
//     // if (nbr > 100) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return nbr > 100;
// }

// (nbr) => {
//     if (nbr > 100) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(numberArray, isGreaterThan100));
// console.log(numberArray.filter(isGreaterThan100))
// console.log(numberArray.filter((nbr) => nbr > 100))

// console.log(numberArray.filter((nbr) => {
//     if (nbr > 100) {
//         return true;
//     } else {
//         return false;
//     }
// }));
    


// //52) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// // che finiscono con 'a'

// function keepEndingWithA(strArray){

//     const newArray = [];

//     for (const str of strArray) { 

//         const lastChar = str[str.length - 1];

//         if (lastChar === 'a') {
//             newArray.push(str);
//         }
//     }

//     return newArray;
// }
// console.log(keepEndingWithA(stringArray));

// function isEndingWithA(str){
//     // // const lastChar = str[str.length - 1];

//     // // // if (lastChar === 'a') {
//     // // //     return true;
//     // // // } else {
//     // // //     return false;
//     // // // }

//     // // return lastChar === 'a'

//     // return str[str.length - 1] === 'a';
//     return str.endsWith('a');
// }

// console.log(highFilter(stringArray, isEndingWithA));
// console.log(stringArray.filter(isEndingWithA));
// console.log(stringArray.filter((str) => str.endsWith('a')));

// //53) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// // divisibili per 3

// function keepDivisibleBy3(nbrArray){

//     const newArray = [];

//     for (const nbr of nbrArray) {      

//         if (nbr % 3 === 0) {
//             newArray.push(nbr);
//         }

//     }
//     return newArray;
// }

// console.log(keepDivisibleBy3(numberArray));

// function isDivisibleBy3(nbr){
//     // if (nbr % 3 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return nbr % 3 === 0;
// }

// console.log(highFilter(numberArray, isDivisibleBy3));
// console.log(numberArray.filter(isDivisibleBy3))

// function keepDivisibleBy3V2(nbrArray){
//     return nbrArray.filter((nbr) => nbr % 3 === 0);
// }

// console.log(keepDivisibleBy3V2(numberArray))

// // map
// //54) Scrivi una funzione che, dato un array di numeri, crei un array con tutti i numeri
// // elevati al cubo

// function cubeArray(nbrArray) {

//     const newArray = [];

//     for (const nbr of nbrArray) {
        
//         const cube = nbr ** 3;

//         newArray.push(cube);
        
//     }
    
//     return newArray;
// }

// console.log(cubeArray(numberArray));

// function cubize(nbr){
//     return nbr ** 3;
// }

// console.log(highMap(numberArray, cubize));
// console.log(numberArray.map(cubize));
// console.log(numberArray.map((n => n ** 3)));

// function cubeArrayV2(nbrArray){
//     return nbrArray.map(cubize);
// }


// console.log(cubeArrayV2(numberArray));
// //55) Scrivi una funzione che, dato un array di stringhe, crei un array con tutte le stringhe 
// // con la prima lettera maiuscola

// function uppercaseFirstChar(str){

//     //const firstChar = str[0];
//     const firstChar = str.charAt(0)

//     const firstUpper = firstChar.toUpperCase();

//     const remainigString = str.slice(1);

//     const newString = firstUpper + remainigString;

//     return newString;

// }

// console.log(highMap(stringArray,uppercaseFirstChar));
// console.log(stringArray.map(uppercaseFirstChar));
// console.log(stringArray.map((str) => str[0].toUpperCase() + str.slice(1)))

// //56) Scrivi una funzione che, dato un array di numeri, crei un array di stringhe di
// //cancelletti lunga quanto il numero originale
// // [3, 4, 1, 0] -> ['###', '####', '#', '']

// function numberToHash(nbr) {
//     if (nbr <= 0) {
//         return '';
//     }
//     return '#'.repeat(nbr);
// }

// console.log(highMap(numberArray, numberToHash));
// console.log(numberArray.map(numberToHash));

// console.log(numberArray.map((nbr) => nbr <= 0 ? '' : '#'.repeat(nbr)))

// // reduce
// //57) Scrivi una funzione che, dato un array di numeri, li moltiplichi tutti tra loro

// function multiplyAll(nbrArray){

//     let accumulator = 1;

//     for (const current of nbrArray) {

//         accumulator = accumulator * current;
        
//     }

//     return accumulator;
// }

// //[2, 5, 4] => 1 * 2 * 5 * 4
// //[2, 5, 4] => 2 * 5 * 4

// function multiplyAllV2(nbrArray){

//     let accumulator = nbrArray[0];

//     for (let i = 1; i < nbrArray.length; i++) {
//         const current = nbrArray[i];
        
//         accumulator = accumulator * current;
//     }

//     return accumulator;

// }

// console.log(multiplyAll(numberArray))
// console.log(multiplyAllV2(numberArray))

// function multiply(accumulator, current){
//     return accumulator * current;
// }

// console.log(highReduce(numberArray, multiply, 1));
// console.log(numberArray.reduce(multiply, 1));
// console.log(numberArray.reduce((acc, curr) => acc * curr, 1));

// console.log(numberArray.reduce(multiply));
// console.log(numberArray.reduce((acc, curr) => acc * curr));


// //58) Scrivi una funzione che, dato un array di stringhe, crei una stringa composta 
// // dalle prime tre lettere delle strighe originarie

// function stringConcatFirst3(strArray){

//     let accumulator = '';

//     for (const current of strArray) {

//         const first3 = current.slice(0, 3);

//         accumulator = accumulator + first3;
        
//     }

//     return accumulator;
// }


// console.log(stringConcatFirst3(stringArray))


// function concatFirst3(accumulator, current){
//     const first3 = current.slice(0,3);
//     return accumulator + first3;
// }

// console.log(highReduce(stringArray, concatFirst3, ''));
// console.log(stringArray.reduce(concatFirst3, ''));
// console.log(stringArray.reduce((acc, curr) => acc + curr.slice(0,3), ''));



// //59) Scrivi una funzione che, dato un array di numeri, trovi il maggiore

// function maxArray(nbrArray) {
    
//     let accumulator = -Infinity;
    
//     for (const current of nbrArray) {
    
//         if (current > accumulator) {
//             accumulator = current;
//         }

//     }
    
//     return accumulator;
// }

// function maxArrayV2(nbrArray) {
    
//     let accumulator = nbrArray[0];
    
//     for (let i = 1; i < nbrArray.length; i++) {
//         const current = nbrArray[i]
    
//         if (current > accumulator) {
//             accumulator = current;
//         }

//     }
    
//     return accumulator;
// }

// console.log(maxArray(numberArray));
// console.log(maxArrayV2(numberArray));

// function max(acc, curr) {
    
//     if (curr > acc) {
//         return curr;
//     } else {
//         return acc;
//     }

// }

// console.log(highReduce(numberArray, max, -Infinity));
// console.log(numberArray.reduce(max, -Infinity));
// console.log(numberArray.reduce(max));
// console.log(numberArray.reduce((acc, curr) => curr > acc ? curr : acc))
// console.log(numberArray.reduce((acc, curr) => {    
//     if (curr > acc) {
//         return curr;
//     } else {
//         return acc;
//     }
// }))




// //60) Scrivi una funzione che, dato un array di stringhe, trovi la stringa con più
// // volte ripetuta la lettera t;

// function countT(str){

//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         const upperChar = char.toUpperCase();

//         if (upperChar === 'T') {
//             count ++;
//         }
        
//     }

//     return count;

// }

// //['pizza', 'spaghetti', 'frittata', 'lasagne'];

// function findTheStringWithMoreT(strArray) {

//     let accumulator = '';
//     let accumulatorTcount = 0;

//     for (const current of strArray) {

//         const currentTcount = countT(current);

//         if (currentTcount > accumulatorTcount) {

//             accumulator = current;
//             accumulatorTcount = currentTcount;
//         }   
//     }
//     return accumulator;
// }


// function findTheStringWithMoreTV2(strArray) {

//     let accumulator = '';

//     for (const current of strArray) {

//         if (countT(current) > countT(accumulator)) {

//             accumulator = current;

//         }   
//     }
//     return accumulator;
// }


// function compareTnumber(acc, curr){
//     if (countT(curr) > countT(acc)) {
//         return curr;
//     }
//     return acc;
// }


// console.log(findTheStringWithMoreT(stringArray));
// console.log(findTheStringWithMoreTV2(stringArray));
// console.log(highReduce(stringArray, compareTnumber, ''));
// console.log(stringArray.reduce(compareTnumber, ''));

const prodotti = [
  { id: 1, nome: "Mela", categoria: "Frutta", prezzo: 1.20, scadenza: "2025-11-15", peso: 0.2, biologico: true },
  { id: 2, nome: "Pasta", categoria: "Pasta e Riso", prezzo: 0.80, scadenza: "2026-05-10", peso: 0.5, biologico: false },
  { id: 3, nome: "Latte", categoria: "Latticini", prezzo: 1.10, scadenza: "2025-11-14", peso: 1, biologico: true },
  { id: 4, nome: "Pane", categoria: "Pane e Sostituti", prezzo: 1.50, scadenza: "2025-11-12", peso: 0.3, biologico: false },
  { id: 5, nome: "Yogurt", categoria: "Latticini", prezzo: 0.60, scadenza: "2025-11-20", peso: 0.125, biologico: true },
  { id: 6, nome: "Riso", categoria: "Pasta e Riso", prezzo: 1.30, scadenza: "2027-02-20", peso: 1, biologico: false },
  { id: 7, nome: "Pomodoro", categoria: "Ortaggi", prezzo: 0.90, scadenza: "2025-11-18", peso: 0.3, biologico: true },
  { id: 8, nome: "Acqua", categoria: "Bevande", prezzo: 0.30, scadenza: "2026-12-31", peso: 1.5, biologico: false },
  { id: 9, nome: "Biscotti", categoria: "Dolci", prezzo: 2.00, scadenza: "2026-03-01", peso: 0.2, biologico: false },
  { id: 10, nome: "Uova", categoria: "Uova", prezzo: 2.50, scadenza: "2025-11-30", peso: 0.6, biologico: true },
  { id: 11, nome: "Caffè", categoria: "Bevande", prezzo: 3.00, scadenza: "2026-10-01", peso: 0.25, biologico: false },
  { id: 12, nome: "Formaggio", categoria: "Latticini", prezzo: 4.50, scadenza: "2025-12-10", peso: 0.2, biologico: true },
  { id: 13, nome: "Carote", categoria: "Ortaggi", prezzo: 0.70, scadenza: "2025-11-25", peso: 1, biologico: true },
  { id: 14, nome: "Tonno", categoria: "Conserve", prezzo: 1.80, scadenza: "2027-01-15", peso: 0.16, biologico: false },
  { id: 15, nome: "Cioccolato", categoria: "Dolci", prezzo: 1.70, scadenza: "2026-04-30", peso: 0.1, biologico: false }
];


//61) mettere in ordine l'array di prodotti per prezzo dal più costoso in giù

// function comparePricesDescending(prodotto1, prodotto2){

//   const prezzo1 = prodotto1.prezzo;
//   const prezzo2 = prodotto2.prezzo;

//   return prezzo2 - prezzo1;

// }

// function comparePricesDescending2(prodotto1, prodotto2){
//   return prodotto2.prezzo - prodotto1.prezzo;
// }

// // prodotti.sort(comparePricesDescending);
// // prodotti.sort(comparePricesDescending2);
// prodotti.sort((p1, p2) => p2.prezzo - p1.prezzo);

// console.log(prodotti);


//62) mettere in ordine per nome discendente

// function compareByNameDescending(prodotto1, prodotto2) {

//   const nome1 = prodotto1.nome;
//   const nome2 = prodotto2.nome;

//   return nome2.localeCompare(nome1);
// }

// //prodotti.sort(compareByNameDescending);
// prodotti.sort((p1, p2) => p2.nome.localeCompare(p1.nome));

// console.log(prodotti);


//63) mettere in ordine per categoria ascendente, e se uguali per peso dal più pesante

// function compareCategoryAscAndWeightDesc(prod1, prod2) {

//   if(prod1.categoria === prod2.categoria){
//     return prod2.peso - prod1.peso;
//   }

//   return prod1.categoria.localeCompare(prod2.categoria);
  
// }
// prodotti.sort(compareCategoryAscAndWeightDesc);

// console.log(prodotti);

//64) mettere in ordine per anno di scadenza dal più vicino

// function compareYearsAsc(prod1, prod2) {

//   const yearString1 = prod1.scadenza.slice(0,4);
//   const yearString2 = prod2.scadenza.slice(0,4);

//   const year1 = Number(yearString1);
//   const year2 = Number(yearString2);

//   return year1 - year2;

// }

// prodotti.sort(compareYearsAsc);

// console.log(prodotti);
//65) mettere in ordine per categoria discendente, se uguali per peso dal più piccolo, se uguali per nome ascendente

// function compCatDescWeightAscNameAsc(prod1, prod2){

//   if (prod1.categoria === prod2.categoria) {

//     if (prod1.peso === prod2.peso) {
      
//       return prod1.nome.localeCompare(prod2.nome);
//     }
    
//     return prod1.peso - prod2.peso;
//   }

//   return prod2.categoria.localeCompare(prod1.categoria);
// }

// function compCatDescWeightAscNameAsc2(prod1, prod2){

//   if (prod1.categoria !== prod2.categoria) {

//     return prod2.categoria.localeCompare(prod1.categoria);

//   } else if (prod1.peso !== prod2.peso){

//     return prod1.peso - prod2.peso;

//   } else {

//     prod1.nome.localeCompare(prod2.nome);

//   }

  
// }

// prodotti.sort(compCatDescWeightAscNameAsc);

// console.log(prodotti);
