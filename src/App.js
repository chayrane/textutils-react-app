import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  // App's UI mode. (light or dark mode)
  const [mode, setMode] = useState("light");

  const toggleLightDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* Navigation Bar With Default Properties */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      <NavBar
        title="TextUtils"
        mode={mode}
        toggleLightDarkMode={toggleLightDarkMode}
      />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
