/* 
Task description: Write a method that returns a duplicate-free array 
Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
*/

function exist(arr,num){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]==num) return false;
    }
    return true;
}

function unique(array){
    let newArray = []
    for(let i=0 ; i < array.length ; i++){
        if(exist(newArray,array[i])) newArray.push(array[i])
    }
    return newArray;
}
