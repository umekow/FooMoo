import "react-quill/dist/quill.snow.css";
import "./editor.scss";

import React, { useState } from "react";
import ReactQuill from "react-quill";

import save_check from "./images/save_check.svg";

const Editor = (props) => {
  const [header, setHeader] = useState("Entry Title");
  const [text, setText] = useState("How are you feeling today?");
  const [mood, setMood] = useState();
  return (
    <div className="editorContainer">
      {/* header for journal entry  */}
      <div className="entryTop">
        <div className="entryHeader">
          <input type="text" placeholder={header} />
        </div>

        <div className="saveButton">
          {/* save icon */}
          <img src={save_check} alt="save " />
        </div>

        <div className="smileyDropDown">{/* smileyDropDown */}</div>
      </div>
      {/*text editor */}
      <ReactQuill
        style={{
          width: "100%",
          height: "500px",
          margin: "0 auto",
        }}
        theme="snow"
        value={text}
        onChange={setText}
      ></ReactQuill>
    </div>
  );
};

export default Editor;
