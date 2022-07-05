// ----------------1) try to implement the same by using Object.defineProperty------------------------

const obj = {name:"narek"};
const obj1  = {}

obj.a = 1;
obj1.a = 1

Object.defineProperty(obj, "a" , {value:1 , writable:true ,enumerable:true , configurable:true})

//console.log( Object.getOwnPropertyDescriptors(obj) );
//console.log( Object.getOwnPropertyDescriptors(obj1));

//---------------2) define a property using Object.defineProperty that is not deletable;--------------
// Solution
let obj2 = {}
Object.defineProperty(obj2 , "name" , {value:"narek",writable:true,enumerable:true})


// 6)Write a function that accepts tree parameters, first, object, second  key name, and the third a value
// check if the given property at object is allowed to be changed then change it, if not just return false;

function check(object,key,value){
    let descriptor = Object.getOwnPropertyDescriptor(object, key)
    
if ( !descriptor.writable || !descriptor.configurable ) return false;
    
else {object[key]= value ;
      return true;
    }
}

//7 return object keys in array
function keys (obj) {
    return Object.keys(obj)
}

//8 return object values  in array
function values(obj){
    return  Object.values(obj)
}

//9create a function that does the same as object.entries


function entries(obj){
    let newArray = []
    for( let key in obj ){
        newArray.push([ key , obj[key] ])
    }
    return newArray;
    
}
//10 Write a function that accepts two objects and compies one into another

function objAdd (obj1 , obj2) {
    let newObj = {}
    Object.assign(newObj , obj1,obj2)
    return newObj;
}

//11 concat method

function concat (arr1 , arr2 ){
    let newArray = [] ;
    arr1.forEach(item=>newArray.push(item)) ;
    arr2.forEach(item=>newArray.push(item)) ;
    return newArray ;
}

//12 copy within

function copyWithin(array, target,start ,end=array.length-1){
    
    if( start < 0) start = start + array.length;
    if(end < 0) end = end + array.length;
    
  
    if(start >= target){
        for(let i = start ,j = target ; i < end ; i++,j++){
            
            array[j] = array[i]
        }
        return array;
    }
    else{
        let temp = []
        for(let i = start ; i < end ; i++){
            temp.push(array[i])
        }
        for(let i=target , j= 0; j<temp.length ; i++,j++){
            array[i] = temp[j];
        }
        return array;
    }
}
//console.log(copyWithin([1,5,4,2,8,9], 2, 0, 4))
//console.log([1,5,4,2,8,9].copyWithin(2, 0, 4))

//13// Implement array.every method // Array.every method

function every( array , callBack){
    let condition = true
    array.forEach((item,index,array)=>{
        if(!callBack(item,index,array)) condition = false;
    })
    if(condition == false)  return false;
    return true;
}

//14write a function that accepts one parameter studentsArray 
//and checks if all the students have gpa higher than 2
const studentsArray = [
    {
        name: 'Armen',
        age: 20,
        gpa: 3,
        grades: [1,50,30,55,88,100]
    },
    {
        name: 'Anna',
        age: 28,
        gpa: 4,
        grades: [1,3,5,7]
    },
    {
       name: 'Kim',
        age: 24,
        gpa: 1,
        grades: [6,88,5,99]
    }
]

function gpaCheck(studentsArray){

    return every(studentsArray , item => item.gpa>2)

}
//15) write a function that accepts students array and returns another array with the following structure;

const structureExample = {
    name: 'Kim', // Whatever students name is
    age: 24, // whatever age is
    gpa: 1, // whatever gpa is
    grades: [6,88,5,99], // whatever the grade is
    averageGrade: 138//  calculated averageGrade for every student please use reduce method
}


const students = [
    {
        name: 'Armen',
        age: 20,
        gpa: 3,
        grades: [1,50,30,55,88,100]
    },
    {
        name: 'Anna',
        age: 28,
        gpa: 4,
        grades: [1,3,5,7]
    },
    {
       name: 'Kim',
        age: 24,
        gpa: 1,
        grades: [6,88,5,99]
    }
]



function average(students){
    /*let newArray = []
    for(let i=0 ; i < students.length ; i++){
        let student = students[i];
        let average = student.grades.reduce((curent,item)=>curent+item)/student.grades.length;
        let newStudent = Object.assign(student)
        newStudent.averageGrade = average;
        newArray.push(newStudent)
    }
    return newArray;*/
    return students.map(student=>{
        let average = student.grades.reduce((curent,item)=>curent+item)/student.grades.length;
        let newStudent = Object.assign(student)
        newStudent.averageGrade = average;
        return newStudent;
    })
}
