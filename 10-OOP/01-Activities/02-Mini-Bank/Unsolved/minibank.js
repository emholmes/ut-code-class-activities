// =============================================================
// PART 1

function MiniBank(balance) {
    this.balance = balance;
    this.getBalance = function() {
      return this.balance;
    };
    // Add a `setBalance()` function
    // YOUR CODE HERE
    //
    this.setBalance = function(value) {
      this.balance = value;
    };
    // Add a `deposit()` function
    // YOUR CODE HERE
    //
    this.deposit = function(value) {
      if (value > 0) {
        this.setBalance(this.getBalance() + value);
        console.log(`Deposited: ${value}`);
      } else {
        console.log("Deposit value must be greater than 0.");
      }
    }
    // Add a `withdraw()` function
    // YOUR CODE HERE
    //
    this.withdraw = function(value) {
      if (value > this.getBalance() || value < 0) {
        console.log("Withdraw value cannot be a negative number,larger than current balance, or cause the balance to drop below zero.");
      } else {
        this.setBalance(this.getBalance() - value);
        console.log(`Withdrew: ${value}`);
      }
    }
    this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    };
}

// =============================================================
// PART 2

// Create a new `bank` object
let bank = new MiniBank(10);
// Print the `bank` balance
bank.printBalance();
// Deposit some money and then print the `bank` balance
bank.deposit(15);
bank.printBalance();
// Withdraw some money and then print the `bank` balance
bank.withdraw(20);
bank.printBalance();

