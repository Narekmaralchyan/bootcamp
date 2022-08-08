//git init
//git checkout [branch_name]
//git checkout -b [branch_name]
//git checkout [commit_hash]
//git status
//git add . 
//git commit -m"commit message"
//git push origin [branch name]
//git push
//git pull origin [branch name]
//git pull
//git remote -v
//git remote add [origin] [repoURL]
//git workflow
//git clone [repo urel]


//distracturing
let obj = {
    name:"narek",
    age:23,
    info:{
        adress:"yerevan"
    }
}
const { name , info:{adress} } = obj;
//console.log(name,adress);

//const {name:otherName} = obj; name y jnjum e u stexcum othername popoxakany

let arr1 = [1,2,3,] 
let arr2 = [4,5,6]

let arr3 = [...arr1 , ...arr2]


// ... obj ====>>Object.assign()

const {password , ...rest} = obj; //resty  obyekt e aranc passwordi;

let colors = {
    green: [{ name: 'Sargis' }, { name: 'Ani'}, { name: 'Zaven' }],
    red: [{ name: 'Hayk' }, { name: 'Anna'}, { name: 'Suren' }],
    yellow: [{ name: 'Vahe' }, { name: 'Arman'}, { name: 'Narek' }],
 };

 let result = Object.keys(colors).reduce((current, item,) => { // 'green' // 'red' // 'yellow'
    let row = colors[item].map(element => {
        element.team = item;
        return element;
    });
    //console.log(row, 'result =', [...current, ...row]);
    return [...current, ...row];
}, []);

console.log(result);
console.log(colors);