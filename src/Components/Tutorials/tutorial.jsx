import React, { useEffect, useState } from "react";
import '../../css/Landing.css'
import Initial from "./initial";
import SggAPI from "./sggAPI";
import OBSchange from "./obschange"
import MatchTuto from "./MatchTuto";

const Tutorial = () => {
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
            case "match":
                setCurrentTutorial(<MatchTuto />);
                break;
            default:
                break;
        }

    }

    return (
        <>
            <div className="instructions">
                <h3>Select a tutorial to get Started</h3>
                <div className="themebuttons">
                    <button className="instructbutton" onClick={() => { HandleSelection("i"); }}>
                        Initial Setup
                    </button>
                    <button className="instructbutton" onClick={() => { HandleSelection("obs"); }}>
                        Basic Navigation
                    </button>
                    <button className="instructbutton" onClick={() => { HandleSelection("api"); }}>
                        Using the Start.GG API
                    </button>
                    <button className="instructbutton" onClick={() => { HandleSelection("match"); }}>
                        Using the Match Board
                    </button>
                </div>
                <div className="TutorialContain">{CurrentTutorial}</div>
            </div>
        </>
    );
}

export default Tutorial;