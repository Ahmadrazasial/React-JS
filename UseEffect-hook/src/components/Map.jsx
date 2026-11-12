import {useEffect ,useRef,useState} from 'react';
import { MapWidget } from './map-widget';
function Map({zoomLevel}){
    const containerRef = useRef(null);
    const mapref = useRef(null);

   
    
    useEffect(() => {
      
     if(mapref.current === null){
        mapref.current = new MapWidget(containerRef.current)
    }
    const map = mapref.current;
    map.setZoom(zoomLevel)
    }, [zoomLevel])

    return(
        <>
        <div ref={containerRef} style={{width:'100%',height:400}}></div>
        </>
    )
    
}

export function MapComponent(){
    const [zoomLevel,setZoomLevel] = useState(0);

    return(
        <>
        Zoom level: {zoomLevel}x
        <button onClick={()=>setZoomLevel(zoomLevel+1)}>+</button>
        <button onClick={()=>setZoomLevel(zoomLevel-1)}>-</button>
        <hr/>
        <Map zoomLevel={zoomLevel}/>
        </>
    )
}