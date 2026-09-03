let HIGHEST_GRADE = 100;
let PASSING_GRADE = 50;
let PASSED = [];
let FAILED = [];

const SUBJECT = "MATH"|"PHYSICS"|"CHEMISTRY";


let students = [
    { name: "John Doe", grade: 89, subject: ["Math", "Physics", "English"], gender: "male" },
    { name: "Jane Smith", grade: 95, subject: ["Math", "Physics", "Chemistry", "English"], gender: "female" },
    { name: "Bob Johnson", grade: 78, subject: ["Math", "Chemistry"], gender: "male" },
    { name: "Alice Williams", grade: 43, subject: ["Math", "English", "Further Mathematics", "Chemistry"], gender: "female" },
    { name: "Charlie Brown", grade: 62, subject: ["Math", "English", "Physics", "Computer Science"], gender: "male" },
    { name: "David Lee", grade: 35, subject: ["Math", "English", "Data processing", "Chemistry"], gender: "male" },
    { name: "Eva Green", grade: 28, subject: ["Math", "English", "Further Mathematics"] },
]

let total_phy = 0;
let total_chem = 0;

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.grade < HIGHEST_GRADE && student.grade >= PASSING_GRADE) {
        PASSED.push(student);
    } else if (student.grade < PASSING_GRADE) {
       FAILED.push(student);
    } else {
        console.log(`Invalid grade for ${student.name}: ${student.grade}`);
    }

    for (let j = 0; j < student.subject.length; j++) {
        let subject = student.subject[j];
        switch(subject) {
            case "Physics":
                total_phy += 1;
                break;
            case "Chemistry":
                total_chem += 1;
                break;
            case "Math":
                break;
            default:
                // console.log(`Invalid subject for ${student.name}: ${subject}`);
        }
    }

    let direction = student.gender === "male" ? "left":"right"

    console.log(`${student.name} is going ${direction} because ${student.gender === "male" ? "he is male" : "she is female"} `);
}

// console.log(`TOTAL PASSED STUDENTS: ${PASSED.length}`);
// console.log(`TOTAL FAILED STUDENTS: ${FAILED.length}`);
// console.log(`TOTAL PHYSICS GRADES: ${total_phy}`);
// console.log(`TOTAL CHEMISTRY GRADES: ${total_chem}`);


