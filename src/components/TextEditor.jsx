import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function TextEditor(props) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-3">Text Editor</h1>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>

      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mt-3">HTML Content</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}
