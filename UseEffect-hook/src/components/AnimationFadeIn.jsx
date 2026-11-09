import { useState, useEffect, useRef } from 'react';
import { Animation } from './animation.jsx';

function Welcome() {
    const ref = useRef(null);
    useEffect(() => {
        const stopAnimation = Animation({ node: ref.current, duration: 1000 });

        return () => {
            stopAnimation();
        }
    }, [])
    return (
        <>
            <h1 ref={ref} style={{
                // opacity: 0,
                color: 'white',
                padding: 50,
                textAlign: 'center',
                fontSize: 50,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
            }}>Welcome</h1>
        </>
    )
}

export function AnimationFadeIn() {
    const [display, setDisplay] = useState(false);
    return (
        <>
        <button onClick={() => setDisplay(!display)}>
            {display ? "Hide" : "Show"}
            </button>
            <hr />
            {display && <Welcome />}
            </>
    )
}