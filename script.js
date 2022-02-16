const calcuBtn = document.getElementById('calcu-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const foodField = document.getElementById('food-field');
    const rentField = document.getElementById('rent-field');
    const clothesField = document.getElementById('clothes-field');

    const expenses = parseInt(foodField.value) + parseInt(rentField.value) + parseInt(clothesField.value)


    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = parseInt(totalExpenses.innerText) + expenses;
    const balance = document.getElementById('balance')
    balance.innerText = parseInt(incomeField.value) - parseInt(totalExpenses.innerText)


    incomeField.value = ''
    foodField.value = ''
    rentField.value = ''
    clothesField.value = ''
})
