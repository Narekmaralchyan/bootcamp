/*
Write a function that checks if the number is palindrome(121, 23432),
 don't use strings, and work with numbers. 
*/



function isPolindrom(num){
    let array = []
    
    while(num!=0){
        array[array.length]=num%10
        num =  Math.trunc(num/10)
    }
    for(let i = 0 ; i< array.length/2 ; i++){
        if(array[i]!=array[array.length-i-1]) return false;
    }
    return true
}
