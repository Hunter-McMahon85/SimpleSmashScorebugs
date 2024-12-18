import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Landing.css'

const OBSchange = () => {
    return (
        <>
           <div className="initialcontain">
                <h3>
                    Changing the theme
                </h3>
                <iframe width="600" height="330" src="https://www.youtube.com/embed/BDE7UzaHht8?si=frPmyz2eiOc8QNuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <ol>
                    <li>From the controler page, click the button "Change Theme", this will return you to the Theme Selection page.</li>
                    <li>select/click on a new theme</li>
                    <li>refresh the browser source for the scorebug in the sources panel of OBS, the new scorebug theme should appear upon refresh</li>
                </ol>
            </div>
        </>
    );
}

export default OBSchange;