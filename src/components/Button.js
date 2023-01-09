import React from "react";

export default function Button({ text, cb, color, wide }) {
  const style = {
    background: color,
    gridColumn: wide ? "span 2" : "unset",
    width: wide ? "105px" : "50px",
  };

  return (
    <button
      onClick={() => {
        cb();
      }}
      style={style}
      dataSign={text}
    >
      {text}
    </button>
  );
}
