
// var exence = document.getElementById('exence')
// var income = document.getElementById('income')
// var Date_1 = document.getElementById('Date')
// var descriptiom = document.getElementById('descriptiom')
// var table = document.getElementById('table')    


// btn.addEventListener('click',function () {
//     if (income === '' || expense === '' || date === '' || description === '') {
//         alert('Please fill in all fields');
//         return;
//     }
//     console.log(table);
//     var data= ` 
//     <tr>
//     <td style="color: white;">${income.value}</td>
// <td style="color: white;">${exence.value}</td>
// <td style="color: white;">${Date_1.value}</td>
// <td  style="color: white;">${income.value - exence.value}</td>
//     </tr> `   
//     table.innerHTML+=data  

//     document.getElementById('income').value = '';
//     document.getElementById('exence').value = '';
//     document.getElementById('Date').value = '';
//     document.getElementById('descriptiom').value = '';
// })













var btn = document.getElementById('btn');
var expense = document.getElementById('exence');
var income = document.getElementById('income');
var date = document.getElementById('Date');
var description = document.getElementById('descriptiom');
var table = document.getElementById('table');

btn.addEventListener('click', function() {
    // Validate form values
    if (income.value === '' || expense.value === '' || date.value === '' || description.value === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Create a new table row
    var newRow = table.insertRow();
    
    // Insert new cells for income, expense, date, and calculated balance
    var incomeCell = newRow.insertCell(0);
    var expenseCell = newRow.insertCell(1);
    var dateCell = newRow.insertCell(2);
    var balanceCell = newRow.insertCell(3);
    var descriptionCell = newRow.insertCell(4);
    // Set the text content of the new cells
    incomeCell.textContent = income.value;
    expenseCell.textContent = expense.value;
    dateCell.textContent = date.value;
    descriptionCell.textContent = description.value;
    balanceCell.textContent = (parseFloat(income.value) - parseFloat(expense.value)).toFixed(2);

    // Optionally, style the new row's text color (keeping it white as in your example)
    newRow.style.color = 'white';
    
    // Clear the form
    income.value = '';
    expense.value = '';
    date.value = '';
    description.value = '';
});
