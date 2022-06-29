//Find the value that is not being repeated inside the given array.

function unique(array){
    
    for(let i=0 ; i < array.length ; i++){
        let temp = array[i];
        let count =0;
        for(let  j=0 ; j < array.length ; j++){

            if( array[j] == temp) count++;
        }
        if(count == 1) return temp;
    }
}
