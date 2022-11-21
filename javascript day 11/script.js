// EXERCISE 1
const constants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//  NO2
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

//  NO3
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// EXERCISE 2
// NO 1
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

for (let { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

// NO 2
console.log("\n");
let twoSkills = users.filter((user) => user["skills"].length < 2);
console.log(twoSkills);

// EXERCISE 3
// no  2
console.log("\n");
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

//  3NO
console.log("\n");
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(students) {
  let objects = {};
  for (let i = 0; i < students.length; i++) {
    let [name, skills, scores] = students[i];
    let obj = { name, skills, scores };
    objects[i] = obj;
  }
  console.log(objects);
}
convertArrayToObject(students);

//NO 4
console.log("\n");
const studentAdd = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

let newStudent = studentAdd;
newStudent["skills"]["frontEnd"].push({ skill: "Bootstrap", level: 8 });
newStudent["skills"]["backEnd"].push({ skill: "Express", level: 9 });
newStudent["skills"]["dataBase"].push({ skill: "SQL", level: 8 });
newStudent["skills"]["dataScience"].push({ skill: "SQL", level: 8 });
console.log(newStudent);