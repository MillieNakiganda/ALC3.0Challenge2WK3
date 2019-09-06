class BankAccount {
  

    constructor(accountnumber,balance = 0,openaccount = 1) {

        this.accountnumber = accountnumber;
        this.balance = 0;
        this.openaccount = openaccount;

    }

    getBalance() {
         if(this.openaccount == 1)
         {
            return `${this.accountnumber} 's balance is ${this.balance}`;

          }
          else{
              return `The bank account ${this.accountnumber} is closed`;
          }
        
    }

    open() {
        this.openaccount = 1;
        return `account number ${this.accountnumber} has been opened`;

    }

    deposit(depositamount) {
        if(this.openaccount == 1)
        {
            this.depositamount = depositamount;
            this.balance += depositamount;
            return `deposit to ${this.accountnumber}: ${this.depositamount}`;
        }
        else{
            return `The bank account ${this.accountnumber} is closed`;
        }
       

    }

    withdraw(withdrawamount) {
      if(this.openaccount == 1)
      {
          
        this.balance -= withdrawamount;
        return `a withdraw of ${withdrawamount} has been made to ${this.accountnumber}`;
      }
      else{
        return `The bank account ${this.accountnumber} is closed`;
      }
        
    }

    close(){

        this.openaccount = 0;
        return `The bank account ${this.accountnumber} is closed`;

    }


}


module.exports = BankAccount;