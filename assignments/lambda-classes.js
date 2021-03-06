//CODE here for your Lambda Classes


/*
* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  * 
  * * Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following uniqe props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class Person {
    constructor(PersonAttributes) {
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;
        this.gender = PersonAttributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subjectStr) {
        console.log(`Today we are learning about ${subjectStr}.`)
    }
    grade(studentStr, subjectStr) {
        console.log(`${studentStr.name} receives a perfect score on ${subjectStr}`)
    }
}

class Student extends Person {
    constructor(StudentAttributes) {
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
    }
    listsSubjects() {
        for (let i = 0 ; i < this.favSubjects.length ; i++) {
            console.log(this.favSubjects[i])
        }
    
    }
    PRAssignment(subjectStr) {
        console.log(`${this.name} has submitted a PR for ${subjectStr}`)
    }
    sprintChallenge(subjectStr) {
        console.log(`${this.name} has begun sprint challenge on ${subjectStr}`)
    }
}


class ProjectManager extends Instructor {
    constructor(ProjectManagerAttributes) {
        super(ProjectManagerAttributes);
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`)
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    }
}


const Justin = new Student({
    'gender': 'M',
    'age': 26,
    'name': 'Justin',
    'location': 'St. Louis',
    previousBackground: "Data Entry",
    className: "CS12",
    favSubjects: ["HTML", "JS", "CSS", "Python"]

});


const Josh = new Instructor({
    name: 'Josh',
    location: 'Vegas',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "I'm the Vince Lombardi of Programming"
});

const Russell = new Instructor({
    name: 'Russell',
    location: 'Somewhere else',
    age: 22,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Backend',
    catchPhrase: 'Foobar'
});

const Nathan = new ProjectManager({
    name: 'Nathan',
    location: 'Florida',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: "Mid or I feed",
    gradClassName: "CS7",
    favInstructor: "Josh"
});

Justin.listsSubjects();
Justin.PRAssignment("JavaScript");
Justin.sprintChallenge("Front-End");
Josh.demo("CSS");
Josh.grade(Justin, "CSS");
Nathan.standUp("CS12-Nate");
Nathan.debugsCode(Justin, "Javascript");
console.log(Nathan.catchPhrase);



