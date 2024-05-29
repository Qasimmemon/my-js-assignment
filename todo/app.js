var input = document.getElementById('input')
var btn = document.getElementById('bttt')
var show = document.getElementById('result')

btn.addEventListener('click', function(){
   show += `<li><span>${input}</span> <button>Edit</button> <button>Del</button> </li>`
})
