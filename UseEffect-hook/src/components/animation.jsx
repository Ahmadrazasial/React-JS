export function Animation({ node, duration }) {
  let frameId = null;
  let startTime = performance.now();
  // console.log(startTime,frameId)



  function onProgress(progress) {
    node.style.opacity = progress;
  }

  function onFrame() {
    const elapsedTime = performance.now() - startTime;
    console.log(elapsedTime)
    const progress = Math.min(elapsedTime / duration, 1);

    onProgress(progress);
    if (progress < 1) {
      frameId = requestAnimationFrame(onFrame);
      console.log(frameId)
    }
  }

  if (duration <= 0) {
    onProgress(1);
  } else {
    onProgress(0);
    startTime = performance.now();
    frameId = requestAnimationFrame(onFrame)
    // console.log(frameId);
  }


  return function stop() {
    cancelAnimationFrame(frameId);
  }
}