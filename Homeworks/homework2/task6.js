/*
Write a function that accepts 2 array arguments and returns a boolean value - 
Does the first array contain all elements represented in the second array.

*/

function allElemsInFirstArr (arr1, arr2) {
    let contain = false
    for( let i = 0 ; i < arr2.length ; i++) {
        let temp = arr2[i] ;
        for(let j = 0 ; j < arr1.length ; j++){
            if(temp == arr1[j]) {contain = true ; break }
        }
        if(contain == false) return false;
        contain = false
    }
    return true;

}