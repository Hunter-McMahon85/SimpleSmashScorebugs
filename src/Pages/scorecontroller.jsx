import React from "react";
import { Link } from "react-router-dom";
import Names from "../Components/namesinput";
import "../css/control.css"

function Controller() {
  let GM = "";

  let p1score = 0;
  let p2score = 0;
  localStorage.setItem("p1score", p1score);
  localStorage.setItem("p2score", p2score);

  function score(p, x) {
    if (p === 1) {
      p1score = p1score + x;
      localStorage.setItem("p1score", p1score);
    } else {
      p2score = p2score + x;
      localStorage.setItem("p2score", p2score);
    }
  }

  function reset_scores() {
    p1score = 0;
    p2score = 0;
    localStorage.setItem("p1score", p1score);
    localStorage.setItem("p2score", p2score);
  }


  const Show_MU = () => {
    GM = localStorage.getItem("gm");
    switch (GM) {
      case "D":
        localStorage.setItem("ScoreboardType", "doublestart");
        setTimeout(() => {
          localStorage.setItem("ScoreboardType", "double");
        }, 6000);
        break;
      case "S":
        localStorage.setItem("ScoreboardType", "singlestart");
        setTimeout(() => {
          localStorage.setItem("ScoreboardType", "single");
        }, 6000);
        break;
      default:
        localStorage.setItem("ScoreboardType", "h");
        break;
    }
  };

  return (
    <>
      <div className="UI_Contain">
      <Link to="/scorebugs">
          <button className="bugselect">
            Change Theme
          </button>
        </Link>
        <div className="scoring">
        <h2>Scoring</h2>
          <button onClick={() => score(1, 1)}>Win Player/Duo 1</button>

          <button onClick={() => score(2, 1)}>Win Player/Duo 2</button>

          <button onClick={() => reset_scores()}>Reset Score</button>
        </div>
        <p>*player/duo 1 will always be the leftmost or topmost tag on the scorebug</p>
        <h2>Scorebug Visuals</h2>
        <button onClick={() => Show_MU()}>Show Matchup</button>
        <br />
        <Names />
        <br />
      </div>
    </>
  );
}

export default Controller;
