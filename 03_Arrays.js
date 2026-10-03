// ARRAY METHODS

// 1. push() -> Adds at the end.
let arr = [10,20,30];
arr.push(40);
console.log(arr);  // [10,20,30,40]

// 2.pop() -> Removes last element.
arr.pop()
console.log(arr) //  [10, 20, 30]

// 3. unshift() -> Adds at beginning.
arr.unshift(5);
console.log(arr)

// 4. shift() -> Removes first element.
// let arr = [10,20,30];
arr.shift();
console.log(arr); // [20, 30]

// 5. indexOf() 
console.log(arr.indexOf(20)); //1

// 6. lastIndexOf()
console.log(arr.lastIndexOf(20)); //1

// 7. includes()
console.log(arr.includes(30)); //true
console.log(arr.includes(50)); //false

// 8. concat() -> Combines arrays.

let a = [1,2]
let b = [3,4]
let c = a.concat(b)
console.log(c)

// 9. join()  Array → String.
let arr1 = ["J","a","v","a"];
console.log(arr1.join("")); // Java

// 10. reverse()
let arr2 = [1,2,3,4];
arr2.reverse();
console.log(arr2); // [4,3,2,1]

// 11. splice() -> Used to add, remove or replace elements.

// Syntax: array.splice(startIndex, deleteCount, replacementValue)

let arr4 = [10,20,30,40];
arr4.splice(1,2)
console.log(arr4) // [10,40]

// 12. slice() -> Extracts part of an array.
let arr5 = [10,20,30,40,50];
let result = arr5.slice(1,4);
console.log(result); // [20,30,40]

// start → included
// end   → not included

// ! Higher Order Array Methods.
// map / filter / forEach / reduce / sort

// 1. map() -> to perform an operation on every element and create a new array.(traverse array)

let nums = [1,2,3,4]
let res = nums.map((ele)=>{
    return ele * 2;
})

console.log(res) //[2,4,6,8]

// map() returns a new array and doesn't modify the original.

// 2. filter() -> give only elements which satisfies a condition. (filter → selection)

let marks = [40,75,60,90,30];

let result1 = marks.filter((ele)=>{
    return ele > 50;
})
console.log(result1); //[75, 60, 90]


// 3. forEach() -> Used to traverse an array.
// let nums = [1,2,3,4,5];
nums.forEach((ele)=>{
    console.log(ele)
})

// forEach() → doesn't return a new array

// 4. reduce() -> Used to convert an array into one final value.
// let nums = [1,2,3,4,5];
let sum = nums.reduce((acc , ele)=>{
    return acc + ele;
},0)
console.log(sum); //10

// 5. sort() -> Used to sort an array.

//Ascending:
let array = [5,2,8,1,3];
array.sort((a,b)=>{
    return a - b;
})
console.log(array);

// Descending:

array.sort((a,b)=>{
    return b-a;
});
console.log(array);
