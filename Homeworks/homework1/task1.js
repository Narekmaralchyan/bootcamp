/*
Task description: Write a method that creates a new array with given values 
Expected Result: (3, 'a') => ['a', 'a', 'a']  
*/

function newArray(count,value) {
    let newArr = []
    for(let i=0 ; i < count ; i++){
        newArr[i] = value;
    }
    return newArr;
}

