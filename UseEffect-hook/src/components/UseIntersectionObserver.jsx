import {useState, useEffect} from 'react';

export function useIntersectionObserver(ref) {
    const [isIntersecting , SetIsIntersecting] = useState(false);

    useEffect(() => {
        const div  = ref.current
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            SetIsIntersecting(entry.isIntersecting)
        },{
            threshold: 1.0
        })
        observer.observe(div);
    
      return () => {
        observer.unobserve(div);
      }
    }, [ref])
    return isIntersecting;
    
}