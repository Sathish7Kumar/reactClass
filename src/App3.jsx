import React, { useEffect, useState } from "react";
// import students from "./new/Students";
import "./App.css";

const App3 = () => {
  const students = [];

  for (let i = 1; i <= 15; i++) {
    students.push({
      studentName: `ECE_Student_${i}`,
      studentCourse: "ECE",
      isPresent: Math.random() < 0.5,
    });
  }

  for (let i = 1; i <= 15; i++) {
    students.push({
      studentName: `CS_Student_${i}`,
      studentCourse: "CS",
      isPresent: Math.random() < 0.5,
    });
  }

  for (let i = 1; i <= 15; i++) {
    students.push({
      studentName: `Mechanical_Student_${i}`,
      studentCourse: "Mechanical",
      isPresent: Math.random() < 0.5,
    });
  }

  for (let i = 1; i <= 15; i++) {
    students.push({
      studentName: `IT_Student_${i}`,
      studentCourse: "IT",
      isPresent: Math.random() < 0.5,
    });
  }

  const [seatArrangement, setSeatArrangement] = useState([]);

  const oddRow = ["CS", "ECE", "Mechanical", "IT"];
  const evenRow = ["IT", "Mechanical", "ECE", "CS"];

  const allocateStudent = (row, column) => {
    const studentType =
      row % 2 === 1 ? oddRow[column - 1] : evenRow[column - 1];

    const newSeatArrangement = [
      ...seatArrangement,
      { row, column, studentType },
    ];
    setSeatArrangement(newSeatArrangement);
  };
  return (
    <>
      <div className="App">
        <h1>Students Sitting Arrangements</h1>
        <div className="hall">
          {[...Array(15)].map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {[...Array(4)].map((_, colIndex) => {
                const seat = seatArrangement.find(
                  (seat) =>
                    seat.row === rowIndex + 1 && seat.column === colIndex + 1
                );
                return (
                  <button
                    className="bench"
                    key={colIndex}
                    onClick={() => allocateStudent(rowIndex + 1, colIndex + 1)}
                    disabled={seat !== undefined}
                  >
                    {seat ? <span>{seat.studentType}</span> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App3;

// const [student, setstudent] = useState([])
// useEffect(()=>{
//     setstudent(students)
// },[])
// console.log(student);
