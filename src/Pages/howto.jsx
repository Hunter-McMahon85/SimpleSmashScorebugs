import React, { useEffect, useState } from "react";
import NavBar from "../Components/navbar";
import '../css/Landing.css'
import NTZScoreBug from "../Components/NTZ/NTZscorebug";

const HowToUse = () => {
    let CurrentTutorial;
    const HandleSelection = (B) => {
        CurrentTutorial = B;
    }

    return (
        <>
            <div class="landcontain">
                <NavBar></NavBar>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>How To Use</h2>

                <div class="instructions">
                    <div className="themebuttons">
                        <button className="instructbutton" onClick={() => { CurrentTutorial = <NTZScoreBug />; }}>
                            Initial Setup
                        </button>
                        <button className="instructbutton" onClick={() => { HandleSelection("DH"); }}>
                            Changing Theme from OBS
                        </button>
                        <button className="instructbutton" onClick={() => { HandleSelection("DH"); }}>
                            Using the Start.GG API
                        </button>
                    </div>
                    <div className="TutorialContain">{CurrentTutorial}</div>


                </div>
            </div >
        </>
    );
}

export default HowToUse;