// var passWord = prompt("enter a password")
// if ("SMIT" == passWord.toUpperCase())
// {
//     console.log("Match");

// }
// else{
//     console.log("not match");
//     alert("Warning you'r account is hack")
// }
// function generatePassword(length, uppercase) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }
//     return uppercase ? password.toUpperCase() : password;
// }

// // Example usage:
// const newPassword = generatePassword(10, true); // Generate a 10-character uppercase password
// console.log(newPassword); // Output: A randomly generated uppercase password

// const newPassword2 = generatePassword(8, false); // Generate an 8-character lowercase password
// console.log(newPassword2); // Output: A randomly generated lowercase password
// function generatePassword(length) {
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }
//     return password.toUpperCase();
// }
