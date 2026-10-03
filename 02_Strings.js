//length
let name = "Devipriya";
console.log(name.length);

// ! Important String Methods

let str = "Hello"

// 1. toUpperCase()
console.log(str.toUpperCase())

// 2. toLowerCase()
console.log(str.toLowerCase())

// 3. trim()
let str1 = "   hello   "
console.log(str1.trim())

// 4. indexOf()  -> Finds the first occurrence.
console.log(str.indexOf("l")) //2
console.log(str.indexOf("r")) // -1

// 5. lastIndexOf() -> Finds the last occurrence.
console.log(str.lastIndexOf("l")); //3

// 6. charAt() -> Gets the character at an index.
console.log(str.charAt(4)) //o

// 7. concat()

let a = "hello"
let b = "world"

console.log(a.concat(" " , b)) //hello world

// 8. includes() -> Checks whether something exists.
let str2 = "javascript"
console.log(str2.includes("script")) //true
console.log(str2.includes("html"))   //false

// 9. replace() -> Replaces the first matching value.
let str3 = "I love Javascript. Javascript is easy"
console.log(str3.replace("Javascript" , "Java"))

// 10. replaceAll() -> Replaces all matching values.
console.log(str3.replaceAll("Javascript" , "Java"))

// 11. split() -> Converts a string → array
console.log(str3.split())   // ['I love Javascript. Javascript is easy']

console.log(str.split("")) // ['H', 'e', 'l', 'l', 'o']
console.log(str3.split(" ")) //['I', 'love', 'Javascript.', 'Javascript', 'is', 'easy']

// 12. splice() -> used with arrays to add, remove, or replace elements.

// Syntax
// array.splice(start, deleteCount, item1, item2, ...);

//Example 1: Remove elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1,2)
console.log(fruits)  // ["Apple", "Orange"]

// Example 2: Add elements
fruits.splice(1 , 0 , "grapes")
console.log(fruits) // ['Apple', 'grapes', 'Orange']

// 1 → Start at index 1
// 0 → Delete nothing
// "Banana" → Add Banana

// Example 3: Replace elements
fruits.splice(1 , 1 , "banana")
console.log(fruits) //['Apple', 'banana', 'Orange']

// 13. substring() -> used with strings to extract a part of a string.

// Syntax: string.substring(start, end);  
// end index is not included

let name1 = "Devipriya";
let result = name1.substring(0, 4);
console.log(result);

