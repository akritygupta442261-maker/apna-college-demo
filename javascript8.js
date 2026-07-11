// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick= function(){
//     alert("button was clicked");
// };
// function sayHello(){
//     alert("Hello");
// }
// // btn.onclick= sayHello;
// let btns= document.querySelectorAll("button");
// for(btn of btns){

//     btn.onClick= sayHello;// paranthesis ni lahaga hai yaha
   
     
    
// }
//     function sayHello(){
//         alert("hellow !")
//     }


// btn.onmouseenter= function(){
    //     console.dir(btn);
    // }

    //ON MOUSE
    // btn.onclick= sayHello;
let btns= document.querySelectorAll("button");
for(btn of btns){
    btn.onClick= sayHello;
    btn.onmouseenter= function(){
        console.log("you enterend a buttonn");
    }
    console.dir(btn);
   
     
    
}
    function sayHello(){
        alert("hellow !")
    }
