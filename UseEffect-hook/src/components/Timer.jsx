import React from "react";

function Timer() {
    const [Time,setTime] = React.useState(20);
    React.useEffect(()=>{
    let startTime = Date.now();
    const duration =   20000;

    

    const interval = setInterval(()=>{
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.ceil((duration - elapsedTime) / 1000);
        setTime(remainingTime);
        if(remainingTime <= 0){
            startTime = Date.now();
            setTime(20);
        }
    },1000);
return () => clearInterval(interval);
    },[])
    return Time
}

export default Timer;