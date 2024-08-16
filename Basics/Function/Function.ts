// Normal Function
function addOP(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addOP(3, 10));

// Spread Operator
const myFriends = ['Chandler', 'John', 'Rose'];
const newFriends = ['Monica', 'Otis', 'Rachel'];
const myBestFriend = {
    fullName: 'Tom Edwards',
    age: 24
}

// Array and Object destructuring
const [bestFriend] = myFriends  // contains the first element of the myFriends array
const {fullName} = myBestFriend // Contains the value of the fullname property of the myBestFriend object

const greetFriends = (...myFriends:string[]): void => 
    myFriends.forEach((friend) => console.log(`Hi ${friend}`));
//  collects all the arguments passed to the function and stores them in an array named myFriends
//  string[] indicates that these arguments must be strings

greetFriends('A', 'B', 'C', 'D', 'E');  // this holds the function

const addArrow = (num1: number, num2: number) => num1 + num2;
addArrow(10, 12);

const arr = [1, 4, 5, 100, 80, 13]
const newArray2 = arr.map((element: number) => element & element);  // parameter element should be of type number

const person: {name: string, balance: number, addBalance(money: number): string} = {
    name: 'John',
    balance: 4,
    addBalance(money: number){
        return `My new balance is ${this.balance + money}`;
    },
}

// setting default value 'taxYear = 2024' instead of optional value 'taxYear?: number'
function calculateTax(income: number, taxYear = 2024) : number {
    if(taxYear < 2024)
        return (income * 2);
    return (income * 1.5)
}

console.log(calculateTax(10000));
