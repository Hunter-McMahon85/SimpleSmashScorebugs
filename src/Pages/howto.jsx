import React, { useEffect, useState } from "react";
import NavBar from "../Components/navbar";
import '../css/Landing.css'
import Initial from "../Components/pages/Tutorials/initial";
import SggAPI from "../Components/pages/Tutorials/sggAPI";
import OBSchange from "../Components/pages/Tutorials/obschange"
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
                <div class="title">
                    <h1>Simple Smash Scorebugs Tutorials</h1>
                </div>
                <NavBar></NavBar>

                <div className='content'>
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
                </div>
                <Foot></Foot>
            </div >
        </>
    );
}

export default HowToUse;