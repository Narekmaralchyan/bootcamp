/*grel funkciya vore kndhuni vorpes argument array vortex klini tver voronq bolore kkrknven erku 
 angam baci mi hatic
* Petka gtnel er veradardznel ayd chkrknvox tive
* ORINAK [1,2,2,1,3,4,4,3,5] i  depqum kveradardzni 5 qani vor 5 e chi krknvum;
* */

function findUniqueValue (array){

    for(let i=0 ; i < array.length ; i++){
        let temp = array[i]
        for(let  j=0 ; j < array.length ; j++){
            if(j==array.length-1) return temp;
            if(j==i) continue;
            if(array[j]==temp) break; } }
        }