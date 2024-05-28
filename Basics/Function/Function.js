// Normal Function
function addOP(num1, num2) {
    return num1 + num2;
}
console.log(addOP(3, 10));
// Spread Operator
var myFriends = ['Chandler', 'John', 'Rose'];
var newFriends = ['Monica', 'Otis', 'Rachel'];
var myBestFriend = {
    fullName: 'Tom Edwards',
    age: 24
};
// Array and Object destructuring
var bestFriend = myFriends[0]; // contains the first element of the myFriends array
var fullName = myBestFriend.fullName; // Contains the value of the fullname property of the myBestFriend object
var greetFriends = function () {
    var myFriends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        myFriends[_i] = arguments[_i];
    }
    return myFriends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
//  collects all the arguments passed to the function and stores them in an array named myFriends
//  string[] indicates that these arguments must be strings
greetFriends('A', 'B', 'C', 'D', 'E'); // this holds the function
var addArrow = function (num1, num2) { return num1 + num2; };
addArrow(10, 12);
var arr = [1, 4, 5, 100, 80, 13];
var newArray2 = arr.map(function (element) { return element & element; }); // parameter element should be of type number
var person = {
    name: 'John',
    balance: 4,
    addBalance: function (money) {
        return "My new balance is ".concat(this.balance + money);
    },
};
