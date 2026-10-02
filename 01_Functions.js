//Basic syntax

function functionName()
{
    // code
}

functionName();
// console.log("---------------------")

//Eg

function greet()
{
    console.log("Hello")
}

greet();

// console.log("---------------------")

//Function with Parameters

function add(a,b)
{
    console.log(a+b)
}

add(10,20)

// console.log("---------------------")

//Function with Return

function sub(a,b)
{
    return a-b
}

let result = sub(30,20)
console.log(result);

// console.log("---------------------")

//Arrow Function

let multi = (a,b)=>a*b;
console.log(multi(5,5))

// console.log("---------------------")


//Callback Function
//a function that is passed as an argument to another function.

// eg 1
function greeting(){
    console.log("Hi")
}

function demo(Callback){
    Callback();
}

demo(greeting);

// eg 2

function wish(name , callback)
{
    console.log("Hello " + name);
}

function message(){
    console.log("Welcome")
}

wish("Devipriya" , message)

//Here -> message     // passing the function
// message()   // calling the function

// console.log("---------------------")

//Higher-Order Function 

// (Function that accepts another function)
//a function that takes another function as an argument OR returns a function.

// Example 1: Takes a function as argument

function calculate(a , b ,operation)
{
    console.log("Result: " + (a+b));
    operation();
}

function display(){
    console.log("Calculation completed!")
}

calculate(10 , 20 , display);

// calculate() → Higher-Order Function
// display()   → Callback Function


// Example 2: Returns a function

function calculateNumbers(){
    function addNum(){
        console.log("Result: "+ (10+20))
    }

    return addNum;
}

    let res = calculateNumbers();


res();

// createCalculator() → Higher-Order Function
// addNumbers()       → Function returned by createCalculator()


// console.log("------------------------")


//IIFE – Immediately Invoked Function Expression


//syntax
(function() {
    //code
})();

(function(){
    console.log("Result: " + (30+20))
})();

(function(){
    console.log("Executed immediately")
})();

(
    function(port){
        console.log("I am running in port number : " + port)
    }
)(3000);