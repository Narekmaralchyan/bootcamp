
function imageProcessing(cb){
    setTimeout( () => {
        // processing
        let result = 1;
        cb(null, result);
    } )
}


function  foo(){
    return new Promise((resolve, reject)=>{
        imageProcessing((err, result) => {
            if (err){
                reject(err)
            }
            resolve(result)
        });
    })

}


const result = foo();