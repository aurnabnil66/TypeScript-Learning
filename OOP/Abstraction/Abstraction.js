var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    Vehicle.prototype.move = function () {
        console.log('I am moving');
    };
    return Vehicle;
}());
var CarVehicle = (function (_super) {
    __extends(CarVehicle, _super);
    function CarVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarVehicle.prototype.startEngine = function () {
        console.log('I am starting the engine');
    };
    CarVehicle.prototype.stopEngine = function () {
        console.log('i am stopping the engine');
    };
    return CarVehicle;
}(Vehicle));
var carObj = new CarVehicle('Car', 'Honda', 2015);
console.log(carObj);
console.log(carObj.model);
console.log(carObj.brand);
carObj.startEngine();
carObj.stopEngine();
