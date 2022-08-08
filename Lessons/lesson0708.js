function foo(temp){
    return new Promise((resolve,reject)=>{
        if(typeof temp != "boolean"){
            reject('Wrong parameter is passed! Ask her again.')
        }
        if(temp == true) resolve('Hooray!!! She said "Yes"!');
        else if (temp == false) resolve("'Oh no, she said NO")
    })
}


function mapPromise(promis,mapper){
    return  promis.then(res=>mapper(res))
                  .catch(err=>console.log(err))

}


function squarePromise(promise){
    promise.then(res=>{
        if(typeof res == "number") return res*res;
        else if(typeof res == "string") throw new Error("Cannot convert 'asdf' to a number!")
    })
    .catch(err=>console.log(err))
}
