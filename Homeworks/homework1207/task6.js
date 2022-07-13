// 6) for above mentioned arrayOfObjectNames Return an array of functions
// that when called would log each objects name
// use Array.map and logArrayObjectNames function
const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

const mappedFunc = arrayOfObjectNames.map( (item) => {
    return function(){
        console.log(item.name);
    }
} );

mappedFunc.forEach(i => i()); // this would print 1, 2, 