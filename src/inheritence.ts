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
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Person {
  //   name: string;
  //   age: number;
  //   address: string;

  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //   makeSleep(hours: number): string {
  //     return `This ${this.name} will sleep for ${hours}`;
  //   }
}

const student1 = new Student("Mr. X", 20, "bangladesh");
console.log(student1.name);

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  //   makeSleep(hours: number): string {
  //     return `This ${this.name} will sleep for ${hours}`;
  //   }

  takeClasses(numOfclass: number) {
    return `This ${this.name} will take ${numOfclass} classes`;
  }
}

const teacher1 = new Teacher("Mr. Y", 54, "USA", "Professor");
console.log(teacher1.designation);
