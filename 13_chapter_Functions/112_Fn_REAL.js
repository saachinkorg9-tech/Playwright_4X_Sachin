function validateStatusCode(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine!");
    }
}
const validateStatusCode_Exp = function(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine!");
    }
}
const validateStatusCode_Arrow = (status) => {
     if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

console.log("====== Normal Function =====");
validateStatusCode(200);
console.log("======  Function expressinoi =====");
validateStatusCode_Exp(200);
console.log("======  Arrow Function  =====");
validateStatusCode_Arrow(200);