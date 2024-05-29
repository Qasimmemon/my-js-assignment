// var char = prompt("Enter a Character")
// var name =("Enter a Full name")
// var pass =("Enter a password")


var num1 = +prompt("Enter 1st Integers")
var num2 = +prompt("Enter 2nd Integers")

if(num1>num2){
    console.log(num1 + " is greater than " + num2)
    document.write(num1 + " is greater than " + num2)
}
else{
    console.log( num2 + " is greater than " + num1)
    document.write(num2 + " is greater than " + num1)
}

document.write("<h1>next qs</h1>")

var number =+prompt("enter a numbar")

if(number>=0){
    console.log("positive")
}
else{
    console.log("negative")
}