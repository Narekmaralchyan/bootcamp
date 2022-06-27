/* 
Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
*/

function clearArray(array){
    let newArr = []
    for(let i=0 ; i<array.length ; i++){
        if(!!array[i]) {
            if(newArr.length!=0) newArr[newArr.length]=array[i];
            else newArr[0] = array[i]
        }
    }
    return newArr;
}

