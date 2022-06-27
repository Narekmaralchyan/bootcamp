//Find the value that is not being repeated inside the given array.

function unique(array){
    
    for(let i=0 ; i < array.length ; i++){
        let temp = array[i]
        for(let  j=0 ; j < array.length ; j++){
            if(j==i) continue;
            if(array[j]==temp) break;
            if(j==array.length-1) return temp;
        }
       
    }
}
