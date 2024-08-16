var _a;
function getCustomerBirthday(id) {
    return id === 0 ? null : { Birthday: new Date() };
}
var customer = getCustomerBirthday(1);
// if(customer !== null && customer !== undefined)
// This can be written as an optional operator
// if Birthday is not null or undefined
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.Birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
