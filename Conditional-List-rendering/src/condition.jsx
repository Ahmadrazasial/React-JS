import React, { createContext, useContext, useState } from 'react';

// const [state, setState] = useState(false);
// const TextContext = createContext(null);

// function Item({ name }) {
    
//     const {state} = useContext(TextContext)
//     return (
//         <div>
//             <li className='item'>{state && name + "✅"}</li>
//         </div>
//     )
// }

// function List() {
//     const [state, setState] = useState(false);
//     return (
//         <TextContext.Provider value={{state, setState}}>
//             <section>
//                 <ul>
//                     <Item name="Ahmad Raza"/>
//                     <Item name="Ahmad Raza"/>
//                     <Item name="Ahmad Raza"/>
//                 </ul>
//             </section>
//             <button onClick={()=>setState(!state)}>Toggle</button>
//         </TextContext.Provider>
//     )
// }

// export default List

const ListContext = createContext(null)

function ShowList() {
    const [condition,setCondition] = useState(false)
    return(
    <Section condition={condition} setCondition={setCondition}>

    </Section>
    )
}

function Section({condition,setCondition,children}) {
    return(
    <ListContext.Provider value={{condition,setCondition}}>
        <section>
           
            <UL></UL>
            <Button></Button>
        </section>
    </ListContext.Provider>
    )
}
function UL({children}) {
    const {condition} = useContext(ListContext);
    return(
        <>
        <h3>{condition? "Yes you have purchased everything":"Did you purchased everything"}</h3>
        <ul className='list'>
            <Item value="Clothes shopped"/>
            <Item value="Shoes shopped"/>
            <Item value="Jewelery shopped"/>
        </ul>
        </>
    )
}

function Item({value}) {
    const {condition} = useContext(ListContext);
    return(
        <>
        <li className='item'>{condition ? value + "✅" :value}</li>
       
        </>
    )
}

function Button() {
    const {setCondition} = useContext(ListContext);
    const {condition} = useContext(ListContext);
    return(
        <button onClick={()=>setCondition(!condition)}>{condition ? "I did'nt"  : "I did"}</button>
    )

}

 export default ShowList