import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../UserContext'

const User = () => {
    //
    const user = useContext(UserContext)
     const [name,age,gender] = user
  return (
    <div>
      <h3>`My name is {name}</h3>
      <h4>`im {age} years old`</h4>
      <h4>`im proud to be a {gender}`</h4>
    </div>
    
  )
}

export default User
