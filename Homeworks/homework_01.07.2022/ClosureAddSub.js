function generator(){
    let count = 0;
    return function(operator){
    if (operator=="add") return ()=>++count;
    else if(operator == "sub") return ()=>--count;
    }
}

let gen = generator()
let add = gen("add")
let sub = gen("sub")

console.log(add());
console.log(sub());
console.log(sub());
console.log(sub());
console.log(sub());
console.log(add());
