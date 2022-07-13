// 4)

// make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own

const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

function logName(){
    console.log(this.name);
}

const newArr = objArr.map(item=>{
    let newObj = Object.assign({},item);
    newObj.logName = logName;
    return newObj;
})

console.log( newArr , objArr);
