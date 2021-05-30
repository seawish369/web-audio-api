import React from 'react';

function App() {
  const audioContext = new AudioContext();
  const oscillatorNode = audioContext.createOscillator();
  oscillatorNode.connect(audioContext.destination);

  const handleClick = () => {
    oscillatorNode.start();
  };
  
  return (
    <div className="App">
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default App;
