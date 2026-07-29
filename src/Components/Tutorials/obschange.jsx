import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OBSchange = () => {
    return (
        <>
           <div className="initialcontain">
                <h3>
                    Basic Navigation
                </h3>
                <iframe width="600" height="330" src="https://www.youtube.com/embed/BDE7UzaHht8?si=frPmyz2eiOc8QNuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <ul>
                    <li>To Change the Theme
                        <ol>
                            <li>Click on "Scorebug Options"</li>
                            <li>Click on a theme</li>
                            <li>Watch the new theme will appear in the browser Source in your stream</li>
                            <li>Click "Close Settings" and scorekeep</li>
                        </ol>
                    </li>
                    <li>select/click on a new theme</li>  
                </ul>
            </div>
        </>
    );
}

export default OBSchange;