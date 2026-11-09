export function Animation({node,duration}) {
   if(!node) return null;

   let frameId = null
   const startTime = performance.now();

   function onFrame(){
    const elapsedtime = performance.now() - startTime;
    const progress = Math.min(elapsedtime / duration, 1);
    node.style.opacity = progress;
    if(progress < 1){
        frameId = requestAnimationFrame(onFrame)
    } 
    node.style.opacity = '0';
    frameId = requestAnimationFrame(onFrame)
   }

   return function stop(){
    
     cancelAnimationFrame(frameId);
    
   };
}