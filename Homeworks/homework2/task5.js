//Create a function that accepts 2 arrays of words and returns the common words from each.

function commonWords (arr1 , arr2){
    let newArray = []
    for( let i = 0 ; i < arr1.length ; i++)
    {
        let temp = arr1[i];
        for(let j = 0 ; j < arr2.length ; j++){
            if(arr2[j]==temp) newArray.push(temp)
        }
    }
    return newArray;
}
