import { useState, useEffect } from 'react';
import { createConnction } from './chat.jsx';
function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:8080");

    useEffect(() => {
        const connection = createConnction(serverUrl, roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        }
    }, [serverUrl, roomId])

    return (
        <>
            <label>
                serverUrl: {" "}
                <input type="text " value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
                <h1>Welcome to the {roomId} room!</h1>
            </label>
        </>
    )
}
export function ServerRoom() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);
    return (
        <>
            <label>
                Choose the chatroom: {" "}
                <select name="" id="" value={roomId} onChange={e => setRoomId(e.target.value)}>
                    <option value="general">General</option>
                    <option value="sports">Sports</option>
                    <option value="music">Music</option>
                </select>
                <button onClick={() => setShow(!show)}>
                    {show ? "close chat" : "open chat"}
                </button>
                {show && <hr />}
                {show && <ChatRoom roomId={roomId} />}
            </label>
        </>
    )

}