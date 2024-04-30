import React from "react";

const Player = ({name, symbol, isActivePlayer}) => {
  const playerClass = isActivePlayer ? 'active' : '';
  return (
      <div className={playerClass}>
        <h2>{name}</h2>
        <span>{symbol}</span>
      </div>
  );
}

export default Player;