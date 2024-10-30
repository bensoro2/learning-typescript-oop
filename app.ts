// สร้างคลาส Animal
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// สร้างคลาส Dog ที่สืบทอดจาก Animal
class Dog extends Animal {
  public makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

// สร้างคลาส Cat ที่สืบทอดจาก Animal
class Cat extends Animal {
  public makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

// สร้างอ็อบเจกต์จากคลาส Dog และ Cat
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// เรียกใช้เมธอด
dog.makeSound(); // Buddy barks.
cat.makeSound(); // Whiskers meows.
