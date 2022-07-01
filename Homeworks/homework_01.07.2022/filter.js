function filter (array , callBack) {
    let newArray = []

    array.forEach(function(item ,index , array) {
        let temp = callBack(item , index ,array)
        if( temp ) newArray.push(item);
    })

    return newArray;
}

