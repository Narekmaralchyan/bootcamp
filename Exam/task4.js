//4. Groupe by property

let arr = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];

function groupe(arr, prop) {
    return arr.reduce( (aggr,current)=>{
        let itemProp = current[prop];
        if( !aggr[itemProp] ) aggr[itemProp] = [current];
        else aggr[itemProp].push(current);
        return aggr;
    },{})
} 

console.log( groupe(arr, "country") );
//result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// }

