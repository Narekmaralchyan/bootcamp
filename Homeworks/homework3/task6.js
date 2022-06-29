/*
In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
*    to return only unique values — values that only occur exactly one time within the provided array.
*    [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];
*/
function arrayFromUniques (array){
    let newArray = [];

    for(let i=0 ; i < array.length ; i++){
        let temp = array[i];
        let count =0;
        for(let  j=0 ; j < array.length ; j++){

            if( array[j] == temp) count++;
        }
        if(count == 1) newArray.push(temp)
    }
    return newArray;
}

