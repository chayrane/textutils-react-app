import React, { useState } from "react";
import {
  toTitleCase,
  toCapitalizeCase,
  toAlternateCase,
} from "../utils/textUtils";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  };

  const handleCaitalizeCaseClick = () => {
    setText(toCapitalizeCase(text));
  };

  const handleTitleCaseClick = () => {
    setText(toTitleCase(text));
  };

  const handleAlternateCaseClick = () => {
    setText(toAlternateCase(text));
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    setText("");
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
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary ms-1" onClick={handleLowerCaseClick}>
          lower case
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={handleCaitalizeCaseClick}
        >
          Capitalize case
        </button>
        <button className="btn btn-primary ms-1" onClick={handleTitleCaseClick}>
          Title Case
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={handleAlternateCaseClick}
        >
          AlTeRnAtE Case
        </button>
        <button className="btn btn-primary ms-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary ms-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary ms-1" onClick={handleClearClick}>
          Clear Text
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
