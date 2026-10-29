// Definition of the function
function printHello(){
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a); // 20

    if(true){
        var a = 30;
        console.log(a); // 30
    }

    console.log("F ->", a); // 30
}

// Calling of the function
printHello();
