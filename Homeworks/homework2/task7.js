//From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.


function numsAndStrings(array){
    let numbers = [];
    let strings = [];

    for(let i=0 ; i < array.length ; i ++){
        if( (typeof array[i]) == "number") numbers.push(array[i])
        else if( (typeof array[i]) == "string" ) strings.push(array[i])
    }
   
}
