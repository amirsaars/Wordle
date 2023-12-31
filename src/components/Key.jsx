import React, { useContext } from "react";
import { AppContext } from "../App";

export const Key = ({ keyVal, bigKey = false, disabled }) => {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter({ keyVal: keyVal });
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};
