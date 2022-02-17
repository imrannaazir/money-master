// input field variable
const incomeField = document.getElementById('income-field');
const foodField = document.getElementById('food-field');
const rentField = document.getElementById('rent-field');
const clothesField = document.getElementById('clothes-field');
const saveField = document.getElementById('save-field')

// balance text variable
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance')
const saveBalance = document.getElementById('save-balance')
const remainingBalance = document.getElementById('remaining-balance')

// button variable
const calcuBtn = document.getElementById('calcu-btn')
const saveBtn = document.getElementById('save-btn');



//calculation button click hadeler addeded
calcuBtn.addEventListener('click', function () {
    const expenses = parseInt(foodField.value) + parseInt(rentField.value) + parseInt(clothesField.value)
    totalExpenses.innerText = parseInt(totalExpenses.innerText) + expenses;
    balance.innerText = parseInt(incomeField.value) - parseInt(totalExpenses.innerText)



    foodField.value = ''
    rentField.value = ''
    clothesField.value = ''
})


// save button click handeler addeded
saveBtn.addEventListener('click', function () {
    saveBalance.innerText = parseInt(incomeField.value) * parseInt(saveField.value) / 100;
    remainingBalance.innerText = parseInt(balance.innerText) - parseInt(saveBalance.innerText)

    incomeField.value = ''
    saveField.value = ''
})