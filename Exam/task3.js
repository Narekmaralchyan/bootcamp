//3. Remove duplicates in an array.

//change array

let  dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];
function removeDups(arr) {
	for(let i = 0 ; i < arr.length ; i++){
        let temp = arr[i];
        for(let j= i+1 ; j < arr.length ; j++){
            if(arr[j]===temp) arr.splice(j,1);
        }
    }
};

removeDups(dupes)
console.log(dupes);
//result => [1,2,3,’a’, ‘f’, 4, ‘d’];


//return new Array

function removeDups1(arr) {
	let newArray = [];
    arr.forEach(item=>{
        if( !newArray.includes(item) ) newArray.push(item)
    })
    return newArray;
};

