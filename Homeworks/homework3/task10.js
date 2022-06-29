/*
From the first array, construct a new array based on the indexes supplied.
*     ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];
*/

function indexesBased(array, indexes){
    let newArray = []
    
    for(let i = 0 ; i < indexes.length ; i++){
       let index= indexes[i]
        
        if(array[index]) newArray.push(array[index])
    }

    return newArray;
}