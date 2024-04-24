import React, { useState } from "react";
import {
  toTitleCase,
  toCapitalizeCase,
  toAlternateCase,
} from "../utils/textUtils";
import { downloadToTxtFile } from "../utils/fileUtils";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPERCASE successfully...!", "success");
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase successfully...!", "success");
  };

  const handleCaitalizeCaseClick = () => {
    setText(toCapitalizeCase(text));
    props.showAlert("Converted to Capitalize case successfully...!", "success");
  };

  const handleTitleCaseClick = () => {
    setText(toTitleCase(text));
    props.showAlert("Converted to Title Case successfully...!", "success");
  };

  const handleAlternateCaseClick = () => {
    setText(toAlternateCase(text));
    props.showAlert("Converted to Alternate Case successfully...!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed successfully...!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("textAreaInput");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard...!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared successfully...!", "success");
  };

  const handleDownloadTextClick = () => {
    saveTextAsFile();
    props.showAlert("File downloaded successfully...!", "success");
  };

  function saveTextAsFile() {
    var textToSave = document.getElementById("textAreaInput").value;
    downloadToTxtFile(textToSave);
  }

  // handling/updating changes made in textarea.
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Count words in a sentences
  const wordCount = () => {
    if (text === "") return 0;
    else
      return text.split(" ").filter((element) => element.length !== 0).length;
  };

  return (
    <>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            id="textAreaInput"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#303030",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpperCaseClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary ms-1 my-1" onClick={handleLowerCaseClick}>
          lower case
        </button>
        <button
          className="btn btn-primary ms-1 my-1"
          onClick={handleCaitalizeCaseClick}
        >
          Capitalize case
        </button>
        <button className="btn btn-primary ms-1 my-1" onClick={handleTitleCaseClick}>
          Title Case
        </button>
        <button
          className="btn btn-primary ms-1 my-1"
          onClick={handleAlternateCaseClick}
        >
          AlTeRnAtE Case
        </button>
        <button className="btn btn-primary ms-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary ms-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary ms-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary ms-1 my-1"
          onClick={handleDownloadTextClick}
        >
          Download Text
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
