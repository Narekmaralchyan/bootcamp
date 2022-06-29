//This one is a classic. Simply reverse the string without using reverse(). 'abcd' -> 'dcba';

function reverse (string){
    let rev = "";
    for( let i=string.length-1 ; i >= 0; i-- ){
        rev += string[i]
    }

    return rev;
}