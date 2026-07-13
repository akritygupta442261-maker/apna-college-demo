// let num= [1,2,3,4,5];
// let double= num.map((el) => {
//     return el*el;
// });

// let student =[{
//     name:"ankit",
//     marks:55
// },
// {
//     name:"aman",
//     marks:95
// },
// {
//     name:"ashu",
//     marks:85
// }];

// let gpa= student.map((el) =>{
//     return el.marks/10;
// });

// //FILTER
// let nums= [2,4,4,6,7,1,8];
// let even = num.filter((el)=> {
//     return el%2==0;
// });

//EVERY

//REduce
// let numbers= [1,2,3,4];
// let finalVal= numbers.reduce((res,el) => {
// console.log(res);
// return res+el;
// });
// console.log(finalVal);

//MAXIMUM IN ARRAY BY REDUCE

// let arr= [1,2,3,15,4,6,9,2,8];

// let max= -1;
// for(let i=0; i<=arr.length; i++){
//     if(max < arr[i]){
//         max= arr[i];
//     }
// }
// console.log(max)
// 
// ;

// let maxs= arr.reduce((maxs,el)=> {
//     if(maxs < el){
//         return el;

//     }else{
//         return maxs;
//     }
// });

//PRACTICE QUES
 
//TO check all no are multiple of 10 or Notification
//we use EVERY  method for this
 let numbers= [10,20,30,40];
 let ans= numbers.every((el)=>el%10==0);
 console.log(ans);

 //MIN IN ARRAY
  let num= [1,2,3,4,7,9,];
//  let min= num.reduce((min,el)=>{
//     if(min< el){
//         return min;

//     }else{
//         return el;
//     }
//  });
//  console.log(min);

// function getMin(nums){
//     let min= num.reduce((min, el)=> {
//         if(min< el){
//             return min;
//         }else{
//             return el;
//         }
//     });
//     return min;
//

// }


//SPREAD
// let arr= [1,2,4,5,67];
// let newArr= [...arr];
// console.log(arr);
// console.log(newArr);
// let char= "akrity";
// let even= [2,4,6,];
// let odd= [1,3,5,];
// let newChar= [...even,...odd, ...char];


//SPREAD WITTH OBJECT LITERALS
// const data= {
//     email:"akrity@gmail.com",
//     password:"abcc",
// };

// const dataCopy={...data, id:123};

//TO CONVERT ARRAY TO OBJECT
// let arr= [1,2,4,5,67];
// let obj1= {...arr};
// let obj2= {..."hello"};

//REST
// function sum(...args){
//     for(let i=0; i<args.length;i++){
//         console.log("you gave us: ", args[i]);
//     }
// }


// function min(a,b,c,d){
//     console.log(arguments.length);
// }


//DESTRUCTURING
 let names= ["tony", "bruce", "peter", "steve"];
 let [winner, runnerup888, secRunnerup, ...others]= names;

 //DESTRUCTURING OBJECT
 const student={
    name:"kajal",
    age:22,
    class:"pg",
    sub: ["cs","ai","cn","maths"],
    username:"kajal@",
    password:132,
 }
 let {username, password:seccret,city="mumbai"}= student;