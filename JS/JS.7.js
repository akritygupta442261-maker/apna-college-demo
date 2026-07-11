// //this keyword
// // this keyword refers to an objec thatt is executing the currrent peice of code

// const student= {
//     name: "akrity",
//     age: 23,
//     AI:25,
//     cn:30,
//     dsa:50,

//     score: "8CGPA",
//     placement: "8LPA",
//     //studdent.name

//     //method
//     getAvg() {
//         console.log(this);
//         let  avg= (this.AI+this.cn+this.dsa)/3;
//         console.log(`${this.name}got avrage marks= ${avg}`);

//         //for caling student.getAvg()

       
//     }
    

// }

//  function getAvg() {
//         console.log(this);
//         // let  avg= (this.AI+this.cn+this.dsa)/3;
//         // console.log(`${this.name}got avrage marks= ${avg}`)
// }

//try ccatcch 
// console.log("akrity");
// console.log("akrity");
// console.log("akrity");

// try{
//     console.log(a);
// } catch(e){
//     console.log("caughtt an error a is not define");

// }




//miscellaneout topics
//ARROW FUNCTION
// const sum= (a,b)=>{
//     console.log(a+b);
// };
// const cube= (n)=>{
//     return n*n*n;
// };
// const power= (a,b)=>{
//     return a**b;
// }


//set timer
// console.log("hi akrity");
// setTimeout( ()=>{
//     console.log("apna college");
// },4000);
// console.log("welcome to apna college ");

//SET INTERVAL
// let id= setInterval( ()=>{
//     console.log("apna college");
// },2000);
// console.log(id);
// let id2= setInterval( ()=>{
//     console.log("hello world");
// },3000);
// console.log(id2);
// // clearInterrval(id);


//THIS KEYWORD IN ARROW FUNCTION
 const student={
    name: " akrity", 
    marks:" 95",
    prop: this,

    getName:function(){
        return this.name;
        console.log(this);
        return this.name;
    },
    //arrow function
getMarks:()=>{
    console.log(this);
    return this.marks;//parent's scope-> window
},
//student.getMarks


getInfo1: function(){
    setTimeout( ()=>{
        console.log(this);
    },2000);
},

    getInfo2: function(){
    setTimeout(function(){
        console.log(this);
    },2000);


   },
 };

//student.getInfo1
//student.getInfo2

 //student

 //PRACTICE  for timer set 
 let id= setInterval( ()=>{
    console.log("Hello world");
 },2000);
 let id2= setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
 }, 10000);

 
   