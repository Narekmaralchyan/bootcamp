//2. Create a constructor function to produce calculator instances (+,-,*,? operations).

function Calculator() {
     return function(op1 , op2 , operator ){
        switch(operator){
            case '+': return op1 + op2;
            case '-':return op1 - op2;
            case '*':return op1 * op2;
            case '/': return op1 / op2
        }
     }
}

let calc = new Calculator();
console.log(calc(1,2, '+')) 
//calc(3,4, -) => -1
