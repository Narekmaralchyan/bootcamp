//Write a function to return only unique values of the given array. 

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