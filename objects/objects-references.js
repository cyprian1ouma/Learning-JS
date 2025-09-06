
let myAccount ={
    name:'Cyprian Ouma',
    expenses:0,
    income:0
}

let otheraccount = myAccount
otheraccount.expenses=1000
otheraccount={}

let addExpense = function(account, totalamount){
    // account={}
    account.expenses = account.expenses + totalamount
    // console.log(account);
}
addExpense(myAccount,450)
console.log(myAccount);


// add income account, amount
// reset account , resets account to 0
// get account summery

let addIncome = function(account, incomeamount){
    account.income=account.income + incomeamount
}

let resetAccount = function(resetaccount){
    resetaccount.expenses = 0
    resetaccount.income = 0
}

let accountSummery = function(account){
   let balance= account.income - account.expenses
   return  `Account for ${account.name} ksh. ${balance} in income ${account.expenses} in expenses.`
}

addIncome(myAccount,30000)
addExpense(myAccount,15000)
addExpense(myAccount,2000)

console.log(accountSummery(myAccount));
resetAccount(myAccount)
console.log(accountSummery(myAccount));

