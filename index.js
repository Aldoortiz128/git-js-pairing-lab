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
    function add(num1,num2){
        let sum = num1 + num2;
         var triplesum = sum * 3
        if( num1 === num2){
           console.log(triplesum);
        } else {
            console.log(sum);
        }
    
}
add(8,8)

function isNegative(num) {
    if (num >= 0) {console.log ("false")}
    else if (num < 0) {console.log ("true")}
    else {console.log ("false")
}
}

isNegative(4)
function triangleArea(base,height){
    var product = base * height / 2
    console.log(product);
}
triangleArea(4,4)

function betweenTwentyandFourty(num){
if (num >= 20 && num <=40) {console.log("true")}
else {console.log("false")}
}

betweenTwentyandFourty(20)
function biggest(num1,num2,num3){
    let largest;
    if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);

}
biggest(4,7,12)

function printTime() {
    var d = new Date();
    var n = d.toLocaleTimeString();
console.log(d);
}

printTime();