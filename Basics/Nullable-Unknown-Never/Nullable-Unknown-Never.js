// Nullable type
var searchName = function (value) {
    if (value) {
        console.log('Searching');
    }
    else {
        console.log('There is nothing to search');
    }
};
searchName('Aurnab'); // valid value is passed to the function
// Unknown type
var getSpeed = function (value) {
    if (typeof (value) === 'number') {
        var convertSpeed = (value * 1000) / 3600;
        console.log("The speed is ".concat(convertSpeed, " m/s"));
    }
    else if (typeof (value) === 'string') {
        var _a = value.split(''), result = _a[0], unit = _a[1];
        var convertSpeed = (parseFloat(result) * 1000) / 3600;
        console.log("The speed is ".concat(convertSpeed, " m/s"));
    }
    else {
        console.log('Wrong input');
    }
};
getSpeed(20);
getSpeed('10 kmh^-1');
getSpeed(true);
// Never Types
function throwError(message) {
    throw new Error(message);
}
;
// const throwError = (message: string): never => {
//     throw new Error(message);
// };
throwError('Error occured');
