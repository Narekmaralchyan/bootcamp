//Write a function to return only unique values of the given array. 

function arrayFromUniques (array){
    let newArray = [];

    for(let i=0 ; i < array.length ; i++){
        let temp = array[i]
        for(let  j=0 ; j < array.length ; j++){
            if(j==i) continue;
            if(array[j]==temp) break;
            if(j==array.length-1) newArray.push(temp);
        }
    }
    return newArray;
}

