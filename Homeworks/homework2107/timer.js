/* function Timer(time) {
    
}

let timer1 = new Timer(3901); //=> 1 : 05 : 01;
timer1.start();
timer1.stop();
timer1.reset();
timer1.pause();
timer1.restart(); */

function Timer(time) {
    this.time = time;
    this.timeForRestart = time;
    this.timerId;
    this.timer = function () {
        return () => {
            if (this.time == 1) clearInterval(this.timerId)
            console.log(--this.time);
        }
    }

    this.start = function () {
        if (this.time > 0) this.timerId = setInterval(this.timer(), 1000)
    }

    this.stop = () => {
        clearInterval(this.timerId); //function declaration ov chi ashxatum
        this.time = 0;
    }

    this.pause = () => {
        clearInterval(this.timerId);
        //console.log(this.time, "mnacac jamnaky");

    }

    this.reset = this.start;

    this.restart = () => {
        clearInterval(this.timerId);
        this.time = this.timeForRestart;
        this.start()
    }

}

let timer1 = new Timer(5)
