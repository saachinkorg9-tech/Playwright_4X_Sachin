// Type 3 =  with argument/parameter but no return type. 

function greetByName(name)
{

console.log("Hello " + name);

}

greetByName("Sachin ");
greetByName("Ramesh");    
greetByName("Pramod");  
greetByName("Jane");  

let name1 = greetByName("Sameer");

console.log(name1); // undefined because function is not returning anything.
