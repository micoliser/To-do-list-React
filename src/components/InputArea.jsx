import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(e) => {
          return props.change(e);
        }}
        type="text"
        value={props.text}
      />
      <button onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
