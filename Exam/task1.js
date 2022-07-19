//1. Use array methods to turn data into result

let data = [
  ["The","red", "horse"],
  ["Plane","over","the","ocean"],
  ["Chocolate","ice","cream","is","awesome"], 
  ["this","is","a","long","sentence"]
]

function groupeWords(array) {
    return array.map(item=> item.join(" "))
}

// Result
['The red horse', 
'Plane over the ocean', 
'Chocolate ice cream is awesome', 
'this is a long sentence'];
