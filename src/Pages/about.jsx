import React, { useEffect, useState } from "react";

const About = () => {

    return (
        <>
            <div class="landcontain">
                <div class="navbar">
                    <nav class="topnav">
                        <ul class="navitems">
                            <li><a href="/">Home</a></li>
                            <li><a href="howtouse">How to Use</a></li>
                            <li><a href="scorebugs">Scorebugs</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>About</h2>

                <div class="instructions">
                    <h3><u>The Creation</u></h3>
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
