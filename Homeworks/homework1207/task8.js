// 8)

// Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// added as properties when the Song constructor function is used. The Song function should also have a method called
// play When called, the play function should console.log the name of that specific song preceded by the
// word 'Playing:'.
// NOTE that play function should be the same for all instances of the Song constructor

function Song (title , artist){

    this.title = title;
    this.artist = artist ; 
    this.play = function (){
        console.log(`Playing ${this.title}`);
    }
}

let song1 = new Song("billie jean","michael jackson")

song1.play()