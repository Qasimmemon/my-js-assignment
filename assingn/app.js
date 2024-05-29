var contain_3 = document.getElementById('contain_3')
var i_1 = document.getElementById("i_1") 
// var ital = contain_3.style.fontStyle = 'italic' 
i_1.addEventListener('click', function(){
    contain_3.style.fontStyle='italic'
    contain_3.style.fontWeight='none'
})

var i_2 = document.getElementById('i_2')
i_2.addEventListener('click', function () {
    contain_3.style.fontWeight='bold'
})



var i_3 = document.getElementById('i_3')
i_3.addEventListener('click', function () {
    contain_3.style.textDecoration='underline' //    text-decoration: underline;
})




// var i2 = document.getElementById('i2')
// i2.addEventListener('click', function () {
//     contain_3.style.fontSize = '24px' 
// })



var i_5 = document.getElementById('i_5')
var i_6 = document.getElementById('i_6')

i_5.addEventListener('click', function () {
    contain_3.style.fontSize = '24px' 
})


i_6.addEventListener('click', function () {
    contain_3.style.fontSize = '18px' 
})

