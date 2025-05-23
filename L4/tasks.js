{
    // 1.
    /*
        Ситуация: У вас есть массив чисел, и вы хотите получить новый массив, который будет содержать только положительные числа.
        Условия:​ 
        Создайте массив numbers, который будет содержать следующие числа: [-10, 5, 0, 3, -1, 8, -7].​
        Используя метод ______, создайте новый массив positiveNumbers, который будет содержать только положительные числа из массива numbers.​
        Выведите новый массив positiveNumbers на экран.​
    */
   
   let numbers = [-10, 5, 0, 3, -1, 8, -7]
   let positiveNumbers = numbers.filter((num) => num > 0)
   console.log(positiveNumbers)
}
   
{
    // 2.
    /*
        Ситуация: У вас есть массив имен, и вы хотите создать новый массив, в котором каждое имя будет записано в верхнем регистре.​
        Условия:​
        Создайте массив names, который будет содержать следующие имена: ['alice', 'bob', 'charlie', 'david'].​
        Используя метод ______, создайте новый массив upperCaseNames, который будет содержать имена из массива names, преобразованные в верхний регистр.​
        Выведите новый массив upperCaseNames на экран.​
    */

    let names = ['alice', 'bob', 'charlie', 'david']
    let upperCaseNames = names.map((str) => str.toUpperCase())
    console.log(upperCaseNames)
}

{
    // 3.
    /*
        Ситуация: У вас есть массив чисел, и вам нужно отсортировать его в порядке возрастания.​
        Условия:​
        Создайте массив numbers, который будет содержать следующие числа: [5, 3, 8, 1, 4].​
        Используя метод ______, отсортируйте массив numbers в порядке возрастания.​
        Выведите отсортированный массив на экран.
    */
   
    let numbers = [-10, 5, 0, 3, -1, 8, -7]
    console.log(numbers.sort((a, b) => a - b))
}

{
    // 4.
    /*
        Ситуация: У вас есть массив чисел, и вам нужно вычислить их сумму.​
        Условия:​
        Создайте массив numbers, который будет содержать следующие числа: [10, 20, 30, 40, 50].​
        Используя метод ______, найдите сумму всех чисел в массиве.​
        Выведите сумму на экран.​
    */
    
    let number = [10, 20, 30, 40, 50]
    console.log(number.reduce((sum, current) => sum += current))
}

{
    // 5.
    /*
        Ситуация: Вы разрабатываете приложение для управления ​задачами. Вам нужно создать список дел и реализовать ​несколько функций для работы с ним.​
        Условия:​
        Создайте массив tasks, содержащий три строки, представляющие задачи: "Купить продукты", "Сделать домашнее задание", "Позвонить другу".​
        Выведите длину массива в консоль.​
        Добавьте новую задачу "Убраться в комнате" в конец массива.​
    */
    let tasks = ["Купить продукты", "Сделать домашнее задание", "Позвонить другу"];
    console.log(tasks.length)
    tasks.push("Убраться в команте")
    console.log(tasks)
}

{
    // 6.
    /*
        Ситуация: Вы разрабатываете систему фильтрации сообщений, и вам нужно проверить, содержит ли сообщение какое-либо из запрещённых слов.​
        Условия:​ Создайте массив forbiddenWords, который будет содержать запрещённые слова: ['spam', 'advertisement', 'scam'].​
        Создайте переменную message, в которой будет храниться текст сообщения, например: "This is a spam message".​
        Используя метод ______, проверьте, содержит ли сообщение хотя бы одно из запрещённых слов.​
        Выведите результат на экран: true, если сообщение содержит запрещённое слово, и false в противном случае.​
        Удалите первую задачу из массива.​
        Выведите все оставшиеся задачи на экран.​
    */
    let forbiddenWords = ['spam', 'advertisement', 'scam']
    let message = "This is a spam message"
    console.log(forbiddenWords.some(
        word => message.toLowerCase().includes(word.toLowerCase())
    ))
}