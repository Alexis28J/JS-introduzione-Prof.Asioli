// function sayHello() {
//     console.log('hello');
// }

// const helloHello = () => console.log('hello hello!!');

// const superHello = function() {
//     console.log('super hello');
// }

// console.log(helloHello);
// console.log(superHello);
// console.log(sayHello);


// /// FUNZIONI COME PARAMETRI IN INPUT


// // FILTER

// const numbers = [-100, -30, 20, 11, 1, 40, -21, -15, 3, 9, 300, 5001];

// const testArray = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua'];


// function keepPositive(nbrArray){
//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];
        
//         if (nbr >= 0) {
//             newArray.push(nbr);
//         }

//     }
//     return newArray;
// }

// console.log(keepPositive(numbers));


// function keepGreaterThan30(nbrArray){
//     const newArray = [];

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];
        
//         if (nbr > 30) { //è cambiata solo la condizione
//             newArray.push(nbr);
//         }

//     }
//     return newArray;
// }

// console.log(keepGreaterThan30(numbers));


// function keepLongerThan3(strArray){
//     const newArray = [];

//     for (let i = 0; i < strArray.length; i++) {

//         const str = strArray[i];
        
//         if (str.length > 3) {
//             newArray.push(str);
//         }

//     }
//     return newArray;
// }

// console.log(keepLongerThan3(testArray));



// function highFilter(array, conditionFunction){

//     const newArray = []

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (conditionFunction(element)) {
//             newArray.push(element);
//         }
        
//     }

//     return newArray;
// }

// function isEven(nbr) {
//     if (nbr % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(highFilter(numbers, isEven));

// function notStartingWithP(str){

//     const firstChar = str[0];
//     const firstLower = firstChar.toLowerCase();

//     if (firstLower !== 'p') {
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(highFilter(testArray, notStartingWithP));

// console.log(highFilter(numbers,  (nbr) => nbr < 0));

// console.log(numbers.filter((nbr) => nbr < 0));

// // MAP

// function multiplyBy3(nbrArray){

//     const newArray = [];
    
//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         const newNbr = nbr * 3;

//         newArray.push(newNbr);
//     }

//     return newArray;
// }

// console.log(multiplyBy3(numbers));


// function multiplyByArrayPosition(nbrArray){

//     const newArray = [];
    
//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         const newNbr = nbr * i;

//         newArray.push(newNbr);
//     }

//     return newArray;
// }

// console.log(multiplyByArrayPosition(numbers));


// function toUpperCaseArray(strArray){

//     const newArray = [];
    
//     for (let i = 0; i < strArray.length; i++) {

//         const str = strArray[i];

//         const newString = str.toUpperCase();

//         newArray.push(newString);
//     }

//     return newArray;
// }

// console.log(toUpperCaseArray(testArray));


// function highMap(array, transformFunction){

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         const element = array[i];

//         const newElement = transformFunction(element, i);

//         newArray.push(newElement); 
//     }
//     return newArray;
// }


// function multiplyBy3number(nbr) {
//     return nbr * 3;
// }

// console.log(highMap(numbers, multiplyBy3number));
// console.log(highMap(numbers, (nbr) => nbr * 3));
// console.log(numbers.map((nbr) => nbr * 3));

// console.log(highMap(numbers, (nbr, i) => nbr * i));
// console.log(numbers.map((nbr, i) => nbr * i));

// console.log(highMap(testArray, (str) => str.toUpperCase()));
// console.log(testArray.map((str) => str.toUpperCase()));


// //REDUCE

// function sumAll(nbrArray){

//     let sum = 0;

//     for (let i = 0; i < nbrArray.length; i++) {

//         const nbr = nbrArray[i];

//         sum = sum + nbr;
        
//     }

//     return sum;

// }

// console.log(sumAll(numbers))


// function stringWithFirstChars(strArray){

//     let newString = '';

//     for (let i = 0; i < strArray.length; i++) {

//         const str = strArray[i];
        
//         const firstChar = str[0];
//         newString = newString + firstChar;

//     }

//     return newString;

// }

// console.log(stringWithFirstChars(testArray));


// function highReduce(array, reduceFunction, startingValue){

//     let accumulator = startingValue;

//     for (let i = 0; i < array.length; i++) {

//         const current = array[i];

//         accumulator = reduceFunction(accumulator, current, i)
        
//     }

//     return accumulator;
// }

// console.log(highReduce(numbers, (sum, nbr) => sum + nbr, 0));
// console.log(numbers.reduce((sum, nbr) => sum + nbr, 0));


// function sumFirstChar(acc, curr){

//     const firstChar = curr[0];

//     return acc + firstChar;
// }

// console.log(highReduce(testArray, sumFirstChar, ''));
// console.log(testArray.reduce(sumFirstChar, ''));
// console.log(testArray.reduce((acc, curr) => acc + curr[0], ''));

// const students = ['luis', 'alexander', 'stefania', 'eros', 'daniel', 'salma'];
// const numbers = [30, 12, 5, 111, 300, 400, 1];

//foreach


// for (let i = 0; i < students.length; i++) {

//     const student = students[i];
    
//     console.log(student);
// }

// for (const student of students) {console.log(student)}


// students.forEach((pippo, pluto) => console.log(pluto, pippo))

//find

// function isGreaterThan100(nbr) {
//     return nbr > 100;
// }

// function isGreaterThan5000(nbr) {
//     return nbr > 5000;
// }


// console.log(numbers.filter(isGreaterThan100));
// console.log(numbers.find(isGreaterThan100))
// console.log(numbers.filter(isGreaterThan100)[0])

//some


// console.log(numbers.some(isGreaterThan100));
// console.log(numbers.some(isGreaterThan5000));


//sort

// numbers.sort();

// console.log(numbers);

// students.sort();

// console.log(students);


// function compareNumbersAscending(n1, n2){
//     // if (n1 > n2) {
//     //     return 1;
//     // } else if(n2 > n1){
//     //     return -1
//     // } else {
//     //     return 0;
//     // }

//     return n1 - n2;
// }

// function compareNumbersDescending(n1, n2){
//     return n2 - n1;
// }

// function compareStringsAscending(s1, s2){
//     return s1.localeCompare(s2);
// }

// function compareStringsDescending(s1, s2){
//     // return -s1.localeCompare(s2);
//     return s2.localeCompare(s1);
// }

// numbers.sort(compareNumbersDescending);

// console.log(numbers)

// students.sort(compareStringsDescending);

// console.log(students);


// const cars = [
//     {
//         model: "g-wagon",
//         producer: "mercedes",
//         maxSpeed: 180
//     },
//     {
//         model: "cla",
//         producer: "mercedes",
//         maxSpeed: 225
//     },
//     {
//         model: "panda",
//         producer: "fiat",
//         maxSpeed: 150
//     },
//     {
//         model: "bravo",
//         producer: "fiat",
//         maxSpeed: 180
//     },
//     {
//         model: "a4",
//         producer: "audi",
//         maxSpeed: 225
//     }
// ]

// function compareCarsBySpeedDescending(car1, car2) {
//     return car2.maxSpeed - car1.maxSpeed;
// }

// function compareCarsByModelAscending(car1, car2) {
//     return car1.model.localeCompare(car2.model);
// }

// function compareCarsBySpeedDescendingAndModelAscending(car1, car2) {
//     if(car1.maxSpeed > car2.maxSpeed){
//         return -1;
//     } else if (car2.maxSpeed > car1.maxSpeed){
//         return 1;
//     } else {
//         return car1.model.localeCompare(car2.model);
//     }
// }

// cars.sort(compareCarsBySpeedDescendingAndModelAscending);

// console.log(cars);


// SORTING NOT IN PLACE

// const numbers = [200, 2, -20, 12, 5, 1000];

// // const doubleNumbers = numbers.map((n) => n * 2);

// // console.log(doubleNumbers);
// // console.log(numbers);

// // const sortedNumbers = numbers.sort((n1, n2) => n1 - n2);

// // console.log(sortedNumbers);
// // console.log(numbers);

// function correctSort(array, compareFn){

//     const clone = [...array];
//     //const clone = new Array(...array);
//     //const clone = Array.from(array);

//     clone.sort(compareFn);

//     return clone;
// }

// const sortedNumbers = correctSort(numbers, (n1, n2) => n1 - n2);

// console.log(sortedNumbers);
// console.log(numbers);