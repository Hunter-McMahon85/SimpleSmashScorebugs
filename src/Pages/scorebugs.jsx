import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

                <div class="instructions">
                    <div className='InstructionContent'>
                        <h4>Select a scorebug by selecting a button below. To learn how to set up this utility, see the <a href="howtouse">How to Use</a> page</h4>
                        <div className="themebuttons">
                            <Link to="/controller">
                                <button className="themebutton" onClick={() => { HandleSelection("NTZ"); }}>
                                    No Tech Zone
                                </button>
                            </Link>
                            <Link to="/controller">
                                <button className="themebutton" onClick={() => { HandleSelection("DH"); }}>
                                    Duck Hunt
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScorebugSelect;