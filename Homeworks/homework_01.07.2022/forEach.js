function forEach(array,callBack){
    
    for(let i = 0 ; i < array.length ; i++){
       
        let item = array[i];
        callBack(item , i , array);
    }
}