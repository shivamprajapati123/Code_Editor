import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

import { RiCollapseDiagonalFill } from "react-icons/ri";
import { RiExpandDiagonalFill } from "react-icons/ri";
function Editor({ name, language, value, onChange }) {
  function HandleChange(editor, data, value) {
    onChange(value);
  }
  const [open, setOpen] = useState(true);
  return (
    <div className={`Editor_Container ${open ? " " : "collapse"}`}>
      <div className="title">
        {name}
        <button onClick={() => setOpen((x) => !x)}>
          {open ? (
            <RiCollapseDiagonalFill size="1rem" />
          ) : (
            <RiExpandDiagonalFill size="1rem" />
          )}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={HandleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
export default Editor;
