



























// for (var i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
// let number = 5;



// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial /= i;
// }

// console.log("The factorial of", number, "is:", factorial);


let number = 123;
let sum = 0;

// Convert the number to a string to iterate over its digits
let numberString = number.toString();

// Loop through each digit of the number
for (let i = 0; i < numberString.length; i++) {
    // Convert each digit back to a number and add it to the sum
    sum += parseInt(numberString[i]);
}

console.log("The sum of digits of", number, "is:", sum);



for (let i = 0; i <= 10; i++) {
    document.write(11-i)
}










// let firstTerm = 0;
// let secondTerm = 1;

// // Print the first two terms
// console.log(firstTerm);
// console.log(secondTerm);

// // Loop to calculate and print the next terms of the Fibonacci series
// for (let i = 3; i <= 10; i++) {
//     let nextTerm = firstTerm + secondTerm;
//     console.log(nextTerm);
    
//     // Update the values of firstTerm and secondTerm for the next iteration
//     firstTerm = secondTerm;
//     secondTerm = nextTerm;
// }