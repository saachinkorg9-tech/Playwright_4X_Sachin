//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 


(function name1() {
    console.log("Noraml function IIFE")
 })();



 (function(){
     console.log("Anonymous Fn IIFE");
 })();

// (function () {
//     console.log("Staging")
// })();


(() => {
    console.log("Arrow function IIFE");
})();