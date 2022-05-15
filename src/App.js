import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect"

function App() {
  return ( // https://www.npmjs.com/package/typewriter-effect
    <div className="App">
      <Typewriter
        onInit={(type) => {
          type
            .typeString("Love and Free!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Lets...")
            .pauseFor(1000)
            .deleteAll()
            .callFunction(() => {
              alert("welcome")
            })
            .typeString("!etz")
            .start()
        }}
      />
    </div>
  );
}

export default App;
