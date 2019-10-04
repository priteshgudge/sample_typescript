type BankAccountType = {money: number, deposit: (value: number) => void}
type MyselfType = {name: string, bankAccount: BankAccountType, hobbies: string[]}
let bankAccount:  BankAccountType = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: MyselfType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
