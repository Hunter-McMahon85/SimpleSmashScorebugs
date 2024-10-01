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
                <p>Pre-Requisite: Your start.gg account must have admin/moderator access to the tournament page</p>
                <ol>
                    <li>From the Score controller page, Click the "Login with Start.gg" button</li>
                    <li>sign into your start.gg account</li>
                    <li>Enter the tournament Slug. this can be found in the tournament URL as follows: https://www.start.gg/tournament/ <b>----SLUG----</b> /events</li>
                    <li>Enter the username of the twitch/youtube channel for your stream</li>
                    <li>Now you can click "Fetch From Stream Queue" to get tags from start.gg. Now all thats left is to ensure an tournament moderator adds the desired matchups to the stream queue on start.gg</li>
                </ol>
            </div>
        </>
    );
}

export default SggAPI;