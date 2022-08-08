/* Write an Airplane constructor that initializes name from an argument.
● All airplanes built with Airplane should initialize with an isFlying of false.
● Give airplanes the ability to .takeOff() and .land():
○ If a plane takes off, its isFlying property is set to true.
○ If a plane lands, its isFlying property is set to false. */

/* function Airplane(name) {
    this.name = name;
    this.isFlying = false;

}
Airplane.prototype.takeOff = function () {
    this.isFlying = true;
}
Airplane.prototype.land = function () {
    this.isFlying = false
}


class Airplane{

    constructor(name){
        this.name = name;
        this.isFlying = false
    }
    takeOff () {
        this.isFlying = true;
    }
    land () {
        this.isFlying = false
    }
} */

/* class Person {
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    compareAge(obj){
        if(obj === this) throw new Error("SAME OBJ")

        if(this.age > obj.age) return `${obj.name} is younger than   me.`;
        else if(this.age == obj.age) return `${obj.name}  the same age as   me.`;
        else return `${obj.name} is odler than   me.`;
    }
} */





/* The Pagination class will accept 2 parameters:
● items (default: []): An array of contents to paginate.
● pageSize (default: 10): The amount of items to show in each page.
So for example we could initialize our pagination like this: */

class Pagination{
    /*
     constructor(items= [],pageSize = 10){
        this.items =[];
        for(let i = 0 ; items.length ; i= i+pageSize){
            this.items.push(items.slice(i,i+pageSize))   
           }

        this.pageSize =pageSize;
    }
    */
    #start = 0;
    constructor(items= [],pageSize = 10){
        this.items = items;
        
        this.pageSize =pageSize;
    }
    getVisiableItems(){
        return this.items.slice(this.#start,this.#start+this.pageSize)
    }
    nextPage(){
        this.#start += this.pageSize;
    }
    prevPage(){
        this.#start -= this.pageSize 
    }
    firstPage(){
        this.#start = 0
    }
    lastPage(){
        while(this.#start < this.items.length){
            this.#start += this.pageSize
        }
        this.#start -= this.pageSize 
    }
    goToPage(num){
        this.#start = this.pageSize * (num-1)
    }

}



/* 
class Jungle {
    constructor(...args){
        this.animals = [...args]
    }
    
    soundOff(){
        this.animals.forEach(item=>{
            item.makeSound();
            console.log(item.energy);
        })
    }
}

class Animal{
    energy = 10;
    makeSound(){
        this.energy -= 3;
    }
    eatFood(){
        this.energy += 5;
    }
    sleep(){
        this.energy += 10
    }
}

class Food{

}

class Tiger extends Animal {
    sleep(){
        this.energy += 15;
    }
    eatFood(food){
        if(food.constructor.name == "Grain"){
        console.log("i cant eat that");}
        else this.energy += 5;
    }

}

class Monkey extends Animal {
    eatFood(){
        this.energy += 2;
    }
    makeSound(){
        this.energy -= 4 ;
    }
    play(){
        if(this.energy >= 8){
        console.log("Oooo Oooo");
        this.energy -= 8;}
        else console.log("I'm too tired");
    }
}

class Snake extends Animal {

}

class Fish extends Food {

}

class Grain extends Food {

}

class Meat extends Food  {

} */



