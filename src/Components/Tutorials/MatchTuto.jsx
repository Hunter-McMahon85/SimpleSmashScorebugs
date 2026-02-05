import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MatchTuto = () => {
    return (
        <>
            <div className="initialcontain">
                <h3>
                    MatchBoard
                </h3>
                <p>The match board is like an train or airport departure board but it displays all matches in a bracket that are marked as called. It also displays the timestamp of a match being called. This Utility can help enhance your event by providing a visible record of a match being called in the venue. Ideally you would display this window in browser on a large screen inside the venue</p>
                <ol>
                    <li>Scroll Down to the matchboard App section of simplesmashScorbugs.com</li>
                    <li>Click the login with start.gg button and login to your start.gg account</li>
                    <li>Enter the Slug or link for the specific event in the "Enter Event Slug Field".
                        <ul>
                            <li>NOTE: This uses link/slug is for the specific BRACKET in the event. Thus for a start.gg link: www.start.gg/tournament/tournament-name/event/event-name be sure to include at minnimum: tournament/tournament-name/event/event-name</li>
                        </ul>
                    </li>
                    <li>Click Submit. This will redirect you to the actual matchboard page. At this point the utility is setup and its a matter of waiting for matches to be marked as called on start.gg. We also recomend setting the browser window to fullscreen via the f11 key on your keyboard or similar.</li>
                    <li>If you are a Tournament Organizer, to mark matches as called on start.gg do the following: 
                        <ol>
                            <li>Click on a match</li>

                        </ol>
                    </li>
                </ol>
            </div>
        </>
    );
}

export default MatchTuto;