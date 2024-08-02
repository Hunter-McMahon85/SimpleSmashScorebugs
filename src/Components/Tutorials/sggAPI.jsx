import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Landing.css'

const SggAPI = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    Ussing the start.gg API
                </h3>
                <p>Having moderator/admin access to the start.gg tournament is a pre-requisite to using this</p>
                <p>Note, Start.gg has added the ability to use oauth for api request, this was not a feature when I made this utility. I may make a revision to use oauth for the stream queue tool</p>
                <ol>
                    <li></li>
                    <li>select a new theme</li>
                    <li>refresh the browser source page in the sources panel of OBS</li>
                </ol>
            </div>
        </>
    );
}

export default SggAPI;