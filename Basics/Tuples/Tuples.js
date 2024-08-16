var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tuple1 = [10, 'John', 20];
var tuple2 = ['Messi', true];
var concatanatedTuple = __spreadArray(__spreadArray([], tuple1, true), tuple2, true);
console.log(concatanatedTuple);
