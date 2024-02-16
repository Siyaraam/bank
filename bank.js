// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true; // Assume all accounts are active by default
}


BankAccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
  } else {
    console.log("Invalid deposit amount.");
  }
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
  } else {
    console.log("Invalid withdrawal amount or insufficient funds.");
  }
};

BankAccount.prototype.checkBalance = function() {
  console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
  return this.active;
};


function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (const account of accounts) {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  }
  return totalBalance;
}


const account1 = new BankAccount(1, "pooja singh", "Savings", 2000);
const account2 = new BankAccount(2, "kiran kachhi", "Checking", 3000);

account1.deposit(400);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(500);
account2.checkBalance();

console.log(`Account 1 is active: ${account1.isActive()}`);
console.log(`Account 2 is active: ${account2.isActive()}`);

const totalBalance = getTotalBalance([account1, account2]);
console.log(`Total balance of all active accounts: ${totalBalance}`);
