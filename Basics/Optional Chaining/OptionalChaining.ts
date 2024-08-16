type Customer = {
    Birthday?: Date;
}

function getCustomerBirthday(id: number): Customer | null | undefined {
    return id === 0 ? null : {Birthday: new Date()} 
}

let customer = getCustomerBirthday(1)

// if(customer !== null && customer !== undefined)
// This can be written as an optional operator
// if Birthday is not null or undefined

console.log(customer?.Birthday?.getFullYear())

// optional element access if we get an array
// customer?.[0]

// optional call
let log: any = null;
log?.('a')
