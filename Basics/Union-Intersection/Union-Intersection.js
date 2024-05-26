var level;
(function (level) {
    level["junior"] = "junior";
    level["mid"] = "mid";
    level["senior"] = "senior";
})(level || (level = {}));
var newDeveloper = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 24,
    salary: 30000,
    expertise: 'JavaScript',
    experience: 5,
    numofProjects: 20
};
var developer = {
    name: 'Mickel Angello',
    email: 'mickelangello@gmail.com',
    age: 27,
    salary: 30000,
    experience: 5,
    expertise: 'JavaScript',
    numofProjects: 50,
    leadershipExperience: 1,
    level: 'mid'
};
console.log(newDeveloper);
console.log(developer);
