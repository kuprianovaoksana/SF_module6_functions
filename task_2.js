// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.



let value;

function valueGeneration() {
   value = Math.floor(Math.random()*1500);
   console.log(value);
   return value;
}

valueGeneration();

function isNumberSimple (res) {
    for (i = 2; i <= Math.sqrt(res); i++) {
        if (res % i == 0) {
            console.log ("Ваше число не простое");
            return;
        }
    }
    console.log ("Ваше число простое");
    return;
}


if ((value>1)&&(value<1000)) {
    isNumberSimple(value);
}
else if (value<1) {
    valueGeneration();
}
else
{
    console.log ("Данные неверны");
}
