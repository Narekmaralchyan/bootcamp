// 7) Find the difference in age between the oldest and youngest family members,
// and return their respective ages and the age difference.

function ageDiference(array){
    let min =array[0].age
    let max = array[0].age
    array.forEach(item => {
        if(item.age > max) max = item.age;
        else if(item.age < min) min =item.age
    })
    return [min,max , max-min]

}
const input7 = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];
console.log(ageDiference(input7)  );
// Output ->  [13, 67, 54];
