const user: {
    company: 'Programming Hero',
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string  // optional property
} = {
    company: 'Programming Hero',
    name: 'John Doe',
    age: 50,
    isMarried: true,
}

console.log(user.company, ' ', user.age);

// object with type aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeType: Employee = {
    id: 1,
    name: 'John Doe',
    retire: (date: Date) => {
        console.log(date);
    }
}