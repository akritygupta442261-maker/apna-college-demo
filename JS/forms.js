// let form= document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//    // alert("form submitted");


//     let inp= document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// //EXTRACT DATA FROM FORM

// //more events
// //CHANGE EVENT

let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
});
let user= document.querySelector("#user");
user.addEventListener(" change", function(){
    console.log("changed input");
    console.log("funal value= ",user.value);
});
