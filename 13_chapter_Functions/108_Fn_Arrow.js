

// Normal fucntion with return value
function greet(name){
    return `Hello, ${name}`;
}
console.log("Calling  Normal  function  ====================");

console.log(greet("sachin"));


// fucntion with Function expression

let greet1 = function(name1){
    return `Hello, ${name1}`;
};

console.log("Calling  function expression ====================");
console.log(greet1("sachin"));


// Arrow fucntion 
let greet2=(name2)=>
    {
    return `Hello, ${name2}`;
};

console.log("Calling arrow function====================");
console.log(greet2("Sachin "));