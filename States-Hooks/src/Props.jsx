import React from 'react'

function Student({name,age,gender}) {
  return(<>
  
    <p>{`Name: ${name}, Age: ${age}, Gender: ${gender}`}</p>
  </>
  )
}

function Students({n,a,g}) {
  return (
  <div className="studentList">
  <Student name={n} age={a} gender={g}/>  
  </div>
  )
}
export default Students
