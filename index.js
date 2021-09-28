//Code your solutions in this file
function fivetoHundred(){
    for (let i = 5; i <= 100; i++) {
        console.log([i]);
    }
    
    
}

fivetoHundred();

function multiplesOfThree(){
    for(let i=1; i < 100; i++){
        if(i % 3 === 0 ){
            console.log(i);
        }
        
    }
}
multiplesOfThree();

function multiplesofThreeorFive(){
    for (let i=1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
multiplesofThreeorFive();

function untilNum(num){
    for(let i=1; i < num + 1;i++ ){
        console.log(i);
    }
}
    untilNum(10)
    
    
function multiply (num1, num2) {
    const product = num1*num2
    console.log(product)
}

multiply(5, 6)
    

