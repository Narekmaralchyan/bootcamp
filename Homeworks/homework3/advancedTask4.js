/*trvats e qarakusi maric vore baxkacac e tveric
* petk e aj ankyunagcov hamapatasxanabar tvere gumarel irar
*
*               1 2 3
*               4 5 6
*               7 8 9
*
*   ays depqum aj ankyunagic e hamarvum 1 > 5 > 9;
*
*   kstacvi 15
*
*   foo([1,2,3,4,5,6,7,8,9]) petk e het veradardzni ->  15
*
*   xndrumem nkatel vor matric e kara lini tarber length i bayc misht qarakusi
*
*
*   1 2 3 4
*   5 6 7 8
*   9 10 11 12
*   13 14 15 16
*/

function matric ( array ){
    let side = Math.sqrt(array.length)

    let sum =0 ;
    for(let i = 0 ; i < array.length; i=i+1+side ){
        sum += array[i]
    }

    return sum ;
}
