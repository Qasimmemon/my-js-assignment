// var otp_num = 
 var otp_num = document.getElementById("otp_num")
 var userotp = +prompt("enter digit!")
function mufunCTion(num) {
    
  
    // var generate = math.ceil(math.random()*1000000)
   otp_num.innerText = Math.floor(Math.random()*userotp)
} 
