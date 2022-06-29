/*
Write a function to accept two arrays. Does the first array contain all elements represented in the second array?
    arr1 ["monday", "tuesday"], arr2 ["tuesday",5] -> false;
*/

function allElemsInFirstArr (arr1, arr2) {
    
    for( let i = 0 ; i < arr2.length ; i++) {
        let contain = false
        let temp = arr2[i] ;
        for(let j = 0 ; j < arr1.length ; j++){
            if(temp == arr1[j]) {contain = true ; break }
        }
        if(contain == false) return false;
        
    }
    return true;

}