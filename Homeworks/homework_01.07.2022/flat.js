//flat with for loop
function flat (array,depth){
    let newArray = []
    if(depth == 1 || !depth )
    return newArray.concat(...array);
    newArray = array
    while(depth != 0){
        newArray = [].concat(...newArray)
        depth --;
    }
    return newArray;
}



//flat with recursion
function flatRecurion (array,depth){
    let newArray = []
    if(depth == 1 || !depth )
    return newArray.concat(...array);
    newArray = [].concat(...array)
    return flat(newArray,depth-1)
   
}

let array = [1,2,[3,4,[5,6,[7,8]]]] ;
let arr = flat(array,2)
console.log(arr);