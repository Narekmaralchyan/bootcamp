// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object
///

function referanceObject(array){
    let newArray = []
    newArray = array.map(item=>{
        let newObj = {}
        Object.assign(newObj,item)
        newObj.name = newObj.name.toUpperCase();
        newObj.country = phoneCountryCodes[ newObj.phoneNumber.substring(0,4) ]
        return newObj
    })
    for(let i= 0 ; i < newArray.length ; i++){
        let obj = newArray[i]
        for(let j = 0 ; j < newArray.length ; j++){
            if(obj.relation == newArray[j].name.toLowerCase()){
                obj.relation = newArray[j]
            }
        }
    }
    return newArray;
}

const phoneCountryCodes = {
    '+374': 'Armenia',
    '+375': 'Somali',
    '+376': 'Russia',
    '+377': 'Hoktemberyan',
}

const arrOfObjects = [

    {
        name: 'sarah',
        age: 32,
        phoneNumber: '+374000000',
        relation: 'nelly'
    },
    {
        name: 'nelly',
        age: 11,
        phoneNumber: '+3750020000',
        relation: 'sarah'
    }
];


// You will need to return


const result = [

    {
        name: 'SARAH',
        age: 32,
        phoneNumber: '+374000000',
        country: 'Armenia',
        relation: referancetoSarahObject,
    },
    {
        name: 'NELLY',
        age: 11,
        phoneNumber: '+3750020000',
        country: 'Somali',
        relation: referanceToNellyObject,

    }
];

