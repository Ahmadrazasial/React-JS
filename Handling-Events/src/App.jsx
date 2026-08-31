import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './app.css'
// import { Toolbar } from './components/EventHandlers'
import { Toolbar } from './components/Expicitly'

function App() {
  const [name, setName] = useState("Ahmad");
  const [form, setForm] = useState({ email: " ", phone: " " });

  const handleClick = () => {
    alert("I am clicked")
  }
  const handleOnHover = () => {
    alert("I was hovered")
  }

  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)

  }
  useEffect(() => {
    console.log(name)
  }, [name])
  const valueChange = (e) => {
    // e.target.name === "email" ? setForm({...form,email:e.target.value}):setForm({...form,phone:e.target.value})
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleOnHover} >
        I am a red div
      </div>
      <input type="text" className="name w-[20%] border rounded px-3 py-1" value={name} onChange={handleChange} />

      <div className="inputs">
        <input type="text" name="email" value={form.email} onChange={valueChange} className="email w-[20%] border rounded px-3 py-1" />
        <input type="text" name='phone' value={form.phone} onChange={valueChange} className="phone w-[20%] border rounded px-3 py-1" />
      </div>
      {/* <Toolbar/> */}
      <Toolbar onPlayMovie={() => alert("Playing!")} />
    </>

  )
}

export default App
