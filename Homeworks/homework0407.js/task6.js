// 6)  If the given input is an array of numbers, return the sum of all the positives ones. 
//If the array is empty or there aren't any positive numbers, return 0.

function sumPositive(array){
    if(Array.isArray(array)){
        return array.filter(item => item>0 ).reduce((agg,item)=>agg+item,0)
    }
    else return new Error("given input must be array")
}

console.log( sumPositive() );
// const input = [ 1, -4, 12, 0, -3, 29, -150];  -> //   42

