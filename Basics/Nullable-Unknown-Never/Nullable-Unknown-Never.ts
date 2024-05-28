// Nullable type
const searchName = (value : string) => {
    if(value){
        console.log('Searching');
    }
    else{
        console.log('There is nothing to search');
    }
};

searchName('Aurnab');  // valid value is passed to the function

// Unknown type
const getSpeed = (value: unknown) => {
    if(typeof(value) === 'number'){
        const convertSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertSpeed} m/s`);
    }
    else if(typeof(value) === 'string'){
        const[result, unit] = value.split('');
        const convertSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The speed is ${convertSpeed} m/s`);
    }
    else{
        console.log('Wrong input');
    }
};

getSpeed(20);
getSpeed('10 kmh^-1');
getSpeed(true);

// Never Types
function throwError(message: string): never{
    throw new Error(message);
};

// const throwError = (message: string): never => {
//     throw new Error(message);
// };

throwError('Error occured');