function reduce (array , callBack , init){

    let current ;
    if( init !== undefined) {
        current = init ;
        for( let i = 0 ; i < array.length ; i++){
            let item = array[i];
            current = callBack(current, item)
        }
    }
    else {
        current = array[0]
        for( let i = 1 ; i < array.length ; i ++){
            let item = array[i]
            current = callBack(current , item)
        }
    }
    
    return current;
}

