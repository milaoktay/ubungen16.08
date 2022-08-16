//    "§$%&/()=?{}<>:;,.-_!"

// Mini Amazon
//                 0         1        2
const items = ["Apple", "Banana", "Water"];
const prises = [22, 12, 11];
// index
// i = i + 1
// i += 1
for (let i = 0; i < items.length; i++) {
  console.log(`
  --------------------------
    Item: ${items[i]}
    Prise: ${prises[i]}
   Add to cart + 
   ------------------------`);
}

// "-------------------------- /n" +
//   " Item:" +
//   items[i] +
//   "/n" +
//   "Prise:" +
//   prises[i] +
//   "/n" +
//   " Add to cart + /n" +
//   "------------------------";

// KISS
// Keep it super simple

// One is not like the others
// Create a function
// that takes an array of numbers
// and return the number that’s unique.

// Examples:

// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// unique([3, 3, 3, 7, 3, 3]) ➞ 7

// One is not like the others
function unique(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) return arr[i];
}
console.log(unique([0, 0, 3, 1, 2, 1, 1, 1, 1, 1]));
console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));

// The Greater Numbers
// Create a function
// which accepts two arguments:
// the first argument being an array of numbers,
// and the second argument being a number.
//The function should return the elements of the
//  array which are greater than the second argument.

// Examples:

// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

// The Greater Numbers
console.log("findGreatest");
const findGreatest = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele > num) result.push(ele);
  }
  return result.join(", ");
};

console.log(findGreatest([3, 4, 5], 4)); // ➞ 5
console.log(findGreatest([10, 20, 30], 12)); // 20, 30
console.log(findGreatest([0, 10, 3], 4)); // 10

// Alphabetical Order
// Create a function to sort a string into alphabetical order.
// NB: assume numbers, symbols and punctuation are not included in the string.

// Example: alphaOrder("webdev") ➞ "bdeevw"
console.log("Alphabetical Order");
// Alphabetical Order
function alphaOrder(word) {
  //   let wordToArr = word.split("");
  //   console.log(wordToArr);
  //   let sortedArr = wordToArr.sort();
  //   console.log(sortedArr);
  //   let joinedArr = sortedArr.join("");
  //   console.log(joinedArr);
  return word.split("").sort().join("");
}

console.log(alphaOrder("webdev"));

/*
Übung 1
+
++
+++
++++



Übung 2
++++
+++
++
+

Übung 3
 The longest word Create a function to find the longest word in a given string.

 Example: longestWord("this is a web development course") ➞ development

Übung 4


*/
//Antworten

//1.
let sum = '';
for (let i=0;i<4;i++) {
  sum = sum + '+';
  console.log(sum);
}

//2.
for (let i=4;i>0;i--) {
  let k = '+'
  console.log(k.repeat(i));
}

//3.
function longestWord(str) {
  let strSplit = str.split(' ');
  let Word = '';
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > Word.length){
	    Word = strSplit[i];
     }
  }
  return Word;
}
console.log(longestWord("this is a web development course"));