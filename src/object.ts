class Animal {
  //   public name: string;
  //   public species: string;
  //   public sound: string;

  // Parameter Properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
const cat = new Animal("Persian", "Cat", "Meaow Meaow");

dog.makeSound();
cat.makeSound();
