import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar";
import '../css/Landing.css'

const HowToUse = () => {

    return (
        <>
            <div class="landcontain">
                <NavBar></NavBar>
                <div class="title">
                    <h1>SIMPLE SMASH SCOREBUGS</h1>
                </div>
                <h2>How To Use</h2>

                <div class="instructions">
                    <p>Initial Setup</p>
                    <p>Changing Theme from OBS</p>
                    <p>Using the Start.GG API</p>

                    <p>The Gist of this Setup is that you will be adding an controller webpage to OBS as a custom browser Dock and a scoreboard page as a source in OBS</p>
                    <p>Step 1. Add the scorebugs page to OBS as a custom browser dock</p>
                    <p>Step 2. Add the page /scoreboard to OBS as a browser Source</p>
                    <p>Step 3. select a scorebugs page, this will open the controller page. at this point, refresh the browser source for the scoreboard page</p>
                </div>
            </div>
        </>
    );
}

export default HowToUse;