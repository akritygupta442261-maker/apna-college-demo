const max = prompt("enter  the maximum number");
console.log(max);
const random= Math.floor(Math.random()*max)+1;
        console.log("random");


let guess= prompt("guess the no");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess== random){
                console.log("you are right . congrates!", random);
                break;
    }
    else if(guess<random){
        guess = prompt("your guess was too small, please try again");
    }else{
        guess = prompt("your guess was too large. please try");
    }
        
    
}