export function createConnction(serverUrl,roomId){
    return{
        connect(){
            console.log(`Connecting to ${serverUrl} in room ${roomId}`);
        },
        disconnect(){
            console.log(`Disconnecting from ${serverUrl} in room ${roomId}`);
        }
    }
}