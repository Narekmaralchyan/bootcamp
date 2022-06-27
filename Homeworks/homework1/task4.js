/*
Task description: Write a method that returns an object composed of key-value pairs. 
Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
*/

function fromPairs(array){
    let obj = {}
    for(let i = 0 ; i< array.length ; i++){
        obj[array[i][0]] = array[i][1]
    }
    return obj;
}
