//scope - global
let greet = "hello";

//not called only defined function
function changeGreet(){
    let greet ="namaste";
    //scope funcion - alws high priority
    console.log(greet);
    function innerGreet(){
        //scope lexicalscope
        console.log(greet);

    }
}
console.log(greet);
changeGreet();