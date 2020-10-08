let expenseCalc = {
    name: 'showkat',
    expense: 0,
    income: 0
}

addExpense = (account, ammount) => {
    account.expense = account.expense + ammount
}

addExpense(expenseCalc, 500)

addIncome = (account, ammount) => {
    account.income = account.income + ammount
}

addIncome(expenseCalc, 5000)

console.log(expenseCalc)

//summery
//reset