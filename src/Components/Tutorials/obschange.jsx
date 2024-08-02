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
                <ol>
                    <li>From the controler page, click the button labeled "Change Theme", this will return you to the scorebug select page.</li>
                    <li>select a new theme</li>
                    <li>refresh the browser source page in the sources panel of OBS, the new singles scorebug for the theme should appear</li>
                </ol>
            </div>
        </>
    );
}

export default OBSchange;