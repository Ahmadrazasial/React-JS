import { useState ,useEffect } from "react";

export default function Container(){
const [data,setData] = useState([]);

useEffect(()=>{
    async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);
     setData(data);
    }
   fetchData();
},[]);

function Card(){
    return data.map(item => 
        <div className="card flex border w-full p-5 flex-row text-gray-800 " key={item.id}>
            <img src="./src/image.jpg" alt="image" className="w-[20%] object-cover" />
            <div className="Text flex flex-col gap-2 text-left">
                <div className="id">
                <span><b>Id:</b> {item.id}  </span>
                <span><b>User Id:</b> {item.userId}</span>
                </div>
                <h2>{`Title: ${item.title}`}</h2>
                <p>{`Body: ${item.body}`}</p>
            </div>
        </div>
        

    )
}

 return(
        <div className="container flex gap-4 align-center justify-center w-full flex-wrap my-2">
            <Card/>
        </div>
    )
}