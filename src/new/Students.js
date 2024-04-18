const students = [];

for (let i = 1; i <= 15; i++) {
  students.push({
    studentName: `ECE_Student_${i}`,
    studentCourse: "ECE",
    isPresent: Math.random() < 0.5 // Randomly assigning attendance
  });
}

for (let i = 1; i <= 15; i++) {
  students.push({
    studentName: `CS_Student_${i}`,
    studentCourse: "CS",
    isPresent: Math.random() < 0.5
  });
}

for (let i = 1; i <= 15; i++) {
  students.push({
    studentName: `Mechanical_Student_${i}`,
    studentCourse: "Mechanical",
    isPresent: Math.random() < 0.5
  });
}

for (let i = 1; i <= 15; i++) {
  students.push({
    studentName: `IT_Student_${i}`,
    studentCourse: "IT",
    isPresent: Math.random() < 0.5
  });
}

export default students