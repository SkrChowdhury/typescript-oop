class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log(`My Current Balance is ${this._balance}`);
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.addDeposit;
  }
}

const myAccount = new BankAccount(444, "SKR", 20);
console.log(myAccount);
