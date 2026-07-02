console.log("alka");
console.log("akrity");
let a= 10;
let b= 20;
console.log("sum: " ,a+b);
console.log(`you pay ${a+b}rupees`);
console.log("before mu if statement");
let age= 23;
if(age>=18){
    console.log("you can vote");
}
console.log ("after my if statement");

//traffic light
let color="green";
let person= "kajal";
let red,yelllow,green;
if(color ==red){
    console.log(`stop `)
}
if( color== "yellow"){
console.log(` wait , slow down`       )
}
if( color== "green"){
console.log(` go `       )
}
if(undefined){
    console.log("it has true value");
}
if(0){
    console.log("it is tuue");
}else{
    console.log("false");
}
//switch statement
let colors= "red";
switch(colors){
    case "red":
    console.log("stop");
    break;
    case"yellow":
    console.log("slow down");
    break;
    case "green":
    console.log("go");
    break;
    default:
        console.log("broken light");
}
//practicew ques
let day= "2";
switch(day){
    case "1":
    console.log("Monday");
    break;
    case "2":
    console.log("Tues");
    break;
    case "3":
    console.log("wed");
    break;
    case "4":
    console.log("Thursday");
    break;
    case "5":
    console.log("Friday");
    break;
    case "6":
    console.log("Saterday");
    break;
    case "7":
    console.log("Sunday");
    break;
    default :
    console.log("wrong no");
}

//Alert and prompt
//alert("something is wrong");
//alert("this is a simple alert message");
// console.error("this is an  error message");
// console.warn("this is warning message");

let firstName= prompt("give firstname");
let LastName= prompt("give last name");
console.log("welcome", firstName," ", LastName, "!");
