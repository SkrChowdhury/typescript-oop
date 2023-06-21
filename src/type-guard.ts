// keyof guard

type Alphanumeric = string | number;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add("1", "2");
add(1, 2);

//In Guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUSer(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an Admoin and my role is ${user.role}`;
  } else {
    return "I am a normal user";
  }
}
const normalUser1: NormalUserType = { name: "Mr, X" };

const adminUser1: AdminUserType = { name: "Mr. Y", role: "admin" };

console.log(getUSer(normalUser1));
console.log(getUSer(adminUser1));

// instanceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  public makeSound() {
    console.log(`I am making sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaow() {
    console.log("I am Meaowing");
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Dog;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaow();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Bhai", "Dog"); //instance of Dog
const animal2 = new Cat("Persian Bhai", "Cat"); //instance of Cat

getAnimal(animal1);
getAnimal(animal2);
