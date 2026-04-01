
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
let maxid = -1
const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій

    transactions: [],
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */

    createTransaction(amount, type) {
        return {id: ++maxid, amount, type}
    },
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
    },

    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
        }else {
            console.log("you don't have enough money")
        }

    },

    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance
    },
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for (let transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction
            }
        }
    },

    /*

     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let total = 0
        for (let transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount
            }
        }
        return total
    },
}
account.deposit(100);
account.withdraw(50);
account.deposit(200);
account.withdraw(2000);
account.deposit(100);
account.withdraw(100);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(1));
console.log(account.getBalance());
