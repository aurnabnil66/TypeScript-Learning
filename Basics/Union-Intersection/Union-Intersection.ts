type NoobDeveloper = {
    name: string
    email: string
    age: number
    salary: number
}

type JuniorDeveloper = NoobDeveloper & {  // extends
    expertise: string
    experience: number
    numofProjects: number
}

enum level{
    junior= 'junior',
    mid= 'mid',
    senior= 'senior'
}

type NextLevelDeveloper = JuniorDeveloper & {   // extends
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior'
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 24,
    salary: 30000,
    expertise: 'JavaScript',
    experience: 5,
    numofProjects: 20
}

const developer: NextLevelDeveloper = {  // as extends ==> all the properties should be here
    name: 'Mickel Angello',
    email: 'mickelangello@gmail.com',
    age: 27,
    salary: 30000,
    experience: 5,
    expertise: 'JavaScript',
    numofProjects: 50,
    leadershipExperience: 1,
    level: 'mid'
}

console.log(newDeveloper);
console.log(developer);