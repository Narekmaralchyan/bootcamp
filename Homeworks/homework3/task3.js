//Find the odd one out in the provided array. 
//All array elements are equal, except one. Your function must return this odd one out. ->
//   ["a", "a", "b", "a"] -> // 'b';

function unique (arr){
    let temp = arr[0]
    let temp1 = arr[1]
    
    for(let i =2 ; i < arr.length ; i++){
      
        if(temp1 == temp ){
            if(arr[i]!=temp)  return arr[i];
        }
        else if(arr[i] == temp) return temp1;
        else return temp;
    }
}