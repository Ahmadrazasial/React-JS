import {useRef,useEffect} from 'react';
import { useIntersectionObserver } from './UseIntersectionObserver.jsx';

 function Box(){

    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref);
    useEffect(() => {
        if(isIntersecting){
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    },[isIntersecting])

    return(
        <>
        <div ref={ref} 
        style={{
            width:100,
            height:100,
            backgroundColor:'red',
            margin:20,
            border:'2px solid black'

        }}></div>
        </>
    )

}

export function BoxComponent(){
    return(
        <>
        <LogicSection/>
        <Box/>
        <LogicSection/>
        <Box/>
        <LogicSection/>
        </>
    )
}

function LogicSection(){
    const items =[];
    for(let i=0;i<50;i++){
        items.push(<li key={i}> Item #{i} Keep Scrolling</li>)
}
return <ul>{items} </ul>
}