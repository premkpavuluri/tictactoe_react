import React from "react";

const Cell = ({value, position, handleMove}) => {
  return <div className="cell" onClick={value === '' ? () => handleMove(position) : null}>{value}</div>;
}

export default Cell;