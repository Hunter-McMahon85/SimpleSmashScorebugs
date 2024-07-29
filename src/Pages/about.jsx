import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {

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
                <h2>About</h2>

                <div class="instructions">
                    <h3><u>Why this Utility works</u></h3>
                    <p>No matter if a website is added to OBS as a source or as a custom browser dock, OBS will behave like a single web browser window for both pages. Because of this, webpages added as custom browser docks to OBS can modify the state of a webpage added as a stream source by simply using the localStorage class in Javascript. In turn we are able to provide an simple and lightweight scorebug overlay solution that requires 0 downloads. This does come with the downside of not being usable offline. However considering that a livestream requires an internet connection, it is likely an edge case that will likely never be an huge issue</p>
                    <h3><u>History</u></h3>
                    <p>
                        This scoreboard was originally created for the University of Oregon (sco Ducks!) Duck Hunt series of
                        tournaments
                        (start.gg/dh if your ever in Eugene so come join us for some smash). This is the third revision of the
                        scoreboard
                        and is inspired by the player HUD elements of the original duck Hunt Game.
                    </p>

                    <h3>Creator</h3>
                    <p>
                        This is a solo project made by Hunter M.
                    </p>
                </div>
            </div>


        </>
    );
}

export default About;
