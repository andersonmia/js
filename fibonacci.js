function fibonacci(limit){
let num1 = 0,num2 = 1, next;
for(let i = 0;i < limit; i++){
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    console.log("The fibonacci series is: " +next);
}
}