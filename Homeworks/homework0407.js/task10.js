// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

function thirth(array){

    let obj = {}

    array.forEach(item => {
        if(!obj[item]){
            obj[item] = 1;
        }
        else obj[item]++;
    });

    let arr = Object.entries(obj)
    let max = [0,-Infinity]
    let sec = [0,-Infinity]
    let min = [0,-Infinity]

    arr.forEach(item=>{
        let count = item[1];
        if(count>max[1]){
            min = sec;
            sec =max;
            max= item;
        }
        else if(count>sec[1]){
            min=sec;
            sec= item
        }
        else if(count >min[1]) min=item
    })
    return min[0]
}

