import React, { useState, useEffect } from "react";
import Singles from "./singles.jsx";
import ScoreboardDuo from "./doubles.jsx";
import MatchStart1 from "./matchstart1.jsx";
import MatchStart2 from "./matchstart2.jsx";

function NTZScoreBug() {
  
  const [ScoreType, setScoreType] = useState("");
  const [PrevScoreType, setPrevScoreType] = useState("");

  const [ScoreBugVariant, setScoreBugVariant] = useState("");

  const reload = () => {
    setPrevScoreType(ScoreType);
    setScoreType(localStorage.getItem("ScoreboardType"));
    if (ScoreType !== PrevScoreType) {
      switch (ScoreType) {
        case "single":
          setScoreBugVariant(<ScoreboardSingle />);
          break;
        case "double":
          setScoreBugVariant(
            <ScoreboardDuo/>
          );
          break;
        case "singlestart":
          setScoreBugVariant(
            <MatchStart1/>
          );
          break;
        case "doublestart":
          setScoreBugVariant(
            <MatchStart2/>
          );
          break;
        default:
          setScoreBugVariant(<></>);
          break;
      }
    }
  };

  useEffect(() => {
    reload();
    const interval = setInterval(reload, 1);
    // this is so if this page is used as a component the interval ends
    // when the component is closed
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <div className="scoreboardcontain">{ScoreBugVariant}</div>
    </>
  );
}

export default NTZScoreBug;