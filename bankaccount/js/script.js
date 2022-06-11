
const bankAccount = function(ownerName) {
    let owner = ownerName;
    let balance = 0;
    const bank = {
        name: owner,
        withdrawal: function(withdrawalAmount) {
            if (balance >= withdrawalAmount && withdrawalAmount > 0) {
                balance -= withdrawalAmount;
            }
        },
        deposit: function(depositAmount) {
            if (depositAmount > 0) {
                balance += depositAmount;
            }
        },
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return owner;
        }
    }
    return bank;
}

let account = null;

const displayAccount = function() {
    let display = document.getElementById("info");
    display.innerText = `User's name: ${account.getOwnerName()} | Balance: $${account.getBalance()}`;
}

const promptName = function() {
    let name = prompt("Please enter your name");
    account = bankAccount(name);
    displayAccount();
};

const promptDeposit = function() {
    amount = prompt("Please enter amount to deposit");
    if (isNaN(amount)) {
        alert("Invalid amount!");
    } else {
        account.deposit(parseFloat(amount))
        displayAccount();
    }
};

const promptWithdrawal = function() {
    amount = prompt("Please enter amount to withdraw");
    if (isNaN(amount)) {
        alert("Invalid amount!");
    } else {
        account.withdrawal(parseFloat(amount));
        displayAccount();
    }
};
