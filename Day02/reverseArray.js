/*
Reverse the array using push and pop
a b c d -> d c b a
*/

let arr = ['a', 'b', 'c', 'd'];
let reversedArr = [];

while (arr.length > 0) {
  reversedArr.push(arr.pop());  
}

console.log(reversedArr);  
