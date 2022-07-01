
function map(array , callBack){

    const newArray = [];

    array.forEach( function(item, index , array){
        newArray.push(callBack(item , index , array))
    })

    return newArray ;
}

