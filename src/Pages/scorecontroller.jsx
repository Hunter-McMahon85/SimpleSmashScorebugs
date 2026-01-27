import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Names from "../Components/Controller/namesinput";
import SQFetch from "../Components/Controller/StreamQueFetch";
import StartMsg from "../Components/Controller/StartPopup";
import "../css/control.css"

function Controller() {
  let GM = "";
  let p1score = 0;
  let p2score = 0;
  localStorage.setItem("p1score", p1score);
  localStorage.setItem("p2score", p2score);
  const [HideMSG, setHideMSG] = useState("Scorebug is Visible");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [showOps, setshowOps] = useState(false);

  const toggleOps = () => {
    setshowOps(!showOps);
  };


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

  const GMode = (x) => {
    localStorage.setItem("gm", x);
    if (x == "H") {
      setHideMSG("ScoreBug is Hidden, select Singles or Doubles To Unhide It")
    } else {
      setHideMSG("Scorebug is Visible")
    }
    Show_MU()
  };

  const setTheme = (T) => {
    localStorage.setItem("BugTheme", T);
  }

  useEffect(() => {
    // stuff to do on page open
    setPopUpOpen(true);
    GMode("S");
  }, []);

  return (
    <>
      {isPopUpOpen && (
        <StartMsg onClose={() => setPopUpOpen(false)} />
      )}
      <div className="UI_Contain">
        <p>*player/duo 1 will always be the leftmost or topmost tag on the scorebug</p>
        <h2>Scorebug Options <br /><button onClick={toggleOps}> {showOps ? 'Hide Options' : 'Show Options'}</button></h2>
        {showOps && (
          <div className="modcontain">
            <div className="mod">
              <Link to="/">
                <button className="bugselect">
                  Back To Website
                </button>
              </Link>
              <h3>Scorebug Theme </h3>
              <div className='InstructionContent'>
                <p className="modtxt">Select a scorebug by selecting a button below. To learn how to set up this utility, see the <Link to="/tutorials">tutorials</Link> page</p>
                <div className="themebuttons">
                  <button className="themebutton" onClick={() => setTheme("NTZ")}>
                    <img src="SBpreview/NTZpreview.PNG" alt="NTZ" className="button-image" />
                    No Tech Zone
                  </button>
                  <button className="themebutton" onClick={() => setTheme("DH")}>
                    <img src="SBpreview/DHpreview.PNG" alt="Duck Hunt" className="button-image" />
                    Duck Hunt
                  </button>
                </div>
              </div>
              <br />
              <button onClick={() => Show_MU()}>Show Match Intro</button>
              <button onClick={() => GMode("D")}>Doubles</button>
              <button onClick={() => GMode("S")}>Singles</button>
              <br />
              <p>{HideMSG}</p>
              <button onClick={() => GMode("H")}>Hide Scorebug</button>
              <br /><br />
              <button className="Cancel" onClick={toggleOps}>Close Settings</button>
            </div>
          </div>
        )}

        
        <h2>Scoring</h2>
        <div className="scoring">
          <button onClick={() => score(1, 1)}>Win Player/Duo 1</button>
          <button onClick={() => reset_scores()}>Reset Score</button>
          <button onClick={() => score(2, 1)}>Win Player/Duo 2</button>
        </div>
        <Names />
      </div>
    </>
  );
}

export default Controller;
