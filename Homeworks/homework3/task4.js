/*
4) Deduce the smallest and the largest number from the supplied numeric array. 
Return an array containing these numbers, smallest number first.
   [14, 28, 3, 8, 2] -> [2, 28];
*/

function findMinMax (array){
    let [min,max] = array[0] < array[1] ? [array[0],array[1]] : [array[1], array[0]];
    let newArray = []
    for (let i = 2 ; i < array.length ; i++){
        if(array[i] < min) min = array[i];
        else if(array[i] > max) max = array[i]
    }
    newArray.push(min,max);
    return newArray
}