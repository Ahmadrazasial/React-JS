//Reading Props in event handlers
function AlertButton({message,children}) {
    return(
        <>
        <button className="border w-[30%]" onClick={()=>alert(message)}>{children}</button>
    </>
    )
}
//Passing event handlers as props
function Button({onClick,children}) {
    return(
        <button className="border w-[30%]" onClick={e=> {e.stopPropagation(); onClick()}}>{children}</button>
    )
}

function PlayButton({movieName}) {
    function handleClick() {
        alert(`playing ${movieName}`)
    }
    return(
        <Button onClick={handleClick}>
            Play "{movieName}"
        </Button>
    )
}
function UploadButton({}) {
    function handleClick() {
        alert(`Uploading`)
    }
    return(
        <Button onClick={handleClick}>
            Upload Image
        </Button>
    )
}
 

//Naming Props
function ButtonBar({onPlayMovie,onUploadImage}) {
    return(
        <>
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onUploadImage}>Upload Image</Button>
        </>
    )
}


//Event Propagation

function EventBar() {
    return(
        <>
        <div className="parent" onClick={()=> alert("You clicked on EventBar")}>
            <button className="border w-[30%]" onClick={()=> alert("Playing")}>Play Movie</button>
            <button className="border w-[30%]" onClick={()=> alert("Uploading")}>Upload Image</button>
            </div>
        </>
    )
}
//Stop Propagation
function EventStopBar() {
    return(
        <>
        <div className="parent w-full border my-1" onClick={()=> alert("You clicked on EventBar")}>
            <Button className="border w-[30%]" onClick={()=> alert("Playing")}>Play Movie</Button>
            <Button className="border w-[30%]" onClick={()=> alert("Uploading")}>Upload Image</Button>
            </div>
        </>
    )
}

export function Toolbar() {
    return(
        <>
        <h2>Reading Props in Event Handlers</h2>
        <AlertButton message="Playing">
            Play Movie
        </AlertButton>
        <AlertButton message="Uploading">
            Upload Image
        </AlertButton>
        <h2>Passing event handlers as props</h2>
        <PlayButton movieName="Kiki's Delivery Service"/>
        <UploadButton/>
        <h2>Naming Props</h2>
        <ButtonBar onPlayMovie={()=> alert("Playing")} onUploadImage={()=> alert("Uploading")}/>
        <h2>Event Propagation</h2>
        <EventBar/>
        <EventStopBar/>
        </>
        
    )
}