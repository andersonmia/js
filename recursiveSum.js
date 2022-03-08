// function summ(lex){
//     return lex;
// }

function sum(number){
    // let result;
    if(number>0){
        number = number + summ(number-1);
    
    }
    
    console.log(number);
}

sum(10);