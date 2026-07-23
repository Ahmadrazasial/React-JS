import React, { createContext ,useContext,useState} from 'react'
const ThemeContext = createContext(null);
const CurrentUserContect = createContext(null);

const Inputsthemes = () => {
    const [theme , setTheme] = useState("light");
  return (
    <div>
      
      <MyProviders theme={theme} setTheme={setTheme}>
        <WelcomePanel>
            <label >
                <input type="checkbox" checked={theme ==='dark'} onChange={(e)=>{setTheme(e.target.checked ? 'dark':'light')}} id="" />
            Use Dark mode
            
            </label>
        </WelcomePanel>
      </MyProviders>


    </div>
  )
}
function MyProviders({theme,children,setTheme}) {
    const [currentUser,setCurrentUser] = useState(null);
    return(
        <ThemeContext.Provider value={theme}>
            <CurrentUserContect.Provider value={{currentUser,setCurrentUser}}>
                {children}
            </CurrentUserContect.Provider>
        </ThemeContext.Provider>
    )
}
function WelcomePanel({children}) {
    const {currentUser} = useContext(CurrentUserContect);
    return(
        <Panel title="welcome">
            {currentUser !== null ? <Greeting/>:<LoginForm/>}
            {children}
        </Panel>
    )
}

function Greeting() {
    const {currentUser} = useContext(CurrentUserContect)
    return(
        <p>You have logged in as {currentUser.name}</p>
    )
}

function LoginForm() {
    const {setCurrentUser} = useContext(CurrentUserContect);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const canLogin = firstName !=="" && lastName !=="";
    return(
        <>
        <label htmlFor="">First Name :<input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}/> </label>
         <label htmlFor="">Last Name :<input type="text" required value={lastName} onChange={e => setLastName(e.target.value)}/> </label>
         <button disabled={!canLogin} onClick={()=>{
            setCurrentUser({
                name:firstName + '' + lastName 
            })
         }}>Login</button>
         {!canLogin && <i>Fill in both fields</i>}
        </>
    )
}

function Panel({title,children}) {
    const theme = useContext(ThemeContext);
    const className = "panel-" + theme
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Inputsthemes
