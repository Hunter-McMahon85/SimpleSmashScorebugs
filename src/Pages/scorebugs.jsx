import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Foot from "../Components/footer";
import NavBar from "../Components/navbar";
import '../css/Landing.css'

const ScorebugSelect = () => {
    const HandleSelection = (B) => {
        localStorage.setItem("BugTheme", B);
    }

    return (
        <>
            <div class="landcontain">
                <NavBar></NavBar>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>ScoreBug Selection</h2>

                <div className='content'>
                    <div class="instructions">
                        <div className='InstructionContent'>
                            <h4>Select a scorebug by selecting a button below. To learn how to set up this utility, see the <Link to="/howtouse">How to Use</Link> page</h4>
                            <div className="themebuttons">
                                <Link to="/controller">
                                    <button className="themebutton" onClick={() => { HandleSelection("NTZ"); }}>
                                        <img src="SBpreview/NTZpreview.PNG" alt="NTZ" className="button-image" />
                                        No Tech Zone
                                    </button>
                                </Link>
                                <Link to="/controller">
                                    <button className="themebutton" onClick={() => { HandleSelection("DH"); }}>
                                        <img src="SBpreview/DHpreview.PNG" alt="Duck Hunt" className="button-image" />
                                        Duck Hunt
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        </>
    );
}

export default ScorebugSelect;