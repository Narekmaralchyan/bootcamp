function User(name,surname){ // create {} =>this
    this.name = name;
    this.surname = surname;
    return 1;  //new operator ignore return if return doesnt object;
};

let user =new User("narek", "maralchyan")

console.log(user);


//new.target
/*
User constructor with new.target
function User3(name, surname) { // creates {} => this
    console.log('is with new', new.target);
    if(new.target) {
        console.log('if');
        this.name = name;
        this.surname = surname;
    } else {
        console.log('Else');
        return new User3(name, surname);
    }
};*/


/*------ 1 object wit constructor
let users = [{name: 'Ani', id: '2345678'}];
let statuses = [{id: '2345678', status: 'married'}];
*/

//this dynamic scope ,payman. functioni kanchi texov

//call ,aply, bind;
//[...3]???


////this

//arrow functioni thisy ayn function ithisn e vortex inqy sahmanvele

//This and bindings
// Bindings
// Explicit(Hard) foo.call({ name: 'aaaaaaaa' }); binded();
// Implicit
// New
// Default

function foo() {
    console.log(this);
};

let obj = {
    name: 'asdfsafd',
    foo: foo, //ref to foo,
    doo: function() {
        console.log(this, 'doo this');
        foo();
    }
};

let binded = foo.bind({ name: 'bind' });

obj.doo();



function foo() {
    console.log(this, 'layer 1');
    function doo() {
        
      console.log(this, 'layer 2');
        
      const arrow = () => {
         console.log(this, 'arrow')
      }
      arrow();  
    
    }
    doo();
};

obj.third() // obj // window // window