type CarType = string;
type CarModel = string;
type CarYear = number;

type Car = {
    type: CarType,
    model: CarModel,
    year: CarYear
};

const carT : CarType = 'Toyota'
const carM : CarModel = 'Corolla'
const carY : CarYear = 2001

const newCar : Car ={
    type: carT,
    model: carM,
    year: carY
};

console.log(newCar.type);
