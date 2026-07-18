import { useRef , useState} from "react";
function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current++;
    alert(ref.current)
    console.log(ref.current)

  }

  return (
    <>
    <h1>{ref.current}</h1>
    <button onClick={handleClick}>change ref</button>
    </>
  )
}


function StopWatch() {
    const [start ,setStart] = useState(null);
    const [now ,setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(()=>{
            setNow(Date.now)

        },10)
    }
     function handleStop() {
        clearInterval(intervalRef.current)
     }
     let seconds = 0;
     if(start != null && now != null){
        seconds = (now - start) / 1000
     }

     return (
        <>
        <h1>{`Time paseesd : ${seconds.toFixed(3)}`} </h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
     )
}


export { Counter, StopWatch}