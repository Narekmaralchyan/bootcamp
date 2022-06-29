/*
The supplied array will contain both numeric and non-numeric characters.
*    Return a new array where all numeric values are positioned at the beginning of the array,
*    ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]
*/

function numericInStart(array){
    let newArray = [];

    for ( let i = 0 ; i < array.length ; i++){
        if((typeof array[i]) == "number") newArray.unshift(array[i])
        else newArray.push(array[i]);
    }

    return newArray
}

