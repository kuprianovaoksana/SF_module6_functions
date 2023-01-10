// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).



// если число задано
let value1 = 5;
let value2 = 7;

// Если число вводит пользователь
// let value1 = +prompt ("Введите первое число");
// let value2 = +prompt ("Введите второе число");

// if (isNaN(value1)===true)
//   {
//     value1 = +prompt ("Введите первое число");
//   }
// else if (isNaN(value2)===true) {
//   value1 = +prompt ("Введите первое число");
// }
// else if (value1>=value2) {
//   value2 = +prompt ("Второе число должно быть больше первого. Введите второе число.");
// }


const sum = function(a, b) {
    let chislo = a;
    while (chislo <= b) {
        console.log(chislo); 
        chislo += 1;
    }
    return;
}


const intervalId = setInterval(sum, 1000, value1, value2);

const timeroutId = setTimeout(function (){
    clearInterval(intervalId);
}, 4000);



