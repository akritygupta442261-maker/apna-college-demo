// function multipleGreet(func, ciunt){
//     for(let i=1; i<= CountQueuingStrategy; i++){
//         func();
//     }
// }
// let greet= function(){
//     console.log("hello");
// }
// multipleGreet(function() {console.log("namaste")}, 100);

function oddEvenTest(request) {

    if (request == "odd") {

        return function (n) {
            console.log(!(n % 2 == 0));
        }

    } else if (request == "even") {

        return function (n) {
            console.log(n % 2 == 0);
        }

    } else {
        console.log("wrong request");
    }
}
let request="odd";