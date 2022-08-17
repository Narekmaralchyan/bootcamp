class CustomPromise{
    constructor(callback) {
        callback(resolve,reject)

        const resolve = data =>{
             queueMicrotask(()=>{
                 const thenResult = this.thenCallbackfunction(data)
                 if(typeof  thenResult.then == "function") {
                     return thenResult;
                 }
                 else {
                     return new CustomPromise(thenResult)
                 }

             })
        }

        const reject = error => {
            queueMicrotask(() => {
                this.catchCallbackfunction(error)
            })
        }
    }
    then(thenCallback){
        this.thenCallbackfunction = thenCallback;

    }
    catch(catchCallback){
        this.catchCallbackfunction = catchCallback;
    }
}



