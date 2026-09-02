import { useState,createContext,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import List from './condition'
import Scientists from './components/scientists'
import RecipeList from './components/RecipeList'


function App() {
  const [count, setCount] = useState(0)
  const [btn, setBtn] = useState(false);

  //Conditional Rendering
  function ShowBtn() {
    // Using if/else statement 
    // if(!btn){
    //   return(
    //   <>
    //   <button>I am a false btn</button>
    //    </> )
    // }
    //   return <button>I am a true btn</button>

    // using ternary operator
    // return (
    //   btn ? <button>i am a true btn 0</button> : <button>i am a false btn 0</button>
    // )

    //Simply ternary
    // return btn ?  <button>i am a true btn</button> :  <button>i am a false btn</button>


    //Using Ampersand

    // return btn && <button>This is only true btn</button>

    if (btn) {
      return null
    }
    return <button>This is only true btn</button>
  }

  //List rendering
  const [lists,setLists] = useState([
    {
      id:0,
      title:"Web devleopment"
    },
    {
      id:1,
      title:"App devleopment"
    },
    {
      id:2,
      title:"Software devleopment"
    }
  ])
 
  function Item({list}) {
    
    return btn ? (
    <div className="border border-purple-400 m-4 px-2 py-1 border-2 "> 
    <li>{list.title}</li>
    </div>
    ):null;
  }


  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <List />
        <ShowBtn />
            <ul className={`overflow-hidden transition-all duration-500  ${
              btn ? "translate-y-0 opacity-100":"translate-y-5 opacity-0" 
            }`}>
              <h3 className='text-blue-600 font-bold tran'>List of courses</h3>
              {lists.map(list =>{
                return( 
                <div key={list.id}>
              {<Item  list={list}/>}
              </div>
                )
              })}
            </ul>
            {btn && <Scientists />}
            <RecipeList/>
        <button
          type="button"
          className="counter"
          onClick={() => setBtn(!btn)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
