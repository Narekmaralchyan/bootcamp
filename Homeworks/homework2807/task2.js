/* Create an object and methods to support the following functionality 
const obj = {}; 


// Your code to add methods

obj.setSum(10);  
obj.add(20);  
console.log(obj.geSum()); // Should log 30, 10 + 20 = 30
obj.setSum(100);
console.log(obj.geSum()); // Should log 100,  the sum was set to 100
 */

const obj = {
    setSum (num){
        this.sum = num
    } ,
    add(num){
        if(obj.sum) this.sum += num;
        else this.sum = num;
    },
    getSum(){
        return this.sum
    }
}