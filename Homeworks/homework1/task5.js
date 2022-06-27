/*
Task description: Write a method that returns an array without listed values 
Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
*/

function without(array,num1,num2){
    let newArray = []
    for(let i=0 ; i < array.length ; i++ )
        {
            if(array[i]!=num1 && array[i]!=num2) {
                if(newArray.length!=0) newArray[newArray.length]=array[i];
                else newArray[0] = array[i]
            }
        }
    return newArray;
}

