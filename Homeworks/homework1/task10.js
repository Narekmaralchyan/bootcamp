/*
 Task description: Write a method that turns a deep array into a plain array 
 Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5] 
*/


function flat(array,newArray = []){

    for(let i =0 ; i < array.length ; i++){
        if( !Array.isArray(array[i])) newArray.push(array[i]);
        else flat(array[i],newArray)
    }
    return newArray;
}

console.log(flat([1, 2, [3, 4, [5]]]))