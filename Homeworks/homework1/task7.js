/*
Task description: 
Write a method that makes a shallow compare of two arrays and returns true if they are identical. 
*/

function isEqual(arr1 , arr2 ) {
    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}