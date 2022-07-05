// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map(item => String(item))
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
