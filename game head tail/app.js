// var game = prompt("enter num")
// for (let i = 1; i < 100; i+=2) {
//     console.log(i);
// }
// for (let j = 2; j < 100; j+=2) {
//     console.log(j);
// }
// if (i == game) {
//     alert("congrats! head")
// }

// else if(j == game){
//     alert("contarts tail")
// }else{
//     alert("sorry")
// }








// var user = +prompt("Enater a num 1 ya 2")
// var random = Math.ceil(Math.random()*2)
// console.log(random);
// if (user == random){
//     alert("head")   
// }else{
//     alert("Tail")
// }
function tossCoin() {
    var result = document.getElementById("result");
    var random = Math.random();
    var bool = "";
    if (random < 0.5) {
        bool = "Head";
    } else {
        bool = "Tail";
    }
    result.innerText = "You got " + bool + "!";
}