let myArray = [1, 2, 3, 4, 5, 'word', null, 0 , , undefined, false];

let evenNumber = 0;
let oddNumber = 0;
let nullElement = 0;

function elementCounter()
{
    myArray.forEach(function(item, i, myArray){

        if ((typeof(item) === "number")&&((item % 2)==0)&&(item!=0)){
            evenNumber += 1;
        }
        else if (item===0) { 
            nullElement += 1;
        }
        else if((typeof(item) === "number")&&((item % 2)!==0)&&(item!=0)) {
            oddNumber += 1;
        }
    });
    console.log(`Количество четных элементов - ${evenNumber}, Количество нечетных элементов - ${oddNumber}, Количество нулевых элементов - ${nullElement}`);
}

elementCounter();
