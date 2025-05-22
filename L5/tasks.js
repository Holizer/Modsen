{
    // Что будет выведено в консоль? В случае, если происходит потеря контекста, то какое решение будет верным?
    const obj = { 
        name: 'Object', 
        getName: function () { 
            return this.name; 
        } 
    }; 
    const getName = obj.getName;
    console.log(getName());  // undefined 

    // Решение 1 С восстановлением контекста через call или apply
    console.log(getName.call(obj)); 
    console.log(getName.apply(obj));
    
    // Решение 2 Через создание новой функции с помощью bind 
    console.log(obj.getName.bind(obj)());
}

{
    // У вас есть функция greet, которая принимает имя и выводит приветственное сообщение.
    // Напишите, как вы могли бы использовать методы call, apply, и bind для вызова этой функции с контекстом объекта person.

    const person = { name: 'Alice' };  
    function greet () {
        console.log(`Hello, ${this.name}`) 
    }

    greet.apply(person)
    greet.call(person)
    greet.bind(person)()
}

{
    // 1. Сумма двух чисел
    // Напишите стрелочную функцию, которая принимает два числа и возвращает их сумму.
    sumNums = (a, b) => {
        return a + b;
    } 
    console.log(sumNums(5, 8))
    
    // 2. Преобразование массива
    // Создайте стрелочную функцию, которая принимает массив чисел и возвращает новый массив, где все числа умножены на 2.
    doubleArray = (nums) => {
        return nums.map((num) => num * 2) 
    }
    console.log(doubleArray([1, 3, 9]))

    // 3. Подсчёт длины строк
    // Создайте стрелочную функцию, которая принимает массив строк и возвращает массив их длин.
    getArrayOfStringLength = (strArray) => {
        return strArray.map((str) => str.length)
    }
    console.log(getArrayOfStringLength(['Привет', 'это', 'текст', 'для', 'проверки']))
}

{
    // Следующие задачи необходимо решить без использования методов массива. Необходимо реализовать всё самому.

    // ### Задача 1: Найти наибольший элемент массива

    // Задача: Дан массив чисел. Напишите функцию, которая находит максимальный элемент этого массива.

    // // Пример использования функции
    findMax = (arr) => {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > max)
                max = arr[i]
        }
        return max;
    }
    const array = [10, 15, 20, 30, 25];
    console.log(findMax(array)); // Вывод: 30

    // ### Задача 2: Проверить является ли число простым
    
    // Задача: Напишите функцию, которая проверяет, является ли переданное ей число простым.
    
    // // Примеры использования функции
    isPrime = (num) => {
        if (isNaN(num) || num === 1 || num === 0) return false

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return false
        }
        return num !== 1
    }
    console.log(isPrime(7));   // Вывод: true
    console.log(isPrime(9));   // Вывод: false
    console.log(isPrime(11));  // Вывод: true
    
    // ### Задача 3: Реализовать функцию для поиска суммы всех элементов массива
    
    // Задача: Напишите функцию, которая вычисляет сумму всех элементов числового массива.
    
    // // Пример использования функции
    sumArray = (arr) => {
        if (!Array.isArray(arr)) return 0;

        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
        }
        // arr.forEach(num => {
        //     result += num
        // });
        return result;
    } 
    const numbers = [1, 2, 3, 4, 5];
    console.log(sumArray(numbers)); // Вывод: 15
    
    // ### Задача 4: Перевернуть строку
    
    // Задача: Напишите функцию, которая переворачивает строку.
    
    // // Пример использования функции
    reverseString = (str) => {
        let result = '';
        for(let i = str.length - 1; i >= 0; i--) {
            result += str[i]
        }
        return result
    } 
    console.log(reverseString('hello')); // Вывод: 'olleh'
    
    // ### Задача 5: Найти количество гласных букв в строке
    
    // Задача: Дана строка. Напишите программу, которая считает количество гласных символов ('a', 'e', 'i', 'o', 'u') в этой строке.
    
    // // Пример использования функции
    countVowels = (str) => {
        const letters = ['a', 'e', 'i', 'o', 'u']; // Сижу в поезде и забыл как будут гласные на английском. . .
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                if (str[i] === letters[j])
                    count++
            }
            // letters.forEach(letter => {
            //     if(str[i] === letter)
            //         count++
            // })
        }
        return count
    }
    console.log(countVowels('Hello World')); // Вывод: 3
}
