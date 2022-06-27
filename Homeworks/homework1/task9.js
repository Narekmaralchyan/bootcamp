/*
Write a function that finds the first 3 "Happy" numbers 
(p.s  number is happy if the sum of the dividers(not including the number itself)
 is equal to the number itself i.e 6 = 1 + 2 + 3,  28 = 1 + 2 + 4 + 7 + 14).
*/


function happy(num){
    let sumOfDividers =0;

    for(let i=1 ; i <= num/2; i++){
        if( num % i == 0 ) sumOfDividers += i;
    }
    if (sumOfDividers == num) return true;
    else return false;
}
