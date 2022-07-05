// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(item=>{
        return (item[0].toUpperCase() + item.substring(1).toLowerCase())
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"

