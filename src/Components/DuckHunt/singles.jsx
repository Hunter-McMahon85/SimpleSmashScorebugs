import React, { useEffect, useState } from "react";
import "../../css/DuckHunt/singles.css";

const Singles = () => {
  //this has to be done in every function because of the way conditional rendering is handled in scoreboard.js
  const [isAnimated, setIsAnimated] = useState(false);
  const [P11, setP11] = useState("");
  const [P21, setP21] = useState("");
  const [Pronoun11, setPronoun11] = useState("");
  const [Pronoun21, setPronoun21] = useState("");
  const [Char11, setChar11] = useState("");
  const [Char21, setChar21] = useState("");
  const [P1Score, setP1Score] = useState(0);
  const [P2Score, setP2Score] = useState(0);
  const [RoundName, setRoundName] = useState("");
  const [PoolName, setPoolName] = useState("");

  const reload = () => {
    setP11(localStorage.getItem("p11"));
    setP21(localStorage.getItem("p21"));

    setPronoun11(localStorage.getItem("Pronoun11"));
    setPronoun21(localStorage.getItem("Pronoun21"));

    setChar11(localStorage.getItem("Char11"));
    setChar21(localStorage.getItem("Char21"));

    setP1Score(localStorage.getItem("p1score"));
    setP2Score(localStorage.getItem("p2score"));
    setRoundName(localStorage.getItem("round"));
    setPoolName(localStorage.getItem("pool"));
  };

  useEffect(() => {
    // Trigger animation after component is mounted
    setIsAnimated(true);

    reload();
    const interval = setInterval(reload, 1);
    return () => {
      clearInterval(interval);
    };
  }, [isAnimated]);

  return (
    <>
      <div className={`DHsinglecontain ${isAnimated ? "slide-in" : ""}`}>
        <div className="DHsingleoverlay">

          <div className="DHgamer">
            <h1 className="DHscore">{P1Score}</h1>
            <h1 className="DHtag">{P11}</h1>
            <h1 className="DHpronoun">{Pronoun11}</h1>
            <img src={Char11} alt="" />
          </div>

          <div className="DHinfo">
            <h4>{RoundName}</h4>
            <h4 className="DHpool">{PoolName}</h4>
          </div>

          <div className="DHgamer">
            <img src={Char21} alt="" />
            <h1 className="DHtag">{P21}</h1>
            <h1 className="DHpronoun">{Pronoun21}</h1>
            <h1 className="DHscore">{P2Score}</h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default Singles;
