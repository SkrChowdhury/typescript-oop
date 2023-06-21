// class BankAccount {
//   public readonly id: number;
//   public name: string;
//   private _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }

//   //getter
//   get balance(): number {
//     return this._balance;
//   }

//   //Setter

//   set deposite(amount: number) {
//     this._balance = this._balance + amount;
//   }

//   //   getBalance(): number {
//   //     return this._balance;
//   //   }

//   addDeposit(amount: number) {
//     this._balance = this._balance + amount;
//   }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     this.addDeposit;
//   }
// }

// const myAccount = new BankAccount(444, "SKR", 20);
// console.log(myAccount.balance);
// myAccount.deposite = 30;
// console.log(myAccount.balance);
