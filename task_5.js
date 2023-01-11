// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

let firstNum = 7;
let secNum = 2;


const calcExponentiate = (x, n) => {
    
    if((Number.isInteger(x)===true)&&(Number.isInteger(n)===true)&&(x!=0)&&(n!=0)) {
        return x**n;
    }

    else {
        return "Исходные данные не соответствуют задаче";
    }
    
}
console.log(calcExponentiate(firstNum, secNum));



// тестирование

let testArrayFirstNum = [1, 2, 3, "123", 0, , 3.2, 5];
let testArraySecNum = [1, 2, 3, "123", 0, , 3.2];

for (let i=0; i<testArrayFirstNum.length; i++ ) {
    for (let j=0; j<testArraySecNum.length; j++ ) {
    let exponentiateResult = calcExponentiate(testArrayFirstNum[i], testArraySecNum[j]);
    console.log(`РЕЗУЛЬТАТ: ${testArrayFirstNum[i]} в степени ${testArraySecNum[j]} равно -  ${exponentiateResult}`);
    }
}
   

