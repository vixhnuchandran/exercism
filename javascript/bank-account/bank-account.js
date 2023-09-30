//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class BankAccount {
  constructor() {
    this.accountStatus = false;
    this.balanceAmount = 0;
  }

  open() {
    if (!this.accountStatus) {
      this.accountStatus = true;
    this.balanceAmount = 0;  }
    else {
      throw new ValueError();
    }
  }

  close() {
    if (this.accountStatus) {
      this.accountStatus = false;
    }
    else {
      throw new ValueError();
    }
  }

  deposit(amountCred) {
    if (amountCred > 0 && this.accountStatus) {
      this.balanceAmount += amountCred;
    }
    else {
      throw new ValueError();
    }
  }

  withdraw(amountDeb) {
    if (amountDeb>0 && amountDeb<= this.balanceAmount && this.accountStatus ) {
      this.balanceAmount -= amountDeb;
    }
    else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.accountStatus){
      return this.balanceAmount;
    }
    else {
      throw new ValueError();
    }
    
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
