/*
 Write a function to separate a single array in to two separate arrays.
     The supplied array will only contain numeric values. Your function should output two arrays:
     one containing odd numbers, the other containing even numbers.
*/

function oddEven(array){
    let oddArray = []
    let evenArray = []

    for(let i=0; i<array.length ; i ++){
        if(array[i]%2==0) evenArray.push(array[i]);
        else oddArray.push(array[i])
    }
}