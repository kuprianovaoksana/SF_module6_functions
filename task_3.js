// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

let value = 3;
function myfunc (arg1) {    
    return function innerFunc (arg2) {
        return arg1 + arg2;
    }
}
console.log(myfunc(value)(value));
