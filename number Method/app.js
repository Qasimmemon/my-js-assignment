var num = Math.ceil(Math.random()*6)
console.log('num',num);


function matchNumber(val){
console.log(val);
if(val == num ){
    document.write("Congratulation! your guees is correct " + num)
}
else {
    document.write("Sorry! your guees is wrong " + num )
}
}