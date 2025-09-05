import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCounter, setChangeCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setChangeCounter(changeCounter + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <p className="changes">Ch-ch-ch-changes: {changeCounter}</p>
      <div className="buttons">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
