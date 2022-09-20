import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [initialTime, updateTime] = useState(time);

  function latestTime() {
    updateTime(new Date().toLocaleTimeString())
  }
  
  setInterval(latestTime, 1000)

  return (
    <div className="container">
      <h1>{initialTime}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
