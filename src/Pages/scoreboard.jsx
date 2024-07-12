import React, { useState, useEffect } from "react";
import NTZScoreBug from "../Components/NTZ/NTZscorebug";

function Scoreboard() {
  const BugTheme = localStorage.getItem("BugTheme");
  let ScoreBug;

  switch (BugTheme) {
    case "NTZ":
      ScoreboardComponent = (<NTZScoreBug/>);
      break;
    default:
      ScoreboardComponent = (<NTZScoreBug/>);
      break;
  }

  return (
    <>
      <div className="scoreboardcontain">{ScoreBug}</div>
    </>
  );
}

export default Scoreboard;
