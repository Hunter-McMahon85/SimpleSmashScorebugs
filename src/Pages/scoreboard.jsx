import React, { useState, useEffect } from "react";
import NTZScoreBug from "../Components/NTZ/NTZscorebug";
import DHScoreBug from "../Components/DuckHunt/DHscorebug";

const Scoreboard = () => {
  const BugTheme = localStorage.getItem("BugTheme");
  let ScoreBug;

  switch (BugTheme) {
    case "NTZ":
      ScoreBug = (<NTZScoreBug />);
      break;
    case "DH":
      ScoreBug = (<DHScoreBug />);
      break;
    default:
      ScoreBug = (<NTZScoreBug />);
      break;
  }

  return (
    <>
      <div className="scoreboardcontain">{ScoreBug}</div>
    </>
  );
}

export default Scoreboard;
