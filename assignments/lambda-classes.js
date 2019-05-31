class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.catchPhrase = instructorAttributes.catchPhrase;
    this.favLanguage = instructorAttributes.favLanguage;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`;
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

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Student {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel} @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

const tom = new Person({
  name: "Tom",
  location: "North Carolina",
  age: 50
});

const mary = new Instructor({
  name: "Mary",
  location: "New York",
  age: 80,
  specialty: "Full-Stack Web",
  catchPhrase: "Let build something.",
  favLanguage: "Python"
});

const jackie = new Student({
  name: "Jackie",
  location: "Kenya",
  age: 40,
  previousBackground: "Dentist",
  className: "WebPT7",
  favSubjects: "Classes in JavaScript"
});

const eden = new ProjectManager({
  name: "Eden",
  location: "Brazil",
  age: 20,
  gradClassName: "Web102",
  favInstructor: "Brad Traversy"
});

console.log(jackie.name);
console.log(jackie.className);
console.log(mary.favLanguage);
console.log(jackie.listsSubjects());
console.log(mary.demo("Node.js"));
console.log(jackie.grade("Jackie", "JavaScript"));
console.log(eden.standUp("Web102"));
console.log(eden.debugsCode("Jackie", "Java"));
console.log(jackie.speak());
console.log(tom.speak());
console.log(jackie.PRAssignment("classes"));
console.log(jackie.sprintChallenge("Javascript"));
