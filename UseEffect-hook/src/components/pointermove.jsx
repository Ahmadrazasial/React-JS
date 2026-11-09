import {useEffect, useState} from 'react';

export function PointerMove() {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(() => {
      function handleMove(e) {
        setPosition({x:e.clientX,y:e.clientY})
       
      }
     window.addEventListener('mousemove',handleMove)
      return () => {
        window.removeEventListener('mousemove',handleMove)
      }
    }, [])
    return(
        <div style={{position: 'fixed',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40}}></div>
    )
    
}