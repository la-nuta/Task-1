// 1. Реализовать полифил для Object.create.

Object.prototype.createObject = function (proto) {
    if (typeof proto !== 'object') {
        throw TypeError('Object prototype should be an Object or null');
    }

    function F() {}

    F.prototype = proto;

    return new F();
};

class Animal {}

const nicky = new Animal();
const fluffy = Object.createObject(Animal.prototype, {name: {writable: true, configurable: true, value: 'fluffy'}});

console.log('Task 1');
console.log('fluffy instanceof Animal: ', fluffy instanceof Animal);
console.log('fluffy instanceof Object: ', fluffy instanceof Object);

console.log('nicky instanceof Animal: ', nicky instanceof Animal);
console.log('nicky instanceof Object: ', nicky instanceof Object);

console.log('prototype of fluffy: ', Object.getPrototypeOf(fluffy));
console.log('prototype of nicky: ', Object.getPrototypeOf(nicky));


// 2. Функция, которая проходит по массиву целых чисел и выводит их с интервалом в 2 секунды.

const array = [1, 2, 3, 4, 5];

function timer(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => console.log(arr[i], i * 2000), i * 2000);
    }
}

timer(array);


// 3. Функция, которая создаёт копию объекта.

function createObjectCopy(object) {
    if (typeof object === 'object') {
        return JSON.parse(JSON.stringify(object));
    }
}

const a = {name: 'Name'};
const b = createObjectCopy(a);
const c = a;

console.log('Task 3');
console.log('copy of the object', a !== b);
console.log('the same link to the object, not the copy', a !== c);


// 4. Функция, которая меняет местами значения двух чисел. Не вводить дополнительные переменные.

function reverseNumbers(arr) {
    const [num1, num2] = arr;
    return [num2, num1];
}

let numA = 2;
let numB = 5;

console.log('Task 4');
console.log(numA, numB);
console.log(reverseNumbers([numA, numB]));


// 5. Реализовать одну функцию, которая возвращает сумму, например f(1)(2) => 3 и f(1, 2) => 3.

function summ(a, b) {
    if (b === undefined) {
        return function (b) {
            return a + b;
        }
    } else {
        return a + b;
    }
}

console.log('Task 5');
console.log('summ(3, 3): ', summ(3, 3));
console.log('summ(3)(3): ', summ(3)(3));


// 6. Реализовать функцию, которая работает следующим образом: f(1)(2)(3)... и возвращает сумму введенных аргументов.

const summAll = (num) => {
    summAll.number = summAll.number === undefined ? num : summAll.number + num;

    if (summAll.counted) {
        summAll.number = num;
        summAll.counted = false;
    }

    Object.getPrototypeOf(summAll).toString = () => {
        summAll.counted = true;
        return summAll.number;
    };

    return summAll;
};

console.log('Task 6');
console.log('summAll(1)(2)(3): ', summAll(1)(2)(3));
console.log('summAll(2)(2)(3): ', summAll(2)(2)(3));


// 7. Задан массив чисел: numbers = [1, 2, 3, ... , 20];
// Из массива numbers удалить элементы с индексами 2, 4, 5, 8, 11, 15, 18. Без использования filter().

const numbers = [];
const numbers1 = [];
const indexes = [2, 4, 5, 8, 11, 15, 18];

for (let i = 1; i < 21; i++) {
    numbers.push(i);
    numbers1.push(i);
}

for (let i = numbers1.length; i > 0; i--) {
    if (indexes.includes(i)) {
        numbers1.splice(i, 1);
    }
}

console.log('Task 7');
console.log('delete indexes: 2, 4, 5, 8, 11, 15, 18');
console.log('initial array view: ', numbers);
console.log('changed array: ', numbers1);


// 8. Задан массив с названиями переменных, написанных в camelCase. Преобразовать их в вид camel_case.

function replaceUpper(variableName) {
    return variableName.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

let variablesArray = ['variablesArray', 'reduceTillZero', 'summAll', 'getPrototypeOf', 'reverseNumbers', 'createObjectCopy'],
    changedVariablesArray = variablesArray.map(el => replaceUpper(el));

console.log('Task 8');
console.log('original variables: ', variablesArray);
console.log('changed variables: ', changedVariablesArray);


// 9. С помощью метода reduce посчитать сумму элементов массива до первого встретившегося нуля.

function reduceTillZero(arr) {
    let zero = false;

    if (Array.isArray(arr) && arr.length) {
        return arr.reduce((cur, next) => {
            if (next === 0 && !zero) {
                zero = true;
            }

            if (!zero) {
                return cur + next;
            } else {
                return cur;
            }
        });
    }
}

const arr91 = [0];
const arr92 = [1, 1, 1, 10];
const arr93 = [1, 3, 1, 0, 1, 1];
const arr94 = [1, 0, 1, 1, 0, 5];

console.log('Task 9');
console.log('result: ', reduceTillZero(arr91), 'array: ', arr91);
console.log('result: ', reduceTillZero(arr92), 'array: ', arr92);
console.log('result: ', reduceTillZero(arr93), 'array: ', arr93);
console.log('result: ', reduceTillZero(arr93), 'array: ', arr93);
console.log('result: ', reduceTillZero(arr94), 'array: ', arr94);
console.log('result: ', reduceTillZero([]), 'array: ', []);


console.log('Task 2');
