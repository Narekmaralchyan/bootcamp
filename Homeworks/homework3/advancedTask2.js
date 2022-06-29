/*
grel funkcia vore kstana vorpes argument array kazmvac 4 hat tvic orinak [1,2,3,4]
* kveradardzni object vore kunena erku hat key voronq klinen hamapatasxanabar
*  arrayum gtnvox tveric 4 ic 3 i amenapoqr gumare ev nayev amenamec gumare
*
*
* ORINAK [1,2,3,4] i  depqum kveradardzni  object { max: 9, min : 6 }
* qani vor tveric amenamecere tvyal depqum 2+3+4 = 9 isk amenapoqere irar gumareluc
* kstacvi 1+2+3 = 6;
* */

function minMax (array){
    let obj = {}
    let sum = array[0];
    let min = array[0]
    let max = array[0]
    
    for( let i = 1 ; i < array.length ; i++){
        if(array[i] < min ) min = array [i];
        else if( array[i]>max) max = array[i]

        sum += array [i]
    }

    obj.max = sum - min;
    obj.min = sum - max;
    
    return obj;
    
}

