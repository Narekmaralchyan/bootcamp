// 8 )
//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

function occurrences(array){
    let output = {};
    let input = array.flat()

    input.forEach(item => {
        if(!output[item]){
            output[item] = 1;
        }
        else output[item]++;
    });
    return output;
}

const input8 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];

const output8 =   {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
}

console.log(occurrences(input8));
