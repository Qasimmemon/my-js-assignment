var Birth_Date = document.getElementById("Date")
var Birth_Month = document.getElementById("Month")
var Birth_year = document.getElementById("Year")
var birthday = Birth_Date + Birth_Month + Birth_year
function newFunction(){
    var ow = new Date()
    var user = ow.getTime() - birthday.getTime()
    console.log(user)
}