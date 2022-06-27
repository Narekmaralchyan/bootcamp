/*
From the given array of numbers create two arrays 
one containing only odd and the other only even numbers.
*/

function oddEven(array){
    let oddArray = []
    let evenArray = []

    for(let i=0; i<array.length ; i ++){
        if(array[i]%2==0) evenArray.push(array[i]);
        else oddArray.push(array[i])
    }
}