/* Create an object and methods to support the following functionality 
const obj = {}; 


// Your code to add methods

obj.setName(‘John’);  
console.log(obj.getName()); // Should log ‘John’ */
const obj = {
    setName (name){
        this.name = name
    },
    getName (){
        return this.name
    }
}


