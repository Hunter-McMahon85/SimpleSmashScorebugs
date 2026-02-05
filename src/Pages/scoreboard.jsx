import React, { useState, useEffect } from "react";
import DefaultBug from "../Components/overlays/DefaultBug";
import NTZScoreBug from "../Components/overlays/NTZ/ntzscorebug";
import DHScoreBug from "../Components/overlays/DuckHunt/dhscorebug";

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
