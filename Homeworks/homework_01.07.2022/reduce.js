function reduce (array , callBack , init){

    let [current,i] = init ? [init,0] : [array[0],1]

        for( ; i < array.length ; i++){
            let item = array[i];
            current = callBack(current, item)
        }
   
    return current;
}
