import React from 'react'
import Students from './Props.jsx'
import {useState}  from 'react'

const App = () => {
  const [students, setStudents] = useState([
    { name: 'Alice', age: 20, gender: 'Female' }
  ])
  return (
    <div>
      {students.map((student, index) => (
        <Students key={index} n={student.name} a={student.age} g={student.gender} />
      ))}
      <input type="text" className="name" />
      <input type="number" className="age" />
      <input type="text" className="gender" />
      <button onClick={() => {
        const name = document.querySelector('.name').value
        const age = document.querySelector('.age').value
        const gender = document.querySelector('.gender').value
        setStudents([...students, { name, age, gender }])
        console.log(students)
      }}>
        Add Student
      </button>
    </div>
  )
}


export default App
