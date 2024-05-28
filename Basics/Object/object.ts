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