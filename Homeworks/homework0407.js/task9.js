// 9)

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times

function majority(array){

    for(let i = 0 ; i < array.length ; i++){
        let count = 0;
        let item =array[i];
        for(let j=0; j<array.length ; j++){
            if(array[j] == item) count++;
        }
        if(count >= array.length / 2) return item;
    }
}