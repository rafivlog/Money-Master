function findIncome(){
    const incomeField = document.getElementById('income-field');
    const incomeString = incomeField.value;
    if(isNaN(incomeString) || incomeString==='' || incomeString<0){
        alert('Please Enter Positive Number');
        return '0';
    }
    const incomeAmount = parseInt(incomeString);
    return incomeAmount;
}

function findExpense(){
    const foodField = document.getElementById('food-field');
    const foodString = foodField.value;
    if(isNaN(foodString) || foodString==='' || foodString<0){
        alert('Please Enter Positive Number');
        return '0';
    }
    const foodAmount = parseInt(foodString);
    
    const rentField = document.getElementById('rent-field');
    const rentString = rentField.value;
    if(isNaN(rentString) || rentString==='' || rentString<0){
        alert('Please Enter Positive number');
        return '0';
    }
    const rentAmount = parseInt(rentString);
    
    const clothField = document.getElementById('cloth-field');
    const clothString = clothField.value;
    if(isNaN(clothString) || clothString==='' || clothString<0){
        alert('Please Enter Positive number');
        return '0';
    }
    const clothAmount = parseInt(clothString);
    const totalExpense = foodAmount + rentAmount + clothAmount;
    return totalExpense;
}

function findBalance(){
    
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeFound = findIncome();
    if(incomeFound==='0'){
        return;
    }
    const ExpenseFound = findExpense();
    if(ExpenseFound==='0'){
        return;
    }

    const totalBalance = incomeFound - ExpenseFound;
    if(totalBalance<0){
        alert("Expense can not be greater than Income");
        return;
    }
    const expenseField = document.getElementById('total-expense');
    expenseField.innerText = ExpenseFound;
    const balanceField = document.getElementById('total-balance');
    balanceField.innerText = totalBalance;  
})

document.getElementById('btn-save').addEventListener('click',function(){
    const saveField = document.getElementById('save-field');
    const saveString = saveField.value;
    if(isNaN(saveString) || saveString==='' || saveString<0){
        alert('Please Enter Positive number');
        return;
    }
    else if(saveString>100){
        alert('Please enter within 100');
        return;
    }
    const saveAmount = parseInt(saveString);
    
    const newIncomeFound = findIncome();
    const savingAmount = Math.round(parseFloat((saveAmount/100)*newIncomeFound).toFixed(2));
    const savingField = document.getElementById('saving-field');
    savingField.innerText = savingAmount;

    const income = findIncome();
    const expense = findExpense();
    const difference = income - expense;
    const remainingAmount = difference - savingAmount;
    
    const remainingField = document.getElementById('remaining-field');
    if(remainingAmount<0){
        alert("Saving amount is greater than balance amount");
        remainingField = '';
        return;
    }
    remainingField.innerText = remainingAmount;
})