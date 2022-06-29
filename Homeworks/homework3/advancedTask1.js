/*
* grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e
* strings myuse lookups vore kveradardzni array vorum nerarvats klnien te lookup arrayi miji andamneric
* amen meke qani angam ka strings array um
*
* orinak
*
* const lookup = ['i', 'love', 'sadakhlo', 'esminich']
* const strings = ['i', 'i', 'sadakhlo', 'i'];
* foo(lookup, strings)  kveradardzni [3, 0, 1, 0]
* */

function count (strings, lookups ){
    let newArray = [];

    for(let i= 0 ; i < lookups.length ; i++ ){
        let count = 0;
        let temp = lookups[i];
        for( let j=0; j < strings.length ; j++){
            if(strings[j]== temp) count ++;
        }
        newArray.push(count)
    }
    return newArray;
}
