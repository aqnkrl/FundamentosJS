//Higt Order Functions
// Funciones de Orden Superior
// Son funciones que reciben funciones como parametros
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const operation = (a , b, callback) => {
    const result= callback(a, b);
    console.log('El resultado es:' + result);
}

operation (12, 5, suma);
operation(12, 5, resta);

operation(12, 5, (a, b) => a * b);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];
cars.forEach(car => { console.log(car) });

 let filtrados = cars.filter(car => car === 'tsuru');
 console.log(filtrados)

 filtrados = cars.filter(car => car.includes('o'));
 console.log(filtrados)


 //regresar los que comiencen con a
 filtrados = cars.filter(car => car.startsWith('a'));
 console.log(filtrados)
 //regresar los que terminen con u
 filtrados = cars.filter(car => car.endsWith('u'));
 console.log(filtrados)
 //regresar los que tengan menos de 5 letras 
 filtrados = cars.filter(car => car.length < 5);
 console.log(filtrados)

//Método map
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const reves = cars.map(car => car.split('').reverse().join(''));
console.log(reves);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];
function wrapping(gifts) {
    return gifts.map(gift => {
        let tapa = `*`.repeat(gift.length + 2);
        let g = `${ tapa }\n*${ gift }*\n${ tapa }`;
        return g;
    })
  }

  const carsEnvueltos = wrapping(cars);
  carsEnvueltos.forEach(car => console.log(car));

//forEach- itera sin regresanos nada, map,  filter-regresa los elementos que cumplan con una condicion especificada
// reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a, b) => a * b);
console.log(factorial);

// Every regresa verdadero si todos cumplen
const ages = [23, 14, 37, 19, 18, 22, 27];
const olders = ages.every(age => age >= 18);
const youngers = ages.every(age => age < 18);
console.log(olders);
console.log(youngers);

//some regresa verdadero con uno que cumpla
const olders2 = ages.some(age => age >= 18);
const youngers2 = ages.some(age => age < 18);
console.log(olders2);
console.log(youngers2);

// crear array con elementos del 1 al 10 
// crear un nuevo con los cuadrados 
// crear un nuvo con los cubos
// crear uno nuevo con las mitades
// crear uno nuevo con los pares 
// crear uno nuevo con los impares
// crear uno nuevo con valores entre 3 y 8 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const cuadrados = number.map(number => number ** 2);
console.log(cuadrados);

const cubos = number.map(number => number ** 3);
console.log(cubos);

const mitad = number.map(number => number / 2);
console.log(mitad);

const pares = number.filter(number => number % 2 === 0);
console.log(pares);

const impares = number.filter(number => number % 2 !== 0);
console.log(impares);

const valor = number.filter(number => number >= 3 && number <=8 );
console.log(valor);


