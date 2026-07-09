import React from 'react'

const Student = ({name , age, course}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  )
}

const Props = () => {
  return (
    <div>
      <Student name={"Ahmad Raza"} age={23} course={"Web Development"} />
    </div>
  )

}

export default Props
