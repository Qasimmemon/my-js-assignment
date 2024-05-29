var aaa = +prompt("Enter Your Eng Mark")
var sss = +prompt("Enter Your Math Mark")
var xxx = +prompt("Enter Your Comp Mark")
var zzz = +prompt("Enter Your Urdu Mark")
var qqq = +prompt("Enter Your Islamit Mark")

var tat = (aaa+sss+xxx+zzz+qqq)*100/500
// var total =(aaa+sss+xxx+zzz+qqq)*100/500
console.log("Your Total Percentage is "+tat+"%");
document.write("Your Total Percentage is "+tat+"%");
if(90 <= tat){
    console.log("You'r Grade is A+")
    document.write("You'r Grade is A+")
}
else if (80<=tat){
    console.log("You'r Grade is A")
    document.write("You'r Grade is A")
}
else if (70<=tat){
    console.log("You'r Grade is B")
    document.write("You'r Grade is B")
 }
else if (60<=tat){
    console.log("You'r Grade is C")
    document.write("You'r Grade is C")
}
else if (50<=tat){
    console.log("You'r Grade i D")
    document.write("You'r Grade is D")
}
else if (80<=tat){
    console.log("You'r Grade is E")
    document.write("You'r Grade is E")
}
else{
    console.log("you are fail")
}
























// else{
//     console.log('you are fail')
// }


























// function checkCharacter(input) {
//     // Convert input to its ASCII code
//     var charCode = input.charCodeAt(0);

//     // Check if input is a number
//     if (!isNaN(input)) {
//         console.log(input + " is a number.");
//     }
//     // Check if input is an uppercase letter
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log(input + " is an uppercase letter.");
//     }
//     // Check if input is a lowercase letter
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log(input + " is a lowercase letter.");
//     }
//     // If none of the above conditions are met, it's not a valid input
//     else {
//         console.log(input + " is not a valid input.");
//     }
// }

// // Example usage
// var input = prompt("Enter a character:");
// checkCharacter(input);