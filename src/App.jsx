import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

export default function App() {
  // App's UI mode. (light or dark mode)
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleLightDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      // Make title blink in web browser's title tab.
      // setInterval(() => {
      //   document.title = " Home"
      // }, 2000);
      // setInterval(() => {
      //   document.title = " TextUtils"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
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

      <Alert alert={alert} />

      {/* <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
      </div> */}
      {/* <About /> */}

      {/* React Router DOM */}
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
