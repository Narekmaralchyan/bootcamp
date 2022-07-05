// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.


function foo(str,words){
    let temp = ""
    for(let i=0 ; i < words.length ; i++){
        temp += words[i];
        if(temp == str) return true;
    }
    return false;

}
console.log(foo("iloveleetcode",["i","love","leetcode","apples"]));