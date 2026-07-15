import React from "react";

function Timer() {
    const [Time, setTime] = React.useState(0);
    React.useEffect(() => {
        let startTime = Date.now();
        // const duration = startTime + 20000;

        const interval = setInterval(() => {
            const elapsedTime = Math.ceil((Date.now() - startTime)/1000);
            // console.log(elapsedTime)
            // const remainingTime = Math.ceil(elapsedTime / 1000);
            setTime(elapsedTime);
            if (elapsedTime >= 20) {
                startTime = Date.now();
                setTime(0);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    return Time
}

export default Timer;