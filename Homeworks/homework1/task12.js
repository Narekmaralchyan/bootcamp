/*
Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
*/

function exist (array,value){
    for( let i=0 ; i <array.length ; i++){
        if(array[i]==value) return true
    }
    return false;
}

function existInArrays (array,value){
    for(let i = 1; i<array.length ; i++){
        if(!exist(array[i],value)) return false
    }
    return true
}

function intersection (...arrays) {
    let newArray = []
    for(let i =0 ; i < arrays[0].length ; i++){
        let temp = arrays[0][i]
        if(existInArrays(arrays,temp)) newArray.push(temp)
    }
    return newArray;
}