/*
 Write a method that splits an array into parts of determined size 
  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]] 
*/

function split(array,num) {
    let newArray = [];
    let temp = [];
    for( let i = 0 ; i < array.length ; i++ ){
        
        if( temp.length < num ) temp.push(array[i]);
        else {
            
            newArray.push(temp);
            temp = [];
            temp.push(array[i])
        }
    }
    newArray.push(temp)
    return newArray;
}

