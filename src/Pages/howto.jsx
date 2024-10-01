import React, { useEffect, useState } from "react";
import NavBar from "../Components/navbar";
import '../css/Landing.css'
import Initial from "../Components/Tutorials/initial";
import SggAPI from "../Components/Tutorials/sggAPI";
import OBSchange from "../Components/Tutorials/obschange";
import Foot from "../Components/footer";

const HowToUse = () => {
    const [CurrentTutorial, setCurrentTutorial] = useState("");

    const HandleSelection = (B) => {
        switch (B) {
            case "i":
                setCurrentTutorial(<Initial />);
                break;
            case "obs":
                setCurrentTutorial(<OBSchange />);
                break;
            case "api":
                setCurrentTutorial(<SggAPI />);
                break;
            default:
                break;
        }

    }

    return (
        <>
            <div class="landcontain">
                <NavBar></NavBar>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2 className="ttitle">How To Use</h2>

                <div className="instructions">
                    <h3>Select a tutorial to get Started</h3>
                    <div className="themebuttons">
                        <button className="instructbutton" onClick={() => { HandleSelection("i"); }}>
                            Initial Setup
                        </button>
                        <button className="instructbutton" onClick={() => { HandleSelection("obs"); }}>
                            Changing Theme from OBS
                        </button>
                        <button className="instructbutton" onClick={() => { HandleSelection("api"); }}>
                            Using the Start.GG API
                        </button>
                    </div>

                    <div className="TutorialContain">{CurrentTutorial}</div>


                </div>
                <Foot></Foot>
            </div >
        </>
    );
}

export default HowToUse;