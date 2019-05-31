class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.catchPhrase = instructorAttributes.catchPhrase;
    this.favLanguage = instructorAttributes.favLanguage;
  }
  demo() {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listsSubjects() {
    return `The topic I like learning the most so far at Lambda is ${
      this.favSubjects
    }. `;
  }

  PRAssignment() {
    return `${student.name} has submitted a PR for {subject}`;
  }

  sprintChallenge() {
    return `${student.name} has begun sprint challenge on {subject}.`;
  }
}

const mary = new Instructor({
  name: "Mary",
  location: "New York",
  age: 40
});
