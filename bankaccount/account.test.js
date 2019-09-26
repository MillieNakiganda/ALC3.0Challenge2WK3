const BankAccount= require('./account');




test('works with string accountnumber', () => {
    const a = new BankAccount("T453",balance =0, openaccount = 1 );
    expect(a.accountnumber ).toBe("T453");
    expect(a.balance ).toBe(balance);
    expect(a.openaccount ).toBe(openaccount);

});

test('works with accountnumber as a number', () => {
    let a = new BankAccount(3434,balance =0, openaccount = 1 ); 
    expect(a.accountnumber).toBe(3434);
    expect(a.balance).toBe(balance);
    expect(a.openaccount).toBe(openaccount);   
});

test('deposit() works', () => {
    let a = new BankAccount(3434,balance =0, openaccount = 1 );   
    expect(a.accountnumber).toBe(3434);
    expect(a.balance).toBe(balance);
    expect(a.openaccount).toBe(openaccount);  
    expect(a.deposit(1000)).toBe(`deposit to ${a.accountnumber}: ${a.depositamount}`);
    expect(a.getBalance()).toBe(`${a.accountnumber} 's balance is ${a.balance}`);  
});


test('withdraw() works', () => {
    let a = new BankAccount(3434,balance =1000, openaccount = 1 );
    expect(a.accountnumber).toBe(3434);
    expect(a.balance).toBe(balance);
    expect(a.openaccount).toBe(openaccount);  
    expect(a.getBalance()).toBe(`${a.accountnumber} 's balance is ${a.balance}`);
    expect(a.withdraw(500)).toBe(`a withdraw of ${500} has been made to ${a.accountnumber}`);
    expect(a.getBalance()).toBe(`${a.accountnumber} 's balance is ${a.balance}`);
    
});

test('close() works', () => {
    let a = new BankAccount(3434,balance =0, openaccount = 1 );
    
    expect(a.accountnumber).toBe(3434);
    expect(a.balance).toBe(balance);
    expect(a.openaccount).toBe(openaccount);  
    expect(a.deposit(1000)).toBe(`deposit to ${a.accountnumber}: ${a.depositamount}`);
    expect(a.getBalance()).toBe(`${a.accountnumber} 's balance is ${a.balance}`);
    expect(a.close()).toBe(`The bank account ${a.accountnumber} is closed`);
    expect(a.withdraw(500)).toBe(`The bank account ${a.accountnumber} is closed`);
    expect(a.getBalance()).toBe(`The bank account ${a.accountnumber} is closed`);
    
});


test('nothing works when account is closed', () => {
    let a = new BankAccount(3434,balance =0, openaccount = 0 );
    
    expect(a.accountnumber ).toBe(3434);
    expect(a.balance ).toBe(balance);
    expect(a.openaccount ).toBe(openaccount);     
    expect(a.deposit(1000)).toBe(`The bank account ${a.accountnumber} is closed`);
    expect(a.getBalance()).toBe(`The bank account ${a.accountnumber} is closed`);
    expect(a.withdraw(500)).toBe(`The bank account ${a.accountnumber} is closed`);
    expect(a.close() ).toBe(`The bank account ${a.accountnumber} is closed`);
    
});

 
