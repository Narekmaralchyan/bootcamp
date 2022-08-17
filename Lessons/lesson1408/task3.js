// 3) Implement the trackIteration function so that it tracks and checks to see when the job is finished and
// Logs that job is finished, so if the job is not finished yet just console.log("job not finished yet");


let jobFinished = false;
let counter = 1000;

function trackIteration(){
    let intervalId = setInterval(() => {
        if(jobFinished == true) {
            clearInterval(intervalId)
             console.log("job finished");
        }
        else{
            console.log("job not finished yet");
        }
    }, 1000);
}

function Iteration() {
    for (let i = 1000; i <= 9000; i += 1000){
       const id = setTimeout( () => {
           counter += 1000;
           if (counter === 10000){
               jobFinished = true;
           }
    clearTimeout(id);
       }, i);
    }
}

trackIteration();
Iteration();