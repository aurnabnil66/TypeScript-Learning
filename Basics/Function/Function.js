function addOP(num1, num2) {
    return num1 + num2;
}
console.log(addOP(3, 10));
var myFriends = ['Chandler', 'John', 'Rose'];
var newFriends = ['Monica', 'Otis', 'Rachel'];
var myBestFriend = {
    fullName: 'Tom Edwards',
    age: 24
};
var bestFriend = myFriends[0];
var fullName = myBestFriend.fullName;
var greetFriends = function () {
    var myFriends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        myFriends[_i] = arguments[_i];
    }
    return myFriends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
greetFriends('A', 'B', 'C', 'D', 'E');
var addArrow = function (num1, num2) { return num1 + num2; };
addArrow(10, 12);
var arr = [1, 4, 5, 100, 80, 13];
var newArray2 = arr.map(function (element) { return element & element; });
var person = {
    name: 'John',
    balance: 4,
    addBalance: function (money) {
        return "My new balance is ".concat(this.balance + money);
    },
};
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2024; }
    if (taxYear < 2024)
        return (income * 2);
    return (income * 1.5);
}
console.log(calculateTax(10000));
