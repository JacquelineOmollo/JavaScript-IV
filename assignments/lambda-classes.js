class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    return `hello my name is ${name}, I am from ${location}.`;
  }
}
