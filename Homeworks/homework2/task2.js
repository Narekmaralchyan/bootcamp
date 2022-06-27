//Find the smallest and the largest number from the supplied numeric array,Return an array containing these numbers

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
