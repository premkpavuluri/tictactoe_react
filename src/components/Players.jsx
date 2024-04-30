import React from "react";
import Player from "./Player";

const Players = ({players, currentPlayerIndex}) => {
  const playerElements = players.map((player, index) => {
    const isActivePlayer = currentPlayerIndex === index;
    return <Player key={index} name={player.name} symbol={player.symbol} isActivePlayer={isActivePlayer}/>
  });

  return (
      <div className="players">
        {playerElements}
      </div>
  );
}

export default Players;