const HIGHEST_GRADE = 100;
const PASSING_GRADE = 50;

let students = [
    { name: "John Doe", grade: 89, subject: ["Math", "Physics", "English"], gender: "male" },
    { name: "Jane Smith", grade: 95, subject: ["Math", "Physics", "Chemistry", "English"], gender: "female" },
    { name: "Bob Johnson", grade: 78, subject: ["Math", "Chemistry"], gender: "male" },
    { name: "Alice Williams", grade: 43, subject: ["Math", "English", "Further Mathematics", "Chemistry"], gender: "female" },
    { name: "Charlie Brown", grade: 62, subject: ["Math", "English", "Physics", "Computer Science"], gender: "male" },
    { name: "David Lee", grade: 35, subject: ["Math", "English", "Data processing", "Chemistry"], gender: "male" },
    { name: "Eva Green", grade: 28, subject: ["Math", "English", "Further Mathematics"] },
];

// Create a function to get the students subject list and their grades
function getStudentDetails(student) {
    // Destructure the student object to get the name, grade, and subject
    let { name, grade, subject } = student;
    return `${name} has a grade of ${grade} and is taking the following subjects: ${subject.join(", ")}`;
}

console.log(getStudentDetails(students[4])); // John Doe has a grade of 89 and is taking the following subjects: Math, Physics, English

/**
 * ASSIGMENT
 * create a functions that check each student grade, it should return an object with mark which can either be pass or fail, based on the grade
 * 
 * create another function to get their grades and their list of subjects, it should be return in an object
 *  */ 

function getStudentGrade(student) {
let { name, grade,  } = student;
if (student.grade >= PASSING_GRADE) {
return { mark: "pass" };
}
return { mark: "fail" };
}

for (let i = 0; i < students.length; i++) {
    console.log(getStudentGrade(students[i]));
}

function getStudentGradeList(student) {
    let { subject, grade } = student;

    if (grade >= PASSING_GRADE) {
        return { subject: subject, grade: grade, mark: "pass" };
    }

    return { subject: subject, grade: grade, mark: "fail" };
}

for (let i = 0; i < students.length; i++) {
    console.log(getStudentGradeList(students[i]));
}