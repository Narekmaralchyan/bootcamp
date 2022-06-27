// For the given list of payments do the following exercises:

const payments = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe", // Name of the student
      payedAmount: 1600, // Amount payed with this transaction
      year: 2020, // The payment year
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1500,
      year: 2021
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1400,
      year: 2022
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1300,
      year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1500,
        year: 2020
      },
      {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
      },
      {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
      },
      {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1200,
        year: 2023
      }
     ];
     
//8.  Find the max payment 
function maxPayment(payments){
    let max = 0;
    for( let i = 0 ; i < payments.length ; i++ ){
        let student = payments[i]
        if(student.payedAmount > max) max = student.payedAmount
    }
    return max;
} 

//9.  Calculate the sum of all payments
function sumOfPayments(payments){
    let sum = 0;
    for( let i = 0 ; i < payments.length ; i++ ){
        let student = payments[i]
        sum += student.payedAmount
    }
    return sum
}

//Find the count of all payments that are more than 1500
function moreThan1500 (payments){
    let count = 0;
    for( let i = 0 ; i < payments.length ; i++ ){
        let student = payments[i]
        if(student.payedAmount > 1500) count++;
    }
    return count;
}

//Calculate the average of all payments
function average (payments){
    let sum = 0;
    let average = 0; 
    for( let i = 0 ; i < payments.length ; i++ ){
        let student = payments[i]
        sum += student.payedAmount;
    }
     return sum / payments.length
}

/*
* Calculate the total sum of payment amounts made by each student.
 We need to return an array that contains a list of information about students, 
 including the total paid amount by the student.
*/

function information (payments){
    let info = {};
    for ( let i = 0 ; i < payments.length ; i++){
        let current = payments[i]
        if(!info[current.studentId]){
            info[current.studentId] ={
                name:current.studentName,
                payment:current.payedAmount
            }
        }
        else {
            info[current.studentId].payment += current.payedAmount
        }
    }
    
    return(Object.values(info))
}
