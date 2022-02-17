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

// function for defference
function subtraction(fristAmount, secondAmount) {
    const result = parseFloat(fristAmount) - parseFloat(secondAmount);
    return result;
}

// negetive no error handle function



//calculation button click hadeler addeded
calcuBtn.addEventListener('click', function () {
    const expenses = parseFloat(foodField.value) + parseFloat(rentField.value) + parseFloat(clothesField.value)
    if (incomeField.value < expenses) {
        alert('Something wrong!! Your income will not cover your expenses.')
    }
    else if (isNaN(foodField.value) || isNaN(rentField.value) || isNaN(incomeField.value) || isNaN(clothesField.value)) {
        alert('Opps!! You must input the number.')
    }
    else if (incomeField.value < 0 || foodField.value < 0 || rentField.value < 0 || clothesField.value < 0) {
        alert('Invalid input!!! Please enter all possitive value.')
    }
    else {
        totalExpenses.innerText = expenses;
        balance.innerText = subtraction(incomeField.value, totalExpenses.innerText)

    }

    foodField.value = ''
    rentField.value = ''
    clothesField.value = ''
})


// save button click handeler addeded
saveBtn.addEventListener('click', function () {

    const finalSaving = parseFloat(incomeField.value) * parseFloat(saveField.value) / 100;
    if (finalSaving > balance.innerText) {
        alert('Sorry!! You do not have sufficient balance for saving this amount.')
    }
    else if (saveField.value < 0) {
        alert('Invalid input!!! Please enter the possitive value.')
    }
    else if (isNaN(saveField.value)) {
        alert('Opps!! You must input the number.')
    }
    else {
        saveBalance.innerText = finalSaving
        remainingBalance.innerText = subtraction(balance.innerText, saveBalance.innerText)
        incomeField.value = ''
    }

    saveField.value = ''
})