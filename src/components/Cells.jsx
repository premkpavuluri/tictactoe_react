import React from "react";
import Cell from "./Cell";

const Cells = ({cells, handleMove}) => {
  const cellElements = cells.map((cell, index) => {
    return <Cell key={index} value={cell} position={index} handleMove={handleMove}/>
  });

  return <div className="cells">{cellElements}</div>;
}

export default Cells;