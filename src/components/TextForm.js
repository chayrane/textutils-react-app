import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Wrong way to change the state.
  // text = "new text";

  // Correct way to change text value
  // setText("new text");

  //   let wordCount = 0;
  //   let charCount = 0;

  const handleUpCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleLowCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // handling/updating changes made in textarea.
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = () => {
    if (text === "") return 0;
    else return text.split(" ").length;
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#303030",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleLowCaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary ms-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary ms-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary ms-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>

        {/* Calculating words and characters */}
        <p className="m-0">
          {wordCount()} words and {text.length} characters
        </p>

        {/* Average time required for reading */}
        <p className="m-0">{0.008 * wordCount()} minutes read</p>

        <h2 className="mt-3">Preview</h2>
        <p>{text.length > 0 ? text : "No preview available."}</p>
      </div>
    </>
  );
}
