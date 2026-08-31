export  function Toolbar({ onPlayMovie }) {
  function handlePlayClick() {
    console.log("Button clicked");

    onPlayMovie(); // explicitly call parent's function
  }

  return (
    <button onClick={handlePlayClick}>
      Play Movie
    </button>
  );
}
<Toolbar onPlayMovie={() => alert("Playing!")} />