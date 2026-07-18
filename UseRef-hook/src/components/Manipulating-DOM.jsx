import { useState,useRef } from "react";

function VideoPlayer() {
    
    const [play,setPlay] = useState(false);
    const ref = useRef(null)

    function click() {
        const isplaying = !play;
        setPlay(isplaying);
        if(isplaying){
            ref.current.play()
            console.log(ref.current)
        }else{
            ref.current.pause();
        }
    }
    return (
        <>
        <button onClick={click} className="counter">{play ? "pause":"play"}</button>

       <video width={250} src="https://www.w3schools.com/html/mov_bbb.mp4" ref={ref} onPlay={() => setPlay(true)}
        onPause={() => setPlay(false) } > 
        </video>
</>
    )

}

export {VideoPlayer}