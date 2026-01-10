import React, { useState, useEffect } from "react";
import NTZScoreBug from "../Components/NTZ/NTZscorebug";
import DHScoreBug from "../Components/DuckHunt/DHscorebug";
import DefaultBug from "../Components/DefaultBug";

const Scoreboard = () => {
  const [BugTheme, setBugTheme] = useState(<DefaultBug />);
  // the following only runs once on page load
  useEffect(() => {localStorage.setItem("BugTheme", "DB")}, []); 
  

  window.addEventListener("storage", e => {
    if (e.key === "BugTheme") {
      let NewTheme = localStorage.getItem("BugTheme")
      switch (NewTheme) {
        case "NTZ":
          setBugTheme(<NTZScoreBug />);
          break;
        case "DH":
          setBugTheme(<DHScoreBug />);
          break;
        case "DB":
          setBugTheme(<DefaultBug />);
          break;
        default:
          setBugTheme(<DefaultBug />);
          break;
      }
    }
  });

  return (
    <>
      <div className="scoreboardcontain">{BugTheme}</div>
    </>
  );
}

export default Scoreboard;
