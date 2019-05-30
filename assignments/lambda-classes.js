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

class Instructor {
  constructor(attributes) {
    this.specialty = attributes.specialty;
    this.subject = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${subject}.`;
  }
  grade() {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
}
