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
        
    
