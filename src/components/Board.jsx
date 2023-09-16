import React, { useContext } from "react";
import { Letter } from "../Letter";
import { AppContext } from "../App";

export const Board = () => {
  const { board, setBoard } = useContext(AppContext);
  return (
    <div className="board">
      {board.map((row, i) => {
        return (
          <div className="row">
            <Letter letterPos={0} attemptVal={i} />
            <Letter letterPos={1} attemptVal={i} />
            <Letter letterPos={2} attemptVal={i} />
            <Letter letterPos={3} attemptVal={i} />
            <Letter letterPos={4} attemptVal={i} />
          </div>
        );
      })}
    </div>
  );
};
