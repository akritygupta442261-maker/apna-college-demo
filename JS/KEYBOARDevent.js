// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

//DOUBLE CLICKED 

// let btn2 = document.querySelector("button");
// btn2.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// KEYBOARD event 
// key down event
let input= document.querySelector("input");
 input.addEventListener("keydown", function(){
    console.log("code=", event.code); //arrow up, arrow down, arrow left affow right
    
    if(event.code=="ArrowUp"){
        console.log("character moves Upwards");
    }
    if(event.code=="ArrowDown"){
        console.log("character moves downwards");
    }
    if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
    if(event.code=="ArroRight"){
        console.log("character moves right");
    }

 });

//  //keyup event 
//  input.addEventListener("keyup", function(event){
//     console.log(event);
//     console.log("key was released");
//  });


