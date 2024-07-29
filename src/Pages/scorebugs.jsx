import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScorebugSelect = () => {
    const HandleSelection = (B) => {
        localStorage.setItem("BugTheme", B);
    }

    return (
        <>
            <div class="landcontain">
                <div class="navbar">
                    <nav class="topnav">
                        <ul class="navitems">
                        <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/howtouse">
                                    How to Use
                                </Link>
                            </li>
                            <li>
                                <Link to="/scorebugs">
                                    Scorebugs
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>ScoreBug Selection</h2>

                <div class="instructions">
                    <h4>Select a scorebug by selecting a button below. To learn how to set up this utility, see the <a href="howtouse">How to Use</a> page</h4>
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
        </>
    );
}

export default ScorebugSelect;