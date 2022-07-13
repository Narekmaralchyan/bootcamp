// 5

// use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;


const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

function logArrayObjectNames(){
    console.log(this.name);
}

arrayOfObjectNames.forEach(item=>logArrayObjectNames.call(item))
