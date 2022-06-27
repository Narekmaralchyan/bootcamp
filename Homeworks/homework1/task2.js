/*
Task description: Write a method that reverts input array 
Expected Result: [1, 2, 3] => [3, 2, 1] 
*/

function reverse(array){
    let temp;
    for(let i=0 ; i <array.length / 2 ; i++){
        temp = array[i]
        array[i] = array[array.length-i-1]
        array[array.length-i-1] = temp
    }
}
