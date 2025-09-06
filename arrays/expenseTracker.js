const account = {
    name:"Cyprian",
    expenses:[],
    income:[],
    addExpense:function(description,amount){
        this.expenses.push({
            description :description,
            amount:amount
        })
    },
    getAccountSummery:function(){
        let totalexpense = 0
        let totalincome = 0
        let accountbalance = 0

        this.expenses.forEach(function(expenses){
            totalexpense = totalexpense + expenses.amount
        })
      
        
        this.income.forEach(function(income){
            totalincome = totalincome + income.amount
        })
        accountbalance = totalincome - totalexpense  
        
        return `${this.name} has  a balance ${accountbalance}. $${totalincome} in income and $${totalexpense} in expenses`
    },
    addIncome:function(description,amount){
       this.income.push({
        description:description,
        amount:amount
       })
    }
}

account.addExpense('Rent',10)
account.addExpense('coffee',50)
account.addIncome('coffee',50)
console.log(account.getAccountSummery());
