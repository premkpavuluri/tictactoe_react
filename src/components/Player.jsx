import React from "react";

const Player = ({name, symbol, isActivePlayer}) => {
  const playerClass = isActivePlayer ? 'active' : '';
  return (
      <div className={`player ${playerClass}`}>
        <h2>{name}</h2>
        <h3>{':' + symbol}</h3>
      </div>
  );
}

export default Player;