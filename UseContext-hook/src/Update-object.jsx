import React, { createContext,useContext,useState } from 'react';

const CurrentUserContext = createContext(null);

const Update = () => {
    const [currentUser,setCurrentUser] = useState(null);
  return (
    <div>
      <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
        <Form/>
      </CurrentUserContext.Provider>
    </div>
  )
}
function Form({children}) {
    return(
        <Panel title="Welcome">
            <LoginButton/>
        </Panel>
    )
}

function LoginButton() {
    const {currentUser,setCurrentUser} = useContext(CurrentUserContext);

    if(currentUser !== null){
        return <p>you logged in as {currentUser.name}</p>
    }
    return (
        <button onClick={
            ()=>{
                setCurrentUser({name:"Ahmad"})
            }
        }>Login as</button>
    )
}

function Panel({title,children}) {
    return(
        <section className='Panel'>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
export default Update
