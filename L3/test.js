// 1 Задание
/* 
   Создайте функцию hoistingTest.
   Внутри функции объявите переменные x и y с использованием var и let соответственно.
   Попробуйте вывести их значение в консоль до и после их объявления. 
*/

/* 
  Вопрос: Что выведется в консоль на каждой строке с console.log?
  Почему поведение переменных x и y отличается? 
  Объясните, как работает hoisting в контексте var и let, и какие выводы можно сделать из ваших наблюдений.
*/

function hoistingTest() {
    console.log(x)  // Переменная x, объявленная через var, поднимается в начало функции, но её инициализация (x = 5) происходит ниже.
                    // Поэтому на момент вывода x уже существует, но она еще не инициализирована, поэтому получает значение undefined.

    console.log(y)  // Приводит к ошибке ReferenceError: Cannot access 'y' before initialization. 
                    // Она тоже поднимается, но не инициализируется, и попадает в так временную мертвую зона TDZ, что и приводит к ошибке
    
    var x = 5; 
    let y = 10;

    console.log(x) // 5
    console.log(y) // 10
}

hoistingTest();

// 2 Задание
const a2 = 1;

if (true) {
	var b = 2;
}

console.log(a2 + b); // 3


// 3 Здание
console.log(a3); // undefined

if (true) {
	var a3 = 5;
}

console.log(a3); // 5


// 4 Здание
var str1 = "Привет,";
var str2 = "Илья";
// Склейте значение этих двух переменных и выведите на экран значение "Привет, Илья".
console.log(str1 + str2)


// 5 Задание
// Как записать данную строку без использования символа +
let a5 = 1;
console.log("Значение переменной a - " + a);

console.log(`Значение переменной a - ${a}`);

// 6 Задание
// Создайте две переменные num1 и num2 и присвойте им значения 10 и 5 соответственно.
// Найдите сумму, разность, произведение и частное этих двух чисел и выведите результат на экран.
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let diff = num1 - num2;
let pow = num1 * num2;
let quot = num1 / num2;


// 7 Задание
let a6 = 5;

if (true) {
	a6 = 10;
}

function foo() {
	console.log(a6); // 10
}

foo()

// 8 Задание
if (true) {
	var a;
}

function foo() {
	console.log(a); // undefined
}

foo()

a = 10;

// 9 Задание
function foo() {
	var a = 10;
}

if (true) {
	var b = 10;
}

console.log(a); // a is not defined
console.log(b); // 10

