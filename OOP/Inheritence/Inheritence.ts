class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `${this.name} will sleep for ${hours} for hours`;
  }
}

class Student extends Person {
  qualification: string;
  course: string;
  numberOfCourses: number;

  constructor(
    name: string,
    age: number,
    address: string,
    course: string,
    numberOfCourses: number
  ) {
    super(name, age, address);
    this.course = course;
    this.numberOfCourses = numberOfCourses;
  }

  detailsOfStudent(studies: string): string {
    return `${this.name} has taken ${this.numberOfCourses} courses for ${studies}`;
  }
}

const student = new Student('John Doe', 21, '123 Main St', 'Computer Science', 5);
console.log(student.makeSleep(8));
console.log(student.detailsOfStudent('BSC'));
