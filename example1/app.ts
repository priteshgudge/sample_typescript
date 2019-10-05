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


// Exercise 1 - Maybe use an Arrow Function?
let double = (value) => value * 2

console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greet = (name: string = "Max"):void => console.log("Hello, " + name)
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// // Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20];
newArray.push(...numbers)

// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
//const result1,result2,result3  = testResults;
console.log(...testResults);

// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
