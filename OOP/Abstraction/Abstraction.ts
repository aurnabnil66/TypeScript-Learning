abstract class Vehicle{
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ){}
    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void{
        console.log('I am moving');
    }
}

class CarVehicle extends Vehicle{
    startEngine(): void {
        console.log('I am starting the engine');
    }
    stopEngine(): void {
        console.log('i am stopping the engine');
    }
}

const carObj = new CarVehicle('Car', 'Honda', 2015);

console.log(carObj);

console.log(carObj.model);

console.log(carObj.brand);

carObj.startEngine();

carObj.stopEngine();