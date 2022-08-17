// 2)  implement the same using Constructor function

class Customer {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    answerCall() {
        console.log(`phone with phoneNumber${this.phoneNumber} answered!`);
    }

    static detectOperator (object) {
        const code = object.phoneNumber.slice(0,3)
        return operatorCodes[code];
    }

}

var operatorCodes = {
    '098' : 'viva',
    '095': 'uCom',
}

function Customer1 (phoneNumber){
    this.phoneNumber = phoneNumber;
}

Customer1.detectOperator = function(object) {
    const code = object.phoneNumber.slice(0,3)
    return operatorCodes[code];
}

Customer1.prototype.answerCall = function() {
    console.log(`phone with phoneNumber${this.phoneNumber} answered!`);
}